import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export type Crumb = { label: string; href?: string };

/** Shared header block for inner pages. */
export function PageHero({
  eyebrow,
  title,
  lead,
  crumbs = [],
  image,
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  crumbs?: Crumb[];
  image?: { src: string; alt: string };
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-sand-100 pb-14 pt-32 sm:pb-16 sm:pt-36">
      <Container>
        {crumbs.length > 0 ? (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-slateink-500">
              <li>
                <Link href="/" className="transition-colors hover:text-navy-900">
                  Home
                </Link>
              </li>
              {crumbs.map((crumb) => (
                <li key={crumb.label} className="flex items-center gap-1.5">
                  <ChevronRight className="h-3 w-3" strokeWidth={2.5} />
                  {crumb.href ? (
                    <Link href={crumb.href} className="transition-colors hover:text-navy-900">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-navy-900">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <div className={image ? 'grid items-center gap-10 lg:grid-cols-12 lg:gap-14' : undefined}>
          <div className={image ? 'lg:col-span-7' : 'max-w-3xl'}>
            <h1 className="text-[2.2rem] font-semibold leading-[1.1] tracking-[-0.015em] sm:text-5xl">
              {title}
            </h1>
            {lead ? (
              <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-slateink-500">
                {lead}
              </p>
            ) : null}
            {children}
          </div>
          {image ? (
            <div className="lg:col-span-5">
              <img
                src={image.src}
                alt={image.alt}
                width={1400}
                height={933}
                fetchPriority="high"
                decoding="async"
                className="aspect-[4/3] w-full rounded-3xl object-cover"
              />
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
