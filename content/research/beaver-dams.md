---
title: "Remote Sensing and Machine Learning for Forecasting Beaver Dam Impacts on Watersheds"
short: "Predicting what dam restoration does to a landscape"
slug: beaver-dams
role: "Beaver Lab, Collaborative Earth (Lab Lead: Prof. Grace W. Lindsay, NYU)"
period: "2024–2025"
status: "Completed"
status_shape: solid
order: 4
tags: [remote sensing, geospatial ML, data engineering]
links:
  Beaver Lab: "http://collaborative.earth/beaver-lab"
sources:
  - "collaborative.earth/beaver-lab — 实验室名称、负责人、团队与目标"
  - "cv-academic.md — Junior Research Scientist, New York University"
---

Beaver Lab asks whether land stewards can forecast the effects of restoring a
landscape with beavers, using satellite imagery and machine learning in place of
site-by-site survey. The obstacle is upstream of the modelling: the imagery and
hydrology records for thousands of dam sites live in separate archives that
disagree about geography, time, and format, and no single database covers them.

I built the data side of that. Automated retrieval and processing of remote
sensing imagery across Google, NASA and USGS APIs, and designed the pipeline
around it — extraction, transformation, storage, and the reconciliation needed to
make sources with different projections and revisit intervals line up on the same
site. Over a terabyte of imagery covering more than ten thousand dams nationwide.

The lab's deliverables are a prototype tool for analysing dam impact and a
predictive model for how restoration affects drought and wildfire resilience.
