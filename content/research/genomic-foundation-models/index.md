---
title: Genomic Foundation Models

type: landing

sections:

  - block: hero
    content:
      title: "Genomic Foundation Models"
      image:
        filename: genomic-foundation-models.png
      text: |
        The human genome sequence can be viewed as a ”genome language” that encodes biological information. Our group develop the core technologies of genomic foundation models to gain deep insights into the complex regulatory syntax in
        DNA sequences and their functional roles. We focus on context-type aware genome foundation models that could provide insights into context-specific gene regulation.

  - block: portfolio
    id: projects
    content:
      title: Representative Papers
      subtitle: 
      text:
      filters:
        # Folders to display content from
        folders:
          - publication
        # Only show content with these tags
        tags: ['LLM']
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
      # buttons:
      #   - name: All
      #     tag: '*'
      #   - name: Multiomics Integration
      #     tag: 'MI'

    design:
      # See Page Builder docs for all section customization options.
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '2'
      # Choose a listing view
      view: citation
      # compact,citation
      # For Showcase view, flip alternate rows?
      flip_alt_rows: false
  
---