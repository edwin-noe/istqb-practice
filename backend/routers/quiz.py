import json
import logging
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from database import get_db
from models import QuizSession, GeneratedQuestion, UserAnswer, SeedQuestion
from schemas import (
    QuizGenerateRequest, QuizGenerateResponse, QuestionOut,
    QuizSubmitRequest, QuizSubmitResponse, ReviewItem,
    WeakAreaRequest, WeaknessResponse, CategoryStat,
    BankQuestionOut, BankQuestionsResponse,
)
from services.generator import pick_quiz_from_bank, generate_weak_area_questions, expand_bank, get_bank_stats
from services.weakness import update_weakness, get_weakness_summary
from config import get_settings

logger = logging.getLogger(__name__)
router = APIRouter()


@router.post("/generate", response_model=QuizGenerateResponse)
async def generate_quiz(db: AsyncSession = Depends(get_db)):
    """Generate a 40-question quiz from the question bank (instant)."""
    settings = get_settings()
    count = settings.quiz_size

    questions = await pick_quiz_from_bank(db, count)
    if len(questions) < 10:
        raise HTTPException(status_code=400, detail=f"Not enough questions in bank ({len(questions)}). Need at least 10.")

    # Create quiz session
    session = QuizSession(quiz_type="new", total=len(questions))
    db.add(session)
    await db.flush()

    # Store as generated questions (links to this session)
    question_records = []
    for i, q in enumerate(questions):
        correct = q["correct_answer"]
        if isinstance(correct, list):
            correct_str = json.dumps(correct)
        else:
            correct_str = correct

        gq = GeneratedQuestion(
            session_id=session.id,
            order_index=i,
            question_text=q["question_text"],
            options=q["options"],
            correct_answer=correct_str,
            explanation=q.get("explanation", ""),
            multi_select=q.get("multi_select", 0),
            has_diagram=q.get("has_diagram", False),
            category=q.get("category", ""),
            difficulty=q.get("difficulty", "medium"),
        )
        db.add(gq)
        question_records.append(gq)

    await db.commit()
    await db.refresh(session)

    out_questions = [
        QuestionOut(
            id=str(gq.id),
            order_index=gq.order_index,
            question_text=gq.question_text,
            options=gq.options,
            multi_select=gq.multi_select,
            has_diagram=gq.has_diagram,
            category=gq.category,
        )
        for gq in question_records
    ]

    return QuizGenerateResponse(session_id=str(session.id), questions=out_questions)


@router.post("/submit", response_model=QuizSubmitResponse)
async def submit_quiz(req: QuizSubmitRequest, db: AsyncSession = Depends(get_db)):
    """Submit quiz answers for scoring."""
    # Load session with questions
    result = await db.execute(
        select(QuizSession)
        .where(QuizSession.id == req.session_id)
        .options(selectinload(QuizSession.questions))
    )
    session = result.scalar_one_or_none()
    if not session:
        raise HTTPException(status_code=404, detail="Quiz session not found")

    correct_count = 0
    incorrect_count = 0
    unanswered_count = 0
    review_items = []

    for gq in session.questions:
        qid = str(gq.id)
        user_ans = req.answers.get(qid)

        # Parse correct answer
        try:
            correct_parsed = json.loads(gq.correct_answer)
        except (json.JSONDecodeError, TypeError):
            correct_parsed = gq.correct_answer

        # Determine correctness
        is_correct = False
        if user_ans is None:
            unanswered_count += 1
        elif gq.multi_select > 0:
            correct_set = set(correct_parsed) if isinstance(correct_parsed, list) else {correct_parsed}
            user_set = set(user_ans) if isinstance(user_ans, list) else {user_ans}
            is_correct = correct_set == user_set
            if is_correct:
                correct_count += 1
            else:
                incorrect_count += 1
        else:
            user_str = user_ans[0] if isinstance(user_ans, list) else user_ans
            correct_str = correct_parsed[0] if isinstance(correct_parsed, list) else correct_parsed
            is_correct = user_str == correct_str
            if is_correct:
                correct_count += 1
            else:
                incorrect_count += 1

        # Save answer
        is_flagged = qid in req.flagged_questions
        answer = UserAnswer(
            session_id=session.id,
            question_id=gq.id,
            user_answer=json.dumps(user_ans) if isinstance(user_ans, list) else user_ans,
            is_correct=is_correct,
            is_flagged=is_flagged,
        )
        db.add(answer)

        review_items.append(ReviewItem(
            question_id=qid,
            question_text=gq.question_text,
            options=gq.options,
            correct_answer=correct_parsed,
            user_answer=user_ans,
            is_correct=is_correct,
            is_flagged=is_flagged,
            explanation=gq.explanation,
            multi_select=gq.multi_select,
            category=gq.category,
        ))

    total = len(session.questions)
    score = round((correct_count / total) * 100) if total > 0 else 0
    passed = score >= get_settings().pass_mark

    session.score = score
    session.status = "completed"
    session.time_seconds = req.time_seconds
    session.passed = passed

    # Update weakness tracker
    await db.flush()
    await update_weakness(db, session.id)
    await db.commit()

    minutes = req.time_seconds // 60
    secs = req.time_seconds % 60

    return QuizSubmitResponse(
        score=score,
        correct=correct_count,
        incorrect=incorrect_count,
        unanswered=unanswered_count,
        total=total,
        passed=passed,
        time_taken=f"{minutes:02d}:{secs:02d}",
        review=review_items,
    )


@router.post("/weak", response_model=QuizGenerateResponse)
async def generate_weak_quiz(
    req: WeakAreaRequest, db: AsyncSession = Depends(get_db)
):
    """Generate a quiz targeting weak areas. Hybrid: bank first, LLM supplement."""
    from services.generator import pick_quiz_from_bank_filtered

    summary_text, stats = await get_weakness_summary(db)
    if not summary_text:
        raise HTTPException(status_code=400, detail="No quiz history yet. Take a quiz first!")

    questions = []
    target_categories = req.categories if req.categories else None

    # Hybrid: try bank first for selected categories
    if target_categories:
        bank_qs = await pick_quiz_from_bank_filtered(db, target_categories, req.count)
        questions.extend(bank_qs)

    remaining = req.count - len(questions)

    # Supplement with LLM if bank didn't provide enough
    if remaining > 0:
        # Build focused summary for selected categories only
        if target_categories:
            filtered_summary = "\n".join(
                line for line in summary_text.split("\n")
                if any(cat.lower() in line.lower() for cat in target_categories)
            )
            if not filtered_summary:
                filtered_summary = summary_text
        else:
            filtered_summary = summary_text

        try:
            llm_qs = await generate_weak_area_questions(filtered_summary, remaining, db)
            questions.extend(llm_qs)
        except Exception as e:
            logger.error(f"Weak area LLM generation failed: {e}")
            if not questions:
                raise HTTPException(status_code=500, detail=f"Failed to generate: {str(e)}")

    if not questions:
        raise HTTPException(status_code=400, detail="No questions available for the selected categories.")

    session = QuizSession(quiz_type="weak_area", total=len(questions))
    db.add(session)
    await db.flush()

    question_records = []
    for i, q in enumerate(questions):
        correct = q["correct_answer"]
        if isinstance(correct, list):
            correct_str = json.dumps(correct)
        else:
            correct_str = correct

        gq = GeneratedQuestion(
            session_id=session.id,
            order_index=i,
            question_text=q["question_text"],
            options=q["options"],
            correct_answer=correct_str,
            explanation=q.get("explanation", ""),
            multi_select=q.get("multi_select", 0),
            has_diagram=q.get("has_diagram", False),
            category=q.get("category", ""),
            difficulty=q.get("difficulty", "medium"),
        )
        db.add(gq)
        question_records.append(gq)

    await db.commit()

    out_questions = [
        QuestionOut(
            id=str(gq.id),
            order_index=gq.order_index,
            question_text=gq.question_text,
            options=gq.options,
            multi_select=gq.multi_select,
            has_diagram=gq.has_diagram,
            category=gq.category,
        )
        for gq in question_records
    ]

    return QuizGenerateResponse(
        session_id=str(session.id),
        questions=out_questions,
    )


@router.get("/weakness", response_model=WeaknessResponse)
async def get_weakness(db: AsyncSession = Depends(get_db)):
    """Get weakness analysis dashboard data."""
    _, stats = await get_weakness_summary(db)

    total_seen = sum(s["total_seen"] for s in stats)
    total_correct = sum(s["total_correct"] for s in stats)
    overall_accuracy = round(total_correct / total_seen * 100, 1) if total_seen > 0 else 0

    return WeaknessResponse(
        categories=[CategoryStat(**s) for s in stats],
        total_seen=total_seen,
        overall_accuracy=overall_accuracy,
    )


@router.get("/bank/stats")
async def bank_stats(db: AsyncSession = Depends(get_db)):
    """Get question bank statistics."""
    stats = await get_bank_stats(db)
    return stats


@router.post("/bank/expand")
async def bank_expand_endpoint(batch_size: int = 25, db: AsyncSession = Depends(get_db)):
    """Generate new questions via LLM and add them to the bank."""
    if batch_size < 5 or batch_size > 50:
        raise HTTPException(status_code=400, detail="batch_size must be between 5 and 50")
    try:
        added = await expand_bank(db, batch_size)
        stats = await get_bank_stats(db)
        return {"added": added, "bank": stats}
    except Exception as e:
        logger.error(f"Bank expansion failed: {e}")
        raise HTTPException(status_code=500, detail=f"Failed to expand bank: {str(e)}")


@router.get("/bank/questions", response_model=BankQuestionsResponse)
async def bank_questions(
    page: int = 1,
    page_size: int = 20,
    search: str = "",
    category: str = "",
    content_type: str = "",
    db: AsyncSession = Depends(get_db),
):
    """Browse all questions in the seed bank."""
    from sqlalchemy import func

    query = select(SeedQuestion)
    count_query = select(func.count(SeedQuestion.id))

    if search:
        query = query.where(SeedQuestion.question_text.ilike(f"%{search}%"))
        count_query = count_query.where(SeedQuestion.question_text.ilike(f"%{search}%"))
    if category:
        query = query.where(SeedQuestion.category == category)
        count_query = count_query.where(SeedQuestion.category == category)
    if content_type:
        query = query.where(SeedQuestion.question_type == content_type)
        count_query = count_query.where(SeedQuestion.question_type == content_type)

    total_result = await db.execute(count_query)
    total = total_result.scalar() or 0

    query = query.order_by(SeedQuestion.id).offset((page - 1) * page_size).limit(page_size)
    result = await db.execute(query)
    rows = result.scalars().all()

    return BankQuestionsResponse(
        questions=[BankQuestionOut.model_validate(r) for r in rows],
        total=total,
        page=page,
        page_size=page_size,
    )
