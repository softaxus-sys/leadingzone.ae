import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { CtaBand } from '@/components/ui/CtaBand';
import { WhyUs } from '@/components/home/WhyUs';
import { International } from '@/components/home/International';
import { DubaiSkyline } from '@/components/ui/Skyline';
import { ShieldAlert } from 'lucide-react';

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

/** How the firm works — stated as principles rather than claims. */
const principles = [
  {
    title: 'Advice before paperwork',
    body: 'Every engagement starts with understanding the business. If the structure you came in asking for is the wrong one, we say so before any fee is taken.',
  },
  {
    title: 'No invented numbers',
    body: 'We do not quote headline prices that change once the details emerge, and we do not publish client counts or success rates we cannot evidence.',
  },
  {
    title: 'Clear scope, in writing',
    body: 'What is included, what is not, and what the recurring costs will be — confirmed in writing before work begins.',
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

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A UAE Business Partner, Not a Licence Vendor"
        lead="LeadingZone is a private business setup and corporate services consultancy. We help entrepreneurs and companies establish in the UAE — and stay compliant once they have."
        crumbs={[{ label: 'About' }]}
      />

      {/* Positioning */}
      <Section className="bg-white">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Who We Are"
              title="Built Around the Questions Founders Actually Ask"
            />
            <Reveal delay={80} className="mt-8 space-y-5">
              <p className="text-[16.5px] leading-relaxed text-slateink-700">
                Setting up a company in the UAE is straightforward in outline and
                detailed in practice. The outline is what most consultancies sell. The
                detail — which activities your licence actually permits, what the bank
                will want to see, how many visas your facility supports, what the
                renewal costs in year two — is where businesses get caught out.
              </p>
              <p className="text-[16.5px] leading-relaxed text-slateink-700">
                LeadingZone exists to close that gap. We work through the specifics of
                your business before recommending a route, coordinate the formation
                end to end, and stay on afterwards for the visas, banking, tax
                registrations and renewals that follow.
              </p>
              <p className="text-[16.5px] leading-relaxed text-slateink-700">
                We work with clients across Dubai, Abu Dhabi and the Northern
                Emirates, and with founders setting up from outside the UAE entirely.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={140}>
              <div className="relative overflow-hidden rounded-md bg-navy-950 lz-grain">
                <div className="absolute inset-x-0 bottom-0 h-3/5 opacity-70">
                  <DubaiSkyline />
                </div>
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgb(200_169_106/0.18)_0%,transparent_65%)]"
                />
                <div className="relative p-8 pb-32">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-400">
                    Our position
                  </p>
                  <p className="mt-6 font-display text-[22px] leading-snug text-white">
                    We would rather lose a sale than sell you a structure that will
                    not do what you need it to.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Principles */}
      <Section className="bg-sand-50">
        <SectionHeading
          eyebrow="How We Work"
          title="Four Things You Can Hold Us To"
          lead="Business setup is a crowded market with a lot of noise in it. These are the commitments that shape how we run engagements."
        />

        <ul className="mt-14 grid gap-px overflow-hidden rounded-md bg-slateink-200 sm:grid-cols-2">
          {principles.map((principle, i) => (
            <Reveal as="li" key={principle.title} delay={i * 80} className="bg-white p-8 sm:p-9">
              <span className="font-display text-[11px] font-bold tracking-[0.2em] text-gold-600">
                0{i + 1}
              </span>
              <h3 className="mt-4 text-[19px] font-bold text-navy-900">
                {principle.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-slateink-500">
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
              eyebrow="Who We Work With"
              title="From First Licence to Regional Base"
              lead="The work differs considerably depending on where a client is starting from."
            />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ul className="divide-y divide-slateink-200 border-y border-slateink-200">
              {whoWeWorkWith.map((group, i) => (
                <Reveal as="li" key={group.title} delay={i * 80} className="py-7">
                  <h3 className="text-[17px] font-bold text-navy-900">{group.title}</h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-slateink-500">
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
          <div className="flex flex-col gap-6 rounded-md border border-slateink-200 bg-sand-50 p-8 sm:flex-row sm:p-10">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-navy-900 text-gold-400">
              <ShieldAlert className="h-5 w-5" strokeWidth={1.8} />
            </span>
            <div>
              <h2 className="text-[19px] font-bold text-navy-900">
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
        title="Start With a Conversation"
        lead="Tell us what you are planning. We will tell you what it takes, what it costs and whether we are the right people to help."
      />
    </>
  );
}
