# portfolio —— Chris Ziyu Kong 的个人网站

公开静态站。受众:PhD 招生的 PI 和委员会(主),同行与雇主(次)。
完整方案见 [PLAN.md](PLAN.md)。**动手前先读 §2 的硬边界。**

---

## 1. 真相源

`content/` 下的文件是唯一真相源。页面从数据渲染,**不把文案写死进模板**。

| 文件 | 内容 |
|---|---|
| `content/site.yml` | 名字、定位句、自我介绍、身份行、工程线、链接 |
| `content/research/*.md` | 一个项目一个文件,frontmatter 走 schema |
| `content/cv.md` | 从 `~/codebase/PhD Application/01-core-materials/cv/cv-academic.md` 人工同步 |

上游内容源(**只读,永不双向同步**):
- `~/codebase/PhD Application/01-core-materials/corpus/` —— 事实与叙事骨架
- `~/codebase/PhD Application/01-core-materials/cv/cv-academic.md` —— CV 唯一工作稿

---

## 2. 硬边界:什么绝不能进这个仓库

破了没法撤回 —— 公网内容会被缓存和索引。

| 绝不上网 | 为什么 |
|---|---|
| DAILY 的 `data/projects/*.md` 正文 | 是内部工作笔记:审稿状态、已知缺陷、阻塞项。公开等于自曝 |
| 审稿分数、meta-review 内容、rebuttal 细节 | corpus 里明确标了"不写进任何申请材料" |
| `collect_signals.py` 那类活跃度信号 | commits_7d / days_idle / stalled 暴露工作节奏和哪些项目停了 |
| 手机号 | CV 上有,网页上不要有。爬虫会收 |
| 他人联系方式 | 上游 CV 的 REFERENCES 段有三位推荐人的邮箱,未经本人同意不公开 |
| 未发表的具体结果与图表 | ColBERT 在 workshop 录用前、HOMRL 在投出前,只写方向不放数字图表 |
| CAIG demo 链接 | **需先取得组里和 Baylor 的明确同意**,在那之前不放任何入口 |

技术上:不 symlink、不 import DAILY 或 PhD Application 的任何路径。`content/` 每个文件都人手过一遍。

---

## 3. 状态措辞红线(学术诚信,最高优先级)

来自 `corpus/colbert-audit.md` 和 `corpus/rl-robotics.md`,逐字照搬:

**ColBERT / TCD**
- 可写:`under review at ACL Rolling Review (May 2026 cycle)`、`targeting EMNLP 2026`、`first-author`
- 不可写:accepted / EMNLP paper / forthcoming;结果出来前不称 "EMNLP 2026 论文"
- 不用 "sole-authored / single-author" 自我标榜,作者栏自然呈现即可

**HACE / HOMRL**
- 可写:`completed course report (CSCI 2951X)`、`manuscript in preparation, 2026`
- 不可写:arXiv preprint / submitted / under review / NeurIPS submission
- 不可写 "improves continual RL performance by 300%" —— 3× 只针对 boundary solvability 一个指标
- Konidaris 可写"课程起源",**不可**称 advisor 或列为作者

**通用**:`under review ≠ accepted`,`in preparation ≠ submitted`。状态一旦变化,`content/research/*.md` 的 `status` 字段必须同步更新 —— 这是全站最容易过期、也最伤人的字段。

---

## 4. 设计哲学(从 DAILY/CLAUDE.md 继承)

1. **简洁大方,有层次**:大面积留中性面(plane/surface),配色克制。**一个强调色**,只用在小元素(标题点、链接、meter、节点描边),不做大面积色块。
2. **抽象优先,少文字**:能用图形就不用文字。全部内联 SVG(feather/lucide 描边风格),**禁止 emoji**。
3. **状态绝不只靠颜色**:任何状态区分用形状(实心/半实/空心)+ 颜色双通道,兼顾色盲。
4. **dual-mode**:亮/暗两套都要保证对比与层次,不是简单反色。
5. **排版是主角**:这站的主体是文字。行长 60–75 字符、行高 1.6–1.75,比任何图形都更决定质感。

**已调好的参数,直接用,不要重挑**:
- 令牌层来自 `~/codebase/DAILY/scripts/serve.py:420-436`
- 入场动画 `rise .34s cubic-bezier(.2,.7,.2,1)`,子元素 delay 递增 .04–.06s
- `@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}`

---

## 5. 文案风格红线(英文)

来自 `corpus/bio-and-narrative.md`:

- 句子不过分工整;不每段三点并列;少抽象名词;不过度总结
- 不写成招生宣传稿;保留个人语气;适度口语化
- ❌ "我对所有 AI 方向都感兴趣" / "解决信息过载问题" / 任何宏大愿景直陈

外加(网页特有):
- ❌ `passionate about` / `cutting-edge` / `leveraging` / `state-of-the-art` / 形容词堆砌
- ❌ **首页**不做技能条(Python / PyTorch / Docker)—— PhD 申请里这是负信号。
  CV 页保留 CV 本身的 Technical 段(CV 是文档不是宣传页,少了反而奇怪),但不往别处扩散
- ✅ 每个项目按 **问题 → 我做了什么 → 结果 → 状态 → 链接** 五段式,schema 强制

---

## 6. 数字的纪律

网站上每个数字都会被 PI 读到,错一个是硬伤。

- 所有量化结果必须能追到 `cv-academic.md` 或 `corpus/*.md` 的具体行。加新数字时在 frontmatter 的 `sources` 里标出处。
- **不确定的事实写成显式占位符**(如 `TODO:github-handle`),让构建报警,**绝不猜、绝不编**。
- 改数字只改 `content/`,页面自己跟着变。

---

## 7. 工作流

- **内容与代码分 session**:内容 session 在 PhD Application 目录提炼文案;代码 session 在本目录只管渲染。不要混。
- **视觉迭代自己闭环**:`preview_start` → `screenshot` → 改 CSS → 再 `screenshot`。三个断点(mobile/tablet/desktop)× 两个主题各看一遍,别让用户当人肉渲染器。
- **验收标准**:构建通过 + light/dark 各截图看过 + 移动端不横向滚动 + 无 emoji + 所有 TODO 占位符已解决。
- **上线前**:开一个干净 session 冷读全站,专找两样 —— AI 味的句子、夸大的状态表述。

---

## 8. 技术栈与命令

**Astro 5**,静态输出,部署 GitHub Pages。2026-08-13 与零依赖 Python 生成器做过 bake-off
后选定 —— 决定性理由是 schema 把 §3 的状态措辞红线锁进了编译期(写成没批准的状态,
构建当场失败),Python 版会静默发布出去。

```bash
npm run dev      # 本地 4321,改 content/ 热更新
npm run build    # astro check + astro build → dist/
npm run check    # 只做类型与 schema 检查
```

- `src/content.config.ts` 是 schema 的家。**改状态措辞必须先回 §3 定,再加进那个 zod 枚举**。
- `content/` 与 `src/` 平级,是真相源;`src/` 只负责渲染。
- CI(`.github/workflows/deploy.yml`)跑的就是 `npm run build`,所以 schema 不过 = 部署不了。

---

## 9. 待办(动手前先看)

| 事项 | 卡在哪 |
|---|---|
| `TODO:github-handle`、`TODO:scholar-url-or-remove` | 需要用户给,不要编 |
| `TODO:cv-pdf-without-phone` | 现有 `Chris.Kong_CV.pdf` 页眉含手机号,**不能直接上传**。要重新导出一份去掉手机号的 |
| `astro.config.mjs` 的 `site` | 现在是 `https://TODO-github-handle.github.io`,部署前改成真实地址 |
| 首页研究地图 SVG | 方案 PLAN.md §6,尚未做 |
| CAIG demo 入口 | 需先取得组里与 Baylor 同意 |
| 学位写法 | 站上统一用 Sc.M.(依 corpus 的标准 bio);上游 `cv-academic.md` 与 PDF 写的是 M.S.,同步时注意 |
