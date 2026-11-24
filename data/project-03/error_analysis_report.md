# Serbian AI Voice Evaluation — Error Analysis Report

**Project:** Project-03-Serbian-AI-Voice-Evaluation  
**Samples:** SRB-AVE-001–SRB-AVE-015  
**Method:** Single-system Serbian TTS evaluation with human reviewer feedback

## Evaluation overview

Scores below reflect the latest evaluations discussed with the native Serbian reviewer. Observations are qualitative; no acoustic measurements or timestamps are claimed.

| Sample | Test category | Overall score |
|---|---|---:|
| SRB-AVE-001 | Everyday Speech | 4.0/5 |
| SRB-AVE-002 | Lexical Stress | 4.0/5 |
| SRB-AVE-003 | Question Intonation | 4.5/5 |
| SRB-AVE-004 | Emotional Delivery | 4.0/5 |
| SRB-AVE-005 | Sarcasm | 3.5/5 |
| SRB-AVE-006 | Numbers & Dates | 4.5/5 |
| SRB-AVE-007 | Abbreviations | 4.5/5 |
| SRB-AVE-008 | Regional Expressions | 4.0/5 |
| SRB-AVE-009 | Complex Sentence Rhythm | 5.0/5 |
| SRB-AVE-010 | Pauses & Punctuation | 3.0/5 |
| SRB-AVE-011 | Serbian Phonemes | 4.5/5 |
| SRB-AVE-012 | Foreign Names | 4.5/5 |
| SRB-AVE-013 | Formal Announcement | 4.5/5 |
| SRB-AVE-014 | Customer Support | 3.5/5 |
| SRB-AVE-015 | Long-Form Naturalness | 3.5/5 |

## Key patterns and interpretation

The individual recording reviews, including audio playback, strengths, issues and severity, are available on the **Evaluations** page. This report focuses on patterns across the 15 samples rather than repeating those reviews.

### Naturalness and pragmatic delivery

Naturalness was the main limitation in conversational and context-sensitive tasks. The reviewer noted insufficient emotional variation in the apology, concern and relief, sarcasm, instructions, customer support, and long-form narration samples. These observations concern delivery, not necessarily incorrect words.

### Breath-like audio artifacts

The reviewer reported audible breath-like sounds at the ends of words in four recordings: **001** (`kasnim`), **013** (`putnici`), **014** (`dan`), and **015** (`jezik`). These are listening-based observations; no instrumental acoustic measurement or timestamps are claimed.

### Emphasis, rhythm and intonation

**010** received the lowest score (3.0/5), reflecting unnatural instruction delivery and insufficient emphasis on the initial `Ne`. In **015**, excessive stress on words such as `učimo`, `kako`, `zaista`, `slušanje` and `čitanje` reduced naturalness. By contrast, **009** scored 5.0/5 for complex sentence rhythm.

### Pronunciation and content accuracy

The reviewer assessed number and date pronunciation, Serbian consonant contrasts, and foreign names positively. These strengths coexist with prosodic and pragmatic limitations; they should not be interpreted as evidence that every aspect of the recordings was flawless.

## Cross-sample findings

- Intelligibility is generally strong across the evaluated recordings.
- Reduced conversational or emotional naturalness was identified in apology, sarcasm, instructions, customer support, and extended narration.
- The native Serbian reviewer identified breath-like artifacts in samples 001 ("kasnim"), 013 ("putnici"), 014 ("dan"), and 015 ("jezik").
- Pronunciation of numerical expressions, Serbian consonant contrasts, and foreign names was assessed positively.
- Sample 009 received the highest score (5.0/5), while sample 010 received the lowest (3.0/5).
- These findings apply only to the evaluated recordings and should not be generalized to all outputs of the TTS system.

## QA rules

1. Compare each original audio recording with its exact reference text before assigning a score.
2. Record specific audible issues and add timestamps when verified; do not invent timestamps.
3. Distinguish pronunciation errors from prosody, emotion, pragmatic appropriateness, and audio artifacts.
4. Keep reviewer judgments distinct from independently measured acoustic evidence.
5. Do not infer an error solely from a low score; a recording may have no confirmed pronunciation mistakes.
6. Document the TTS voice, model, generation settings, and generation date separately for reproducibility.
7. Preserve original recordings and reviewer notes for auditability, subject to applicable usage and redistribution rights.
