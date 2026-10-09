import { cn } from '@/lib/utils';

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
    <span
      className={cn(
        'inline-block text-[13px] font-semibold',
        onDark ? 'text-white/80' : 'text-gold-600',
        className,
      )}
    >
      {children}
    </span>
  );
}
