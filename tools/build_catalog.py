#!/usr/bin/env python3
"""Regenerate data/catalog.json from every individual lessons/**/*.json file.

One lesson file is the source of truth; the catalogue is generated for static hosting.
No external Python packages are required.
"""
import json
import sys
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
LESSONS_DIR = ROOT / "lessons"
CATALOG = ROOT / "data" / "catalog.json"
NEEDED = ("id", "area", "groupKey", "group", "title", "status", "minutes", "sourceKey")
AREAS = ("core", "fpu", "ipo", "advanced")
VALID_STATUSES = ("planned", "draft", "published")


def main():
    issues, entries, seen = [], [], set()
    for path in sorted(LESSONS_DIR.rglob("*.json")):
        relative = path.relative_to(ROOT).as_posix()
        try:
            doc = json.loads(path.read_text(encoding="utf-8"))
        except Exception as exc:
            issues.append(f"{relative}: invalid JSON ({exc})")
            continue
        missing = [field for field in NEEDED if field not in doc]
        if missing:
            issues.append(f"{relative}: missing {', '.join(missing)}")
            continue
        if doc["id"] in seen:
            issues.append(f"{relative}: duplicate id {doc['id']}")
        seen.add(doc["id"])
        if doc["area"] not in AREAS:
            issues.append(f"{relative}: invalid area")
        if doc["status"] not in VALID_STATUSES:
            issues.append(f"{relative}: invalid status")
        if not isinstance(doc["title"], dict) or not doc["title"].get('vi'):
            issues.append(f"{relative}: title must contain vi")
        if doc["status"] != 'planned' and not doc.get("sections"):
            issues.append(f"{relative}: {doc['status']} lesson must have sections")
        if not isinstance(doc.get('quiz', []), list) or not isinstance(doc.get('sections', []), list):
            issues.append(f"{relative}: sections and quiz must be arrays")
        for i, section in enumerate(doc.get('sections', [])):
            for field in ('title', 'body'):
                pair = section.get(field, {})
                if not isinstance(pair, dict) or not pair.get('vi'):
                    issues.append(f"{relative}: section {i+1} needs {field}.vi")
        for i, q in enumerate(doc.get('quiz', [])):
            if not isinstance(q.get('options'), list) or not 0 <= q.get('correct', -1) < len(q.get('options', [])):
                issues.append(f"{relative}: quiz {i+1} answer invalid")
            for field in ('question', 'explanation'):
                val=q.get(field, {})
                if not isinstance(val, dict) or not val.get('vi'):
                    issues.append(f"{relative}: quiz {i+1} needs {field}.vi")
            for j, option in enumerate(q.get('options', [])):
                if not isinstance(option, dict) or not option.get('vi'):
                    issues.append(f"{relative}: quiz {i+1} option {j+1} missing vi")
        entries.append({k:doc[k] for k in NEEDED} | {
            "sourceUrl":doc.get("sourceUrl", ""),
            "officialIndex":doc.get("officialIndex", False),
            "file":relative,
            "order":doc.get("order", 100000),
            **{k:doc[k] for k in ("moduleId", "moduleOrder", "lessonOrder", "availableLanguages", "contentVersion", "reader") if k in doc},
        })
    if issues:
        print("\n".join(issues), file=sys.stderr)
        sys.exit(1)
    entries.sort(key=lambda e: (AREAS.index(e['area']),e['order'],e['id']))
    for entry in entries:entry.pop('order', None)
    result = {"schemaVersion": 1, "version": "5.1", "updated": date.today().isoformat(), "lessons": entries}
    CATALOG.parent.mkdir(parents=True, exist_ok=True)
    CATALOG.write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n", encoding='utf-8')
    count = {a:sum(e['area']==a for e in entries) for a in AREAS}
    print(f"Built catalogue: {len(entries)} lessons | " + ' / '.join(f"{k} {v}" for k,v in count.items()))


if __name__ == '__main__':
    main()
