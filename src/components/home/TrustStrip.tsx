import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { trustPoints } from '@/content/home';

/**
 * Qualitative trust indicators. Deliberately no numbers — nothing here is a
 * claim we cannot stand behind.
 */
export function TrustStrip() {
  return (
    <div className="relative border-b border-slateink-200 bg-white">
      <Container>
        <ul className="grid divide-y divide-slateink-200 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
          {trustPoints.map(({ icon: Icon, label }, i) => (
            <Reveal
              as="li"
              key={label}
              delay={i * 70}
              className="flex items-center gap-4 py-6 sm:py-8 lg:px-7 lg:first:pl-0 lg:last:pr-0"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-sand-100 text-gold-700 ring-1 ring-inset ring-gold-500/20">
                <Icon className="h-[19px] w-[19px]" strokeWidth={1.8} />
              </span>
              <span className="text-[14.5px] font-semibold leading-snug text-navy-900">
                {label}
              </span>
            </Reveal>
          ))}
        </ul>
      </Container>

      {/* Vertical hairlines between columns on large screens only. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 mx-auto hidden max-w-container px-10 lg:block"
      >
        <div className="grid h-full grid-cols-4">
          <div />
          <div className="border-l border-slateink-200" />
          <div className="border-l border-slateink-200" />
          <div className="border-l border-slateink-200" />
        </div>
      </div>
    </div>
  );
}
