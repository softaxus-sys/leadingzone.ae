import { ArrowRight, Check } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { contact } from '@/content/site';

export function Hero() {
  return (
    <section className="bg-white pb-12 pt-28 sm:pt-32 lg:pb-8 lg:pt-36">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="animate-fade-up lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-sand-100 px-4 py-2 text-[13px] font-semibold text-navy-900">
              <span className="h-2 w-2 rounded-full bg-gold-600" />
              Channel Partner, 10+ Years
            </span>

            <h1 className="mt-6 text-[2.5rem] font-semibold leading-[1.08] tracking-[-0.015em] sm:text-5xl lg:text-[3.6rem]">
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

          <div
            className="animate-fade-up space-y-4 lg:col-span-5"
            style={{ animationDelay: '120ms' }}
          >
            <div className="rounded-3xl bg-navy-950 p-8 text-white sm:p-9">
              <p className="text-[13px] font-semibold text-white/70">Lowest in the market</p>
              <p className="mt-3 text-[2.6rem] font-semibold leading-none tracking-[-0.015em]">
                AED 10,800/-
              </p>
              <p className="mt-3 text-[15px] text-white/75">Company setup in the UAE</p>
              <ul className="mt-6 space-y-3 text-[14.5px]">
                {['Mainland, free zone and offshore', 'Licence, visa and bank account support'].map(
                  (item) => (
                    <li key={item} className="flex gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-white" strokeWidth={2.6} />
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className="rounded-3xl bg-sand-100 p-8 sm:p-9">
              <p className="text-[13px] font-semibold text-gold-600">Limited time offer</p>
              <p className="mt-3 text-[2rem] font-semibold leading-none tracking-[-0.015em]">
                AED 6,000
              </p>
              <p className="mt-3 text-[15px] text-slateink-500">
                Company set-up in UAE. Straight to business in 24 hours.
              </p>
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-navy-900 hover:text-gold-600"
              >
                WhatsApp {contact.whatsapp}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
