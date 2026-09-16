---
title: "CAIG: Navigating the Climate Science Deluge — Training Language Models to Assist in Comprehensive Assessments"
short: "Retrieval evaluation for climate assessment literature"
slug: caig
role: "Research Assistant, BATS Machine Learning Group (PI: Prof. Stephen Bach)"
period: "2026–"
status: "Ongoing"
status_shape: solid
order: 1
tags: [information retrieval, RAG, evaluation, AI for science]
# 标题用的是 NSF 的官方 award 名称,不是自拟的。可在下面的链接核对。
funding: "NSF Award #2425380 · Brown University · 2024–2027"
links:
  NSF award: "https://www.nsf.gov/awardsearch/show-award?AWD_ID=2425380"
sources:
  - "NSF Award Search #2425380 — 官方题名、PI、起止日期"
  - "corpus/bats-lab.md — 研究问题与结果(数字不上公开页面)"
---

*Ongoing and unpublished. What follows describes the questions and the direction
of the results, not final findings.*

A climate scientist writing an assessment report needs to know which papers are
worth reading, and which of them demonstrate a claim rather than mention it. No
relevance judgments exist for a corpus of peer-reviewed climate literature, and
the unit that matters is the paper, not the passage. My part of the project is
evaluation. Rather than commission annotators, we treat the IPCC reports as a
labelled dataset in their own right: each claim points at the papers supporting
it, so the citation structure yields graded judgments directly. Whether to count
a paper cited in the same chapter, on the same topic, but not evidence for the
specific claim, is the decision that silently defines what "evidence" means
downstream.

What the benchmark showed is that the loss happens earlier than the field
assumes. Only a small fraction of cited evidence reaches the candidate pool at
all, so the reranking stage most work targets is competing over what retrieval
already missed. A separate comparison of LLM rerankers against trained
cross-encoders at three model scales agrees: sliding-window reranking moves score
between shallow and deep queries rather than adding any. The infrastructure is
mine too, from the ColBERT pipelines and the fusion layer to the evaluation
harness that runs them on a SLURM cluster.
