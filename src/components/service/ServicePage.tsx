import Link from 'next/link';
import { ArrowRight, Check, Phone } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { Faq, FaqSchema } from '@/components/ui/Faq';
import { CtaBand } from '@/components/ui/CtaBand';
import { ServiceCard } from '@/components/home/ServicesGrid';
import { serviceBySlug, type Service } from '@/content/services';
import { contact } from '@/content/site';

/**
 * Shared template behind all nine service pages. Each route supplies only a
 * slug; everything else is driven from `src/content/services.ts`.
 */
export function ServicePage({
  service,
  afterOverview,
}: {
  service: Service;
  /** Optional extra section injected between the overview and the process. */
  afterOverview?: React.ReactNode;
}) {
  const related = service.related
    .map(serviceBySlug)
    .filter((s): s is Service => Boolean(s));

  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.heroTitle}
        lead={service.heroLead}
        crumbs={[
          { label: 'Services', href: '/services' },
          { label: service.title },
        ]}
      >
        <div className="mt-10 flex flex-col gap-3.5 sm:flex-row">
          <Button href="/contact" variant="gold" size="lg">
            Book Free Consultation
            <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-1" />
          </Button>
          <Button href={contact.phoneHref} variant="onDark" size="lg">
            <Phone className="h-4 w-4 text-gold-400" strokeWidth={2} />
            {contact.phone}
          </Button>
        </div>
      </PageHero>

      {/* Overview + highlights */}
      <Section className="bg-white">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="lz-eyebrow">
                <span aria-hidden className="h-px w-7 bg-gold-600/70" />
                Overview
              </span>
              <div className="mt-6 space-y-5">
                {service.intro.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="text-[16.5px] leading-relaxed text-slateink-700"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            <ul className="mt-12 grid gap-8 sm:grid-cols-3">
              {service.highlights.map((highlight, i) => (
                <Reveal as="li" key={highlight.title} delay={i * 90}>
                  <span aria-hidden className="block h-px w-10 bg-gold-500" />
                  <h3 className="mt-5 text-[16px] font-bold leading-snug text-navy-900">
                    {highlight.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-slateink-500">
                    {highlight.body}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Sticky "what's included" panel */}
          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={120}>
              <div className="rounded-md border border-slateink-200 bg-sand-50 p-8 lg:sticky lg:top-28">
                <h2 className="text-[19px] font-bold text-navy-900">
                  What this includes
                </h2>
                <ul className="mt-6 space-y-3.5">
                  {service.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-[14.5px] leading-relaxed text-slateink-700">
                      <Check
                        className="mt-[3px] h-4 w-4 shrink-0 text-gold-600"
                        strokeWidth={2.4}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-slateink-200 pt-6">
                  <p className="text-[13.5px] leading-relaxed text-slateink-500">
                    Scope is confirmed in writing after the consultation, once your
                    activities and requirements are clear.
                  </p>
                  <Button href="/contact" size="md" className="mt-5 w-full">
                    Request a Quote
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {afterOverview}

      {/* Process */}
      <Section className="bg-navy-950 lz-grain overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 top-0 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgb(200_169_106/0.09)_0%,transparent_68%)]"
        />
        <div className="relative">
          <SectionHeading
            onDark
            eyebrow="The Process"
            title="How We Handle It"
            lead="Four stages, with a defined outcome at each. You will know what we need from you before we need it."
          />

          <ol className="mt-14 grid gap-px overflow-hidden rounded-md bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {service.steps.map((step, i) => (
              <Reveal
                as="li"
                key={step.title}
                delay={i * 90}
                className="bg-navy-950 p-7 sm:p-8"
              >
                <span className="font-display text-[11px] font-bold tracking-[0.2em] text-gold-500">
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-[17px] font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-slate-400">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      {/* FAQs */}
      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="FAQs"
              title={`${service.title} — Your Questions`}
              lead="Straight answers, including the ones that are less convenient for us."
            />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal>
              <Faq items={service.faqs} />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Related services */}
      {related.length > 0 ? (
        <Section className="bg-sand-50" size="tight">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Related"
              title="Often Handled Alongside This"
              className="sm:max-w-xl"
            />
            <Reveal delay={100}>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-navy-900 lz-link-underline"
              >
                All services
                <ArrowRight className="h-3.5 w-3.5 text-gold-600" />
              </Link>
            </Reveal>
          </div>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item, i) => (
              <ServiceCard key={item.slug} service={item} index={i} />
            ))}
          </ul>
        </Section>
      ) : null}

      <CtaBand
        title="Talk Through Your Requirement"
        lead="Tell us what you are planning and we will set out the route, the documents required and a realistic timeline — before you commit to anything."
      />
      <FaqSchema items={service.faqs} />
    </>
  );
}
