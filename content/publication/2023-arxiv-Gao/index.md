---
title: "EpiGePT: a Pretrained Transformer model for human epigenomics"
authors:
- Zijing Gao
- Qiao Liu
- Wanwen Zeng
- Rui Jiang
- Wing Hung Wong
author_notes:
- "Equal contribution"
- "Equal contribution"
date: "2024-02-03T00:00:00Z"
doi: "10.1101/2023.07.15.549134"

# Schedule page publish date (NOT publication's date).
publishDate: "2024-02-03T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article-journal"]

# Publication name and optional abbreviated publication name.
publication: "Genome Biology, 2024 (in press)"
publication_short: ""

abstract: The inherent similarities between natural language and biological sequences have given rise to great interest in adapting the transformer-based large language models (LLMs) underlying recent breakthroughs in natural language processing (references), for applications in genomics. However, current LLMs for genomics suffer from several limitations such as the inability to include chromatin interactions in the training data, and the inability to make prediction in new cellular contexts not represented in the training data. To mitigate these problems, we propose EpiGePT, a transformer-based pretrained language model for predicting context-specific epigenomic signals and chromatin contacts. By taking the context-specific activities of transcription factors (TFs) and 3D genome interactions into consideration, EpiGePT offers wider applicability and deeper biological insights than models trained on DNA sequence only. In a series of experiments, EpiGePT demonstrates superior performance in a diverse set of epigenomic signals prediction tasks when compared to existing methods. In particular, our model enables cross-cell-type prediction of long-range interactions and offers insight on the functional impact of genetic variants under different cellular contexts. These new capabilities will enhance the usefulness of LLM in the study of gene regulatory mechanisms. We provide free online prediction service of EpiGePT through http://health.tsinghua.edu.cn/epigept/.

# Summary. An optional shortened abstract.
summary: Zijing Gao*, <ins>Qiao Liu*,</ins><sup>†</sup>, Wanwen Zeng, Rui Jiang<sup>†</sup>, Wing Hung Wong<sup>†</sup>. Genome Biology, 2024 (in press).

tags:
- AI
- Genomics
- HL
featured: true

# links:
# - name: ""
#   url: ""
url_pdf: https://www.biorxiv.org/content/10.1101/2023.07.15.549134v2.full.pdf
url_code: 'https://github.com/ZjGaothu/EpiGePT'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  placement: 1
  caption: ''
  focal_point: ""
  preview_only: false
  filename: EpiGePT.jpg

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
