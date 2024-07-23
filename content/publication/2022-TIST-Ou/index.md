---
title: "AggEnhance: Aggregation Enhancement by Class Interior Points in Federated Learning with Non-IID Data"
authors:
- Jinxiang Ou
- Yunheng Shen
- Feng Wang
- Qiao Liu
- Xuegong Zhang
- Hairong Lv
date: "2022-09-22T00:00:00Z"
doi: "10.1145/3544495"

# Schedule page publish date (NOT publication's date).
publishDate: "2022-09-22T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article-journal"]

# Publication name and optional abbreviated publication name.
publication: "Transactions on Intelligent Systems and Technology (TIST), 13(6), 1-25, 2022"
publication_short: ""

abstract: Federated learning (FL) is a privacy-preserving paradigm for multi-institutional collaborations, where the aggregation is an essential procedure after training on the local datasets. Conventional aggregation algorithms often apply a weighted averaging of the updates generated from distributed machines to update the global model. However, while the data distributions are non-IID, the large discrepancy between the local updates might lead to a poor averaged result and a lower convergence speed, i.e., more iterations required to achieve a certain performance. To solve this problem, this article proposes a novel method named AggEnhance for enhancing the aggregation, where we synthesize a group of reliable samples from the local models and tune the aggregated result on them. These samples, named class interior points (CIPs) in this work, bound the relevant decision boundaries that ensure the performance of aggregated result. To the best of our knowledge, this is the first work to explicitly design an enhancing method for the aggregation in prevailing FL pipelines. A series of experiments on real data demonstrate that our method has noticeable improvements of the convergence in non-IID scenarios. In particular, our approach reduces the iterations by 31.87% on average for the CIFAR10 dataset and 43.90% for the PASCAL VOC dataset. Since our method does not modify other procedures of FL pipelines, it is easy to apply to most existing FL frameworks. Furthermore, it does not require additional data transmitted from the local clients to the global server, thus holding the same security level as the original FL algorithms.

summary: Jinxiang Ou, Yunheng Shen, Feng Wang, Qiao Liu, Xuegong Zhang, Hairong Lv. ACM Transactions on Intelligent Systems and Technology, 2022.

tags:
- AI
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
