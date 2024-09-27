---
title: "DeepCDR: a hybrid graph convolutional network for predicting cancer drug response"
authors:
- Qiao Liu
- Zhiqiang Hu
- Rui Jiang
- Mu Zhou
date: "2020-12-29T00:00:00Z"
doi: "10.1093/bioinformatics/btaa822"

# Schedule page publish date (NOT publication's date).
publishDate: "2020-12-29T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["paper-conference"]

# Publication name and optional abbreviated publication name.
publication: "ECCB Proceedings/Bioinformatics, 36(2), i911-i918, 2020"
publication_short: ""

abstract: Accurate prediction of cancer drug response (CDR) is challenging due to the uncertainty of drug efficacy and heterogeneity of cancer patients. Strong evidences have implicated the high dependence of CDR on tumor genomic and transcriptomic profiles of individual patients. Precise identification of CDR is crucial in both guiding anti-cancer drug design and understanding cancer biology. In this study, we present DeepCDR which integrates multi-omics profiles of cancer cells and explores intrinsic chemical structures of drugs for predicting CDR. Specifically, DeepCDR is a hybrid graph convolutional network consisting of a uniform graph convolutional network and multiple subnetworks. Unlike prior studies modeling hand-crafted features of drugs, DeepCDR automatically learns the latent representation of topological structures among atoms and bonds of drugs. Extensive experiments showed that DeepCDR outperformed state-of-the-art methods in both classification and regression settings under various data settings. We also evaluated the contribution of different types of omics profiles for assessing drug response. Furthermore, we provided an exploratory strategy for identifying potential cancer-associated genes concerning specific cancer types. Our results highlighted the predictive power of DeepCDR and its potential translational value in guiding disease-specific drug design.

# Summary. An optional shortened abstract.
summary: <ins>Qiao Liu</ins>, Zhiqiang Hu, Rui Jiang, Mu Zhou. ***ECCB Proceedings/Bioinformatics***, 2020

tags:
- AI
- Genomics
- Drug
- HL
featured: true

# links:
# - name: ""
#   url: ""
url_pdf: ''
url_code: 'https://github.com/kimmo1019/DeepCDR'
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
