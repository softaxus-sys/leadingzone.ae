import { ArrowRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { uaeLocations } from '@/content/home';

export function UaeFocus() {
  return (
    <Section className="bg-sand-100">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            title="Your gateway to the UAE"
            lead="The UAE is one of the most accessible places in the world to incorporate, but accessible is not the same as simple. Jurisdictions differ and the right answer depends on specifics."
          />
          <Reveal delay={100} className="mt-8">
            <Button href="/about" variant="primary" size="lg">
              About LeadingZone
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
          <img
            src="/images/dubai-aerial.jpg"
            alt="Aerial view of the Dubai business district"
            width={1400}
            height={933}
            loading="lazy"
            decoding="async"
            className="mt-10 aspect-[4/3] w-full rounded-3xl object-cover"
          />
        </div>

        <div className="lg:col-span-7">
          <ul className="grid gap-5 sm:grid-cols-2">
            {uaeLocations.map((location, i) => (
              <Reveal as="li" key={location.name} delay={i * 60} className="rounded-2xl bg-white p-7">
                <h3 className="text-[18px] font-semibold">{location.name}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slateink-500">
                  {location.body}
                </p>
              </Reveal>
            ))}
          </ul>
          <p className="mt-6 text-[13px] leading-relaxed text-slateink-500">
            LeadingZone is a private consultancy. We are not affiliated with or acting on
            behalf of any UAE government department or free zone authority.
          </p>
        </div>
      </div>
    </Section>
  );
}
