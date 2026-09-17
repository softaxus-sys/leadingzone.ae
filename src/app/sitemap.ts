import type { MetadataRoute } from 'next';
import { services } from '@/content/services';
import { site } from '@/content/site';

/** Static routes, plus one entry per service page. */
const staticRoutes = [
  { path: '', priority: 1 },
  { path: '/services', priority: 0.9 },
  { path: '/about', priority: 0.8 },
  { path: '/contact', priority: 0.8 },
  { path: '/privacy-policy', priority: 0.3 },
  { path: '/terms-and-conditions', priority: 0.3 },
];

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...staticRoutes.map(({ path, priority }) => ({
      url: `${site.url}${path}/`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority,
    })),
    ...services.map((service) => ({
      url: `${site.url}/${service.slug}/`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
  ];
}
