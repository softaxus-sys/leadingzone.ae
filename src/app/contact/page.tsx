import type { Metadata } from 'next';
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Faq } from '@/components/ui/Faq';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ContactForm } from '@/components/contact/ContactForm';
import { contact } from '@/content/site';

export const metadata: Metadata = {
  title: 'Contact & Free Consultation',
  description:
    'Speak to LeadingZone about UAE company formation, PRO services, visas, banking and tax registration. Book a free consultation by email or WhatsApp.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact LeadingZone',
    description:
      'Book a free consultation on UAE business setup and corporate services.',
    url: '/contact',
  },
};

const consultationFaqs = [
  {
    q: 'What happens in the free consultation?',
    a: 'We ask about your business activities, where your customers are, how many visas you expect to need and your budget. You leave with a view on which jurisdiction fits, what the process involves and an indicative cost — including the recurring renewal cost, which is the part most often left out.',
  },
  {
    q: 'How long does it take?',
    a: 'Usually 20 to 30 minutes. Longer if your structure is complex or you have several entities to think about.',
  },
  {
    q: 'Is there any obligation?',
    a: 'None. If the outcome of the conversation is that you should do something else, or work with someone else, we will say so.',
  },
  {
    q: 'Can we speak if I am outside the UAE?',
    a: 'Yes — a large share of our consultations are with founders abroad. We schedule around your time zone and follow up in writing so nothing depends on catching each other live.',
  },
];

const channels = [
  {
    icon: Phone,
    label: 'Call us',
    value: contact.phone,
    href: contact.phoneHref,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: contact.whatsapp,
    href: contact.whatsappHref,
    external: true,
  },
  {
    icon: Mail,
    label: 'Email',
    value: contact.email,
    href: contact.emailHref,
  },
  {
    icon: MapPin,
    label: 'Office',
    value: contact.address.full,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book a Free Consultation"
        lead="Tell us what you are planning and we will come back with the route, the requirements and a realistic cost — usually within one business day."
        crumbs={[{ label: 'Contact' }]}
      />

      <Section className="bg-white">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="lz-eyebrow">
                <span aria-hidden className="h-px w-7 bg-gold-600/70" />
                Send an enquiry
              </span>
              <h2 className="mt-5 text-3xl">Tell us about your business</h2>
              <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-slateink-500">
                The more you can tell us about your activities and where your customers
                are, the more useful the first reply will be.
              </p>
            </Reveal>

            <Reveal delay={100} className="mt-10">
              <ContactForm />
            </Reveal>
          </div>

          {/* Contact details */}
          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={140}>
              <div className="rounded-md border border-slateink-200 bg-sand-50 p-8">
                <h2 className="text-[19px] font-bold text-navy-900">
                  Reach us directly
                </h2>

                <ul className="mt-7 space-y-6">
                  {channels.map(({ icon: Icon, label, value, href, external }) => (
                    <li key={label} className="flex gap-4">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-navy-900 text-gold-400">
                        <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slateink-500">
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            {...(external
                              ? { target: '_blank', rel: 'noopener noreferrer' }
                              : {})}
                            className="mt-1 block break-words text-[15px] font-semibold text-navy-900 lz-link-underline"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="mt-1 text-[15px] font-semibold text-navy-900">
                            {value}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-slateink-200 pt-7">
                  <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-slateink-500">
                    <Clock className="h-3.5 w-3.5 text-gold-600" strokeWidth={2} />
                    Office hours
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {contact.hours.map((slot) => (
                      <li
                        key={slot.days}
                        className="flex items-baseline justify-between gap-4 text-[14px]"
                      >
                        <span className="text-slateink-700">{slot.days}</span>
                        <span className="text-right font-medium text-navy-900">
                          {slot.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="bg-sand-50">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Before You Call"
              title="What to Expect"
              lead="A short, practical conversation — not a sales pitch with a countdown timer on it."
            />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal>
              <Faq items={consultationFaqs} />
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
