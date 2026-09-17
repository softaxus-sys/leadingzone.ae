import { cn } from '@/lib/utils';
import { Container } from './Container';

type SectionProps = {
  id?: string;
  className?: string;
  containerClassName?: string;
  /** Vertical rhythm. `tight` for supporting bands, `default` for full sections. */
  size?: 'tight' | 'default' | 'loose';
  children: React.ReactNode;
};

const sizes = {
  tight: 'py-14 sm:py-16',
  default: 'py-20 sm:py-24 lg:py-28',
  loose: 'py-24 sm:py-32 lg:py-36',
} as const;

export function Section({
  id,
  className,
  containerClassName,
  size = 'default',
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn('relative', sizes[size], className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
