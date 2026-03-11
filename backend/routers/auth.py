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
import json
from datetime import datetime, timedelta, timezone
from pathlib import Path

import pyotp
import qrcode
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from jose import JWTError, jwt
from pydantic import BaseModel
from sqlalchemy.ext.asyncio import AsyncSession

from config import Settings, get_settings
from database import get_db
from services.user_service import get_user_by_username, verify_password, get_decrypted_username

router = APIRouter()
bearer_scheme = HTTPBearer(auto_error=False)

TOTP_SECRET_FILE = Path(__file__).parent.parent / "data" / "totp_secret.json"


# ── Helpers ───────────────────────────────────────────────────────────────────

def _load_totp_secret() -> str | None:
    if TOTP_SECRET_FILE.exists():
        return json.loads(TOTP_SECRET_FILE.read_text()).get("secret")
    return None


def _save_totp_secret(secret: str) -> None:
    TOTP_SECRET_FILE.parent.mkdir(parents=True, exist_ok=True)
    TOTP_SECRET_FILE.write_text(json.dumps({"secret": secret}))


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

    secret = _load_totp_secret()
    return LoginResponse(totp_required=True, setup_required=(secret is None))


@router.get("/totp/setup", response_model=TotpSetupResponse)
async def totp_setup(
    settings: Settings = Depends(get_settings),
):
    """Generate (or return existing) TOTP secret and QR code for Microsoft Authenticator."""
    secret = _load_totp_secret()
    if secret is None:
        secret = pyotp.random_base32()
        _save_totp_secret(secret)

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
    secret = _load_totp_secret()
    if not secret:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="TOTP not set up yet")

    totp = pyotp.TOTP(secret)
    if not totp.verify(body.code.strip(), valid_window=1):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid or expired code")

    # Get the actual username from DB to embed in JWT
    # We use a generic admin lookup since TOTP is global (single-user app)
    import os
    username = os.getenv("ADMIN_USERNAME", "admin")
    token = _create_jwt(username, settings)
    return TokenResponse(access_token=token)


@router.get("/me", response_model=MeResponse)
async def me(username: str = Depends(require_auth)):
    return MeResponse(username=username)

