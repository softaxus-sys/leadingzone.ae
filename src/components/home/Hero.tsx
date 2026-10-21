import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { contact } from '@/content/site';

const slides = [
  { src: '/images/dubai-business-bay.jpg', alt: 'Dubai Business Bay skyline at dusk with the Burj Khalifa' },
  { src: '/images/dubai-aerial.jpg', alt: 'Aerial view of the Dubai business district' },
  { src: '/images/dubai-sunset-skyline.jpg', alt: 'Dubai skyline at sunset' },
  { src: '/images/burj-khalifa.jpg', alt: 'Burj Khalifa in Downtown Dubai' },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 pb-12 pt-28 sm:pt-32 lg:pb-16 lg:pt-36">
      {/* Background slider */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt=""
            fetchPriority={i === 0 ? 'high' : 'low'}
            decoding="async"
            style={{ animationDelay: `${i * 6}s` }}
            className="hero-slide absolute inset-0 h-full w-full object-cover"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/70 to-navy-950/40" />
      </div>

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[13px] font-semibold text-white backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-gold-600" />
              Channel Partner, 10+ Years
            </span>

            <h1 className="mt-6 text-[2.5rem] font-semibold leading-[1.08] tracking-[-0.015em] text-white sm:text-5xl lg:text-[3.5rem]">
              Start your UAE company from{' '}
              <span className="hero-brush text-gold-600">AED 10,800/-</span>
            </h1>

            <p className="mt-6 max-w-xl text-[17.5px] leading-relaxed text-white/80">
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
            <video
              controls
              playsInline
              preload="metadata"
              className="aspect-video w-full rounded-3xl bg-black object-cover shadow-2xl"
            >
              <source src="/videos/leading_zone_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="mt-4 grid gap-3 sm:grid-cols-5">
              <div className="rounded-2xl bg-navy-950/90 p-5 text-white sm:col-span-3">
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
            <p className="mt-4 text-[13.5px] text-white/70">
              Offer enquiries:{' '}
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white hover:text-gold-600"
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
