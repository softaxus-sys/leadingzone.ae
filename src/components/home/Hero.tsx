import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { contact } from '@/content/site';

export function Hero() {
  return (
    <section className="bg-white pb-12 pt-28 sm:pt-32 lg:pb-16 lg:pt-36">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-sand-100 px-4 py-2 text-[13px] font-semibold text-navy-900">
              <span className="h-2 w-2 rounded-full bg-gold-600" />
              Channel Partner, 10+ Years
            </span>

            <h1 className="mt-6 text-[2.5rem] font-semibold leading-[1.08] tracking-[-0.015em] sm:text-5xl lg:text-[3.5rem]">
              Start your UAE company from{' '}
              <span className="text-gold-600">AED 10,800/-</span>
            </h1>

            <p className="mt-6 max-w-xl text-[17.5px] leading-relaxed text-slateink-500">
              Leading Zone Consultancy is a management consulting and corporate
              advisory firm in Dubai, helping entrepreneurs establish and expand
              their businesses in the UAE.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="gold" size="lg">
                Start Your Business
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/services" variant="outline" size="lg">
                View Services
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl bg-sand-200">
              <img
                src="/images/dubai-business-bay.jpg"
                alt="Dubai Business Bay skyline at dusk with the Burj Khalifa"
                width={1100}
                height={1344}
                fetchPriority="high"
                decoding="async"
                className="h-[420px] w-full object-cover object-[50%_30%] sm:h-[520px] lg:h-[600px]"
              />

              <div className="absolute inset-x-4 bottom-4 grid gap-3 sm:grid-cols-5">
                <div className="rounded-2xl bg-navy-950 p-5 text-white sm:col-span-3">
                  <p className="text-[12.5px] font-medium text-white/70">Lowest in the market</p>
                  <p className="mt-1 text-[1.75rem] font-semibold leading-tight">AED 10,800/-</p>
                  <p className="mt-1 text-[13.5px] text-white/75">Company setup in the UAE</p>
                </div>
                <div className="rounded-2xl bg-white p-5 sm:col-span-2">
                  <p className="text-[12.5px] font-semibold text-gold-600">Limited time offer</p>
                  <p className="mt-1 text-[1.5rem] font-semibold leading-tight text-navy-900">
                    AED 6,000
                  </p>
                  <p className="mt-1 text-[13px] text-slateink-500">Ready in 24 hours</p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-[13.5px] text-slateink-500">
              Offer enquiries:{' '}
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-navy-900 hover:text-gold-600"
              >
                WhatsApp {contact.whatsapp}
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
