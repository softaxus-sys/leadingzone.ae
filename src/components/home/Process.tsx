import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { processSteps } from '@/content/home';

/** Four-step engagement process. */
export function Process() {
  return (
    <Section id="how-it-works" className="bg-white">
      <SectionHeading
        align="center"
        title="How it works"
        lead="Four stages, each with a defined outcome. You always know what is happening now and what comes next."
      />

      <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map(({ number, title, body }, i) => (
          <Reveal as="li" key={number} delay={i * 70} className="rounded-2xl bg-sand-100 p-7">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold-600 text-[14px] font-semibold text-white">
              {number}
            </span>
            <h3 className="mt-5 text-[18px] font-semibold">{title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-slateink-500">{body}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
