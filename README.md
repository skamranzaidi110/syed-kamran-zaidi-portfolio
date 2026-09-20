# Syed Kamran Zaidi — Portfolio

A production-ready portfolio site for a Power BI Developer / Data Analyst / Oracle ERP
Technical Support Engineer, built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **React 18 + TypeScript** — component structure, strict typing
- **Vite** — dev server & build
- **Tailwind CSS** — design tokens in `tailwind.config.ts` (ink/paper/amber/teal palette)
- **Framer Motion** — hero parallax, staggered reveals, hover/lightbox transitions
- **React Router** — `/` home and `/work/:slug` case study pages

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build      # type-check + production build to /dist
npm run preview    # preview the production build locally
```

## Project structure

```
src/
  components/     Navbar, Hero, ProjectsGallery, ProjectCard, About,
                   SkillsSection, ContactForm, ContactSection, Footer,
                   Lightbox, ChartMocks
  pages/          Home.tsx, CaseStudy.tsx
  data/           projects.ts — single source of truth for case study content
  lib/            utils.ts
  index.css       Tailwind layers, focus states, reduced-motion handling
```

## Content

- Edit `src/data/projects.ts` to add, remove, or rewrite case studies. Each project
  automatically gets a gallery, metrics, and a case study page at `/work/<slug>`.
- Contact details (email, phone, LinkedIn, GitHub) live in
  `src/components/ContactSection.tsx` and `src/components/Footer.tsx`.
- Swap the abstract SVG visuals in `src/components/ChartMocks.tsx` for real
  dashboard screenshots by replacing the `render` function passed to each
  `GalleryItem` in `src/pages/CaseStudy.tsx`.

## Wiring up the contact form

`ContactForm.tsx` currently simulates a submission (see the `setTimeout` in
`handleSubmit`). To make it functional, replace that block with a real request —
for example to [Formspree](https://formspree.io), a serverless function, or your
own API:

```ts
const res = await fetch("https://formspree.io/f/your-id", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(values),
});
if (!res.ok) throw new Error("Failed to send");
```

## Accessibility & performance notes

- All interactive elements are keyboard-reachable; focus states use a visible amber outline.
- `prefers-reduced-motion` is respected globally in `index.css`.
- The lightbox supports Escape and Arrow key navigation.
- Layout is responsive from ~360px mobile up through wide desktop.

## Deployment

This is a static Vite build — deploy the `/dist` folder to Netlify, Vercel, GitHub
Pages, or any static host. For client-side routing (the `/work/:slug` case study
routes) on a static host, configure a catch-all rewrite to `index.html`.
