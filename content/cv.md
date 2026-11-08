---
updated: "2026-11-08"
synced_from: "PhD Application/01-core-materials/cv/cv-academic.md"
# 2026-11-08: manuscript titles, authorship and claims checked against the latest research manuscripts.
# 2026-08-14 决定:站上暂不放 PDF,只留 HTML 版 CV。
# 现有那份 Chris.Kong_CV.pdf 页眉含手机号、第 2 页 REFERENCES 段含三位推荐人的
# 办公地址与邮箱 —— 后者是别人的信息,不发。
# 要接上时:导一份干净的放进 public/Chris-Kong-CV.pdf,再把下面这行改成 /Chris-Kong-CV.pdf。
pdf: "TODO:clean-cv-pdf"
# 下面记的是网页正文相对上游 CV 删掉的东西。
omitted:
  - "手机号 —— 爬虫会收"
  - "REFERENCES 段三位推荐人的地址与邮箱 —— 未经本人同意不公开他人联系方式,正文改成 References available on request"
---

## Education

**Brown University**, Department of Computer Science — Providence, RI \
Sc.M. in Computer Science (GPA 4.0/4.0) · Sep 2025 – May 2027

**New York University**, College of Arts and Science — New York, NY \
B.A. in Computer and Data Science (GPA 3.94/4.0) · Sep 2021 – Dec 2024

## Research Experience

**Research Assistant** — Brown University, Providence, RI \
BATS Machine Learning Research Group (P.I.: Dr. Stephen Bach) · Jan 2026 – present \
*CAIG: Navigating the Climate Science Deluge — Training Language Models to Assist in Comprehensive Assessments*

- Built a graded evaluation benchmark for scientific literature retrieval where no gold relevance labels exist, deriving 10,625 relevance judgments over 683 queries from the citation structure of the IPCC AR6 WGI report itself (claim → DOI → document → grade) rather than from manual annotation.
- Showed that reranking is the wrong place to spend effort in this domain: only 7.95% of ground-truth documents reach the top-100 candidate pool, and a recall sweep to k=1000 found 43% of queries retrieve no cited work at k=100, falling to 24% at k=500 with negligible gain beyond.
- Ran a three-scale study (8B/14B/32B) of LLM reranking against trained cross-encoders over 383 answerable queries: sliding-window reranking redistributes rather than improves (harm to shallow queries d=−0.278, p<0.0001, stable across three sample sizes), and a cross-encoder with 73× fewer parameters discriminates deep candidates better than any LLM tested.
- Found and quantified a silent failure mode contaminating earlier results, where a reranker fallback path returned retrieval order unmarked and was being scored as a genuine reranking.
- Rebuilt PDF/OCR preprocessing for research-paper ingestion, increasing average extracted line length by ~50% and reducing noisy line fragmentation by 30–40%.

**First-Author Research Project** (Neural Retrieval Auditing) — Brown University \
Originated in CSCI 2952W (Critical AI and Data Studies) · Mar 2026 – present \
*Exact but Not Specific: A Measurement-Validity Analysis of Token-Level Name-Swap Audits in Late-Interaction Retrieval*

- Proposed Token Contribution Disparity (TCD), an exact token-level decomposition of counterfactual score shifts in late-interaction retrieval, attributing an identity-induced score change to individual query tokens.
- Audited the scoring implementation and tested the interpretation of token-level sensitivity using identity-name, numeral, and nonsense-word perturbations under corrected scoring.
- Found that non-identity controls reproduce the function-word sensitivity pattern, limiting its interpretation as identity-specific; the results do not establish equivalence or an absence of bias.
- Studied the measurement validity and scale dependence of attribution-based retrieval audits. Manuscript in revision.

**Co-First-Author Research Project** (Continual Reinforcement Learning) — Brown University \
Originated in CSCI 2951X (Reintegrating AI) · Mar 2026 – Sep 2026 \
*What Survives a Layout Shift? Diagnosing Retention in Continual Navigation*

- Evaluated retention after resource locations change in a continual-navigation gridworld, comparing learned representations, old-task performance, and recovery under a fixed interaction budget.
- Added a never-exposed control to representation probing: layout-A geometry decodes at R²=0.93 after A→B training and 0.92 after B-only training in the homeostatic-reward condition. High decodability alone therefore does not establish retained task-specific memory.
- Paired negative controls with behavioral and recovery tests to distinguish diagnostic scores from the capabilities they are intended to measure. Evidence is limited to small deterministic grids; manuscript under review at a workshop.

**Junior Research Scientist** — New York University, New York, NY \
Lab member, [Beaver Lab](http://collaborative.earth/beaver-lab), Collaborative Earth (Lab Lead: Dr. Grace W. Lindsay) · Jan 2024 – Jun 2025, full-time from Jan 2025 \
*Remote sensing and machine learning for forecasting the effects of beaver dam restoration on watersheds*

- Owned the data architecture for a lab whose goal is to let land stewards forecast what restoring a landscape with beavers will do, from satellite imagery rather than site-by-site survey.
- Automated retrieval and processing of remote sensing imagery across Google, NASA and USGS APIs, and designed the pipeline that reconciles sources disagreeing on projection, revisit interval and format so they line up on the same dam site.
- Handled over 1 TB of imagery covering more than 10,000 dams nationwide and over 1 million data points.

## Industry Experience

**Agent Developer** — Libra Culture, an AI Solution Company, New York, NY · Dec 2023 – present

- Architected and led development of a prediction-market-style conversational agent that retrieves evidence, generates market descriptions, defines outcome options and resolution criteria, and grounds responses with a custom RAG pipeline over a curated internal knowledge base.
- Built the end-to-end system largely independently, owning context compression, memory management, tool calling, retrieval workflows, database design, A/B testing pipelines, and CI/CD deployment.
- Optimized prompt preprocessing, post-processing and context management to cut response latency by 70% while significantly lowering token consumption.

**Data Engineer & Analyst** (internships) — Boston Consulting Group; Xiaozhi Forensics Center; Bondcliff Partners · 2021 – 2023

- Market entry strategy for a hepatitis B drug in China: research, total addressable market, national medical insurance policy analysis.
- Forensic analysis over 20,000+ transaction records with SQL, identifying illegal online gambling servers and visualizing money laundering paths in Tableau.
- Python/Selenium automation scraping 1,000+ public company profiles, with generative AI APIs for personalized outreach.

## Manuscripts

- Junhe Chen\*, **Ziyu Kong**\*. "What Survives a Layout Shift? Diagnosing Retention in Continual Navigation." Under review at a workshop. \*Equal contribution.
- **Ziyu Kong**. "Exact but Not Specific: A Measurement-Validity Analysis of Token-Level Name-Swap Audits in Late-Interaction Retrieval." Manuscript in revision.

## Awards

**Dean's List**, Academic Years 2021, 2022, 2023 — New York University, College of Arts and Science

**Special Contribution Award & 4th Place** — Rutgers University, RAISE-24 Student Data Science-Informatics Competition · Mar 2024

**Researcher Scholarship** — New York University, Center for Data Science · Dec 2024

## Technical

- Data: Hadoop, PySpark, Dask, ETL, Postgres, MySQL, MongoDB, SQL
- Programming: Python (pandas, numpy, scikit-learn, matplotlib), Java, C++
- Infrastructure: Linux HPC, AWS (S3, Lambda), Alibaba Cloud

*References available on request.*
