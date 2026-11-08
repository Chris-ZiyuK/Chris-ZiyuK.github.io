import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const figure = z.object({
  src: z.string().startsWith('/images/research/'),
  alt: z.string().min(1),
  caption: z.string().min(1),
  sourceLabel: z.string(),
  sourceUrl: z.string().url().optional(),
});

// 内容住在 content/,与 src/ 平级 —— 真相源和渲染层分开。
// schema 是选 Astro 的主要理由:frontmatter 少字段、拼错、状态词写成没批准的值,
// 构建当场失败而不是静默出错。见 CLAUDE.md §3、§6。
const research = defineCollection({
  loader: glob({ pattern: '*.md', base: './content/research' }),
  schema: z.object({
    title: z.string(),
    label: z.string(),
    short: z.string(),
    takeaway: z.string(),
    contribution: z.string(),
    highlights: z.array(z.object({
      label: z.string().min(1),
      href: z.string().url().optional(),
    })).default([]),
    status_highlight: z.boolean().default(false),
    figure,
    secondaryFigure: figure.optional(),
    slug: z.string(),
    role: z.string(),
    period: z.string(),

    // 状态措辞红线在类型层面锁死:只有审过的表述能通过构建。
    // 想加新状态,必须先回 CLAUDE.md §3 确认措辞,再加到这个联合里。
    status: z.enum([
      // 2026-11-08: 用户更新 Beaver 为在投、RL 为 workshop 在审。
      // 未指定投稿 venue；ColBERT 保留修稿状态，不推断录用或新的投稿。
      'Under review',
      'Workshop under review',
      'In revision',
      'Ongoing',
      'Completed',
    ]),
    status_shape: z.enum(['solid', 'half', 'hollow']),

    order: z.number(),
    tags: z.array(z.string()).default([]),
    authors: z.string().optional(),
    funding: z.string().optional(),
    links: z.record(z.string()).default({}),
    // 每个数字都要能追到出处。见 CLAUDE.md §6。
    sources: z.array(z.string()).min(1),
  }),
});

// CV 从 PhD Application 的 cv-academic.md 人工同步。`omitted` 强制记录相对上游
// 删掉了什么(手机号、他人邮箱),防止以后手滑加回来。见 CLAUDE.md §2。
const cv = defineCollection({
  loader: glob({ pattern: 'cv.md', base: './content' }),
  schema: z.object({
    updated: z.string(),
    synced_from: z.string(),
    pdf: z.string(),
    omitted: z.array(z.string()).min(1),
  }),
});

export const collections = { research, cv };
