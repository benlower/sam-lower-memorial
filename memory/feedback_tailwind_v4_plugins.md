---
name: Tailwind v4 plugin registration
description: In this project, Tailwind plugins must be registered in global.css with @plugin, not in tailwind.config.mjs
type: feedback
---

In Tailwind v4, plugins defined in `tailwind.config.mjs` under `plugins: []` are silently ignored. They must be registered in the CSS entry point instead.

**Why:** This project uses Tailwind v4 (`@tailwindcss/vite`), which changed how plugins are loaded. We hit this when `@tailwindcss/typography` was added to the config but `prose` classes had no effect.

**How to apply:** Always add new Tailwind plugins to `src/styles/global.css` using `@plugin "package-name";`, not to `tailwind.config.mjs`.
