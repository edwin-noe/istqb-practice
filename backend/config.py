from pydantic_settings import BaseSettings
from functools import lru_cache


class Settings(BaseSettings):
    openai_api_key: str
    database_url: str  # async: postgresql+asyncpg://...
    database_url_sync: str = ""  # sync: for alembic
    openai_model: str = "gpt-4o"
    quiz_size: int = 40
    pass_mark: int = 65

    # Auth
    admin_username: str = "admin"
    admin_password_hash: str  # bcrypt hash; generate with: python -c "from passlib.hash import bcrypt; print(bcrypt.hash('yourpassword'))"
    app_secret_key: str  # random secret for JWT signing; generate with: openssl rand -hex 32
    jwt_algorithm: str = "HS256"
    jwt_expire_minutes: int = 60 * 8  # 8 hours

    model_config = {"env_file": ".env"}


@lru_cache
def get_settings() -> Settings:
    return Settings()
