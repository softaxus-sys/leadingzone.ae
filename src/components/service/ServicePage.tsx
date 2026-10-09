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
import { serviceBySlug, serviceImages, type Service } from '@/content/services';
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
        title={service.heroTitle}
        lead={service.heroLead}
        image={serviceImages[service.slug]}
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
          <Button href={contact.phoneHref} variant="outline" size="lg">
            <Phone className="h-4 w-4" strokeWidth={2} />
            {contact.phone}
          </Button>
        </div>
      </PageHero>

      {/* Overview + highlights */}
      <Section className="bg-white">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="space-y-5">
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

            <ul className="mt-10 grid gap-4 sm:grid-cols-3">
              {service.highlights.map((highlight, i) => (
                <Reveal as="li" key={highlight.title} delay={i * 70} className="rounded-2xl bg-sand-100 p-6">
                  <h3 className="text-[16px] font-semibold leading-snug text-navy-900">
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
              <div className="rounded-2xl bg-sand-100 p-8 lg:sticky lg:top-28">
                <h2 className="text-[19px] font-semibold text-navy-900">
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

                <div className="mt-8">
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
      <Section className="bg-sand-100">
        <SectionHeading
          title="How we handle it"
          lead="Four stages, with a defined outcome at each. You will know what we need from you before we need it."
        />

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {service.steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 70} className="rounded-2xl bg-white p-7">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold-600 text-[14px] font-semibold text-white">
                0{i + 1}
              </span>
              <h3 className="mt-5 text-[17px] font-semibold">{step.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-slateink-500">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* FAQs */}
      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              title={`${service.title}: Your Questions`}
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
        <Section className="bg-white" size="tight">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              title="Often Handled Alongside This"
              className="sm:max-w-xl"
            />
            <Reveal delay={100}>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-navy-900 hover:text-gold-600"
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
        lead="Tell us what you are planning and we will set out the route, the documents required and a realistic timeline, before you commit to anything."
      />
      <FaqSchema items={service.faqs} />
    </>
  );
}
