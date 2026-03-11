import logging
from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from database import get_db
from models import AppSetting
from crypto import encrypt, decrypt, mask

logger = logging.getLogger(__name__)
router = APIRouter()

AVAILABLE_MODELS = [
    {"id": "gpt-5.4", "name": "GPT-5.4", "description": "Best for diagrams & complex questions"},
    {"id": "gpt-4o", "name": "GPT-4o", "description": "Great balance of quality & speed"},
    {"id": "gpt-4o-mini", "name": "GPT-4o Mini", "description": "Fast & cost-effective"},
    {"id": "gpt-4-turbo", "name": "GPT-4 Turbo", "description": "High quality, slower"},
    {"id": "o4-mini", "name": "o4-mini", "description": "Reasoning model, compact"},
]

DEFAULT_MODEL = "gpt-4o"
DIAGRAM_MODEL = "gpt-5.4"


class ModelUpdateRequest(BaseModel):
    model: str


class ApiKeyRequest(BaseModel):
    key: str
    label: str = "default"


@router.get("/")
async def get_settings(db: AsyncSession = Depends(get_db)):
    """Get all settings (API keys are masked)."""
    result = await db.execute(select(AppSetting))
    rows = result.scalars().all()

    settings_dict: dict = {
        "model": DEFAULT_MODEL,
        "diagram_model": DIAGRAM_MODEL,
        "api_keys": [],
    }

    for row in rows:
        if row.key == "openai_model":
            settings_dict["model"] = row.value
        elif row.key == "diagram_model":
            settings_dict["diagram_model"] = row.value
        elif row.key.startswith("api_key:"):
            label = row.key.split(":", 1)[1]
            real_val = decrypt(row.value) if row.is_encrypted else row.value
            settings_dict["api_keys"].append({
                "label": label,
                "masked_key": mask(real_val),
                "updated_at": row.updated_at.isoformat() if row.updated_at else None,
            })

    # If no DB keys, check if there's an env-based key
    if not settings_dict["api_keys"]:
        import os
        env_key = os.getenv("OPENAI_API_KEY", "")
        if env_key:
            settings_dict["api_keys"].append({
                "label": "default (env)",
                "masked_key": mask(env_key),
                "updated_at": None,
            })

    settings_dict["available_models"] = AVAILABLE_MODELS
    return settings_dict


@router.put("/model")
async def update_model(req: ModelUpdateRequest, db: AsyncSession = Depends(get_db)):
    """Update the preferred LLM model."""
    valid_ids = [m["id"] for m in AVAILABLE_MODELS]
    if req.model not in valid_ids:
        raise HTTPException(status_code=400, detail=f"Invalid model. Choose from: {valid_ids}")

    setting = await db.get(AppSetting, "openai_model")
    if setting:
        setting.value = req.model
    else:
        db.add(AppSetting(key="openai_model", value=req.model))

    await db.commit()
    return {"model": req.model, "message": "Model updated"}


@router.put("/diagram-model")
async def update_diagram_model(req: ModelUpdateRequest, db: AsyncSession = Depends(get_db)):
    """Update the model used for diagram/graph generation."""
    valid_ids = [m["id"] for m in AVAILABLE_MODELS]
    if req.model not in valid_ids:
        raise HTTPException(status_code=400, detail=f"Invalid model. Choose from: {valid_ids}")

    setting = await db.get(AppSetting, "diagram_model")
    if setting:
        setting.value = req.model
    else:
        db.add(AppSetting(key="diagram_model", value=req.model))

    await db.commit()
    return {"diagram_model": req.model, "message": "Diagram model updated"}


@router.put("/api-key")
async def upsert_api_key(req: ApiKeyRequest, db: AsyncSession = Depends(get_db)):
    """Add or update an API key (stored encrypted)."""
    if not req.key.startswith("sk-"):
        raise HTTPException(status_code=400, detail="Invalid API key format (should start with sk-)")

    db_key = f"api_key:{req.label}"
    setting = await db.get(AppSetting, db_key)
    encrypted_val = encrypt(req.key)

    if setting:
        setting.value = encrypted_val
        setting.is_encrypted = True
    else:
        db.add(AppSetting(key=db_key, value=encrypted_val, is_encrypted=True))

    await db.commit()
    return {"label": req.label, "masked_key": mask(req.key), "message": "API key saved"}


@router.delete("/api-key/{label}")
async def delete_api_key(label: str, db: AsyncSession = Depends(get_db)):
    """Delete an API key."""
    db_key = f"api_key:{label}"
    setting = await db.get(AppSetting, db_key)
    if not setting:
        raise HTTPException(status_code=404, detail="API key not found")

    await db.delete(setting)
    await db.commit()
    return {"message": f"API key '{label}' deleted"}


async def get_active_api_key(db: AsyncSession) -> str:
    """Resolve the active API key: DB first, then env fallback."""
    result = await db.execute(
        select(AppSetting).where(AppSetting.key.like("api_key:%"))
    )
    row = result.scalars().first()
    if row:
        return decrypt(row.value) if row.is_encrypted else row.value

    import os
    env_key = os.getenv("OPENAI_API_KEY", "")
    if env_key:
        return env_key

    raise HTTPException(status_code=400, detail="No API key configured. Add one in Settings.")


async def get_active_model(db: AsyncSession) -> str:
    """Get the user-selected model from DB, or default."""
    setting = await db.get(AppSetting, "openai_model")
    return setting.value if setting else DEFAULT_MODEL


async def get_diagram_model_name(db: AsyncSession) -> str:
    """Get the model used for diagram generation."""
    setting = await db.get(AppSetting, "diagram_model")
    return setting.value if setting else DIAGRAM_MODEL
