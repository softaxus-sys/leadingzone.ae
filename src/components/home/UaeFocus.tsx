import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { DubaiSkyline } from '@/components/ui/Skyline';
import { uaeLocations } from '@/content/home';
import { ArrowRight } from 'lucide-react';

export function UaeFocus() {
  return (
    <Section className="lz-grain relative overflow-hidden bg-navy-900">
      {/* Skyline anchored to the bottom-right, faded out toward the copy. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[52%] opacity-40 [mask-image:linear-gradient(to_top,black,transparent)]"
      >
        <DubaiSkyline />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-0 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgb(200_169_106/0.12)_0%,transparent_66%)]"
      />

      <div className="relative grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            onDark
            eyebrow="UAE Focus"
            title="Your Gateway to the UAE"
            lead="The UAE remains one of the most accessible places in the world to incorporate — but accessible is not the same as simple. Jurisdictions differ, requirements shift, and the right answer depends on specifics."
          />

          <Reveal delay={140} className="mt-9">
            <p className="text-[15px] leading-relaxed text-slate-400">
              We work across Dubai, Abu Dhabi and the Northern Emirates, and with
              founders using a UAE entity as the base for wider GCC activity. Whatever
              the emirate, the approach is the same: understand the business first,
              then recommend the jurisdiction.
            </p>
            <Button href="/about" variant="onDark" size="lg" className="mt-9">
              About LeadingZone
              <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-1" />
            </Button>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <ul className="grid gap-px overflow-hidden rounded-md bg-white/10 sm:grid-cols-2">
            {uaeLocations.map((location, i) => (
              <Reveal
                as="li"
                key={location.name}
                delay={i * 80}
                className="bg-navy-900/95 p-7 backdrop-blur-sm"
              >
                <h3 className="text-[17px] font-bold text-white">{location.name}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-slate-400">
                  {location.body}
                </p>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={200}>
            <p className="mt-7 text-[12.5px] leading-relaxed text-slate-500">
              LeadingZone is a private consultancy and business services provider. We
              are not affiliated with, endorsed by, or acting on behalf of any UAE
              government department or free zone authority.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
