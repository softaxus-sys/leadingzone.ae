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
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow ? <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          'mt-5 text-3xl sm:text-4xl lg:text-[2.6rem]',
          onDark && 'text-white',
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={cn(
            'mt-5 text-[17px] leading-relaxed',
            onDark ? 'text-slate-300/90' : 'text-slateink-500',
          )}
        >
          {lead}
        </p>
      ) : null}
      {children}
    </Reveal>
  );
}
