---
title: Missingness-aware Data Imputation via AI-powered Bayesian Generative Modeling
authors:
- Qiao Liu
date: '2026-05-13'
doi: '10.48550/arXiv.2605.01676'



publishDate: '2026-05-14T02:21:20.570852Z'


publication_types:
- article
publication: '*arXiv preprint arXiv:2605.01676*'
publication_short: ""

abstract: Missing data imputation remains a fundamental challenge in modern data science, especially when uncertainty quantification is essential. In this work, we propose MissBGM, an AI-powered missing data imputation method via Bayesian generative modeling that bridges the expressive flexibility of neural networks with the statistical rigor of Bayesian inference. Unlike existing methods that often focus on point estimates or treat the missingness mechanism implicitly, MissBGM explicitly and jointly models the data-generating and missingness mechanisms, providing principled posterior uncertainty over imputations rather than a single point estimate. We develop a stochastic optimization framework with alternating updates among missing values, model parameters, and latent variables until convergence. Our theoretical analysis shows that estimates of missing values from MissBGM converge consistently under mild assumptions. Empirically, we demonstrate that MissBGM achieves superior performance over traditional imputers and recent neural network-based methods across extensive experimental settings. These results establish MissBGM as a principled and scalable solution for modern missing data imputation. The code for MissBGM is open sourced at https://github.com/liuq-lab/MissBGM.

# Summary. An optional shortened abstract.
summary: <ins>Qiao Liu</ins>. arXiv, 2026.

tags:
- AI
- Statistics
- HL

featured: true

# links:
# - name: ""
#   url: ""
url_pdf: https://arxiv.org/pdf/2605.01676
url_code: 'https://github.com/liuq-lab/MissBGM'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: ''
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---

<!-- -->
