import Link from 'next/link';
import { ArrowRight, Home } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { services } from '@/content/services';
import { contact } from '@/content/site';

export default function NotFound() {
  const popular = services.slice(0, 6);

  return (
    <section className="bg-sand-100 pb-24 pt-36 sm:pt-44">
      <Container>
        <div className="max-w-2xl">
          <p className="text-[14px] font-semibold text-gold-600">Error 404</p>
          <h1 className="mt-3 text-[2.5rem] font-semibold leading-[1.08] tracking-[-0.015em] sm:text-5xl">
            This page has moved on
          </h1>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-slateink-500">
            The page you were looking for does not exist, or the link that brought you
            here is out of date.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/" variant="gold" size="lg">
              <Home className="h-4 w-4" strokeWidth={2} />
              Back to Homepage
            </Button>
            <Button href="/services" variant="outline" size="lg">
              Browse All Services
            </Button>
          </div>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {popular.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/${service.slug}`}
                className="group flex items-center justify-between gap-4 rounded-2xl bg-white p-5 text-[15px] font-medium text-navy-900 transition-shadow hover:shadow-lift"
              >
                {service.title}
                <ArrowRight className="h-4 w-4 shrink-0 text-gold-600 transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-[14.5px] text-slateink-500">
          Still cannot find it?{' '}
          <Link href="/contact" className="font-semibold text-gold-600 hover:text-gold-700">
            Get in touch
          </Link>{' '}
          or message us on{' '}
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-gold-600 hover:text-gold-700"
          >
            WhatsApp
          </a>
          .
        </p>
      </Container>
    </section>
  );
}
