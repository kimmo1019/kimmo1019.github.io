---
title: "DualGCN: a dual graph convolutional network model to predict cancer drug response"
authors:
- Tianxing Ma
- Qiao Liu
- Haochen Li
- Mu Zhou
- Rui Jiang
- Xuegong Zhang
date: "2022-04-15T00:00:00Z"
doi: "10.1186/s12859-022-04664-4"

# Schedule page publish date (NOT publication's date).
publishDate: "2022-04-15T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article-journal"]

# Publication name and optional abbreviated publication name.
publication: "BMC bioinformatics, 23(Suppl 4), 129, 2022"
publication_short: ""

abstract: Drug resistance is a critical obstacle in cancer therapy. Discovering cancer drug response is important to improve anti-cancer drug treatment and guide anti-cancer drug design. Abundant genomic and drug response resources of cancer cell lines provide unprecedented opportunities for such study. However, cancer cell lines cannot fully reflect heterogeneous tumor microenvironments. Transferring knowledge studied from in vitro cell lines to single-cell and clinical data will be a promising direction to better understand drug resistance. Most current studies include single nucleotide variants (SNV) as features and focus on improving predictive ability of cancer drug response on cell lines. However, obtaining accurate SNVs from clinical tumor samples and single-cell data is not reliable. This makes it difficult to generalize such SNV-based models to clinical tumor data or single-cell level studies in the future. We present a new method, DualGCN, a unified Dual Graph Convolutional Network model to predict cancer drug response. DualGCN encodes both chemical structures of drugs and omics data of biological samples using graph convolutional networks. Then the two embeddings are fed into a multilayer perceptron to predict drug response. DualGCN incorporates prior knowledge on cancer-related genes and protein–protein interactions, and outperforms most state-of-the-art methods while avoiding using large-scale SNV data. The proposed method outperforms most state-of-the-art methods in predicting cancer drug response without the use of large-scale SNV data. These favorable results indicate its potential to be extended to clinical and single-cell tumor samples and advancements in precision medicine.

# Summary. An optional shortened abstract.
summary: Tianxing Ma, Qiao Liu, Haochen Li, Mu Zhou, Rui Jiang & Xuegong Zhang.  BMC Bioinformatics, 2022.

tags:
- AI
- Genomics
featured: false

# links:
# - name: ""
#   url: ""
url_pdf: ''
url_code: 'https://github.com/horsedayday/DualGCN'
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
