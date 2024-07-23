---
title: "A sequence-based method to predict the impact of regulatory variants using random forest"
authors:
- Qiao Liu
- Mingxin Gan
- Rui Jiang
date: "2017-03-14T00:00:00Z"
doi: "10.1186/s12918-017-0389-1"

# Schedule page publish date (NOT publication's date).
publishDate: "2017-03-14T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article-journal"]

# Publication name and optional abbreviated publication name.
publication: "BMC Systems Biology 11 (Suppl 2), 7, 2017."
publication_short: ""

abstract: Most disease-associated variants identified by genome-wide association studies (GWAS) exist in noncoding regions. In spite of the common agreement that such variants may disrupt biological functions of their hosting regulatory elements, it remains a great challenge to characterize the risk of a genetic variant within the implicated genome sequence. Therefore, it is essential to develop an effective computational model that is not only capable of predicting the potential risk of a genetic variant but also valid in interpreting how the function of the genome is affected with the occurrence of the variant. We developed a method named kmerForest that used a random forest classifier with k-mer counts to predict accessible chromatin regions purely based on DNA sequences. We demonstrated that our method outperforms existing methods in distinguishing known accessible chromatin regions from random genomic sequences. Furthermore, the performance of our method can further be improved with the incorporation of sequence conservation features. Based on this model, we assessed importance of the k-mer features by a series of permutation experiments, and we characterized the risk of a single nucleotide polymorphism (SNP) on the function of the genome using the difference between the importance of the k-mer features affected by the occurrence of the SNP. We conducted a series of experiments and showed that our model can well discriminate between pathogenic and normal SNPs. Particularly, our model correctly prioritized SNPs that are proved to be enriched for the binding sites of FOXA1 in breast cancer cell lines from previous studies. We presented a novel method to interpret functional genetic variants purely base on DNA sequences. The proposed k-mer based score offers an effective means of measuring the impact of SNPs on the function of the genome, and thus shedding light on the identification of genetic risk factors underlying complex traits and diseases.

# Summary. An optional shortened abstract.
summary: Qiao Liu, Mingxin Gan & Rui Jiang. BMC Systems Biology, 2017.

tags:
- Genomics
featured: false

# links:
# - name: ""
#   url: ""
url_pdf: ''
url_code: 'https://github.com/kimmo1019/kmerforest'
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
