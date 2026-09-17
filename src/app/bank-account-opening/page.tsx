import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServicePage } from '@/components/service/ServicePage';
import { serviceBySlug } from '@/content/services';

const service = serviceBySlug('bank-account-opening');

export const metadata: Metadata = {
  title: service?.metaTitle,
  description: service?.metaDescription,
  alternates: { canonical: '/bank-account-opening' },
  openGraph: {
    title: service?.metaTitle,
    description: service?.metaDescription,
    url: '/bank-account-opening',
  },
};

export default function Page() {
  if (!service) notFound();
  return <ServicePage service={service} />;
}
