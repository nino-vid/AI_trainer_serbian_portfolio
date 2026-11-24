# Project 04 – Serbian Multimodal Annotation & QA

This project demonstrates human-in-the-loop evaluation of ChatGPT's multimodal understanding of multimodal instructions. Four real-world images and three video recordings were used to assess object recognition, counting, spatial reasoning, visual grounding, OCR extraction, action recognition, object tracking, and temporal reasoning.

The video evaluation focuses on identifying activities, tracking moving objects, recognizing sequences of events, and analyzing actions across timestamps.

## Project Structure

```text
Project-04-Serbian-Multimodal-Annotation-QA/
├── media/
│   ├── images/
│   │   ├── kitchen.avif
│   │   ├── menu.avif
│   │   ├── street.avif
│   │   └── shelf.avif
│   └── videos/
│       ├── Pedestrian-Crossing.mp4
│       ├── Coffee-Preparation.mp4
│       └── Traffic-Intersection.mp4
├── tasks.jsonl
├── annotations.jsonl
├── model_responses.jsonl
├── evaluations.jsonl
├── human_review.md
├── error_analysis_report.md
└── README.md
```

## File Descriptions

| File / Folder | Description |
| --- | --- |
| `media/images/` | Four original images: kitchen, menu, street and shelf. |
| `media/videos/` | Three videos: Pedestrian Crossing, Coffee Preparation and Traffic Intersection. |
| `tasks.jsonl` | Seven evaluation tasks, media references, prompts and objectives. |
| `annotations.jsonl` | Human-provided reference annotations, objects, counts, events and timestamps. |
| `model_responses.jsonl` | Original, unmodified ChatGPT responses for all seven tasks. |
| `evaluations.jsonl` | Comparisons, identified errors and severity assessments. |
| `human_review.md` | My observations and corrections for four images and three videos. |
| `error_analysis_report.md` | Analysis of hallucinations, omissions, OCR and temporal reasoning failures. |
| `README.md` | Project objectives, methodology, workflow and findings. |

## Dataset Overview

- **Language:** Serbian
- **Evaluated AI model:** ChatGPT
- **Total evaluation tasks:** 7
- **Image-based tasks:** 4
- **Video-based tasks:** 3
- **Human annotators:** 1
- **Evaluation methodology:** Human-in-the-loop evaluation
- **Reference annotations:** Human-provided, without independent verification

### Image Evaluation Tasks

- **Kitchen** — Object Identification & Counting
- **Shelf** — Object Tagging & Spatial Relations
- **Street** — Visual Reasoning & Hallucination Detection
- **Café Menu** — OCR & Text Understanding

### Video Evaluation Tasks

- **Pedestrian-Crossing.mp4** — Video Annotation & Temporal Reasoning
- **Coffee-Preparation.mp4** — Action Recognition & Temporal Reasoning
- **Traffic-Intersection.mp4** — Vehicle Tracking & Temporal Reasoning

The project documents model strengths, limitations, and failure patterns through structured human feedback. Original model responses are preserved to support transparent evaluation and reproducibility.
