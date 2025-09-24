---
title: "hicGAN infers super resolution Hi-C data with generative adversarial networks"
authors:
- Qiao Liu
- Hairong Lv
- Rui Jiang
date: "2019-07-05T00:00:00Z"
doi: "10.1093/bioinformatics/btz317"

# Schedule page publish date (NOT publication's date).
publishDate: "2019-07-05T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["paper-conference"]

# Publication name and optional abbreviated publication name.
publication: "ISMB Proceedings/Bioinformatics, 35(14), i99-i107, 2019"
publication_short: ""

abstract: Hi-C is a genome-wide technology for investigating 3D chromatin conformation by measuring physical contacts between pairs of genomic regions. The resolution of Hi-C data directly impacts the effectiveness and accuracy of downstream analysis such as identifying topologically associating domains (TADs) and meaningful chromatin loops. High resolution Hi-C data are valuable resources which implicate the relationship between 3D genome conformation and function, especially linking distal regulatory elements to their target genes. However, high resolution Hi-C data across various tissues and cell types are not always available due to the high sequencing cost. It is therefore indispensable to develop computational approaches for enhancing the resolution of Hi-C data. We proposed hicGAN, an open-sourced framework, for inferring high resolution Hi-C data from low resolution Hi-C data with generative adversarial networks (GANs). To the best of our knowledge, this is the first study to apply GANs to 3D genome analysis. We demonstrate that hicGAN effectively enhances the resolution of low resolution Hi-C data by generating matrices that are highly consistent with the original high resolution Hi-C matrices. A typical scenario of usage for our approach is to enhance low resolution Hi-C data in new cell types, especially where the high resolution Hi-C data are not available. Our study not only presents a novel approach for enhancing Hi-C data resolution, but also provides fascinating insights into disclosing complex mechanism underlying the formation of chromatin contacts.

# Summary. An optional shortened abstract.
summary: <ins>Qiao Liu</ins>, Hairong Lv, Rui Jiang. ***ISMB Proceedings/Bioinformatics***, 2019

tags:
- AI
- Genomics
- CB
featured: true

# links:
# - name: ""
#   url: ""
url_pdf: ''
url_code: 'https://github.com/kimmo1019/Roundtrip'
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
