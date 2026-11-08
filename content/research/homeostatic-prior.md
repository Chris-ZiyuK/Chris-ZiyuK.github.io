---
title: "What Survives a Layout Shift? Diagnosing Retention in Continual Navigation"
label: "Continual reinforcement learning"
authors: "Junhe Chen*, Ziyu Kong* · Equal contribution"
short: "A high probe score is not enough to establish memory"
slug: homeostatic-prior
role: Co-first author
period: "2026"
status: "Manuscript in revision"
status_shape: hollow
order: 2
tags: [reinforcement learning, continual learning, evaluation]
takeaway: "A network that never learned the old layout can decode its geometry almost as well as one that did."
contribution: "As co-first author, I investigate retention with negative controls, behavioral tests, and budgeted recovery."
figure:
  src: /images/research/rl-probe-control.svg
  alt: "Old-layout geometry decoding for agents trained on both layouts, agents trained only on the new layout, and untrained networks."
  caption: "Layout-A decoding in the homeostatic-reward condition. A network that never learned A still decodes its geometry. Dots show individual seeds; bars show the quasi-trimmed mean and 95% bootstrap intervals. High probe scores alone do not establish retained task-specific memory."
  sourceLabel: "Adapted from manuscript · Figure 2(a)"
links: {}
sources:
  - "Research manuscript: What Survives a Layout Shift? — Figure 2(a), representation-probe controls, and evaluation checks"
  - "Research manuscript author list — Junhe Chen and Ziyu Kong, equal contribution"
---

After an environment changes, what evidence shows that an agent still knows how
to perform its old task? We study this question in a resource-management gridworld
where resource locations move between tasks. We evaluate learned representations,
old-task behavior, and recovery under a fixed interaction budget.

A network trained only on the new layout still decodes the old layout's geometry
almost as well as a network that experienced both. An untrained-network baseline
alone would miss this problem: information that is easy to decode need not reflect
memory of the old task. We also calibrate action probes against policies that
ignore resource needs, separating a high diagnostic score from the capability it
is meant to measure.

The resulting evaluation checks pair negative controls with acquisition, old-task
performance, and budgeted recovery. The empirical evidence is limited to small
deterministic grids. This work grew from George Konidaris's CSCI 2951X
(Reintegrating AI) at Brown; the manuscript is in revision.
