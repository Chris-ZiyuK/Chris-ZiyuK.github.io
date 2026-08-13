// @ts-check
import { defineConfig } from 'astro/config';

// site 影响 canonical 与 og 标签,不影响本地开发。
// 部署前改成实际地址:用户名仓库是 https://<handle>.github.io,
// 自有域名就写域名(同时在 public/ 放 CNAME)。
export default defineConfig({
  site: 'https://TODO-github-handle.github.io',
  build: { format: 'directory' },
  markdown: { smartypants: true },
});
