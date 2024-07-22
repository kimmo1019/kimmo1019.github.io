---
title: "DeepDrug: A general graph-based deep learning framework for drug-drug interactions and drug-target interactions prediction"
authors:
- Qijin Yin
- Rui Fan
- Xusheng Cao
- Qiao Liu#
- Rui Jiang#
- Wanwen Zeng#
date: "2023-04-21T00:00:00Z"
doi: "10.15302/J-QB-022-0320"

# Schedule page publish date (NOT publication's date).
publishDate: "2023-04-21T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article-journal"]

# Publication name and optional abbreviated publication name.
publication: "Quantitative Biology, 11(3), 260-274, 2023"
publication_short: ""

abstract: Computational approaches for accurate prediction of drug interactions, such as drug-drug interactions (DDIs) and drug-target interactions (DTIs), are highly demanded for biochemical researchers. Despite the fact that many methods have been proposed and developed to predict DDIs and DTIs respectively, their success is still limited due to a lack of systematic evaluation of the intrinsic properties embedded in the corresponding chemical structure. In this paper, we develop DeepDrug, a deep learning framework for overcoming the above limitation by using residual graph convolutional networks (Res-GCNs) and convolutional networks (CNNs) to learn the comprehensive structure- and sequence-based representations of drugs and proteins.DeepDrug outperforms state-of-the-art methods in a series of systematic experiments, including binary-class DDIs, multi-class/multi-label DDIs, binary-class DTIs classification and DTIs regression tasks. Furthermore, we visualize the structural features learned by DeepDrug Res-GCN module, which displays compatible and accordant patterns in chemical properties and drug categories, providing additional evidence to support the strong predictive power of DeepDrug. Ultimately, we apply DeepDrug to perform drug repositioning on the whole DrugBank database to discover the potential drug candidates against SARS-CoV-2, where 7 out of 10 top-ranked drugs are reported to be repurposed to potentially treat coronavirus disease 2019 (COVID-19). To sum up, we believe that DeepDrug is an efficient tool in accurate prediction of DDIs and DTIs and provides a promising insight in understanding the underlying mechanism of these biochemical relations.

# Summary. An optional shortened abstract.
summary: Qijin Yin, Rui Fan, Xusheng Cao Qiao Liu#, Rui Jiang# and Wanwen Zeng#. Quantitative Biology, 2023.

tags:
- AI
- Drug
featured: true

# links:
# - name: ""
#   url: ""
url_pdf: ''
url_code: 'https://github.com/wanwenzeng/deepdrug'
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
