import { cn } from '@/lib/utils';

/**
 * Kept as a thin wrapper so existing call sites keep working. Content renders
 * immediately; there is no scroll-triggered fade, so nothing is ever hidden.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  /** Unused. Retained for call-site compatibility. */
  delay?: number;
  as?: 'div' | 'li' | 'section' | 'span';
}) {
  void delay;
  return <Tag className={cn(className)}>{children}</Tag>;
}
