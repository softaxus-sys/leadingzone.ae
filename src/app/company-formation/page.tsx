import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServicePage } from '@/components/service/ServicePage';
import { StructureComparison } from '@/components/service/StructureComparison';
import { serviceBySlug } from '@/content/services';

const service = serviceBySlug('company-formation');

export const metadata: Metadata = {
  title: service?.metaTitle,
  description: service?.metaDescription,
  alternates: { canonical: '/company-formation' },
  openGraph: {
    title: service?.metaTitle,
    description: service?.metaDescription,
    url: '/company-formation',
  },
};

export default function Page() {
  if (!service) notFound();
  // This page doubles as the jurisdiction hub, so the three-route comparison
  // is injected between the overview and the process.
  return <ServicePage service={service} afterOverview={<StructureComparison />} />;
}
