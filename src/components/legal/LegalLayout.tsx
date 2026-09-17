import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { CtaBand } from '@/components/ui/CtaBand';

/**
 * Prose wrapper for policy pages. Typography is set here rather than with a
 * plugin so the project keeps its dependency list short.
 */
export function LegalLayout({
  title,
  lead,
  updated,
  children,
}: {
  title: string;
  lead: string;
  /** Human-readable date, e.g. "17 September 2026". */
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={title}
        lead={lead}
        crumbs={[{ label: title }]}
      />

      <Section className="bg-white">
        <div className="mx-auto max-w-prose">
          <p className="mb-12 border-b border-slateink-200 pb-6 text-[13px] font-medium uppercase tracking-[0.12em] text-slateink-500">
            Last updated: {updated}
          </p>

          <div
            className="
              [&>h2]:mt-12 [&>h2]:text-[24px] [&>h2]:font-bold [&>h2:first-child]:mt-0
              [&>h3]:mt-9 [&>h3]:text-[18px] [&>h3]:font-bold
              [&>p]:mt-5 [&>p]:text-[15.5px] [&>p]:leading-relaxed [&>p]:text-slateink-700
              [&>ul]:mt-5 [&>ul]:space-y-2.5 [&>ul]:pl-5
              [&>ul>li]:list-disc [&>ul>li]:text-[15.5px] [&>ul>li]:leading-relaxed [&>ul>li]:text-slateink-700
              [&>ul>li]:marker:text-gold-600
              [&_a]:font-medium [&_a]:text-navy-900 [&_a]:underline [&_a]:decoration-gold-500 [&_a]:underline-offset-4
            "
          >
            {children}
          </div>
        </div>
      </Section>

      <CtaBand
        eyebrow="Questions?"
        title="Need Something Clarified?"
        lead="If anything in this policy is unclear, or you want to exercise a right described here, get in touch and we will respond."
      />
    </>
  );
}
