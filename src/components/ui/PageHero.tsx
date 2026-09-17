import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { DubaiSkyline } from '@/components/ui/Skyline';

export type Crumb = { label: string; href?: string };

/**
 * Shared hero for inner pages: dark band, breadcrumb, title and lead.
 * Shorter than the homepage hero so content starts sooner.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  crumbs = [],
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  crumbs?: Crumb[];
  children?: React.ReactNode;
}) {
  return (
    <section className="lz-grain relative isolate overflow-hidden bg-navy-950 pb-16 pt-32 sm:pb-20 sm:pt-40 lg:pt-44">
      <div
        aria-hidden
        className="absolute inset-0 -z-30 bg-[radial-gradient(110%_80%_at_78%_100%,rgb(26_46_76)_0%,rgb(10_20_36)_46%,rgb(5_11_20)_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-20 h-[62%] opacity-30 [mask-image:linear-gradient(to_top,black_30%,transparent)]"
      >
        <DubaiSkyline />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-24 -z-10 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgb(200_169_106/0.13)_0%,transparent_66%)]"
      />

      <Container className="relative">
        {crumbs.length > 0 ? (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-[12.5px] text-slate-500">
              <li>
                <Link href="/" className="transition-colors hover:text-gold-400">
                  Home
                </Link>
              </li>
              {crumbs.map((crumb) => (
                <li key={crumb.label} className="flex items-center gap-1.5">
                  <ChevronRight className="h-3 w-3 text-slate-600" strokeWidth={2.5} />
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="transition-colors hover:text-gold-400"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-slate-300">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <div className="max-w-3xl">
          {eyebrow ? <Eyebrow onDark>{eyebrow}</Eyebrow> : null}
          <h1 className="mt-6 text-[2.35rem] leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[1.06]">
            {title}
          </h1>
          {lead ? (
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-slate-400">
              {lead}
            </p>
          ) : null}
          {children}
        </div>
      </Container>
    </section>
  );
}
