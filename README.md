# PredictByte — Premium Landing Page

An Awwwards-style landing page redesign built with React, TypeScript, Tailwind
CSS, Framer Motion, GSAP/ScrollTrigger and Lenis smooth scrolling.

## Stack

- **React 19 + Vite + TypeScript**
- **Tailwind CSS** — dark-only design system, colors/type/spacing tokens live in `tailwind.config.ts`
- **Framer Motion** — micro-interactions, page-load choreography, hover states
- **GSAP + ScrollTrigger** — the pinned "Engineering Cycle" scroll section
- **Lenis** — smooth-scroll, synced to GSAP's ticker so ScrollTrigger stays accurate
- **react-icons** — Feather (`fi`), Simple Icons (`si`) and Font Awesome (`fa`) sets

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
```

```bash
npm run build      # production build to /dist
npm run preview    # serve the production build locally
```

## What's implemented

- Floating glass navbar that shrinks and blurs more on scroll, with a fullscreen animated mobile menu
- Custom cursor with distinct states for text, buttons, images (`DRAG`) and links — add `data-cursor="button" | "text" | "image" | "link"` to any element to opt it in
- Fullscreen video hero with staged reveal (navbar → headline lines → paragraph → buttons → scroll cue)
- Infinite logo marquee, pausable on hover
- Large horizontal service panels with hover-reveal descriptions
- Apple-style full-viewport storytelling section for "Why PredictByte"
- Pinned, scroll-scrubbed "Engineering Cycle" section (GSAP ScrollTrigger) with a crossfading detail card
- Featured-projects carousel with a cursor-tilt laptop mockup
- Interactive tech-stack grid, auto-sliding testimonials, and a minimal FAQ accordion
- Reduced-motion support (`prefers-reduced-motion`) and visible keyboard focus states throughout

## Notes on the brief

- The brief called for **shadcn/ui**; every interactive element here (buttons, accordion, carousel) was hand-built instead to match the bespoke glass/serif language exactly — dropping in default shadcn primitives would have fought the "not a generic SaaS site" brief. If you want shadcn wired in for a specific future component, it's a quick add (`npx shadcn@latest init`).
- The hero video URL from the brief is wired in directly (`src/components/Hero.tsx`). If that asset ever moves, swap the `HERO_VIDEO` constant.
- Fonts load from Google Fonts (`Instrument Serif` + `Inter`) via `index.html` — swap to self-hosted files there if you'd rather not depend on Google's CDN.
- `FeaturedProjects` currently ships four gradient placeholder "screens" instead of real product screenshots — drop real images/video into `PROJECTS` in `src/components/FeaturedProjects.tsx` when you have assets.
- Company names in the marquee, testimonials and case studies are placeholder copy — swap for real logos/quotes before shipping.

## Project structure

```
src/
  components/       # one file per section/component
  hooks/useLenis.ts # smooth-scroll + GSAP ticker sync
  lib/utils.ts       # cn() class-merge helper
  index.css          # Tailwind layers, cursor + glass utilities
  App.tsx            # section composition
tailwind.config.ts    # color/type/layout tokens from the brief
```
