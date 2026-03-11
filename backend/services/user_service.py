"""
User credential service.

Storage strategy (defence-in-depth):
  - Username  → AES-256 / Fernet encrypted   (reversible, needed for display)
  - Password  → bcrypt hashed                (one-way, never stored in plaintext)
  - Lookup    → SHA-256 of plaintext username (fast index without decrypting)

On first startup, `ensure_admin_exists()` seeds the initial user from env vars
(ADMIN_USERNAME / ADMIN_PASSWORD).  After seeding those env vars are no longer
needed — credentials live exclusively in the database.
"""

import hashlib
import os

import bcrypt
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from crypto import encrypt, decrypt
from models import User


# ── helpers ───────────────────────────────────────────────────────────────────

def _username_lookup_hash(username: str) -> str:
    """Deterministic SHA-256 hex of the plaintext username — used as a fast lookup index."""
    return hashlib.sha256(username.strip().lower().encode()).hexdigest()


def hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()


def verify_password(password: str, hashed: str) -> bool:
    return bcrypt.checkpw(password.encode(), hashed.encode())


# ── DB helpers ────────────────────────────────────────────────────────────────

async def get_user_by_username(db: AsyncSession, username: str) -> User | None:
    lookup = _username_lookup_hash(username)
    result = await db.execute(select(User).where(User.username_lookup_hash == lookup))
    return result.scalar_one_or_none()


async def create_user(db: AsyncSession, username: str, password: str) -> User:
    user = User(
        username_encrypted=encrypt(username),
        username_lookup_hash=_username_lookup_hash(username),
        password_hash=hash_password(password),
    )
    db.add(user)
    await db.commit()
    await db.refresh(user)
    return user


async def update_password(db: AsyncSession, user: User, new_password: str) -> None:
    user.password_hash = hash_password(new_password)
    await db.commit()


async def get_decrypted_username(user: User) -> str:
    return decrypt(user.username_encrypted)


# ── Bootstrap ─────────────────────────────────────────────────────────────────

async def ensure_admin_exists(db: AsyncSession) -> None:
    """
    Called at startup. If no users exist, seeds the first admin from env vars.
    Falls back to 'admin' / 'admin123' if env vars are not set.
    """
    result = await db.execute(select(User))
    if result.scalars().first() is not None:
        return  # users already exist

    username = os.getenv("ADMIN_USERNAME", "admin")
    password = os.getenv("ADMIN_PASSWORD", "admin123")

    await create_user(db, username, password)
    print(f"[auth] Seeded initial admin user: {username}")
