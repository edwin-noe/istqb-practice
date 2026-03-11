/**
 * Formats plain-text explanations into structured HTML for display.
 * Handles common patterns: option breakdowns (a/b/c/d), bullet points,
 * numbered lists, newline-separated paragraphs, and bold labels.
 */
export function formatExplanation(text: string): string {
  if (!text) return '';

  const lines = text.split(/\n/);
  const htmlParts: string[] = [];
  let currentParagraph: string[] = [];

  function flushParagraph() {
    if (currentParagraph.length === 0) return;
    const joined = currentParagraph.join(' ').trim();
    if (joined) {
      htmlParts.push(`<p>${joined}</p>`);
    }
    currentParagraph = [];
  }

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      continue;
    }

    // Option verdict: "a) Is correct..." or "a) TC2 — Correct..."
    const optionMatch = line.match(/^([a-eA-E])\)\s*(.*)/);
    if (optionMatch) {
      flushParagraph();
      const letter = optionMatch[1].toUpperCase();
      let rest = optionMatch[2];

      const isCorrect = /\b(Is\s+correct|Correct\b)/i.test(rest);
      const isIncorrect = /\b(Is\s+not\s+correct|Incorrect|Is\s+incorrect|Not\s+correct)/i.test(rest);

      let className = 'exp-option';
      if (isCorrect && !isIncorrect) className += ' exp-correct';
      else if (isIncorrect) className += ' exp-incorrect';

      rest = rest.replace(
        /(Is\s+correct|Correct|Is\s+not\s+correct|Incorrect|Is\s+incorrect|Not\s+correct)/i,
        '<strong>$&</strong>'
      );

      htmlParts.push(
        `<div class="${className}"><span class="exp-letter">${letter})</span> ${rest}</div>`
      );
      continue;
    }

    // Uppercase option: "A is correct." / "B is not correct."
    const upperOptMatch = line.match(
      /^([A-E])\s+(is\s+correct|is\s+not\s+correct|is\s+incorrect)/i
    );
    if (upperOptMatch) {
      flushParagraph();
      const letter = upperOptMatch[1].toUpperCase();
      const isCorrect = /is\s+correct/i.test(upperOptMatch[2]) && !/not/i.test(upperOptMatch[2]);
      let rest = line.substring(letter.length).trim();
      rest = rest.replace(
        /(is\s+correct|is\s+not\s+correct|is\s+incorrect)/i,
        '<strong>$&</strong>'
      );
      const className = `exp-option ${isCorrect ? 'exp-correct' : 'exp-incorrect'}`;
      htmlParts.push(
        `<div class="${className}"><span class="exp-letter">${letter})</span> ${rest}</div>`
      );
      continue;
    }

    // Bullet point: "• " or "- "
    if (/^[•\-]\s/.test(line)) {
      flushParagraph();
      const content = line.replace(/^[•\-]\s*/, '');
      htmlParts.push(`<div class="exp-bullet">• ${content}</div>`);
      continue;
    }

    // Numbered step: "1st:", "2nd:", "1.", "2)" etc.
    const stepMatch = line.match(/^(\d+(?:st|nd|rd|th)?[:.)])\s*(.*)/);
    if (stepMatch) {
      flushParagraph();
      htmlParts.push(
        `<div class="exp-step"><span class="exp-step-num">${stepMatch[1]}</span> ${stepMatch[2]}</div>`
      );
      continue;
    }

    // Regular text
    currentParagraph.push(line);
  }

  flushParagraph();
  return htmlParts.join('\n');
}
