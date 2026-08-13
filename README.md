# portfolio

Chris Ziyu Kong 的个人网站。Astro 5,静态输出,部署 GitHub Pages。

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # astro check + build → dist/
```

## 结构

```
content/          真相源。改这里,页面跟着变
  site.yml          名字、定位句、自我介绍、工程线、链接
  research/*.md     一个项目一个文件,frontmatter 走 schema
  cv.md             从 PhD Application 的 cv-academic.md 人工同步
src/
  content.config.ts schema —— 状态措辞红线锁在这里
  pages/            index / research / cv
  styles/           tokens.css(令牌层)+ base.css(版式与组件)
```

## 改内容

只改 `content/`。schema 会挡住不合规的 frontmatter —— 尤其是论文状态:
只有 `src/content.config.ts` 里枚举过的表述能通过构建。这是故意的,见 `CLAUDE.md` §3。

## 部署

push 到 `main` → GitHub Actions 跑 `npm run build` → 发到 Pages。
构建里带 `astro check`,所以 schema 不过的东西上不了线。

开工前先读 [CLAUDE.md](CLAUDE.md),特别是 §2(什么绝不能进这个仓库)和 §3(状态措辞红线)。
