# imranahamed.com

Personal site — writing, projects, about. Astro 6 + Tailwind 4 + MDX.

## Quickstart

```sh
npm install        # already done
npm run dev        # http://localhost:4321
npm run build      # static site → ./dist
npm run preview    # serve ./dist locally
```

## Adding content

### A new essay

Create `src/content/writing/<slug>.mdx`:

```mdx
---
title: "Your title"
description: "One-line summary used on cards and meta tags."
pubDate: 2026-05-25
tags: ["agents", "eval"]
draft: false
---

Body, markdown + optional JSX components.
```

Set `draft: true` to hide from the site while you write.

### A new project

Create `src/content/projects/<slug>.md`:

```md
---
title: "Project name"
description: "One-liner."
pubDate: 2026-05-25
role: "What I did · Where"
stack: ["Python", "PyTorch"]
link: "https://optional-external-url"
repo: "https://optional-github-url"
featured: true
order: 1     # lower = higher on the projects page
---

Long-form description.
```

## Site config

- `src/consts.ts` — title, description, social links, nav
- `astro.config.mjs` — `site` URL (used by sitemap + RSS), integrations
- `src/styles/global.css` — typography, color tokens (light + dark via `prefers-color-scheme`)

## Newsletter form

The homepage has a placeholder newsletter form pointing to `#`. Wire it to:

- **Substack:** replace the `<form>` with their embed code, or POST to `https://<your-publication>.substack.com/api/v1/free`
- **Buttondown:** use their embed snippet
- **ConvertKit / Mailchimp:** same pattern

Search `TODO: wire form action` in `src/pages/index.astro`.

## Deploy

Push to GitHub, then connect to Vercel / Netlify / Cloudflare Pages — all auto-detect Astro and zero-config it. Static output, no server runtime needed.

## Roadmap (suggested)

- [ ] Register `imranahamed.com` and update `site` in `astro.config.mjs`
- [ ] Wire newsletter form
- [ ] Add OG image generation (Astro has community plugins for per-page OG)
- [ ] Replace placeholder essay with one of your own
- [ ] Add `/now` page (Sivers convention) once you want one
- [ ] Add `/talks` page once you have ≥2 talks
