---
title: "Token-Level Attribution of Identity-Induced Score Sensitivity in Late-Interaction Retrieval"
short: "Where bias hides in neural retrieval"
slug: colbert-tcd
role: First author
period: "2026–"
# 状态措辞红线见 CLAUDE.md §3。不可写 accepted / EMNLP paper / forthcoming。
status: "Under review at ACL Rolling Review (May 2026 cycle)"
status_shape: half
order: 1
tags: [information retrieval, evaluation, fairness, interpretability]
links: {}
sources:
  - "corpus/colbert-audit.md — 量化结果表"
  - "cv-academic.md — First-Author Research Project (Neural Retrieval Auditing)"
---

**Problem.** Neural retrievers score a query against a document with a learned
similarity, and that score moves when you swap a name in the query. Aggregate
fairness metrics tell you *that* it moved. They do not tell you *where* in the
query the movement came from, so there is nothing concrete to fix.

**What I did.** ColBERT-style late interaction scores decompose exactly, one
query token at a time. I used that to define Token Contribution Disparity — an
exact, not approximate, attribution of a counterfactual score shift to
individual query tokens — and ran a controlled audit of identity-induced
sensitivity on top of it, with MaxSim argmax tracing to rule out the simpler
explanations.

**Results.** Across 55,440 controlled counterfactual tests, plus
naturalistic-template and MS MARCO validations: function words absorb 1.43×–2.08×
more identity-induced score change than content words. Gender mismatch was the
most stable predictor at 1.26×. Cross-race pairing showed no independent
amplification once confounds were controlled — a negative result I kept.
BM25 shows no sensitivity under identical swaps, so this is specific to neural
retrieval, not to the substitutions themselves. Conclusions hold under
multi-level cluster bootstraps and mixed-effects models.

**Origin.** Started as a project in Brown's CSCI 2952W (Critical AI and Data
Studies) and developed into a submission, with guidance from the course
instructor.
