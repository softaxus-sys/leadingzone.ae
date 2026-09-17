import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { Hero } from '@/components/home/Hero';
import { TrustStrip } from '@/components/home/TrustStrip';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { Structures } from '@/components/home/Structures';
import { WhyUs } from '@/components/home/WhyUs';
import { Process } from '@/components/home/Process';
import { UaeFocus } from '@/components/home/UaeFocus';
import { International } from '@/components/home/International';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { Faq, FaqSchema } from '@/components/ui/Faq';
import { CtaBand } from '@/components/ui/CtaBand';
import { services } from '@/content/services';
import { homeFaqs } from '@/content/home';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />

      {/* Services overview */}
      <Section id="services" className="bg-white">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Our Services"
            title="Everything You Need to Establish and Operate in the UAE"
            lead="Formation is the first step. The services that keep a UAE company running — visas, banking, tax registration, renewals — matter just as much, and we handle them under one roof."
            className="lg:max-w-2xl"
          />
          <Reveal delay={120} className="shrink-0">
            <Button href="/services" variant="outline" size="lg">
              View All Services
              <ArrowRight className="h-4 w-4 text-gold-600 transition-transform duration-300 ease-premium group-hover:translate-x-1" />
            </Button>
          </Reveal>
        </div>

        <ServicesGrid services={services} className="mt-14" />
      </Section>

      <Structures />
      <WhyUs />
      <Process />
      <UaeFocus />
      <International />

      {/* FAQs */}
      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Common Questions"
              title="Questions We Hear Most"
              lead="If yours is not here, ask us directly — we will give you a straight answer, including when the answer is that we are not the right fit."
            />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal>
              <Faq items={homeFaqs} />
            </Reveal>
          </div>
        </div>
      </Section>

      <CtaBand />
      <FaqSchema items={homeFaqs} />
    </>
  );
}
