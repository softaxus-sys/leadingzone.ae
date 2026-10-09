import { Check } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { entityOptions, otherServices } from '@/content/home';

function List({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[15.5px] text-navy-900">
          <Check className="mt-[3px] h-4 w-4 shrink-0 text-gold-600" strokeWidth={2.6} />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function OurServicesList() {
  return (
    <Section id="entity-options" className="bg-white">
      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal className="rounded-3xl bg-sand-100 p-8 sm:p-10">
          <SectionHeading
            title="Entity options in Dubai"
            lead="Leading Zone consultants can help you set up a venture here in Dubai under the following entity options."
          />
          <div className="mt-8">
            <List items={entityOptions} />
          </div>
        </Reveal>
        <Reveal delay={80} className="rounded-3xl bg-sand-100 p-8 sm:p-10">
          <SectionHeading title="Other services also include" />
          <div className="mt-8">
            <List items={otherServices} />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
