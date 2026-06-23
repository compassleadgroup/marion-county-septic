/*
  JSON-LD builders. STRICT allow-list per COMPLIANCE_STANDARDS.md:
    Allowed: Organization, Service, ProfessionalService, BreadcrumbList, FAQPage.
    Forbidden anywhere pre-tenant: LocalBusiness, Review, AggregateRating, Rating.

  The business entity is a marketing / lead-gen service, never a contractor.
  Service descriptions must say we CONNECT owners with contractors, never that
  we perform the work.
*/

import { site } from '../data/site';

export const ORG_ID = `${site.url}/#organization`;

/**
 * Organization for the brand / operating entity. Emitted globally.
 * Honest: names the legal entity and states it is a marketing service that
 * does not perform septic work.
 */
export function buildOrganization() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: site.brandName,
    legalName: site.entity.legalName,
    url: `${site.url}/`,
    logo: `${site.url}/og-image.png`,
    image: `${site.url}/og-image.png`,
    email: site.email,
    description:
      'Marion County Septic is a marketing and lead generation service operated by Compass Camper LLC. It connects property owners in Marion County, Florida with independent, licensed local septic contractors. It is not a contractor and does not perform septic work.',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Marion County, Florida',
    },
    knowsAbout: [
      'Septic system installation',
      'Drainfield replacement',
      'Aerobic treatment systems',
      'Enhanced nutrient-reducing septic systems',
      'OSTDS permitting in Florida',
    ],
  };
}

/**
 * ProfessionalService description of the business entity itself.
 * Used on the About page. Clarifies the marketing/lead-gen nature.
 */
export function buildProfessionalService() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: site.brandName,
    legalName: site.entity.legalName,
    url: `${site.url}/about/`,
    description: 'Marketing and lead generation services for the septic industry.',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Marion County, Florida',
    },
    provider: { '@id': ORG_ID },
  };
}

/**
 * Service schema for a service or town page. The description must clarify the
 * service is connecting owners with licensed contractors, not performing work.
 */
export function buildService(opts: {
  name: string;
  description: string;
  url: string;
  areaServedName?: string;
  serviceType?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    serviceType: opts.serviceType ?? 'Septic contractor referral service',
    url: opts.url,
    description: opts.description,
    provider: {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: site.brandName,
    },
    areaServed: {
      '@type': opts.areaServedName ? 'Place' : 'AdministrativeArea',
      name: opts.areaServedName ?? 'Marion County, Florida',
    },
  };
}

export interface BreadcrumbItem {
  name: string;
  /** Absolute or root-relative path; will be made absolute. */
  path: string;
}

export function buildBreadcrumb(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.path.startsWith('http')
        ? item.path
        : `${site.url}${item.path}`,
    })),
  };
}

export interface FaqItem {
  question: string;
  /** Plain-text answer. Must match the visible answer copy. */
  answer: string;
}

/**
 * FAQPage. The answer text here must match the visible compliant copy exactly
 * (COMPLIANCE_STANDARDS.md). Pass the same strings used to render the page.
 */
export function buildFaqPage(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}
