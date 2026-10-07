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

/** Trust strip immediately beneath the hero. */
export const trustPoints: { icon: LucideIcon; label: string }[] = [
  { icon: BadgeCheck, label: 'Channel Partner, 10+ Years' },
  { icon: MapPin, label: 'Based in Dubai, Serving Worldwide' },
  { icon: Building, label: 'Mainland, Free Zone & Offshore' },
  { icon: LifeBuoy, label: 'End-to-End Support' },
];

/** Headline offers shown on the homepage. */
export const offers: {
  tag: string;
  title: string;
  price: string;
  note: string;
  points: string[];
  featured?: boolean;
}[] = [
  {
    tag: 'Lowest in the Market',
    title: 'Company Setup in the UAE',
    price: 'AED 10,800',
    note: 'We can offer AED 10,800/- lowest in the market.',
    points: [
      'Mainland, free zone and offshore options',
      'Guided by a Channel Partner with 10+ years of experience',
      'Licence, visa and bank account support available',
    ],
    featured: true,
  },
  {
    tag: 'Limited Time Offer',
    title: 'Company Set-Up in UAE',
    price: 'AED 6,000',
    note: 'Straight to business in 24 hours.',
    points: [
      'Fast-track company set-up',
      'Dedicated business advisers',
      'Call or WhatsApp +971 52 668 6449',
    ],
  },
];

/** Entity options listed in the original site's "Our Services". */
export const entityOptions: string[] = [
  'Limited liability company formation',
  'Freezone company formation in Dubai',
  'Branch and representative offices',
  'Offshore company formation in Dubai',
  'Dubai Mainland company setup',
  'Professional firms in Dubai',
  'Shareholding companies',
  'Joint venture companies',
];

/** Other services listed in the original site. */
export const otherServices: string[] = [
  'Cosmetic registration',
  'Dubai bank accounts',
  'Company inspection',
  'PRO & visa services',
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
      'A mainland company, also known as an on-shore company, is licensed by Dubai’s Department of Economic Development (DED).',
    points: [
      'Licensed by the Department of Economic Development',
      'Permitted to do business in the local market',
      'Permitted to do business outside the UAE without limitation',
    ],
    bestFor: 'Trading, services and businesses selling locally',
  },
  {
    name: 'Free Zone',
    href: '/free-zone-company-setup',
    summary:
      'Most UAE free zones are designed for international trade or trade between free zones, and are favoured by investors for 100% foreign ownership.',
    points: [
      '100% foreign ownership',
      'Customer privileges and exemption from taxes',
      'Low-cost, with a well-developed transport network and road connections',
      'Affordably priced, high-quality labour',
    ],
    bestFor: 'Consultancies, tech, media, trade and export businesses',
  },
  {
    name: 'Offshore',
    href: '/offshore-company-setup',
    summary:
      'Offshore (non-resident) companies are set up in Dubai or RAKEZ and are suited to international business only.',
    points: [
      'Ideal for conducting international business',
      'Cannot conduct business in the UAE',
      'Popular as a holding company owning shares in businesses abroad',
    ],
    bestFor: 'Holding structures and cross-border arrangements',
  },
];

/** Why LeadingZone: qualitative differentiators, no superlatives. */
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
    body: 'Licence, establishment card, visas, banking and tax registration handled as one coordinated sequence.',
  },
  {
    icon: ClipboardList,
    title: 'A Clear Process',
    body: 'You know what happens next, what we need from you, and what each stage depends on, set out before we begin.',
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
    body: 'Understand your business, activities and goals, including what you plan to do in the first year, not just on day one.',
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
    body: 'Help you move forward with visas, banking and tax registration, and keep renewals on track afterwards.',
    icon: Rocket,
  },
];

/** UAE focus section: emirate and jurisdiction coverage. */
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
    a: 'Yes. A significant part of the process can be progressed remotely, and we tell you upfront which steps require you to be present, typically the bank appointment, medical and Emirates ID biometrics. Many clients complete those in one visit.',
  },
  {
    q: 'What does a UAE company setup cost?',
    a: 'We can offer company setup from AED 10,800, the lowest in the market. The final cost depends on the jurisdiction, licence type, number of activities, facility and visa count, so after a short consultation we give you a written breakdown for your specific requirement, including the recurring renewal cost.',
  },
  {
    q: 'Do you support the company after it is formed?',
    a: 'Yes, that is the larger part of what we do. Licence renewals, visa processing and renewals, VAT and Corporate Tax registration, amendments and general PRO work all continue after launch.',
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
