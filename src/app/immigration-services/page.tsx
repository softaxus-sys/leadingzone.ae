import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServicePage } from '@/components/service/ServicePage';
import { serviceBySlug } from '@/content/services';

const service = serviceBySlug('immigration-services');

export const metadata: Metadata = {
  title: service?.metaTitle,
  description: service?.metaDescription,
  alternates: { canonical: '/immigration-services' },
  openGraph: {
    title: service?.metaTitle,
    description: service?.metaDescription,
    url: '/immigration-services',
  },
};

export default function Page() {
  if (!service) notFound();
  return <ServicePage service={service} />;
}
