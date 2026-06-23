/*
  Marion County town/area pages, rendered by src/pages/[town].astro.
  Slugs match Build Spec section 7 (root-level: /ocala/, /belleview/, ...).

  Every town carries genuinely UNIQUE, build-time-verified local data (see
  scratchpad/research-towns.md for sources). The template renders structure;
  the data carries unique substance. No two towns share body prose.

  Verified background: the I-75 corridor is the practical dividing line between
  the two BMAPs. East of I-75 = Silver Springs BMAP (St. Johns River WMD); west
  of I-75 = Rainbow Springs BMAP (Southwest Florida WMD). Both require enhanced
  nutrient-reducing (ENR) systems for new and replacement OSTDS inside their
  Priority Focus Areas (PFAs). Individual parcels must be confirmed against the
  FDEP PFA map; where a town's PFA status is not cleanly verifiable (Citra,
  Reddick), the copy says so rather than asserting it.

  Soil/seasonal-high-water-table data is regional (Candler/Arredondo/Astatula/
  Sparr series over Ocala Limestone karst); town-specific SHWT figures were not
  verifiable, so the copy points readers to the required site evaluation rather
  than inventing numbers.
*/

export type Bmap = 'silver-springs' | 'rainbow-springs' | 'both' | 'verify';
export type WaterDistrict = 'SJRWMD' | 'SWFWMD' | 'both';

export interface TownFact {
  label: string;
  value: string;
}

export interface TownSource {
  label: string;
  url: string;
}

export interface TownFaq {
  question: string;
  answer: string;
}

export interface Town {
  slug: string;
  name: string;
  /** Civic status. */
  kind: 'City' | 'Town' | 'Community';
  whereInCounty: string;
  /** Verified population label, or undefined when no clean figure exists. */
  population?: string;
  title: string;
  description: string;
  /** Short hero tagline. */
  tagline: string;
  /** Unique intro paragraphs. */
  intro: string[];
  /** Unique septic-demand profile paragraph. */
  septicProfile: string;
  bmap: Bmap;
  waterDistrict: WaterDistrict;
  /** 'confirmed' allows direct BMAP statements; 'verify' forces hedged copy. */
  bmapConfidence: 'confirmed' | 'verify';
  /** Unique BMAP / springs narrative. */
  bmapStatus: string[];
  /** Unique soil / water-table note. */
  soilNote: string;
  /** What is most in demand locally. */
  demand: string[];
  /** Fact box: 3 to 4 verified, area-specific facts. */
  facts: TownFact[];
  /** Town-specific FAQs (unique answers). */
  faqs: TownFaq[];
  /** Authoritative outbound citations shown on the page. */
  sources: TownSource[];
  ready: boolean;
}

export const towns: Town[] = [
  {
    slug: 'ocala',
    name: 'Ocala',
    kind: 'City',
    whereInCounty: 'Central Marion County (county seat)',
    population: '63,591 (2020 Census)',
    title: 'Septic Installation & Drainfield Replacement in Ocala, FL | Marion County Septic',
    description:
      'Get matched with a licensed septic contractor in Ocala, FL for new system installation, drainfield replacement, and advanced treatment. Ocala straddles two springsheds. Free quote.',
    tagline: 'The Horse Capital of the World, straddling two springsheds.',
    intro: [
      'Ocala is the county seat and the hub of Marion County, the fastest-growing part of one of the fastest-growing metros in Florida. The city core has municipal sewer, but the unincorporated areas around it, including the horse farms of the northwest Golden Corridor and the new subdivisions rising on former pasture, remain heavily dependent on septic.',
      'That mix of established neighborhoods and rapid new construction is why Ocala sees the full range of septic work, from brand-new systems on raw acreage to full drainfield replacements on aging systems.',
    ],
    septicProfile:
      'New construction on former farmland drives new-install demand, while older systems around the city core and in the surrounding county drive drainfield replacement. Properties near the springs or inside a Priority Focus Area may need an advanced, nutrient-reducing system.',
    bmap: 'both',
    waterDistrict: 'both',
    bmapConfidence: 'confirmed',
    bmapStatus: [
      'Ocala is the one town in the county that straddles both spring-protection plans. Interstate 75 runs through the city and marks the practical boundary: parcels east of I-75 fall in the Silver Springs BMAP (St. Johns River Water Management District), while parcels in western Ocala fall in the Rainbow Springs BMAP (Southwest Florida Water Management District).',
      'Both plans designate Priority Focus Areas where new and replacement septic systems must be enhanced nutrient-reducing (ENR) systems that cut total nitrogen by at least 65 percent. Because the line runs through the city, confirm your specific parcel against the FDEP Priority Focus Area map before assuming which rules apply.',
    ],
    soilNote:
      'Ocala sits on the Ocala Karst uplands, where well-drained sandy soils (such as the Candler and Arredondo series) lie over near-surface limestone. Drainage and the seasonal high water table vary lot by lot, so the OSTDS site evaluation, not a general map, determines how a system must be designed for your property.',
    demand: [
      'New septic systems for construction on former farmland and acreage',
      'Drainfield replacement in established neighborhoods and older county subdivisions',
      'Advanced treatment (ENR) systems for parcels inside a Priority Focus Area',
      'Real-estate inspections during the county home sales boom',
    ],
    facts: [
      { label: 'County role', value: 'County seat of Marion County' },
      { label: 'Population', value: '63,591 (2020 Census)' },
      { label: 'Identity', value: 'Horse Capital of the World, 1,200+ horse farms countywide' },
      { label: 'Springsheds', value: 'Straddles the Silver Springs and Rainbow Springs BMAPs at I-75' },
    ],
    faqs: [
      {
        question: 'Which springs protection rules apply to my Ocala property?',
        answer:
          'It depends on which side of Interstate 75 your parcel sits on. East of I-75 falls in the Silver Springs BMAP and west of I-75 falls in the Rainbow Springs BMAP. Both have Priority Focus Areas that require enhanced nutrient-reducing systems for new and replacement installs. Confirm your parcel on the FDEP Priority Focus Area map, and the contractor you are matched with can verify it during the site evaluation.',
      },
      {
        question: 'Do Ocala horse farms outside the city use septic?',
        answer:
          'Most do. While the City of Ocala has municipal sewer in its core, the surrounding unincorporated farmland and acreage, including the northwest Golden Corridor, typically relies on septic. New systems on these properties are sized for the home and soils on a permitted, case-by-case basis.',
      },
      {
        question: 'Who handles the permit and the work in Ocala?',
        answer:
          'The licensed contractor you are matched with. They handle the FDEP OSTDS permit, the soil and site evaluation, and the installation. Marion County Septic is a free matching service and does not perform septic work.',
      },
    ],
    sources: [
      { label: 'U.S. Census QuickFacts: Ocala', url: 'https://www.census.gov/quickfacts/fact/table/ocalacityflorida,marioncountyflorida/PST045222' },
      { label: 'Marion County: Horse Capital of the World', url: 'https://www.marionfl.org/our-county/horse-capital-of-the-world' },
      { label: 'FDEP: Springs Protection and BMAPs (OSTDS)', url: 'https://floridadep.gov/water/onsite-sewage/content/springs-protection-and-basin-management-action-plans-bmaps' },
    ],
    ready: true,
  },

  {
    slug: 'belleview',
    name: 'Belleview',
    kind: 'City',
    whereInCounty: 'Southern Marion County, about 9 miles south of Ocala',
    population: '5,413 (2020 Census)',
    title: 'Septic Installation & Drainfield Replacement in Belleview, FL | Marion County Septic',
    description:
      'Get matched with a licensed septic contractor in Belleview, FL for new installs, drainfield replacement, and advanced treatment. Belleview sits in the Silver Springs BMAP. Free quote.',
    tagline: 'A growing south Marion suburb inside the Silver Springs BMAP.',
    intro: [
      'Belleview is a small incorporated city about nine miles south of Ocala, first incorporated in 1885 and now part of the south Marion growth area. It blends an older town core with newer residential subdivisions spreading into the surrounding county.',
      'That growth, combined with aging systems on the edges of town, keeps both new installation and replacement work steady in the Belleview area.',
    ],
    septicProfile:
      'Newer subdivisions on the outskirts drive new-construction installs, while older homes around the city drive drainfield replacement. Belleview is actively working to reduce its reliance on aging septic systems as part of regional springs protection.',
    bmap: 'silver-springs',
    waterDistrict: 'SJRWMD',
    bmapConfidence: 'confirmed',
    bmapStatus: [
      'Belleview is named in FDEP planning documents as a city within the Silver Springs BMAP area (St. Johns River Water Management District), so it sits squarely inside the springshed where septic nutrient loading is a regulated concern.',
      'Inside the BMAP Priority Focus Area, new and replacement septic systems must be enhanced nutrient-reducing (ENR) systems. The City also operates its own wastewater treatment plant and, in 2025, was awarded state funds toward a $26 million expansion (from 1.0 to 1.2 million gallons per day) explicitly tied to Silver Springs BMAP goals of moving homes off aging septic.',
    ],
    soilNote:
      'Belleview sits on the sandy karst uplands of south-central Marion County. Drainage and the seasonal high water table differ from lot to lot, and parts of the area carry stormwater and floodplain considerations, so the required OSTDS site evaluation determines how any system must be designed.',
    demand: [
      'New septic systems for subdivisions expanding into the county',
      'Drainfield replacement for older homes around the city core',
      'Advanced treatment (ENR) systems inside the Silver Springs Priority Focus Area',
      'Septic inspections for the active south Marion resale market',
    ],
    facts: [
      { label: 'Incorporated', value: '1885' },
      { label: 'Population', value: '5,413 (2020 Census)' },
      { label: 'Location', value: 'About 9 miles south of Ocala' },
      { label: 'Springs plan', value: 'Silver Springs BMAP; $26M city WWTP expansion underway' },
    ],
    faqs: [
      {
        question: 'Does Belleview require advanced septic systems?',
        answer:
          'Belleview is inside the Silver Springs BMAP. Within the Priority Focus Area, new and replacement systems must be enhanced nutrient-reducing (ENR) systems that cut total nitrogen by at least 65 percent. A licensed contractor can confirm whether your specific parcel falls inside the Priority Focus Area during the site evaluation.',
      },
      {
        question: 'Belleview has a sewer plant. Am I on sewer or septic?',
        answer:
          'The City operates a wastewater treatment plant and is expanding it, but many properties in and around Belleview remain on septic, especially newer areas and homes outside the collection system. If you are unsure, the contractor you are matched with can confirm what serves your property.',
      },
      {
        question: 'How do I start a septic project in Belleview?',
        answer:
          'Tell us about your property using the quote form. We forward it to a licensed local septic contractor who handles the FDEP permit, the soil evaluation, and the installation, then contacts you for a free, no-obligation quote.',
      },
    ],
    sources: [
      { label: 'U.S. Census QuickFacts: Belleview', url: 'https://www.census.gov/quickfacts/fact/table/belleviewcityflorida/PST045225' },
      { label: 'Belleview wastewater plant expansion (WCJB, 2025)', url: 'https://www.wcjb.com/2025/07/02/state-lawmakers-award-belleview-1-million-wastewater-treatment-plant-expansion/' },
      { label: 'FDEP: Springs Protection and BMAPs (OSTDS)', url: 'https://floridadep.gov/water/onsite-sewage/content/springs-protection-and-basin-management-action-plans-bmaps' },
    ],
    ready: true,
  },

  {
    slug: 'dunnellon',
    name: 'Dunnellon',
    kind: 'City',
    whereInCounty: 'Southwestern Marion County, about 20 miles southwest of Ocala',
    population: '1,928 (2020 Census)',
    title: 'Septic Installation & Drainfield Replacement in Dunnellon, FL | Marion County Septic',
    description:
      'Get matched with a licensed septic contractor in Dunnellon, FL near Rainbow Springs. New installs, drainfield replacement, and ENR advanced treatment in the Rainbow Springs BMAP. Free quote.',
    tagline: 'Rainbow Springs country, where septic upgrades protect the river.',
    intro: [
      'Dunnellon sits in the southwestern corner of Marion County, about twenty miles from Ocala, where the Rainbow River rises at Rainbow Springs and flows nearly six miles to the Withlacoochee. Incorporated in 1891, it is the urban center of the Rainbow Springs springshed.',
      'Riverfront and springs-adjacent living defines the market here, and that proximity to the water makes responsible septic design more than a formality.',
    ],
    septicProfile:
      'The Village of Rainbow Springs, a cluster of eleven communities with more than 3,000 homes along the river, is largely on septic, which makes drainfield replacement and nutrient-reducing upgrades a recurring need. New construction on wooded and riverfront lots drives new installs.',
    bmap: 'rainbow-springs',
    waterDistrict: 'SWFWMD',
    bmapConfidence: 'confirmed',
    bmapStatus: [
      'Dunnellon is the primary urban center of the Rainbow Springs BMAP, administered through the Southwest Florida Water Management District. Septic systems are estimated to contribute roughly 20 percent of the nitrogen load reaching Rainbow Springs, which is why the BMAP targets onsite systems directly.',
      'Inside the Priority Focus Area, new and replacement septic systems must be enhanced nutrient-reducing (ENR) systems that cut total nitrogen by at least 65 percent. For riverfront and springs-adjacent lots, expect setbacks from surface water to factor heavily into the design.',
    ],
    soilNote:
      'This is active karst country. Limestone is shallow, the aquifer is close to the surface, and water tables near the Rainbow River and its tributaries can be very shallow. Those conditions make the OSTDS site evaluation and proper setbacks from surface water especially important here.',
    demand: [
      'Advanced treatment (ENR) systems for the Rainbow Springs Priority Focus Area',
      'Drainfield replacement across the Village of Rainbow Springs communities',
      'New septic systems for wooded and riverfront lots',
      'Septic inspections for riverfront and springs-adjacent home sales',
    ],
    facts: [
      { label: 'Incorporated', value: '1891' },
      { label: 'Population', value: '1,928 (2020 Census)' },
      { label: 'Setting', value: 'Headwaters of the Rainbow River, next to Rainbow Springs State Park' },
      { label: 'Springs plan', value: 'Rainbow Springs BMAP; septic is ~20% of the springs nitrogen load' },
    ],
    faqs: [
      {
        question: 'Do I need an advanced septic system near Rainbow Springs?',
        answer:
          'Very possibly. Dunnellon is the center of the Rainbow Springs BMAP, and inside the Priority Focus Area new and replacement systems must be enhanced nutrient-reducing (ENR) systems. A licensed contractor confirms your parcel status against the FDEP map and designs accordingly during the site evaluation.',
      },
      {
        question: 'What about setbacks for a riverfront lot in the Village of Rainbow Springs?',
        answer:
          'Florida rules require a drainfield to sit a minimum distance from surface water, among other setbacks. On riverfront and springs-adjacent lots, those setbacks can shape where and how a system is placed. The contractor you are matched with evaluates the lot and designs a compliant layout.',
      },
      {
        question: 'Is the Village of Rainbow Springs on septic?',
        answer:
          'Largely yes. The eleven communities along the river, with more than 3,000 homes, are a significant focus of the Rainbow Springs septic remediation effort. That makes drainfield replacement and ENR upgrades common projects in the area.',
      },
    ],
    sources: [
      { label: 'SWFWMD: Rainbow River', url: 'https://www.swfwmd.state.fl.us/watersheds/springscoast/rainbow-river' },
      { label: 'FDEP: Rainbow Springs BMAP', url: 'https://floridadep.gov/dear/water-quality-restoration/documents/rainbow-springs-basin-management-action-plan-bmap' },
      { label: 'FDEP: Springs Protection and BMAPs (OSTDS)', url: 'https://floridadep.gov/water/onsite-sewage/content/springs-protection-and-basin-management-action-plans-bmaps' },
    ],
    ready: true,
  },

  {
    slug: 'silver-springs',
    name: 'Silver Springs',
    kind: 'Community',
    whereInCounty: 'Central Marion County, immediately east of Ocala',
    population: '2,844 (2020 Census)',
    title: 'Septic Installation & Drainfield Replacement in Silver Springs, FL | Marion County Septic',
    description:
      'Get matched with a licensed septic contractor in Silver Springs, FL at the heart of the Silver Springs BMAP. New installs, drainfield replacement, and ENR advanced treatment. Free quote.',
    tagline: 'At the headwaters of the springs that name the whole BMAP.',
    intro: [
      'Silver Springs is an unincorporated community just east of Ocala, sitting at the headwaters of the Silver River beside Silver Springs State Park. It is the namesake of the Silver Springs BMAP, the spring-protection plan that governs septic rules across much of central Marion County.',
      'Living this close to a first-magnitude spring group means septic decisions here carry real water-quality weight, and the rules reflect it.',
    ],
    septicProfile:
      'The community itself is small and almost entirely on septic, with no municipal sewer. Nearby Silver Springs Shores, a much larger community to the southeast, is the county top priority for septic-to-sewer conversion, so the broader area sees a mix of replacements, upgrades, and conversions.',
    bmap: 'silver-springs',
    waterDistrict: 'SJRWMD',
    bmapConfidence: 'confirmed',
    bmapStatus: [
      'Silver Springs is at the heart of the Silver Springs and Upper Silver River BMAP, administered through the St. Johns River Water Management District. The springs are designated an Outstanding Florida Spring, and septic systems are a recognized source of nitrogen in the springshed.',
      'Inside the Priority Focus Area, new and replacement septic systems must be enhanced nutrient-reducing (ENR) systems that cut total nitrogen by at least 65 percent. Given the proximity to the spring vents, expect advanced treatment to be the default for many parcels here.',
    ],
    soilNote:
      'At the springs, the Floridan Aquifer reaches the surface, and the surrounding uplands carry the sandy karst soils typical of the area. Water tables near the Silver River corridor are shallow. The OSTDS site evaluation determines the design for any given lot.',
    demand: [
      'Advanced treatment (ENR) systems for parcels in the springshed Priority Focus Area',
      'Drainfield replacement for aging systems near the springs',
      'New septic systems on remaining buildable lots',
      'Guidance for owners weighing septic-to-sewer conversion nearby',
    ],
    facts: [
      { label: 'Status', value: 'Unincorporated community (CDP)' },
      { label: 'Population', value: '2,844 (2020 Census)' },
      { label: 'Setting', value: 'Headwaters of the Silver River at Silver Springs State Park' },
      { label: 'Springs plan', value: 'Namesake of the Silver Springs BMAP (Outstanding Florida Spring)' },
    ],
    faqs: [
      {
        question: 'Will a new system in Silver Springs have to be an ENR system?',
        answer:
          'Often yes. Silver Springs sits at the core of its namesake BMAP, and parcels inside the Priority Focus Area require enhanced nutrient-reducing (ENR) systems for new and replacement installs. A licensed contractor confirms your parcel status and designs a compliant system during the site evaluation.',
      },
      {
        question: 'What is the difference between Silver Springs and Silver Springs Shores?',
        answer:
          'Silver Springs is the small community at the springs themselves. Silver Springs Shores is a much larger residential area to the southeast and is the county top priority for septic-to-sewer conversion. If you live in the Shores, ask the contractor whether conversion or a new system is the better path for your lot.',
      },
      {
        question: 'Do you perform the septic work in Silver Springs?',
        answer:
          'No. Marion County Septic is a free matching service. We connect you with a licensed local contractor who handles the permit, the site evaluation, and the installation, and who provides your free quote.',
      },
    ],
    sources: [
      { label: 'FDEP: Silver Springs BMAP', url: 'https://floridadep.gov/dear/water-quality-restoration/documents/silver-springs-silver-springs-group-and-upper-silver-river' },
      { label: 'Florida State Parks: Silver Springs', url: 'https://www.floridastateparks.org/silversprings' },
      { label: 'Marion County: septic-to-sewer projects', url: 'https://utilities.marionfl.org/i-want-to/learn-about-septic-to-sewer-projects' },
    ],
    ready: true,
  },

  {
    slug: 'citra',
    name: 'Citra',
    kind: 'Community',
    whereInCounty: 'Northern Marion County, about 16 miles north of Ocala',
    population: undefined,
    title: 'Septic Installation & Drainfield Replacement in Citra, FL | Marion County Septic',
    description:
      'Get matched with a licensed septic contractor in Citra, FL, a rural community north of Ocala. New installs, drainfield replacement, and advanced treatment on acreage and farms. Free quote.',
    tagline: 'Historic citrus country and rural acreage north of Ocala.',
    intro: [
      'Citra is a historic rural community in northern Marion County, about sixteen miles north of Ocala along the corridor toward Gainesville. Founded in 1881 as part of a citrus-growing district, it keeps a quiet agricultural and equestrian character today, with farmhouses, groves, and acreage near Orange Lake.',
      'Rural lots and farm properties here are almost entirely on septic, so new installs and replacements are the typical projects.',
    ],
    septicProfile:
      'On rural acreage and farms, new systems are sized for the home and the soils on a permitted basis, and older systems eventually need drainfield replacement. Larger lots often give designers more room to site a conventional system, though soils still govern the design.',
    bmap: 'verify',
    waterDistrict: 'SWFWMD',
    bmapConfidence: 'verify',
    bmapStatus: [
      'Citra sits in northern Marion County, generally west of I-75, which places it on the Rainbow Springs side of the county BMAP divide. However, it lies well north of the Rainbow Springs core near the Alachua County line, and whether a given Citra parcel falls inside a designated Priority Focus Area is not something we can confirm from general maps.',
      'Because a Priority Focus Area designation is what triggers the enhanced nutrient-reducing (ENR) system requirement, confirm your specific parcel against the FDEP Priority Focus Area map. The licensed contractor you are matched with verifies this during the site evaluation rather than assuming it.',
    ],
    soilNote:
      'Northern Marion County soils are generally sandy, with well-drained uplands and lower, wetter areas near lakes and drainageways. Citra-specific water-table data varies by parcel, so the required OSTDS site evaluation, not a general description, sets the design.',
    demand: [
      'New septic systems for homes on rural acreage and farmland',
      'Drainfield replacement for older rural systems',
      'Site evaluation and design for large agricultural and equestrian parcels',
      'Septic guidance for buyers of rural and farm property',
    ],
    facts: [
      { label: 'Founded', value: '1881, in a historic citrus district' },
      { label: 'Setting', value: 'Rural, agricultural and equestrian, near Orange Lake' },
      { label: 'Location', value: 'About 16 miles north of Ocala toward Gainesville' },
      { label: 'Springs status', value: 'West of I-75; confirm Priority Focus Area status by parcel' },
    ],
    faqs: [
      {
        question: 'Does Citra fall under a springs protection BMAP?',
        answer:
          'Citra sits west of I-75, the side of the county associated with the Rainbow Springs BMAP, but it is far north of the springs and we cannot confirm from general maps whether a given parcel is inside a Priority Focus Area. Since the Priority Focus Area is what triggers the advanced-treatment requirement, confirm your parcel against the FDEP map. The contractor you are matched with verifies it during the site evaluation.',
      },
      {
        question: 'Is a conventional system allowed on a Citra farm lot?',
        answer:
          'It depends on the soils, the water table, and whether the parcel is inside a Priority Focus Area. Large rural lots often have room for a conventional drainfield, but only the site evaluation and permit determine what is allowed. A licensed contractor handles that process.',
      },
      {
        question: 'Can you help with septic on a property I am buying in Citra?',
        answer:
          'Yes. Tell us about the property using the quote form and we match you with a licensed local contractor who can inspect an existing system or design a new one, then provide a free, no-obligation quote.',
      },
    ],
    sources: [
      { label: 'FDEP: Springs Priority Focus Areas map', url: 'https://www.arcgis.com/apps/View/index.html?appid=1afdd97c67584c06840019241becde74' },
      { label: 'FDEP: Springs Protection and BMAPs (OSTDS)', url: 'https://floridadep.gov/water/onsite-sewage/content/springs-protection-and-basin-management-action-plans-bmaps' },
    ],
    ready: true,
  },

  {
    slug: 'ocklawaha',
    name: 'Ocklawaha',
    kind: 'Community',
    whereInCounty: 'Eastern Marion County, on the north shore of Lake Weir',
    population: '1,508 (2020 Census)',
    title: 'Septic Installation & Drainfield Replacement in Ocklawaha, FL | Marion County Septic',
    description:
      'Get matched with a licensed septic contractor in Ocklawaha, FL on Lake Weir. New installs, drainfield replacement, and advanced treatment where septic affects lake water quality. Free quote.',
    tagline: 'Lake Weir living, where septic and lake health are linked.',
    intro: [
      'Ocklawaha is a lakefront community on the north shore of Lake Weir in eastern Marion County, about eighteen miles southeast of Ocala. Large lots, lake access, and a quiet rural lifestyle define the area, which skews a little older than the county as a whole.',
      'Here the septic conversation is tied directly to the lake, which gives projects in this area an extra water-quality dimension.',
    ],
    septicProfile:
      'Lakefront and near-lake homes drive both drainfield replacement and nutrient-reducing upgrades, since the area is almost entirely on septic. New installs occur on remaining buildable lake-area and rural lots.',
    bmap: 'silver-springs',
    waterDistrict: 'SJRWMD',
    bmapConfidence: 'confirmed',
    bmapStatus: [
      'Ocklawaha sits east of I-75, placing it within the Silver Springs BMAP area (St. Johns River Water Management District). East of Silver Springs the aquifer is generally deeper and somewhat better protected by overlying clay, but that does not let the area off the hook.',
      'Lake Weir carries its own nutrient problem. The State has determined that roughly 17 percent of the lake nutrient load comes from about 2,081 septic tanks in the Lake Weir watershed, and Marion County is required to implement a remediation plan for the lake. So Ocklawaha owners face both springshed protection and a distinct lake-protection effort, and advanced treatment may be the right answer near the water.',
    ],
    soilNote:
      'Near Lake Weir, lots can have shallow water tables and sandy soils that move nutrients readily toward the lake through surface and shallow groundwater pathways. That is exactly why the OSTDS site evaluation and proper system selection matter so much on lake-area parcels.',
    demand: [
      'Drainfield replacement and nutrient-reducing upgrades on Lake Weir parcels',
      'Advanced treatment systems where lake protection calls for it',
      'New septic systems on remaining lake-area and rural lots',
      'Septic inspections for lakefront home sales',
    ],
    facts: [
      { label: 'Setting', value: 'North shore of Lake Weir' },
      { label: 'Population', value: '1,508 (2020 Census)' },
      { label: 'Lake Weir septic', value: '~2,081 septic tanks, ~17% of the lake nutrient load' },
      { label: 'Springs plan', value: 'Silver Springs BMAP, plus a separate Lake Weir remediation requirement' },
    ],
    faqs: [
      {
        question: 'Why does septic matter so much around Lake Weir?',
        answer:
          'Because the lake is impaired and septic is a measurable part of the problem. State analysis attributes about 17 percent of Lake Weir nutrient load to roughly 2,081 septic tanks in the watershed, and Marion County must implement a remediation plan. On lake-area lots, a nutrient-reducing system may be the responsible and, in some cases, required choice.',
      },
      {
        question: 'Is Ocklawaha in a springs BMAP too?',
        answer:
          'Yes. Ocklawaha is east of I-75, within the Silver Springs BMAP area. So a parcel here can face both springshed protection rules and the separate Lake Weir effort. A licensed contractor sorts out which requirements apply to your specific lot.',
      },
      {
        question: 'How do I get a quote for a lakefront septic project?',
        answer:
          'Use the quote form to tell us about your property. We match you with a licensed local contractor who evaluates the lot, handles the permit, and provides a free, no-obligation quote.',
      },
    ],
    sources: [
      { label: 'Save Lake Weir: septic and water quality', url: 'https://savelakeweir.com/septic/' },
      { label: 'FDEP: Springs Protection and BMAPs (OSTDS)', url: 'https://floridadep.gov/water/onsite-sewage/content/springs-protection-and-basin-management-action-plans-bmaps' },
    ],
    ready: true,
  },

  {
    slug: 'reddick',
    name: 'Reddick',
    kind: 'Town',
    whereInCounty: 'Northwestern Marion County, about 15 miles north of Ocala',
    population: '449 (2020 Census)',
    title: 'Septic Installation & Drainfield Replacement in Reddick, FL | Marion County Septic',
    description:
      'Get matched with a licensed septic contractor in Reddick, FL, horse country north of Ocala. New installs, drainfield replacement, and advanced treatment on farms and acreage. Free quote.',
    tagline: 'Small-town horse country in northwest Marion County.',
    intro: [
      'Reddick is one of Marion County smallest incorporated towns, with about 449 residents, set in the horse country of northwestern Marion County roughly fifteen miles north of Ocala. Incorporated in 1905, it kept its agricultural roots after the citrus freezes of the 1890s and is now defined by equestrian farms and rural residential land.',
      'On farms and acreage like this, septic is simply how wastewater is handled, so new systems and replacements are the everyday work.',
    ],
    septicProfile:
      'Equestrian farms and rural homesites rely on septic, with new installs on new homes and farm dwellings and drainfield replacement on older systems. Larger parcels often allow flexible siting, though soils and any Priority Focus Area status still govern the design.',
    bmap: 'verify',
    waterDistrict: 'SWFWMD',
    bmapConfidence: 'verify',
    bmapStatus: [
      'Reddick lies in northwestern Marion County, west of I-75, which is the Rainbow Springs side of the county BMAP divide. It sits well north of the Rainbow Springs core, though, and whether a particular Reddick parcel falls inside a designated Priority Focus Area is not something we can confirm from general maps.',
      'Since a Priority Focus Area designation is what triggers the enhanced nutrient-reducing (ENR) requirement, confirm your specific parcel against the FDEP Priority Focus Area map. The licensed contractor you are matched with verifies this during the site evaluation rather than assuming it.',
    ],
    soilNote:
      'Northwest Marion horse country generally sits on well-drained sandy uplands of the Ocala Karst, which is part of why the land suits farms and pasture. Even so, the seasonal high water table and soil profile vary by parcel, so the OSTDS site evaluation sets the actual design.',
    demand: [
      'New septic systems for homes and dwellings on equestrian farms',
      'Drainfield replacement for older rural systems',
      'Site evaluation and design for large acreage parcels',
      'Septic guidance for buyers of horse and farm property',
    ],
    facts: [
      { label: 'Incorporated', value: '1905' },
      { label: 'Population', value: '449 (2020 Census), one of the county smallest towns' },
      { label: 'Character', value: 'Northwest Marion horse country, farms and acreage' },
      { label: 'Springs status', value: 'West of I-75; confirm Priority Focus Area status by parcel' },
    ],
    faqs: [
      {
        question: 'Is Reddick subject to advanced septic requirements?',
        answer:
          'Reddick is west of I-75, the Rainbow Springs side of the county, but it sits far north of the springs and we cannot confirm from general maps whether a given parcel is inside a Priority Focus Area. Because the Priority Focus Area is what triggers the enhanced nutrient-reducing requirement, confirm your parcel against the FDEP map. The contractor you are matched with verifies it during the site evaluation.',
      },
      {
        question: 'I have a large farm parcel. Does that make septic easier?',
        answer:
          'Often the extra room helps with siting and setbacks, but the soils, the water table, and any Priority Focus Area status still determine what system is allowed. The site evaluation and permit settle the design, and a licensed contractor handles both.',
      },
      {
        question: 'Can you help with septic on horse property in Reddick?',
        answer:
          'Yes. Share the details using the quote form, and we match you with a licensed local contractor experienced with rural and acreage parcels who can provide a free, no-obligation quote.',
      },
    ],
    sources: [
      { label: 'Town of Reddick: history', url: 'https://townofreddick.com/town-history/' },
      { label: 'FDEP: Springs Priority Focus Areas map', url: 'https://www.arcgis.com/apps/View/index.html?appid=1afdd97c67584c06840019241becde74' },
    ],
    ready: true,
  },

  {
    slug: 'summerfield',
    name: 'Summerfield',
    kind: 'Community',
    whereInCounty: 'Southern Marion County, between Ocala and The Villages',
    population: '10,946 (2020 Census, CDP)',
    title: 'Septic Installation & Drainfield Replacement in Summerfield, FL | Marion County Septic',
    description:
      'Get matched with a licensed septic contractor in Summerfield, FL near The Villages. New installs, drainfield replacement, and advanced treatment outside the centralized communities. Free quote.',
    tagline: 'Fast-growing south Marion, where CDD utilities meet septic acreage.',
    intro: [
      'Summerfield is a fast-growing community in southern Marion County, sitting between Ocala and The Villages. It is a magnet for active-adult and retirement living, with a population that skews notably older than the county average.',
      'The septic picture here has two sides: large master-planned communities run on centralized utilities, while the surrounding unincorporated acreage relies on septic.',
    ],
    septicProfile:
      'Outside the master-planned districts, new homes on acreage need new systems and older systems need replacement. Buyers moving from a sewered community into a septic property often want an inspection and a clear understanding of what their system requires.',
    bmap: 'silver-springs',
    waterDistrict: 'SJRWMD',
    bmapConfidence: 'confirmed',
    bmapStatus: [
      'Summerfield sits east of I-75 in southern Marion County, within the Silver Springs BMAP area (St. Johns River Water Management District). FDEP planning documents extend the Silver Springs BMAP across this part of the county and into the Villages districts to the south.',
      'Inside the Priority Focus Area, new and replacement septic systems must be enhanced nutrient-reducing (ENR) systems. Whether a particular Summerfield parcel falls inside the Priority Focus Area should be confirmed against the FDEP map, which the contractor does during the site evaluation.',
    ],
    soilNote:
      'Southern Marion near the Lake Weir and Villages boundary transitions between sandy karst uplands and lakeland terrain, so soils and water tables vary across short distances. The OSTDS site evaluation, not a general map, determines how a system must be designed for a given lot.',
    demand: [
      'New septic systems for homes on unincorporated acreage',
      'Drainfield replacement on older systems outside the centralized communities',
      'Advanced treatment (ENR) systems inside the Silver Springs Priority Focus Area',
      'Septic inspections for buyers moving from sewered 55-plus communities',
    ],
    facts: [
      { label: 'Status', value: 'Unincorporated community (CDP)' },
      { label: 'Population', value: '10,946 (2020 Census, CDP); larger ZIP-area population' },
      { label: 'Setting', value: 'Between Ocala and The Villages; many active-adult communities' },
      { label: 'Springs plan', value: 'Silver Springs BMAP (east of I-75)' },
    ],
    faqs: [
      {
        question: 'Am I on septic if I live in or near Summerfield?',
        answer:
          'It depends on the community. Large master-planned districts such as On Top of the World are served by centralized utilities, not septic. The surrounding unincorporated acreage is largely on septic. If you are unsure, the contractor you are matched with can confirm what serves your property.',
      },
      {
        question: 'Does Summerfield require ENR advanced treatment systems?',
        answer:
          'Summerfield is inside the Silver Springs BMAP. Parcels within the Priority Focus Area require enhanced nutrient-reducing (ENR) systems for new and replacement installs. A licensed contractor confirms whether your specific parcel is inside the Priority Focus Area during the site evaluation.',
      },
      {
        question: 'I am buying a septic home after living on sewer. What should I do?',
        answer:
          'Start with an inspection. Tell us about the property using the quote form and we match you with a licensed local contractor who can inspect the existing system, explain its condition and maintenance needs, and provide a free, no-obligation quote.',
      },
    ],
    sources: [
      { label: 'FDEP: Silver Springs BMAP', url: 'https://floridadep.gov/dear/water-quality-restoration/documents/silver-springs-silver-springs-group-and-upper-silver-river' },
      { label: 'FDEP: Springs Protection and BMAPs (OSTDS)', url: 'https://floridadep.gov/water/onsite-sewage/content/springs-protection-and-basin-management-action-plans-bmaps' },
    ],
    ready: true,
  },
];

/** Town display names for form selects, etc. */
export const townNames = towns.map((t) => t.name);

export function getTown(slug: string): Town | undefined {
  return towns.find((t) => t.slug === slug);
}
