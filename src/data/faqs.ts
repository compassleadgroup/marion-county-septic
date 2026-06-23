/*
  FAQ content. Answer text here is the SINGLE source for both the visible copy
  and the FAQPage JSON-LD, so they always match (required by COMPLIANCE_STANDARDS.md).
  All answers use neutral "licensed contractor" framing and make the marketing /
  matching-service nature plain. No first-person work claims. No em dashes.
*/
import type { FaqItem } from '../lib/schema';

export const homeFaqs: FaqItem[] = [
  {
    question: 'Is Marion County Septic a septic contractor?',
    answer:
      'No. Marion County Septic is a free marketing service operated by Compass Camper LLC. We connect Marion County property owners with independent, licensed local septic contractors. We do not perform septic work. The contractor you are matched with handles licensing, permitting, and installation.',
  },
  {
    question: 'How does the matching service work?',
    answer:
      'Tell us about your property and project using the quote form. We forward your request to a licensed local septic contractor who can fulfill it. The contractor contacts you to schedule a free, no-obligation quote.',
  },
  {
    question: 'How much does it cost to use Marion County Septic?',
    answer:
      'Nothing. The service is free for property owners, and you are never obligated to hire the contractor you are matched with.',
  },
  {
    question: 'What kinds of septic projects do you help with?',
    answer:
      'Planned, permitted work: new septic system installation, full drainfield replacement, aerobic and advanced treatment (ENR) systems, septic for new construction, and real-estate septic inspections. For emergency pumping or a backup, contact a local company directly.',
  },
  {
    question: 'Who handles the septic permit and the work?',
    answer:
      'The licensed contractor you are matched with. In Florida, onsite sewage (OSTDS) permits for Marion County are administered by the Florida Department of Environmental Protection (FDEP) as of July 1, 2025. Your contractor manages the permit, site evaluation, and installation.',
  },
  {
    question: 'Are the contractors licensed and insured?',
    answer:
      "We match you with licensed local septic contractors. Always confirm the contractor's current Florida license and insurance before work begins. Contractor license numbers are available upon request.",
  },
];
