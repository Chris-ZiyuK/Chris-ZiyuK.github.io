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

/** 显式占位符不猜、不编 —— 渲染成可见标记,构建时也列出来。见 CLAUDE.md §6。 */
export function isTodo(v: unknown): v is string {
  return typeof v === 'string' && v.startsWith('TODO:');
}

export const unresolved = Object.entries(site.links)
  .filter(([, v]) => isTodo(v))
  .map(([k, v]) => `${k}=${v}`);
