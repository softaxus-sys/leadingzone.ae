import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { processSteps } from '@/content/home';

/**
 * Four-step engagement process.
 *
 * On large screens a hairline runs behind the icon badges to tie the steps
 * together. Its `top` offset is tuned to the badge centre: the step label above
 * it occupies ~36px, and the badge is 56px tall, so 36 + 28 = 64px (`top-16`).
 * Each badge carries a white ring so the rule appears to pass behind it.
 */
export function Process() {
  return (
    <Section id="how-it-works" className="bg-white">
      <SectionHeading
        align="center"
        eyebrow="How It Works"
        title="A Clear Route From First Call to Launch"
        lead="Four stages, each with a defined outcome. You always know what is happening now and what it unlocks next."
      />

      <div className="relative mt-16 lg:mt-20">
        <div
          aria-hidden
          className="absolute left-0 right-0 top-16 hidden h-px bg-gradient-to-r from-transparent via-slateink-200 to-transparent lg:block"
        />

        <ol className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {processSteps.map(({ number, title, body, icon: Icon }, i) => (
            <Reveal as="li" key={number} delay={i * 80} className="relative">
              <p className="font-display text-[11px] font-bold tracking-[0.22em] text-gold-600">
                {number}
              </p>

              <span className="relative z-10 mt-5 inline-flex h-14 w-14 items-center justify-center rounded-full border border-slateink-200 bg-white text-navy-900 shadow-[0_0_0_7px_white]">
                <Icon className="h-[21px] w-[21px]" strokeWidth={1.6} />
              </span>

              <h3 className="mt-6 text-[19px] font-bold text-navy-900 lg:min-h-[3.4rem]">{title}</h3>
              <p className="mt-3 max-w-xs text-[14.5px] leading-relaxed text-slateink-500">
                {body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
