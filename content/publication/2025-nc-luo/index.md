---
title: Multi-modal Diffusion Model with Dual-Cross-Attention for Multi-Omics Data
  Generation and Translation


# Authors
# A YAML list of author names
# If you created a profile for a user (e.g. the default `admin` user at `content/authors/admin/`), 
# write the username (folder name) here, and it will be replaced with their full name and linked to their profile.
authors:
- Erpai Luo
- Qiao Liu
- Minsheng Hao
- Lei Wei
- Xuegong Zhang

# Author notes (such as 'Equal Contribution')
# A YAML list of notes for each author in the above `authors` list
author_notes:
- "Equal contribution"
- "Equal contribution"

date: '2025-01-01'

# Date to publish webpage (NOT necessarily Bibtex publication's date).
publishDate: '2025-08-14T16:46:40.378352Z'

# Publication type.
# A single CSL publication type but formatted as a YAML list (for Hugo requirements).
publication_types:
- article-journal

# Publication name and optional abbreviated publication name.
publication: '*bioRxiv*'
publication_short: ''

doi: '10.1101/2025.02.27.640020'

abstract: 'Single-cell multi-omics data have a high potential for deciphering complex cellular mechanisms. But simultaneously measuring multi-omics data from the same cells is still challenging, which calls for computational methods to integrate data of multiple modalities and generate unobserved data. In this paper, we present scDiffusion-X, a latent diffusion model tailored for this task. The model uses autoencoders to map the multi-modalities into low-dimensional latent spaces, coupled with a Dual-Cross-Attention (DCA) module we invented to learn hidden links between modalities. DCA enables the model to unravel interactions among features of multiple modalities and interpretable integration of multi-omics data. We designed a framework with DCA to extract comprehensive cell-type specific heterogeneous gene regulatory network. scDiffusion-X not only excels in generating multi-omics data under various conditions, but also can translate data between modalities with high fidelity, which cannot be achieved with existing multi-omics data simulators. Extensive benchmarking experiments showed that scDiffusion-X has superior performance in scalability, quality of generated data, and model interpretability compared with existing methods. It can serve as a powerful tool for unlocking the potential of single-cell multi-omics data, dissecting regulatory relationships, predicting perturbation responses, and identifying biomarkers and regulatory patterns.'

# Summary. An optional shortened abstract.
summary: Erpai Luo, Lei Wei, Minsheng Hao, Xuegong Zhang<sup>†</sup>, <ins>Qiao Liu</ins><sup>†</sup>. bioRxiv 2025 (Nat. Commun. in revision)

tags:
- AI
- Genomics
- CB
- MI
- SCG
- HL

# Display this page in a list of Featured pages?
featured: false

# Links
url_pdf: 'https://www.biorxiv.org/content/10.1101/2025.02.27.640020v2'
url_code: 'https://github.com/EperLuo/scDiffusion-X'
url_dataset: ''
url_poster: ''
url_project: 'https://scDiffusionX.readthedocs.io'
url_slides: ''
url_source: ''
url_video: ''

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

# Publication image
# Add an image named `featured.jpg/png` to your page's folder then add a caption below.
image:
  caption: ''
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects: ['internal-project']` links to `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []
---

Add the **full text** or **supplementary notes** for the publication here using Markdown formatting.
