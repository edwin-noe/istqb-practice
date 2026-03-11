"""Simple Fernet encryption for API keys stored in the database."""

import os
import base64
import hashlib
from cryptography.fernet import Fernet

_KEY: bytes | None = None


def _get_key() -> bytes:
    global _KEY
    if _KEY is None:
        secret = os.getenv("ENCRYPTION_SECRET", "istqb-quiz-default-secret-change-me")
        _KEY = base64.urlsafe_b64encode(hashlib.sha256(secret.encode()).digest())
    return _KEY


def encrypt(plaintext: str) -> str:
    f = Fernet(_get_key())
    return f.encrypt(plaintext.encode()).decode()


def decrypt(ciphertext: str) -> str:
    f = Fernet(_get_key())
    return f.decrypt(ciphertext.encode()).decode()


def mask(value: str) -> str:
    if len(value) <= 8:
        return "••••••••"
    return "••••••••" + value[-4:]
