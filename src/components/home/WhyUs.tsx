import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { benefits } from '@/content/home';

export function WhyUs() {
  return (
    <Section id="why-leadingzone" className="bg-sand-50">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Why LeadingZone"
            title="Business Setup Without the Guesswork"
            lead="Most of the friction in setting up a UAE company comes from not knowing what you do not know — which approvals depend on which, what a bank will actually ask for, what a licence costs to renew. We remove that uncertainty."
          />

          <Reveal delay={140} className="mt-10 border-l-2 border-gold-500 pl-6">
            <p className="text-[15px] leading-relaxed text-slateink-700">
              We would rather tell you a structure is wrong for your business before
              you pay for it than sell you the package with the best margin. That is
              the whole proposition.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {benefits.map(({ icon: Icon, title, body }, i) => (
              <Reveal as="li" key={title} delay={(i % 2) * 80 + Math.floor(i / 2) * 40}>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-gold-500/25 bg-white text-gold-700 shadow-[0_1px_2px_rgb(15_23_42/0.04)]">
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 text-[17px] font-bold text-navy-900">{title}</h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-slateink-500">
                  {body}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
