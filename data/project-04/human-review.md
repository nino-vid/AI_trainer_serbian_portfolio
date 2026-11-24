# Project 04 — Multimodal Annotation & QA

---

## SRB-MQA-001 — Kitchen

**Reviewer:** Nino

**Model:** ChatGPT

| Object | Model response | Human review | Classification |
| ------ | -------------- | ------------ | -------------- |
| Bar stools | 3 | No clearly visible stools; only a small part of one chair is barely visible | Incorrect count / overclaim |

| Pendant lights | 3 | None visible | Hallucinated objects |

| Ovens | 2 | 1 | Incorrect count |

| Microwave | Omitted | 1 visible | Omission |

| Sink | 1 | None visible | Hallucinated object |

| Faucet | 1 | None visible | Hallucinated object |

| Refrigerator | 1 | None visible | Hallucinated object |

| Extractor hood | 1 | None visible | Hallucinated object |

| Cooktop | 1 | Present above the oven | Object identified; location in model answer not grounded |

| Kitchen island | 1 | No island; ordinary continuous countertop next to the stove | Misclassification / hallucination |

| Potted plant | 1 | None visible | Hallucinated object |

| Bowl | 1 | Multiple bowls / containers visible | Undercount |

## Spatial relation errors

The model described stools in front of an island, pendant lights above an island, a sink built into an island, a faucet above a sink, and a hood above a cooktop. 

## Error taxonomy

- **Visual hallucination:** invented lights, sink, faucet, refrigerator, extractor hood, plant, and island.
- **Counting error:** stools, ovens, and bowls/containers.
- **Omission:** microwave.
- **Spatial grounding failure:** relations built on invented objects.
- **Overconfidence:** unsupported descriptions were presented as confirmed facts.

## Severity



## QA notes

- All findings above are attributed to the my review; no independent adjudication is claimed.
- Do not silently edit the original model response shown on the Model Responses page.
- Confirm ambiguous chair visibility and exact number of bowls/containers before finalizing the reference annotation.

## Additional human-ground-truth detail



---

## SRB-MQA-002 — Shelf

**Review status:** My corrections documented; numeric score pending.

## Confirmed corrections

| Model claim | My reference | Classification |
| ----------- | --------------- | -------------- |
| Books/magazines on upper left | 21 DVD films | Object misclassification / counting specificity |

| Blue cylindrical container | Small blue Bluetooth speaker | Object misclassification |

| Framed illustration | Music CD | Object misclassification |

| Middle shelf unspecified albums | Coldplay, Ricky Martin and Leona Lewis albums | Incomplete identification |

| No open magazine noted | One open magazine behind Ricky Martin and Leona Lewis albums | Omission |

| Right middle shelf vaguely described | Horizontal book, several CDs, horizontal book/magazine | Incomplete identification |

| Dark decorative bottle on lower left | Decorative board shaped like a bottle | Object misclassification |

| Several horizontal books | Four books | Imprecise counting |

| Terracotta plant pot | Plastic plant pot | Incorrect material |

| Albums or boxes on lower right | Music albums | Incomplete classification |

## Correctly identified

White potted trailing plant, dark bust and black board, green glass vase, large white container, yellow toy car, Coldplay album, patterned decorative vase, metal bottle, patterned container, lower shelf plant, general three-shelf layout and several spatial relations.

## Uncertainty

Exact count of CDs on the middle-right, thin objects above the lower patterned container and rightmost albums was not supplied. Do not invent counts.

## Assessment



---

## SRB-MQA-003 — Street

## My Reference Annotations

In the foreground, a woman is crossing the street while a young man rides a bicycle and talks on his phone. Behind them, on the right, is a street stall selling fruit, vegetables, and other products. A mother holds her son’s hand, with another man standing nearby. Behind them is a taxi with its door open and the driver standing beside it. Two more people are partially visible behind the driver, and another person can be seen in the distance. Sidewalks and buildings are visible.

The description identifies at least eight people, including the cyclist; this is not a confirmed total count for the entire image.

## Comparison with original model response

| Category | Model response | Human review | Classification |
| -------- | -------------- | ------------ | -------------- |
| People | Several pedestrians | Specific people, activities, and positions described | Insufficient detail |

| Cyclist | Not mentioned | Man riding bicycle while speaking on phone | Omission |

| Street stall | Not mentioned | Fruit and vegetable stall on right | Omission |

| Taxi | Multiple cars, unspecified | Taxi with open door and driver standing beside it | Missed specific object and activity |

| Sidewalks and buildings | Mentioned | Confirmed | Correct at category level |

| Spatial relations | Generic | Specific foreground/right/behind/distant relations | Insufficient grounding |

## Error taxonomy

- `object_omission`
- `activity_omission`
- `generic_spatial_description`
- `imprecise_count`
- `unsupported_vehicle_plurality`

## SRB-MQA-004 — Café Menu

## Findings

The model recognized a café menu but failed to extract any item, category, size, price, currency or add-on. The human-provided transcription contains 18 distinct beverage entries across HOT (10), ICED (4), and TEA & MORE (4), plus milk options, espresso-shot surcharge, and syrups.

**Cheapest listed base drink:** drip coffee 8 oz — $3.00.  
**Most expensive listed base drink:** iced chai latte 16 oz — $6.00.  
**Two cheapest distinct drinks:** drip coffee 8 oz ($3.00) + cafe au lait 8 oz ($3.50) = **$6.50**.

The pourover has a _Market Price_, so it cannot be ranked without further information. Hot chocolate has three listed prices but sizes were not provided.

## Error classification

- OCR extraction failure
- Missing categories and products
- Missing prices, currency and size extraction
- Incomplete price comparison and arithmetic task
- No fabricated menu content detected


