#!/usr/bin/env python3
# Einfaches Heuristik‑Parser für nummerierte Fragen in einer DOCX.
# Benötigt: python-docx
# Usage: python parse_docx.py 100_fragen_security+.docx > questions.json

import sys
import re
import json
from docx import Document

if len(sys.argv) < 2:
    print("Usage: parse_docx.py file.docx", file=sys.stderr)
    sys.exit(1)

doc = Document(sys.argv[1])
paras = [p.text.strip() for p in doc.paragraphs if p.text.strip()]

questions = []
current = None

qnum_re = re.compile(r'^(\\d{1,3})[.)\\s]\\s*(.*)')
choice_re = re.compile(r'^[A-D][.)\\s]\\s*(.*)')

for p in paras:
    m = qnum_re.match(p)
    if m:
        # new question
        if current:
            questions.append(current)
        current = {'text': m.group(2).strip(), 'choices': [], 'category': 'Ungenannt'}
        continue
    # choices detection
    m2 = choice_re.match(p)
    if m2 and current:
        # assume format 'A. text' optionally with '(richtig)' or '*' etc.
        text = m2.group(1).strip()
        isCorrect = False
        # try to detect correct markers
        if '(richtig)' in p.lower() or '*' in p:
            isCorrect = True
        current['choices'].append({'text': text, 'isCorrect': isCorrect, 'explanation': ''})
        continue
    # fallback: append to last part (continuation of text)
    if current and len(current['choices']) == 0:
        current['text'] += ' ' + p
    elif current and len(current['choices']) > 0:
        # append to last choice
        current['choices'][-1]['text'] += ' ' + p

# finalize
if current:
    questions.append(current)

# normalize: ensure 4 choices and mark first correct if none found (needs review)
out = []
qid = 1
for q in questions:
    choices = q['choices']
    if len(choices) < 2:
        continue
    # pad to 4 choices if needed
    while len(choices) < 4:
        choices.append({'text': '–– placeholder ––', 'isCorrect': False, 'explanation': ''})
    # if no correct found, mark first as correct (must be reviewed)
    if not any(c['isCorrect'] for c in choices):
        choices[0]['isCorrect'] = True
        choices[0]['explanation'] = 'AUTOMATISCH MARKIERT: bitte prüfen'
    out.append({
        'id': qid,
        'text': q['text'],
        'choices': [{'id': chr(65+i), 'text': c['text'], 'isCorrect': c['isCorrect'], 'explanation': c.get('explanation','')} for i,c in enumerate(choices[:4])],
        'category': q.get('category','Ungenannt'),
        'tags': []
    })
    qid += 1

print(json.dumps(out, ensure_ascii=False, indent=2))
