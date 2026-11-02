# DataAPI · AutoEx™ — website redesign

Redesign of **dataapi.live** for Anbu Saravanan (Founder & CTO, DataAPI), approved by him.
It goes live on **his own domain, dataapi.live**, not on any other domain.

## What's in this folder

```
project/
  canvas.json        canvas index (one artboard, opens focused)
  Main.dc.html       the full homepage as a Design Component artboard
preview.html         the same page as plain HTML: double-click to open in any browser
README.md            this file
```

`Main.dc.html` is the source of truth for the design. `preview.html` is there so you
(or Anbu) can look at it without any tooling.

## Look

- Light warm-grey ground `#F6F5F0`, ink `#0D0E0C`, one signal green `#00A86B`
  (the `accent` tweak), hot orange `#FF5B2E` only for the crossed-out "Raw DOM."
- Fonts (Google Fonts): **Bricolage Grotesque** (headlines), **Onest** (body),
  **Martian Mono** (labels, code).
- Headline idea: ~~Raw DOM.~~ **Pure signal.**

## Sections, top to bottom

1. **Navbar**: Engine · Formats · Pricing · MCP & Docs · Compare · Founder · AffordEx™ (New),
   Sign in, Get 1,000 credits. Folds into a Menu button under 1240px.
2. **Hero + live demo**: raw HTML wall (28,000 tokens) → green Recognize button → AutoEx output
   (680 tokens). Samples: Leadership / Table / Article. Formats: TOON_COMPACT / JSON / Markdown.
   Auto-runs once after ~1.6s.
3. **Key numbers**: 97.6% token reduction · 18 ms · 13 gateways (7 GET + 6 POST) · 0 selectors.
4. **The problem**: animated bars for the same 100-row table: Raw 28,000 → JSON 4,200 →
   TOON 1,150 → TOON_COMPACT 680 tokens.
5. **Formats**: Clean Markdown / Deterministic JSON / TOON Compact / POST Plain HTML, each with
   endpoint, sample output and what you get.
6. **Dual-tier routing**: URL → ingress (2 ms) → Tier 1 fast socket (92%, 18 ms) or
   Tier 2 Chromium (8%, ~320 ms) → AST parser → clean payload.
7. **Cost calculator**: 4 models × 4 daily volumes.
   Formula: `requests/day × 30 × tokens/page × price / 1,000,000`, with 28,000 tokens (raw)
   vs 680 (TOON_COMPACT). Example: 2,500/day on Claude Sonnet 5 = $4,200 vs $102 / month.
8. **MCP & code**: 7 tool names, frameworks, tabs for MCP config / cURL / Python.
9. **Comparison table**: DataAPI vs probabilistic AI scrapers vs CSS/XPath.
10. **Founder**: Anbu Saravanan. Profile card (Navi Mumbai, building DataAPI since Sep 2025,
    ex-Director Course5i, Valliammai Engineering College, author of
    *Artificial Intelligence: A Cook's Perspective*), 4 career numbers (13M sites at 85%,
    300+ person-years saved a year, 700+ websites, 200+ trained), his quote, career timeline
    2014 → now.
11. **CTA**: 1,000 free credits, no card.
12. **Footer**: Product · Developers · Company · Follow, Privacy / Terms.

## Where the content comes from

Every product fact and number is taken from DataAPI's current site (dataapi.live) and
Anbu's own LinkedIn posts and profile. Nothing is invented.

**Check with Anbu before going live:**
- Model prices in the calculator (copied from his current site).
- Benchmark figures, in case newer ones exist.
- His founder photo (placeholder now) and that he's happy with the founder copy.

## Links

All buttons point at his existing app routes on dataapi.live:
`/signup`, `/login`, `/dashboard`, `/pricing`, `/docs`, `/services`, `/affordex`,
`/about`, `/faq`, `/contact`, `/privacy`, `/terms`.

## Building it for production

Give Claude Code this folder and ask for:

- **Next.js 16** (App Router, TypeScript) in `/web`, deployed on **Vercel**.
- Rebuild `Main.dc.html` 1:1: same CSS, same sections, same copy. Interactive parts
  (demo, format tabs, calculator, code tabs, menu) become small client components; everything
  else stays server-rendered.
- Fonts with `next/font/google`. All copy and numbers in one `lib/data.ts`.
- No backend needed for this page: sign-up, console and docs are his existing app.
- Point **dataapi.live** at the Vercel project (or deploy into his existing setup, whichever
  he prefers). Do not publish it on any other domain.
