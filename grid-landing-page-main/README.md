# Frontend Mentor - Grid landing page solution

This is a solution to the [Grid landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/grid-landing-page). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the page depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Open and close the navigation menu at any screen size

### Screenshot

![Screenshot of the grid landing page solution](./preview.jpg)

### Links

- Solution URL: (https://github.com/Chinomnso-Ugba/grid-landing-page.git)
- Live Site URL: (https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript for the menu toggle

### What I learned

The trickiest part of this challenge was the navigation menu overlay. On mobile it drops down as a full-width panel with a dimmed backdrop behind it, while on desktop the same panel becomes a tall strip pinned to the right edge instead. Handling both with one set of markup came down to letting a single `.menu-is-open` class on `<body>` drive different transforms at each breakpoint:

```css
.menu-panel {
  transform: translateY(-16px);
  opacity: 0;
}

.menu-is-open .menu-panel {
  transform: translateY(0);
  opacity: 1;
}

@media (min-width: 1000px) {
  .menu-panel {
    transform: translateX(24px);
  }
}
```

### Continued development

- Add a tablet-specific design pass once/if Frontend Mentor Pro design files are available, since this solution's tablet layout is an inferred breakpoint rather than a provided design.
- Look into replacing the hand-rolled focus/hover states with a small set of reusable utility classes for future challenges.

## Author

- GitHub - [@Chinomnso-Ugba](https://github.com/Chinomnso-Ugba)
- Frontend Mentor - [Add your Frontend Mentor profile link here](https://www.frontendmentor.io/profile/your-username)
