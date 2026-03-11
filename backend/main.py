from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from database import engine, async_session
from models import Base
from config import Settings
from routers import quiz, history, settings, auth


@asynccontextmanager
async def lifespan(app: FastAPI):
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    # Auto-seed on first run
    from sqlalchemy import select, func
    from models import SeedQuestion
    async with async_session() as db:
        result = await db.execute(select(func.count()).select_from(SeedQuestion))
        count = result.scalar()
        if count == 0:
            import json
            from pathlib import Path
            seed_file = Path(__file__).parent / "prompts" / "seed_questions.json"
            if seed_file.exists():
                with open(seed_file) as f:
                    questions = json.load(f)
                for q in questions:
                    correct = q["correct_answer"]
                    if isinstance(correct, list):
                        correct = json.dumps(correct)
                    db.add(SeedQuestion(
                        question_text=q["question_text"],
                        options=q["options"],
                        correct_answer=correct,
                        explanation=q.get("explanation", ""),
                        source=q.get("source", "pdf_extracted"),
                        has_html=q.get("has_html", False),
                        multi_select=q.get("multi_select", 0),
                        category=q.get("category", ""),
                        question_type=q.get("question_type", "conceptual"),
                    ))
                await db.commit()
                print(f"Auto-seeded {len(questions)} questions into bank")
    # Seed admin user into DB if none exists
    from services.user_service import ensure_admin_exists
    async with async_session() as db:
        await ensure_admin_exists(db)
    yield
    await engine.dispose()


app = FastAPI(title="ISTQB Quiz API", version="1.0.0", lifespan=lifespan)

_settings = Settings()
_cors_origins = (
    ["*"] if _settings.cors_origins.strip() == "*"
    else [o.strip() for o in _settings.cors_origins.split(",") if o.strip()]
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=_cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(quiz.router, prefix="/api/quiz", tags=["quiz"], dependencies=[Depends(auth.require_auth)])
app.include_router(history.router, prefix="/api", tags=["history"], dependencies=[Depends(auth.require_auth)])
app.include_router(settings.router, prefix="/api/settings", tags=["settings"], dependencies=[Depends(auth.require_auth)])


@app.get("/api/health")
async def health():
    return {"status": "ok"}
