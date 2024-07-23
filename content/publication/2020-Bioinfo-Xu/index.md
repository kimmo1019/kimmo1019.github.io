---
title: "Quantifying functional impact of non-coding variants with multi-task Bayesian neural network"
authors:
- Chencheng Xu
- Qiao Liu
- Jianyu Zhou
- Minzhu Xie
- Jianxing Feng
- Tao Jiang
date: "2019-11-06T00:00:00Z"
doi: "10.1093/bioinformatics/btz767"

# Schedule page publish date (NOT publication's date).
publishDate: "2019-11-06T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article-journal"]

# Publication name and optional abbreviated publication name.
publication: "Bioinformatics, 36(5), 1397-1404, 2020"
publication_short: ""

abstract: Advances in high-throughput genotyping and sequencing technologies during recent years have revealed essential roles of non-coding regions in gene regulation. Genome-wide association studies (GWAS) suggested that a large proportion of risk variants are located in non-coding regions and remain unexplained by current expression quantitative trait loci catalogs. Interpreting the causal effects of these genetic modifications is crucial but difficult owing to our limited knowledge of how regulatory elements function. Although several computational methods have been designed to prioritize regulatory variants that substantially impact human phenotypes, few of them achieve consistently high performance even when large-scale multi-omic data are integrated. We propose a novel multi-task framework based on Bayesian deep neural networks, MtBNN, to quantify the deleterious impact of single nucleotide polymorphisms in non-coding genomic regions. With the high-efficiency provided by the multi-task Bayesian framework to integrate information from different sources, MtBNN is capable of extracting features from genomic sequences of large-scale chromatin-profiling data, such as chromatin accessibility and transcript factor binding affinities, and calculating the distribution of the probability that a non-coding variant disrupts regulatory activities. A series of comprehensive experiments show that MtBNN quantifies the functional impact of cis-regulatory variations with high accuracy, including expression quantitative trait locus, DNase I sensitivity quantitative trait locus and functional genetic variants located within ATAC-peaks that affect the accessibility of the corresponding peak and achieves significantly better performance than the existing methods. Moreover, MtBNN has applications in the discovery of potentially causal disease-associated single-nucleotide polymorphisms (SNPs), thus helping fine-map the GWAS SNPs.



# Summary. An optional shortened abstract.
summary: Chencheng Xu, Qiao Liu, Jianyu Zhou, Minzhu Xie, Jianxing Feng, Tao Jiang. Bioinformatics, 2020.

tags:
- AI
- Genomics
featured: false

# links:
# - name: ""
#   url: ""
url_pdf: ''
url_code: 'https://github.com/Zoesgithub/MtBNN'
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
