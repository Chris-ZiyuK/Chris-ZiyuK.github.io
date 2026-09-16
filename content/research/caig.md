---
title: "Retrieval and Question Answering over Climate Science Literature"
short: "Evaluating retrieval when nobody has the labels"
slug: caig
role: "Research Assistant, BATS Machine Learning Group (Prof. Stephen Bach)"
period: "2026–"
status: "Ongoing"
status_shape: solid
order: 1
tags: [information retrieval, RAG, evaluation, AI for science]
funding: "NSF Award #2425380"
# demo 链接需先取得组里与 Baylor 同意,在那之前 links 保持为空。见 CLAUDE.md §2。
links: {}
sources:
  - "corpus/bats-lab.md — 基准构建、召回天花板、LLM 重排三组结果"
  - "cv-academic.md — Research Assistant, Brown University"
---

**Problem.** A climate scientist writing an assessment report needs to know which
papers are worth reading, and which of them actually demonstrate a claim rather
than merely mention it. Standard IR benchmarks do not help much here. There are
no gold relevance judgments for a corpus of peer-reviewed climate literature, and
the unit users care about is the paper, not the passage.

**Building a benchmark without annotators.** The IPCC assessment reports are
themselves a labelled dataset if you read them the right way: every claim in the
report points at the papers that support it. We derived graded relevance
judgments from that citation structure, claim to DOI to document, which produced
683 queries and roughly 10,600 graded judgments across all eleven chapters of
AR6 WGI at no annotation cost.

One design decision does most of the work. A paper can be cited in the same
chapter, on the same topic, and still not be evidence for the specific claim
being checked. We discarded that middle grade entirely — keeping it diluted the
evaluation and measurably depressed recall. It is a judgment call, and it
silently defines what "evidence" means for everything downstream of it.

**Recall, not reranking, is the binding constraint.** With the benchmark in
place, the result that reorganized my thinking is how little of the evidence
retrieval reaches at all. Only 7.95% of ground-truth documents make it into a
top-100 candidate pool. A sweep out to k=1000 found that 43% of queries return
none of their cited work at k=100, falling to 24% at k=500 and flattening after
that — the knee is at a few hundred candidates, not at a thousand. Fourteen
reranking strategies then compete over what is left. If an answer needs ten
sources and retrieval reliably surfaces one, reranking is the wrong lever.

**What LLM rerankers actually buy.** I ran 8B, 14B and 32B models against trained
cross-encoders over 383 answerable queries, three arms each. Sliding-window
reranking turned out to redistribute rather than improve: the total score is
flat, but queries whose answers were already near the top got measurably worse
(d = −0.278, p < 0.0001, with the sign stable across three sample sizes), while
deeper queries gained an amount that never cleared its own noise floor. Scale did
not rescue it — the 14B model was the worst of the three — and a cross-encoder
with 73× fewer parameters discriminated deep candidates better than any of them.
The gap looks like a training objective, not a capacity problem.

**Distrusting the measurement first.** The habit this project has taught me is to
audit the instrument before believing the reading. A reranking fallback path was
returning retrieval order unmarked whenever a model response came back empty, so
identical rankings were being scored as genuine rerankings; measuring the
contamination rate put it at 4.9% for one strategy and zero for the
cross-encoders. Separately, I had changed a standard metric's definition to suit
a display, then reverted it in production and in code, because redefining a
metric to make a panel look right is not a fix. And a strategy comparison in the
interface was silently running over two incomparable candidate pools, which
flipped the sign of the measured difference on a fifth of the pairs.

**Engineering underneath it.** ColBERT retrieval pipelines with incremental
indexing, a composable reranker and fusion layer (RRF, Borda, weighted, CombMNZ),
a four-layer results export that reconciles per-query means against the
aggregates and warns when they disagree, and PDF/OCR preprocessing that raised
average extracted line length by about 50% while cutting noisy fragmentation by
30–40%. Runs on a SLURM GPU cluster.
