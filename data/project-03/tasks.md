# Serbian AI Voice Evaluation — Audio Evaluation Tasks

**Project:** Serbian-AI-Voice-Evaluation  
**Samples:** SRB-AVE-001–SRB-AVE-015  
**Language:** Serbian  
**System under evaluation:** ElevenLabs text-to-speech (single-system evaluation)

## Purpose

This document defines the 15 reference texts and the specific aspects of Serbian synthetic speech evaluated in each recording. The original Serbian prompts are preserved. Findings, scores, strengths, and issues belong in `error_analysis_report.md` and `evaluations.jsonl`, not in this task specification.

## Evaluation procedure

For each sample, compare the recording with its exact Serbian reference text. Assess pronunciation accuracy, lexical stress, intonation, rhythm and fluency, and naturalness where observable. Also assess the task-specific focus described below. Record only audible, substantiated issues; mark criteria as not assessed when evidence is insufficient. Emotional tone and pragmatic interpretation require native-speaker judgment. Scores use a 1–5 scale, with 5 representing the strongest performance.

---

### SRB-AVE-001 — Everyday Speech

**Reference text (Serbian):**

> Izvini što kasnim. Autobus nije došao na vreme, pa sam morao da sačekam sledeći. Stižem za deset minuta.

**Task objective:** Evaluate intelligibility and naturalness in a routine conversational message.

**Evaluation criteria:** Clear pronunciation; natural sentence-level stress; appropriate pauses; fluent everyday delivery; conversational naturalness.

### SRB-AVE-002 — Lexical Stress

**Reference text (Serbian):**

> U biblioteci sam pronašao zanimljivu enciklopediju. Bibliotekarka mi je preporučila još nekoliko knjiga o geografiji i arheologiji.

**Task objective:** Evaluate pronunciation and lexical stress in longer Serbian words.

**Evaluation criteria:** Accurate articulation of multisyllabic words; appropriate lexical stress; fluent phrasing; natural prosody; intelligibility.

### SRB-AVE-003 — Question Intonation

**Reference text (Serbian):**

> Ti dolaziš sutra. Ti dolaziš sutra? A kada tačno dolaziš?

**Task objective:** Test whether the voice differentiates a statement, a yes/no question, and an information question.

**Evaluation criteria:** Audible contrast between declarative and interrogative contours; appropriate emphasis; clear phrasing; natural transitions; fluency.

### SRB-AVE-004 — Emotional Delivery

**Reference text (Serbian):**

> Čekaj, šta se dogodilo? Jesi li dobro? Baš sam se zabrinuo. Drago mi je da je sve u redu.

**Task objective:** Evaluate whether the voice communicates surprise, concern, and relief through changes in delivery.

**Evaluation criteria:** Clear speech; expressive question intonation; convincing concern; credible relief in the final sentence; emotional variation and naturalness.

### SRB-AVE-005 — Sarcasm

**Reference text (Serbian):**

> Bravo, stvarno si poranio! Čekamo te samo sat vremena. Baš lepo od tebe.

**Task objective:** Evaluate whether an ironic message is delivered with an appropriately sarcastic tone rather than neutral or sincere praise.

**Evaluation criteria:** Context-sensitive intonation; ironic emphasis; pacing; pragmatic naturalness; intelligibility. Text alone does not guarantee an unambiguous sarcastic reading.

### SRB-AVE-006 — Numbers & Dates

**Reference text (Serbian):**

> Sastanak je zakazan za 15. novembar 2026. godine, u 14 časova i 30 minuta. Ukupna cena iznosi 1.250 dinara i 50 para.

**Task objective:** Evaluate spoken rendering of a date, year, time, and monetary amount.

**Evaluation criteria:** Correct verbalization of numerals; grammatical agreement; accurate date and time reading; correct currency wording; clear pauses.

### SRB-AVE-007 — Abbreviations

**Reference text (Serbian):**

> RTS je objavio vest o novom projektu EU. Predstavnici UN razgovarali su sa članovima SANU u Beogradu.

**Task objective:** Evaluate the pronunciation of institutional abbreviations within Serbian sentences.

**Evaluation criteria:** Appropriate reading of RTS, EU, UN, and SANU; consistent pronunciation; natural sentence rhythm; intelligibility.

### SRB-AVE-008 — Regional Expressions

**Reference text (Serbian):**

> Lele, što si se toliko ufrkisao? Polako, bre, nije smak sveta. Ajde, sedi da popijemo kafu.

**Task objective:** Evaluate the natural delivery of colloquial and regionally marked Serbian expressions.

**Evaluation criteria:** Accurate articulation; natural handling of “lele”, “bre”, and “ufrkisao”; conversational rhythm; appropriate informal tone; avoidance of exaggerated or unnatural delivery.

### SRB-AVE-009 — Complex Sentence Rhythm

**Reference text (Serbian):**

> Iako smo planirali da krenemo rano ujutru, zbog jake kiše i neočekivanih problema na putu odlučili smo da putovanje odložimo do sledećeg vikenda.

**Task objective:** Evaluate phrasing and breath-group organization in a long, syntactically complex sentence.

**Evaluation criteria:** Meaningful clause grouping; appropriate pauses; consistent tempo; intelligibility; natural sentence-level prosody.

### SRB-AVE-010 — Pauses & Punctuation

**Reference text (Serbian):**

> Ne, čekaj! Nemoj još da krećeš. Prvo proveri adresu, zatim pozovi taksi i tek onda izađi iz stana.

**Task objective:** Evaluate whether punctuation and instructions are reflected in prosody and pauses.

**Evaluation criteria:** Appropriate exclamatory emphasis; punctuation-sensitive pauses; clear sequence of instructions; natural pacing; fluency.

### SRB-AVE-011 — Serbian Phonemes

**Reference text (Serbian):**

> Čika Đorđe čuva četiri ćurke. Džemper je žut, a Đurđina čaša stoji na širokoj polici.

**Task objective:** Evaluate articulation of Serbian consonants, particularly č/ć and dž/đ contrasts.

**Evaluation criteria:** Accurate consonant contrasts; intelligibility; consistency across repeated target sounds; natural rhythm; no substitutions or omissions.

### SRB-AVE-012 — Foreign Names

**Reference text (Serbian):**

> Juče sam pročitao vest o Ilonu Masku, a zatim pogledao intervju sa Novakom Đokovićem. U razgovoru su pomenuti London, Njujork i Pariz.

**Task objective:** Evaluate pronunciation and Serbian grammatical integration of personal and place names.

**Evaluation criteria:** Appropriate pronunciation of names; Serbian case forms; natural adaptation of foreign names; intelligibility; fluent delivery.

### SRB-AVE-013 — Formal Announcement

**Reference text (Serbian):**

> Poštovani putnici, obaveštavamo vas da će polazak autobusa za Novi Sad kasniti približno petnaest minuta. Zahvaljujemo vam na razumevanju.

**Task objective:** Evaluate clarity, pacing, and professional tone in a public transport announcement.

**Evaluation criteria:** Formal register; clear enunciation; informative emphasis; appropriate pauses; natural announcement delivery.

### SRB-AVE-014 — Customer Support

**Reference text (Serbian):**

> Dobar dan. Razumem da imate problem sa porudžbinom. Proveriću informacije i objasniti vam koje su sledeće mogućnosti.

**Task objective:** Evaluate clarity and a polite, reassuring tone in a customer-support interaction.

**Evaluation criteria:** Politeness; calm and helpful intonation; clear pronunciation; measured pacing; natural professional delivery.

### SRB-AVE-015 — Long-Form Naturalness

**Reference text (Serbian):**

> Kada učimo novi jezik, nije dovoljno da samo zapamtimo gramatička pravila. Važno je da razumemo kako ljudi zaista razgovaraju, kada koriste neformalne izraze i kako ton glasa može promeniti značenje iste rečenice. Zato je slušanje prirodnog govora jednako važno kao i čitanje i pisanje.

**Task objective:** Evaluate sustained naturalness, coherence, and prosodic consistency over a longer passage.

**Evaluation criteria:** Stable pronunciation; meaningful pauses; coherent phrasing; natural intonation across sentences; consistent fluency and overall naturalness.

---

## Documentation notes

- Store audio files in `audio/` and use the sample IDs to link recordings, evaluations, and reference texts.
- Record the exact ElevenLabs voice, model, settings, and generation date in `audio_metadata.jsonl` when available; these details are not inferred here.
- This project evaluates one TTS system and does not establish comparative performance against other models.
- The original generated recordings should remain unchanged for reproducibility.
