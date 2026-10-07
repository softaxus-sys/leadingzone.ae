import { ArrowRight, Check } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { offers } from '@/content/home';
import { contact } from '@/content/site';
import { cn } from '@/lib/utils';

/** Headline pricing offers, shown directly beneath the trust strip. */
export function Offers() {
  return (
    <Section id="offers" className="bg-sand-50">
      <SectionHeading
        eyebrow="Ongoing Promotions"
        title="Company Setup Offers"
        lead="A Channel Partner with 10+ years of experience, offering some of the most competitive company setup prices in the UAE."
      />

      <ul className="mt-14 grid gap-6 lg:grid-cols-2">
        {offers.map((offer, i) => (
          <Reveal as="li" key={offer.title} delay={i * 90} className="h-full">
            <div
              className={cn(
                'flex h-full flex-col rounded-md p-8 sm:p-10',
                offer.featured
                  ? 'bg-gold-600 text-white shadow-lift'
                  : 'border border-slateink-200 bg-white text-navy-900 shadow-card',
              )}
            >
              <span
                className={cn(
                  'inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em]',
                  offer.featured ? 'bg-white text-gold-700' : 'bg-navy-950 text-white',
                )}
              >
                {offer.tag}
              </span>
              <h3 className={cn('mt-6 text-2xl', offer.featured && 'text-white')}>{offer.title}</h3>
              <p className={cn('mt-4 font-display text-5xl font-bold', offer.featured ? 'text-white' : 'text-gold-500')}>
                {offer.price}
                <span className="text-2xl">/-</span>
              </p>
              <p
                className={cn(
                  'mt-3 text-[15px]',
                  offer.featured ? 'text-white/90' : 'text-slateink-500',
                )}
              >
                {offer.note}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {offer.points.map((point) => (
                  <li key={point} className="flex gap-3 text-[14.5px]">
                    <Check className={cn('mt-[3px] h-4 w-4 shrink-0', offer.featured ? 'text-white' : 'text-gold-500')} strokeWidth={2.6} />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href={contact.whatsappHref} variant={offer.featured ? 'gold' : 'primary'} size="lg">
                  Get This Offer
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
