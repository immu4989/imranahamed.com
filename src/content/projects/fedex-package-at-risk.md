---
title: "Package-at-risk and loss-intensity models at FedEx"
description: "Production ML across the logistics network. Identified at-risk shipments before they failed; quantified customer-level loss exposure."
pubDate: 2022-08-01
role: "Senior Data Scientist · FedEx"
stack: ["Python", "Azure ML", "Ensemble Models", "Real-time Inference"]
order: 3
---

Three years on the data-science team. The two models I'd point to:

## Package-at-risk (88% accuracy)

Per-shipment classifier that scored the probability a package would miss its delivery
commitment, given the customer's historical shipping profile and the package's current
trajectory through the network. Ran in production on Azure with real-time inference,
feeding operations dashboards.

## Loss-intensity (90% accuracy)

Customer-level model — given a customer's shipping mix and history, what's our expected
loss exposure over the next N days. Used by relationship managers and ops planning. Fewer
inferences, longer-horizon, higher-stakes.

## What was hard

The realtime constraint forced architectural choices the offline accuracy numbers don't
reflect. The first version of package-at-risk was a stacked ensemble that wouldn't fit the
latency budget; the production version traded a couple points of accuracy for a model
that hit SLA every time. The right tradeoff, but only obvious in hindsight.

Earlier on the team I'd also done a GDPR-compliant entity-resolution model for customer
records — 95% retrieval at the dedup threshold — and a fraud-detection model on shipping
patterns that went into the legal team's tooling.
