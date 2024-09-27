---
title: "Density estimation using deep generative neural networks"
authors:
- Qiao Liu
- Jiaze Xu
- Rui Jiang
- Wing Hung Wong
date: "2021-04-08T00:00:00Z"
doi: "10.1073/pnas.2101344118"

# Schedule page publish date (NOT publication's date).
publishDate: "2021-04-08T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article-journal"]

# Publication name and optional abbreviated publication name.
publication: "Proceedings of the National Academy of Sciences, 118 (15), e2101344118, 2021"
publication_short: ""

abstract: Density estimation is one of the fundamental problems in both statistics and machine learning. In this study, we propose Roundtrip, a computational framework for general-purpose density estimation based on deep generative neural networks. Roundtrip retains the generative power of deep generative models, such as generative adversarial networks (GANs) while it also provides estimates of density values, thus supporting both data generation and density estimation. Unlike previous neural density estimators that put stringent conditions on the transformation from the latent space to the data space, Roundtrip enables the use of much more general mappings where target density is modeled by learning a manifold induced from a base density (e.g., Gaussian distribution). Roundtrip provides a statistical framework for GAN models where an explicit evaluation of density values is feasible. In numerical experiments, Roundtrip exceeds state-of-the-art performance in a diverse range of density estimation tasks.

# Summary. An optional shortened abstract.
summary: Qiao Liu, Jiaze Xu, Rui Jiang, Wing Hung Wong. PNAS, 2021.

tags:
- AI
- Statistics
- HL
featured: true

# links:
# - name: ""
#   url: ""
url_pdf: https://www.pnas.org/doi/epdf/10.1073/pnas.2101344118
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
