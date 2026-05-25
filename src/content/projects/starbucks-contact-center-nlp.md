---
title: "Contact-center NLP at Starbucks"
description: "Transformer-based topic modeling, summarization, and semantic search over partner contact-center data."
pubDate: 2024-06-01
role: "Senior Data Scientist · Starbucks · People Analytics"
stack: ["BERT", "T5", "Transformers", "Python", "Azure Databricks"]
featured: true
order: 2
---

Led the NLP track on the People Analytics team. The brief: turn unstructured contact-center
text into something the HR and operations teams could act on without a human reading every
ticket.

## What I built

- **Topic modeling** with BERT embeddings + clustering, refreshed weekly. Surfaced the
  top emerging partner concerns before they hit volume thresholds in the existing structured
  reporting.
- **Summarization** with T5, fine-tuned on internal call summaries to match the in-house
  writing style. Cut analyst review time on long transcripts substantially.
- **Semantic search** over the historical ticket corpus, replacing keyword search that had
  been the standard tooling.

## What I shipped vs. what I learned

The deployment was straightforward — the team had solid MLOps and Databricks infrastructure.
The harder problem was getting downstream consumers to trust the output enough to act on it.
Topic-model output is intrinsically fuzzy; people who are used to deterministic dashboards
treat that fuzz as a defect, not a feature.

The pattern that worked: never show raw model output. Always pair every topic with three
example tickets and a confidence band. The model was the engine; the explainability scaffolding
was the product.

(Details abstracted for confidentiality. Available on request for relevant conversations.)
