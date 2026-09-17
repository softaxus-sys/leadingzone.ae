import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { Process } from '@/components/home/Process';
import { CtaBand } from '@/components/ui/CtaBand';
import { corporateServices, setupServices } from '@/content/services';

export const metadata: Metadata = {
  title: 'UAE Business Setup & Corporate Services',
  description:
    'Company formation, PRO services, VAT and Corporate Tax registration, corporate banking assistance, visas and Virtual Ejari — the full range of LeadingZone services in the UAE.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'UAE Business Setup & Corporate Services | LeadingZone',
    description:
      'The full range of LeadingZone business setup and corporate support services in the UAE.',
    url: '/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Everything You Need to Establish and Operate in the UAE"
        lead="Two halves of the same job: getting the company licensed correctly, and keeping it compliant and operational afterwards. We handle both."
        crumbs={[{ label: 'Services' }]}
      />

      <Section id="business-setup" className="bg-white">
        <SectionHeading
          eyebrow="Business Setup"
          title="Getting the Structure Right"
          lead="The jurisdiction you incorporate in determines your market access, your visa allocation, your renewal costs and how banks assess you. It is the decision that everything else follows from."
        />
        <ServicesGrid services={setupServices} className="mt-14" />
      </Section>

      <Section id="corporate-services" className="bg-sand-50">
        <SectionHeading
          eyebrow="Corporate Services"
          title="Keeping the Business Running"
          lead="Licences renew, visas expire, tax registrations fall due and documents need attesting. This is the ongoing work that keeps a UAE company in good standing."
        />
        <ServicesGrid services={corporateServices} className="mt-14" />
      </Section>

      <Process />
      <CtaBand />
    </>
  );
}
