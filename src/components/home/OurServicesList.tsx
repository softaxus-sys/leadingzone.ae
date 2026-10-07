import { Check } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { entityOptions, otherServices } from '@/content/home';

function List({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[15px] font-medium text-navy-900">
          <Check className="mt-[4px] h-4 w-4 shrink-0 text-gold-600" strokeWidth={2.6} />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function OurServicesList() {
  return (
    <Section id="entity-options" className="bg-sand-50">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Our Services"
            title="Entity Options in Dubai"
            lead="Leading Zone consultants can help you set up a venture here in Dubai under the following entity options."
          />
          <div className="mt-8">
            <List items={entityOptions} />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <SectionHeading eyebrow="Other Services" title="Other Services Also Include" />
          <div className="mt-8">
            <List items={otherServices} />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
