import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { benefits } from '@/content/home';

export function WhyUs() {
  return (
    <Section id="why-leadingzone" className="bg-sand-100">
      <SectionHeading
        title="Business setup without the guesswork"
        lead="Most of the friction in setting up a UAE company comes from not knowing what you do not know: which approvals depend on which, what a bank will ask for, what a licence costs to renew. We remove that uncertainty."
      />

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map(({ icon: Icon, title, body }, i) => (
          <Reveal as="li" key={title} delay={(i % 3) * 60} className="rounded-2xl bg-white p-7">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sand-100 text-gold-600">
              <Icon className="h-5 w-5" strokeWidth={1.8} />
            </span>
            <h3 className="mt-5 text-[17.5px] font-semibold">{title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-slateink-500">{body}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
