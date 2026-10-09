import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { internationalMarkets, internationalPoints } from '@/content/home';

/** Who we work with from abroad, and how remote setup works. */
export function International() {
  return (
    <Section className="bg-white">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            title="Setting up from outside the UAE"
            lead="Many of our clients start from another country. That changes the sequencing: what can be done remotely, what needs attesting at home, and which steps need you on the ground."
          />
          <Reveal delay={100} className="mt-8">
            <p className="text-[13px] font-semibold text-navy-900">
              Regularly working with founders from
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {internationalMarkets.map((market) => (
                <li
                  key={market}
                  className="rounded-full bg-sand-100 px-4 py-2 text-[13.5px] font-medium text-navy-900"
                >
                  {market}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <ul className="grid gap-5 sm:grid-cols-2">
            {internationalPoints.map(({ icon: Icon, title, body }, i) => (
              <Reveal as="li" key={title} delay={i * 60} className="rounded-2xl bg-sand-100 p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-gold-600">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 text-[17px] font-semibold">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slateink-500">{body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
