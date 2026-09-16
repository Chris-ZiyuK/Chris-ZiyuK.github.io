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

Brain-inspired RL keeps returning to the idea that an agent should anchor value
on its own internal state rather than on external, task-specific reward: a food
cue is worth more to a hungry animal than to a sated one. A hypothesis usually
rides along with it. Because internal state stays meaningful when the world
rearranges, the prior ought to deliver continual learning without forgetting. I
put the prior into a learning agent and asked what it actually protects when the
task changes underneath it.

It does not protect against forgetting. In an online continual setting the
homeostatic learner is indistinguishable from an unshaped one, and from
experience replay, on final survival, and it shows the most negative backward
transfer of anything tested. It forgets most because it learns each task best,
which also drains the meaning from the near-zero forgetting of the other
baselines: those conditions never learned in the first place.

A directional probe locates what the prior does protect. Across a task switch the
valuation code, which resource to pursue given the current deficit, is retained
in full. The spatial code, where that resource is, is not. The prior protects the
computation it parameterizes and leaves locating the target in space alone.

One result here is about the method rather than about the agent, and I think it
generalizes past this testbed. The obvious representational test, asking whether the old code is still in the
weights by running a linear probe against an untrained-network floor, is not
diagnostic here. The forgotten layout decodes far above that floor, but it
decodes just as well out of a network trained only on the new layout, which has
never seen the old one. Agent position is part of the observation, so any
competent navigator linearly encodes distance to every cell, and the probe cannot
distinguish a retained code from a generic one. Continual-RL probing needs a
never-trained-on-this-task control, not only an untrained-network floor. That
control contradicted a claim in an earlier draft of this paper.

Started as a project in George Konidaris's CSCI 2951X (Reintegrating AI) at
Brown, and rewritten from that draft into the paper now under review.
