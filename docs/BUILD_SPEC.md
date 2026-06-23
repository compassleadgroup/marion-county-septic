# Claude Code Build Spec: Ocala Septic Pros (Site #6)

Rank-and-rent lead-gen site. Marion County, Florida. New septic system installation and drainfield replacement. Planned, permitted, high-ticket, research-driven work only. This document is the master build brief. Read it fully before writing any code. If anything here conflicts with COMPLIANCE_STANDARDS.md in the repo, COMPLIANCE_STANDARDS.md wins and you stop and flag the conflict.

---

## 0. Start-of-build tripwire (run this check first, every session)

Before doing anything, confirm all three match this project. If any one does not match, STOP and ask me. Do not proceed on a mismatch.

- Niche: new septic system installation, drainfield (leach field) replacement, aerobic and advanced/enhanced treatment systems, real-estate septic inspections. NOT emergency septic pumping.
- Design system: "Silver Springs" (defined in Section 6). Spring teal, soft sand, warm ochre accent. If the repo styling looks like slate-and-blue, limestone-and-green, navy, or any other site's palette, STOP.
- Repo name: ocala-septic-pros (or the repo I have open). If the repo is tulsa-foundation, lake-ozark-boat-docks, oklahoma-storm-shelter, iowa-radon, or hill-country-barn-builders, STOP. You are in the wrong repo.

This is the 6th site in the portfolio. The others are foundation repair (Tulsa), boat docks (Lake of the Ozarks), storm shelters (Oklahoma), radon mitigation (Iowa), and barndominiums (Texas Hill Country). Do not copy their niche language, their location data, or their design tokens into this site.

---

## 1. Mission and what makes this site different

Build a programmatic, organic-only lead generation site that matches Marion County property owners with licensed local septic contractors for new system installation and full drainfield replacement. The site earns leads through classic organic search (positions 1 to 10), captures them through a compliant quote form, and routes them to a paying contractor tenant.

This is the sixth site in the portfolio. It applies every lesson from the prior five and one niche-specific strategic decision that defines the whole build:

1. We target the PLANNED side of septic, not the emergency side. New installs and full drainfield replacements are permitted, designed, multi-week, five-figure purchases. Buyers research, compare, and submit forms. That is exactly what an organic-only, no-GBP site can win. Emergency pumping and backup searches resolve in the map pack we are not using, so we do not build for them and we do not try to rank for them.
2. The springs and Basin Management Action Plan (BMAP) advanced-treatment angle is the authority backbone. Much of Marion County sits in spring-protection and aquifer-recharge zones where enhanced nutrient-reducing (ENR) or advanced treatment systems are required or encouraged. This regulatory and environmental content is genuinely useful, hard to fake, uncontested by local competitors, and it doubles as our Trust signal, our link bait, and our topical-authority moat. It gets built first.
3. Tight footprint, every page uniquely data-rich. We do not mass-produce near-identical town pages. Google's scaled-content-abuse policy specifically targets "a service page for every city" with only the name swapped. Each town and area page carries unique local data (soils, water table, spring/BMAP zone status, permit specifics) or it does not ship.
4. We win transactional "[service] [town]" and county permitting queries and ignore generic cost and "near me" queries. Directories (Angi, Thumbtack, Networx) and the map pack own those. Cost and how-to content exists only as informational link bait, never as our primary lead-capture pages.
5. Stronger Trust and E-E-A-T with zero fake signals. Honest lead-gen positioning, a real named brand author, authoritative outbound citations to Florida and Marion County wastewater sources, full disclosure. No fake reviews, no fake team, no fabricated history, no tenure claims.

Why Ocala: Marion County is one of the fastest-growing metros in the country, much of its growth is rural and exurban property that is on septic rather than sewer, and the local SERP is occupied by beatable thin local sites with no dominant national franchise in the organic results. The structural growth tailwind plus the planned-purchase intent plus the springs content moat is the thesis.

---

## 2. Non-negotiable guardrails (read twice)

### Compliance and honest positioning
- We are a lead-gen and referral service, not a septic contractor. Every page must make this plain.
- Allowed framing: "we connect you with licensed local septic contractors," "the contractor you are matched with," "licensed local septic installers."
- Forbidden language anywhere, including copy, alt text, comments, commit messages, and meta tags: em dashes, "family-owned," "since [year]," "decades of experience," any tenure or experience claim about ourselves, "vetted," "guaranteed," "our network," "we install," "our crews," or any first-person contractor work claim.
- Header disclosure strip on every page: a slim banner stating we are a free matching service that connects property owners with independent licensed septic contractors and is not itself a contractor.
- Footer disclaimer on every page naming the operating entity (Compass Camper LLC, operating as Compass Lead Group). Confirm exact wording against COMPLIANCE_STANDARDS.md.
- TCPA consent block directly above the form submit button. Never pre-checked. Plain-language consent to be contacted by the matched contractor, including by phone or text.
- No claims of licensing, bonding, insurance, or certification about ourselves. Any credential language is attributed to the independent contractors ("licensed local septic contractors").

### Schema (strict)
- Allowed only: Organization, Service, ProfessionalService, BreadcrumbList, FAQPage.
- Forbidden: LocalBusiness, Review, AggregateRating. We have no premises and no reviews to claim. Do not emit these even as placeholders.

### Tech and secrets
- iPad-only workflow. The build must never depend on a local machine build step. Use the Cloudflare Pages GitHub-connected auto-build so the build runs in Cloudflare's cloud.
- Never use Wrangler. It created duplicate Pages projects in the past. Deployment is GitHub push to Cloudflare auto-build only. No Direct Upload that requires a local build.
- Secrets (Web3Forms access key, GA4 measurement ID, any token) never go in chat and never get hard-committed in plaintext where avoidable. Use Cloudflare Pages environment variables. The Web3Forms access key is domain-locked to this site's domain. If a secret ever appears in chat, treat it as compromised and tell me to rotate it.
- For any GitHub Actions, use CLAUDE_CODE_OAUTH_TOKEN, never ANTHROPIC_API_KEY.

### Standing docs
- CLAUDE.md and PROJECT_BRIEF.md are placed in the repo by me. Read them. Do not overwrite them. If they are missing, tell me; do not invent them.

---

## 3. Strategic thesis (the SEO logic this build encodes)

We are deliberately giving up the Google Map 3-pack because we are not using a Google Business Profile. The 3-pack takes roughly 44 percent of local-search clicks; organic takes roughly 29 percent. That trade only works when the buyer researches before contacting, which is exactly how a new five-figure septic system or full drainfield replacement gets bought: a permit is required, soil and site evaluation is involved, design and sizing matter, and the homeowner compares contractors over weeks.

Therefore the entire site is engineered for the planned, research phase:
- Money pages target transactional "[service] [town]" and "[service] Marion County" queries that stay comparatively clean of map pack, ads, and AI Overviews.
- Informational cost, permit, and how-long-does-a-drainfield-last content is treated as link bait and topical-authority support, because AI Overviews cannibalize those queries. We do not rely on them for lead capture.
- Trust is the binding E-E-A-T constraint, so accurate, locally specific, well-cited content plus an honest brand identity is our primary ranking asset, since we cannot buy links and will not fake signals.

Winnable money queries (build pages for these): septic system installation [town], new septic system [town], drainfield replacement [town], drain field replacement Marion County, aerobic septic system [town], advanced treatment septic [town], septic system for new construction [town], septic inspection for home sale [town], septic permit Marion County.

Queries we do NOT chase as money pages: "septic pumping," "septic backup," "septic emergency," generic "septic cost," and "[service] near me." Pumping and backup are emergency intent that resolves in the map pack. Generic cost is directory-owned. We address cost only as informational guides.

---

## 4. Repo and tech stack

- Framework: Astro (portfolio standard), built by Cloudflare Pages from the connected GitHub repo. No local build required.
- Styling: Tailwind, self-contained config. Tailwind via CDN is an acceptable no-build fallback only if needed; the Astro plus Cloudflare cloud build is the primary path.
- TypeScript for data files and components.
- Astro config standards (match portfolio):
  - `trailingSlash: 'always'`
  - build format `'directory'`
  - self-referencing canonical on every page
- HTTPS enforced at the Cloudflare dashboard (Full Strict SSL plus Always Use HTTPS). Do not add origin-level redirects that could cause loops.
- Forms: Web3Forms, access key stored as a Cloudflare env var, domain-locked.
- Analytics: GA4, measurement ID via env var. Google Search Console verification via DNS or a meta tag I will supply.
- Call tracking: not at launch. A TextNow number is the displayed contact number now; move to CallRail around month 3 to 4. Build the phone number as a single configurable value so it swaps in one place.

Repo structure (proposed; adjust to Astro conventions):

```
/src
  /components   (Header, DisclosureStrip, Footer, QuoteForm, FaqBlock, SchemaOrg, Breadcrumbs, ServiceCard, AreaFactBox, PermitCallout)
  /layouts      (BaseLayout.astro)
  /pages
    index.astro
    /services
      septic-system-installation.astro
      drainfield-replacement.astro
      aerobic-treatment-systems.astro
      advanced-treatment-springs.astro
      septic-for-new-construction.astro
      septic-inspections-real-estate.astro
    /[town].astro            (dynamic town pages from data/towns.ts)
    /guides
      marion-county-septic-permit-guide.astro
      florida-drainfield-replacement-cost-guide.astro
      springs-bmap-advanced-treatment-guide.astro
      buying-rural-property-septic-marion-county.astro
      septic-vs-sewer-marion-county.astro
      drainfield-failure-signs-and-lifespan.astro
    /locations         (THIN hub: bare links only, no sales copy)
    about.astro
    contact.astro
    privacy.astro
    terms.astro
    disclosure.astro
  /data
    towns.ts
    services.ts
    faqs.ts
/public
  robots.txt
  (images, og image)
astro.config.mjs
tailwind.config.*
```

Note: this niche concentrates permitting authority at the county level rather than splitting across many county jurisdictions, so the county permitting depth lives in the Marion County permit guide and is referenced from every town page, rather than in separate per-county pages. Town pages carry the local soil, water-table, and spring/BMAP-zone differences.

---

## 5. Brand identity

- Working brand name: Ocala Septic Pros. Confirm final with me before hardcoding; the domain choice drives it. Candidate domains: ocalasepticpros.com (preferred), marioncountyseptic.com, ocaladrainfield.com, ocalasepticexperts.com, springscountryseptic.com.
- The brand is a matching service. The brand name is not a contractor claim. The byline author is the brand's editorial persona (see Section 11), with an honest bio describing the site's purpose.
- Voice: clear, practical, environmentally aware, Marion County literate. Plain homeowner-facing clarity about permits, soils, springs, and what a real septic project involves. Helpful, not salesy. No hype words. No tenure or scale claims about ourselves.

---

## 6. Design system: "Silver Springs" (must be visually distinct from the other five sites)

Differentiation is intentional across the portfolio to avoid cross-site pattern matching. This site must not resemble the slate-and-blue radon site, the limestone-and-green barndominium site, or any other. The springs and clean-water theme also reinforces the environmental-protection moat. Use this palette:

- Surface / background: soft sand white. `--surface: #FBF8F3;` secondary surface `#EEF4F2`.
- Primary text: deep charcoal teal `#16211F`.
- Primary brand (headers, structural elements): spring teal `#0F5257`. Darker variant `#0B3F43`.
- Accent / CTA (buttons, key links): warm ochre `#C6892F`. Hover `#A8721F`.
- Muted / borders: soft sage gray `#C3D2CC`.
- Highlight for spring/BMAP advanced-treatment callouts only: clear aqua `#2A8C8C` (used sparingly, the way a single callout color is reserved on the other sites).
- Typography:
  - Headings: a clean geometric or humanist sans (for example Outfit or Manrope) for a modern, environmental, trustworthy feel. This deliberately differs from the barndominium site's serif headings.
  - Body: a highly legible sans (for example Inter or Public Sans).
  - Load fonts efficiently (self-host or preconnect, subset to weights used). Performance matters for Core Web Vitals.
- Visual motifs: clean water and spring imagery, soft sand tones, simple line iconography for system types (conventional, aerobic, advanced treatment), generous whitespace, large legible cost and permit-fact tables. Avoid stocky corporate gradients. Avoid anything resembling the other sites' hero treatments.
- Imagery rule: only use images we can honestly use. No implying these are our own completed installs. Use clearly generic or properly licensed imagery and never caption an image as "our work." No fake project galleries.

Accessibility: AA contrast minimum, focus states on all interactive elements, semantic headings, alt text on all images (descriptive, no keyword stuffing, no em dashes).

---

## 7. Information architecture and URL structure

All URLs lowercase, hyphenated, trailing slash.

Money pages (transactional intent, lead capture):
- Services (6): `/services/septic-system-installation/`, `/services/drainfield-replacement/`, `/services/aerobic-treatment-systems/`, `/services/advanced-treatment-springs/`, `/services/septic-for-new-construction/`, `/services/septic-inspections-real-estate/`
- Town pages (8), dynamic from `data/towns.ts`: `/ocala/`, `/belleview/`, `/dunnellon/`, `/silver-springs/`, `/citra/`, `/ocklawaha/`, `/reddick/`, `/summerfield/`

Authority pages (informational, link bait, topical authority):
- Guides (6): the Marion County permit guide, the Florida drainfield replacement cost guide, the springs/BMAP advanced-treatment guide, the buying-rural-property guide, the septic-vs-sewer guide, and the drainfield failure-signs-and-lifespan guide listed in the repo structure.

Utility / trust:
- `/about/`, `/contact/`, `/privacy/`, `/terms/`, `/disclosure/`
- `/locations/` is a THIN hub: bare links to the 8 town pages, no sales copy, no duplicated service descriptions. This is a deliberate anti-cannibalization measure learned on a prior site where a content-heavy locations hub outranked and cannibalized the individual town pages. Keep it minimal.

Hard footprint cap at launch: roughly 6 services + 8 towns + 6 guides + 5 utility + home = about 26 indexable pages. Do not generate more town pages just because more place names exist in Marion County. Volume without unique value triggers scaled-content enforcement. If we expand later, each new page must clear the unique-data bar in Section 9.

---

## 8. Page-by-page content specs

General rules for every page:
- One clear H1 with the primary keyword phrased naturally.
- Honest lead-gen framing in the first screen. A primary CTA to the quote form.
- The header disclosure strip and footer disclaimer are present (global components).
- Self-referencing canonical, unique title tag and meta description (no templated duplication), Open Graph tags.
- Breadcrumbs with BreadcrumbList schema.
- No forbidden language. No fake signals. No em dashes.

### Home (`/`)
- H1 communicating: get matched with licensed Marion County septic installers for new systems and drainfield replacement.
- Short explainer of the free matching service and how it works (3 steps: tell us about your property and project, we match you with a licensed local septic contractor, you get a quote).
- Service cards linking to the 6 service pages.
- A "septic in Marion County" trust block linking to the permit guide and the springs/BMAP guide (positions us as the knowledgeable local resource).
- Quote form (or prominent CTA to /contact/).
- Organization schema. FAQPage schema with 4 to 6 genuinely useful FAQs.

### Service pages (6)
Primary money pages. Each must be genuinely differentiated by system type or service, not spun from a template. For each:
- H1: "[Service] in Marion County, FL" or a close natural variant.
- What the system or service is, who needs it, typical Marion County scenarios (rural acreage, new build on raw land, failed older drainfield, property near a spring or in a BMAP zone, real-estate sale requiring inspection).
- Honest, sourced cost ranges for that system type (cite the cost guide; do not present ourselves as the quoter).
- Marion County specific considerations: sandy soils and percolation, seasonal high water table in the rainy season, springs and aquifer protection driving aerobic or advanced/enhanced treatment requirements, drainfield sizing and setbacks, the OSTDS permit step.
- Internal links to the relevant town pages and to the permit and springs guides.
- Service schema. A short FAQ with FAQPage schema.
- CTA to the quote form.
- Septic System Installation and Drainfield Replacement are the flagship money pages: most depth, strongest internal linking, the pages the whole site points toward. Advanced Treatment (springs) is the differentiation page that ties to the moat.

### Town pages (8, dynamic)
Each town page must carry unique local data, not a find-and-replace of the town name. Required unique elements per town (store in `data/towns.ts`):
- Whether the area is predominantly on septic versus sewer, and the kind of property and buyers typical there (for example Dunnellon and the Rainbow Springs area versus growth corridors near Ocala versus rural Citra and Reddick).
- Local soil and water-table notes relevant to drainfield design.
- Spring-protection or BMAP-zone status for that area and what treatment level it tends to require. This is the unique, hard-to-fake substance that clears the scaled-content bar.
- Which services are most in demand locally (new construction installs in growth corridors; drainfield replacements in older established areas; advanced treatment near springs).
- A clear link to the Marion County permit guide and the springs guide.
- Internal links to the 6 services and home.
- Service or ProfessionalService schema scoped honestly, FAQ with FAQPage schema, breadcrumbs.
- No two town pages may share the same body paragraphs. If you cannot write genuinely unique local content for a town, flag it and we drop that town rather than ship a thin duplicate.

### Guides (6): informational link bait and the authority backbone, build the permit and springs guides first
Each guide is a genuinely useful reference. Required for each: well-cited, FAQPage schema, links inward to the relevant service and town pages.
- Marion County septic permit guide: the OSTDS permit process, who administers it, application steps, site evaluation and soil testing, drainfield sizing basics, setbacks, fees, and a clear "verify current rules with the county, regulations change" disclaimer. IMPORTANT: permitting authority for Florida onsite sewage systems has shifted between the Florida Department of Health and the Florida Department of Environmental Protection in recent years. Do not hardcode a transfer date or authority from memory. Verify the CURRENT administering authority and process for Marion County at build time from an authoritative .gov source, cite it, and if you cannot verify it cleanly, flag it to me rather than stating it.
- Florida drainfield replacement cost guide: localized and more honest than the national directories. Real ranges including the things they omit (soil and site conditions, aerobic versus conventional, advanced treatment near springs, permit and engineering costs). This out-localizes the national directory pages without fighting them on the generic term.
- Springs and BMAP advanced-treatment guide: the environmental and regulatory why behind enhanced nutrient-reducing systems in spring-protection and aquifer-recharge zones. This is the strongest single piece of link bait and topical authority on the site.
- Buying rural property with a septic system in Marion County: a guide for buyers and real-estate agents.
- Septic versus sewer in Marion County.
- Drainfield failure signs and lifespan.
- Authoritative outbound citations across the guides: the Marion County administering health or environmental office, the relevant Florida Administrative Code chapters for onsite sewage (verify current chapter references), the relevant water management district (springs and BMAP), and UF/IFAS extension. These outbound links to authoritative sources are a deliberate Trust signal.

### Utility pages
- About: honest description of the matching service, the brand's purpose, the named editorial author and bio. No fabricated history, no team we do not have.
- Contact: the quote form, TextNow number, hours, the disclosure repeated.
- Privacy, Terms, Disclosure: standard, accurate, naming the operating entity. Include the TCPA and lead-sharing disclosures.

---

## 9. Programmatic page system (how to scale without triggering scaled-content enforcement)

- Town pages are data-driven via `data/towns.ts`, but the data objects must contain genuinely unique, locally accurate fields (see Section 8). The template renders structure; the data carries unique substance.
- A page does not ship unless its data object has: unique local context, the correct soil/water-table/spring-zone notes, at least 2 area-specific facts that appear on no other page, and a unique title and meta description.
- Build a quick self-audit: before marking the build done, diff the rendered body text of every town page against every other town page. If any two pages exceed roughly 60 percent shared body text, flag them. Near-duplicate pages are the exact pattern Google's scaled-content-abuse policy targets, so they get rewritten or dropped.
- Do not generate combinatorial pages (every service times every town). We have service pages and town pages; we do not create "drainfield replacement in Citra" plus "new septic in Citra" plus "aerobic system in Citra" as separate URLs. That is the classic spam pattern. Service intent on a town page is handled within the single town page.

---

## 10. Internal linking

- Hub and spoke. Home and the Septic System Installation and Drainfield Replacement flagships are the hubs.
- Each service page links to all 8 town pages and to the permit and springs guides.
- Each town page links to all 6 services, home, and the permit and springs guides.
- Guides link inward to the money pages they support.
- The /locations/ hub stays thin: bare links only.
- Descriptive anchor text, varied naturally, never keyword-stuffed, never exact-match repeated sitewide.

---

## 11. E-E-A-T and Trust execution (no fake signals)

- Named brand author/editor persona with a genuine, honest bio: describes the site as a Marion County septic information resource and contractor-matching service. The persona is editorial, not a fake contractor. Byline on guides and the permit/springs content.
- Trust is built through accuracy and citations, not claims. Every permitting and cost figure links out to an authoritative source (county office, Florida Administrative Code, water management district, UF/IFAS).
- Full transparency: the disclosure strip, the disclosure page, and honest "we match you with independent licensed contractors" language everywhere.
- No reviews, no ratings, no testimonials (we have none and the schema forbids it). Social proof comes from being genuinely the most useful, most accurate Marion County septic resource, not from invented praise.
- Branded search demand is the strongest post-Helpful-Content survival signal we can build on zero budget. Pick one memorable brand name and use it consistently across the site, the byline, any profiles, and the guide assets, so the brand becomes a searched entity over time.

---

## 12. Technical SEO checklist

- Unique, hand-tuned title and meta description per page. No templated "Septic in {town}" duplication across all towns; each is written to be distinct.
- Self-referencing canonicals on every page.
- `trailingSlash: 'always'`, directory build format.
- XML sitemap generated and referenced in robots.txt. Submit to Search Console.
- robots.txt allows crawl, points to sitemap, blocks nothing important.
- Open Graph and a single branded OG image.
- Schema: Organization on home and in the global layout; Service/ProfessionalService on service and town pages; BreadcrumbList everywhere; FAQPage where FAQs exist. Never LocalBusiness, Review, or AggregateRating. Validate all structured data.
- Core Web Vitals: lazy-load images, set width and height to avoid layout shift, preconnect fonts, keep JS minimal (Astro ships little by default; keep it that way). Target green LCP, CLS, INP.
- Mobile-first: many of these buyers browse on phones. Test the form and tables on a narrow viewport.
- No broken internal links. No orphan pages (every page reachable from at least one hub).

---

## 13. Forms and analytics wiring

- Quote form fields: name, phone, email, town/area, project type (select: new septic installation, drainfield replacement, aerobic treatment system, advanced treatment near a spring, septic for new construction, septic inspection for a home sale, other), property/lot status (existing home, raw land, new build), timeline, brief description.
- TCPA consent checkbox directly above submit, unchecked by default, with plain-language consent text. Form will not submit without it.
- Web3Forms handler, access key from Cloudflare env var, domain-locked. Spam honeypot field enabled.
- On submit: redirect to a thank-you state and fire a GA4 conversion event.
- Lead email subject line clear and consistent, for example "New Lead: Ocala Septic Pros quote request".
- GA4 measurement ID from env var. Search Console verification as I supply it.
- Single source of truth for the phone number (one config value) so the TextNow to CallRail swap later is one change.

---

## 14. Build sequence for Claude Code (phased; commit after each phase)

Work in this order. Commit and push after each phase so Cloudflare auto-builds and I can review the preview.

1. Scaffold: Astro project, Tailwind, BaseLayout, global Header plus DisclosureStrip plus Footer, SchemaOrg component, Breadcrumbs. Wire the design tokens from Section 6. Confirm Cloudflare auto-build works on push.
2. Data layer: `data/towns.ts`, `data/services.ts`, `data/faqs.ts`. Populate towns with verified local soil, water-table, and spring/BMAP-zone data. Flag any field you cannot verify rather than inventing it.
3. Authority guides first: the Marion County permit guide and the springs/BMAP advanced-treatment guide, then the remaining four guides. Build the moat content before the money pages so the site has topical authority from day one. Verify current permitting authority at build time (see Section 8).
4. Service pages (6), with Septic System Installation and Drainfield Replacement most developed and Advanced Treatment tied to the springs moat.
5. Town pages (8), each with unique local data. Run the duplicate-text self-audit from Section 9.
6. Utility pages, thin /locations/ hub, quote form, TCPA, Web3Forms wiring, GA4.
7. Technical SEO pass: titles, metas, canonicals, sitemap, robots, schema validation, internal-link audit, Core Web Vitals check, mobile check.
8. Pre-launch QA against Section 16. Then tell me it is ready for the manual incognito SERP check and Keyword Planner validation before we point DNS and promote it.

---

## 15. Free, zero-budget growth setup (build the hooks now)

- The permit guide, the springs/BMAP guide, and the localized drainfield cost guide are the link-earning assets. Make them genuinely the best resources on each topic so they are linkable.
- Add clear, shareable structure (clean headings, a summary box, a "verify with the county" callout) so journalists, real-estate agents, and bloggers can cite them.
- Real-estate agents are a high-value free distribution channel here, because septic inspection is a transaction trigger. The buying-rural-property and inspection guides are built for them to share.
- Leave a place in the layout for future free citations and brand mentions; do not buy any.
- No paid links, no paid citations, no paid tools, no paid ads. Total spend is the domain only.

---

## 16. Definition of done (pre-launch QA checklist)

- [ ] Tripwire passed: niche, design system, repo name all match this project.
- [ ] No forbidden language anywhere (copy, alt text, comments, commits, metas). No em dashes.
- [ ] Header disclosure strip and footer entity disclaimer on every page.
- [ ] TCPA consent above submit, unchecked by default, blocks submit if unchecked.
- [ ] Only allowed schema types present; no LocalBusiness, Review, or AggregateRating anywhere. All structured data validates.
- [ ] Every town page carries unique local data; duplicate-text self-audit passed (no two pages above ~60 percent shared body text).
- [ ] No combinatorial service-times-town pages. Footprint within the ~26-page cap.
- [ ] /locations/ hub is thin (bare links only).
- [ ] Money pages target planned, transactional "[service] [town/county]" intent; cost/how-to live only as guides; no pages built for emergency pumping/backup intent.
- [ ] Permit guide verified current permitting authority from an authoritative .gov source (or flagged to me); guides cite authoritative sources and carry "verify with the county" disclaimers.
- [ ] Honest brand author with real bio; no fake reviews, team, history, or tenure claims.
- [ ] Unique title and meta per page; self-referencing canonicals; sitemap and robots in place.
- [ ] Core Web Vitals green on mobile; form and tables usable on a narrow viewport.
- [ ] Web3Forms wired with domain-locked key from env var; GA4 firing; phone number is a single config value.
- [ ] Cloudflare auto-build from GitHub works; Wrangler never used; secrets only in env vars.
- [ ] CLAUDE.md and PROJECT_BRIEF.md read and respected, not overwritten.

---

## 17. Things to flag to me, never decide silently

- The current Marion County OSTDS permitting authority and process, if you cannot verify it cleanly from an authoritative source. Do not state a transfer date or authority from memory.
- Any town for which you cannot write genuinely unique local content (we drop it rather than ship thin).
- Any soil, water-table, or spring/BMAP-zone claim you cannot verify.
- Any conflict between this brief and COMPLIANCE_STANDARDS.md (that doc wins).
- Any place a secret would otherwise be committed in plaintext.
- The final brand name and domain before you hardcode them.
- Anything that would push us over the page-count cap or create near-duplicate pages.

Data gaps and risks to remember (these are handled by me, outside Claude Code): exact keyword volumes require a free Keyword Planner pull, and the live map-pack and AI-Overview rendering require a manual incognito check from an Ocala geolocation. A national septic consolidator (Wind River Environmental) operates near the region from the Gainesville and Jacksonville directions, so the tenant pool should be monitored and tenants signed to terms once leads flow; if a consolidator absorbs the local tenant pool, that is a pivot trigger. Do not assume the keyword and SERP checks are done; build the site to be correct regardless, and I will confirm demand before we promote it.
