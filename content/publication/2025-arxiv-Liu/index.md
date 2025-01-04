---
title: "An AI-powered Bayesian generative modeling approach for causal inference in observational studies"
authors:
- Qiao Liu
- Wing Hung Wong

# Author notes (such as 'Equal Contribution')
# A YAML list of notes for each author in the above `authors` list
author_notes: []

date: '2025-01-01'
doi: "10.48550/arXiv.2501.00755"

# Date to publish webpage (NOT necessarily Bibtex publication's date).
publishDate: '2025-01-01T10:48:59.116372Z'

# Publication type.
# A single CSL publication type but formatted as a YAML list (for Hugo requirements).
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
publication: "arXiv, 2025"
publication_short: ''

abstract: 'Causal inference in observational studies with high-dimensional covariates presents significant challenges. We introduce CausalBGM, an AI-powered Bayesian generative modeling approach that captures the causal relationship among covariates, treatment, and outcome variables. The core innovation of CausalBGM lies in its ability to estimate the individual treatment effect (ITE) by learning individual-specific distributions of a low-dimensional latent feature set (e.g., latent confounders) that drives changes in both treatment and outcome. This approach not only effectively mitigates confounding effects but also provides comprehensive uncertainty quantification, offering reliable and interpretable causal effect estimates at the individual level. CausalBGM adopts a Bayesian model and uses a novel iterative algorithm to update the model parameters and the posterior distribution of latent features until convergence. This framework leverages the power of AI to capture complex dependencies among variables while adhering to the Bayesian principles. Extensive experiments demonstrate that CausalBGM consistently outperforms state-of-the-art methods, particularly in scenarios with high-dimensional covariates and large-scale datasets. Its Bayesian foundation ensures statistical rigor, providing robust and well-calibrated posterior intervals. By addressing key limitations of existing methods, CausalBGM emerges as a robust and promising framework for advancing causal inference in modern applications in fields such as genomics, healthcare, and social sciences.'

# Summary. An optional shortened abstract.
summary: <ins>Qiao Liu</ins> and Wing Hung Wong. arXiv, 2025.

tags:
- AI
- Statistics
- HL
featured: true

# Links
url_pdf: https://arxiv.org/pdf/2501.00755
url_code: 'https://github.com/SUwonglab/CausalBGM'
url_dataset: ''
url_poster: ''
url_project: 'https://causalbgm.readthedocs.io/'
url_slides: ''
url_source: ''
url_video: ''

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

# Publication image
# Add an image named `featured.jpg/png` to your page's folder then add a caption below.
image:
  placement: 1
  caption: ''
  focal_point: ""
  preview_only: false
  filename: ''

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects: ['internal-project']` links to `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example

links:
- name: arXiv
  url: https://arxiv.org/abs/2501.00755
---

<!-- {{% callout note %}}
Click the *Cite* button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}} -->

<!-- {{% callout note %}}
Create your slides in Markdown - click the *Slides* button to check out the example.
{{% /callout %}} -->

<!-- Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/). -->
