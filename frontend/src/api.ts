const BASE = import.meta.env.DEV ? 'http://localhost:8000/api' : '/api';

// ── Auth helpers ──────────────────────────────────────────────────────────────

function getToken(): string | null {
  return localStorage.getItem('istqb_jwt');
}

function authHeaders(extra: Record<string, string> = {}): Record<string, string> {
  const token = getToken();
  return token
    ? { Authorization: `Bearer ${token}`, ...extra }
    : { ...extra };
}

async function apiFetch(input: string, init: RequestInit = {}): Promise<Response> {
  const res = await fetch(input, {
    ...init,
    headers: { ...authHeaders(), ...(init.headers as Record<string, string> || {}) },
  });
  if (res.status === 401) {
    localStorage.removeItem('istqb_jwt');
    window.location.href = '/';
  }
  return res;
}

// Auth API
export async function apiLogin(username: string, password: string): Promise<{ totp_required: boolean; setup_required: boolean }> {
  const res = await fetch(`${BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function apiGetTotpSetup(): Promise<{ qr_code_base64: string; secret: string }> {
  const res = await fetch(`${BASE}/auth/totp/setup`);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function apiVerifyTotp(code: string): Promise<{ access_token: string }> {
  const res = await fetch(`${BASE}/auth/totp/verify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code }),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

// ── Quiz API ──────────────────────────────────────────────────────────────────

export async function generateQuiz(): Promise<QuizGenerateResponse> {
  const res = await apiFetch(`${BASE}/quiz/generate`, { method: 'POST' });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function submitQuiz(payload: QuizSubmitPayload): Promise<QuizSubmitResponse> {
  const res = await apiFetch(`${BASE}/quiz/submit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function generateWeakQuiz(count: number, categories: string[] = []): Promise<QuizGenerateResponse> {
  const res = await apiFetch(`${BASE}/quiz/weak`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ count, categories }),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function getWeakness(): Promise<WeaknessResponse> {
  const res = await apiFetch(`${BASE}/quiz/weakness`);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function getBankStats(): Promise<BankStats> {
  const res = await apiFetch(`${BASE}/quiz/bank/stats`);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function expandBank(batchSize: number = 25): Promise<{ added: number; bank: BankStats }> {
  const res = await apiFetch(`${BASE}/quiz/bank/expand?batch_size=${batchSize}`, { method: 'POST' });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function getHistory(): Promise<HistoryResponse> {
  const res = await apiFetch(`${BASE}/history`);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function getBankQuestions(
  page: number = 1,
  pageSize: number = 20,
  search: string = '',
  category: string = '',
  contentType: string = '',
): Promise<BankQuestionsResponse> {
  const params = new URLSearchParams({
    page: String(page),
    page_size: String(pageSize),
  });
  if (search) params.set('search', search);
  if (category) params.set('category', category);
  if (contentType) params.set('content_type', contentType);
  const res = await apiFetch(`${BASE}/quiz/bank/questions?${params}`);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

// --- Settings API ---

export async function getSettings(): Promise<AppSettings> {
  const res = await apiFetch(`${BASE}/settings/`);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function updateModel(model: string): Promise<void> {
  const res = await apiFetch(`${BASE}/settings/model`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ model }),
  });
  if (!res.ok) throw new Error(await res.text());
}

export async function updateDiagramModel(model: string): Promise<void> {
  const res = await apiFetch(`${BASE}/settings/diagram-model`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ model }),
  });
  if (!res.ok) throw new Error(await res.text());
}

export async function upsertApiKey(key: string, label: string = 'default'): Promise<void> {
  const res = await apiFetch(`${BASE}/settings/api-key`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ key, label }),
  });
  if (!res.ok) throw new Error(await res.text());
}

export async function deleteApiKey(label: string): Promise<void> {
  const res = await apiFetch(`${BASE}/settings/api-key/${encodeURIComponent(label)}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error(await res.text());
}

// Types
export interface QuestionOut {
  id: string;
  order_index: number;
  question_text: string;
  options: Record<string, string>;
  multi_select: number;
  has_diagram: boolean;
  category: string;
}

export interface QuizGenerateResponse {
  session_id: string;
  questions: QuestionOut[];
}

export interface QuizSubmitPayload {
  session_id: string;
  answers: Record<string, string | string[] | null>;
  time_seconds: number;
  flagged_questions: string[];
}

export interface ReviewItem {
  question_id: string;
  question_text: string;
  options: Record<string, string>;
  correct_answer: string | string[];
  user_answer: string | string[] | null;
  is_correct: boolean;
  is_flagged: boolean;
  explanation: string;
  multi_select: number;
  category: string;
}

export interface QuizSubmitResponse {
  score: number;
  correct: number;
  incorrect: number;
  unanswered: number;
  total: number;
  passed: boolean;
  time_taken: string;
  review: ReviewItem[];
}

export interface CategoryStat {
  category: string;
  total_seen: number;
  total_correct: number;
  accuracy: number;
  weakness_score: number;
}

export interface WeaknessResponse {
  categories: CategoryStat[];
  total_seen: number;
  overall_accuracy: number;
}

export interface BankStats {
  total: number;
  categories: Record<string, number>;
}

export interface HistoryItem {
  session_id: string;
  date: string;
  quiz_type: string;
  score: number | null;
  total: number;
  passed: boolean | null;
  time_seconds: number | null;
}

export interface HistoryResponse {
  attempts: HistoryItem[];
}

export interface BankQuestionItem {
  id: number;
  question_text: string;
  options: Record<string, string>;
  correct_answer: string;
  explanation: string;
  multi_select: number;
  has_html: boolean;
  category: string;
  question_type: string;
  source: string;
}

export interface BankQuestionsResponse {
  questions: BankQuestionItem[];
  total: number;
  page: number;
  page_size: number;
}

export interface ModelOption {
  id: string;
  name: string;
  description: string;
}

export interface ApiKeyEntry {
  label: string;
  masked_key: string;
  updated_at: string | null;
}

export interface AppSettings {
  model: string;
  diagram_model: string;
  api_keys: ApiKeyEntry[];
  available_models: ModelOption[];
}

