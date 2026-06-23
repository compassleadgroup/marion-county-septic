# PROJECT_BRIEF.md: Marion County Septic (Site #6)

Project reference. Placed by the operator. Read it, do not overwrite it. For always-on build rules see CLAUDE.md. For page-by-page instructions see the build spec. COMPLIANCE_STANDARDS.md is authoritative on any conflict.

---

## Identity

- Brand: Marion County Septic
- Domain: marioncountyseptic.com
- Repo: marion-county-septic
- Operating entity: Compass Camper LLC, operating as Compass Lead Group
- Lead contact at launch: TextNow VoIP number (single config value); move to CallRail around month 3 to 4
- Forms: Web3Forms (domain-locked key in Cloudflare env var). Analytics: GA4. Search: Google Search Console.
- Portfolio position: Site #6. Siblings: Tulsa foundation, Lake of the Ozarks boat docks, Oklahoma storm shelters, Iowa radon, Texas Hill Country barndominiums. This site shares none of their niches, data, or design.

---

## Strategic thesis

We match Marion County property owners with licensed local septic contractors for planned, permitted, high-ticket work: new system installation and full drainfield replacement. We earn leads through classic organic search (positions 1 to 10), capture them with a compliant quote form, and route them to a paying contractor tenant.

The defining decision: we target the PLANNED side of septic, not the emergency side. New installs and drainfield replacements are designed, permitted, multi-week, five-figure purchases that buyers research and compare. That is winnable with an organic-only, no-GBP site. Emergency pumping and backup searches resolve in the Google map pack we are not using, so we do not build for them.

We are deliberately giving up the map 3-pack (roughly 44 percent of local clicks) because we have no Google Business Profile. That trade only works on research-driven, high-consideration purchases, which is exactly what this niche scope is.

---

## Market and demand drivers

- Marion County (Ocala metro) is one of the fastest-growing metros in the country. Much of the growth is rural and exurban property on septic rather than sewer, which drives new-install demand.
- Sandy soils, seasonal high water table in the rainy season, and aging drainfields in established areas drive replacement demand.
- Spring-protection and aquifer-recharge zones (Basin Management Action Plan areas) require or encourage enhanced nutrient-reducing and advanced treatment systems. This is the highest-value differentiation and the authority moat.
- Real-estate transactions trigger septic inspections, a recurring planned-intent lead source and a free distribution channel through agents.

---

## Validated research summary

- Ticket sizes (verify at build time from real Florida contractor pages): roughly $5,000 to $20,000-plus for new installs and full drainfield replacement; advanced treatment systems sit at the higher end.
- Per-lead value: roughly $100 to $300 given the ticket size.
- Rent ceiling at maturity: roughly $750 to $2,000 per month.
- SERP: local incumbents are beatable thin sites; no dominant national franchise in the organic results for the planned-intent money queries.
- Probability of success under the operator's constraints: assessed favorably (refined PROCEED), contingent on confirming demand (see data gaps).

---

## Risks and monitoring

- Permitting authority caveat: Florida onsite sewage permitting has shifted between the Department of Health and the Department of Environmental Protection in recent years. The exact current administering authority for Marion County must be verified at build time from an authoritative .gov source and cited, never stated from memory. This dates the original moat thesis if gotten wrong.
- Consolidator risk: Wind River Environmental, a national septic consolidator, operates near the region from the Gainesville and Jacksonville directions. Monitor the local tenant pool and sign tenants to terms once leads flow. If a consolidator absorbs the local tenant pool, that is a pivot trigger.

---

## Target keywords

Money pages (transactional, planned intent, lead capture):
- septic system installation [town], new septic system [town]
- drainfield replacement [town], drain field replacement Marion County
- aerobic septic system [town], advanced treatment septic [town]
- septic system for new construction [town]
- septic inspection for home sale [town]
- septic permit Marion County

Do NOT chase as money pages (emergency or directory-owned): septic pumping, septic backup, septic emergency, generic septic cost, "[service] near me." Address cost only as an informational guide.

Link-bait and authority (informational, AI-Overview-exposed, not lead capture): Marion County septic permit guide, Florida drainfield replacement cost guide, springs and BMAP advanced-treatment guide, buying rural property with a septic system, septic versus sewer in Marion County, drainfield failure signs and lifespan.

---

## Site architecture (about 26 indexable pages at launch)

- Home
- Services (6): septic system installation, drainfield replacement, aerobic treatment systems, advanced treatment for springs and BMAP zones, septic for new construction, septic inspections for real estate. Flagships: installation and drainfield replacement. Differentiation: advanced treatment (ties to the moat).
- Town pages (8, dynamic from data/towns.ts): Ocala, Belleview, Dunnellon, Silver Springs, Citra, Ocklawaha, Reddick, Summerfield. Each carries unique local soil, water-table, and spring/BMAP-zone data.
- Guides (6): permit guide and springs/BMAP guide first (the backbone), then cost guide, buying-rural-property guide, septic-vs-sewer guide, drainfield-failure-and-lifespan guide.
- Utility: About, Contact, Privacy, Terms, Disclosure.
- /locations/: thin hub, bare links only, no sales copy (anti-cannibalization).

Footprint discipline: tight and data-rich beats large and thin. Every town page must clear the unique-data bar or get dropped. No combinatorial service-times-town pages. This is the defense against Google's scaled-content-abuse enforcement.

---

## The moat

The springs and BMAP advanced-treatment content plus the Marion County permit guide are genuinely useful, hard to fake, uncontested by local competitors, and they triple as our Trust signal, our link bait, and our topical authority. Trust is the binding E-E-A-T constraint, so accuracy plus authoritative outbound citations (Marion County administering office, the relevant Florida Administrative Code chapters, the water management district, UF/IFAS extension) plus an honest brand identity is our primary ranking asset, since we cannot buy links and will not fake signals.

---

## Monetization

- Model: hybrid. Start per-lead during the trial to prove value, move to a flat monthly rent once volume is steady, optionally with a per-lead overage.
- Per-lead: roughly $100 to $300.
- Flat monthly target at maturity: roughly $750 to $2,000.
- Tenant profile: licensed local Marion County septic installers and drainfield contractors with weak digital presence (ideal), not the few with strong sites (they do not need leads). Verify licensing before routing leads.

---

## Design system: Silver Springs

Distinct from every sibling site. Surface soft sand #FBF8F3, primary spring teal #0F5257, CTA warm ochre #C6892F, advanced-treatment callout aqua #2A8C8C used sparingly, borders soft sage #C3D2CC, text deep charcoal teal #16211F. Headings in a clean geometric or humanist sans (for example Outfit or Manrope); body in a legible sans (for example Inter or Public Sans). Clean water and spring motifs, generous whitespace, large legible permit and cost tables. Only honestly usable imagery, never captioned as our own work.

---

## Data gaps to close before promotion (handled by the operator, outside Claude Code)

- Exact keyword volumes for the planned-intent money phrases require a free Google Keyword Planner pull.
- Live map-pack, AI-Overview, and ads rendering require a manual incognito check from an Ocala geolocation.
Build the site to be correct regardless; the operator confirms demand before the site is promoted.
