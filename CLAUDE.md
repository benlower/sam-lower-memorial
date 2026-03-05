# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server (localhost:4321)
pnpm build      # Build for production (outputs to dist/)
pnpm preview    # Preview production build
```

## Architecture

This is an **Astro 5** static site with **Tailwind CSS v4** (via `@tailwindcss/vite` plugin — not the legacy `@astrojs/tailwind` integration). The site is a memorial golf tournament page for samlowermemorial.org.

**Content data** lives in `src/data/` as TypeScript files:
- `faq.ts` — FAQ entries (array of `{ question, answer }`)
- `updates.ts` — News/announcements (add new entries at the **top** of the array; they display newest-first)

**Page structure:** `src/pages/index.astro` is the main single-page layout that assembles all section components. `faq.astro` and `updates.astro` are standalone sub-pages.

**Layout:** `src/layouts/Layout.astro` is the single shared HTML shell with OG meta tags, Inter font, and smooth scroll. All pages pass `title` and optional `description`/`image` props to it.

**Custom Tailwind color:** `memorial` (green-based, defined in `tailwind.config.mjs`) — use `memorial-500/600/700` for brand-consistent greens.

**No test framework** is configured.
