"""
Hybrid question generation:
- Regular quizzes: pull randomly from the question bank (seed_questions table)
- Weak-area quizzes: LLM generates targeted questions in real-time
- Bank expansion: LLM generates batches to grow the bank on demand
- Diagram-heavy questions use a dedicated model (default: gpt-5.4)
"""

import json
import random
import logging
from pathlib import Path
from sqlalchemy import select, func
from sqlalchemy.ext.asyncio import AsyncSession
from openai import AsyncOpenAI
from config import get_settings
from models import SeedQuestion

logger = logging.getLogger(__name__)

PROMPTS_DIR = Path(__file__).parent.parent / "prompts"


async def _get_client_and_model(db: AsyncSession, for_diagrams: bool = False):
    """Resolve API key and model from DB settings, with env fallback."""
    from routers.settings import get_active_api_key, get_active_model, get_diagram_model_name
    api_key = await get_active_api_key(db)
    if for_diagrams:
        model = await get_diagram_model_name(db)
    else:
        model = await get_active_model(db)
    client = AsyncOpenAI(api_key=api_key)
    return client, model


async def pick_quiz_from_bank(db: AsyncSession, count: int = 40) -> list[dict]:
    """Pick random questions from the question bank for a regular quiz."""
    result = await db.execute(
        select(SeedQuestion).order_by(func.random()).limit(count)
    )
    rows = result.scalars().all()

    if len(rows) < count:
        logger.warning(f"Bank has only {len(rows)} questions, requested {count}")

    questions = []
    for row in rows:
        correct = row.correct_answer
        try:
            correct = json.loads(correct)
        except (json.JSONDecodeError, TypeError):
            pass

        questions.append({
            "id": row.id,
            "question_text": row.question_text,
            "options": row.options,
            "correct_answer": correct,
            "explanation": row.explanation or "",
            "multi_select": row.multi_select,
            "has_diagram": row.has_html,
            "category": row.category or "Fundamentals of Testing",
            "difficulty": "medium",
        })

    return questions


async def pick_quiz_from_bank_filtered(
    db: AsyncSession, categories: list[str], count: int = 40
) -> list[dict]:
    """Pick random questions from bank filtered by category."""
    from sqlalchemy import or_

    filters = [SeedQuestion.category.ilike(f"%{cat}%") for cat in categories]
    result = await db.execute(
        select(SeedQuestion)
        .where(or_(*filters))
        .order_by(func.random())
        .limit(count)
    )
    rows = result.scalars().all()

    questions = []
    for row in rows:
        correct = row.correct_answer
        try:
            correct = json.loads(correct)
        except (json.JSONDecodeError, TypeError):
            pass

        questions.append({
            "id": row.id,
            "question_text": row.question_text,
            "options": row.options,
            "correct_answer": correct,
            "explanation": row.explanation or "",
            "multi_select": row.multi_select,
            "has_diagram": row.has_html,
            "category": row.category or "Fundamentals of Testing",
            "difficulty": "medium",
        })

    return questions


async def get_bank_stats(db: AsyncSession) -> dict:
    """Get statistics about the question bank."""
    total = await db.execute(select(func.count()).select_from(SeedQuestion))
    total_count = total.scalar()

    by_cat = await db.execute(
        select(SeedQuestion.category, func.count())
        .group_by(SeedQuestion.category)
    )
    categories = {cat: cnt for cat, cnt in by_cat.all()}

    return {"total": total_count, "categories": categories}


async def expand_bank(db: AsyncSession, batch_size: int = 25) -> int:
    """Generate new questions via LLM and add them to the bank."""
    client, model = await _get_client_and_model(db, for_diagrams=True)

    system_prompt_template = (PROMPTS_DIR / "quiz_system.txt").read_text()
    seed_examples = await _pick_seed_examples_from_db(db)
    system_prompt = system_prompt_template.format(
        count=batch_size,
        seed_questions=seed_examples,
    )

    logger.info(f"Expanding bank: generating {batch_size} questions via {model}...")

    response = await client.chat.completions.create(
        model=model,
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": f'Generate {batch_size} unique ISTQB CTFL v4.0 exam questions. Return a JSON object: {{"questions": [...]}}'},
        ],
        temperature=0.9,
        max_completion_tokens=16000,
        response_format={"type": "json_object"},
    )

    raw = response.choices[0].message.content
    questions = _parse_llm_response(raw)
    validated = _validate_questions(questions, batch_size)

    added = 0
    for q in validated:
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
            source="llm_generated",
            has_html=q.get("has_diagram", False),
            multi_select=q.get("multi_select", 0),
            category=q.get("category", "Fundamentals of Testing"),
            question_type="generated",
        )
        db.add(seed)
        added += 1

    await db.commit()
    logger.info(f"Added {added} new questions to bank")
    return added


async def generate_weak_area_questions(
    weakness_summary: str, count: int = 20, db: AsyncSession = None
) -> list[dict]:
    """Generate questions targeting weak areas via LLM (real-time)."""
    if db:
        client, model = await _get_client_and_model(db, for_diagrams=True)
    else:
        settings = get_settings()
        client = AsyncOpenAI(api_key=settings.openai_api_key)
        model = settings.openai_model

    system_prompt_template = (PROMPTS_DIR / "weak_system.txt").read_text()
    system_prompt = system_prompt_template.format(
        weakness_summary=weakness_summary,
        count=count,
    )

    response = await client.chat.completions.create(
        model=model,
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": f'Generate {count} targeted practice questions for my weak areas. Return a JSON object: {{"questions": [...]}}'},
        ],
        temperature=0.85,
        max_completion_tokens=12000,
        response_format={"type": "json_object"},
    )

    raw = response.choices[0].message.content
    questions = _parse_llm_response(raw)
    return _validate_questions(questions, count)


# --- Helpers ---

async def _pick_seed_examples_from_db(db: AsyncSession, n: int = 8) -> str:
    """Select diverse seed questions from DB as few-shot examples."""
    result = await db.execute(
        select(SeedQuestion).order_by(func.random()).limit(n * 2)
    )
    seeds = result.scalars().all()

    picks = random.sample(list(seeds), min(n, len(seeds)))
    examples = []
    for q in picks:
        examples.append({
            "question_text": q.question_text[:500],
            "options": q.options,
            "correct_answer": q.correct_answer,
            "explanation": (q.explanation or "")[:300],
            "multi_select": q.multi_select,
            "has_diagram": q.has_html,
        })
    return json.dumps(examples, indent=2, ensure_ascii=False)


def _parse_llm_response(raw: str) -> list[dict]:
    """Parse LLM JSON response into a list of question dicts."""
    parsed = json.loads(raw)
    if isinstance(parsed, dict):
        if "questions" in parsed:
            return parsed["questions"]
        elif "data" in parsed:
            return parsed["data"]
        elif "question_text" in parsed:
            return [parsed]
        else:
            for v in parsed.values():
                if isinstance(v, list):
                    return v
            return []
    elif isinstance(parsed, list):
        return parsed
    raise ValueError(f"Unexpected response format: {type(parsed)}")


def _validate_questions(questions: list[dict], expected: int) -> list[dict]:
    """Validate and normalize question format."""
    validated = []
    for i, q in enumerate(questions):
        try:
            opts = q.get("options", {})
            if len(opts) < 4:
                continue

            multi = q.get("multi_select", 0)
            correct = q.get("correct_answer", "a")

            if multi > 0:
                if isinstance(correct, str):
                    correct = [correct]
                if not isinstance(correct, list) or len(correct) != multi:
                    continue
            else:
                if isinstance(correct, list):
                    correct = correct[0] if correct else "a"

            validated.append({
                "question_text": q.get("question_text", ""),
                "options": opts,
                "correct_answer": correct,
                "explanation": q.get("explanation", ""),
                "multi_select": multi,
                "has_diagram": q.get("has_diagram", False),
                "category": q.get("category", "Fundamentals of Testing"),
                "difficulty": q.get("difficulty", "medium"),
            })
        except Exception as e:
            logger.warning(f"Skipping invalid question {i}: {e}")
            continue

    if len(validated) < expected:
        logger.warning(f"Only {len(validated)}/{expected} valid questions generated")

    return validated
