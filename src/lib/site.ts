import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

export type Affiliation = { role: string; org: string; detail: string };
export type Site = {
  name: string;
  tagline: string;
  intro: string;
  affiliations: Affiliation[];
  engineering: { heading: string; lead: string; items: string[] };
  links: Record<string, string>;
  omitted: string[];
};

// cwd 恒为仓库根(dev 与 build 都是)。
const SITE_YML = path.resolve(process.cwd(), 'content/site.yml');

export const site = yaml.load(fs.readFileSync(SITE_YML, 'utf8')) as Site;

/** 显式占位符不猜、不编。见 CLAUDE.md §6。 */
export function isTodo(v: unknown): v is string {
  return typeof v === 'string' && v.startsWith('TODO:');
}

/**
 * 占位符只在本地开发时显示成灰框 —— 生产构建里整个不渲染,
 * 免得把 `TODO:xxx` 当成内容发给 PI 看。未解决的项改由构建日志提醒。
 */
export const showTodos = import.meta.env.DEV;

/** 构建时把还没解决的占位符列出来,让它们不会被悄悄忘掉。 */
export function reportTodos(pairs: Record<string, unknown>, where: string) {
  const open = Object.entries(pairs).filter(([, v]) => isTodo(v));
  if (open.length && !import.meta.env.DEV) {
    console.warn(
      `[todo] ${where}: ${open.map(([k, v]) => `${k}=${v}`).join(', ')} —— 未解决,页面上已省略`,
    );
  }
}
