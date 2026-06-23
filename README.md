# Marion County Septic

Organic lead-generation site for planned, permitted septic work in Marion
County, Florida (new system installation, drainfield replacement, and advanced
treatment systems). It is a free matching service that connects property owners
with licensed local septic contractors.

Operated by **Compass Camper LLC** (Oregon). This site is a marketing and lead
generation service, not a septic contractor, and does not perform septic work.

## Standing docs (read before changing anything)

- `COMPLIANCE_STANDARDS.md` is authoritative. If anything conflicts with it, it wins.
- `PROJECT_BRIEF.md` is the project reference.
- `docs/BUILD_SPEC.md` is the full page-by-page build brief.

## Stack

- [Astro](https://astro.build) (static output) with TypeScript.
- Tailwind CSS v4 via `@tailwindcss/vite`. Design tokens (the "Silver Springs"
  palette) live in `src/styles/global.css`.
- Self-hosted fonts (Manrope for headings, Inter for body) via Fontsource.
- `@astrojs/sitemap` for the sitemap.

## Deploy (Cloudflare Pages, GitHub auto-build)

Deployment is a GitHub push to the connected Cloudflare Pages project, which
runs the build in Cloudflare's cloud. No local build step is required, and
**Wrangler is never used**.

- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `22` (see `.nvmrc`)

HTTPS is enforced at the Cloudflare dashboard (Full Strict SSL plus Always Use
HTTPS). Do not add origin-level redirects.

## Environment variables (set in Cloudflare Pages, never committed)

See `.env.example`. Secrets live only in Cloudflare Pages environment variables.

| Variable | Purpose |
| --- | --- |
| `PUBLIC_WEB3FORMS_KEY` | Web3Forms access key, domain-locked to marioncountyseptic.com |
| `PUBLIC_GA4_ID` | GA4 measurement ID (e.g. `G-XXXXXXXXXX`); blank disables analytics |
| `PUBLIC_PHONE_DISPLAY` | Optional override for the displayed phone number |
| `PUBLIC_PHONE_TEL` | Optional override for the `tel:` phone number |

The contact phone number is a single configurable value (`src/data/site.ts` or
the env vars above) so the TextNow to CallRail swap later is one change.

## Local commands

```
npm install
npm run dev      # local preview
npm run build    # production build to dist/
npm run preview  # serve the production build
```
