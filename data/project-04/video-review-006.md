## SRB-MQA-006 — Coffee Preparation


| Approximate time | Original model claim | Human correction | Error |
|---|---|---|---|
| 00:00–00:02 | Coffee cup in foreground; white liquid begins pouring from pitcher | Cup is in background; metal pitcher and steam wand visible; no pouring into cup | Spatial and action hallucination |
| 00:02–00:04 | Pouring continues; bright area appears on coffee | No pouring observed; no verified pattern on coffee | Fabricated action |
| 00:04–00:06 | White latte-art pattern being shaped | White area is person's shirt; person controls pitcher | Object misidentification |
| 00:06–00:08 | Latte-art pattern becomes more complex | Larger portion of white shirt enters frame | Temporal hallucination |
| 00:08–00:10 | Latte-art decoration completed | Coffee cup remains untouched in background | Fabricated event |

## Corrected human event timeline

| Time | Human-confirmed event |
|---|---|
| 00:00–00:03 | Coffee is dispensed from the machine while the person simultaneously heats milk for foam using the steam wand. |
| 00:03–00:06 | Coffee dispensing has finished; milk heating continues. |
| 00:07–00:10 | The person moves the metal milk pitcher away and wipes the steam wand with a cloth. |

**Additional model omissions:** Simultaneous coffee dispensing and milk heating; transition when coffee dispensing stops; removal of pitcher; cleaning the steam wand with a cloth.

**Correct elements:** Coffee cup, metal pitcher, person controlling pitcher position.

**Primary finding:** The model inferred a familiar latte-art workflow from a coffee-making context, then treated the person's white shirt as a growing milk pattern. This caused a fabricated event sequence rather than a merely imprecise description.

**Error taxonomy:** `fabricated_action_sequence`, `temporal_hallucination`, `action_hallucination`, `object_misidentification`, `spatial_error`, `unsupported_visual_claim`.

