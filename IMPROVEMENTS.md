# Improvements for Next Year

A collection of efficiency and maintainability improvements identified after the 2026 tournament build. The goal: change event details in one place and have them flow everywhere — web pages, print assets, and cards alike.

---

## 1. Centralize Event Metadata

**Problem:** The date, venue, city, and URL are hardcoded in 10+ files:
- `src/layouts/Layout.astro` (OG tags)
- `src/pages/index.astro` (hero section, countdown)
- `src/pages/faq.astro`, `updates.astro`
- `src/data/faq.ts`, `updates.ts`
- All five `print/*.html` files

**Fix:** Create `src/data/event-config.ts` as the single source of truth:

```ts
// src/data/event-config.ts
export const EVENT = {
  name: "Sam Lower Memorial Golf Tournament",
  year: 2027,
  date: "2027-05-XX",          // ISO date
  dateDisplay: "May XX, 2027",
  venue: "Bear Slide Golf Club",
  city: "Cicero, IN",
  url: "https://samlowermemorial.org",
  cause: "Multiple Myeloma research",
  packPrice: 100,
  packLimit: 1,                  // per team
  contestHoles: {
    closestToPin: [4, 16],
    straightestDrive: [8],
  },
  cheatCode: {
    par4Yards: 150,
    par5Yards: 200,
  },
  lifeline: {
    minInches: 6,
    maxInches: 24,
  },
};
```

Import this in all Astro pages/components. For standalone print HTML files, copy values at print time or generate them from Astro (see item 4).

---

## 2. Centralize Player / Team Data

**Problem:** `print/pairings.html` is 72 lines of hardcoded HTML with all 12 teams and player names duplicated from `src/data/registrants.ts`. Any roster change requires editing both files.

**Fix:** Convert `pairings.html` to an Astro page at `src/pages/print/pairings.astro`. Import directly from `registrants.ts` and render the same styled table. Print via browser just as before. Benefits:
- One roster edit propagates to both the web and the printed sheet.
- Can add last-minute player swaps without touching HTML.

---

## 3. Centralize Volunteer Data

**Problem:** `print/volunteers.html` is fully disconnected from any data source. Names, phone numbers, roles, and responsibilities are hardcoded and git-ignored (PII concern).

**Fix:** Create `src/data/volunteers.ts` (also git-ignored via `.gitignore`). Store structured data:

```ts
export const VOLUNTEERS = [
  {
    name: "Ben Lower",
    phone: "(206) 659-6465",
    badge: "Tournament Director",
    title: "Tournament Director",
    responsibilities: [ ... ],
  },
  ...
];
```

Convert `print/volunteers.html` to `src/pages/print/volunteers.astro`. Import the data; keep both the data file and the generated page gitignored. Same PII protection, zero duplication.

---

## 4. Generate Print Assets from Astro (Not Standalone HTML)

**Problem:** The five `print/*.html` files each re-implement the Inter font link, color palette, logo path, and `@media print` boilerplate independently. They can't import shared data.

**Fix:** Move all print assets to `src/pages/print/`:

| Current | New |
|---|---|
| `print/rules-card.html` | `src/pages/print/rules-card.astro` |
| `print/pairings.html` | `src/pages/print/pairings.astro` |
| `print/volunteers.html` | `src/pages/print/volunteers.astro` |
| `print/cards-sheet-mulligan.html` | `src/pages/print/cards-mulligan.astro` |
| `print/cards-sheet-cheat.html` | `src/pages/print/cards-cheat.astro` |

Each page uses a shared `PrintLayout.astro` that provides the Inter font, print-color-adjust, `@page` CSS, and logo path. Individual pages import event config and data as needed. All pages accessible at `/print/*` during dev and build.

---

## 5. Centralize Contest / Prize Details

**Problem:** Contest holes, prize descriptions, and power-up rules appear in at least five places:
- `src/data/updates.ts` (announcement text)
- `src/data/faq.ts` (FAQ answers)
- `src/components/tournament-format.astro`
- `print/rules-card.html`
- `print/volunteers.html`

**Fix:** Add contest data to `event-config.ts` (or a separate `src/data/contests.ts`):

```ts
export const CONTESTS = [
  { type: "individual", name: "Closest to Pin", holes: [4, 16], prize: "Bear Slide pro shop credit" },
  { type: "individual", name: "Straightest Drive", holes: [8], prize: "Bear Slide pro shop credit" },
  { type: "team", name: "Lowest Score", prize: "Personalized Titleist Pro V1s for each player on the winning team" },
];
```

Reference in FAQ answers, the tournament format component, and the print rules card — no copy-paste drift.

---

## 6. Centralize Power-Up Rules

**Problem:** Mulligan, Cheat Code Hole, and Lifeline rules appear verbatim in `rules-card.html`, the power-up card bodies, and `faq.ts`.

**Fix:** Add to `event-config.ts` or a `src/data/power-ups.ts`:

```ts
export const POWER_UPS = [
  {
    id: "mulligan",
    name: "Mulligan",
    badge: "4 cards · one per player",
    useLimit: "One Use Per Player",
    ruleShort: "Replay any shot — an errant drive, a chunked approach, or a putt that burned the edge.",
    ruleLong: "...",
  },
  ...
];
```

Card sheets and rules card both import the same text — update once, both assets stay consistent.

---

## 7. Extract Repeated Constants

**Problem:** `MAX_FOURSOMES` appears in 3 places, `REGISTRATION_OPEN` in 2, pack price in 4.

**Fix:** These belong in `event-config.ts`. A single `EVENT.maxTeams = 12` eliminates scattered magic numbers.

---

## 8. De-duplicate Card Sheet HTML

**Problem:** `cards-sheet-mulligan.html` and `cards-sheet-cheat.html` each repeat the same card block 8 times with no programmatic loop.

**Fix:** As Astro pages, a simple `Array.from({ length: 8 })` loop renders all 8 cards from a single card template. Card count becomes a one-line change for future tournaments.

---

## Summary Priority

| Priority | Item | Effort | Impact |
|---|---|---|---|
| High | Event metadata → `event-config.ts` | Low | All files |
| High | Pairings → Astro page from `registrants.ts` | Medium | Eliminates manual sync |
| High | Volunteers → `volunteers.ts` + Astro page | Medium | Eliminates manual sync |
| Medium | Print assets → `src/pages/print/` | Medium | Shared layout, data imports |
| Medium | Power-up rules → centralized data | Low | FAQ + print consistency |
| Medium | Contest/prize data → centralized | Low | Multiple files |
| Low | Card sheets → loop-based rendering | Low | Minor |
| Low | Extract remaining constants | Low | Robustness |
