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
  tight: 'py-12 sm:py-14',
  default: 'py-16 sm:py-20 lg:py-24',
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
