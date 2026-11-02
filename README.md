# DataAPI · AutoEx™ — dataapi.live

Production homepage for DataAPI, Anbu Saravanan's deterministic web content recognition API. It's a faithful port of the approved design, built the same way as deployyardai.com: front end only, **no database, no backend, no environment variables required.** Nothing on the site links to DataAPI's existing app. Every "credits" button goes to `/signup`, a waitlist page on this site; the only outside links are the founder's LinkedIn and the LinkedIn, YouTube and Product Hunt profiles.

**The waitlist form doesn't deliver anything.** It checks the fields in the browser and shows "Thanks, … You're on the list." What people type is not sent or stored, so you never receive it, even though the thank-you tells them you'll write when their batch opens. Connect it to a real backend or form service before launch, or change that wording.

Everything lives in one Next.js 16 app in [`web/`](web/).

```
dataapi/
├── design/                      Approved design (project/Main.dc.html is the source of truth, preview.html opens in any browser)
└── web/                         Next.js 16 (App Router, React 19, TypeScript), deployed to Vercel
    ├── assets/                  Bricolage Grotesque Bold, used only to render the OG image
    └── src/
        ├── app/
        │   ├── page.tsx         homepage: assembles the sections, Organization JSON-LD
        │   ├── layout.tsx       fonts (next/font/google), metadata
        │   ├── globals.css      design tokens + shared classes
        │   ├── signup/          waitlist page (front end only)
        │   ├── privacy/ terms/  legal pages (shared layout: components/LegalDoc.tsx)
        │   ├── api/health/      GET { status: "ok" }
        │   ├── not-found.tsx    styled 404
        │   └── opengraph-image.tsx, twitter-image.tsx, icon.svg, apple-icon.tsx, sitemap.ts, robots.ts
        ├── assets/founder/      founder photo
        ├── components/          one component + CSS Module per section
        └── lib/
            ├── data.ts          all page copy and numbers
            ├── site.ts          site URL, founder name and LinkedIn, socials
            ├── waitlist/        waitlist form validation
            └── og.tsx           OG / Twitter / Apple icon rendering
```

## Sections and what runs in the browser

Sections are Server Components and ship no JavaScript, except the interactive pieces marked "client" below.

| Section | Component | Client JS |
|---|---|---|
| Nav | `Nav` | client: Menu button |
| Hero + live demo + key numbers | `Hero` (server), with `Machine` | client: demo |
| The problem | `Problem` (server), with `ScrollTrigger` | client: trigger only |
| Formats | `Formats` | client: format picker |
| Dual-tier routing | `Routing` | none |
| Cost calculator | `Calculator` | client: calculator |
| MCP & code | `Mcp` (server), with `CodeTabs` | client: tabs |
| Comparison | `Compare` | none |
| Founder | `Founder` | none |
| CTA | `Cta` | none |
| Footer | `Footer` | none |
| Waitlist (`/signup`) | page (server), with `WaitlistForm` | client: form (browser only) |

## Check with Anbu before going live

From the design's own README, still open:
- **Model prices** in the calculator (copied from his current site). They live in `MODELS` in `web/src/lib/data.ts`.
- **Benchmark figures**, in case newer ones exist.
- **The founder copy**: that he's happy with it.

The **founder photo** is in place (`web/src/assets/founder/anbu-saravanan.jpg`). It was supplied as a circle on a dark background, so it's cropped to that circle (640×640) and shown round. Swap in the original if you have it.

## Legal pages: review before launch

`/privacy` and `/terms` are drafts. They are linked from the last line of the footer (© 2026 DataAPI Technologies Inc. All rights reserved. • Privacy Policy • Terms of Service). Have a lawyer review them before launch. They state plainly that the waitlist form doesn't send or store anything, so change them if that changes.
- **Entity:** they name **DataAPI Technologies Inc.** (in `web/src/lib/legal.ts`) but no country, address or governing law, because none was given. Add them.
- **Contact:** the site has no contact email, so both pages tell people to message Anbu on LinkedIn. Replace that with a real, monitored mailbox when there is one.
- **Hosting:** they say Vercel hosts the site and keeps its request logs. Change that if it's deployed elsewhere.

## Local setup

Requirements: Node 20.9 or later.

```bash
cd web
npm install
npm run dev                     # http://localhost:3000
```

| Script | What it does |
|---|---|
| `npm run dev` | Dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint (`eslint-config-next`) |
| `npm run typecheck` | `next typegen` + `tsc --noEmit` |

## Deploy to Vercel

1. Push the repo to GitHub, GitLab or Bitbucket, then in Vercel choose **Add New → Project** and import it. Or, without a repo, run `npx vercel --prod` from `web/`.
2. Set **Root Directory** to `web`. The framework preset (Next.js) and the build command are detected automatically.
3. Deploy. No environment variables are needed. Preview deployments serve a `Disallow: /` robots.txt, so they stay out of search results.

## Connect the domain

The site goes live on **dataapi.live only**, not on any other domain.

1. In Vercel: Project → **Settings → Domains** → add `dataapi.live`, then `www.dataapi.live`, and choose to **redirect `www` to the apex**.
2. Add the DNS records Vercel shows at the registrar.
3. dataapi.live currently serves DataAPI's existing app. Pointing the domain here replaces it, so agree the switch with Anbu first.

## Fidelity notes (vs. the approved design, `design/project/Main.dc.html`)

Compared in Chrome at 1440, 1024 and 390px. Same CSS values, same sections, same copy and numbers.

Intentional differences:
- **Founder photo** replaces the `[Founder photo]` placeholder. The design's frame is 4:3, and a 4:3 crop of the supplied circular photo would cut off the top of his head, so the round portrait sits inside the design's striped 4:3 frame.
- **No links to the existing app:** Sign in, AffordEx™ and the footer's About, FAQ and Contact links are gone. Privacy Policy and Terms of Service are pages on this site. "Get 1,000 credits", "Start building free" and "Claim 1,000 free credits" open `/signup`. "Launch live console" is now "Try the live demo". The footer links to sections of this page.
- **Phone nav:** below 560px, Get 1,000 credits moves into the menu, so the logo and Menu stay on one row. In the design the buttons wrapped onto a second row of the sticky header. Below 1240px the open menu also takes its own row under the header, where the design pushed the buttons below it. Escape closes it, and the button reads "Close" while open.
- **Race bars:** in the design, the `go` class that starts the bar race is also the class of the Recognize button, so the race would collapse into an 84px green circle once it played. CSS Modules scope the two apart. Without JavaScript the bars show at full length.
- **Demo:** the token count counts up and the raw HTML wall highlights a few tags, as in `design/preview.html`. Output panels fade in on every switch.
- **Book cover** text is 9.5px (was 11px) so "Perspective" fits the 64px cover.
- **Comparison table** uses row headers, and the timeline, pipeline and founder facts use lists, for screen readers. They look the same.
- **External links** (LinkedIn, YouTube, Product Hunt, marked ↗) open in a new tab.
- **Anchors** land below the sticky nav.
- **Pages added:** the `/signup` waitlist, `/privacy`, `/terms` and a styled 404.
- **Footer's last line** is "© 2026 DataAPI Technologies Inc. All rights reserved. • Privacy Policy • Terms of Service", in the body font. On phones the copyright takes its own line.
