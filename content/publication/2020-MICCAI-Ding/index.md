---
title: "Feature-enhanced graph networks for genetic mutational prediction using histopathological images in colon cancer"
authors:
- Kexin Ding
- Qiao Liu
- Edward Lee
- Mu Zhou
- Aidong Lu
- Shaoting Zhang
date: "2020-09-29T00:00:00Z"
doi: "10.1007/978-3-030-59713-9_29"

# Schedule page publish date (NOT publication's date).
publishDate: "2020-09-29T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["paper-conference"]

# Publication name and optional abbreviated publication name.
publication: "Medical Image Computing and Computer Assisted Intervention (MICCAI) 2020"
publication_short: ""

abstract: Mining histopathological and genetic data provides a unique avenue to deepen our understanding of cancer biology. However, extensive cancer heterogeneity across image- and molecular-scales poses technical challenges for feature extraction and outcome prediction. In this study, we propose a feature-enhanced graph network (FENet) for genetic mutation prediction using histopathological images in colon cancer. Unlike conventional approaches analyzing patch-based feature alone without considering their spatial connectivity, we seek to link and explore non-isomorphic topological structures in histopathological images. Our FENet incorporates feature enhancement in convolutional graph neural networks to aggregate discriminative features for capturing gene mutation status. Specifically, our approach could identify both local patch feature information and global topological structure in histopathological images simultaneously. Furthermore, we introduced an ensemble strategy by constructing multiple subgraphs to boost the prediction performance. Extensive experiments on the TCGA-COAD and TCGA-READ cohort including both histopathological images and three key genes’ mutation profiles (APC, KRAS, and TP53) demonstrated the superiority of FENet for key mutational outcome prediction in colon cancer.

# Summary. An optional shortened abstract.
summary: Kexin Ding, Qiao Liu, Edward Lee, Mu Zhou, Aidong Lu & Shaoting Zhang. MICCAI, 2020.

tags:
- AI
- Genomics
featured: false

# links:
# - name: ""
#   url: ""
url_pdf: ''
url_code: ''
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
