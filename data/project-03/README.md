# Project 03 — Serbian AI Voice Evaluation

## Overview

This project documents a human-in-the-loop evaluation of **15 Serbian text-to-speech (TTS) recordings** generated using ElevenLabs. It examines how well a single synthetic voice delivers Serbian text across everyday, formal, emotional, and linguistically challenging contexts.

The evaluation focuses on **pronunciation, lexical stress, intonation, rhythm, fluency, expressiveness, and naturalness**. The objective is to document observable strengths and limitations of AI-generated speech—not to compare different TTS systems or claim that every variation from a human voice is an error.

## Evaluation workflow

1. Prepare a fixed Serbian reference text and evaluation objective for each task.
2. Generate a corresponding ElevenLabs TTS recording.
3. Listen to the recording and compare it against the exact reference text.
4. Assess clarity, pronunciation, stress, rhythm, intonation, and task-specific delivery.
5. Record human-reviewer feedback, distinguishing confirmed issues from unverified impressions.
6. Document a score, strengths, issues, and severity for each sample.
7. Consolidate recurring patterns in the error analysis report.

The qualitative judgments were refined with feedback from a **native Serbian speaker**. Scores are subjective human evaluations, not automated acoustic measurements or statistically validated benchmarks.

## Evaluation tasks and scores

| Sample | Evaluation task | Score |

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

See [`tasks.md`] for the reference text, objective, and criteria of each task. See [`error_analysis_report.md`] for individual findings and reviewer observations.

## Selected findings

- **Clarity and pronunciation:** Most samples were intelligible. The Serbian phoneme test was rated highly, with no significant consonant substitutions identified by the reviewer.
- **Context-sensitive delivery:** Sarcasm, direct instructions, and customer-support empathy were less convincing than straightforward informative speech.
- **Unnatural emphasis:** The long-form recording placed excessive emphasis on selected words, reducing the natural flow of the narration.
- **Breath-like artifacts:** The reviewer identified noticeable breath-like sounds around "kasnim" (audio 001), "putnici" (audio 013), "Dobar dan" (audio 014), and "jezik" (audio 015).
- **Formal speech:** The public announcement performed well overall despite minor unnaturalness.

These are findings from this small set of recordings, not claims about ElevenLabs performance across all Serbian voices or settings.

## Repository structure

```text
Project-03-Serbian-AI-Voice-Evaluation/
├── audio-files/
│   ├── SRB-AVE-001.mp3
│   ├── ...
│   └── SRB-AVE-015.mp3
├── tasks.md
├── evaluations.jsonl
├── error_analysis_report.md
└── README.md
```

**File descriptions**

| Path | Purpose |

| `audio-files/` | Original generated recordings, if their publication is permitted by the applicable license. |
| `tasks.md` | The 15 reference texts, test objectives, and evaluation criteria. |
| `evaluations.jsonl` | One structured evaluation record per audio sample, with scores, strengths, issues, and severity. |
| `error_analysis_report.md` | Human-readable per-sample evaluations and cross-sample analysis. |
| `README.md` | Project introduction, workflow, task index, findings, and limitations. |

The filenames above describe the intended GitHub layout. Optional human-recorded reference audio may be added later in a separate `audio-files/human_reference/` directory; it is **not** part of the current evaluation evidence.

## Reading the results

Each line of `evaluations.jsonl` is a separate JSON object. The `sample_id` field links the record to the corresponding task and audio recording. The `score` uses a five-point scale, and `severity` describes the impact of the issues noted in that sample. A lower score is not necessarily evidence of a pronunciation mistake: some recordings were marked down for naturalness, intonation, or pragmatic delivery.

## Reproducibility and limitations

- This is a **single-system, small-sample qualitative study**, not a controlled comparison of models.
- The exact ElevenLabs **voice ID/name, model, generation settings, and generation date** should be added to metadata before claiming full reproducibility. They are not specified here because they have not been verified.
- The human reference recordings discussed as a possible extension have not been incorporated into these scores.
- The report does not claim instrument-measured timing, pitch, or acoustic artifacts.
- Some interpretations of stress and conversational naturalness can vary across Serbian speakers and regional varieties.

## Intended use

This project is a portfolio demonstration of **Serbian-language AI voice evaluation, error identification, structured annotation, and human-in-the-loop quality assurance**. It is not a certified speech benchmark.
