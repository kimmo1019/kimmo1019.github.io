---
# Leave the homepage title empty to use the site title
title:
date: 2024-07-21
type: landing

sections:
  - block: slider
    content:
      slides:
      - title: 👋 Welcome to Our Group @ Yale
        content: We develop AI-powered frameworks for biomedical and statistical research.
        align: center
        background:
          image:
            filename: campus2.jpg
            filters:
              brightness: 0.7
          position: right
          color: '#666'
      - title: Current Research Topics
        content: Generative AI, Causal Inference, Single Cell, Gene Regulation, High-dimensional Statistics
        align: left
        background:
          image:
            filename: campus3.jpg
            filters:
              brightness: 0.7
          position: center
          color: '#555'
        link:
          icon: book-open
          icon_pack: fas
          text: Learn more
          url: ../research/

      - title: A Multidisciplinary Research Lab ❤️ 
        content: 'We are seeking for researchers at all levels to join us!'
        align: right
        background:
          image:
            filename: campus.jpg
            fit: contain
            filters:
              brightness: 0.5
          position: center
          color: '#333'
        link:
          icon: people-group
          icon_pack: fas
          text: Join Us
          url: ../contact/
    design:
      # Slide height is automatic unless you force a specific height (e.g. '400px')
      slide_height: '300px'
      is_fullscreen: true
      # Automatically transition through slides?
      loop: true
      # Duration of transition between slides (in ms)
      interval: 3000
      
  - block: hero
    content:
      title: |
        Our Mission
      image:
        filename: welcome.jpg
      text: |-
        <br>

        At the intersection of AI, statistics, and biology, our lab is dedicated to developing novel computational frameworks for unraveling the complexities of biomedical data, paving the way for groundbreaking discoveries in computational biology and biomedical informatics.

  - block: collection
    id: posts
    content:
      title: Recent Posts
      subtitle: ''
      text: 'Check out my recent blog posts below!'
      # Choose how many pages you would like to display (0 = all pages)
      count: 5
      # Filter on criteria
      filters:
        # The folders to display content from
        folders:
          - post
        author: ""
        category: ""
        tag: ""
        publication_type: ""
        featured_only: false
        exclude_featured: false
        exclude_future: false
        exclude_past: false
      # Choose how many pages you would like to offset by
      # Useful if you wish to show the first item in the Featured widget
      offset: 0
      # Field to sort by, such as Date or Title
      sort_by: 'Date'
      sort_ascending: false
    design:
      # Choose a listing view
      view: compact
      # Choose single or dual column layout
      columns: '2'

  - block: markdown
    content:
      title: Research Highlight
      subtitle: 
      text: |-

        Add any **markdown** formatted content here - text, images, videos, galleries - and even HTML code! {{% cta cta_link="./people/" cta_text="Meet the team ❤️ " %}}
        
    design:
      # See Page Builder docs for all section customization options.
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '2'
      
  - block: portfolio
    id: projects
    content:
      title: Highlighted Projects
      subtitle: 
      text: Add any **markdown** formatted content here - text, images, videos, galleries - and even HTML code!
      filters:
        # Folders to display content from
        folders:
          - project
        # Only show content with these tags
        tags: []
        # Exclude content with these tags
        exclude_tags: []
        # Which Hugo page kinds to show (https://gohugo.io/templates/section-templates/#page-kinds)
        kinds:
          - page
      # Field to sort by, such as Date or Title
      sort_by: 'Date'
      sort_ascending: false
      # Default portfolio filter button
      # 0 corresponds to the first button below and so on
      # For example, 0 will default to showing all content as the first button below shows content with *any* tag
      default_button_index: 0
      # Filter button toolbar (optional).
      # Add or remove as many buttons as you like.
      # To show all content, set `tag` to "*".
      # To filter by a specific tag, set `tag` to an existing tag name.
      # To remove the button toolbar, delete the entire `buttons` block.
      buttons:
        - name: All
          tag: '*'
        - name: Deep Learning
          tag: Deep Learning
        - name: Statistics
          tag: Statistics
        - name: Genomics
          tag: Genomics
        - name: Database
          tag: Database
        - name: Other
          tag: Demo
    design:
      # See Page Builder docs for all section customization options.
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '2'
      # Choose a listing view
      view: showcase
      # For Showcase view, flip alternate rows?
      flip_alt_rows: false

  
  - block: markdown
    content:
      title: Support & Funding
      subtitle: 
      text: |-

        We appreciate the support from the below funding agencies.
        
    design:
      # See Page Builder docs for all section customization options.
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '2'

---
