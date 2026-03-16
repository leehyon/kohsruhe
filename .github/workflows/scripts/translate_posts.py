import os
import re
import sys
import json
import yaml
import requests
from pathlib import Path

OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")
OPENAI_API_ENDPOINT = os.environ.get(
    "OPENAI_API_ENDPOINT", "https://api.openai.com/v1/chat/completions"
)
OPENAI_API_MODEL = os.environ.get("OPENAI_API_MODEL", "gpt-4o")

FRONTMATTER_PATTERN = re.compile(r"^---\s*\n(.*?)\n---\s*\n(.*)$", re.DOTALL)

FIXED_TRANSLATIONS = {
    "周报": "Newsletter",
    "摄影": "Photography",
}


def parse_frontmatter(content):
    match = FRONTMATTER_PATTERN.match(content)
    if not match:
        return {}, content

    frontmatter_text = match.group(1)
    body = match.group(2)

    metadata = yaml.safe_load(frontmatter_text) or {}
    return metadata, body


def dump_frontmatter(metadata, body):
    frontmatter = yaml.dump(
        metadata, allow_unicode=True, default_flow_style=False, sort_keys=False
    )
    return f"---\n{frontmatter}---\n{body}"


def should_skip_translation(title):
    return "[译]" in title


def translate_text_via_llm(text):
    prompt = """You are a professional translator. Translate the following Chinese markdown text into English
while keeping the original meaning as much as possible. Strictly preserve the markdown syntax, formatting, 
code blocks, links, and all other markdown elements. 
Maintain the same line breaks and paragraph structure as the original text.
Do not add, remove, or modify any markdown syntax. 
- **Primary rule**: Translate every part into English first. Only use double quotation marks to keep the original Chinese word **when no reasonable English equivalent exists**
- Format: If you must use parentheses, write it as `English translation "original Chinese word"`
- Maintain the original logic and tone. Output only the translation, no extra explanations

Special translation rules:
- "周报" should be translated as "Newsletter"
- "摄影" should be translated as "Photography"
- Translate all other content normally
"""

    headers = {
        "Authorization": f"Bearer {OPENAI_API_KEY}",
        "Content-Type": "application/json",
    }

    data = {
        "model": OPENAI_API_MODEL,
        "messages": [
            {"role": "system", "content": prompt},
            {"role": "user", "content": text},
        ],
        "temperature": 0.3,
    }

    response = requests.post(
        OPENAI_API_ENDPOINT, headers=headers, json=data, timeout=120
    )
    response.raise_for_status()

    result = response.json()
    return result["choices"][0]["message"]["content"]


def translate_title(title):
    if should_skip_translation(title):
        print(f"Skipping translation for title with [译]: {title}")
        return title

    for cn, en in FIXED_TRANSLATIONS.items():
        if cn in title:
            title = title.replace(cn, en)
            print(f"Applied fixed translation: {cn} -> {en}")

    if all(cn not in title for cn in FIXED_TRANSLATIONS.keys()):
        title = translate_text_via_llm(title)
    else:
        print(f"Title after fixed translations: {title}")

    return title


def translate_file(zh_file_path):
    print(f"\n{'=' * 50}")
    print(f"Processing: {zh_file_path}")
    print(f"{'=' * 50}")

    with open(zh_file_path, "r", encoding="utf-8") as f:
        content = f.read()

    metadata, body = parse_frontmatter(content)

    title = metadata.get("title", "")
    if not title:
        print("Warning: No title found in frontmatter")
        return

    if should_skip_translation(title):
        print(f"Skipping file due to [译] in title: {title}")
        return

    print(f"Original title: {title}")
    translated_title = translate_title(title)
    print(f"Translated title: {translated_title}")
    metadata["title"] = translated_title

    print("Translating body content...")
    translated_body = translate_text_via_llm(body)

    new_content = dump_frontmatter(metadata, translated_body)

    en_file_path = str(zh_file_path).replace(".zh.md", ".en.md")
    with open(en_file_path, "w", encoding="utf-8") as f:
        f.write(new_content)

    print(f"Translation completed: {en_file_path}")


def get_changed_zh_files():
    commit_range = os.environ.get("COMMIT_RANGE", "HEAD~1..HEAD")
    changed_files = os.environ.get("CHANGED_FILES", "").split("\n")

    zh_files = []
    for file in changed_files:
        file = file.strip()
        if file.startswith("content/posts/") and file.endswith(".zh.md"):
            zh_files.append(file)

    return zh_files


def main():
    if not OPENAI_API_KEY:
        print("Error: OPENAI_API_KEY is not set")
        sys.exit(1)

    zh_files = get_changed_zh_files()

    if not zh_files:
        print("No changed .zh.md files found in content/posts/")
        return

    print(f"Found {len(zh_files)} changed .zh.md file(s):")
    for f in zh_files:
        print(f"  - {f}")

    for zh_file in zh_files:
        if not os.path.exists(zh_file):
            print(f"Warning: File not found: {zh_file}")
            continue

        try:
            translate_file(zh_file)
        except Exception as e:
            print(f"Error translating {zh_file}: {e}")
            sys.exit(1)


if __name__ == "__main__":
    main()
