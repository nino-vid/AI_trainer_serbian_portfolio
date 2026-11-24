# Project 01 — Serbian Conversational Speech Annotation

A human-led annotation case study of informal Serbian conversational speech, focused on preserving what is actually spoken while separately documenting normalization, contextual interpretation, translation, and quality-assurance decisions.

## Project overview

| Field | Details |
|---|---|
| Language | Serbian |
| Dataset | `Serbian_Conversational_Speech_Annotation` |
| Dataset version | 1.2 |
| Samples | 1 conversational recording |
| Annotated segments | 27 |
| Identified speakers | 4 (`SPK_01`–`SPK_04`); some events have an unassigned speaker |
| Annotation guidelines | Version 1.1 |
| Annotator | Nino |

The source material is a conversational video featuring informal speech, background music, and crowd noise. The annotations cover utterances and relevant vocal/audio events, including partially spoken words, colloquial expressions, speaker turns, and scene-dependent meanings.

## Objectives

- Preserve **verbatim acoustic evidence** without silently replacing clipped or dialectal forms.
- Separate **orthographic normalization** from reconstruction and standard-Serbian paraphrase.
- Document **speaker attribution**, millisecond timestamps, and genuine speech overlap.
- Distinguish **literal English glosses** from **contextual English localization**.
- Tag relevant speech delivery, linguistic features, audio conditions, vocal events, emotion, and pragmatic function only when supported.
- Maintain a traceable QA revision history and explicitly record unresolved verification needs.

## Annotation workflow

1. **Segment the conversation.** Assign segment IDs, speaker IDs where supported, and start/end timestamps in milliseconds.
2. **Transcribe the audible speech.** Preserve truncated words, hesitations, particles, and nonstandard expressions in `verbatim_acoustic`.
3. **Normalize carefully.** Use `normalized_orthographic` for justified spelling expansions without changing lexical identity.
4. **Interpret separately.** Record reconstructed speech, standard-Serbian paraphrases, literal translations, and contextual localizations in distinct fields where applicable.
5. **Apply evidence-based tags.** Use the annotation schema and avoid unsupported psychological or clinical inferences.
6. **Review and revise.** Document decisions and corrections in the QA change log.

## Dataset structure

The main JSON file contains one data sample with 27 annotated segments. Individual segment records may include:

| Field | Purpose |
|---|---|
| `segment_id`, `turn_id` | Stable segment identification and order |
| `speaker_id` | Speaker attribution, or `null` when unverified |
| `timestamps.start_ms`, `timestamps.end_ms` | Segment timing in milliseconds |
| `verbatim_acoustic` | Words or vocal material as heard |
| `normalized_orthographic` | Conservative orthographic normalization |
| `reconstructed_speech` / `reconstructed_form` | Explicitly labeled reconstruction, when used |
| `standard_serbian_paraphrase` | Standard-language explanation, when needed |
| `english_literal_translation` | Literal English rendering, when available |
| `english_localization_proposed` | Scene-specific English adaptation |
| `annotation_tags` | Speech delivery, linguistic features, audio conditions, vocal events, emotion, pragmatic function |
| `qa_notes` | Evidence and annotation notes |

Fields vary by segment; not every segment contains every optional field.

## Selected annotation decisions

### Segment `SRB_MRK_002` — Partial-word reconstruction

- **Verbatim:** `Šta je ovo za m-, brate.`
- **Normalized:** `Šta je ovo za m[ene], brate.`
- **Reconstruction:** `Šta je ovo za mene, brate.`
- **Proposed English localization:** `This is light work for me, bro.`

The audible partial word is preserved in the verbatim field. The completion and idiomatic meaning are documented as contextual interpretation, not presented as fully audible speech.

### Segment 10 — Regional expression

`Lele` is preserved in Serbian. The contextual English rendering `Oh man!` is used without adding profanity that was not spoken.

### Segments 15–16 — Contextual pragmatic translation

The utterance `MRK!` is interpreted by the annotator as a forceful dismissal in this particular interaction and localized as `Fuck off!`. The following `Mr’` is retained as a truncated echo. These are scene-specific pragmatic choices, **not dictionary definitions or claims that English profanity was spoken**.

### Segment 25 — Dialectal particle

`Srećko, be!` retains the particle `be` in the acoustic/orthographic record. `Srećko, bre!` is provided only as a standard-Serbian paraphrase.

## Quality assurance and revisions

The v1.2 change log documents annotator-reviewed changes to segments 2, 7, 10, 15, 16, 19, 20, 21, 25, 26, and 27, plus metadata and tagging conventions. Examples include:

- Retaining a truncated word while explicitly documenting its reconstruction.
- Correcting the interpretation of an utterance as a bottle-opening success announcement.
- Separating scene-specific English localization from literal meaning.
- Describing a consonant as partially articulated rather than assuming devoicing.
- Removing an unsupported speech-overlap tag.
- Leaving emotion unset when pragmatic intent is documented but emotional state is not established.

The guidelines also distinguish background music from overlapping human speech and require actual speech-interval intersection for overlap labels.

## Files

```text
01-speech annotation/
├── MRK_portfolio_v1.2.json
├── MRK_ANNOTATION_GUIDELINES_v1.1.md
├── MRK_QA_CHANGELOG_v1.2.md
└── README.md
```

- **`MRK_portfolio_v1.2.json`** — structured dataset with source metadata, tasks, speaker information, and segment-level annotations.
- **`MRK_ANNOTATION_GUIDELINES_v1.1.md`** — evidence hierarchy, annotation schema, linguistic decisions, and QA rules.
- **`MRK_QA_CHANGELOG_v1.2.md`** — documented revisions and remaining checks.
- **`README.md`** — project overview and instructions for reviewers.

## How to review the project

1. Open `MRK_portfolio_v1.2.json` and inspect `data_samples[0].annotations`.
2. Select a `segment_id` and compare its verbatim transcript, normalized text, proposed localization, tags, and QA notes.
3. Read `MRK_ANNOTATION_GUIDELINES_v1.1.md` to understand which evidence supports each type of annotation.
4. Read `MRK_QA_CHANGELOG_v1.2.md` to trace corrections and unresolved questions.

## Limitations and verification status

- This is a **single-recording case study**, not a large-scale benchmark.
- The dataset reflects annotator-reviewed contextual decisions. **Independent verification against the original playable audio/video has not been completed.**
- Timestamps, speaker attribution (including laughter), and literal words should be independently checked against the original media before claiming final audio-level validation.
- The original audio sample rate has not been measured.
- More evidence is needed before assigning a narrow linguistic classification such as Prizren–Timok; Southern Serbian features are reported for speakers 1 and 2 only.
- Some contextual translations remain proposals requiring review in the original scene.
- The original source is a YouTube video. **Source-media reuse rights must be verified before publicly hosting or redistributing audio/video.** This repository need not include the original media to demonstrate the annotation methodology.

## Portfolio relevance

This project demonstrates structured Serbian speech annotation, conservative handling of uncertain acoustic evidence, speaker diarization, colloquial/dialect-aware language analysis, pragmatic localization, and transparent human-in-the-loop QA documentation. It does not claim a trained model or an independently validated ground-truth corpus.
