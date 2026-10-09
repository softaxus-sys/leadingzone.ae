import { cn } from '@/lib/utils';
import { Eyebrow } from './Eyebrow';
import { Reveal } from './Reveal';

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  onDark = false,
  className,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: 'left' | 'center';
  onDark?: boolean;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <Reveal
      className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}
    >
      {eyebrow ? <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          'text-[1.9rem] font-semibold leading-[1.15] tracking-[-0.015em] sm:text-4xl lg:text-[2.5rem]',
          eyebrow && 'mt-3',
          onDark && 'text-white',
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={cn(
            'mt-4 text-[17px] leading-relaxed',
            onDark ? 'text-white/75' : 'text-slateink-500',
          )}
        >
          {lead}
        </p>
      ) : null}
      {children}
    </Reveal>
  );
}
