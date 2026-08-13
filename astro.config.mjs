// @ts-check
import { defineConfig } from 'astro/config';

// site 影响 canonical 与 og 标签,不影响本地开发。
// 用户名仓库 Chris-ZiyuK.github.io 的公开地址会被 GitHub 规范成全小写。
// 以后买了自有域名就改成域名,同时在 public/ 放 CNAME。
export default defineConfig({
  site: 'https://chris-ziyuk.github.io',
  build: { format: 'directory' },
  markdown: { smartypants: true },
});
