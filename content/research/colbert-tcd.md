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
back to the individual tokens that produced it. Aggregate fairness metrics tell
you a score moved. This tells you where in the query it moved.

The audit built on top of it found a function-word effect. Tokens carrying no
identity content absorb more of the induced score change than content words do,
the pattern holds under cluster bootstraps and mixed-effects models, and BM25
shows nothing at all under the same swaps.

After a full ACL Rolling Review cycle, and before sending the paper anywhere
else, I audited the implementation rather than the numbers. Two defects had been
sitting in code written months earlier, both older than the submission: a
model-loading path that silently dropped ColBERT's projection head, so the scores
were never ColBERT's scoring function, and a string substitution without word
boundaries that corrupted most of one control condition. I reran every controlled
test and both validation sets under corrected scoring.

The function-word effect held. The headline claim did not. Identity swaps and
ordinary number-word swaps came out indistinguishable, and both sat below
nonsense words, so the claim that identity perturbations exceed matched
non-identity ones is no longer in the paper.

What the corrected data supports is narrower. Token-level counterfactual
attribution cannot separate social bias from general perturbation sensitivity.
And the aggregate form of the metric is scale-dependent: adding a projection head
to the same encoder on the same data moves the aggregate several-fold while the
token-level ratio barely moves at all, which makes comparing architectures on it
unsound. The paper is being rebuilt around those two claims.

Started as a project in Brown's CSCI 2952W (Critical AI and Data Studies), with
guidance from the course instructor.
