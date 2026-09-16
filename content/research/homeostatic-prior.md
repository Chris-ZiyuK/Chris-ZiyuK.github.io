---
title: "What to Want, Not Where to Go: Localizing What a Homeostatic Prior Protects Across a Task Switch"
short: "What a brain-derived prior actually buys an RL agent"
slug: homeostatic-prior
role: First author
period: "2026"
# 状态措辞红线见 CLAUDE.md §3。必须写明 workshop + non-archival,不可让人读成 NeurIPS 主会。
# 9/25 通知后若录用,改为 to appear;若未录用,改回 Manuscript in revision。
status: "Under review at the TTCL workshop, NeurIPS 2026 (non-archival)"
status_shape: half
order: 3
tags: [reinforcement learning, continual learning, evaluation]
links: {}
sources:
  - "corpus/rl-robotics.md — 在投论文的四条主张 + 状态措辞红线"
  - "cv-academic.md — First-Author Research Project (Continual Reinforcement Learning)"
---

**Problem.** A recurring proposal in brain-inspired RL is to anchor value on an
agent's internal state rather than on external, task-specific reward — a food cue
is worth more to a hungry animal than to a sated one. Attached to it is a
hypothesis: because internal state stays meaningful when the world rearranges,
such a prior ought to give you continual learning without forgetting. I imported
the prior into a learning agent and asked what it actually protects when the task
changes underneath it.

**It does not reduce forgetting.** In an online continual setting, homeostatic
shaping is indistinguishable from an unshaped learner and from experience replay
on final survival, and it shows the *most* negative backward transfer. It forgets
most because it learns each task best — a confound that also makes the near-zero
forgetting of the other baselines uninformative, since those conditions never
learn in the first place.

**What it does protect, localized.** A directional probe separates two codes.
Across a task switch the *valuation* code — which resource to pursue given the
current deficit — is fully retained. The *spatial* code — where that resource is
— is not. The prior protects the computation it parameterizes and leaves locating
the target in space untouched.

**A negative result about the method itself.** The natural representational test
— "is the old code still in the weights?", asked with a linear probe against an
untrained-network floor — is not diagnostic here. The forgotten layout's geometry
decodes at R²=0.93, far above that floor. But a network trained only on the *new*
layout, which has never seen the old one, decodes it just as well (0.92;
difference +0.003, CI [−0.042, +0.031]). Agent position is part of the
observation, so any competent navigator linearly encodes distance to every cell.
Probing studies in continual RL need a never-trained-on-the-task control, not
only an untrained-network floor. This control overturned a claim in my own
earlier draft, which is why it is here.

**Origin.** Started as a project in George Konidaris's CSCI 2951X (Reintegrating
AI) at Brown, and was rewritten from that draft into the present paper.
