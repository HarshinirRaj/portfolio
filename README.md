# Harshini Gadige — Portfolio

A personal portfolio site for Harshini Gadige, Senior Software Engineer, built to
read as a systems console: event pipelines, deployment timelines, and a stack
manifest instead of a generic template.

## Overview

- **Role positioning:** Senior Software Engineer (Backend / Event-Driven Systems),
  with a secondary focus on AI-augmented engineering workflows.
- **Design direction:** Structured, GitHub/console-inspired. Deep ink-navy dark
  mode and a cool paper-white light mode, with a two-tone amber/cyan signal
  palette borrowed from monitoring dashboards (Splunk/Prometheus-style
  status colors) rather than decorative gradients.
- **Signature element:** An animated event-pipeline diagram in the hero,
  modeled on the candidate's actual transactional-outbox + Kafka relay work —
  producer → outbox → topic → idempotency check → delivered, with zero events
  lost.
- **Typography:** Space Grotesk (display), IBM Plex Sans (body), IBM Plex Mono
  (labels, stats, timestamps).

## Sections

1. **Hero** — tagline, headline stats, and the animated pipeline visualization.
2. **About** — narrative summary and quick facts.
3. **Featured Work** — four case-study cards (problem → build → impact → stack)
   covering payment reliability engineering, the AI-augmented engineering
   platform, the Mastercard platform modernization, and the observability
   toolkit.
4. **Experience** — a timeline across Intuit, Mastercard, Pramati
   Technologies, and OSI Digital, plus education and certifications.
5. **Stack** — skills grouped by system layer (languages, backend, cloud,
   data, AI tooling, observability).
6. **Contact** — email, phone, and LinkedIn.

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router, TypeScript)
- [Tailwind CSS](https://tailwindcss.com/) (custom design tokens, class-based
  dark mode)
- [lucide-react](https://lucide.dev/) for icons
- No external UI libraries, no environment variables, no backend/API routes

## Local setup

Requires Node.js 18.18+ (or 20+).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm run start
```

## Editing content

All resume/profile copy lives in one place: [`lib/data.ts`](./lib/data.ts).
Update the `profile`, `stats`, `about`, `projects`, `experience`, `education`,
`certifications`, and `skillGroups` exports there — every section reads from
this file, so no component edits are required for a content update.

Design tokens (colors, fonts, spacing, animation) live in
[`tailwind.config.ts`](./tailwind.config.ts) and
[`app/globals.css`](./app/globals.css).

## Project structure

```
app/
  layout.tsx        Root layout, fonts, theme-flash prevention script
  page.tsx           Composes all page sections
  globals.css         Theme tokens (light/dark) and base styles
  icon.svg             Favicon
components/
  Nav.tsx              Sticky header + theme toggle
  ThemeToggle.tsx       Light/dark mode switch (persists to localStorage)
  Hero.tsx              Hero section
  PipelineVisual.tsx    Signature animated event-pipeline diagram
  About.tsx             About section
  Projects.tsx           Featured work / case studies
  Experience.tsx          Experience timeline, education, certifications
  Skills.tsx              Stack manifest
  Contact.tsx             Contact channels
  Footer.tsx                Footer
lib/
  data.ts               All content (single source of truth)
```
