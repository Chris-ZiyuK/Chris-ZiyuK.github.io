---
updated: "2026-08-13"
synced_from: "PhD Application/01-core-materials/cv/cv-academic.md"
# PDF 尚不可发布:现有 Chris.Kong_CV.pdf 页眉含手机号(见 CLAUDE.md §2)。
# 重新导出一份去掉手机号的,再把这里改成 /Chris-Kong-CV.pdf。
pdf: "TODO:cv-pdf-without-phone"
# 相对上游 CV 删掉的东西,必须在这里记明,防止以后手滑加回来。
omitted:
  - "手机号 —— CLAUDE.md §2"
  - "REFERENCES 段三位推荐人的邮箱 —— 未经本人同意不公开他人联系方式"
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

- Research on information retrieval for scientific literature: document preprocessing, encoding, and retrieval pipeline design for climate-science question answering.
- Develop and evaluate ColBERT-based retrieval pipelines over large-scale corpora of climate research papers.
- Rebuilt PDF/OCR preprocessing for research-paper ingestion, increasing average extracted line length by ~50% and reducing noisy line fragmentation by 30–40%, giving cleaner text to downstream indexing and retrieval.
- Investigate how reranking and RAG pipeline design affect retrieval quality, answer fidelity, and system efficiency in literature-grounded QA.

**First-Author Research Project** (Neural Retrieval Auditing) — Brown University \
Originated in CSCI 2952W (Critical AI and Data Studies); developed into an ARR submission · Mar 2026 – present \
*Where Does Bias Hide in Neural Retrieval? Token-Level Attribution of Identity-Induced Score Sensitivity in Late-Interaction Models*

- Proposed Token Contribution Disparity (TCD), an exact token-level decomposition of counterfactual score shifts in late-interaction retrieval, attributing identity-induced bias to individual query tokens.
- Ran 55,440 controlled counterfactual tests with naturalistic-template and MS MARCO validations; function words absorb 1.43×–2.08× more identity-induced score change than content words, robust under cluster bootstraps and mixed-effects models; BM25 shows no sensitivity under identical swaps.
- Under review at ACL Rolling Review (May 2026 cycle).

**First-Author Research Project** (Continual Reinforcement Learning) — Brown University \
Originated in CSCI 2951X (Reintegrating AI); developed into a manuscript · Mar 2026 – May 2026 \
*HACE: Addressing Viability Failure in Sequential Reinforcement Learning with Homeostatic Auxiliary Rewards*

- Identified and formalized viability failure in sequential RL: agents managing a shared energy resource can die at task boundaries before learning new tasks, a failure mode not addressed by standard continual-RL methods.
- Proposed HACE, a task-invariant homeostatic auxiliary reward based on drive reduction; evaluated against EWC, experience replay, L2, and task-only baselines on a 10-task sequential benchmark (9 agent variants, 10 seeds).
- HACE variants reached roughly 3× higher task-boundary solvability and retained 3–5× more energy at task transitions; combining HACE with EWC improved both viability and retention.

**Junior Research Scientist** — New York University, New York, NY \
NYU Lindsay Lab (P.I.: Dr. Grace W. Lindsay) · Jan 2024 – Jun 2025 \
*Investigating and Predicting Impacts of Beaver Dams at Scale*

- Led the data engineering, analysis and modeling effort.
- Used Google, NASA and USGS database APIs to automate retrieval and processing of remote sensing imagery.
- Designed and automated the ETL process across those APIs, handling over 1 TB of data covering more than 10,000 beaver dams nationwide and over 1 million data points.

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

- **Ziyu Kong**. "Where Does Bias Hide in Neural Retrieval? Token-Level Attribution of Identity-Induced Score Sensitivity in Late-Interaction Models." Under review, ACL Rolling Review (May 2026 cycle).
- **Ziyu Kong**, Shihang Gui, Ruth Ukubay, and Meiyi Song. "HACE: Addressing Viability Failure in Sequential Reinforcement Learning with Homeostatic Auxiliary Rewards." Manuscript in preparation, 2026.

## Awards

**Dean's List**, Academic Years 2021, 2022, 2023 — New York University, College of Arts and Science

**Special Contribution Award & 4th Place** — Rutgers University, RAISE-24 Student Data Science-Informatics Competition · Mar 2024

**Researcher Scholarship** — New York University, Center for Data Science · Dec 2024

## Technical

- Data: Hadoop, PySpark, Dask, ETL, Postgres, MySQL, MongoDB, SQL
- Programming: Python (pandas, numpy, scikit-learn, matplotlib), Java, C++
- Infrastructure: Linux HPC, AWS (S3, Lambda), Alibaba Cloud

*References available on request.*
