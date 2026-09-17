import Link from 'next/link';
import { ArrowRight, Home, Search } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { DubaiSkyline } from '@/components/ui/Skyline';
import { services } from '@/content/services';
import { contact } from '@/content/site';

export default function NotFound() {
  // A short, genuinely useful set of onward routes rather than a dead end.
  const popular = services.slice(0, 6);

  return (
    <section className="lz-grain relative isolate flex min-h-[calc(100svh-76px)] items-center overflow-hidden bg-navy-950 pb-24 pt-36 sm:pt-44">
      <div
        aria-hidden
        className="absolute inset-0 -z-30 bg-[radial-gradient(110%_80%_at_50%_100%,rgb(26_46_76)_0%,rgb(10_20_36)_46%,rgb(5_11_20)_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-20 h-[46%] opacity-30 [mask-image:linear-gradient(to_top,black_25%,transparent)]"
      >
        <DubaiSkyline />
      </div>

      <Container className="relative">
        <div className="max-w-2xl">
          <p className="font-display text-[11px] font-bold uppercase tracking-[0.22em] text-gold-400">
            Error 404
          </p>

          <h1 className="mt-6 text-[2.5rem] leading-[1.08] text-white sm:text-5xl lg:text-[3.5rem]">
            This page has moved on
          </h1>

          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-slate-400">
            The page you were looking for does not exist, or the link that brought you
            here is out of date. Everything else is still where it should be.
          </p>

          <div className="mt-10 flex flex-col gap-3.5 sm:flex-row">
            <Button href="/" variant="gold" size="lg">
              <Home className="h-4 w-4" strokeWidth={2} />
              Back to Homepage
            </Button>
            <Button href="/services" variant="onDark" size="lg">
              <Search className="h-4 w-4 text-gold-400" strokeWidth={2} />
              Browse All Services
            </Button>
          </div>
        </div>

        {/* Onward links */}
        <div className="mt-16 border-t border-white/10 pt-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-400">
            Popular pages
          </p>

          <ul className="mt-7 grid gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
            {popular.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/${service.slug}`}
                  className="group flex items-center justify-between gap-4 border-b border-white/[0.08] py-3.5 text-[14.5px] text-slate-300 transition-colors hover:text-white"
                >
                  {service.title}
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 -translate-x-1 text-gold-500 opacity-0 transition-all duration-300 ease-premium group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-9 text-[14px] text-slate-500">
            Still cannot find it?{' '}
            <Link href="/contact" className="font-semibold text-gold-400 lz-link-underline">
              Get in touch
            </Link>{' '}
            or message us on{' '}
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gold-400 lz-link-underline"
            >
              WhatsApp
            </a>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
