import {
  BadgeCheck,
  Building,
  ClipboardList,
  Compass,
  Globe,
  Handshake,
  Landmark,
  LifeBuoy,
  MapPin,
  MessagesSquare,
  Rocket,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';

/** Trust strip immediately beneath the hero. Qualitative only — no invented figures. */
export const trustPoints: { icon: LucideIcon; label: string }[] = [
  { icon: MapPin, label: 'UAE Business Specialists' },
  { icon: LifeBuoy, label: 'End-to-End Support' },
  { icon: Building, label: 'Mainland & Free Zone Expertise' },
  { icon: Compass, label: 'Personalised Business Guidance' },
];

/** The three jurisdiction routes, shown on the homepage and /company-formation. */
export const structures: {
  name: string;
  href: string;
  summary: string;
  points: string[];
  bestFor: string;
}[] = [
  {
    name: 'Mainland',
    href: '/company-formation',
    summary:
      'For businesses seeking broad market access and operational flexibility within the UAE.',
    points: [
      'Direct access to the UAE domestic market',
      'Licensed by the emirate’s economic department',
      'Scales with branches, activities and visa quota',
    ],
    bestFor: 'Trading, services and businesses selling locally',
  },
  {
    name: 'Free Zone',
    href: '/free-zone-company-setup',
    summary:
      'For entrepreneurs looking for specialised business ecosystems, flexible setup options and sector-focused jurisdictions.',
    points: [
      'Dozens of zones with distinct sector focuses',
      'Flexi-desk through to office and warehouse options',
      'Visa allocation tied to the facility you take',
    ],
    bestFor: 'Consultancies, tech, media, trade and export businesses',
  },
  {
    name: 'Offshore',
    href: '/offshore-company-setup',
    summary:
      'For international business structures where an offshore setup is appropriate.',
    points: [
      'Used for international holding and asset ownership',
      'Not intended for local UAE trading activity',
      'No residence visa eligibility in most cases',
    ],
    bestFor: 'Holding structures and cross-border arrangements',
  },
];

/** Why LeadingZone — qualitative differentiators, no superlatives. */
export const benefits: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: MapPin,
    title: 'UAE Market Knowledge',
    body: 'Practical familiarity with mainland and free zone jurisdictions, and how licensing, visas and banking actually interact in each.',
  },
  {
    icon: MessagesSquare,
    title: 'Personalised Guidance',
    body: 'We start with your activities and objectives, not a pre-packaged bundle. The recommendation follows the business.',
  },
  {
    icon: LifeBuoy,
    title: 'End-to-End Assistance',
    body: 'Licence, establishment card, visas, Ejari, banking and tax registration handled as one coordinated sequence.',
  },
  {
    icon: ClipboardList,
    title: 'A Clear Process',
    body: 'You know what happens next, what we need from you, and what each stage depends on — set out before we begin.',
  },
  {
    icon: ShieldCheck,
    title: 'Ongoing Corporate Support',
    body: 'Renewals, amendments and compliance deadlines tracked after launch, so nothing lapses quietly in the background.',
  },
  {
    icon: Globe,
    title: 'International Client Support',
    body: 'Comfortable working across time zones with founders relocating to the UAE or setting up from abroad.',
  },
];

/** Four-step engagement process. */
export const processSteps: {
  number: string;
  title: string;
  body: string;
  icon: LucideIcon;
}[] = [
  {
    number: '01',
    title: 'Consultation',
    body: 'Understand your business, activities and goals — including what you plan to do in the first year, not just on day one.',
    icon: MessagesSquare,
  },
  {
    number: '02',
    title: 'Structure & Jurisdiction',
    body: 'Identify the appropriate setup route, weighing mainland, free zone and offshore against your activities and budget.',
    icon: Compass,
  },
  {
    number: '03',
    title: 'Documentation & Application',
    body: 'Prepare and coordinate the required documentation, approvals and submissions with the relevant authorities.',
    icon: ClipboardList,
  },
  {
    number: '04',
    title: 'Launch & Ongoing Support',
    body: 'Help you move forward with visas, banking and tax registration — and keep renewals on track afterwards.',
    icon: Rocket,
  },
];

/** UAE focus section — emirate / jurisdiction coverage. */
export const uaeLocations: { name: string; body: string }[] = [
  {
    name: 'Dubai',
    body: 'Mainland licensing through Dubai’s economic department alongside a wide range of Dubai-based free zones.',
  },
  {
    name: 'Abu Dhabi',
    body: 'Mainland and free zone options in the capital, including sector-focused jurisdictions.',
  },
  {
    name: 'Northern Emirates',
    body: 'Cost-efficient free zone routes across Sharjah, Ajman, RAK, Fujairah and Umm Al Quwain.',
  },
  {
    name: 'GCC Expansion',
    body: 'Support for businesses using a UAE entity as the base for wider regional activity.',
  },
];

/** International audiences the firm regularly works with. */
export const internationalMarkets: string[] = [
  'United Kingdom',
  'Pakistan',
  'India',
  'European Union',
  'United States',
  'GCC',
  'Africa',
  'Southeast Asia',
];

export const internationalPoints: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Globe,
    title: 'Set up before you relocate',
    body: 'Much of the groundwork can begin while you are still abroad, so the in-person steps are compressed into a single trip where possible.',
  },
  {
    icon: BadgeCheck,
    title: 'Document attestation guidance',
    body: 'Clear instruction on what needs attesting in your home country, and in what order, before it reaches the UAE.',
  },
  {
    icon: Handshake,
    title: 'Working across time zones',
    body: 'Calls scheduled around where you are, with written follow-ups so nothing depends on catching each other live.',
  },
  {
    icon: Landmark,
    title: 'Banking expectations set early',
    body: 'An honest read on how your profile is likely to be received by UAE banks before you commit to a structure.',
  },
];

/** Homepage FAQs. Service-specific questions live on their own pages. */
export const homeFaqs: { q: string; a: string }[] = [
  {
    q: 'How do I know whether I need a mainland or free zone licence?',
    a: 'It comes down to where your customers are and what you will be doing. If you need to sell directly into the UAE market or work with government entities, mainland is usually the route. If your work is international, sector-specific or service-based, a free zone may fit better and often costs less to run. We compare both against your actual plans in the first consultation.',
  },
  {
    q: 'Can you help if I am not yet in the UAE?',
    a: 'Yes. A significant part of the process can be progressed remotely, and we tell you upfront which steps require you to be present — typically the bank appointment, medical and Emirates ID biometrics. Many clients complete those in one visit.',
  },
  {
    q: 'What does a UAE company setup cost?',
    a: 'Cost depends on the jurisdiction, licence type, number of activities, facility and visa count. Rather than quote a headline figure that changes once the details emerge, we give you a written breakdown for your specific requirement after the consultation, including the recurring renewal cost.',
  },
  {
    q: 'Do you support the company after it is formed?',
    a: 'Yes — that is the larger part of what we do. Licence renewals, visa processing and renewals, Ejari, VAT and Corporate Tax registration, amendments and general PRO work all continue after launch.',
  },
  {
    q: 'Is LeadingZone a government authority?',
    a: 'No. LeadingZone is a private business setup and corporate services consultancy. We assist clients in preparing applications and dealing with the relevant government authorities and free zone bodies, but we are independent of them and hold no regulatory power. All approvals and decisions rest with the issuing authority.',
  },
  {
    q: 'Can you guarantee my licence or bank account will be approved?',
    a: 'No, and we would be cautious of any consultancy that does. Approvals sit with the relevant authority or bank. What we can do is make sure your application is complete, accurate and well presented, and tell you honestly where we think it is weak.',
  },
];
