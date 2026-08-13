---
title: "HACE: Addressing Viability Failure in Sequential Reinforcement Learning with Homeostatic Auxiliary Rewards"
short: "Agents that die before they can learn the next task"
slug: hace
role: First author
authors: "Ziyu Kong, Shihang Gui, Ruth Ukubay, Meiyi Song"
period: "2026"
# 状态措辞红线见 CLAUDE.md §3。不可写 submitted / under review / arXiv preprint。
status: "Manuscript in preparation, 2026"
status_shape: hollow
order: 3
tags: [reinforcement learning, continual learning]
links: {}
sources:
  - "corpus/rl-robotics.md — 量化结果表 + 状态措辞红线"
  - "cv-academic.md — First-Author Research Project (Continual Reinforcement Learning)"
---

**Problem.** Continual RL research is mostly about catastrophic forgetting: the
agent survives, but loses what it knew. There is a failure mode underneath that
one. When an agent manages an energy resource shared across tasks, it can simply
die at a task boundary — before it has had the chance to learn the new task at
all. Forgetting is not the binding constraint if the agent is dead. I call this
viability failure and formalize it.

**What I did.** Proposed HACE, a task-invariant auxiliary reward based on
homeostatic drive reduction, and tested it on a 10-task sequential gridworld
built for the purpose, with a shared energy state and carryover-versus-reset
boundaries. Nine agent variants, ten seeds each, against task-only, energy
observation, EWC, L2, and experience replay baselines — the variants split apart
the factors rather than comparing one method to one baseline.

**Results.** HACE variants reached roughly 3× the task-boundary solvability of
non-homeostatic baselines and retained 3–5× more energy at task transitions.
EWC and experience replay did not clearly beat an unprotected baseline on the
viability metrics, which suggests homeostatic shaping and forgetting mitigation
are addressing different problems; combining HACE with EWC improved both.

**Origin.** Started as a project in George Konidaris's CSCI 2951X (Reintegrating
AI) at Brown and was subsequently developed into a manuscript.
