import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServicePage } from '@/components/service/ServicePage';
import { serviceBySlug } from '@/content/services';

const service = serviceBySlug('offshore-company-setup');

export const metadata: Metadata = {
  title: service?.metaTitle,
  description: service?.metaDescription,
  alternates: { canonical: '/offshore-company-setup' },
  openGraph: {
    title: service?.metaTitle,
    description: service?.metaDescription,
    url: '/offshore-company-setup',
  },
};

export default function Page() {
  if (!service) notFound();
  return <ServicePage service={service} />;
}
