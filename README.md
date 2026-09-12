# Aktiv Enerji

Corporate website for Aktiv Enerji — electrical infrastructure design, installation, laboratory testing and maintenance.

**Live site:** https://wualyrix.github.io/aktivenerji/

## Stack

- Next.js 15 (App Router) · static export for GitHub Pages
- TypeScript
- Brand: blue for structure, orange for accents/CTAs only

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Pushes to `main` build a static site and publish to GitHub Pages via Actions.

In the repo: **Settings → Pages → Source = GitHub Actions**.

## Pages

- `/` Home
- `/about`
- `/services` + `/services/[slug]`
- `/projects`
- `/certificates`
- `/contact`

Content: `src/data/site.ts` · Assets: `public/`
