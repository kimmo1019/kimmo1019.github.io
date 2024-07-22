---
title: "DeepCAGE: Incorporating Transcription Factors in Genome-Wide Prediction of Chromatin Accessibility"
authors:
- Qiao Liu
- Kui Hua
- Xuegong Zhang
- Wing Hung Wong
- Rui Jiang
date: "2022-03-12T00:00:00Z"
doi: "10.1016/j.gpb.2021.08.015"

# Schedule page publish date (NOT publication's date).
publishDate: "2022-03-12T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article-journal"]

# Publication name and optional abbreviated publication name.
publication: "Genomics, Proteomics and Bioinformatics, 20(3), 496-507, 2022"
publication_short: ""

abstract: Although computational approaches have been complementing high-throughput biological experiments for the identification of functional regions in the human genome, it remains a great challenge to systematically decipher interactions between transcription factors (TFs) and regulatory elements to achieve interpretable annotations of chromatin accessibility across diverse cellular contexts. To solve this problem, we propose DeepCAGE, a deep learning framework that integrates sequence information and binding statuses of TFs, for the accurate prediction of chromatin accessible regions at a genome-wide scale in a variety of cell types. DeepCAGE takes advantage of a densely connected deep convolutional neural network architecture to automatically learn sequence signatures of known chromatin accessible regions and then incorporates such features with expression levels and binding activities of human core TFs to predict novel chromatin accessible regions. In a series of systematic comparisons with existing methods, DeepCAGE exhibits superior performance in not only the classification but also the regression of chromatin accessibility signals. In a detailed analysis of TF activities, DeepCAGE successfully extracts novel binding motifs and measures the contribution of a TF to the regulation with respect to a specific locus in a certain cell type. When applied to whole-genome sequencing data analysis, our method successfully prioritizes putative deleterious variants underlying a human complex trait and thus provides insights into the understanding of disease-associated genetic variants. DeepCAGE can be downloaded from https://github.com/kimmo1019/DeepCAGE.

# Summary. An optional shortened abstract.
summary: Qiao Liu, Kui Hua, Xuegong Zhang, Wing Hung Wong, Rui Jiang. Genomics, Proteomics & Bioinformatics, 2022.

tags:
- AI
- Genomics
featured: true

# links:
# - name: ""
#   url: ""
url_pdf: ''
url_code: 'https://github.com/kimmo1019/DeepCAGE'
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
