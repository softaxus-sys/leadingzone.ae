import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

const stats = [
  { value: '10+', label: 'Years in UAE', note: 'Since 2014' },
  { value: '500+', label: 'Team Strength', note: 'PRO, Legal, Tax' },
  { value: '15,000+', label: 'Happy Clients', note: 'Across 100+ nations' },
  { value: '100+', label: 'Nationalities', note: 'Served & growing' },
];

export function WhyLeadingZone() {
  return (
    <Section className="bg-white">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <SectionHeading
            eyebrow="Why Leading Zone LLC"
            title="Dubai's business setup firm that acts like your co-founder."
            lead="We are not a typing center. We are DED-licensed advisors with banking, legal & tax partners in one roof. 10+ years turning visas into ventures."
          />
        </div>
        <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-6">
          {stats.map(({ value, label, note }, i) => (
            <Reveal
              as="li"
              key={label}
              delay={i * 70}
              className="rounded-2xl border border-slateink-200 bg-sand-100 p-7"
            >
              <p className="text-[2.25rem] font-semibold leading-none text-navy-900">{value}</p>
              <p className="mt-3 text-[15px] font-semibold">{label}</p>
              <p className="mt-1 text-[13px] text-slateink-500">{note}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
