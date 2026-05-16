---
title: "Conditional Attribute Estimation with Autoregressive Sequence Models"
authors:
  - Erica Stutz
  - Giacomo Marino
  - Daniella Meeker
  - Qiao Liu
  - Andrew J. Loza
date: '2026-05-13'
doi: '10.48550/arXiv.2605.14004'
publishDate: '2026-05-15T04:21:00Z'
publication_types: ["article"]
publication: '*arXiv preprint arXiv:2605.14004*'
publication_short: ''
abstract: >-
  Generative models are often trained with a next-token prediction objective, yet many downstream applications require the ability to estimate or control sequence-level properties. Next-token prediction can lead to overfitting of local patterns during training, underfitting of global structure, and requires significant downstream modifications or expensive sampling to guide or predict the global attributes of generated samples at inference time. Here, we introduce Conditional Attribute Transformers, a novel method for jointly estimating the next-token probability and the value of an attribute conditional on each potential next token selection. This framework enables three critical capabilities within a single forward pass, without modification of the input sequence: (1) per-token credit assignment across an entire sequence, by identifying how each token in a sequence is associated with an attribute's value; (2) counterfactual analysis, by quantifying attribute differences conditional on alternative next token choices; (3) steerable generation, by decoding sequences based on a combination of next-token and attribute likelihoods. Our approach achieves state of the art performance on sparse reward tasks, improves next-token prediction at sufficient model sizes, estimates attribute probabilities orders of magnitude faster than sampling, and can guide decoding of autoregressive sequence models on a range of language tasks.
summary: 'Erica Stutz, Giacomo Marino, Daniella Meeker, <ins>Qiao Liu</ins>, and Andrew J. Loza. arXiv, 2026.'
tags:
  - AI
  - LLM
featured: false
url_pdf: 'https://arxiv.org/pdf/2605.14004'
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''
image:
  caption: ''
  focal_point: ''
  preview_only: false
projects: []
slides: example
---

<!-- -->
