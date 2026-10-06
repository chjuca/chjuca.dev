# Carlos Juca — Portfolio

Personal portfolio of Carlos Juca, Fullstack Engineer. Live at **[chjuca.dev](https://chjuca.dev)**.

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
src/
  assets/             Optimized WebP images (avatar, logos, project screenshots)
  components/         Shared UI pieces (cards, timeline, stack, navbar, footer...)
  data/content.js     All site content, per language
  hooks/              Language, theme, page metadata, reveal-on-scroll and spotlight hooks
  layouts/            Root layout shared by every page
  pages/              One component per route
  routes.js           Route table
  index.css           Design tokens, light/dark themes and styles
```

## Deployment

Hosted on [Cloudflare Workers](https://developers.cloudflare.com/workers/static-assets/) as a static-assets Worker, connected to this repository through Workers Builds: every push to `main` deploys to production.

| Setting        | Value                |
| -------------- | -------------------- |
| Build command  | `npm run build`      |
| Deploy command | `npx wrangler deploy` |
| Node.js        | from `.nvmrc`        |

[`wrangler.jsonc`](wrangler.jsonc) serves the `dist/` folder; its `name` must match the Worker name in the dashboard. [`public/_headers`](public/_headers) adds security headers and long-lived caching for the hashed files in `/assets`. The custom domain `chjuca.dev` lives in the same Cloudflare account, with `www.chjuca.dev` redirecting to it.
