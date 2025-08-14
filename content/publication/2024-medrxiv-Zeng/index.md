---
title: "How to improve polygenic prediction from whole-genome sequencing data by leveraging predicted epigenomic features?"
authors:
- Wanwen Zeng
- Hanmin Guo
- Qiao Liu
- Wing Hung Wong
date: "2025-06-12T00:00:00Z"
doi: "10.1073/pnas.2419202122"

# Schedule page publish date (NOT publication's date).
publishDate: "2025-06-12T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article-journal"]

# Publication name and optional abbreviated publication name.
publication: "PNAS, 2025"
publication_short: ""

abstract: Polygenic risk scores (PRS) are crucial in genetics for predicting individual susceptibility to complex diseases by aggregating the effects of numerous genetic variants. Whole-genome sequencing (WGS) has revolutionized our ability to detect rare and even de novo variants, creating an exciting opportunity for developing new PRS methods that can effectively leverage rare variants and capture the complex relationships among different variants. Furthermore, regulatory mechanisms play a crucial role in gene expression and disease manifestation, offering avenues to further enhance the performance and interpretation of PRS predictions. Through simulation studies, we highlighted aspects where current PRS methods face challenges when applied to WGS data, aiming to shed light on potential opportunities for further improvement. To address these challenges, we developed Epi-PRS, an approach that leverages the power of genomic large language models (LLM) to impute epigenomic signals across diverse cellular contexts, for use as intermediate variables between genotype and phenotype. A pretrained LLM is employed to transform genotypes into epigenomic signals using personal diploid sequences as inputs, and the genetic risk is then estimated based on the imputed personal epigenomic signals. Epi-PRS enhances the assessment of personal variant impacts, enabling a comprehensive and holistic consideration of genotypic and regulatory information within large genomic regions. Our simulation results demonstrated that incorporating the nuanced effects of non-linear models, rare variants, and regulatory information can provide more precise PRS prediction and better understanding of genetic risk. Applying Epi-PRS to real data from the UK Biobank, our results further showed that Epi-PRS significantly outperforms existing PRS methods in two major diseases, breast cancer and diabetes. This study suggests that PRS methods can benefit from incorporating non-linear models, rare variants, and regulatory information, highlighting the potential for significant advancements in disease risk modeling and enhancing the understanding of precision medicine.

# Summary. An optional shortened abstract.
summary: Wanwen Zeng, Hanmin Guo, Qiao Liu, Wing Hung Wong. PNAS, 2025.

tags:
- AI
- Genomics
featured: false

# links:
# - name: ""
#   url: ""
url_pdf: https://www.pnas.org/doi/10.1073/pnas.2419202122
url_code: 'https://github.com/SUwonglab/Epi-PRS'
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
  filename: ''

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
slides: ""
---

<!-- {{% callout note %}}
Click the *Cite* button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}} -->

<!-- {{% callout note %}}
Create your slides in Markdown - click the *Slides* button to check out the example.
{{% /callout %}} -->

<!-- Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/). -->
