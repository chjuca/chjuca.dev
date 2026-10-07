# Carlos Juca — Portfolio

Personal portfolio of Carlos Juca, Fullstack Engineer. Live at **[chjuca.dev](https://chjuca.dev)**.

[![CI/CD](https://github.com/chjuca/chjuca.dev/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/chjuca/chjuca.dev/actions/workflows/ci-cd.yml) · Live pipeline: **[chjuca.dev/pipeline](https://chjuca.dev/pipeline)**

- Bilingual (Spanish / English): follows the browser language, remembers the visitor's choice, and accepts `?lang=es` or `?lang=en` for shareable links.
- Dark theme by default, with a light theme toggle that is remembered across visits.
- Contact form with a live code preview; sending opens the visitor's email app (no backend or API keys).
- Content mirrors the current CV, which can be downloaded from the site in either language.

## Stack

- [React 19](https://react.dev) + [Vite](https://vite.dev)
- Plain CSS with custom properties (no UI framework)
- Self-hosted fonts via [Fontsource](https://fontsource.org): Poppins and JetBrains Mono
- [react-icons](https://react-icons.github.io/react-icons/) (tree-shaken, only the icons used are bundled)
- [Vitest](https://vitest.dev) + Testing Library, ESLint

## Getting started

Requires Node.js 20.19+ (or 22.12+).

```bash
npm install
npm run dev       # http://localhost:5173
```

| Script            | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start the dev server with hot reload         |
| `npm run build`   | Production build into `dist/`                |
| `npm run preview` | Serve the production build locally           |
| `npm test`        | Run the test suite once                      |
| `npm run lint`    | Lint the project                             |

## Pages

| Path | Page |
| --- | --- |
| `/` | Home: hero, impact numbers, current role, stack, projects and a call to action |
| `/experience` | Timeline of every job |
| `/experience/:slug` | Job detail: impact, tasks and tech stack (`mapvx`, `exmerdev`, `liid`) |
| `/projects` | All projects |
| `/projects/:slug` | Project detail with screenshot and project facts |
| `/pipeline` | Live view of this repository's CI/CD pipeline |
| `/about` | Profile, tech stack, education, languages and CV downloads |
| `/contact` | Contact form with a live code preview |

Routing uses [React Router](https://reactrouter.com) with view transitions between pages; the Worker serves `index.html` for every path (`not_found_handling` in `wrangler.jsonc`), and unknown paths render the in-app 404 page.

## Updating the content

All the text lives in [`src/data/content.js`](src/data/content.js), with one block per language (`es` and `en`): UI labels, per-page texts, jobs, projects, skills, education and languages. Jobs and projects are looked up by `slug`, which is also their URL. Technology logos and brand colors are mapped in [`src/components/TechBadge.jsx`](src/components/TechBadge.jsx). Wrap text in `**double asterisks**` to render it in bold.

When adding a job or project, also add its URL to [`public/sitemap.xml`](public/sitemap.xml).

To publish a new CV, replace the PDFs in [`public/cv/`](public/cv/) keeping the same file names, or update the `cv` path of each language in `content.js`.

## Project structure

```
public/
  cv/                 CV PDFs (ES / EN)
  _headers            Response headers (security + caching)
  favicon.svg
  robots.txt, sitemap.xml
scripts/              Pipeline scripts: bundle budget, metrics, smoke test
worker/               Cloudflare Worker: /api/pipeline
src/
  assets/             Optimized WebP images (avatar, logos, project screenshots)
  components/         Shared UI pieces (cards, timeline, stack, navbar, footer...)
  data/content.js     All site content, per language
  hooks/              Language, theme, page metadata, reveal-on-scroll and spotlight hooks
  layouts/            Root layout shared by every page
  pages/              One component per route
  lib/                Pipeline data helpers
  routes.js           Route table
  index.css           Design tokens, light/dark themes and styles
```

## CI/CD

Every push to `main` runs [`.github/workflows/ci-cd.yml`](.github/workflows/ci-cd.yml) on GitHub Actions (free for public repositories):

| Step | What it does | Fails the pipeline when |
| --- | --- | --- |
| Lint | ESLint, including React Hooks rules | any error |
| Test | Vitest + Testing Library, with coverage | a test fails |
| Build | Vite production build | the build breaks |
| Bundle budget | [`scripts/check-budget.mjs`](scripts/check-budget.mjs) | JS > 170 KB or CSS > 12 KB gzipped |
| Lighthouse | Lighthouse CI, median of 3 mobile runs ([`lighthouserc.json`](lighthouserc.json)) | performance < 80, accessibility < 95, best practices or SEO < 90 |
| Collect metrics | [`scripts/write-metrics.mjs`](scripts/write-metrics.mjs) writes `metrics.json` and `metrics-history.json` into the build | — |
| Deploy | `wrangler deploy` to Cloudflare Workers (`main` only) | the deploy fails |
| Smoke test | [`scripts/smoke-test.mjs`](scripts/smoke-test.mjs) waits for the new build in production and checks pages, CVs and the API | any check fails |

Pull requests run everything except Deploy and Smoke test.

The metrics travel with the site itself, so there is no database: each run reads the previous `metrics-history.json` from production and appends to it.

### Live pipeline page

[`worker/`](worker/) adds one route to the Worker, `GET /api/pipeline`, which reads the latest runs and the steps of the most recent one from the GitHub Actions API and caches them at the edge (10 s while a run is in progress, 60 s otherwise). [`/pipeline`](https://chjuca.dev/pipeline) polls it and draws the stages, the current metrics and the deploy history. Step names in the workflow are mapped to stages in [`src/lib/pipeline.js`](src/lib/pipeline.js); keep them in sync.

In development, Vite proxies `/api` and the metrics files to production (see `vite.config.js`).

### Configuration

| Where | Name | Purpose |
| --- | --- | --- |
| GitHub repository secret | `CLOUDFLARE_API_TOKEN` | Token from the "Edit Cloudflare Workers" template, used by `wrangler deploy` |
| GitHub repository secret | `CLOUDFLARE_ACCOUNT_ID` | Cloudflare account that owns the Worker |
| Cloudflare Worker secret | `GITHUB_TOKEN` (optional) | Read-only fine-grained token so `/api/pipeline` isn't limited to GitHub's unauthenticated rate limit |

Everything runs on free tiers: GitHub Actions for public repositories and the Cloudflare Workers free plan.

## Deployment

Hosted on [Cloudflare Workers](https://developers.cloudflare.com/workers/static-assets/): [`wrangler.jsonc`](wrangler.jsonc) serves `dist/` as static assets and routes only `/api/*` to [`worker/index.js`](worker/index.js), so pages never wait on the Worker script. Deploys happen from the CI/CD pipeline above. [`public/_headers`](public/_headers) adds security headers and long-lived caching for the hashed files in `/assets`. The custom domain `chjuca.dev` lives in the same Cloudflare account, with `www.chjuca.dev` serving the same site.
