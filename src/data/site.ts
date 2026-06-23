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

// Build-time keys. Secrets live ONLY in Cloudflare Pages env vars.
export const keys = {
  web3forms: import.meta.env.PUBLIC_WEB3FORMS_KEY || '',
  ga4: import.meta.env.PUBLIC_GA4_ID || '',
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
