---
title: "CAIG: Navigating the Climate Science Deluge — Training Language Models to Assist in Comprehensive Assessments"
label: "CAIG · Brown University"
short: "Retrieval for climate science"
slug: caig
role: "Research Assistant, BATS Machine Learning Group (PI: Prof. Stephen Bach)"
period: "2026–"
status: "Ongoing"
status_shape: solid
order: 1
tags: [information retrieval, RAG, evaluation, AI for science]
funding: "NSF Award #2425380 · Brown University · 2024–2027"
takeaway: "IPCC claims, report sections, and citations provide an evidence structure for evaluating climate-literature retrieval."
contribution: "I build retrieval pipelines and an evaluation harness using citation-derived relevance judgments."
figure:
  src: /images/research/caig-evidence.svg
  alt: "Method diagram linking an IPCC assessment claim to a report section and its cited papers, then to retrieval evaluation."
  caption: "Method overview, not a result plot. Citation-derived labels are incomplete evidence of relevance, not exhaustive ground truth."
  sourceLabel: "Project method overview"
links:
  NSF award: "https://www.nsf.gov/awardsearch/show-award?AWD_ID=2425380"
sources:
  - "NSF Award Search #2425380 — official title, PI, and project dates"
  - "corpus/bats-lab.md — retrieval pipelines and citation-based evaluation methodology"
---

Climate assessments depend on finding papers that support a specific claim, beyond
papers that merely discuss the same topic. My work in Stephen Bach's group focuses
on how to evaluate that distinction when complete relevance judgments are not
available.

We use the structure of IPCC assessment reports to connect claims, report sections, and
cited literature. These links provide citation-derived relevance judgments for
retrieval evaluation. They are incomplete: an uncited paper may still be relevant,
and a chapter-level citation need not support every claim in that chapter.

I build the retrieval pipelines, fusion layer, and evaluation harness used to
compare retrieval and reranking systems. The project is ongoing; the diagram
summarizes the method rather than presenting final results.
