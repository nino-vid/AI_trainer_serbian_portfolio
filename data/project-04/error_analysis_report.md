# Project 04 — Serbian Multimodal Annotation & QA

## Error Analysis Report

**Evaluated system:** ChatGPT

**Evidence:** Original Model Responses, My Review, and reference annotations.

**Reviewer:** Nino


## Executive summary

Four image-based tasks assessed object identification, counting, spatial relations, scene understanding, and OCR. The my reviewer identified distinct weaknesses across tasks: invented objects in the kitchen, incorrect fine-grained classifications on the shelf, missed activities and scene elements in the street, and failure to extract readable menu text. The original model responses are retained without retrospective correction.

| Task | Focus | Principal failure |
| ---- | ----- | ----------------- |
| Kitchen | Object tagging, counting, spatial relations | Multiple nonexistent objects; incorrect scene layout |

| Shelf | Fine-grained identification and grouping | Real objects assigned wrong categories |

| Street | Visual reasoning and activity recognition | Important people, activities and objects omitted |

| Menu — Café Menu | OCR, extraction, price reasoning | No products or prices extracted |

## Kitchen

### Expected task

Identify and count visible objects and describe grounded spatial relationships without guessing unseen details.

### Human-review findings

- The model asserted **three bar stools**, while the reviewer saw only a tiny visible portion of one chair.
- It asserted **three pendant lights**, a **sink**, **faucet**, **refrigerator**, **extractor hood**, **kitchen island**, and **potted plant** that the reviewer reported absent.
- It counted **two ovens** instead of one and **one bowl** despite multiple bowls/containers.
- It omitted a **microwave**.
- Spatial statements such as lights above an island and a faucet above a sink were built on absent or misclassified objects.

### Additional reference details

The reviewer described shelves with bowls, pots and lids, hanging cookware, a microwave, stove and oven, a continuous worktop, six wooden utensils, six eggs, six tomatoes, a cutting board, seasoning containers, oil and a barely visible chair. Some contents (herb species and seasoning identity) remain uncertain.

### Error categories

`visual_hallucination`, `object_misclassification`, `counting_error`, `object_omission`, `spatial_grounding_failure`, `overconfident_assertion`.

## Shelf

### Expected task

Identify objects, count by category, describe shelf-by-shelf layout, and distinguish partially obscured items.

### Human-review findings

- **21 DVD films** were described as books or magazines.
- A **small blue Bluetooth speaker** was described as a cylindrical container.
- A **music CD** was described as a framed illustration.
- The model did not identify the **open magazine** behind the Ricky Martin and Leona Lewis albums, and did not specifically identify those two albums.
- A **decorative board shaped like a bottle** was described as a decorative bottle.
- **Four horizontal books** were reported only as “several.”
- A **plastic plant pot** was called terracotta.
- Right-side albums and books were described too generically.

### Correct elements

The reviewer confirmed the general three-shelf layout, trailing plant, bust, green glass vase, white container, yellow toy car, Coldplay album, patterned vase, metal bottle, lower plant and several spatial relationships.

### Error categories

`fine_grained_object_misclassification`, `attribute_error`, `object_omission`, `imprecise_count`, `incomplete_labeling`.

**Severity: Moderate (provisional).** Many objects and the overall arrangement were identified correctly, but several object types and attributes were wrong.

## Street

### Expected task

Identify vehicles, pedestrians and traffic-related elements, count distinguishable subjects, describe their activities and spatial relationships, and avoid inferring motion or intent from a still image.

### Human-review findings

The original model response referred generally to vehicles, pedestrians, sidewalks and buildings, but omitted key scene-specific observations:

- A **woman crossing the street**.
- A **man riding a bicycle while speaking on a phone**.
- A **street stall selling fruit, vegetables and other goods** on the right.
- A **mother holding her son's hand** and a nearby man.
- A **taxi with an open door** and its driver standing beside it.
- **Two partly visible people** behind the driver and **one person farther down the street**.

The human description accounts for **at least eight people including the cyclist**; this is not asserted to be an exhaustive count. The model's claim of multiple cars has not been independently verified as false.

### Error categories

`object_omission`, `activity_omission`, `insufficient_visual_detail`, `generic_spatial_description`, `imprecise_count`.

**Severity: Moderate (provisional).** The model captured the broad setting but failed to answer much of the requested scene-specific task.

## Café Menu

### Expected task

Transcribe visible menu text, organize items by category, identify prices and sizes, find the cheapest and most expensive listed products, and calculate the price of two cheapest distinct drinks.

### Human-review findings

The model identified a café menu but extracted **no category headings, product names, prices, sizes or currency**. The reviewer transcribed a menu for **the lab**, including:

- **HOT:** 10 beverage entries.
- **ICED:** 4 beverage entries.
- **TEA & MORE:** 4 beverage entries.
- Milk options, a **$2.00 extra espresso shot**, an **$0.85 oat-milk charge** and syrup flavors.

Based on the human-provided transcription:

- Lowest stated base drink price: **drip coffee, 8 oz — $3.00**.
- Highest stated base drink price: **iced chai latte, 16 oz — $6.00**.
- Two cheapest distinct drinks: **drip coffee, 8 oz ($3.00) + cafe au lait, 8 oz ($3.50) = $6.50**.
- **Pourover** is marked _Market Price_ and cannot be ranked; hot-chocolate sizes were not specified in the transcription.

### Error categories

`ocr_extraction_failure`, `missing_structured_data`, `incomplete_response`, `unperformed_price_comparison`, `unperformed_arithmetic`.

**Severity: Major.** The main extraction task was not completed. The response did **not** invent menu items or prices, so this is not classified as OCR hallucination.

## Cross-task error taxonomy

| Error type | Observed in | Interpretation |
| ---------- | ----------- | -------------- |
| Invented / unsupported objects | Kitchen | False-positive visual claims |

| Fine-grained object confusion | Kitchen, Shelf | Broad visual resemblance mistaken for correct identity |

| Counting failures / missing exact counts | Kitchen, Shelf, Street | Count incorrect or not supplied |

| Object and activity omission | All four, in different forms | Relevant visible information not extracted |

| Ungrounded or generic spatial descriptions | Kitchen, Street | Relations fabricated or insufficiently specific |

| Attribute mistakes | Shelf | Wrong object material or type |

| OCR extraction failure | Café Menu | Text, quantities and prices not extracted |

| Appropriate non-fabrication | Café Menu | No invented prices, despite task failure |

## Quality assurance and methodology

1. Preserve the first ChatGPT response for each task exactly as generated; never replace it with a corrected version.
2. Maintain human reference annotations separately from model output and evaluation decisions.
3. Treat user-supplied descriptions as **human reference annotations**, not independently image-verified ground truth.
4. Record uncertainty for partly visible objects and unspecified counts; do not invent exact quantities.
5. Distinguish **false positives** (objects claimed but absent) from **misclassifications** (real object, wrong label), **omissions**, and **task non-completion**.
6. Assign numeric scores only after the reviewer confirms a consistent rubric. The qualitative severities here are provisional.
7. Document any follow-up model attempts separately so they do not contaminate the original baseline response.

## Recommendations for dataset improvement

- Add explicit object-level fields for `label`, `count`, `visibility`, `position`, `confidence_or_uncertainty`, and `reviewer_verdict`.
- Add error records with `model_claim`, `human_reference`, `error_type`, and `severity`.
- For street scenes, separate object detection from **action recognition** and **spatial grounding**.
- For OCR, retain a verbatim transcription and separately store normalized prices and computed answers.
- Expand beyond these four images before reporting performance percentages or making general claims about ChatGPT's visual capabilities.

## Conclusion

The four tests demonstrate distinct evaluation skills: identifying visual hallucinations, correcting object labels, detecting omissions in complex scenes, and documenting OCR task failure. The portfolio's strongest evidence is the **human correction trail** paired with unchanged model outputs. This report documents the available qualitative findings.
