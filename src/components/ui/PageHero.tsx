import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export type Crumb = { label: string; href?: string };

const DEFAULT_BACKDROP = '/images/dubai-business-bay.jpg';

/** Shared header block for inner pages: full-bleed photo with white text. */
export function PageHero({
  title,
  lead,
  crumbs = [],
  image,
  backdrop,
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  crumbs?: Crumb[];
  /** Photo shown behind the hero. */
  image?: { src: string; alt: string };
  /** Same as `image`, as a bare path. */
  backdrop?: string;
  children?: React.ReactNode;
}) {
  const src = backdrop ?? image?.src ?? DEFAULT_BACKDROP;

  return (
    <section className="relative isolate overflow-hidden bg-navy-950 pb-20 pt-32 text-white sm:pb-28 sm:pt-40">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <img
          src={src}
          alt=""
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-[50%_40%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/70 via-navy-950/45 to-navy-950/15" />
      </div>

      <Container>
        {crumbs.length > 0 ? (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-white/70">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              {crumbs.map((crumb) => (
                <li key={crumb.label} className="flex items-center gap-1.5">
                  <ChevronRight className="h-3 w-3" strokeWidth={2.5} />
                  {crumb.href ? (
                    <Link href={crumb.href} className="transition-colors hover:text-white">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <div className="max-w-3xl">
          <h1 className="text-[2.2rem] font-semibold leading-[1.1] tracking-[-0.015em] !text-white sm:text-5xl">
            {title}
          </h1>
          {lead ? (
            <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-white/85">{lead}</p>
          ) : null}
          {children}
        </div>
      </Container>
    </section>
  );
}
