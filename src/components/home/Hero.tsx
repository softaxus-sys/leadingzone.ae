import { ArrowRight, CalendarCheck } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { DubaiSkyline } from '@/components/ui/Skyline';

export function Hero() {
  return (
    <section className="lz-grain relative isolate flex min-h-[calc(100svh-76px)] items-center overflow-hidden bg-gold-700 pt-32 pb-24 sm:pt-40 lg:min-h-[46rem] lg:pt-44 lg:pb-32">
      {/* ── Backdrop stack ─────────────────────────────────────────────────── */}

      {/* Base wash: cool navy with a warm bias toward the horizon. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-30 bg-[radial-gradient(120%_85%_at_72%_88%,rgb(240_0_8)_0%,rgb(205_0_7)_46%,rgb(150_0_5)_100%)]"
      />

      {/* Skyline sits on the lower third, faded at the top edge. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-20 h-[58%] opacity-[0.85] sm:h-[62%]"
      >
        <DubaiSkyline />
      </div>

      {/* Gold horizon glow, off-centre so it does not read as a vignette. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 h-[46rem] w-[46rem] rounded-full bg-[radial-gradient(circle,rgb(255_255_255/0.14)_0%,transparent_62%)] blur-[2px] right-[-14rem] bottom-[-18rem] lg:right-[-8rem]"
      />

      {/* Readability scrim behind the copy only, so the skyline stays visible. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgb(110_0_4/0.55)_0%,rgb(110_0_4/0.25)_44%,transparent_78%)]"
      />

      {/* ── Content ────────────────────────────────────────────────────────── */}
      <Container className="relative">
        <div className="max-w-[46rem]">
          <p className="animate-fade-in text-[11.5px] font-semibold uppercase tracking-[0.22em] text-white">
            Channel Partner
            <span className="mx-2.5 text-white/50">•</span>
            10+ Years
            <span className="mx-2.5 text-white/50">•</span>
            Dubai, UAE
          </p>

          <h1 className="mt-7 animate-fade-up text-[2.6rem] leading-[1.06] text-white sm:text-5xl lg:text-[4.1rem] lg:leading-[1.04]">
            Start Your UAE Company from{' '}
            <span className="relative whitespace-nowrap">
              AED 10,800/-
              <span
                aria-hidden
                className="absolute inset-x-0 -bottom-2 h-[3px] bg-gradient-to-r from-white via-white/70 to-transparent"
              />
            </span>
          </h1>

          <p
            className="mt-7 max-w-[34rem] animate-fade-up text-[17px] leading-relaxed text-white/90 sm:text-[18px]"
            style={{ animationDelay: '120ms' }}
          >
            We can offer AED 10,800/- — lowest in the market. Leading Zone
            Consultancy is a management consulting and corporate advisory firm helping
            entrepreneurs establish and expand their firms, as a Channel Partner with
            10+ years of experience.
          </p>

          <div
            className="mt-10 flex animate-fade-up flex-col gap-3.5 sm:flex-row sm:items-center"
            style={{ animationDelay: '220ms' }}
          >
            <Button href="/services" variant="gold" size="lg">
              Start Your Business
              <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-1" />
            </Button>
            <Button href="/contact" variant="onDark" size="lg">
              <CalendarCheck className="h-4 w-4 text-white" strokeWidth={2} />
              Book Free Consultation
            </Button>
          </div>

          <div
            className="mt-12 flex animate-fade-up items-center gap-4 border-t border-white/10 pt-7 sm:gap-6"
            style={{ animationDelay: '320ms' }}
          >
            <p className="max-w-md text-[13.5px] leading-relaxed text-white/80">
              Mainland, free zone and offshore formation, plus the visas, banking,
              Ejari and tax registrations that follow.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
