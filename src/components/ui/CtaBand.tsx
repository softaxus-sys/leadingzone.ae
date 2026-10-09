import { ArrowRight, MessageCircle } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { contact } from '@/content/site';

/** Closing call to action. Used at the foot of every page. */
export function CtaBand({
  title = 'Let’s work out the right setup for your business',
  lead = 'A short conversation is usually enough to tell you which jurisdiction fits and what it will cost.',
}: {
  eyebrow?: string;
  title?: string;
  lead?: string;
}) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-navy-950 px-6 py-14 text-center sm:px-12 sm:py-20">
            <img
              src="/images/dubai-business-bay.jpg"
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-[50%_40%] opacity-40"
            />
            <div className="absolute inset-0 bg-navy-950/60" />
            <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.015em] text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[16.5px] leading-relaxed text-white/70">
              {lead}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contact" variant="gold" size="lg">
                Book Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href={contact.whatsappHref} variant="onDark" size="lg">
                <MessageCircle className="h-4 w-4" strokeWidth={2} />
                WhatsApp {contact.whatsapp}
              </Button>
            </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
