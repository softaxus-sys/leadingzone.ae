import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { structures } from '@/content/home';

/**
 * The three jurisdiction routes. Presented as a comparison rather than a sales
 * pitch — each panel states what it is genuinely suited to.
 */
export function Structures() {
  return (
    <Section id="structures" className="bg-navy-950 lz-grain overflow-hidden">
      {/* Subtle top-left glow keeps the dark band from going flat. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgb(200_169_106/0.09)_0%,transparent_68%)]"
      />

      <div className="relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            onDark
            eyebrow="Company Formation"
            title="Choose the Right UAE Business Structure"
            lead="Jurisdiction is the first decision and the most expensive one to get wrong. Here is how the three routes actually differ."
            className="lg:max-w-2xl"
          />
          <Reveal delay={120} className="shrink-0">
            <Button href="/company-formation" variant="onDark" size="lg">
              Explore Company Formation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-1" />
            </Button>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-md bg-white/10 lg:grid-cols-3">
          {structures.map((structure, i) => (
            <Reveal as="li" key={structure.name} delay={i * 90} className="h-full">
              <Link
                href={structure.href}
                className="group flex h-full flex-col bg-navy-950 p-8 transition-colors duration-500 ease-premium hover:bg-navy-900 sm:p-9"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-[11px] font-bold tracking-[0.2em] text-gold-500">
                    0{i + 1}
                  </span>
                  <h3 className="text-2xl text-white">{structure.name}</h3>
                </div>

                <p className="mt-5 text-[14.5px] leading-relaxed text-slate-400">
                  {structure.summary}
                </p>

                <ul className="mt-7 flex-1 space-y-3">
                  {structure.points.map((point) => (
                    <li key={point} className="flex gap-3 text-[14px] text-slate-300">
                      <Check
                        className="mt-[3px] h-3.5 w-3.5 shrink-0 text-gold-500"
                        strokeWidth={2.6}
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-white/10 pt-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Typically suits
                  </p>
                  <p className="mt-2 text-[14px] text-slate-300">{structure.bestFor}</p>
                </div>

                <span className="mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-gold-400">
                  Read more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 ease-premium group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={160}>
          <p className="mt-8 max-w-3xl text-[13px] leading-relaxed text-slate-500">
            Ownership rules, permitted activities and visa allocations are set by the
            relevant authorities and change from time to time. We confirm the current
            position for your specific activity rather than relying on general
            guidance — and we do not make legal or regulatory guarantees.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
