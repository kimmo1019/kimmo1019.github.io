---
title: "Automatically structuring on Chinese ultrasound report of cerebrovascular diseases via natural language processing"
authors:
- Pengyu Chen
- Qiao Liu
- Lan Wei
- Beier Zhao
- Yin Jia
- Hairong Lv
- Xiaolu Fe
author_notes:
- "Equal contribution"
- "Equal contribution"
date: "2019-06-14T00:00:00Z"
doi: "10.1109/ACCESS.2019.2923221"

# Schedule page publish date (NOT publication's date).
publishDate: "2019-06-14T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article-journal"]

# Publication name and optional abbreviated publication name.
publication: "IEEE Access, 7, 89043-89050, 2019."
publication_short: ""

abstract: The current ultrasound reports in Chinese hospitals are mostly written in free-text format. Important clinical information, such as stenosis rate and plaque location, is recorded in long sentences, especially for ultrasound reports of cerebrovascular diseases. They cannot be directly used for further automatic analysis due to the lack of structure and standardization. The goal of this paper is to assess the feasibility of applying natural language processing technology to automatically extract disease entities and relate information such as the stenosis rate and plaque location from free-text ultrasound reports of cerebrovascular diseases. A structured model using conditional random fields (CRFs) is first constructed. Then, the clause optimizing and segmentation process is performed on a word level to achieve data structuring. Seven categories of terms, including symptoms, plaque locations, diseases, and degree, in 1980 de-identified ultrasound reports were manually annotated as a training dataset. With this model, 7937 ultrasound reports were automatically processed to structure data within 40 min. The true positive rate of the model for each category of terms is 96%, 94%, 97%, 100%, 100%, 100%, and 97%, respectively. The CRF model can be used in Chinese natural language processing to provide support for unstructured data analysis. The standardized segmentation results can be obtained based on medical ontology libraries. However, real-time processing and scientific annotation remain a challenge if intelligent clinical decision making needs to be applied to a real-world clinical environment.

# Summary. An optional shortened abstract.
summary: Pengyu Chen, Qiao Liu, Lan Wei, Beier Zhao, Yin Jia, Hairong Lv, Xiaolu Fe. BMC Systems Biology, 2017.

tags:
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
