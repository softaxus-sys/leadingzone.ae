import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { CtaBand } from '@/components/ui/CtaBand';
import { WhyUs } from '@/components/home/WhyUs';
import { International } from '@/components/home/International';
import { Check, ShieldAlert } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About LeadingZone',
  description:
    'LeadingZone is a private business setup and corporate services consultancy in the UAE, supporting entrepreneurs, SMEs and international investors from formation through to ongoing compliance.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About LeadingZone',
    description:
      'A private UAE business setup and corporate services consultancy supporting entrepreneurs and international investors.',
    url: '/about',
  },
};

/** How the firm works, stated as principles rather than claims. */
const principles = [
  {
    title: 'Advice before paperwork',
    body: 'Every engagement starts with understanding the business. If the structure you came in asking for is the wrong one, we say so before any fee is taken.',
  },
  {
    title: 'Transparent pricing',
    body: 'Company setup from AED 10,800, the lowest in the market, with the full breakdown and recurring costs confirmed before you commit.',
  },
  {
    title: 'Clear scope, in writing',
    body: 'What is included, what is not, and what the recurring costs will be, confirmed in writing before work begins.',
  },
  {
    title: 'Knowing our limits',
    body: 'We are a consultancy, not a law firm, bank or licensed tax agent. Where a question needs a regulated professional, we will tell you and work alongside one.',
  },
];

const whoWeWorkWith = [
  {
    title: 'Entrepreneurs & startups',
    body: 'First-time founders establishing an initial UAE presence, often with a lean budget and a need to understand the real cost of year two.',
  },
  {
    title: 'SMEs & established businesses',
    body: 'Operating companies adding a UAE entity, restructuring an existing licence, or moving their PRO and compliance work to a single provider.',
  },
  {
    title: 'International investors',
    body: 'Founders and investors from the UK, Europe, South Asia, the wider GCC and beyond setting up from outside the country.',
  },
  {
    title: 'Companies expanding into the GCC',
    body: 'Businesses using a UAE entity as the operating base for regional activity, with the banking and visa requirements that implies.',
  },
];

const setupTypes: { title: string; body: string; bullets?: string[] }[] = [
  {
    title: 'Mainland company setup',
    body: 'A mainland company, also known as an on-shore company, is licensed by Dubai’s Department of Economic Development (DED). Mainland companies are permitted to conduct business in the local market as well as outside the UAE without limitation.',
  },
  {
    title: 'Free zone company setup',
    body: 'There are several free zones in the UAE, most designed to undertake international trade or trade between free zones. They are extremely favoured by investors and corporations because of advantages such as 100% foreign ownership. Other benefits include:',
    bullets: [
      'Customer privileges',
      'Exemption from taxes',
      'Low-cost and inexpensive',
      'A well-developed transportation network and road connection',
      'Affordably priced high-quality labour',
    ],
  },
  {
    title: 'Offshore company',
    body: 'Offshore entities, also known as non-resident companies, are established in Dubai or RAKEZ. This is the ideal solution only for conducting international business; you cannot conduct business in the UAE with an offshore entity. Many people also establish an offshore holding company to own shares of other businesses in other countries.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="A UAE Business Partner, Not a Licence Vendor"
        lead="LeadingZone is a private business setup and corporate services consultancy. We help entrepreneurs and companies establish in the UAE and stay compliant once they have."
        image={{ src: '/images/burj-khalifa.jpg', alt: 'The Burj Khalifa rising above Downtown Dubai' }}
        crumbs={[{ label: 'About' }]}
      />

      {/* Positioning */}
      <Section className="bg-white">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading
              title="Built Around the Questions Founders Actually Ask"
            />
            <Reveal delay={80} className="mt-8 space-y-5">
              <p className="text-[16.5px] leading-relaxed text-slateink-700">
                Leading Zone Consultancy is a management consulting and corporate
                advisory organization that provides worldwide business and corporate
                solutions to fill the gap in quality corporate advisory services,
                supporting today&rsquo;s entrepreneurs in establishing and expanding
                their firms.
              </p>
              <p className="text-[16.5px] leading-relaxed text-slateink-700">
                We have been based in Dubai for the past six years and have established
                a robust network in the UAE, allowing us to provide you with the best
                services from anywhere in the globe. As a Channel Partner with 10+
                years of experience, we offer company setup from AED 10,800, the lowest
                in the market.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={140}>
              <img
                src="/images/consultation-meeting.jpg"
                alt="Consultants meeting a client in an office"
                width={1400}
                height={787}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full rounded-3xl object-cover"
              />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Business setup in the UAE */}
      <Section className="bg-sand-100">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading title="Why set up a company in Dubai" />
            <Reveal delay={80} className="mt-8 max-w-prose space-y-5">
              <p className="text-[16.5px] leading-relaxed text-slateink-700">
                There is no denying that Dubai is one of the top corporate business centers
                in the globe. The Dubai government is particularly interested in and
                supportive of the emirate&rsquo;s development for a fast-paced corporate
                structure, offering advantageous company creation and opportunities for many
                types of business structures across industries. The government
                enthusiastically welcomes entrepreneurs from all over the world.
              </p>
              <p className="text-[16.5px] leading-relaxed text-slateink-700">
                Starting a business in Dubai requires a thorough grasp of the optimal
                business structure, which might be a Dubai Mainland company, a Freezone
                company, or an offshore company. You must then select the appropriate type
                of corporation, licence, and business activities to provide.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <img
              src="/images/dubai-towers.jpg"
              alt="Towers reflected in the water at Jumeirah Lakes Towers, Dubai"
              width={1400}
              height={933}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Types of company setup */}
      <Section className="bg-white">
        <SectionHeading
          title="Mainland, Free Zone and Offshore"
          lead="With nearly a decade of expertise, business creation in Dubai has never been so straightforward and efficient. Our business advisers are well-versed in the rules, regulations and processes for establishing businesses in Dubai and its free zones."
        />
        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {setupTypes.map((t, i) => (
            <Reveal as="li" key={t.title} delay={i * 80} className="h-full">
              <div className="h-full rounded-2xl bg-sand-100 p-8">
                <h3 className="text-[20px] font-semibold text-navy-900">{t.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-slateink-500">{t.body}</p>
                {t.bullets && (
                  <ul className="mt-5 space-y-2 text-[14.5px] text-navy-900">
                    {t.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5">
                        <Check className="mt-[3px] h-4 w-4 shrink-0 text-gold-600" strokeWidth={2.6} />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </ul>
        <p className="mt-8 text-[14.5px] text-slateink-500">
          We also assist with intellectual property rights, including patents,
          trademarks and copyrights, and with franchisor licences for businesses.
        </p>
      </Section>

      {/* Principles */}
      <Section className="bg-sand-100">
        <SectionHeading
          title="Four things you can hold us to"
          lead="Business setup is a crowded market with a lot of noise in it. These are the commitments that shape how we run engagements."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {principles.map((principle, i) => (
            <Reveal as="li" key={principle.title} delay={i * 70} className="rounded-2xl bg-white p-8">
              <h3 className="text-[19px] font-semibold text-navy-900">{principle.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slateink-500">
                {principle.body}
              </p>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* Who we work with */}
      <Section className="bg-white">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              title="From first licence to regional base"
              lead="The work differs considerably depending on where a client is starting from."
            />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ul className="grid gap-5 sm:grid-cols-2">
              {whoWeWorkWith.map((group, i) => (
                <Reveal as="li" key={group.title} delay={i * 70} className="rounded-2xl bg-sand-100 p-7">
                  <h3 className="text-[17.5px] font-semibold text-navy-900">{group.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slateink-500">
                    {group.body}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <WhyUs />
      <International />

      {/* Independence disclosure */}
      <Section className="bg-white" size="tight">
        <Reveal>
          <div className="flex flex-col gap-6 rounded-3xl bg-sand-100 p-8 sm:flex-row sm:p-10">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-gold-600">
              <ShieldAlert className="h-5 w-5" strokeWidth={1.8} />
            </span>
            <div>
              <h2 className="text-[19px] font-semibold text-navy-900">
                An independent consultancy
              </h2>
              <p className="mt-3 max-w-3xl text-[14.5px] leading-relaxed text-slateink-500">
                LeadingZone Consultancy is a private business services provider. We are
                not a UAE government department, free zone authority, bank, law firm or
                licensed tax agent, and we hold no power to issue licences, visas or
                approvals. We prepare and coordinate applications on our clients&rsquo;
                behalf; every decision rests with the relevant authority or institution.
                Nothing on this website constitutes legal, financial or tax advice.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      <CtaBand
        title="Start with a conversation"
        lead="Tell us what you are planning. We will tell you what it takes, what it costs and whether we are the right people to help."
      />
    </>
  );
}
