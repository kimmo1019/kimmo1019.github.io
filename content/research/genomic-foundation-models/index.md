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
        We build *context-aware* foundation models for regulatory genomics by leveraging large-scale sequence, epigenomic, transcriptomic, and perturbation datasets. Our goal is to develop context-aware models that can learn generalizable representations of gene regulation, predict molecular phenotypes across cell types and conditions, and enable downstream tasks such as genetic variant effect quantification, regulatory element discovery, and phenotype prediction.

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