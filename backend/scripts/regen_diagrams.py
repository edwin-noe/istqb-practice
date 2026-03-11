"""
Regenerate all SVG diagrams in seed_questions.json using GPT-5.4
with Apple light theme colors.
"""
import json, os, re, sys, time
from openai import OpenAI

SEED_PATH = os.path.join(os.path.dirname(__file__), "..", "prompts", "seed_questions.json")

SYSTEM_PROMPT = """You are an expert SVG diagram generator for an ISTQB quiz application with an Apple-style light theme UI.

Your job: given a quiz question that contains an inline SVG diagram, regenerate ONLY the SVG portion with improved quality and light-theme styling.

## Design rules

1. **Light theme palette**:
   - Node/box fill: #ffffff with 1px border #d1d1d6
   - Primary stroke: #007AFF (Apple blue)
   - Secondary stroke: #5AC8FA (light blue for edges/arrows)
   - Text fill: #1d1d1f (primary) or #48484a (secondary)
   - Decision diamonds: fill #FFF8E1, stroke #FF9500
   - Start/end nodes: fill #E8F5E9, stroke #34C759
   - Error/negative: stroke #FF3B30
   - Background: transparent

2. **Typography**: font-family="-apple-system, Inter, sans-serif", font-weight 500 for labels, 600 for titles

3. **Visual quality**:
   - Add a subtle drop-shadow filter: `<filter id="shadow"><feDropShadow dx="0" dy="1" stdDeviation="2" flood-opacity="0.08"/></filter>`
   - Apply filter="url(#shadow)" to main node groups
   - Use rounded corners (rx="8") on rectangles
   - Use smooth bezier curves for arrows where appropriate
   - Arrowhead markers: fill #86868b
   - Clean spacing, no overlapping elements

4. **Technical**:
   - Use viewBox for responsiveness
   - Set style="max-width:500px;width:100%;height:auto;"
   - Every element ID must be prefixed with "q{index}_" to ensure uniqueness
   - The diagram must be semantically correct — same states, transitions, labels as the original

## Output format

Return ONLY the new SVG string (starting with `<svg` and ending with `</svg>`). No markdown fences, no explanation, no other text.
"""

def find_svg_questions(questions):
    results = []
    for i, q in enumerate(questions):
        if "<svg" in q.get("question_text", "").lower():
            results.append((i, q))
    return results


def extract_svg(text):
    match = re.search(r"(<svg[\s\S]*?</svg>)", text, re.IGNORECASE)
    return match.group(1) if match else None


def replace_svg(text, old_svg, new_svg):
    return text.replace(old_svg, new_svg)


def regenerate_svg(client, index, question):
    old_svg = extract_svg(question["question_text"])
    if not old_svg:
        return None

    text_without_svg = question["question_text"].replace(old_svg, "[DIAGRAM_HERE]")

    user_msg = f"""Question index: {index}

Question text (with [DIAGRAM_HERE] placeholder where the SVG should go):
{text_without_svg}

Original SVG to regenerate (keep same semantic content, improve visual quality, use light theme):
{old_svg}

Generate the replacement SVG. Use "q{index}_" as the ID prefix for all elements."""

    for attempt in range(3):
        try:
            resp = client.chat.completions.create(
                model="gpt-5.4",
                messages=[
                    {"role": "system", "content": SYSTEM_PROMPT},
                    {"role": "user", "content": user_msg},
                ],
                temperature=0.3,
                max_completion_tokens=4000,
            )
            content = resp.choices[0].message.content.strip()
            svg_match = re.search(r"(<svg[\s\S]*?</svg>)", content, re.IGNORECASE)
            if svg_match:
                return svg_match.group(1)
            print(f"  ⚠ No SVG found in response for Q#{index+1}, attempt {attempt+1}")
        except Exception as e:
            print(f"  ❌ Error for Q#{index+1}, attempt {attempt+1}: {e}")
            time.sleep(2 ** attempt)
    return None


def main():
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        print("❌ Set OPENAI_API_KEY environment variable")
        sys.exit(1)

    client = OpenAI(api_key=api_key)

    with open(SEED_PATH, "r") as f:
        questions = json.load(f)

    svg_qs = find_svg_questions(questions)
    print(f"🔍 Found {len(svg_qs)} questions with SVG diagrams\n")

    updated = 0
    for idx, q in svg_qs:
        old_svg = extract_svg(q["question_text"])
        print(f"🎨 Regenerating Q#{idx+1}... ", end="", flush=True)

        new_svg = regenerate_svg(client, idx, q)
        if new_svg:
            questions[idx]["question_text"] = replace_svg(
                q["question_text"], old_svg, new_svg
            )
            updated += 1
            print("✅")
        else:
            print("❌ skipped")

    if updated > 0:
        with open(SEED_PATH, "w") as f:
            json.dump(questions, f, indent=2, ensure_ascii=False)
        print(f"\n✅ Updated {updated}/{len(svg_qs)} SVG diagrams in seed_questions.json")
    else:
        print("\n⚠ No diagrams were updated")


if __name__ == "__main__":
    main()
