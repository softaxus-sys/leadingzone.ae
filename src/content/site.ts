/**
 * Site-wide constants: brand, contact details, navigation.
 *
 * ── UPDATE CONTACT DETAILS HERE ──────────────────────────────────────────────
 * The WhatsApp number below was taken from the current leadingzone.ae site.
 * The email, phone and office address are PLACEHOLDERS — replace them with the
 * verified details before going live. Every page reads from this file.
 */

export const site = {
  name: 'LeadingZone',
  legalName: 'LeadingZone Consultancy',
  tagline: 'UAE Business Setup & Corporate Services',
  description:
    'Business setup, corporate services and expert guidance for entrepreneurs and companies establishing their presence in the UAE.',
  url: 'https://www.leadingzone.ae',
  locale: 'en_AE',
} as const;

export const contact = {
  /** Verified from the existing leadingzone.ae website. */
  whatsapp: '+971 52 668 6449',
  whatsappHref: 'https://wa.me/971526686449',
  /** PLACEHOLDER — confirm before launch. */
  phone: '+971 52 668 6449',
  phoneHref: 'tel:+971526686449',
  /** PLACEHOLDER — confirm before launch. */
  email: 'info@leadingzone.ae',
  emailHref: 'mailto:info@leadingzone.ae',
  /** PLACEHOLDER — confirm before launch. */
  address: {
    line1: 'Business Bay',
    line2: 'Dubai, United Arab Emirates',
    full: 'Business Bay, Dubai, United Arab Emirates',
  },
  hours: [
    { days: 'Monday – Friday', time: '9:00 – 18:00 (GST)' },
    { days: 'Saturday', time: 'By appointment' },
    { days: 'Sunday', time: 'Closed' },
  ],
} as const;

/** Social profiles — set a value to `null` to hide the icon. */
export const social = {
  facebook: 'https://www.facebook.com/wwwleadingzoneae',
  instagram: 'https://www.instagram.com/wwwleadingzoneae',
  youtube: 'https://www.youtube.com/@wwwleadingzoneae_us',
  linkedin: null as string | null,
} as const;

export type NavChild = {
  label: string;
  href: string;
  description: string;
};

export type NavGroup = {
  heading: string;
  items: NavChild[];
};

export type NavItem = {
  label: string;
  href: string;
  /** When present the header renders a mega-menu instead of a plain link. */
  groups?: NavGroup[];
};

export const primaryNav: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    groups: [
      {
        heading: 'Business Setup',
        items: [
          {
            label: 'Mainland Company Formation',
            href: '/company-formation',
            description: 'Broad market access across the UAE.',
          },
          {
            label: 'Free Zone Company Formation',
            href: '/free-zone-company-setup',
            description: 'Sector-focused jurisdictions and flexible packages.',
          },
          {
            label: 'Offshore Company Setup',
            href: '/offshore-company-setup',
            description: 'International holding and asset structures.',
          },
        ],
      },
      {
        heading: 'Corporate Services',
        items: [
          {
            label: 'PRO Services',
            href: '/pro-services',
            description: 'Government documentation and approvals.',
          },
          {
            label: 'VAT Registration',
            href: '/vat-registration',
            description: 'Registration and ongoing VAT compliance.',
          },
          {
            label: 'Corporate Tax',
            href: '/corporate-tax',
            description: 'Registration, filing and advisory support.',
          },
          {
            label: 'Bank Account Opening',
            href: '/bank-account-opening',
            description: 'Navigate UAE corporate banking onboarding.',
          },
          {
            label: 'Immigration Services',
            href: '/immigration-services',
            description: 'Visas and residency for teams and families.',
          },
          {
            label: 'Virtual Ejari',
            href: '/virtual-ejari',
            description: 'Tenancy registration for eligible setups.',
          },
        ],
      },
    ],
  },
  { label: 'Company Formation', href: '/company-formation' },
  { label: 'Corporate Services', href: '/services#corporate-services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav = {
  businessSetup: [
    { label: 'Mainland Company Formation', href: '/company-formation' },
    { label: 'Free Zone Company Formation', href: '/free-zone-company-setup' },
    { label: 'Offshore Company Setup', href: '/offshore-company-setup' },
    { label: 'All Services', href: '/services' },
  ],
  corporateServices: [
    { label: 'PRO Services', href: '/pro-services' },
    { label: 'VAT Registration', href: '/vat-registration' },
    { label: 'Corporate Tax', href: '/corporate-tax' },
    { label: 'Bank Account Opening', href: '/bank-account-opening' },
    { label: 'Immigration Services', href: '/immigration-services' },
    { label: 'Virtual Ejari', href: '/virtual-ejari' },
  ],
  company: [
    { label: 'About LeadingZone', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  ],
} as const;
