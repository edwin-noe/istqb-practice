"""
Authentication router — login, TOTP setup/verify, JWT issuance.

Flow:
  1. POST /auth/login        → verify username + password (from DB) → returns { totp_required, setup_required }
  2. GET  /auth/totp/setup   → generate TOTP secret + QR code (first-time setup)
  3. POST /auth/totp/verify  → verify 6-digit code → returns JWT access token
  GET  /auth/me              → returns current user (requires JWT)
"""

import base64
import io
import os
from datetime import datetime, timedelta, timezone

import pyotp
import qrcode
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from jose import JWTError, jwt
from pydantic import BaseModel
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from config import Settings, get_settings
from database import get_db
from models import AppSetting
from services.user_service import get_user_by_username, verify_password

router = APIRouter()
bearer_scheme = HTTPBearer(auto_error=False)

_TOTP_KEY = "totp_secret"


# ── Helpers ───────────────────────────────────────────────────────────────────

async def _load_totp_secret(db: AsyncSession) -> str | None:
    result = await db.execute(select(AppSetting).where(AppSetting.key == _TOTP_KEY))
    row = result.scalar_one_or_none()
    return row.value if row else None


async def _save_totp_secret(db: AsyncSession, secret: str) -> None:
    result = await db.execute(select(AppSetting).where(AppSetting.key == _TOTP_KEY))
    row = result.scalar_one_or_none()
    if row:
        row.value = secret
    else:
        db.add(AppSetting(key=_TOTP_KEY, value=secret, is_encrypted=False))
    await db.commit()


def _create_jwt(username: str, settings: Settings) -> str:
    expire = datetime.now(timezone.utc) + timedelta(minutes=settings.jwt_expire_minutes)
    return jwt.encode(
        {"sub": username, "exp": expire},
        settings.app_secret_key,
        algorithm=settings.jwt_algorithm,
    )


# ── Schemas ───────────────────────────────────────────────────────────────────

class LoginRequest(BaseModel):
    username: str
    password: str


class LoginResponse(BaseModel):
    totp_required: bool
    setup_required: bool


class TotpVerifyRequest(BaseModel):
    code: str


class TotpSetupResponse(BaseModel):
    qr_code_base64: str
    secret: str


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"


class MeResponse(BaseModel):
    username: str


# ── JWT dependency ────────────────────────────────────────────────────────────

async def require_auth(
    credentials: HTTPAuthorizationCredentials | None = Depends(bearer_scheme),
    settings: Settings = Depends(get_settings),
) -> str:
    if not credentials:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Not authenticated")
    try:
        payload = jwt.decode(credentials.credentials, settings.app_secret_key, algorithms=[settings.jwt_algorithm])
        username: str = payload.get("sub", "")
        if not username:
            raise ValueError("empty sub")
        return username
    except (JWTError, ValueError):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid or expired token")


# ── Endpoints ─────────────────────────────────────────────────────────────────

@router.post("/login", response_model=LoginResponse)
async def login(
    body: LoginRequest,
    db: AsyncSession = Depends(get_db),
):
    """Step 1: verify username + password from database."""
    user = await get_user_by_username(db, body.username)
    if not user or not verify_password(body.password, user.password_hash):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")

    secret = await _load_totp_secret(db)
    return LoginResponse(totp_required=True, setup_required=(secret is None))


@router.get("/totp/setup", response_model=TotpSetupResponse)
async def totp_setup(
    db: AsyncSession = Depends(get_db),
    settings: Settings = Depends(get_settings),
):
    """Generate (or return existing) TOTP secret and QR code for Microsoft Authenticator."""
    secret = await _load_totp_secret(db)
    if secret is None:
        secret = pyotp.random_base32()
        await _save_totp_secret(db, secret)

    totp = pyotp.TOTP(secret)
    uri = totp.provisioning_uri(name="ISTQB Quiz", issuer_name="ISTQB Quiz App")

    img = qrcode.make(uri)
    buf = io.BytesIO()
    img.save(buf, format="PNG")
    qr_b64 = base64.b64encode(buf.getvalue()).decode()

    return TotpSetupResponse(qr_code_base64=qr_b64, secret=secret)


@router.post("/totp/verify", response_model=TokenResponse)
async def totp_verify(
    body: TotpVerifyRequest,
    db: AsyncSession = Depends(get_db),
    settings: Settings = Depends(get_settings),
):
    """Step 2: verify 6-digit TOTP code → issue JWT."""
    secret = await _load_totp_secret(db)
    if not secret:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="TOTP not set up yet")

    totp = pyotp.TOTP(secret)
    if not totp.verify(body.code.strip(), valid_window=1):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid or expired code")

    username = os.getenv("ADMIN_USERNAME", "admin")
    token = _create_jwt(username, settings)
    return TokenResponse(access_token=token)


@router.get("/me", response_model=MeResponse)
async def me(username: str = Depends(require_auth)):
    return MeResponse(username=username)

