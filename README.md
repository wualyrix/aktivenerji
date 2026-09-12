# Aktiv Enerji

Corporate website for Aktiv Enerji — electrical infrastructure design, installation, laboratory testing and maintenance.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Brand system: blue for structure, orange for accents/CTAs only

## Develop

If Node.js is installed globally:

```bash
npm install
npm run dev
```

Or with the portable Node already under `.tools/node`:

```bash
.\.tools\node\node.exe .\node_modules\next\dist\bin\next dev -p 3001
```

Open [http://localhost:3001](http://localhost:3001).

## Pages

- `/` Home
- `/about`
- `/services` + `/services/[slug]`
- `/projects`
- `/certificates`
- `/contact`

Content: `src/data/site.ts` · Assets: `public/`
