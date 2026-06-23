/*
  Marion County town/area pages, rendered dynamically by src/pages/[town].astro.
  Slugs match Build Spec section 7 (root-level: /ocala/, /belleview/, ...).

  IMPORTANT: every town page must carry genuinely UNIQUE local data (soil,
  water table, springs/BMAP zone status, property character) or it does not
  ship. The rich `local` fields below are populated from build-time research
  (see scratchpad/research-towns.md) in the data-layer phase. This file
  currently holds the verified skeleton (identity + BMAP/springshed) used by
  navigation, the locations hub, the quote form, and the sitemap.

  Verified background (research-towns.md): the I-75 corridor is the practical
  BMAP dividing line. East of I-75 falls in the Silver Springs BMAP (St. Johns
  River WMD); west of I-75 falls in the Rainbow Springs BMAP (Southwest Florida
  WMD). Both BMAPs require enhanced nutrient-reducing (ENR) systems for new and
  replacement OSTDS in their Priority Focus Areas. Confirm any individual
  parcel's PFA status with FDEP.
*/

export type Bmap = 'silver-springs' | 'rainbow-springs' | 'both' | 'verify';

export interface Town {
  slug: string;
  /** Display name used in nav, headings, and the form select. */
  name: string;
  /** Primary BMAP / springshed association (verify individual parcels). */
  bmap: Bmap;
  /** Whether full unique-data content is ready to ship the page. */
  ready: boolean;
}

export const towns: Town[] = [
  { slug: 'ocala', name: 'Ocala', bmap: 'both', ready: false },
  { slug: 'belleview', name: 'Belleview', bmap: 'silver-springs', ready: false },
  { slug: 'dunnellon', name: 'Dunnellon', bmap: 'rainbow-springs', ready: false },
  { slug: 'silver-springs', name: 'Silver Springs', bmap: 'silver-springs', ready: false },
  { slug: 'citra', name: 'Citra', bmap: 'verify', ready: false },
  { slug: 'ocklawaha', name: 'Ocklawaha', bmap: 'silver-springs', ready: false },
  { slug: 'reddick', name: 'Reddick', bmap: 'verify', ready: false },
  { slug: 'summerfield', name: 'Summerfield', bmap: 'silver-springs', ready: false },
];

/** Town display names for form selects, etc. */
export const townNames = towns.map((t) => t.name);

export function getTown(slug: string): Town | undefined {
  return towns.find((t) => t.slug === slug);
}
