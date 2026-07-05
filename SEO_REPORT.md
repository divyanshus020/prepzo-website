# Prepzo — SEO Overhaul Report

**Date:** 2026-07-05
**Site:** https://prepzo.space

---

## 0. Framework reality check (important)

The brief assumed **Next.js**. This project is a **Vite + React 19 SPA** using
`react-router-dom` (client-side routing). So Next-specific asks — the Metadata
API, `next/image`, `sitemap.ts`, App Router `export const metadata`, `next-sitemap`
— **do not apply**. Every one of those goals was met with a **framework-appropriate
equivalent** instead. Where a Next feature has no SPA analogue, it's called out in
§ Remaining Recommendations (mainly: static prerendering).

---

## 1. Issues found

| # | Issue | Severity |
|---|-------|----------|
| 1 | SPA served **one** set of `<title>`/meta/canonical for **all** routes | Critical |
| 2 | No per-route Open Graph / Twitter / canonical | High |
| 3 | No structured data (Organization, WebSite, SoftwareApplication, FAQ, Breadcrumb) | High |
| 4 | `/schools` had **no `<h1>`** (hero title was animated `<div>`s) | High |
| 5 | Sitemap missing `/schools` and `/universities`; stale `lastmod` | Medium |
| 6 | No `<main>` landmark, no skip-link (accessibility) | Medium |
| 7 | No route scroll-reset (deep links kept prior scroll position) | Medium |
| 8 | No web app manifest, no `theme-color` | Medium |
| 9 | Homepage title/desc under-optimised for target keywords | Medium |
| 10 | No `preconnect`/`dns-prefetch` for fonts + video CDN (LCP) | Low |
| 11 | robots.txt didn't explicitly welcome AI crawlers (AEO) | Low |

---

## 2. Fixes applied (code-level)

### Per-route metadata — `src/components/Seo.jsx` (new)
Dependency-free `<head>` manager. On each route it sets: `title`, `description`,
`robots` (`max-image-preview:large`, `max-snippet:-1`, …), `keywords`, **canonical**,
full **Open Graph**, full **Twitter** large-card, and **page-scoped JSON-LD**
(tagged `data-seo="page"` and removed on unmount so routes don't leak each other's
structured data). Exposes a `breadcrumbLd()` helper.

Every one of the 7 routes now emits **unique** title + description + canonical + OG/Twitter.

### Structured data (JSON-LD)
- **Static in `index.html`** (present on every crawl, no JS needed):
  `Organization` (name, alternateName "Prepzo AI", logo, url, email, founder, foundingLocation, sameAs),
  `WebSite` (+ `SearchAction`), `SoftwareApplication` (EducationalApplication, offer, creator).
- **Per page** via `<Seo jsonLd=…>`: `BreadcrumbList` on about/schools/universities/contact/privacy/terms,
  `FAQPage` on the homepage.

### FAQ — `src/data/faq.js` + `src/components/FAQ.jsx` (new)
Single source of truth feeds **both** a visible, accessible `<details>` FAQ section
(homepage) **and** the `FAQPage` JSON-LD — so structured data always matches on-page
content (Google requirement) and answers are ready for AI Overviews / Perplexity / etc.

### Headings
- `/schools` now has a real (sr-only) `<h1>`; hero animation untouched.
- Verified one `<h1>` per route (Home→Hero, Universities, About, Contact, Privacy, Terms, Schools). No skipped levels.

### Semantic HTML & accessibility — `src/App.jsx`
- Wrapped routes in `<main id="main">` landmark.
- Added a keyboard "Skip to content" link (`sr-only` → visible on focus).
- Added `<ScrollToTop>` so every route change resets scroll (better UX + no CLS surprise on deep links).
- `<nav>` (Navbar) and `<footer>` (Footer) already semantic; logo `<img>`s already have `alt="Prepzo"`.

### Homepage & global head — `index.html`
- Optimised `<title>`: **Prepzo | AI Learning & Human Capital Intelligence Platform**.
- Meta description rewritten to ~155 chars with target entities.
- Keyword set expanded (Prepzo AI, AI learning platform, human capital intelligence platform, employability/career/student intelligence, AI for schools/colleges, AI teacher assistant).
- Added `theme-color`, `manifest`, `og:site_name`, `og:locale=en_IN`, `og:image:width/height/alt`, `twitter:image:alt`.
- Added `preconnect` (Google Fonts, gstatic, onlinewebfonts) + `dns-prefetch` (video CDN).

### Crawl infra
- **`public/site.webmanifest`** (new) — installable PWA metadata, brand colours, icons.
- **`public/sitemap.xml`** — added `/schools`, `/universities`; refreshed `lastmod`, added `changefreq`/`priority`.
- **`public/robots.txt`** — kept `Allow: /` + sitemap; explicitly welcomes `GPTBot`, `OAI-SearchBot`, `PerplexityBot`, `Google-Extended`, `ClaudeBot` (AEO).

---

## 3. Files changed / created

**New (6):**
- `src/components/Seo.jsx`
- `src/components/FAQ.jsx`
- `src/data/faq.js`
- `public/site.webmanifest`
- `SEO_REPORT.md`
- (regenerated) `public/sitemap.xml`, `public/robots.txt`

**Modified (9):**
- `index.html` — meta overhaul + 3 static JSON-LD blocks + perf hints
- `src/App.jsx` — `<main>`, skip-link, ScrollToTop
- `src/pages/Home.jsx` — `<Seo>` + FAQPage JSON-LD + FAQ section
- `src/pages/About.jsx` — `<Seo>` + BreadcrumbList
- `src/pages/Schools.jsx` — `<Seo>` + BreadcrumbList + sr-only `<h1>`
- `src/pages/Universities.jsx` — `<Seo>` + BreadcrumbList
- `src/pages/ContactPage.jsx` — `<Seo>` + BreadcrumbList
- `src/pages/Privacy.jsx` — `<Seo>` + BreadcrumbList
- `src/pages/Terms.jsx` — `<Seo>` + BreadcrumbList

---

## 4. Metadata summary (per route)

| Route | Title | Canonical |
|-------|-------|-----------|
| `/` | Prepzo \| AI Learning & Human Capital Intelligence Platform | /|
| `/schools` | Prepzo for Schools \| AI Counsellor for Students & Teachers | /schools |
| `/universities` | Prepzo for Universities \| Placement & Employability Intelligence | /universities |
| `/about` | About Prepzo \| The AI Brain-Mapping Platform for Education | /about |
| `/contact` | Contact Prepzo \| Book a Demo of our Education AI Platform | /contact |
| `/privacy` | Privacy Policy \| Prepzo | /privacy |
| `/terms` | Terms of Service \| Prepzo | /terms |

All have unique description + OG + Twitter tags. No duplicates.

---

## 5. Structured data summary

| Schema | Where | Purpose |
|--------|-------|---------|
| Organization | index.html (global) | Brand entity, knowledge panel, `sameAs` |
| WebSite + SearchAction | index.html (global) | Site entity |
| SoftwareApplication | index.html (global) | Describes the Prepzo product |
| FAQPage | Home (`data/faq.js`) | AI Overviews / rich results / AEO |
| BreadcrumbList | 6 subpages | Breadcrumb trails in SERP |

---

## 6. Keyword map

| Primary keyword | Intent | Target page | Priority | Difficulty |
|---|---|---|---|---|
| Prepzo | Branded/nav | `/` | P0 | Low |
| Prepzo AI | Branded | `/` | P0 | Low |
| Prepzo Education AI | Branded | `/` | P0 | Low |
| AI learning platform | Commercial | `/` | P1 | High |
| Human capital intelligence platform | Commercial | `/` | P1 | Med |
| AI for schools | Commercial | `/schools` | P1 | High |
| AI counsellor for students | Commercial | `/schools` | P2 | Med |
| AI teacher assistant | Commercial | `/schools` | P2 | High |
| AI for colleges / universities | Commercial | `/universities` | P1 | High |
| Placement / employability intelligence | Commercial | `/universities` | P2 | Med |
| TPO cell software | Transactional | `/universities` | P2 | Low |
| Cognitive / student intelligence | Informational | `/about` | P3 | Med |

Secondary/long-tail (blog opportunities — see §9): "how to check student placement readiness",
"AI mock interview for campus placements", "brain mapping for students", "employability gap India".

---

## 7. Competitor / gap notes

- **prepzo.ai** — name-collision risk on the bare "Prepzo" query. Mitigation: strong
  `Organization` + `alternateName` "Prepzo AI", branded titles, consistent `sameAs`,
  and Search Console ownership of `prepzo.space`. Encourage brand mentions/backlinks.
- **Google Classroom / Canvas / Moodle / Blackboard** — LMS incumbents; do **not**
  compete on "LMS". Prepzo's wedge is *human capital / employability intelligence*, an
  uncontested phrase — lean into it (already in titles/copy).
- **Khan Academy / Coursera / Microsoft Education** — content/course intent, different SERP.
- **Gap opportunity:** "employability intelligence", "human capital intelligence platform",
  "cognitive brain mapping for students", "AI counsellor for placements (India)" are low-competition
  and now targeted.

---

## 8. Core Web Vitals — estimate & levers

| Metric | Target | Status / lever |
|--------|--------|----------------|
| LCP | < 2.5s | `preconnect`/`dns-prefetch` added. **Watch:** autoplay hero videos (Schools/Universities) + the About `three.js` 3D canvas are heavy — see recs. |
| CLS | < 0.1 | Route scroll-reset added; images sized. Keep explicit dimensions on any new media. |
| INP | < 200ms | FAQ uses zero-JS `<details>`. **Watch:** r3f canvas raises main-thread cost on `/about`. |

---

## 9. Remaining recommendations (code)

1. **Static prerendering / SSG** — the single biggest remaining win. A CSR SPA relies on
   Google *rendering* JS to see the `<Seo>` meta and per-page JSON-LD; Bing and some AI
   crawlers are weaker at this. Add `vite-react-ssg` or a prerender step (`react-snap`)
   to emit static HTML per route with meta baked in. *Requires a dependency + build wiring.*
2. **Bundle weight** — main chunk > 500 kB (three.js dominates). `React.lazy` the About
   page (and its 3D scene) so three.js loads only on `/about`. Improves LCP/INP site-wide.
3. **Hero videos** — add `poster` images and `preload="none"`; consider lazy-mounting the
   `/schools` + `/universities` background videos. Currently the largest LCP risk.
4. **Blog** — no `/blog` yet. Add one for the long-tail keywords in §6 with `Article`/
   `BlogPosting` JSON-LD (the `Seo` component already accepts arbitrary `jsonLd`).
5. **Image formats** — serve `og_image` and photos as WebP/AVIF; confirm `og_image.png`
   is actually 1200×630 (the meta now declares those dimensions).
6. **`sitemap` automation** — currently static XML. If routes churn, generate it from the
   route list at build time (small Node script in `package.json` `prebuild`).

---

## 10. Manual steps (external — cannot be automated here)

1. **Google Search Console** — verify `prepzo.space` (the `google-site-verification`
   token is already in `index.html`), submit `sitemap.xml`, request indexing of all 7 URLs.
2. **Bing Webmaster Tools** — add site, import from GSC, submit sitemap.
3. **www vs non-www / HTTPS** — enforce a single canonical host at the DNS/CDN/host level
   (301 `www.prepzo.space` → `prepzo.space`, and HTTP→HTTPS). Canonicals already point to
   the non-www HTTPS origin.
4. **Security/perf headers** (host or Cloudflare, since the app uses `@cloudflare/vite-plugin`):
   `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`,
   long-cache immutable assets, Brotli/gzip. Set these in the Cloudflare/Pages config.
5. **Social profiles** — add real LinkedIn/Instagram/X/YouTube URLs to the `Organization`
   `sameAs` array in `index.html` as they go live (only LinkedIn present now).
6. **Rich Results Test / Schema validator** — run every URL through
   search.google.com/test/rich-results after deploy.
7. **Verify OG image dimensions** — if `og_image.png` isn't 1200×630, regenerate it.

---

## 11. Completed-task checklist

- [x] Full audit (SPA-adjusted)
- [x] Homepage metadata rewritten (title/desc/keywords/OG/Twitter)
- [x] Per-route metadata mechanism (`Seo.jsx`) on all 7 routes
- [x] Canonicals per route (non-www HTTPS)
- [x] Robots directives (`max-image-preview:large`, etc.)
- [x] Organization / WebSite+SearchAction / SoftwareApplication JSON-LD
- [x] FAQPage JSON-LD + **visible** accessible FAQ
- [x] BreadcrumbList on subpages
- [x] Sitemap (all routes, refreshed)
- [x] robots.txt (+ AI crawler allowances)
- [x] Web app manifest + theme-color
- [x] One H1 per page (fixed `/schools`)
- [x] Semantic `<main>` + skip link + landmarks
- [x] Route scroll-reset
- [x] Perf hints (preconnect/dns-prefetch)
- [x] AEO: entity-based copy, concise FAQ answers, AI crawler access
- [x] Build passes (`vite build`)
- [ ] Static prerendering (recommended — needs dep, see §9.1)
- [ ] Blog + Article schema (recommended, §9.4)
- [ ] External verifications (GSC/Bing/headers, §10)
```
