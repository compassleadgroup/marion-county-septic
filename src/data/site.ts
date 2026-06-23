/*
  Single source of truth for brand, operating entity, contact, and the
  compliance copy that must appear verbatim and identically sitewide.
  Compliance strings are quoted directly from COMPLIANCE_STANDARDS.md, which is
  authoritative. Do not paraphrase them.
*/

export const site = {
  brandName: 'Marion County Septic',
  domain: 'marioncountyseptic.com',
  url: 'https://marioncountyseptic.com',

  // Operating entity (Compass Camper LLC, Oregon), operating as Compass Lead Group.
  entity: {
    legalName: 'Compass Camper LLC',
    state: 'Oregon',
    dba: 'Compass Lead Group',
  },

  // Market.
  county: 'Marion County',
  region: 'Marion County, Florida',
  metro: 'Ocala metro',

  // A real, monitored inbox for privacy/contact requests.
  email: 'info@marioncountyseptic.com',
} as const;

/*
  Operating address. COMPLIANCE_STANDARDS.md requires a REAL operating address
  (not the Oregon registered-agent address) disclosed on the About or Contact
  page before launch. It is intentionally left blank here because it must not be
  invented. Fill it in and it will render on the About page automatically.
  OPERATOR: this is a pre-launch requirement.
*/
export const address = {
  line1: '',
  line2: '',
  city: '',
  state: '',
  zip: '',
} as const;

export const hasAddress = address.line1.length > 0;

/*
  Phone number: SINGLE configurable value so the TextNow -> CallRail swap later
  is one change. Override at build time with PUBLIC_PHONE_DISPLAY / PUBLIC_PHONE_TEL
  (Cloudflare env vars) without touching code.

  NOTE TO OPERATOR: the fallback below is a reserved fictional placeholder
  ((352) 555-0100). Replace it with the live TextNow number before promotion,
  either here or via the env vars.
*/
export const phone = {
  display: import.meta.env.PUBLIC_PHONE_DISPLAY || '(352) 555-0100',
  tel: import.meta.env.PUBLIC_PHONE_TEL || '+13525550100',
} as const;

/*
  Editorial byline. COMPLIANCE_STANDARDS.md forbids inventing named individuals
  with fabricated bios, so the author is the brand's editorial team (honest, no
  fake person, no stock-photo headshot). The Build Spec's "named brand author"
  is satisfied by the brand itself. Update reviewedLabel when guides are revised.
*/
export const editorial = {
  author: 'Marion County Septic Editorial Team',
  reviewedLabel: 'June 2026',
  note: 'Written and maintained by the Marion County Septic editorial team and compiled from cited public sources. Marion County Septic is operated by Compass Camper LLC and is an information resource and contractor-matching service, not a septic contractor.',
} as const;

// Build-time keys. Secrets live ONLY in Cloudflare Pages env vars.
export const keys = {
  web3forms: import.meta.env.PUBLIC_WEB3FORMS_KEY || '',
  ga4: import.meta.env.PUBLIC_GA4_ID || '',
  // Optional Google Search Console meta-tag verification token. Leave blank to
  // verify by DNS instead (no code change needed).
  gscVerification: import.meta.env.PUBLIC_GSC_VERIFICATION || '',
} as const;

/*
  Compliance copy. Quoted verbatim from COMPLIANCE_STANDARDS.md.
  The header strip and footer disclaimer appear on EVERY page.
*/
export const compliance = {
  // Header disclosure strip (every page, above main nav).
  disclosureStrip:
    'A marketing service connecting Marion County property owners with licensed septic contractors. Compass Camper LLC is not a licensed contractor and does not perform septic work.',

  // Footer disclaimer (every page, same wording sitewide).
  footerDisclaimer:
    'This website is operated by Compass Camper LLC (Oregon), a licensed marketing and lead generation company. Marion County Septic is a marketing service that connects property owners with independent, licensed septic contractors. All septic and related services are performed by independent licensed contractors. Compass Camper LLC is not a licensed contractor and does not perform septic work directly. Contractor license numbers are available upon request.',

  // Disclosure shown directly above every form.
  formDisclosure:
    'When you submit this form, your information is shared with a licensed septic contractor for the purpose of scheduling your free quote.',

  // TCPA consent shown directly above every submit button, never pre-checked.
  // "Privacy Policy" must render as a real link to /privacy/.
  tcpaConsent: {
    pre: 'By submitting this form, I agree that Compass Camper LLC and a septic contractor may contact me at the phone number and email I provided, including by automated phone calls, prerecorded messages, and text messages, regarding septic services. Consent is not a condition of any purchase. Message and data rates may apply. I may opt out at any time by replying STOP to any text or asking to be removed during any call. See our ',
    linkText: 'Privacy Policy',
    linkHref: '/privacy/',
    post: '.',
  },
} as const;
