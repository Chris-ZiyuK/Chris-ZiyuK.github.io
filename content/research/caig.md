---
title: "Retrieval and Question Answering over Climate Science Literature"
short: "Evaluating retrieval when nobody has the labels"
slug: caig
role: "Research Assistant, BATS Machine Learning Group (Prof. Stephen Bach)"
period: "2026–"
status: "Ongoing"
status_shape: solid
order: 2
tags: [information retrieval, RAG, evaluation, AI for science]
funding: "NSF Award #2425380"
# demo 链接需先取得组里与 Baylor 同意,在那之前 links 保持为空。见 CLAUDE.md §2。
links: {}
sources:
  - "corpus/bats-lab.md — 量化成果表 + 研究问题库"
  - "cv-academic.md — Research Assistant, Brown University"
---

**Problem.** A climate scientist writing an assessment report needs to know
which papers are worth reading, and which of them actually demonstrate a claim
rather than merely mention it. Standard IR benchmarks do not help much here:
there are no gold relevance judgments for a corpus of peer-reviewed climate
literature, and the unit users care about is the paper, not the passage.

**What I work on.** Building and evaluating ColBERT-based retrieval pipelines
over a large corpus of climate research papers, for researchers and
policymakers. The questions I keep returning to:

- How do you build a usable evaluation framework without gold labels — from
  human annotation, inter-model agreement, and downstream QA quality?
- Passage-level similarity is not what users want. What does document-level
  ranking look like when you design and evaluate it directly?
- Single reranker, union/intersection of several, RRF, Borda count,
  document-level aggregation — how do these actually compare when you make each
  one a composable object under one evaluation harness?
- Can a retrieval system distinguish "mentions" from "demonstrates"?

**Contributions so far.** Rebuilt the PDF/OCR preprocessing stage for paper
ingestion, raising average extracted line length by about 50% and cutting noisy
line fragmentation by 30–40%, which feeds cleaner text to indexing and
retrieval. Built out the retrieval pipeline and the evaluation infrastructure
around it: multi-strategy ranking, annotation display, temporal filtering, live
metrics. Deployed on a GPU cluster.
