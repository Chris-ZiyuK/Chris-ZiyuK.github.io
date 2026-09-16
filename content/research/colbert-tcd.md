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

ColBERT-style late interaction scores decompose exactly, one query token at a
time. I used that to build Token Contribution Disparity, an exact attribution of
a counterfactual score shift — what happens when you swap a name in the query —
back to the tokens that produced it. Aggregate fairness metrics tell you a score
moved; this tells you where. The audit built on it found that tokens carrying no
identity content absorb more of the induced change than content words do, a
pattern that holds under cluster bootstraps and mixed-effects models and that
BM25 shows no trace of.

After a full ACL Rolling Review cycle I audited the implementation rather than
the numbers, found two defects older than the submission, and reran everything
under corrected scoring; the function-word effect held, the headline claim that
identity perturbations exceed matched non-identity ones did not, and I retracted
it. What the corrected data supports is narrower. Token-level counterfactual
attribution cannot separate social bias from general perturbation sensitivity,
and the aggregate form of the metric is scale-dependent enough that comparing
architectures on it is unsound. The paper is being rebuilt around those two
claims.

Started as a project in Brown's CSCI 2952W (Critical AI and Data Studies), with
guidance from the course instructor.
