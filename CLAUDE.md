# portfolio —— Chris Ziyu Kong 的个人网站

公开静态站。受众:PhD 招生的 PI 和委员会(主),同行与雇主(次)。
完整方案见 [PLAN.md](PLAN.md)。**动手前先读 §2 的硬边界。**

## 当前展示约定（2026-11-08）

最新状态与展示更新：CAIG 标注 NSF-funded；Beaver 标注可点击的 Demo、News，
稿件状态为 Under review；RL 标注 Graduate capstone 与 Workshop under review；
ColBERT 保留 In revision。以上来自用户本轮明确更新，取代旧状态；没有指定新的
投稿 venue，不推断任何录用。标签放在标题旁，重复的资源链接不再另列。
首页开头只保留一段研究介绍，不再叠加同义定位句、眉题和泛泛的分区描述。
用户随后提供 SoP 第一段作为方向：开头以 information retrieval、机制、可解释性与
评价为主线，表达推进领域基础、服务研究者/政策制定者/公众的研究抱负；不写
climate science 等具体项目背景。愿景写成目标，不冒充已取得的成果或外部采用。

最新反馈：项目顺序固定为 CAIG → NYU / Beaver Lab → RL → ColBERT，首页和 Research
页保持一致。用户已继续要求替换 RL / ColBERT 的图：优先解释机制、完整流程
或算法设计，不再用单独的结果对比图。RL 使用当前稿 Figure 1 原图；ColBERT 的旧流程
图包含过时结果，因此根据当前稿 §3 重绘并明确标注为方法示意。完整图用宽幅展示。
版式采用更宽的阅读网格、
清晰的标题层级、简介与经历分栏、克制的链接与状态样式，替代前一版的胶囊与小卡片感。

用户已明确要求以关键图、研究发现、demo 与报道更新主页。以下约定取代下文旧的
纯文字设计和「未发表结果一律不展示」限制，仅适用于本次选定内容：

- ColBERT 与 RL 展示已核对的最新稿方法图，保留不确定性与方法边界；状态使用
  上方最新用户更新，不据此声称已发表、已录用或已公开 arXiv。
- Beaver 使用官方工具介绍页的现成地图与结果示例，注明来源；突出 demo 与
  NYU CDS 报道，区分个人的数据管道贡献和实验室工具。
- CAIG 使用方法示意，明确引用派生标签并不完整；不发布 CAIG demo。
- `content/` 继续作为网站文案来源；图可追溯到论文原图或公开项目页。
  不发布内部研究笔记、审稿内容、整份私有手稿或 CV PDF。
- 保留现有简洁排版、亮暗主题和单强调色。新图文布局须检查移动端及可读性。

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
| 未发表的具体结果与图表 | ColBERT 在 workshop 录用前、HOMRL 在投出前,只写方向不放数字图表 |
| CAIG demo 链接 | 2026-08-14 明确:**暂时不能公开**。不要放任何入口,也不要再问 |

**CV PDF** —— 2026-08-14 决定:**站上暂不放 PDF**,`/cv` 只有 HTML 版。
现有那份 `Chris.Kong_CV.pdf` 页眉含手机号、第 2 页 REFERENCES 含三位推荐人的办公地址与邮箱;
后者是别人的信息,没经同意不发。要接上时:把一份干净的 PDF 放进 `public/Chris-Kong-CV.pdf`,
再把 `content/cv.md` 的 `pdf` 字段改成 `/Chris-Kong-CV.pdf`,两步,别的不用动。

**含敏感内容的文件连提交都不要做。** git 里删掉文件不等于删掉它 —— blob 仍然留在历史里,
`git show <sha>:<path>` 就能取出来。2026-08-14 那份 PDF 就是在推送前才发现已经进了本地提交,
靠重写未推送的历史才干净拿掉的。**先确认能不能公开,再 `git add`。**

技术上:不 symlink、不 import DAILY 或 PhD Application 的任何路径。`content/` 每个文件都人手过一遍。

---

## 3. 状态措辞红线(学术诚信,最高优先级)

以 2026-11-08 用户更新为当前状态，旧 corpus 的投稿状态不覆盖这次更新：

**ColBERT / TCD**
- 可写:`In revision`、`first-author`；不沿用已过期的具体投稿轮次
- 不可写:accepted / EMNLP paper / forthcoming;结果出来前不称 "EMNLP 2026 论文"
- 不用 "sole-authored / single-author" 自我标榜,作者栏自然呈现即可

**HACE / HOMRL**
- 可写:`Graduate capstone`、`Workshop under review`、课程起源 `CSCI 2951X`
- 不可写:arXiv preprint / accepted；不推断具体 workshop 或主会名称
- 不可写 "improves continual RL performance by 300%" —— 3× 只针对 boundary solvability 一个指标
- Konidaris 可写"课程起源",**不可**称 advisor 或列为作者

**通用**:`under review ≠ accepted`,`in preparation ≠ submitted`。状态一旦变化,`content/research/*.md` 的 `status` 字段必须同步更新 —— 这是全站最容易过期、也最伤人的字段。

---

## 4. 设计方向

**受众是学院派 PI 和招生委员会,不是设计评审。这个网站要像一份排版好的 CV,
不像一个作品集。** 2026-08-14 用户定的方向,推翻了此前从 DAILY 看板继承的图形优先倾向。

1. **以文字为主**。信息用句子和排版承载,不用示意图。同一天已经砍掉过一版做好的研究地图 SVG ——
   它画得没错,但这个场合不需要。**动手加任何图示、图表、动效之前,先问它是不是在炫技。**
   例外只有一种:图形在传达文字传达不了的信息(比如论文状态的形状标记),而不是把文字重说一遍。
2. **排版是主角**:行高 1.6–1.75。质感全靠这个,不靠装饰。
   **行长：2026-09-16 用户明确放宽，不再守原来的 60–75 字符，现约 85 字符/行。**
   原因不是"越宽越好"，是**对齐**：`--measure` 比 `--page` 窄近 300px 时，
   身份行的年份、导航都排到容器右缘而正文提前断掉，右侧空出一条槽，
   在大屏上看上去像排版出错。现在正文宽 752px、元数据行 776px，只差 24px，上下对齐；
   大屏正文同时提到 18px 来抵消长行的回行负担。
   **要改回窄版得连 `--measure` 和 `--page` 一起改，只收窄其中一个就又错位了。**
3. **简洁,有层次**:大面积留中性面(plane/surface),配色克制。**一个强调色**,
   只用在小元素(标题点、链接、状态标记),不做大面积色块。**禁止 emoji**。
4. **状态绝不只靠颜色**:状态区分用形状(实心/半实/空心)+ 颜色双通道,兼顾色盲。
5. **dual-mode**:亮/暗两套都要保证对比与层次,不是简单反色。

**已调好的参数,直接用,不要重挑**:
- 令牌层来自 `~/codebase/DAILY/scripts/serve.py:420-436`
- 入场动画 `rise .34s cubic-bezier(.2,.7,.2,1)`,子元素 delay 递增 .04–.06s
- `@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}`

---

## 5. 文案风格红线(英文)

来自 `corpus/bio-and-narrative.md`:

- 句子不过分工整;不每段三点并列;少抽象名词;不过度总结
- 不写成招生宣传稿;保留个人语气;适度口语化
- ❌ "我对所有 AI 方向都感兴趣" / 脱离具体研究问题的宏大口号
- ✅ 用户 2026-11-08 明确要求有研究抱负：用检索机制、可解释性、评价等具体方向支撑愿景

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
| 推上 GitHub、开 Pages | 用户手动:建 `Chris-ZiyuK.github.io` 仓库,Settings → Pages → Source 选 GitHub Actions |
| 干净版 CV PDF | 想换的时候导一份不含手机号与推荐人信息的,直接覆盖 `public/Chris-Kong-CV.pdf`,别的不用动 |
| 学位写法 | 站上统一用 Sc.M.(依 corpus 的标准 bio);上游 `cv-academic.md` 与 PDF 写的是 M.S.,同步时注意 |

已经定了、**不要再提**的:Google Scholar(没有,不放)、CAIG demo(暂不能公开)、
研究地图 SVG(已砍,理由见 §4)。
