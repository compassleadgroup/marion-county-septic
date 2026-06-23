/*
  The six service (money) pages. Slugs match Build Spec section 7.
  Flagships: Septic System Installation and Drainfield Replacement.
  Differentiation / moat: Advanced Treatment for Springs and BMAP Zones.

  Card summaries and meta use neutral "licensed contractor" framing only.
  No first-person work claims. No em dashes. (COMPLIANCE_STANDARDS.md)
*/

export interface Service {
  slug: string;
  /** Canonical service name, capitalized consistently sitewide. */
  name: string;
  /** Short label for nav menus. */
  navLabel: string;
  /** Page H1. */
  h1: string;
  /** Hand-tuned, unique title tag. */
  title: string;
  /** Hand-tuned, unique meta description. */
  description: string;
  /** One-line summary used on service cards. */
  cardSummary: string;
  /** Flagship money pages get the deepest treatment and strongest linking. */
  flagship: boolean;
  /** The springs/BMAP page uses the reserved aqua accent. */
  springsAccent?: boolean;
  order: number;
}

export const services: Service[] = [
  {
    slug: 'septic-system-installation',
    name: 'Septic System Installation',
    navLabel: 'Septic System Installation',
    h1: 'Septic System Installation in Marion County, FL',
    title: 'Septic System Installation in Marion County, FL | Marion County Septic',
    description:
      'Planning a new septic system in Marion County? Get matched with a licensed local septic contractor for site evaluation, OSTDS permitting, and installation. Free, no-obligation quote.',
    cardSummary:
      'Installing a new system on raw land or replacing a whole system? Get matched with a licensed local contractor for site evaluation, permitting, and installation.',
    flagship: true,
    order: 1,
  },
  {
    slug: 'drainfield-replacement',
    name: 'Drainfield Replacement',
    navLabel: 'Drainfield Replacement',
    h1: 'Drainfield Replacement in Marion County, FL',
    title: 'Drainfield Replacement in Marion County, FL | Marion County Septic',
    description:
      'A failing drainfield is the most common reason for septic replacement in Marion County. Get matched with a licensed contractor for assessment, permitting, and a properly sized new drainfield.',
    cardSummary:
      'A failing drainfield is the most common reason for a septic replacement. Connect with a licensed contractor for assessment, permitting, and a new drainfield sized for your soil.',
    flagship: true,
    order: 2,
  },
  {
    slug: 'aerobic-treatment-systems',
    name: 'Aerobic Treatment Systems',
    navLabel: 'Aerobic Treatment Systems',
    h1: 'Aerobic Treatment Systems in Marion County, FL',
    title: 'Aerobic Treatment Systems (ATU) in Marion County, FL | Marion County Septic',
    description:
      'Aerobic treatment units (ATUs) suit Marion County lots where a conventional drainfield will not work. Get matched with a licensed contractor for design, installation, and required maintenance.',
    cardSummary:
      'Aerobic treatment units (ATUs) suit lots where a conventional drainfield will not work. Find a licensed contractor for design, installation, and the required maintenance.',
    flagship: false,
    order: 3,
  },
  {
    slug: 'advanced-treatment-springs',
    name: 'Advanced Treatment for Springs and BMAP Zones',
    navLabel: 'Advanced Treatment (Springs)',
    h1: 'Advanced Treatment Septic Systems for Springs and BMAP Zones',
    title: 'Advanced Treatment Septic Systems for Springs & BMAP Zones | Marion County Septic',
    description:
      'Property in a Silver Springs or Rainbow Springs protection zone may require an enhanced nutrient-reducing (ENR) system. Get matched with a licensed contractor who installs advanced treatment systems.',
    cardSummary:
      'Property in a Silver Springs or Rainbow Springs protection zone may need an enhanced nutrient-reducing system. Match with a contractor who installs advanced treatment systems.',
    flagship: false,
    springsAccent: true,
    order: 4,
  },
  {
    slug: 'septic-for-new-construction',
    name: 'Septic for New Construction',
    navLabel: 'Septic for New Construction',
    h1: 'Septic Systems for New Construction in Marion County, FL',
    title: 'Septic for New Construction in Marion County, FL | Marion County Septic',
    description:
      'Building on a vacant lot in Marion County? Get matched with a licensed contractor for the OSTDS permit, soil and site evaluation, and a septic system sized for your new home.',
    cardSummary:
      'Building on a vacant lot? A licensed contractor can handle the OSTDS permit, soil evaluation, and a system sized for your new home.',
    flagship: false,
    order: 5,
  },
  {
    slug: 'septic-inspections-real-estate',
    name: 'Septic Inspections for Real Estate',
    navLabel: 'Septic Inspections (Real Estate)',
    h1: 'Septic Inspections for Real Estate in Marion County, FL',
    title: 'Real Estate Septic Inspections in Marion County, FL | Marion County Septic',
    description:
      'Buying or selling a home on septic in Marion County? Get matched with a licensed contractor for a real-estate septic inspection before closing. Free, no-obligation quote.',
    cardSummary:
      'Buying or selling a home on septic? Connect with a licensed contractor for a real-estate septic inspection before closing.',
    flagship: false,
    order: 6,
  },
];

export const flagshipServices = services.filter((s) => s.flagship);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
