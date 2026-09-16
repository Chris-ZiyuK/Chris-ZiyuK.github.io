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

*This project is ongoing and unpublished. What follows describes the questions and
the direction of the results, not final findings — the numbers behind them are
still moving, and several are under revision.*

A climate scientist writing an assessment report needs to know which papers are
worth reading, and which of them demonstrate a claim rather than mention it.
Standard IR benchmarks are little help. There are no relevance judgments for a
corpus of peer-reviewed climate literature, and the unit that matters to the user
is the paper, not the passage.

My part of the project is evaluation. Rather than commission annotators, we treat
the IPCC assessment reports as a labelled dataset in their own right: every claim
in a report points at the papers supporting it, so the citation structure yields
graded judgments directly. One decision inside that does most of the work. A
paper can be cited in the same chapter, on the same topic, and still not be
evidence for the specific claim being checked, and whether you count it silently
defines what "evidence" means for everything downstream.

With a benchmark in place, the question I have spent this year on is where the
loss actually happens. Only a small fraction of the cited evidence reaches the
candidate pool at all, which means the reranking stage most of the field works on
is competing over what retrieval already failed to find. A separate study
comparing LLM rerankers against trained cross-encoders across three model scales
points the same way: sliding-window reranking moves score between shallow and
deep queries rather than adding any, and a far smaller trained cross-encoder
separates deep candidates better than any of the language models tested.

I also own the infrastructure this runs on: ColBERT retrieval pipelines with
incremental indexing, a composable reranker and fusion layer, and an evaluation
harness that reconciles per-query results against the aggregates and complains
when they disagree. It runs on a SLURM GPU cluster.
