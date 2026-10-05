# Carlos Juca — Portfolio

Personal portfolio of Carlos Juca, Fullstack Engineer. Live at **[chjuca.dev](https://chjuca.dev)**.

- Bilingual (Spanish / English): follows the browser language, remembers the visitor's choice, and accepts `?lang=es` or `?lang=en` for shareable links.
- Light and dark themes: follows the OS setting, with a toggle that is remembered across visits.
- Content mirrors the current CV, which can be downloaded from the site in either language.

## Stack

- [React 19](https://react.dev) + [Vite](https://vite.dev)
- Plain CSS with custom properties (no UI framework)
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

## Updating the content

All the text lives in [`src/data/content.js`](src/data/content.js), with one block per language (`es` and `en`): summary, highlights, experience, skills, education, projects and the UI labels. Wrap text in `**double asterisks**` to render it in bold.

To publish a new CV, replace the PDFs in [`public/cv/`](public/cv/) keeping the same file names, or update the `cv` path of each language in `content.js`.

The GitHub section shows a static list of pinned repositories (`repositories` in `content.js`), so no GitHub token is ever shipped to the browser.

## Project structure

```
public/
  cv/                 CV PDFs (ES / EN)
  _headers            Cloudflare Pages headers (security + caching)
  favicon.svg
  robots.txt, sitemap.xml
src/
  assets/             Optimized WebP images (logos and project screenshots)
  components/         One component per section, plus small shared pieces
  data/content.js     All site content, per language
  hooks/              Language, theme and active-section hooks
  App.jsx             Layout
  index.css           Design tokens, light/dark themes and styles
```

## Deployment

Hosted on [Cloudflare Pages](https://pages.cloudflare.com), connected to this repository: every push to `main` deploys to production and every other branch gets a preview URL.

| Setting                | Value           |
| ---------------------- | --------------- |
| Framework preset       | Vite            |
| Build command          | `npm run build` |
| Build output directory | `dist`          |
| Node.js version        | from `.nvmrc`   |

[`public/_headers`](public/_headers) adds security headers and long-lived caching for the hashed files in `/assets`. The custom domain `chjuca.dev` is managed in the same Cloudflare account, with `www.chjuca.dev` redirecting to it.
