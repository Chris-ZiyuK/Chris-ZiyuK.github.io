---
title: "Token-Level Attribution of Identity-Induced Score Sensitivity in Late-Interaction Retrieval"
short: "Auditing a retrieval audit, including my own"
slug: colbert-tcd
role: First author
period: "2026–"
# 状态措辞红线见 CLAUDE.md §3。2026-09-16 更正:ARR 那一轮已结束,现在没有 venue 在审。
# 不可写 under review / targeting EMNLP / accepted。投出去或挂 arXiv 后再改这一行。
status: "Manuscript in revision"
status_shape: hollow
order: 2
tags: [information retrieval, evaluation, measurement validity, fairness]
links: {}
sources:
  - "corpus/colbert-audit.md — 修正后的量化结果表 + 状态措辞红线"
  - "cv-academic.md — First-Author Research Project (Neural Retrieval Auditing)"
---

**Problem.** Neural retrievers score a query against a document with a learned
similarity, and that score moves when you swap a name in the query. Aggregate
fairness metrics tell you *that* it moved. They do not tell you *where* in the
query the movement came from, so there is nothing concrete to fix.

**What I did.** ColBERT-style late interaction scores decompose exactly, one
query token at a time. I used that to define Token Contribution Disparity — an
exact, not approximate, attribution of a counterfactual score shift to individual
query tokens — and ran a controlled audit of identity-induced sensitivity on top
of it, with MaxSim argmax tracing to rule out the simpler explanations.

**What happened next is the part worth reading.** After a full ACL Rolling Review
cycle, and before sending the paper anywhere else, I audited my own
implementation rather than only my numbers. Two defects had been sitting in code
written months earlier, both predating submission: a model-loading path that
silently dropped ColBERT's projection head, so the scores were never ColBERT's
scoring function, and a string substitution without word boundaries that
corrupted most of one control condition. I reran all 55,440 controlled tests plus
both validation sets under corrected scoring.

**What survived, and what did not.** The main effect held: function words absorb
roughly 1.4× more identity-induced score change than content words, and the three
settings that had disagreed now converge on that figure. Gender mismatch remains
the most stable predictor. Cross-race pairing still shows no independent
amplification once confounds are controlled. BM25 still shows no sensitivity
under identical swaps. But the headline claim — that identity perturbations
exceed matched non-identity ones — did not survive: identity swaps and ordinary
number-word swaps became indistinguishable, and both sit below nonce words. I
retracted it.

**Where it is going.** The paper is being rebuilt around what the corrected data
actually supports, which I think is the more useful claim anyway: token-level
counterfactual attribution cannot separate social bias from general perturbation
sensitivity, and aggregate score-sensitivity metrics are scale-dependent and not
comparable across architectures — adding a projection head to the same encoder on
the same data moves the aggregate from 0.037 to 0.115 while the token-level ratio
barely moves at all. It is a paper about measurement validity now.

**Origin.** Started as a project in Brown's CSCI 2952W (Critical AI and Data
Studies), with guidance from the course instructor.
