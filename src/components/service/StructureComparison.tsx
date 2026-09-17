import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { structures } from '@/content/home';

/**
 * Light-theme version of the jurisdiction comparison, used on
 * /company-formation where it sits between white sections.
 */
export function StructureComparison() {
  return (
    <Section className="bg-sand-50">
      <SectionHeading
        eyebrow="Compare the Routes"
        title="Mainland, Free Zone or Offshore?"
        lead="Jurisdiction drives cost, market access, visa allocation and how banks read your application. It is worth getting right the first time."
      />

      <ul className="mt-14 grid gap-5 lg:grid-cols-3">
        {structures.map((structure, i) => (
          <Reveal as="li" key={structure.name} delay={i * 90} className="h-full">
            <Link
              href={structure.href}
              className="group flex h-full flex-col rounded-md border border-slateink-200 bg-white p-8 transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-gold-500/45 hover:shadow-lift"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display text-[11px] font-bold tracking-[0.2em] text-gold-600">
                  0{i + 1}
                </span>
                <h3 className="text-[22px] font-bold text-navy-900">{structure.name}</h3>
              </div>

              <p className="mt-5 text-[14.5px] leading-relaxed text-slateink-500">
                {structure.summary}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {structure.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-[14px] leading-snug text-slateink-700"
                  >
                    <Check
                      className="mt-[3px] h-3.5 w-3.5 shrink-0 text-gold-600"
                      strokeWidth={2.6}
                    />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-7 border-t border-slateink-200 pt-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slateink-500">
                  Typically suits
                </p>
                <p className="mt-2 text-[14px] text-slateink-700">{structure.bestFor}</p>
              </div>

              <span className="mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-navy-900">
                Read more
                <ArrowRight className="h-3.5 w-3.5 text-gold-600 transition-transform duration-300 ease-premium group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={160}>
        <p className="mt-8 max-w-3xl text-[13px] leading-relaxed text-slateink-500">
          Ownership rules, permitted activities and visa allocations are set by the
          relevant authorities and change from time to time. We confirm the current
          position for your specific activity before you commit, and we do not make
          legal or regulatory guarantees.
        </p>
      </Reveal>
    </Section>
  );
}
