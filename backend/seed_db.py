"""Import seed_questions.json into the PostgreSQL seed_questions table."""
import asyncio
import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))

from database import engine, async_session
from models import Base, SeedQuestion


async def seed():
    # Create tables
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    seed_file = Path(__file__).parent / "prompts" / "seed_questions.json"
    with open(seed_file) as f:
        questions = json.load(f)

    async with async_session() as db:
        # Check if already seeded
        from sqlalchemy import select, func
        result = await db.execute(select(func.count()).select_from(SeedQuestion))
        existing = result.scalar()
        if existing > 0:
            print(f"Bank already has {existing} questions. Skipping seed import.")
            return

        for q in questions:
            correct = q["correct_answer"]
            if isinstance(correct, list):
                correct_str = json.dumps(correct)
            else:
                correct_str = correct

            seed = SeedQuestion(
                question_text=q["question_text"],
                options=q["options"],
                correct_answer=correct_str,
                explanation=q.get("explanation", ""),
                source=q.get("source", "pdf_extracted"),
                has_html=q.get("has_html", False),
                multi_select=q.get("multi_select", 0),
                category=q.get("category", ""),
                question_type=q.get("question_type", "conceptual"),
            )
            db.add(seed)

        await db.commit()
        print(f"Seeded {len(questions)} questions into the bank ✅")

    await engine.dispose()


if __name__ == "__main__":
    asyncio.run(seed())
