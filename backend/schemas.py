from __future__ import annotations
import uuid
from datetime import datetime
from pydantic import BaseModel


# --- Quiz Generation ---

class QuizGenerateRequest(BaseModel):
    pass  # no params needed for a standard quiz


class QuestionOut(BaseModel):
    id: str
    order_index: int
    question_text: str
    options: dict[str, str]
    multi_select: int
    has_diagram: bool
    category: str

    model_config = {"from_attributes": True}


class QuizGenerateResponse(BaseModel):
    session_id: str
    questions: list[QuestionOut]


# --- Quiz Submit ---

class QuizSubmitRequest(BaseModel):
    session_id: str
    answers: dict[str, str | list[str] | None]  # question_id -> answer
    time_seconds: int
    flagged_questions: list[str] = []  # question IDs the user flagged as unsure


class ReviewItem(BaseModel):
    question_id: str
    question_text: str
    options: dict[str, str]
    correct_answer: str | list[str]
    user_answer: str | list[str] | None
    is_correct: bool
    is_flagged: bool = False
    explanation: str
    multi_select: int
    category: str


class QuizSubmitResponse(BaseModel):
    score: int
    correct: int
    incorrect: int
    unanswered: int
    total: int
    passed: bool
    time_taken: str
    review: list[ReviewItem]


# --- Weakness ---

class WeakAreaRequest(BaseModel):
    count: int = 40
    categories: list[str] = []  # optional category filter; empty = all weak areas


class CategoryStat(BaseModel):
    category: str
    total_seen: int
    total_correct: int
    accuracy: float
    weakness_score: float


class WeaknessResponse(BaseModel):
    categories: list[CategoryStat]
    total_seen: int
    overall_accuracy: float


# --- History ---

class HistoryItem(BaseModel):
    session_id: str
    date: str
    quiz_type: str
    score: int | None
    total: int
    passed: bool | None
    time_seconds: int | None

    model_config = {"from_attributes": True}


class HistoryResponse(BaseModel):
    attempts: list[HistoryItem]


# --- Bank Browser ---

class BankQuestionOut(BaseModel):
    id: int
    question_text: str
    options: dict[str, str]
    correct_answer: str
    explanation: str
    multi_select: int
    has_html: bool
    category: str
    question_type: str
    source: str

    model_config = {"from_attributes": True}


class BankQuestionsResponse(BaseModel):
    questions: list[BankQuestionOut]
    total: int
    page: int
    page_size: int
