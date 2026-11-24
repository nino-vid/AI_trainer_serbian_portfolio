# Serbian LLM Response Evaluation

**A Serbian-language AI response evaluation and quality assurance portfolio project**  
**Project ID:** SRB-EVR-001–040  
**Evaluator:** Nino Vidosavljevic  
**Language:** Serbian (evaluation notes and documentation in English)  
**Project type:** Independent portfolio demonstration; not a commissioned evaluation or professional employment record

## Overview

This project examines how large language models respond to practical Serbian-language requests. It focuses on more than grammatical correctness: responses are also reviewed for natural wording, appropriate register, accurate meaning, understanding of local expressions, and compliance with user instructions.

The corpus contains **40 evaluation tasks** and corresponding recorded responses from **Gemini and Grok**. The tasks are designed to surface subtle mistakes that can be overlooked when a response sounds fluent but changes the meaning or misses the social context.

The project includes comparative evaluation notes, an error analysis report, a selected correction-and-feedback dataset, and a draft quality assurance guide.

## Goals

- Evaluate AI responses using consistent, evidence-based criteria.
- Identify Serbian-specific issues in grammar, meaning, politeness, dialects, and idioms.
- Distinguish objective language errors from valid stylistic or regional alternatives.
- Explain problems in clear, actionable English feedback.
- Propose corrections that preserve the original user request.
- Document a repeatable review process for human quality assurance.

## Dataset at a glance

Evaluation prompts - 40 tasks (`SRB-EVR-001` through `SRB-EVR-040`)
Compared model outputs - Recorded responses from Gemini and Grok
Evaluation notes - 40 written comparisons
Correction examples - 15 selected cases (`SRB-COR-001` onward)
Error analysis - Qualitative report with supported examples and recommendations
QA documentation - Review criteria, error taxonomy, severity levels, and workflow

### Task groups

Test IDs | Area | What the tests examine |

001–010 | Everyday Serbian and register | Polite messages, sarcasm, informal wording, and following constraints |
011–020 | Grammar and syntax | Case, agreement, word order, corrections, and ambiguity |
021–030 | Dialects and colloquial language | Regional particles, slang, idioms, and pragmatic meaning |
031–040 | Cultural context and interpretation | Figurative language, indirect communication, sarcasm, and social tone |

## Evaluation method

Each prompt defines a practical language task or asks for an explanation of a Serbian expression. The model answers are examined against the same five criteria:

| Dimension | Main question

`instruction_following` | Did the response respect the user's instructions and limits?
`naturalness` | Is the language grammatically sound and natural in context?  
`register` | Does the response fit the social setting and relationship?  
`meaning_accuracy` | Does it preserve and explain the intended meaning correctly?
`helpfulness` | Does it answer the question clearly and usefully?

Each dimension uses a **1–5 scale** (maximum **25 points per response**). A pairwise comparison can record a preferred model or a tie, with preference strength marked as `none`, `slight`, `moderate`, or `strong`. Reviewers should justify deductions with exact evidence from the answer rather than choosing a preferred model first.

The complete proposed scoring rules, severity definitions, and review workflow are documented in [`qa_guidelines.md`](qa_guidelines.md).

## Examples of issues examined

These are **selected qualitative examples**, not model-wide error rates:

Test | Review focus | Why it matters

`SRB-EVR-013` | Explaining agreement with numerals | A correct final phrase can be accompanied by an unreliable grammar rule.  
`SRB-EVR-014` | Avoiding unnecessary edits | A grammatical sentence should not be rewritten when the request is to fix errors only.  
`SRB-EVR-025` | Interpreting "Boli me uvo" | The phrase can sound dismissive or rude; context matters. |
`SRB-EVR-030` | Understanding "ufrkis'o" | Dialect and informal wording should not be assigned the wrong emotion. |
`SRB-EVR-033` | Keeping the scenario unchanged | A model should not replace a late arrival with an on-time arrival in its explanation.  
`SRB-EVR-037` | Localizing "Ko te šiša!" | A literal translation, or a paraphrase with a different target, can mislead the reader.

Further examples and recommendations are included in [`error_analysis_report.md`]

## Correction and feedback workflow

The separate correction dataset documents **15 selected responses** with:

1. Original test ID and prompt.
2. Model label and original, unedited response.
3. Proposed corrected Serbian response.
4. Error category and proposed severity.
5. Short evaluator feedback in clear B2-level English.
6. Review and provenance metadata.

The evaluator has confirmed the proposed correction set in the project discussion. **The stored `review_status` values still need to be updated to reflect that confirmation** before the structured file is presented as a finalized release. The examples are deliberately selected, **not randomly sampled**, and must not be used to estimate overall error rates.

See [`correction_dataset.jsonl`] and [`correction_review_sheet.md`].

## File structure

Project-02-LLM-Evaluation/
├── README.md # This project overview
├── prompts.jsonl # 40 original tasks and instructions
├── responses.jsonl # Original recorded model outputs
├── evaluations.jsonl # Written comparative evaluations
├── error_analysis_report.md # Qualitative error analysis
├── correction_dataset.jsonl # 15 selected corrections and feedback entries
├── correction_review_sheet.md # Human-readable correction review sheet
├── qa_guidelines.md # Draft QA rubric and procedures
└── qa_changelog.md # Reserved for documented later changes

## Quality standards

- Preserve the full original wording of model responses for traceability.
- Do not invent missing facts, motivations, or details to improve an answer.
- Do not label an acceptable Serbian dialect or word order as incorrect solely because another form is more common.
- Interpret sarcasm, politeness, and idioms in relation to tone and social context.
- Separate confirmed errors from plausible alternative interpretations.
- Keep model names, test IDs, evidence, and corrections aligned across files.
- Avoid unsupported performance claims or rankings.

## Authorship and transparency

This is an **independent, AI-assisted portfolio project**. The evaluator selected and reviewed Serbian-language examples and confirmed the correction set; AI tools assisted with drafting, organizing, and refining evaluation narratives, feedback, and documentation. Materials should not be presented as entirely unaided human annotations or as externally commissioned work. Final responsibility for linguistic judgments and public release belongs to the evaluator.

## Intended use

This repository demonstrates practical skills relevant to Serbian-language AI training and quality assurance, including response review, preference evaluation, error analysis, correction writing, and review documentation. It is a portfolio sample, **not** an independently benchmarked comparison of model quality.
