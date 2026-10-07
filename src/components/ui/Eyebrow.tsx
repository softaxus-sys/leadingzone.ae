import { cn } from '@/lib/utils';

/** Small uppercase label with a gold tick mark, used above section headings. */
export function Eyebrow({
  children,
  className,
  onDark = false,
}: {
  children: React.ReactNode;
  className?: string;
  onDark?: boolean;
}) {
  return (
    <span className={cn('lz-eyebrow', onDark && 'text-white', className)}>
      <span
        aria-hidden
        className={cn('h-px w-7', onDark ? 'bg-white/70' : 'bg-gold-600/70')}
      />
      {children}
    </span>
  );
}
