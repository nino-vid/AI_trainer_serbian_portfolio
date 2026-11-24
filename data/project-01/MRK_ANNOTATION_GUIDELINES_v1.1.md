# Serbian conversational speech annotation — Guidelines

**Project:** MRK video/audio portfolio demonstration. **Annotator:** `Nino`. **Scope:** independent annotator work;

## Evidence hierarchy

1. **Verbatim acoustic** records what is heard, including clipped words, particles, laughter references, hesitations, and unusual regional language.
2. **Orthographic normalization** expands mechanically reduced spellings where justified but does not replace words with synonyms or remove local particles.
3. **Reconstruction / standard Serbian paraphrase** may recover truncated forms or explain a local expression; record evidence and never silently overwrite verbatim.
4. **English literal gloss** preserves wording, even if unnatural. **English localization** may convey the social/pragmatic function, provided it is explicitly labeled as scene-specific, not a dictionary meaning.
5. **Contextual interpretation** (video, event, response of peers) is valid evidence but not acoustic fact; clearly state the evidence source and scope.

## Tag schema

All speech/event segments use: `annotation_tags` with:
`speech_delivery` (e.g. shouting, slurred_speech),
`linguistic_features` (dialect particle, truncation, colloquial expression),
`audio_conditions` (music, noise, true overlap),
`vocal_events` (laughter etc.),
`emotion` (null unless supported) and
`pragmatic_function` (speaker intent in conversational context). Empty arrays are valid. Tags such as clinical intoxication diagnosis or psychological personality traits do not belong in acoustic labels.

## Key language decisions

- **“Šta je ovo za m-”**: verbatim remains truncated; annotator reconstructs “mene” and interprets intended meaning as “This is light work for me, bro.”
- **“Lele”**: retain in Serbian transcript/literal gloss; translate to “Oh man!” in context, without adding unspoken profanity.
- **“MRK!”**: annotator interprets as **“Odjebi!”** in the filmed interaction, used to forcefully dismiss further interaction. English localization: **“Fuck off!”**. This is "pragmatic translation for this scene", not a claim that every instance of “mrk” means this, nor a word-for-word gloss. The speaker’s response is also part of the peer-challenge setting, but the precise function of this utterance should not automatically be marked as triumphant self-praise.
- **“Mr’”**: truncated echo of “MRK”, retained acoustically; localized as “Fu—” only to echo the chosen English adaptation. The acoustic record must not assert an English swear was spoken.
- **“Odlična”**: word identity confirmed by annotator; /d/ is described as **partially articulated**, not necessarily devoiced.
- **“Evo ga”**: success announcement about opening the bottle, not an idiom.
- **“Zajebala vek?”**: annotator interprets a context-dependent, extreme-quality evaluation, either positive or negative in general; positive in this scene. “Is it really that good?” is proposed English localization, not a lexical claim or proven established idiom.
- **“Uf”**: “Oof!” as restrained localization, avoiding an added explicit agreement.
- **“Srećko, be!”**: preserve “be” in verbatim and orthographic text, with “Srećko, bre!” only as a standard Serbian paraphrase.
- **“Ma, sin Dragan”**: pragmatic function `reluctant_agreement`; no mandatory emotion label.

## Audio events, time intervals and overlap

- Timestamp fields are annotator-measured in milliseconds. Preserve precise overlaps, including the 100 ms overlap of segments 7 and 8.
- Background music is an **audio event**, never a person/speaker. It can coexist with speech but is not itself speech overlap.
- Overlap tags require intersection of _speech_ intervals (not simply the existence of background music).
- Laughter can occur between words of **the same speaker**: assign the same speaker ID only if audible identity is supported. Otherwise use `speaker_id: null` and flag for speaker review.

## Dialect and speaker profiles

- Southern Serbian speech features are reported by the annotator for SPK_01 and SPK_02, not assumed for SPK_03 and SPK_04.
- The more specific Prizren–Timok classification requires documented phonological, morphological and syntactic evidence and should not be asserted automatically.

## Media and QA

- Original source is a YouTube video; capture by phone is reported by the annotator.
