# ISTQB CTFL v4.0 — AI-Powered Practice Exam

A full-stack quiz application for practicing the **ISTQB Certified Tester Foundation Level v4.0** exam. Features 249 seed questions from official ISTQB sample exams, AI-generated targeted practice, weakness tracking, and a clean Apple-inspired UI.

![Quiz Screenshot](docs/screenshot.png)

---

## Features

- 🚀 **40-question quizzes** pulled instantly from a curated bank of 249 official ISTQB questions
- 🎯 **Practice Weak Areas** — choose specific categories or let AI generate targeted questions based on your performance history
- 🚩 **Flag questions** during the quiz to review later; filter results by Unsure/Wrong/Correct
- 📊 **Weakness tracking** — per-category accuracy bars and history across all quiz attempts
- 📖 **Question Bank browser** — search, filter by category, content type
- 🤖 **AI-powered expansion** — generate new questions on demand via GPT
- ⚙️ **Settings** — manage OpenAI API keys (encrypted), choose LLM model
- 🌐 **Fully Dockerized** — one command to run locally or deploy anywhere

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 18 + Vite + TypeScript |
| Backend | Python 3.12 + FastAPI + Uvicorn |
| Database | PostgreSQL 16 |
| ORM | SQLAlchemy 2.0 (async) |
| AI | OpenAI GPT-4o / GPT-5.4 |
| Containerization | Docker + Docker Compose |

---

## Quick Start

### Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running
- An [OpenAI API key](https://platform.openai.com/api-keys)

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/istqb-quiz.git
cd istqb-quiz
```

### 2. Create your environment file

```bash
cp .env.example .env
```

Edit `.env` and fill in your values:

```env
OPENAI_API_KEY=sk-...your-key-here...
ENCRYPTION_SECRET=any-random-secret-string-you-choose
```

### 3. Start the app

```bash
docker compose up -d
```

The first run builds images and seeds all 249 questions automatically (~1 minute).

### 4. Open the app

- **Quiz app**: [http://localhost:3000](http://localhost:3000)
- **API docs**: [http://localhost:8000/docs](http://localhost:8000/docs)

---

## Environment Variables

Create a `.env` file in the project root (never commit this file):

| Variable | Required | Description |
|----------|----------|-------------|
| `OPENAI_API_KEY` | Yes* | Your OpenAI API key for AI-generated quizzes |
| `ENCRYPTION_SECRET` | No | Secret for encrypting stored API keys (defaults to a dev value) |

> *The app runs without an API key, but "Practice Weak Areas" (LLM generation) and "Add Questions via AI" will fail. The 249 seed questions always work without any API key.

---

## Usage

### Taking a Quiz
1. Click **Start New Quiz** — 40 random questions from the bank
2. Use 🏳️ to **flag** questions you're unsure about
3. Click **Review & Submit** to see your question grid before submitting
4. View results filtered by **All / Wrong / Correct / Unsure**

### Practicing Weak Areas
1. After completing at least one quiz, click **Practice Weak Areas**
2. A category picker shows your accuracy per topic — select specific categories or leave empty for all weak areas
3. Questions are pulled from the bank first (instant); AI supplements if needed

### Question Bank
- Browse all 249 questions with search and category filters
- Filter by content type (diagram questions, conceptual, etc.)

### Settings
- Add/remove OpenAI API keys (stored encrypted)
- Choose which GPT model to use for question generation

---

## Project Structure

```
.
├── docker-compose.yml
├── .env.example
├── backend/
│   ├── Dockerfile
│   ├── requirements.txt
│   ├── main.py              # FastAPI app entry point
│   ├── models.py            # SQLAlchemy database models
│   ├── schemas.py           # Pydantic request/response schemas
│   ├── config.py            # App configuration
│   ├── database.py          # Async DB session
│   ├── seed_db.py           # Seeds 249 questions on startup
│   ├── routers/
│   │   ├── quiz.py          # Quiz generation, submission, weak areas
│   │   ├── history.py       # Attempt history
│   │   └── settings.py      # API key & model management
│   ├── services/
│   │   ├── generator.py     # LLM question generation + bank queries
│   │   └── weakness.py      # Weakness tracking & scoring
│   └── prompts/
│       ├── seed_questions.json   # 249 official ISTQB questions
│       ├── quiz_system.txt       # LLM system prompt for generation
│       └── weak_system.txt       # LLM prompt for weak-area targeting
└── frontend/
    ├── Dockerfile
    ├── package.json
    └── src/
        ├── App.tsx              # Screen router
        ├── api.ts               # API client functions + types
        ├── components/
        │   ├── Home.tsx         # Dashboard, weakness bars, history
        │   ├── Quiz.tsx         # Quiz session, flagging, review grid
        │   ├── Question.tsx     # Individual question + flag button
        │   ├── Results.tsx      # Score, filters (All/Wrong/Correct/Unsure)
        │   ├── QuestionBank.tsx # Browse all questions
        │   ├── CategoryPickerModal.tsx  # Weak area category selector
        │   └── Settings.tsx     # API key & model settings
        └── styles/
            └── app.css          # Apple-inspired light theme
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/quiz/generate` | Generate 40-question quiz from bank |
| `POST` | `/api/quiz/submit` | Submit answers, get score + review |
| `POST` | `/api/quiz/weak` | Generate weakness-targeted quiz |
| `GET` | `/api/quiz/weakness` | Weakness profile per category |
| `GET` | `/api/quiz/bank/questions` | Browse question bank (paginated) |
| `GET` | `/api/history` | Quiz attempt history |
| `GET/PUT` | `/api/settings/` | App settings |

---

## Database

PostgreSQL with these tables:

- **`seed_questions`** — The 249-question bank (seeded on startup)
- **`quiz_sessions`** — Each quiz attempt
- **`generated_questions`** — Questions served per session
- **`user_answers`** — User's answer per question, with `is_flagged` support
- **`weakness_tracker`** — Per-category accuracy statistics
- **`app_settings`** — Encrypted API keys, model preferences

### Resetting the database

```bash
docker compose down
docker volume rm istqb-quiz_pgdata
docker compose up -d
```

---

## Deploying Online

### Option A: DigitalOcean Droplet (Recommended — $6/mo)

1. Create a Ubuntu 22.04 droplet
2. Install Docker: `curl -fsSL https://get.docker.com | sh`
3. Clone this repo on the server
4. Create your `.env` with production secrets
5. Run `docker compose up -d`

### Option B: Railway

1. Push to GitHub
2. Connect Railway to your repo
3. Add environment variables in Railway dashboard
4. Railway detects `docker-compose.yml` and deploys automatically

---

## Question Sources

The 249 seed questions are sourced from official ISTQB sample exams:
- ASTQB Sample Exam 3 & 4 (v4.0, Sept 2023)
- ISTQB Sample Exams A, B, C, D (v4.0, 2024–2025)

All questions have been audited for accuracy — truncated options restored, OCR artifacts fixed, and answer keys verified against source PDFs.

---

## License

This project is for personal study purposes. ISTQB® and CTFL® are registered trademarks of the International Software Testing Qualifications Board.
