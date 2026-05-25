---
title: "LLM-as-judge is not free"
description: "A note on the hidden costs of using an LLM to score another LLM's outputs."
pubDate: 2026-05-22
tags: ["eval", "agents"]
---

A pattern I see often: team builds an agent, decides to grade it with LLM-as-judge,
runs it on every PR, and is surprised when their eval bill exceeds their model bill.

Three things people forget:

1. **The judge is itself a model call** — usually at frontier-tier pricing, because you
   want the judge to be smarter than the system under test. A 5-rubric scorecard per
   sample on 1000 samples per PR is 5000 frontier calls per PR.
2. **You usually want multi-judge consensus** — single-judge scores are noisy. Three
   judges per rubric voted by majority is 15x your original judge cost.
3. **You still need a labeled subset** — to validate that the judge agrees with humans.
   If you skip this, the judge is just a vibe-check at API cost.

Use it. But budget it as a model expense, not a CI expense. And cap how often you re-run
the full eval — most changes only need a smoke set.
