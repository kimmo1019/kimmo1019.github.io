---
title: "A Bayesian Generative Modeling Approach for Arbitrary Conditional Inference"
authors:
- Qiao_Liu
- Wing Hung Wong

# Author notes (such as 'Equal Contribution')
# A YAML list of notes for each author in the above `authors` list
author_notes: []

date: '2026-01-08'
doi: "10.48550/arXiv.2601.05355
"

# Date to publish webpage (NOT necessarily Bibtex publication's date).
publishDate: '2026-01-08T10:48:59.116372Z'

# Publication type.
# A single CSL publication type but formatted as a YAML list (for Hugo requirements).
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
publication: "arXiv, 2026"
publication_short: ''

abstract: 'Modern data analysis increasingly requires flexible conditional inference P(X_B | X_A) where (X_A, X_B) is an arbitrary partition of observed variable X. Existing conditional inference methods lack this flexibility as they are tied to a fixed conditioning structure and cannot perform new conditional inference once trained. To solve this, we propose a Bayesian generative modeling (BGM) approach for arbitrary conditional inference without retraining. BGM learns a generative model of X through an iterative Bayesian updating algorithm where model parameters and latent variables are updated until convergence. Once trained, any conditional distribution can be obtained without retraining. Empirically, BGM achieves superior prediction performance with well calibrated predictive intervals, demonstrating that a single learned model can serve as a universal engine for conditional prediction with uncertainty quantification. We provide theoretical guarantees for the convergence of the stochastic iterative algorithm, statistical consistency and conditional-risk bounds. The proposed BGM framework leverages the power of AI to capture complex relationships among variables while adhering to Bayesian principles, emerging as a promising framework for advancing various applications in modern data science. The code for BGM is freely available at https://github.com/liuq-lab/bayesgm'

# Summary. An optional shortened abstract.
summary: <ins>Qiao Liu</ins> and Wing Hung Wong. arXiv, 2026.

tags:
- AI
- Statistics
- HL
- CI
featured: true

# Links
url_pdf: https://arxiv.org/pdf/2601.05355
url_code: 'https://github.com/liuq-lab/bayesgm'
url_dataset: ''
url_poster: ''
url_project: ''
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

---

<!-- {{% callout note %}}
Click the *Cite* button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}} -->

<!-- {{% callout note %}}
Create your slides in Markdown - click the *Slides* button to check out the example.
{{% /callout %}} -->

<!-- Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/). -->
