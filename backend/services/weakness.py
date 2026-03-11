import json
from datetime import datetime, timezone
from sqlalchemy import select, func
from sqlalchemy.ext.asyncio import AsyncSession
from models import UserAnswer, GeneratedQuestion, WeaknessTracker


async def update_weakness(db: AsyncSession, session_id) -> None:
    """Recompute weakness scores after a quiz submission."""
    # Get all answers for this session with their question categories
    stmt = (
        select(GeneratedQuestion.category, UserAnswer.is_correct)
        .join(GeneratedQuestion, UserAnswer.question_id == GeneratedQuestion.id)
        .where(UserAnswer.session_id == session_id)
    )
    result = await db.execute(stmt)
    rows = result.all()

    # Aggregate per category
    cat_stats: dict[str, dict] = {}
    for category, is_correct in rows:
        if not category:
            category = "Uncategorized"
        if category not in cat_stats:
            cat_stats[category] = {"seen": 0, "correct": 0, "wrong": 0}
        cat_stats[category]["seen"] += 1
        if is_correct:
            cat_stats[category]["correct"] += 1
        else:
            cat_stats[category]["wrong"] += 1

    # Upsert weakness tracker
    for category, stats in cat_stats.items():
        existing = await db.execute(
            select(WeaknessTracker).where(WeaknessTracker.category == category)
        )
        tracker = existing.scalar_one_or_none()

        if tracker:
            tracker.total_seen += stats["seen"]
            tracker.total_correct += stats["correct"]
            tracker.total_wrong += stats["wrong"]
        else:
            tracker = WeaknessTracker(
                category=category,
                total_seen=stats["seen"],
                total_correct=stats["correct"],
                total_wrong=stats["wrong"],
            )
            db.add(tracker)

        # Weakness score: higher = weaker (0-100 scale)
        total = tracker.total_seen
        if total > 0:
            accuracy = tracker.total_correct / total
            tracker.weakness_score = round((1 - accuracy) * 100, 1)
        tracker.last_seen = datetime.now(timezone.utc)

    await db.flush()


async def get_weakness_summary(db: AsyncSession) -> tuple[str, list[dict]]:
    """Get weakness summary for LLM prompt and dashboard."""
    result = await db.execute(
        select(WeaknessTracker)
        .where(WeaknessTracker.total_seen > 0)
        .order_by(WeaknessTracker.weakness_score.desc())
    )
    trackers = result.scalars().all()

    if not trackers:
        return "", []

    summary_lines = []
    stats = []
    for t in trackers:
        accuracy = (t.total_correct / t.total_seen * 100) if t.total_seen > 0 else 0
        summary_lines.append(
            f"- {t.category}: {accuracy:.0f}% accuracy "
            f"({t.total_correct}/{t.total_seen} correct), "
            f"weakness score: {t.weakness_score}"
        )
        stats.append({
            "category": t.category,
            "total_seen": t.total_seen,
            "total_correct": t.total_correct,
            "accuracy": round(accuracy, 1),
            "weakness_score": t.weakness_score,
        })

    summary_text = "\n".join(summary_lines)
    return summary_text, stats
