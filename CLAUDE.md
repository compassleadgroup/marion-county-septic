# CLAUDE.md: Marion County Septic (Site #6)

Standing context for Claude Code. Read this every session before acting. This file is placed by the operator. Do not overwrite it.

- Brand: Marion County Septic
- Domain: marioncountyseptic.com
- Repo: marion-county-septic
- Market: Marion County, Florida (Ocala metro and the towns of Belleview, Dunnellon, Silver Springs, Citra, Ocklawaha, Reddick, Summerfield)
- Type: rank-and-rent lead generation, organic only, no Google Business Profile

---

## Start-of-session tripwire (halt conditions)

Confirm all three before doing anything. If any one does not match, STOP and ask the operator.

1. Niche is new septic system installation, drainfield replacement, aerobic and advanced/enhanced treatment systems, and real-estate septic inspections. NOT emergency pumping. If the work in front of you is about pumping or emergency service, STOP.
2. Design system is "Silver Springs" (spring teal #0F5257, soft sand #FBF8F3, warm ochre #C6892F, aqua #2A8C8C for advanced-treatment callouts only). If the styling looks like slate-and-blue, limestone-and-green, navy, or any other site's palette, STOP.
3. Repo is marion-county-septic. If it is tulsa-foundation, lake-ozark-boat-docks, oklahoma-storm-shelter, iowa-radon, or hill-country-barn-builders, STOP. You are in the wrong repo.

This is the 6th site in the portfolio. Do not import any other site's niche language, location data, or design tokens.

---

## Document hierarchy

- COMPLIANCE_STANDARDS.md is authoritative. If anything conflicts with it, it wins and you stop and flag the conflict.
- PROJECT_BRIEF.md holds the strategy, market, keywords, architecture, and monetization. Read it.
- The build spec holds the detailed page-by-page build instructions. Follow it.
- CLAUDE.md and PROJECT_BRIEF.md are placed by the operator. Read them, do not overwrite them. If missing, say so; do not invent them.

---

## Hard guardrails

Compliance and honest positioning:
- We are a matching and referral service, not a septic contractor. Say so plainly on every page.
- Allowed framing: "we connect you with licensed local septic contractors," "the contractor you are matched with."
- Header disclosure strip on every page. Footer disclaimer naming Compass Camper LLC, operating as Compass Lead Group, on every page (confirm wording against COMPLIANCE_STANDARDS.md).
- TCPA consent directly above the form submit, never pre-checked, blocks submit if unchecked.
- No claims of licensing, bonding, insurance, or certification about ourselves. Attribute all credentials to the independent contractors.
- No fake reviews, no fake team, no fabricated history, no tenure claims.

Schema (strict):
- Allowed only: Organization, Service, ProfessionalService, BreadcrumbList, FAQPage.
- Forbidden: LocalBusiness, Review, AggregateRating. Do not emit these even as placeholders.

Tech and deploy:
- iPad-only workflow. Never depend on a local build step. Cloudflare Pages builds in its cloud from the connected GitHub repo.
- Deployment is GitHub push to Cloudflare auto-build only. Never Wrangler. No Direct Upload that requires a local build.
- Astro standards: trailingSlash 'always', build format 'directory', self-referencing canonical on every page. HTTPS enforced at the Cloudflare dashboard.

Secrets:
- Web3Forms access key, GA4 measurement ID, and any token live in Cloudflare environment variables, never in chat, never hard-committed in plaintext where avoidable. Web3Forms key is domain-locked. If a secret appears in chat, treat it as compromised and tell the operator to rotate it.
- For any GitHub Actions, use CLAUDE_CODE_OAUTH_TOKEN, never ANTHROPIC_API_KEY.

---

## Forbidden language (anywhere: copy, alt text, comments, commits, meta tags)

em dashes, "family-owned," "since [year]," "decades of experience," any tenure or experience claim about ourselves, "vetted," "guaranteed," "our network," "we install," "our crews," any first-person contractor work claim.

---

## Niche-specific rules

- Build for the PLANNED side only: new installs, full drainfield replacement, aerobic and advanced treatment, new-construction systems, real-estate inspections. Do not build pages targeting emergency pumping or backup; that intent resolves in the map pack we are not using.
- Money pages target transactional "[service] [town]" and "[service] Marion County" queries. Cost and how-to content is informational link bait only, never the primary lead-capture page.
- The springs and BMAP advanced-treatment content plus the Marion County permit guide are the authority backbone. Build them first.
- Permitting authority for Florida onsite sewage systems has shifted between state agencies in recent years. Do NOT state a transfer date or administering authority from memory. Verify the current Marion County authority and process from an authoritative .gov source at build time, cite it, and flag it if you cannot verify it cleanly.
- Tight footprint. Roughly 26 indexable pages at launch. Every town page must carry unique local data (soils, water table, spring/BMAP zone) or it does not ship. No combinatorial service-times-town pages. /locations/ is a thin bare-links hub.

---

## Flag to the operator, never decide silently

- Current Marion County OSTDS permitting authority if not cleanly verifiable.
- Any town lacking genuinely unique local content (drop it rather than ship thin).
- Any soil, water-table, or spring/BMAP claim you cannot verify.
- Any conflict with COMPLIANCE_STANDARDS.md.
- Any place a secret would otherwise be committed in plaintext.
- Anything that would exceed the page cap or create near-duplicate pages.
