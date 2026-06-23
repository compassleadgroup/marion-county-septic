# COMPLIANCE_STANDARDS.md: Marion County Septic (Site #6)

Authoritative compliance reference for this repo. If anything in CLAUDE.md, PROJECT_BRIEF.md, or the build spec conflicts with this file, this file wins. Stop and flag the conflict.

This is the master Compass Camper LLC standard, instantiated for this site. It is the default state of the site BEFORE a tenant contractor is signed. Once a tenant is signed, layer in changes from TENANT_ACTIVATION_PLAYBOOK.md. Do not apply tenant-state changes before an actual partnership agreement is signed. Pre-tenant compliance is non-negotiable, even if it costs some conversion percentage.

- Operating entity: Compass Camper LLC (Oregon)
- Site brand: Marion County Septic
- Domain: marioncountyseptic.com
- Service word used throughout copy: "septic" (use "septic system installation," "drainfield replacement," etc. as appropriate)
- Market: Marion County, Florida (Ocala metro and surrounding towns)
- Last aligned to master standard: as placed by the operator

---

## Core principle

This site is a marketing service that connects Marion County property owners with licensed local septic contractors. Compass Camper LLC does not perform septic work, does not employ tradespeople, and does not negotiate scope or pricing on jobs.

The footer disclaimer states this. The body copy must reinforce it. The FTC net-impression doctrine treats a site as deceptive if a reasonable consumer encounters body copy that contradicts the disclaimer, even if the disclaimer is technically present.

The test: read the homepage hero, services section, and any "why us" block out loud. If a casual reader could come away thinking this company performs septic work, the copy is non-compliant.

---

## Language rules

### Forbidden language (creates legal exposure). Never use, ever:
- "Vetted," "vetted contractors," "our vetted network"
- "Our network," "our network of contractors"
- "Pre-screened," "pre-qualified contractors"
- "Hand-selected," "carefully selected"
- "Top-rated contractors" unless backed by real, documented ranking criteria
- "Best contractors in [city]" unless backed by a documented best-of process
- "Trusted partners" (creates implicit warranty obligations)
- First-person claims about performing work: "we install," "we repair," "we replace," "we pump," "we inspect," "we design"
- Fake testimonials, named customer reviews, or invented case studies
- Claims of company tenure or experience that do not reflect Compass Camper LLC's actual age
- Stock photos labeled as "our team" or "our crew"
- Fabricated certifications, awards, or BBB ratings
- "Since [year]," "family-owned," or "decades of experience" claims unless documented for Compass Camper LLC
- Em dashes anywhere (copy, alt text, comments, commits, meta tags)

### Allowed language (defensible and converts well):
- "Licensed local septic contractors"
- "A licensed septic contractor in your area"
- "Licensed and insured contractors"
- "The contractor you are matched with"
- "A septic specialist near you"
- "Independent licensed professionals"
- "We connect property owners with..."
- "We help you find..."
- "Free, no-obligation quote from a licensed contractor"
- Specific verifiable claims: "Licensed in Florida," "Carry general liability insurance," "Offer written warranties"

### Style consistency
- No em dashes. Use commas, periods, parentheses, or "to."
- Numbers under 10 spelled out, 10 and over as digits.
- Currency: $5,000 (no space after $).
- Phone numbers formatted as (XXX) XXX-XXXX with tel: links as +1XXXXXXXXXX.
- Service names capitalized consistently across the site.

---

## Required page elements

### Header disclosure strip (every page, above main nav)
A thin gray bar with small but visible text. Not footer-only.

Copy:
> "A marketing service connecting Marion County property owners with licensed septic contractors. Compass Camper LLC is not a licensed contractor and does not perform septic work."

Style: bg-gray-100, text-xs or text-sm, text-gray-700, py-1.5 px-4, centered. Looks like a legitimate disclosure, not hidden styling.

Why: the FTC net-impression doctrine requires a reasonable consumer to actually encounter the disclosure. Footer-only does not satisfy this when body copy is sales-oriented.

### Footer disclaimer (every page, same wording sitewide)
Copy:
> "This website is operated by Compass Camper LLC (Oregon), a licensed marketing and lead generation company. Marion County Septic is a marketing service that connects property owners with independent, licensed septic contractors. All septic and related services are performed by independent licensed contractors. Compass Camper LLC is not a licensed contractor and does not perform septic work directly. Contractor license numbers are available upon request."

### Form privacy and consent block (every form)
Above every submit button. Not pre-checked. Not in a popup. Not in fine print.

TCPA consent copy:
> "By submitting this form, I agree that Compass Camper LLC and a septic contractor may contact me at the phone number and email I provided, including by automated phone calls, prerecorded messages, and text messages, regarding septic services. Consent is not a condition of any purchase. Message and data rates may apply. I may opt out at any time by replying STOP to any text or asking to be removed during any call. See our Privacy Policy."

"Privacy Policy" must be a real link to /privacy/.

Disclosure above the form:
> "When you submit this form, your information is shared with a licensed septic contractor for the purpose of scheduling your free quote."

### About page required elements
1. Operating entity disclosure: "Marion County Septic is operated by Compass Camper LLC, an Oregon-registered marketing company. We are not a septic contractor and do not perform septic work."
2. Business model explanation: "We operate this website to connect Marion County property owners with licensed, insured septic contractors. When you submit a request, your information is forwarded to a licensed local contractor who can schedule your free quote."
3. Contractor requirements (objective criteria only): hold current Florida contractor licensing where required; carry current general liability insurance; offer written workmanship warranties; provide transparent, itemized written estimates before performing any work.
4. No fake team members. No invented founders, named individuals with stock photos, or "meet the team" sections with fabricated bios.
5. No false experience claims. Do not claim years in business, projects completed, customers served, or systems installed unless those numbers reflect Compass Camper LLC's actual operating history.

---

## Schema markup standards

- Do NOT use contractor-specific categories ("Septic System Service," "Plumber," etc.). They falsely represent Compass Camper LLC as performing the work.
- Use instead: ProfessionalService with description "Marketing and lead generation services for the septic industry," OR Service with provider pointing to Compass Camper LLC and serviceType "Septic contractor referral service."
- Organization schema (About page): correct legal name "Compass Camper LLC," registered state Oregon, correct operating address (see address requirements), correct phone (TextNow pre-revenue, CallRail once live).
- Service schema (service pages): Service is fine. Description must clarify the service is "connecting property owners with licensed contractors for [service type]," not "we perform [service type]."
- FAQPage schema: answer text in the JSON-LD must match the visible compliant copy. If the visible answer changes, the schema changes too.
- BreadcrumbList schema: standard, no compliance concerns.
- NEVER include before signing a tenant: AggregateRating, Review, or item-level Rating without underlying data. The FTC Reviews Rule (effective Oct 21, 2024) treats fake review schema as a per-violation civil penalty. Zero review schema until real reviews from real customers of an actual tenant contractor exist.

Note on the portfolio shorthand: across the portfolio we describe the allowed set as Organization, Service, ProfessionalService, BreadcrumbList, FAQPage, and the forbidden set as LocalBusiness, Review, AggregateRating. That shorthand and the rules above are the same standard. Use ProfessionalService or Service for the business entity, never a contractor-category LocalBusiness.

---

## Address requirements

- Every site needs a real operating address on file, not the Oregon registered-agent address. Acceptable: the operator's actual address (even if home-based), a registered virtual office in the target market (acceptable but increasingly risky for GBP, which this site does not use), or a real commercial office if leased.
- The operating address must be disclosed on the About page or in Contact info. It does not need to be prominent. It can be omitted from the homepage and footer.
- Customer-facing forms asking for a property address are fine; use placeholders framed from the user's perspective (their property address), never "our office address."

---

## DBA filings (operator responsibility)
- File the DBA (assumed business name) in Oregon with the Oregon Secretary of State.
- File the DBA in Florida (the target state) with the Florida registration authority.
- Approximate cost $50 to $150 per state. File within 30 days of launching, before any paid traffic.
- Operating under a brand name not legally registered to the LLC creates exposure and weakens UDAP defenses.

---

## Privacy Policy requirements (/privacy/)
1. Operating entity disclosure: Compass Camper LLC (Oregon).
2. Data collected: names, phone numbers, email addresses, property addresses, IP addresses, page-visit data.
3. How data is used: to match property owners with licensed contractors, to follow up on inquiries, to improve the service.
4. Who data is shared with: licensed local contractors who can fulfill the request, third-party providers (Cloudflare for hosting, CallRail for call tracking, etc.).
5. Data retention: reasonable period, typically 5-plus years for TCPA consent records.
6. User rights: opt out, request deletion (CCPA/CPRA if applicable), access their data.
7. Contact for privacy requests: a real, monitored email address.

Sensitive areas: CCPA/CPRA disclosures if targeting California residents; TCPA consent retention at least 5 years per FCC guidance.

---

## Terms of Service requirements (/terms/)
1. Operating entity: Compass Camper LLC, Oregon.
2. Governing law: Oregon.
3. Service description: marketing and lead generation service, not a contractor.
4. Disclaimer of liability for contractor work: the site connects users with contractors; users contract directly with the contractor for any work.
5. No warranty: the site does not warrant work performed by any contractor.
6. Dispute resolution: optional arbitration clause, otherwise Oregon courts.
7. Limitation of liability: reasonable cap, typically the value of the lead or a nominal amount.

---

## What NOT to include pre-tenant
Until a contractor partner is signed, do not include: customer testimonials (real or invented); review widgets; AggregateRating or Review JSON-LD; "as featured in" media logos unless verifiable; certifications, awards, or BBB badges unless earned by Compass Camper LLC; specific job photos unless clearly framed as illustrative stock; named team members with bios; "years in business" or "jobs completed" counters; specific pricing claims ("starting at $X" or "most jobs run $X to $Y") unless backed by tenant data.

Important for this niche: cost guidance is part of the SEO strategy, so cost content lives in the informational guides as ranges attributed to general industry and authoritative sources, framed as "typical Marion County costs" with citations, never as a first-person quote or a guarantee from us. Do not present any price as what "we charge."

---

## Off-site operational requirements (operator responsibilities)
- Call answering: opening line "Marion County Septic, how can I help?" If asked whether the answerer is a contractor: "We are a marketing service that connects property owners with licensed septic contractors. I can help schedule your free quote." Never claim to be a contractor.
- Call recording and consent: Oregon and Florida differ on recording consent. Florida is a two-party (all-party) consent state, so any call recording on the site's number must use appropriate consent language in the greeting or IVR. Verify before enabling recording.
- Insurance before any paid traffic or tenant signing: General Liability $1M/$2M with media-liability endorsement; E&O $1M/$2M for lead-gen; Cyber liability $1M. Pre-revenue this can be deferred but must be in place before signing a tenant.
- TCPA defensibility before paid traffic: integrate TrustedForm or Jornaya LeadiD to capture a consent token. Organic traffic alone has lower TCPA risk, but this is recommended once revenue exists. Leave a TODO in the form code for this integration.

---

## Pre-launch compliance audit checklist

Brand and entity:
- [ ] DBA filed in Oregon
- [ ] DBA filed in Florida
- [ ] Operating address documented (real, not registered-agent only)
- [ ] Phone number real and answerable (TextNow acceptable pre-revenue, CallRail required pre-outreach)

Site content:
- [ ] Header disclosure strip on every page
- [ ] Footer disclaimer on every page with correct entity and service references
- [ ] All body copy uses neutral "a licensed contractor" language, no first-person work claims
- [ ] No "vetted," "our network," "pre-screened," or similar claim-language
- [ ] No fake testimonials, named customer reviews, or invented case studies
- [ ] No fake team members or stock-photo bios
- [ ] No false experience claims, completed-jobs counters, or "since [year]" or "family-owned" claims
- [ ] No unverified certifications, awards, or accreditation badges
- [ ] No em dashes anywhere

Forms:
- [ ] TCPA consent language above the submit button, not pre-checked
- [ ] Disclosure above the form about contractor data sharing
- [ ] Privacy Policy link in the consent block is a real link
- [ ] TODO comment for TrustedForm/Jornaya before paid traffic

Schema:
- [ ] ProfessionalService or Service schema for the business entity, not a contractor-specific category
- [ ] Organization schema references Compass Camper LLC correctly
- [ ] FAQPage schema matches visible compliant copy
- [ ] Service schema description clarifies "connecting property owners with"
- [ ] NO AggregateRating schema anywhere
- [ ] NO Review schema anywhere
- [ ] No LocalBusiness contractor-category schema

Legal pages:
- [ ] /privacy/ exists with required disclosures
- [ ] /terms/ exists with required clauses
- [ ] Both link from the footer on every page

Niche-specific:
- [ ] No pages built for emergency pumping or backup intent (planned-work scope only)
- [ ] Cost content lives in guides as cited ranges, never as a first-person quote or guarantee
- [ ] Marion County OSTDS permitting authority verified from an authoritative .gov source at build time and cited, not stated from memory

Off-site:
- [ ] Call answering script documented
- [ ] Phone number forwards to a person who can identify the business correctly
- [ ] Plan for handling leads before a tenant is signed (respond honestly, set expectations, hold or refer as goodwill)

Insurance (before paid traffic or tenant signing):
- [ ] General Liability $1M/$2M with media endorsement
- [ ] E&O $1M/$2M
- [ ] Cyber liability $1M

TCPA tools (before paid traffic or tenant outreach):
- [ ] TrustedForm or Jornaya integrated on all forms
- [ ] Consent records retention plan (5-plus years)
- [ ] STOP keyword handling for SMS

---

## What this document does not cover
This is a compliance baseline, not a complete legal review. Before any specific high-risk action, consult a real attorney: drafting tenant contractor agreements; class-action TCPA defense; multi-state expansion compliance; specific licensing questions in regulated trades; tax-structure decisions. Reflects general best-practice principles under FTC, state UDAP, and TCPA rules. Regulatory environments change; review annually.

---

## When to layer in tenant activation changes
Once a contractor is signed and an exclusive partnership agreement is executed, apply the changes in TENANT_ACTIVATION_PLAYBOOK.md (what language can be added, what review and rating content can appear, what schema upgrades become available, what trust elements can be added, what stays the same). Do not apply tenant-state changes before a partnership agreement is signed.

End of COMPLIANCE_STANDARDS.md
