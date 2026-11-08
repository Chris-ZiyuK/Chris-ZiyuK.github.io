---
title: "Exact but Not Specific: A Measurement-Validity Analysis of Token-Level Name-Swap Audits in Late-Interaction Retrieval"
label: "ColBERT · Retrieval auditing"
short: "Exact but not specific"
slug: colbert-tcd
role: First author
period: "2026–"
status: "In revision"
status_shape: hollow
status_highlight: true
highlights: []
order: 4
tags: [information retrieval, evaluation, measurement validity, fairness]
takeaway: "Non-identity substitutions reproduce the token-sensitivity pattern seen under name swaps, challenging its interpretation as identity-specific."
contribution: "I developed the token-level attribution analysis and tested its interpretation with non-identity controls."
figure:
  src: /images/research/colbert-controls.svg
  alt: "Function-to-content token sensitivity ratios for identity-name, numeral, and nonsense-word swaps, with confidence intervals."
  caption: "Three selected controls under corrected scoring. Lines show test-level and swap-pair cluster-bootstrap 95% intervals. Each condition uses 280 tests and five swap pairs; numeral swaps use modified templates. These comparisons do not establish equivalence."
  sourceLabel: "Adapted from manuscript · Figure 1(a)"
links: {}
sources:
  - "User update, 2026-11-08 — highlight manuscript status; revision wording retained"
  - "Research manuscript: Exact but Not Specific — Figure 1(a), perturbation panel, and measurement-validity analysis"
  - "cv-academic.md — First-Author Research Project (Neural Retrieval Auditing)"
---

When changing a name changes a retrieval score, where does that change occur—and
what does it tell us? ColBERT-style late interaction lets us decompose a document's
score shift exactly into contributions from individual query tokens. I developed
Token Contribution Disparity to trace these changes and tested whether its
patterns distinguish identity swaps from other perturbations.

In the name-swap study, function words show greater average sensitivity than
content words. But numeral and nonsense-word swaps reproduce that pattern.
The decomposition locates score changes; these controls do not support interpreting
the pattern as identity-specific. This is a limit on the audit's interpretation,
not evidence that the retriever is free of bias.

The study began in Brown's CSCI 2952W (Critical AI and Data Studies), with guidance
from the course instructor. The manuscript is in revision.
