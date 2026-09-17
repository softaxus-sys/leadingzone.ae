import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import type { Service } from '@/content/services';
import { cn } from '@/lib/utils';

/**
 * Service card. The whole card is the link target; the arrow is decorative.
 * Hover lifts the card a single pixel and warms the border — nothing louder.
 */
export function ServiceCard({
  service,
  index = 0,
}: {
  service: Service;
  index?: number;
}) {
  const Icon = service.icon;

  return (
    <Reveal as="li" delay={(index % 3) * 80} className="h-full">
      <Link
        href={`/${service.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-md border border-slateink-200 bg-white p-7 transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-gold-500/45 hover:shadow-lift sm:p-8"
      >
        {/* Warm wash that fades in behind the icon on hover. */}
        <span
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold-500/0 blur-2xl transition-colors duration-700 ease-premium group-hover:bg-gold-500/10"
        />

        <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-sm bg-navy-900 text-gold-400 transition-colors duration-500 ease-premium group-hover:bg-navy-800">
          <Icon className="h-5 w-5" strokeWidth={1.7} />
        </span>

        <h3 className="relative mt-6 text-[19px] font-bold leading-snug text-navy-900">
          {service.title}
        </h3>

        <p className="relative mt-3 flex-1 text-[14.5px] leading-relaxed text-slateink-500">
          {service.cardSummary}
        </p>

        <span className="relative mt-7 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-navy-900">
          Learn more
          <ArrowUpRight className="h-3.5 w-3.5 text-gold-600 transition-transform duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>

        {/* Gold rule that draws in from the left on hover. */}
        <span
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gold-500 transition-transform duration-500 ease-premium group-hover:scale-x-100"
        />
      </Link>
    </Reveal>
  );
}

export function ServicesGrid({
  services,
  className,
}: {
  services: Service[];
  className?: string;
}) {
  return (
    <ul className={cn('grid gap-5 sm:grid-cols-2 lg:grid-cols-3', className)}>
      {services.map((service, i) => (
        <ServiceCard key={service.slug} service={service} index={i} />
      ))}
    </ul>
  );
}
