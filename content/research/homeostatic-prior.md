---
title: "What Survives a Layout Shift? Diagnosing Retention in Continual Navigation"
label: "Continual reinforcement learning"
authors: "Junhe Chen*, Ziyu Kong* · Equal contribution"
short: "Retention under layout shifts"
slug: homeostatic-prior
role: Co-first author
period: "2026"
status: "Workshop under review"
status_shape: half
status_highlight: true
highlights:
  - label: Graduate capstone
order: 3
tags: [reinforcement learning, continual learning, evaluation]
takeaway: "A network that never learned the old layout can decode its geometry almost as well as one that did."
contribution: "As co-first author, I investigate retention with negative controls, behavioral tests, and budgeted recovery."
figure:
  src: /images/research/rl-method.svg
  wide: true
  aspectRatio: 3.4185815
  alt: "Two resource layouts and the diagnostic controls used to distinguish need-sensitive action, decodable geometry, and behavioral retention."
  caption: "Resource locations change while survival needs stay fixed. Each retention claim is tested separately: need-sensitive action against a deficit-blind null, decodable old geometry against a never-exposed control, and behavioral retention through old-task survival and budgeted recovery. Layout information varies across studies."
  sourceLabel: "From manuscript · Figure 1"
links: {}
sources:
  - "User update, 2026-11-08 — graduate capstone; workshop submission under review"
  - "Research manuscript: What Survives a Layout Shift? — Figure 2(a), representation-probe controls, and evaluation checks"
  - "Research manuscript: What Survives a Layout Shift? — Figure 1, experiment and diagnostic-control overview"
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
deterministic grids. This graduate capstone grew from George Konidaris's
CSCI 2951X (Reintegrating AI) at Brown. The manuscript is under review at a workshop.
