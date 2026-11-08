---
title: "Beaver Lab: Remote Sensing for Beaver Restoration"
label: "Beaver Lab · NYU / Collaborative Earth"
short: "From satellite imagery to a tool for studying dam impacts"
slug: beaver-dams
role: "Junior Research Scientist, New York University · lab member, Beaver Lab (Collaborative Earth)"
period: "2024–2025"
status: "Completed"
status_shape: solid
order: 3
tags: [remote sensing, geospatial ML, data engineering]
takeaway: "Beaver Lab's interactive tool compares satellite-derived environmental measures at dam and no-dam locations."
contribution: "I built remote-sensing data pipelines, aligning imagery and environmental records across sites and time."
figure:
  src: /images/research/beaver-map.png
  alt: "Satellite-map example from the Beaver Impacts Tool, showing locations used to study beaver dam impacts."
  caption: "A map example from the lab's tool. Users supply dam sites and nearby comparison locations."
  sourceLabel: "Beaver Lab · tool example"
  sourceUrl: "https://www.collaborative.earth/beaver-impacts-tool"
secondaryFigure:
  src: /images/research/beaver-indices.png
  alt: "Example time-series plots from the Beaver Impacts Tool comparing satellite-derived indices at dam and no-dam locations."
  caption: "Monthly NDVI (vegetation) and NDWI Green comparisons at dam and no-dam locations, from the tool's public example. These are example outputs, not a study-wide causal estimate."
  sourceLabel: "Beaver Lab · tool example"
  sourceUrl: "https://www.collaborative.earth/beaver-impacts-tool"
links:
  Try demo: "https://dam-impact-analysis.streamlit.app/"
  Project: "https://www.collaborative.earth/beaver-impacts-tool"
  NYU CDS feature: "https://nyudatascience.medium.com/independent-research-course-student-contributes-to-large-national-study-of-beaver-dams-6886d0fe7553"
sources:
  - "https://www.collaborative.earth/beaver-impacts-tool — tool capabilities and example images"
  - "https://www.collaborative.earth/beaver-lab — lab aims and team membership"
  - "NYU Center for Data Science, November 20, 2024 — Landsat processing contribution and project coverage"
  - "cv-academic.md — Junior Research Scientist, New York University; remote-sensing data pipelines"
---

Beaver Lab studies how dams and beaver-based restoration affect surrounding
landscapes. Its Beaver Impacts Tool lets researchers and land managers compare
satellite-derived measures at dam sites and nearby locations without dams, then
view and download the results.

I built the data pipelines behind the research: automated retrieval and
processing across Google, NASA, and USGS APIs, with geographic and temporal
alignment of remote-sensing imagery and environmental records. The NYU Center
for Data Science featured my work on the project's Landsat processing pipeline.

The tool is a collaborative lab output. Its public examples show how the data can
support comparisons of vegetation, water, temperature, and evapotranspiration over
time. Forecasting restoration outcomes remains part of the lab's broader research
agenda.
