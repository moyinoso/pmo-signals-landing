# PMO — Signals Landing Page

A short professional landing page for **Moyinoluwa Oso Ogooluwa (PMO)** —
Data · AI · Technology. Built to give recruiters, clients and collaborators
a complete picture of who PMO is and what he does in ~30 seconds, and to
route the curious to the full portfolio.

Concept: **DATA → QUESTIONS → SIGNALS → INSIGHTS → SOLUTIONS**

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS

## Getting started

```bash
npm install
npm run dev     # local dev at http://localhost:3000
npm run build   # production build
```

## Before you ship — edit `lib/site.ts`

1. `portfolioUrl` — paste the exact URL of your existing full portfolio.
   Every "VIEW EVIDENCE ↗" link and the "SEE EVERYTHING →" CTA point there.
2. `email` — your real contact email (the form opens the visitor's mail app).
3. `socials` — GitHub / LinkedIn / Medium URLs.

## Structure

```
app/
  layout.tsx          fonts + metadata
  page.tsx            section composition
  globals.css         grid field, reveal, carousel, reduced-motion
components/
  Nav.tsx             PMO · WORK · CONTACT · FULL PORTFOLIO
  Hero.tsx            SIGNAL / 001 headline + tagline
  SignalCanvas.tsx    slow drifting nodes + thin connection lines + brass pulses
  SelectedWork.tsx    SELECTED SIGNALS section
  ProjectCarousel.tsx drag / swipe / arrows / trackpad / keyboard horizontal gallery
  ProjectCard.tsx     signal number · title · question · tags · VIEW EVIDENCE
  Approach.tsx        01 OBSERVE · 02 CONNECT · 03 SOLVE
  Contact.tsx         name / email / message form (mailto)
  Footer.tsx          THE SIGNAL CONTINUES → full portfolio + socials
lib/
  site.ts             all content in one place
```

## Notes

- The horizontal gallery supports pointer drag (mouse + touch swipe),
  arrow buttons, arrow keys, and trackpad horizontal scrolling.
- All animation respects `prefers-reduced-motion` (static signal field,
  instant reveals).
- The contact form uses a `mailto:` handoff; to collect submissions without
  a mail app, wire the form to Formspree / a Route Handler later.
