---
title: People
date: 2022-10-24

type: landing

sections:
  - block: people
    id: lab-members
    content:
      title: Lab Members
      # Choose which groups/teams of users to display.
      #   Edit `user_groups` in each user's profile to add them to one or more of these groups.
      user_groups:
        - Group Members
      sort_by: Params.people_rank
      sort_ascending: true
    design:
      show_interests: false
      show_role: true
      show_social: true
      spacing:
        padding: ['50px', '0', '0', '0']

  - block: alumni
    id: lab-alumni
    content:
      title: Lab Alumni
      user_groups:
        - Lab Alumni
    design:
      spacing:
        padding: ['20px', '0', '50px', '0']
---
