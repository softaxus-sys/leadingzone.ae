import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { internationalMarkets, internationalPoints } from '@/content/home';

/**
 * International client section. The market list describes who we regularly work
 * with — it is not a claim about volume or office presence.
 */
export function International() {
  return (
    <Section className="bg-sand-50">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="International Clients"
            title="Setting Up From Outside the UAE"
            lead="A large share of our clients start the process from another country. That changes the sequencing — what can be done remotely, what needs attesting at home, and which steps need you on the ground."
          />

          <Reveal delay={140} className="mt-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-700">
              Regularly working with founders from
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {internationalMarkets.map((market) => (
                <li
                  key={market}
                  className="rounded-sm border border-slateink-200 bg-white px-3.5 py-2 text-[13px] font-medium text-slateink-700"
                >
                  {market}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <ul className="divide-y divide-slateink-200 border-y border-slateink-200">
            {internationalPoints.map(({ icon: Icon, title, body }, i) => (
              <Reveal as="li" key={title} delay={i * 80} className="flex gap-5 py-7">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-navy-900 text-gold-400">
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="text-[16.5px] font-bold text-navy-900">{title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-slateink-500">
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
