---
title: "scGraph: a graph neural network-based approach to automatically identify cell types"
authors:
- Qijin Yin
- Qiao Liu
- Zhuoran Fu
- Rui Jiang
date: "2022-04-08T00:00:00Z"
doi: "10.1093/bioinformatics/btac199"

# Schedule page publish date (NOT publication's date).
publishDate: "2022-04-08T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article-journal"]

# Publication name and optional abbreviated publication name.
publication: "Bioinformatics, 38(11), 2996-3003, 2022"
publication_short: ""

abstract: Single-cell technologies play a crucial role in revolutionizing biological research over the past decade, which strengthens our understanding in cell differentiation, development and regulation from a single-cell level perspective. Single-cell RNA sequencing (scRNA-seq) is one of the most common single cell technologies, which enables probing transcriptional states in thousands of cells in one experiment. Identification of cell types from scRNA-seq measurements is a fundamental and crucial question to answer. Most previous studies directly take gene expression as input while ignoring the comprehensive gene–gene interactions. We propose scGraph, an automatic cell identification algorithm leveraging gene interaction relationships to enhance the performance of the cell-type identification. scGraph is based on a graph neural network to aggregate the information of interacting genes. In a series of experiments, we demonstrate that scGraph is accurate and outperforms eight comparison methods in the task of cell-type identification. Moreover, scGraph automatically learns the gene interaction relationships from biological data and the pathway enrichment analysis shows consistent findings with previous analysis, providing insights on the analysis of regulatory mechanism.

# Summary. An optional shortened abstract.
summary: Qijin Yin, Qiao Liu, Zhuoran Fu, Rui Jiang. Bioinformatics, 2022.

tags:
- AI
- Genomics
featured: false

# links:
# - name: ""
#   url: ""
url_pdf: ''
url_code: 'https://github.com/QijinYin/scGraph'
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

<!-- {{% callout note %}}
Click the *Cite* button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}} -->

<!-- {{% callout note %}}
Create your slides in Markdown - click the *Slides* button to check out the example.
{{% /callout %}} -->

<!-- Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/). -->
