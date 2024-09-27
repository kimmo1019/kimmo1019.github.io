---
title: "An encoding generative modeling approach to dimension reduction and covariate adjustment in causal inference with observational studies"
authors:
- Qiao Liu
- Zhongren Chen
- Wing Hung Wong
date: "2024-05-29T00:00:00Z"
doi: "10.1073/pnas.2322376121"

# Schedule page publish date (NOT publication's date).
publishDate: "2024-05-29T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article-journal"]

# Publication name and optional abbreviated publication name.
publication: "Proceedings of the National Academy of Sciences, 121(23), e2322376121, 2024"
publication_short: ""

abstract: In this article, we develop CausalEGM, a deep learning framework for nonlinear dimension reduction and generative modeling of the dependency among covariate features affecting treatment and response. CausalEGM can be used for estimating causal effects in both binary and continuous treatment settings. By learning a bidirectional transformation between the high-dimensional covariate space and a low-dimensional latent space and then modeling the dependencies of different subsets of the latent variables on the treatment and response, CausalEGM can extract the latent covariate features that affect both treatment and response. By conditioning on these features, one can mitigate the confounding effect of the high dimensional covariate on the estimation of the causal relation between treatment and response. In a series of experiments, the proposed method is shown to achieve superior performance over existing methods in both binary and continuous treatment settings. The improvement is substantial when the sample size is large and the covariate is of high dimension. Finally, we established excess risk bounds and consistency results for our method, and discuss how our approach is related to and improves upon other dimension reduction approaches in causal inference.

# Summary. An optional shortened abstract.
summary: <ins>Qiao Liu</ins>, Zhongren Chen, Wing Hung Wong. ***PNAS***, 2024.

tags:
- AI
- Statistics
- HL
featured: true

# links:
# - name: ""
#   url: ""
url_pdf: https://www.pnas.org/doi/epdf/10.1073/pnas.2322376121
url_code: 'https://github.com/SUwonglab/CausalEGM'
url_dataset: ''
url_poster: ''
url_project: 'https://causalegm.readthedocs.io/'
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
