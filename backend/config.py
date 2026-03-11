from pydantic_settings import BaseSettings
from functools import lru_cache


class Settings(BaseSettings):
    openai_api_key: str
    database_url: str
    database_url_sync: str = ""
    openai_model: str = "gpt-4o"
    quiz_size: int = 40
    pass_mark: int = 65

    # Auth — used only for first-time DB seeding; credentials live in DB after that
    admin_username: str = "admin"
    admin_password: str = "admin123"

    # JWT
    app_secret_key: str = "change-me-in-production"
    jwt_algorithm: str = "HS256"
    jwt_expire_minutes: int = 60 * 8

    # CORS — comma-separated list of allowed origins (e.g. https://myapp.railway.app)
    cors_origins: str = "*"

    model_config = {"env_file": ".env"}


@lru_cache
def get_settings() -> Settings:
    return Settings()
