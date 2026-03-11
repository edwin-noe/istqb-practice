from pydantic_settings import BaseSettings
from functools import lru_cache


class Settings(BaseSettings):
    openai_api_key: str
    database_url: str  # async: postgresql+asyncpg://...
    database_url_sync: str = ""  # sync: for alembic
    openai_model: str = "gpt-4o"
    quiz_size: int = 40
    pass_mark: int = 65

    model_config = {"env_file": ".env"}


@lru_cache
def get_settings() -> Settings:
    return Settings()
