---
title: Causal Inference

type: landing

sections:

  - block: hero
    content:
      title: "Causal Inference"
      image:
        filename: causal-inference.png
      text: |
        We develop causal inference methodologies tailored for high-dimensional data (e.g., high-dimensional covariates). Our group leverages generative AI models to learn structured representations that preserve underlying causal relationships. These representations enable 1) Identifiability of causal effects in settings with latent confounding. 2) Counterfactual inference to simulate outcomes under hypothetical interventions. 3) Quantification of uncertainty for causal effect estimates, which is critical for robust decision-making in biomedical and healcare applications.

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
        tags: ['CI']
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