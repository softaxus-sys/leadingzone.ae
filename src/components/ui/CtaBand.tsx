import { ArrowRight, MessageCircle } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { contact } from '@/content/site';

/** Closing call to action. Used at the foot of every page. */
export function CtaBand({
  eyebrow = 'Get Started',
  title = 'Let’s Work Out the Right Setup for Your Business',
  lead = 'A short conversation is usually enough to tell you which jurisdiction fits, what it will cost to run, and what the first month looks like. No obligation.',
}: {
  eyebrow?: string;
  title?: string;
  lead?: string;
}) {
  return (
    <section className="lz-grain relative overflow-hidden bg-navy-950 py-20 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgb(200_169_106/0.14)_0%,transparent_65%)]"
      />
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gold-line" />

      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow onDark className="justify-center">
            {eyebrow}
          </Eyebrow>
          <h2 className="mt-6 text-3xl text-white sm:text-4xl lg:text-[2.75rem]">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[16.5px] leading-relaxed text-slate-400">
            {lead}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <Button href="/contact" variant="gold" size="lg">
              Book Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-1" />
            </Button>
            <Button href={contact.whatsappHref} variant="onDark" size="lg">
              <MessageCircle className="h-4 w-4 text-gold-400" strokeWidth={2} />
              WhatsApp {contact.whatsapp}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
