import { Container } from '@/components/ui/Container';
import { partners } from '@/content/home';

/** Continuously scrolling strip of partner free zone and authority logos. */
export function Partners() {
  // Rendered twice so the strip loops without a visible gap.
  const loop = [...partners, ...partners];

  return (
    <section aria-label="Our partners" className="bg-sand-100 py-14 sm:py-16">
      <Container>
        <p className="text-center text-[13px] font-semibold uppercase tracking-wide text-slateink-500">
          Our partners &amp; tie-ups across the UAE
        </p>
      </Container>

      <div className="partner-marquee mt-8 overflow-hidden">
        <ul className="partner-track flex w-max items-center gap-6">
          {loop.map((partner, i) => (
            <li
              key={`${partner.name}-${i}`}
              aria-hidden={i >= partners.length}
              className="flex h-24 w-52 shrink-0 items-center justify-center rounded-2xl bg-white px-6"
            >
              <img
                src={partner.logo}
                alt={i < partners.length ? partner.name : ''}
                loading="lazy"
                decoding="async"
                className="max-h-12 w-auto max-w-full object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
