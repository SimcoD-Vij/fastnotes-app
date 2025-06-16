from pydantic_settings import BaseSettings
from pydantic import Field

import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    secret_key: str = os.getenv("SECRET_KEY", "your-dev-secret")
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 30
    database_url: str = os.getenv("DATABASE_URL", "sqlite:///./notes.db")

settings = Settings()
