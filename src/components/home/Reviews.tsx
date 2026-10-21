import { Star } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { reviews } from '@/content/home';

/** Dark testimonial band. */
export function Reviews() {
  return (
    <Section className="bg-navy-950">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          onDark
          title="Founders trust us with their first Dirham."
          className="lg:max-w-xl"
        />
        <Reveal delay={100}>
          <p className="text-[14px] text-white/65">
            <span className="font-semibold text-gold-400">4.9/5</span> from 1,240 reviews &bull;
            Google &amp; Trustpilot
          </p>
        </Reveal>
      </div>

      <ul className="mt-12 grid gap-5 lg:grid-cols-3">
        {reviews.map((review, i) => (
          <Reveal
            as="li"
            key={review.name}
            delay={i * 80}
            className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-7"
          >
            <div className="flex gap-1 text-gold-400" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-4 flex-1 text-[15px] leading-relaxed text-white/85">
              &ldquo;{review.quote}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-[13px] font-semibold text-white">
                {review.name[0]}
              </span>
              <div>
                <p className="text-[14px] font-semibold text-white">{review.name}</p>
                <p className="text-[12.5px] text-white/55">{review.role}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
