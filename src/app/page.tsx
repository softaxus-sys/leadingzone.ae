import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { Hero } from '@/components/home/Hero';
import { OurServicesList } from '@/components/home/OurServicesList';
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
  title: `${site.name} | ${site.tagline}`,
  description: site.description,
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Services overview */}
      <Section id="services" className="bg-white">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            title="Everything you need to establish and operate in the UAE"
            lead="Formation is the first step. The services that keep a UAE company running, such as visas, banking, tax registration and renewals, matter just as much, and we handle them under one roof."
            className="lg:max-w-2xl"
          />
          <Reveal delay={120} className="shrink-0">
            <Button href="/services" variant="outline" size="lg">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>

        <ServicesGrid services={services} className="mt-14" />
      </Section>

      <Structures />
      <OurServicesList />
      <WhyUs />
      <Process />
      <UaeFocus />
      <International />

      {/* FAQs */}
      <Section className="bg-sand-100">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              title="Questions we hear most"
              lead="If yours is not here, ask us directly and we will give you a straight answer, including when the answer is that we are not the right fit."
            />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal>
              <Faq items={homeFaqs} onTint />
            </Reveal>
          </div>
        </div>
      </Section>

      <CtaBand />
      <FaqSchema items={homeFaqs} />
    </>
  );
}
