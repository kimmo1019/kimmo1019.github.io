---
title: Single-cell Genomics

type: landing

sections:

  - block: hero
    content:
      title: "Single-cell Genomics"
      image:
        filename: single-cell-genomics.png
      text: |
        We develop tools powered by generative AI that capture cell hetergeneity, cell state transition, cell-cell/environment communications/response etc. Current reserach interests lie on identifying/discovering causal effect/structure to analyze time‑course data, lineage tracing, CRISPR and small‑molecule perturbation screens. Our models provide insights into gene regulation mechanisms by modeling cell development, transition, response, aging, etc.

  - block: portfolio
    id: projects
    content:
      title: Related Papers
      subtitle: 
      text:
      filters:
        # Folders to display content from
        folders:
          - publication
        # Only show content with these tags
        tags: ['SCG']
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