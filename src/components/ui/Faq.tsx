'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

export type FaqItem = { q: string; a: string };

/**
 * Accordion built on buttons + aria-expanded rather than <details>, so the
 * open/close transition can be animated and only one panel stays open.
 */
export function Faq({
  items,
  className,
  defaultOpen = 0,
}: {
  items: FaqItem[];
  className?: string;
  /** Index to open on load; pass `-1` for all closed. */
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState<number>(defaultOpen);

  return (
    <div className={cn('divide-y divide-slateink-200 border-y border-slateink-200', className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-trigger-${i}`}
                className="group flex w-full items-start justify-between gap-6 py-6 text-left"
              >
                <span
                  className={cn(
                    'text-[16.5px] font-semibold leading-snug transition-colors duration-300',
                    isOpen ? 'text-navy-900' : 'text-slateink-700 group-hover:text-navy-900',
                  )}
                >
                  {item.q}
                </span>
                <span
                  aria-hidden
                  className={cn(
                    'mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ease-premium',
                    isOpen
                      ? 'rotate-45 border-gold-500 bg-gold-500 text-navy-950'
                      : 'border-slateink-200 text-slateink-500 group-hover:border-gold-500/60 group-hover:text-gold-700',
                  )}
                >
                  <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
              </button>
            </h3>

            {/*
              Collapse via grid-template-rows so the panel can animate to its
              natural height. The `hidden` attribute cannot be used here — a
              Tailwind display utility would override it — so the closed panel
              is marked `inert` instead, which keeps it out of the a11y tree
              and out of the tab order.
            */}
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-trigger-${i}`}
              className={cn(
                'grid transition-[grid-template-rows] duration-500 ease-premium motion-reduce:transition-none',
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
              )}
            >
              <div className="overflow-hidden" inert={!isOpen}>
                <p className="max-w-prose pb-7 pr-10 text-[15px] leading-relaxed text-slateink-500">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/** JSON-LD for an FAQ block — improves how the questions surface in search. */
export function FaqSchema({ items }: { items: FaqItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
