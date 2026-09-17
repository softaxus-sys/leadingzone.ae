import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServicePage } from '@/components/service/ServicePage';
import { serviceBySlug } from '@/content/services';

const service = serviceBySlug('corporate-tax');

export const metadata: Metadata = {
  title: service?.metaTitle,
  description: service?.metaDescription,
  alternates: { canonical: '/corporate-tax' },
  openGraph: {
    title: service?.metaTitle,
    description: service?.metaDescription,
    url: '/corporate-tax',
  },
};

export default function Page() {
  if (!service) notFound();
  return <ServicePage service={service} />;
}
