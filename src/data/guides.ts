/*
  The six authority / link-bait guides. Slugs match Build Spec section 7.
  Build order: the permit guide and the springs/BMAP guide are the backbone
  and are built first. The guides carry the bylined editorial persona and the
  authoritative outbound citations that are the site's Trust signal.
*/

export interface Guide {
  slug: string;
  title: string;
  navLabel: string;
  h1: string;
  /** Hand-tuned, unique meta description. */
  description: string;
  /** Short summary for guide cards and the trust block. */
  cardSummary: string;
  /** Backbone guides are surfaced most prominently. */
  backbone: boolean;
  order: number;
}

export const guides: Guide[] = [
  {
    slug: 'marion-county-septic-permit-guide',
    title: 'Marion County Septic Permit Guide',
    navLabel: 'Septic Permit Guide',
    h1: 'Marion County Septic Permit Guide (OSTDS)',
    description:
      'How septic (OSTDS) permits work in Marion County, FL: the current administering authority, site evaluation, soil testing, drainfield sizing, setbacks, and fees. Verify current rules with FDEP.',
    cardSummary:
      'The OSTDS permit process for Marion County: who administers it now, site evaluation, soil testing, setbacks, and fees.',
    backbone: true,
    order: 1,
  },
  {
    slug: 'springs-bmap-advanced-treatment-guide',
    title: 'Springs, BMAP, and Advanced Treatment Guide',
    navLabel: 'Springs & BMAP Guide',
    h1: 'Springs, BMAP Zones, and Advanced Septic Treatment in Marion County',
    description:
      'Why Silver Springs and Rainbow Springs protection zones (BMAPs) require enhanced nutrient-reducing (ENR) septic systems in Marion County, and what that means for new installs and replacements.',
    cardSummary:
      'Why spring-protection zones (BMAPs) require enhanced nutrient-reducing systems, and what that means for your property.',
    backbone: true,
    order: 2,
  },
  {
    slug: 'florida-drainfield-replacement-cost-guide',
    title: 'Florida Drainfield Replacement Cost Guide',
    navLabel: 'Drainfield Cost Guide',
    h1: 'Florida Drainfield Replacement Cost Guide',
    description:
      'What drainfield replacement actually costs in Florida, including the soil, system-type, permit, and engineering factors the national directories leave out. Typical ranges with sources.',
    cardSummary:
      'What drainfield replacement really costs in Florida, including the factors national directories leave out.',
    backbone: false,
    order: 3,
  },
  {
    slug: 'buying-rural-property-septic-marion-county',
    title: 'Buying Rural Property With a Septic System in Marion County',
    navLabel: 'Buying Rural Property',
    h1: 'Buying Rural Property With a Septic System in Marion County',
    description:
      'A practical guide for buyers and real-estate agents: how to evaluate a septic system, soils, and permits before buying rural or acreage property in Marion County, FL.',
    cardSummary:
      'A guide for buyers and agents: how to evaluate septic, soils, and permits before buying rural property.',
    backbone: false,
    order: 4,
  },
  {
    slug: 'septic-vs-sewer-marion-county',
    title: 'Septic vs Sewer in Marion County',
    navLabel: 'Septic vs Sewer',
    h1: 'Septic vs Sewer in Marion County, FL',
    description:
      'Where Marion County is on septic versus central sewer, what septic-to-sewer conversion means for owners, and how to tell what serves a given property.',
    cardSummary:
      'Where Marion County is on septic versus sewer, and what conversion programs mean for owners.',
    backbone: false,
    order: 5,
  },
  {
    slug: 'drainfield-failure-signs-and-lifespan',
    title: 'Drainfield Failure Signs and Lifespan',
    navLabel: 'Drainfield Failure & Lifespan',
    h1: 'Drainfield Failure: Warning Signs and Lifespan',
    description:
      'How long a Florida drainfield lasts, the early warning signs of drainfield failure, and what shortens its life. Practical guidance for Marion County property owners.',
    cardSummary:
      'How long a drainfield lasts, the warning signs of failure, and what shortens its life.',
    backbone: false,
    order: 6,
  },
];

export const backboneGuides = guides.filter((g) => g.backbone);

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
