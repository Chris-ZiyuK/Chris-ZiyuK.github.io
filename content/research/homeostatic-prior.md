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
on its internal state rather than on task-specific reward: a food cue is worth
more to a hungry animal than to a sated one. The hypothesis riding along with it
is that because internal state stays meaningful when the world rearranges, the
prior should deliver continual learning without forgetting. It does not. The
homeostatic learner is indistinguishable from an unshaped one on final survival
and shows the most negative backward transfer of anything tested, forgetting most
because it learns each task best. A directional probe locates what the prior does
protect: across a task switch the valuation code, which resource to pursue given
the current deficit, is retained in full, while the spatial code, where that
resource is, is not.

The result I think travels past this testbed is about method. Probing whether the
old code survives in the weights, against an untrained-network floor, is not
diagnostic: the forgotten layout decodes well above that floor, but so it does
out of a network that has never seen it, since agent position is in the
observation and any competent navigator encodes distance to every cell.
Continual-RL probing needs a never-trained-on-this-task control, and running one
contradicted a claim in an earlier draft of this paper.

Started as a project in George Konidaris's CSCI 2951X (Reintegrating AI) at
Brown, and rewritten from that draft into the paper now under review.
