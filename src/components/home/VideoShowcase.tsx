import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

/** Brand video shown below the hero. */
export function VideoShowcase() {
  return (
    <Section className="bg-sand-100">
      <SectionHeading
        align="center"
        title="Launch your Dubai business with LeadingZone"
        lead="Quick business setup, visa help and hassle-free corporate services. Contact us for a free consultation and current offers."
      />
      <Reveal className="mx-auto mt-12 max-w-4xl">
        <video
          controls
          playsInline
          preload="metadata"
          className="aspect-video w-full rounded-3xl bg-black object-cover"
        >
          <source src="/videos/leading_zone_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Reveal>
    </Section>
  );
}
