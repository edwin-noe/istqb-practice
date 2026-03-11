from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from database import get_db
from models import QuizSession
from schemas import HistoryResponse, HistoryItem

router = APIRouter()


@router.get("/history", response_model=HistoryResponse)
async def get_history(db: AsyncSession = Depends(get_db)):
    """Get quiz attempt history."""
    result = await db.execute(
        select(QuizSession)
        .where(QuizSession.status == "completed")
        .order_by(QuizSession.created_at.desc())
        .limit(50)
    )
    sessions = result.scalars().all()

    attempts = [
        HistoryItem(
            session_id=str(s.id),
            date=s.created_at.isoformat(),
            quiz_type=s.quiz_type,
            score=s.score,
            total=s.total,
            passed=s.passed,
            time_seconds=s.time_seconds,
        )
        for s in sessions
    ]

    return HistoryResponse(attempts=attempts)
