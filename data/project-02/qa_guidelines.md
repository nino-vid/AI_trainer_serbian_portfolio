# Serbian LLM Evaluation — Quality Assurance Guidelines

**Project:** SRB-EVR-001–040 (Serbian LLM Response Evaluation)  
**Document version:** 1.0 — working draft  
**Language of instructions:** English (B2)  
**Evaluator:** Nino  
**Status:** Proposed guidelines; not yet approved as a final standard

## 1. Purpose and scope

These guidelines help reviewers evaluate AI-generated answers in Serbian in a clear and consistent way. The review focuses on grammar, naturalness, register, meaning, instruction following, and practical usefulness. The same rules should be used for Gemini, Grok, and any other model. Reviewers must not change a score because of the model's name.

The project contains 40 test prompts across everyday communication, grammar and syntax, regional speech, and cultural context. The existing error report and correction dataset contain selected examples. They are working drafts and must not be treated as independently verified ground truth.

## 2. Source-of-truth and documentation rules

1. Read the **full user prompt**, including limits such as _only correct grammar_, _do not invent a reason_, or _keep the same situation_.
2. Read the **original model response verbatim**. Keep a copy without editing punctuation, spacing, or grammar.
3. Check the output against the task requirements before comparing it to the other model.
4. Separate **observation** (what the response says) from **interpretation** (why that might be wrong).
5. Record the test ID, model name, exact evidence, category, severity, proposed correction, and short rationale.
6. Use `needs_evaluator_review` until a human evaluator has checked the judgment. Do not mark AI-drafted corrections as approved automatically.
7. Never invent missing prompts, responses, scores, model labels, statistics, or sources. If something cannot be verified, mark it as **unverified**.

## 3. Five scoring dimensions (1–5 each)

| Dimension | What to check | Typical reason to reduce a score

`instruction_following` | Did the model follow every explicit requirement and restriction? | Added an excuse when the user said not to invent one

`naturalness` | Is the Serbian grammatical, idiomatic, and natural in the requested variety? | Wrong agreement, awkward wording, or an incorrect form

`register` | Is the tone appropriate for the relationship and situation? | Uses informal "ti" with a colleague who must be addressed with "Vi"

`meaning_accuracy` | Does it keep the original meaning and explain linguistic nuance accurately? | Changes the subject, speaker, intention, or idiom meaning

`helpfulness` | Does the answer solve the actual task clearly, with enough relevant detail? | Misses an important requested distinction or adds confusing content

**Scoring anchor — apply separately for every dimension:**

| Score | Definition |

| **5** | Fully meets the criterion. No meaningful problem.
| **4** | Mostly correct; a small issue does not prevent understanding or use.
| **3** | Partly correct; an important issue reduces reliability or usefulness.
| **2** | Serious problem; the answer misses much of the criterion.
| **1** | Fails the criterion or directly contradicts the task.

**Total:** Add the five dimensions (minimum 5, maximum 25). A high score in one dimension does not erase an error in another. Do not deduct points for extra detail "automatically" : only deduct when it breaks a request, changes meaning, or harms clarity. Do not deduct twice for one issue without explaining how it independently affects both dimensions.

## 4. Pairwise preference

- Evaluate each response independently **before** deciding which model is preferred.
- `preferred_response`: the model name with the better overall response, or `tie`.
- `preference_strength`: `none`, `slight`, `moderate`, or `strong`.
- Use `none` when the preference is `tie`.
- A small numeric difference often supports `slight`; however, the **type and importance of the error** matter more than a mechanical point gap.
- Tied totals do not always require a tie: if one model makes a materially more damaging mistake, explain any non-tie decision. Conversely, two answers with different totals may still be practically equivalent; explain why.
- Keep the rationale in clear B2 English and cite concrete wording from the responses.

## 5. Error taxonomy

| Category code | Meaning | Example or review signal

`GRAM_RULE_ERROR` | Incorrect grammatical explanation | SRB-EVR-013: misleading rule about numeral agreement

`GRAMMAR_OR_FORM_ERROR` | Wrong form in a model's own answer | SRB-EVR-036: `izaći će na kraj` in direct encouragement

`UNNECESSARY_EDIT` | Edits a valid construction under a minimal-edit request | SRB-EVR-014: changes valid `nisam nikad`

`SEMANTIC_SHIFT` | Changes the original meaning or participant | SRB-EVR-017: adds a job offer not present in the source

`UNSUPPORTED_ASSUMPTION` | Presents invented circumstances or motives as facts | SRB-EVR-003: `sad tek vidim` implies the message was not seen earlier

`PRAGMATIC_OVERGENERALIZATION` | Overstates politeness, intent, or social meaning | SRB-EVR-025: treats `Boli me uvo` as always polite

`CONTEXT_VIOLATION` | Changes the situation supplied by the user | SRB-EVR-033: changes a late arrival to an on-time arrival

`UNNATURAL_PHRASING` | Formulation is awkward in the target variety | Needs a concrete reason, not just personal taste

`IDIOM_LOCALIZATION_ERROR` | Idiom/translation misses target meaning or tone | SRB-EVR-037: `Ko te šiša` becomes `Nije tvoja stvar`

`LIMITED_CONTEXT` | Omits a requested nuance that matters to the task | Missing the effect of relationship or intonation

**Category consistency:** The earlier report uses `UNNATURAL_EXAMPLE`; in this guide, use `GRAMMAR_OR_FORM_ERROR` for an objectively incorrect example and `UNNATURAL_PHRASING` for an awkward but grammatical one. Keep an alias note when mapping older records; do not silently rewrite the original tags.

## 6. Severity levels

- **none:** No supported error.
- **minor:** Small imprecision, awkward wording, or missing detail; main task still succeeds.
- **moderate:** Material shift in meaning, an incorrect explanation, or a missed requested distinction.
- **major:** Core task fails, instructions are seriously violated, or the response could strongly mislead a user.

### 7 Grammar versus style

Check whether the original text is actually incorrect before changing it. Different valid word orders may sound more or less natural without being grammar mistakes.

**Case: SRB-EVR-014.** `...nisam nikad bio tamo` is grammatically acceptable. Rewriting it as `...nikad nisam bio tamo` may be a style choice, but it is not a required grammar correction. If the instruction says _correct only errors_, explain that no correction is needed.

### 7.1 Numerals, cases, and agreement

Inspect both the corrected form and the explanation of the rule. A correct example does not make an incorrect grammar explanation acceptable.

**Case: SRB-EVR-013.** Distinguish numeral-related forms carefully. Avoid statements such as “the noun is always nominative plural after two, three, and four.”

### 7.2 Register and persiranje

Check agreement across the whole sentence: `Vi`, `Vas`, `Vam`, imperative forms, and accompanying verbs. A message to a colleague addressed formally should not switch to informal _ti_ mid-sentence. The formal version should still sound natural, not like a legal document.

**Case: SRB-EVR-038.** Both `Javi kad stigneš` (friend) and `Javite mi se, molim Vas, kada stignete` (colleague) are appropriate. The missing `mi` in the friendly version does not materially change meaning in this context.

### 7.3 Dialects and regional speech

Do not label a regional form as wrong simply because it differs from standard Serbian. First determine whether the user wants **interpretation**, **standardization**, or **correction**. Preserve the local pragmatic force in explanations. Be careful with `be`, `bre`, shortened words, and colloquial spellings.

**Cases: SRB-EVR-023 and SRB-EVR-030.** The tone of `be`/`bre` depends on situation and speaker; `ufrkis'o` can signal worry or panic and should not automatically be reduced to anger.

### 7.4 Idioms and localization

Check the speaker, target of the comment, emotional force, and situation. A literal English translation may be useful to explain why an idiom confuses learners, but it is not a substitute for a **natural English equivalent** if the task requests localization.

**Case: SRB-EVR-037.** `Ko te šiša!` often dismisses the listener. `Nije tvoja stvar` shifts toward "It's none of your business." Note that the appropriate English translation depends on context and degree of rudeness.

### 7.5 Sarcasm, politeness, and uncertainty

Look for context, intonation, relationship, facial expression, and previous conversation when available. Text alone may not establish intention. Do not claim that a close friendship always makes a sarcastic remark harmless.

**Cases: SRB-EVR-002, 025, 032, and 040.** Prefer cautious language such as _may_, _usually_, or _depending on tone_ when the evidence does not prove the speaker's intent.

### 7.6 Preserve facts and avoid inventing reasons

Do not invent excuses, dates, reasons, offers, or motivations to make a message more fluent.

**Cases: SRB-EVR-003, 017, and 033.** `Sad tek vidim` adds a fact the user did not provide; `ponudio posao` adds an offer; an example about someone arriving on time cannot replace a scenario where they arrived late.

### 7.7 Ambiguity must be handled explicitly

If the prompt contains multiple readings, identify them and offer separate rewrites without presenting an invented reading as certain.

**Case: SRB-EVR-039.** `Video sam čoveka sa dvogledom` can mean that the speaker used binoculars, or that the man had binoculars. Both readings should be explained with clear rewrites.

## 8. Review workflow

**Step 1 - Intake:** Confirm test ID, prompt, model label, and complete original response.

**Step 2 - Independent reading:** Identify required outputs, constraints, and acceptable variants. Do not look at the other model's score yet.

**Step 3 - Initial scoring:** Give 1-5 on all five dimensions. Write a one-sentence reason for each score under 5.

**Step 4 - Evidence-based error tag:** Quote the shortest text that demonstrates the issue. Apply category and severity; mark ambiguous cases for review.

**Step 5 - Corrected answer:** Make the smallest change that resolves the problem while respecting the original instructions and meaning. If the answer is already acceptable, do not manufacture a correction.

**Step 6 - Feedback:** Write 2-4 B2 English sentences covering (a) observed issue, (b) why it matters, and (c) the better approach.

**Step 7 - Pairwise decision:** Compare the independently evaluated responses. Record preference and strength with a grounded explanation.

**Step 8 - Approval:** Mark `approved` only after evaluator review. Otherwise keep `needs_evaluator_review`; for unsuitable examples use `rejected`, and for a requested change use `revision_needed`.

**Step 9 - Final QA:** Check that totals add up; model labels, quotes and test IDs match; feedback does not make stronger claims than the evidence; no sensitive data or copyrighted long text is added without rights.

## 9. Worked review examples

### Example A - Minimal grammar correction (SRB-EVR-014)

- **Task constraint:** Only correct grammatical mistakes.
- **Observed issue:** A valid Serbian word order was rewritten.
- **Primary category:** `UNNECESSARY_EDIT`.
- **Good correction:** Say the original sentence is already grammatically acceptable.
- **B2 feedback:** “The original word order is valid in Serbian. The user asked for grammar correction only, so changing the sentence is unnecessary. Keep the text unchanged when there is no grammar error.”

### Example B - Meaning of colloquial speech (SRB-EVR-025)

- **Task need:** Explain the meaning and social tone of `Boli me uvo`.
- **Observed issue:** A categorical claim that the phrase is polite.
- **Primary category:** `PRAGMATIC_OVERGENERALIZATION`.
- **Good correction:** Explain that the phrase means “I don't care” and can sound rude or dismissive depending on context.
- **B2 feedback:** “The response explains the meaning but is too certain about politeness. The expression can sound rude in some situations. The model should mention how tone and relationship affect its use.”

### Example C - Idiom interpretation (SRB-EVR-037)

- **Task need:** Meaning, degree of rudeness, why literal translation fails.
- **Observed issue:** `Nije tvoja stvar` shifts the target of the message.
- **Primary category:** `IDIOM_LOCALIZATION_ERROR`.
- **Good correction:** Explain that `Ko te šiša!` dismisses the person or their opinion, not merely their right to know about something. Use an English equivalent matched to the tone.
- **B2 feedback:** “The response recognizes that the phrase is informal and rude, but some paraphrases change its meaning. The model should preserve who is being dismissed and explain a natural English equivalent.”

## 10. Reviewer disagreement and quality checks

When two reviewers disagree, compare the exact words and the prompt constraints. First decide whether an issue is an objective error or an acceptable regional/style variant. If no evidence settles the question, record `disputed` and explain both readings. Do not force agreement or silently change the original response.

Before publishing, check a sample of reviewed items for consistency of categories and severities. Keep a change log with date, test ID, decision, and reason. A final release should clearly state how many records were manually approved and which findings remain provisional.

## 11. Data schema and release requirements

Each evaluation should be linkable to its original prompt and exact model response. Suggested core evaluation fields:

`test_id`, `evaluator_id`, `scores`, `preferred_response`, `preference_strength`, `error_categories`, `error_severity`, `evaluation_status`.

Each correction item should include:

`correction_id`, `source_test_id`, `model`, `original_prompt`, `original_model_response`, `proposed_corrected_response`, `primary_error_category`, `error_severity_proposed`, `evaluator_feedback_en_b2`, `review_status`, `provenance`.

For the current 15-item correction draft, `review_status = needs_evaluator_review`. These entries are selected examples, **not a random sample**. Do not use them to calculate overall model failure rates. The three source files still need consistent machine-readable formatting and model-label verification before automated totals are reported.

## 12. Final release checklist

- All 40 prompts are present and match the recorded original text.
- Model names and response texts have been checked against source material.
- Scores and totals are internally consistent and evaluator-approved.
- Error categories follow the documented taxonomy (including legacy-tag mappings).
- Each selected correction is accurate and the evaluator has approved it.
- Sarcasm, idioms, and dialect variants are presented with appropriate uncertainty.
- The error report includes only verified examples and properly calculated counts (if counts are published).
- README describes the methodology, AI assistance, limits, and evaluator's role accurately.
- No draft claim is presented as independently verified professional employment experience.

---

**Related project files:** `prompts.jsonl`, `responses.jsonl`, `evaluations.jsonl`, `error_analysis_report.md`, `correction_dataset.jsonl`, `correction_review_sheet.md`.
