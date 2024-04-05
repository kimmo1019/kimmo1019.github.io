---
# Leave the homepage title empty to use the site title
title:
date: 2024-04-04
type: landing

sections:
  - block: hero
    content:
      title: |
        Liu Research Group
      image:
        filename: welcome.jpg
      text: |
        <br>
        
        At the intersection of AI, statistics, and biology, our lab is dedicated to developing novel computational frameworks for unraveling the complexities of biomedical data, paving the way for groundbreaking discoveries in computational biology and biomedical informatics, ultimately improving human health.
  
  - block: collection
    content:
      title: Latest News
      subtitle:
      text:
      count: 5
      filters:
        author: ''
        category: ''
        exclude_featured: false
        publication_type: ''
        tag: ''
      offset: 0
      order: desc
      page_type: post
    design:
      view: card
      columns: '1'
  
  - block: markdown
    content:
      title:
      subtitle: ''
      text:
    design:
      columns: '1'
      background:
        image: 
          filename: coders.jpg
          filters:
            brightness: 1
          parallax: false
          position: center
          size: cover
          text_color_light: true
      spacing:
        padding: ['20px', '0', '20px', '0']
      css_class: fullscreen
  
  - block: markdown
    content:
      title:
      subtitle:
      text: |
        {{% cta cta_link="./people/" cta_text="Meet the team →" %}}
    design:
      columns: '1'
---