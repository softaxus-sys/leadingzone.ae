import {
  Boxes,
  Building2,
  Calculator,
  FileCheck2,
  Globe2,
  KeyRound,
  Landmark,
  Plane,
  Receipt,
  type LucideIcon,
} from 'lucide-react';

export type ServiceGroup = 'setup' | 'corporate';

export type Service = {
  slug: string;
  group: ServiceGroup;
  icon: LucideIcon;
  /** Short label used in cards and navigation. */
  title: string;
  /** One-line summary shown on the services grid. */
  cardSummary: string;
  eyebrow: string;
  heroTitle: string;
  heroLead: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  highlights: { title: string; body: string }[];
  includes: string[];
  steps: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: 'company-formation',
    group: 'setup',
    icon: Building2,
    title: 'Mainland Company Formation',
    cardSummary:
      'Launch your UAE business with the right structure, jurisdiction and licensing guidance.',
    eyebrow: 'Business Setup',
    heroTitle: 'Mainland Company Formation in the UAE',
    heroLead:
      'A mainland licence gives your company broad access to the UAE market and the flexibility to trade, tender and operate across the Emirates. We help you choose the structure, activities and licensing route that fit what you actually plan to do.',
    metaTitle: 'Mainland Company Formation in Dubai & UAE',
    metaDescription:
      'Mainland company formation support in Dubai and across the UAE — structure selection, business activities, licensing and documentation guidance from LeadingZone.',
    intro: [
      'A UAE mainland company is licensed by the relevant emirate’s economic department and is generally the route chosen by businesses that want to serve the local market directly, work with government entities, or open offices and branches across the country.',
      'The right setup depends on your planned activities, shareholding, office requirements and visa needs. We work through those details with you first, so the licence you end up with matches the business you intend to run — not a generic package.',
    ],
    highlights: [
      {
        title: 'Broad market access',
        body: 'Trade within the UAE market and work with both private and public sector clients, subject to your approved activities.',
      },
      {
        title: 'Activity-led structuring',
        body: 'Your licence classification is driven by what your business does. We map activities before recommending a jurisdiction.',
      },
      {
        title: 'Scales with the team',
        body: 'Mainland structures can support growing visa quotas and additional branches as the business expands.',
      },
    ],
    includes: [
      'Initial consultation on activities, ownership and objectives',
      'Guidance on legal form and licence category',
      'Trade name reservation and initial approval coordination',
      'Memorandum and incorporation document preparation support',
      'Office and tenancy requirement guidance, including Ejari where applicable',
      'Coordination of licence issuance and establishment card',
      'Onward support for visas, banking and tax registration',
    ],
    steps: [
      {
        title: 'Discovery',
        body: 'We review your business activities, shareholders, budget and timeline to understand the real requirement.',
      },
      {
        title: 'Structure & activities',
        body: 'We recommend the legal form, licence type and activity list that fit your plans, and explain the trade-offs.',
      },
      {
        title: 'Documentation & submission',
        body: 'We prepare and coordinate the paperwork, approvals and submissions with the relevant authorities.',
      },
      {
        title: 'Licence & next steps',
        body: 'Once the licence is issued we help you move on to establishment card, visas, banking and tax registration.',
      },
    ],
    faqs: [
      {
        q: 'What is the difference between mainland and free zone?',
        a: 'Broadly, a mainland licence is issued by an emirate’s economic department and is typically chosen for direct access to the UAE market, while a free zone licence is issued by a specific free zone authority and suits businesses whose activities sit naturally within that zone’s ecosystem. The right choice depends on your activities, clients and operating model — we walk you through both.',
      },
      {
        q: 'Do I need a local partner for a mainland company?',
        a: 'Ownership rules depend on the activity and the emirate, and they have changed considerably in recent years. Many activities now permit full foreign ownership. We confirm the current position for your specific activity rather than relying on general assumptions.',
      },
      {
        q: 'Do I need a physical office?',
        a: 'Mainland licences generally carry a premises requirement, though the form it takes varies by activity and emirate. We explain the options available for your case, including what that means for Ejari and visa quota.',
      },
      {
        q: 'How long does mainland formation take?',
        a: 'Timelines depend on the activity, approvals required and how quickly documents are provided. We give you a realistic estimate for your case at the consultation stage rather than a headline figure.',
      },
    ],
    related: ['free-zone-company-setup', 'pro-services', 'bank-account-opening'],
  },
  {
    slug: 'free-zone-company-setup',
    group: 'setup',
    icon: Boxes,
    title: 'Free Zone Company Formation',
    cardSummary:
      'Explore suitable UAE free zones for your business activities and objectives.',
    eyebrow: 'Business Setup',
    heroTitle: 'Free Zone Company Formation',
    heroLead:
      'The UAE has dozens of free zones, each with its own activity list, facilities, visa allocation and cost base. We help you shortlist the zones that genuinely suit your business rather than the one with the loudest marketing.',
    metaTitle: 'Free Zone Company Setup in Dubai & the UAE',
    metaDescription:
      'Free zone company formation guidance across UAE jurisdictions — zone selection, licence types, visa allocation and documentation support from LeadingZone.',
    intro: [
      'Free zones are designated jurisdictions with their own registration authority and rules. Many are built around a sector — trade and logistics, media, technology, healthcare, commodities, education — and the fit between your activity and the zone matters more than the headline package price.',
      'We compare the zones that are realistic for your activities on the factors that actually affect you: permitted activities, facility and desk options, visa allocation, renewal costs, banking reputation and how the zone is viewed by the counterparties you will be dealing with.',
    ],
    highlights: [
      {
        title: 'Zone shortlisting',
        body: 'A like-for-like comparison of the free zones that genuinely permit and suit your activities.',
      },
      {
        title: 'Flexible facility options',
        body: 'From flexi-desk arrangements through to offices and warehousing, matched to your visa and operational needs.',
      },
      {
        title: 'Sector ecosystems',
        body: 'Several zones cluster related businesses together, which can matter for partners, talent and credibility.',
      },
    ],
    includes: [
      'Free zone comparison based on your activities and budget',
      'Licence type and activity selection guidance',
      'Name reservation and initial approval coordination',
      'Preparation of incorporation and shareholder documentation',
      'Facility, flexi-desk and visa allocation guidance',
      'Licence issuance and establishment card coordination',
      'Handover to banking, visa and tax registration support',
    ],
    steps: [
      {
        title: 'Requirements review',
        body: 'We capture your activities, expected headcount, facility needs and budget.',
      },
      {
        title: 'Zone shortlist',
        body: 'You receive a clear comparison of suitable zones with the trade-offs set out plainly.',
      },
      {
        title: 'Application & documents',
        body: 'We prepare and submit the incorporation pack and manage the back-and-forth with the authority.',
      },
      {
        title: 'Licence & operations',
        body: 'With the licence issued, we support establishment card, visas, banking and compliance registrations.',
      },
    ],
    faqs: [
      {
        q: 'Which free zone should I choose?',
        a: 'There is no single best zone. The right answer depends on your activity, where your clients are, how many visas you need, your facility requirements and your budget over the first few renewal cycles. We give you a shortlist with reasoning, not a single recommendation you cannot interrogate.',
      },
      {
        q: 'Can a free zone company trade inside the UAE market?',
        a: 'Free zone companies operate primarily within their zone and internationally. Serving the wider UAE market can involve additional arrangements depending on the activity. If local market access is central to your plan, we will say so and discuss whether a mainland licence is the better fit.',
      },
      {
        q: 'How many visas can I get?',
        a: 'Visa allocation is tied to the zone and the facility you take. A flexi-desk typically carries a smaller allocation than a leased office. We confirm the allocation for each shortlisted option so there are no surprises.',
      },
      {
        q: 'Do I need to be in the UAE to set up?',
        a: 'Some steps can be handled remotely and others may require attendance or attested documents, depending on the zone and your nationality. We set out exactly what is needed from you and when.',
      },
    ],
    related: ['company-formation', 'offshore-company-setup', 'immigration-services'],
  },
  {
    slug: 'offshore-company-setup',
    group: 'setup',
    icon: Globe2,
    title: 'Offshore Company Setup',
    cardSummary:
      'Professional assistance for international business structures and offshore incorporation.',
    eyebrow: 'Business Setup',
    heroTitle: 'Offshore Company Setup',
    heroLead:
      'Offshore structures serve a specific purpose — typically international holding, asset ownership or cross-border trade rather than local UAE operations. We help you understand whether an offshore entity is genuinely appropriate before you commit.',
    metaTitle: 'Offshore Company Setup in the UAE',
    metaDescription:
      'Offshore company incorporation support for international structures — suitability assessment, documentation and registered agent coordination from LeadingZone.',
    intro: [
      'An offshore company is an international business structure registered in a jurisdiction that permits it, usually without the right to conduct business locally or to sponsor residence visas. It is a legitimate and common vehicle for holding, but it is not a substitute for a trading licence.',
      'We are direct about this: offshore is the right answer far less often than it is sold. Where it does fit — international holding, group structuring, ownership of qualifying assets — we handle the incorporation carefully and explain the substance, banking and reporting realities up front.',
    ],
    highlights: [
      {
        title: 'Suitability first',
        body: 'We assess whether an offshore entity actually serves your purpose before recommending one.',
      },
      {
        title: 'Holding & asset structures',
        body: 'Commonly used for international holding arrangements and qualifying asset ownership.',
      },
      {
        title: 'Realistic banking guidance',
        body: 'Offshore entities face closer banking scrutiny. We set expectations honestly rather than overpromising.',
      },
    ],
    includes: [
      'Suitability assessment against your commercial objectives',
      'Jurisdiction and structure guidance',
      'Name reservation and incorporation documentation',
      'Shareholder, director and beneficial ownership paperwork',
      'Registered agent and registered office coordination',
      'Certificate of incorporation and constitutional documents',
      'Guidance on banking, substance and ongoing renewal obligations',
    ],
    steps: [
      {
        title: 'Objectives review',
        body: 'We establish what you are trying to achieve and whether offshore is the right instrument.',
      },
      {
        title: 'Structure design',
        body: 'We outline the proposed structure, ownership and the practical implications of each choice.',
      },
      {
        title: 'Incorporation',
        body: 'Documents are prepared, verified and filed through the registered agent.',
      },
      {
        title: 'Post-incorporation',
        body: 'We support banking introductions where feasible and explain renewal and reporting duties.',
      },
    ],
    faqs: [
      {
        q: 'Can an offshore company get UAE residence visas?',
        a: 'Generally no. Offshore entities typically do not carry visa eligibility. If residency is part of your objective, a free zone or mainland structure is the relevant route and we will tell you so.',
      },
      {
        q: 'Can an offshore company trade in the UAE?',
        a: 'Offshore companies are not intended for local trading activity. They are used for international business and holding purposes. Local operations require an onshore licence.',
      },
      {
        q: 'Is an offshore company a way to avoid tax?',
        a: 'No. We do not advise on or assist with tax evasion. Offshore structures carry their own reporting, substance and disclosure obligations, and your position also depends on the rules of your country of residence. We recommend taking qualified tax advice alongside the incorporation.',
      },
      {
        q: 'How difficult is it to open a bank account?',
        a: 'Banks apply close scrutiny to offshore entities and many decline them. We are upfront about this and will discuss whether an onshore structure would serve you better if banking is critical.',
      },
    ],
    related: ['free-zone-company-setup', 'company-formation', 'corporate-tax'],
  },
  {
    slug: 'pro-services',
    group: 'corporate',
    icon: FileCheck2,
    title: 'PRO Services',
    cardSummary:
      'Government documentation, visa processing and ongoing administrative support.',
    eyebrow: 'Corporate Services',
    heroTitle: 'PRO Services & Government Liaison',
    heroLead:
      'Licence renewals, amendments, attestations, labour and immigration paperwork — the recurring administration that keeps a UAE company in good standing. We handle it so your team can stay focused on the business.',
    metaTitle: 'PRO Services in Dubai & the UAE',
    metaDescription:
      'Public Relations Officer (PRO) services in the UAE — licence renewals, amendments, document attestation, labour and immigration processing support from LeadingZone.',
    intro: [
      'PRO work is the day-to-day interface between a company and the government departments it depends on. It is rarely complicated in isolation, but it is procedural, deadline-driven and unforgiving of small errors — a mismatched name, an expired attestation, a missed renewal window.',
      'We act as an extension of your admin function: tracking what is due, preparing documents correctly the first time, and dealing with the counters and portals on your behalf.',
    ],
    highlights: [
      {
        title: 'Deadline tracking',
        body: 'Licence, establishment card and visa expiries monitored so renewals do not creep up on you.',
      },
      {
        title: 'Document accuracy',
        body: 'Paperwork prepared and checked against current requirements before it is submitted.',
      },
      {
        title: 'One point of contact',
        body: 'A consistent contact who knows your file, rather than starting over with each request.',
      },
    ],
    includes: [
      'Trade licence renewal and amendment processing',
      'Establishment card issuance and renewal',
      'Company documentation amendments and notarisation support',
      'Document attestation and legal translation coordination',
      'Labour and immigration file management',
      'Employment visa, renewal and cancellation processing',
      'Ongoing compliance calendar and reminders',
    ],
    steps: [
      {
        title: 'File review',
        body: 'We review your existing company documents and map out what is due and when.',
      },
      {
        title: 'Scope agreement',
        body: 'We agree which tasks we handle on an ongoing basis and which are on request.',
      },
      {
        title: 'Processing',
        body: 'Documents are prepared, submitted and followed up through to completion.',
      },
      {
        title: 'Ongoing support',
        body: 'We track upcoming deadlines and flag them ahead of time so nothing lapses.',
      },
    ],
    faqs: [
      {
        q: 'Do I need PRO services if my company is small?',
        a: 'Not necessarily — but many small companies find the recurring administration disproportionately time-consuming. PRO support can be engaged for specific tasks rather than a full retainer if that suits you better.',
      },
      {
        q: 'Can you handle renewals for a company you did not set up?',
        a: 'Yes. We can take over an existing file. We start with a review of your current documents and standing so we know exactly what we are picking up.',
      },
      {
        q: 'What is document attestation?',
        a: 'Attestation is the process of having documents — degrees, marriage certificates, company papers — verified so they are accepted by UAE authorities. Requirements vary by document type and country of origin, and we coordinate the steps for you.',
      },
      {
        q: 'Do you handle labour contracts and WPS?',
        a: 'We support the documentation and processing around employment files. For specialist payroll or legal advice we will tell you where a qualified specialist should be involved.',
      },
    ],
    related: ['immigration-services', 'virtual-ejari', 'company-formation'],
  },
  {
    slug: 'vat-registration',
    group: 'corporate',
    icon: Receipt,
    title: 'VAT Registration',
    cardSummary: 'VAT registration and compliance guidance for UAE businesses.',
    eyebrow: 'Corporate Services',
    heroTitle: 'VAT Registration & Compliance',
    heroLead:
      'Understand whether your business needs to register for VAT, get registered correctly, and keep filings and records in order once you are.',
    metaTitle: 'VAT Registration Services in the UAE',
    metaDescription:
      'UAE VAT registration and compliance support — threshold assessment, Federal Tax Authority registration, invoicing and return filing guidance from LeadingZone.',
    intro: [
      'VAT applies to most goods and services supplied in the UAE. Registration is mandatory once taxable supplies pass the prescribed threshold, and voluntary registration is available below it — which is sometimes advantageous and sometimes not.',
      'We assess your position, handle the registration, and make sure you understand the practical obligations that follow: how to invoice, what records to keep, and when returns fall due.',
    ],
    highlights: [
      {
        title: 'Threshold assessment',
        body: 'A clear view of whether registration is mandatory, voluntary or not yet required for your business.',
      },
      {
        title: 'Correct first filing',
        body: 'Guidance on invoicing format, input recovery and record-keeping before your first return is due.',
      },
      {
        title: 'Ongoing compliance',
        body: 'Support with periodic returns and amendments so deadlines are met consistently.',
      },
    ],
    includes: [
      'Assessment of registration obligation and timing',
      'Federal Tax Authority registration submission',
      'Tax Registration Number (TRN) issuance support',
      'Tax group registration guidance where relevant',
      'Tax invoice and record-keeping requirements briefing',
      'VAT return preparation and filing support',
      'Amendment, deregistration and correspondence handling',
    ],
    steps: [
      {
        title: 'Position review',
        body: 'We review your turnover, activities and supply types against the registration thresholds.',
      },
      {
        title: 'Registration',
        body: 'We compile the required documentation and submit the application to the FTA.',
      },
      {
        title: 'Systems & invoicing',
        body: 'We brief you on compliant invoicing, record retention and input tax recovery.',
      },
      {
        title: 'Returns',
        body: 'We support preparation and filing of periodic returns on an ongoing basis.',
      },
    ],
    faqs: [
      {
        q: 'When must a business register for VAT in the UAE?',
        a: 'Registration becomes mandatory once taxable supplies and imports exceed the mandatory threshold set by the Federal Tax Authority, with voluntary registration available above a lower threshold. Thresholds and rules are set by the FTA and can change, so we confirm the current position for your business.',
      },
      {
        q: 'Is voluntary registration worth it?',
        a: 'It can be, particularly where you incur recoverable input VAT or where clients expect a TRN. It also brings filing obligations. We set out both sides for your situation.',
      },
      {
        q: 'How often are VAT returns filed?',
        a: 'Filing frequency is assigned by the FTA, commonly quarterly or monthly depending on the business. Your registration certificate confirms your tax period.',
      },
      {
        q: 'What happens if we file late?',
        a: 'Late registration, late filing and late payment can each attract penalties under FTA rules. Where a business is already behind, we help bring the position current as quickly as possible.',
      },
    ],
    related: ['corporate-tax', 'company-formation', 'pro-services'],
  },
  {
    slug: 'corporate-tax',
    group: 'corporate',
    icon: Calculator,
    title: 'Corporate Tax',
    cardSummary: 'Corporate Tax registration, compliance and advisory support.',
    eyebrow: 'Corporate Services',
    heroTitle: 'UAE Corporate Tax Support',
    heroLead:
      'Corporate Tax changed what UAE businesses need to track, document and file. We help you register, understand how the rules apply to your structure, and keep your filing obligations on schedule.',
    metaTitle: 'UAE Corporate Tax Registration & Compliance',
    metaDescription:
      'Corporate Tax support in the UAE — registration, applicability review, record-keeping, free zone considerations and return filing guidance from LeadingZone.',
    intro: [
      'The UAE Corporate Tax regime applies to businesses within its scope and brings registration, record-keeping and annual filing obligations. How it affects you depends on your structure, your revenue, and in some cases whether your entity qualifies for particular free zone treatment.',
      'We help you get registered correctly and understand your position clearly. Where a question calls for formal tax advice on a complex structure, we will say so and work alongside a qualified tax adviser rather than guessing.',
    ],
    highlights: [
      {
        title: 'Applicability review',
        body: 'A clear read on how the regime applies to your entity, activities and financial year.',
      },
      {
        title: 'Registration handled',
        body: 'Corporate Tax registration prepared and submitted, with the confirmation tracked through.',
      },
      {
        title: 'Free zone considerations',
        body: 'Guidance on the qualifying-income questions that free zone entities commonly need to work through.',
      },
    ],
    includes: [
      'Corporate Tax applicability and scope assessment',
      'Federal Tax Authority Corporate Tax registration',
      'Financial year and first tax period confirmation',
      'Record-keeping and documentation requirements briefing',
      'Free zone qualifying-income considerations',
      'Corporate Tax return preparation support',
      'Coordination with your accountant or auditor',
    ],
    steps: [
      {
        title: 'Scope assessment',
        body: 'We review your entity, activities and financial year to establish how the regime applies.',
      },
      {
        title: 'Registration',
        body: 'We prepare and submit the Corporate Tax registration and track it to confirmation.',
      },
      {
        title: 'Readiness',
        body: 'We brief you on the records, accounts and documentation you will need for the first return.',
      },
      {
        title: 'Filing support',
        body: 'We support the annual return alongside your accountant or auditor.',
      },
    ],
    faqs: [
      {
        q: 'Does every UAE company have to register for Corporate Tax?',
        a: 'Registration requirements are set by the Federal Tax Authority and apply broadly to businesses within scope, including many free zone entities, regardless of whether tax is ultimately payable. We confirm the current requirement for your specific entity.',
      },
      {
        q: 'Are free zone companies exempt?',
        a: 'Free zone entities are not automatically exempt. Particular treatment can apply where qualifying conditions are met, and those conditions are specific. We walk through them with you rather than assuming an outcome.',
      },
      {
        q: 'What records do we need to keep?',
        a: 'Businesses in scope are expected to maintain financial records supporting their return for the period required by the FTA. We brief you on what that means in practice for your size and structure.',
      },
      {
        q: 'Do you provide formal tax advice?',
        a: 'We provide registration, compliance and practical guidance. For complex structuring or formal tax opinions we will recommend involving a qualified tax adviser, and we are happy to work alongside one.',
      },
    ],
    related: ['vat-registration', 'company-formation', 'bank-account-opening'],
  },
  {
    slug: 'bank-account-opening',
    group: 'corporate',
    icon: Landmark,
    title: 'Bank Account Opening',
    cardSummary:
      'Assistance navigating UAE corporate bank account requirements and onboarding.',
    eyebrow: 'Corporate Services',
    heroTitle: 'Corporate Bank Account Assistance',
    heroLead:
      'UAE banks apply thorough onboarding and compliance checks. We help you prepare a credible application, understand what each bank looks for, and avoid the delays that come from an incomplete file.',
    metaTitle: 'UAE Corporate Bank Account Opening Assistance',
    metaDescription:
      'Support with UAE corporate bank account applications — documentation preparation, bank selection guidance and onboarding coordination from LeadingZone.',
    intro: [
      'Opening a corporate account in the UAE is a compliance exercise as much as a commercial one. Banks want to understand your business model, your counterparties, your expected flows and the background of the people behind the company — and they want it evidenced.',
      'We help you assemble that picture properly. That means realistic bank selection for your profile, a complete document pack, and a clear business rationale that answers the questions a compliance team will ask.',
    ],
    highlights: [
      {
        title: 'Bank selection',
        body: 'Guidance on which banks realistically fit your structure, nationality mix and activity profile.',
      },
      {
        title: 'Application preparation',
        body: 'A complete, consistent document pack and business profile prepared before submission.',
      },
      {
        title: 'Honest expectations',
        body: 'No guarantees of approval — that decision rests with the bank. We tell you where your file is weak.',
      },
    ],
    includes: [
      'Review of your company structure and banking requirements',
      'Guidance on banks suited to your profile',
      'Corporate document pack preparation and review',
      'Business profile and source-of-funds narrative support',
      'Appointment coordination and application submission',
      'Follow-up on compliance queries during onboarding',
      'Guidance on account activation and online banking setup',
    ],
    steps: [
      {
        title: 'Profile review',
        body: 'We assess your structure, activities, shareholders and expected transaction flows.',
      },
      {
        title: 'Bank shortlist',
        body: 'We identify the banks most likely to be a fit and explain their differing requirements.',
      },
      {
        title: 'File preparation',
        body: 'Documents and the business rationale are prepared and checked for consistency.',
      },
      {
        title: 'Submission & follow-up',
        body: 'We coordinate the appointment and help respond to compliance questions as they arise.',
      },
    ],
    faqs: [
      {
        q: 'Can you guarantee my account will be approved?',
        a: 'No, and you should be cautious of anyone who does. Account opening is entirely at the bank’s discretion following its own compliance review. What we can do is make sure your application is complete, credible and well presented.',
      },
      {
        q: 'How long does it usually take?',
        a: 'It varies considerably by bank, structure and shareholder profile. Straightforward files move faster; those with complex ownership or higher-risk activities take longer. We give you a realistic expectation for your case.',
      },
      {
        q: 'Do I need to attend in person?',
        a: 'Most UAE banks require the authorised signatory to attend in person at some stage of onboarding. We confirm the requirement for your shortlisted banks in advance.',
      },
      {
        q: 'What documents will the bank want?',
        a: 'Typically corporate documents, shareholder and passport details, proof of address, a business profile, and evidence supporting your expected activity and source of funds. The exact list depends on the bank.',
      },
    ],
    related: ['company-formation', 'corporate-tax', 'free-zone-company-setup'],
  },
  {
    slug: 'immigration-services',
    group: 'corporate',
    icon: Plane,
    title: 'Immigration Services',
    cardSummary: 'Visa and residency support for founders, employees and families.',
    eyebrow: 'Corporate Services',
    heroTitle: 'UAE Visa & Immigration Support',
    heroLead:
      'From the founder’s first residence visa through to employee onboarding and family sponsorship, we manage the documentation and processing that residency in the UAE involves.',
    metaTitle: 'UAE Visa & Immigration Services',
    metaDescription:
      'UAE residence visa and immigration support — investor and employment visas, medical and Emirates ID coordination, family sponsorship and renewals from LeadingZone.',
    intro: [
      'A UAE residence visa is issued through a sponsoring entity and involves a sequence of steps: entry permit, status change where applicable, medical testing, Emirates ID registration and visa stamping. Each step has its own documentation and timing.',
      'We coordinate the sequence end to end for founders, staff and dependants — and we keep track of expiries so renewals are handled before they become urgent.',
    ],
    highlights: [
      {
        title: 'Founders & investors',
        body: 'Residence visas linked to your company licence, coordinated alongside the setup itself.',
      },
      {
        title: 'Employee onboarding',
        body: 'Work permits, entry permits and Emirates ID processing managed for new joiners.',
      },
      {
        title: 'Family sponsorship',
        body: 'Support for sponsoring spouses, children and eligible dependants once you hold residency.',
      },
    ],
    includes: [
      'Investor, partner and employment visa processing',
      'Entry permit issuance and status change coordination',
      'Medical fitness test and Emirates ID appointment booking',
      'Visa stamping and residence completion',
      'Family and dependant sponsorship support',
      'Visa renewals, amendments and cancellations',
      'Expiry tracking and advance renewal reminders',
    ],
    steps: [
      {
        title: 'Eligibility check',
        body: 'We confirm the visa category, quota and documents required for each applicant.',
      },
      {
        title: 'Entry permit',
        body: 'Applications are prepared and submitted, with approvals tracked through.',
      },
      {
        title: 'Medical & Emirates ID',
        body: 'We book and coordinate the medical and biometric appointments.',
      },
      {
        title: 'Residency & renewals',
        body: 'The visa is completed and we monitor expiry dates ahead of renewal.',
      },
    ],
    faqs: [
      {
        q: 'How many visas can my company sponsor?',
        a: 'Visa quota depends on your licence type, jurisdiction and the facility you hold. We confirm your allocation and advise if a change of facility would increase it.',
      },
      {
        q: 'Can I sponsor my family?',
        a: 'Family sponsorship is generally available to residents who meet the applicable eligibility criteria, which can include salary and accommodation conditions. We confirm your position before starting.',
      },
      {
        q: 'How long does a residence visa take?',
        a: 'Processing time depends on the visa type, jurisdiction and whether you are applying from inside or outside the UAE. We give you a step-by-step timeline at the outset.',
      },
      {
        q: 'What happens if a visa expires?',
        a: 'Overstaying can carry fines and complicate future applications. We track expiries for clients under our care and flag renewals well in advance.',
      },
    ],
    related: ['pro-services', 'virtual-ejari', 'company-formation'],
  },
  {
    slug: 'virtual-ejari',
    group: 'corporate',
    icon: KeyRound,
    title: 'Virtual Ejari',
    cardSummary:
      'Assistance with Virtual Ejari requirements for eligible business setups.',
    eyebrow: 'Corporate Services',
    heroTitle: 'Virtual Ejari Assistance',
    heroLead:
      'Ejari is Dubai’s tenancy registration system, and a registered tenancy contract underpins a number of licensing and visa processes. We help eligible businesses meet the requirement correctly.',
    metaTitle: 'Virtual Ejari Services in Dubai',
    metaDescription:
      'Virtual Ejari registration assistance in Dubai — eligibility guidance, documentation and registration support for business setups from LeadingZone.',
    intro: [
      'Ejari registers tenancy contracts in Dubai and produces the certificate that other processes rely on — trade licence issuance and renewal, visa quota, and various government applications among them.',
      'Virtual Ejari arrangements are available for certain setups where a conventional leased premises is not required. Eligibility is specific, so we confirm whether your licence type and activity qualify before proceeding, and set out the alternative if they do not.',
    ],
    highlights: [
      {
        title: 'Eligibility confirmed first',
        body: 'We check that your licence type and activity qualify before any application is made.',
      },
      {
        title: 'Supports licensing',
        body: 'A registered tenancy record is required for a number of licensing and renewal steps.',
      },
      {
        title: 'Documentation handled',
        body: 'Contract preparation and registration coordinated on your behalf.',
      },
    ],
    includes: [
      'Eligibility assessment for your licence type and activity',
      'Guidance on Ejari documentation requirements',
      'Tenancy contract preparation and review support',
      'Ejari registration submission and certificate issuance',
      'Renewal reminders and re-registration support',
      'Coordination with licensing and visa processes',
      'Advice on alternatives where Virtual Ejari does not apply',
    ],
    steps: [
      {
        title: 'Eligibility check',
        body: 'We confirm whether your setup qualifies and what documentation is required.',
      },
      {
        title: 'Contract preparation',
        body: 'The tenancy documentation is prepared and reviewed for accuracy.',
      },
      {
        title: 'Registration',
        body: 'We submit the registration and follow it through to certificate issuance.',
      },
      {
        title: 'Renewal tracking',
        body: 'We track the expiry so re-registration aligns with your licence renewal.',
      },
    ],
    faqs: [
      {
        q: 'What is Ejari?',
        a: 'Ejari is the system used in Dubai to register tenancy contracts. Registration produces a certificate that is required for a range of government and licensing processes.',
      },
      {
        q: 'Who is eligible for Virtual Ejari?',
        a: 'Eligibility depends on your licence type, activity and jurisdiction, and the rules are set by the relevant authority. We confirm your position before starting rather than assuming it applies.',
      },
      {
        q: 'Does Ejari affect my visa quota?',
        a: 'Registered premises are one of the factors that influence visa allocation for mainland companies. We explain how your arrangement affects quota in your specific case.',
      },
      {
        q: 'Does Ejari need to be renewed?',
        a: 'Yes — registration is tied to the tenancy period and needs to be renewed alongside it. We track the date and remind you in advance.',
      },
    ],
    related: ['pro-services', 'company-formation', 'immigration-services'],
  },
];

export const serviceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);

export const setupServices = services.filter((s) => s.group === 'setup');
export const corporateServices = services.filter((s) => s.group === 'corporate');
