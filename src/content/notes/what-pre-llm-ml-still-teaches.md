---
title: "What pre-LLM ML still teaches you"
description: "Half my career was tabular models, regression, and forecasting. Here's what holds up."
pubDate: 2026-05-18
tags: ["career", "production-ml"]
---

A list, in no particular order, of things I learned shipping classical ML that I keep
reaching for in agentic-system work:

- **Eval design is the work.** The model is the easy part. If you can't measure it, you
  can't ship it.
- **Production != notebook.** Latency, cost, fallback behavior, and the failure mode
  matrix dominate accuracy.
- **Operate on intervals, not points.** A prediction without a confidence interval is a
  guess. An action without a rollback plan is a hope.
- **The data is the bug.** ~80% of production "model bugs" turned out to be data bugs.
- **Stakeholders need explanations, not probabilities.** This is more true with LLMs,
  not less.

None of this is new. All of it is in Andrew Ng's old courses, or Hastie/Tibshirani.
What's new is the temptation to think LLMs make this stuff optional. They don't.
