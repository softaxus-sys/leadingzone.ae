import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import type { Service } from '@/content/services';
import { cn } from '@/lib/utils';

/** Service card. The whole card is the link target. */
export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  const Icon = service.icon;

  return (
    <Reveal as="li" delay={(index % 3) * 60} className="h-full">
      <Link
        href={`/${service.slug}`}
        className="group flex h-full flex-col rounded-2xl bg-sand-100 p-7 transition-all duration-300 ease-premium hover:bg-white hover:shadow-lift sm:p-8"
      >
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-gold-600 transition-colors duration-300 group-hover:bg-gold-100">
          <Icon className="h-[22px] w-[22px]" strokeWidth={1.7} />
        </span>

        <h3 className="mt-6 text-[19px] font-semibold leading-snug">{service.title}</h3>

        <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-slateink-500">
          {service.cardSummary}
        </p>

        <span className="mt-6 inline-flex items-center gap-1 text-[14px] font-semibold text-navy-900">
          Learn more
          <ArrowUpRight className="h-4 w-4 text-gold-600 transition-transform duration-300 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </Link>
    </Reveal>
  );
}

export function ServicesGrid({ services, className }: { services: Service[]; className?: string }) {
  return (
    <ul className={cn('grid gap-5 sm:grid-cols-2 lg:grid-cols-3', className)}>
      {services.map((service, i) => (
        <ServiceCard key={service.slug} service={service} index={i} />
      ))}
    </ul>
  );
}
