import Link from 'next/link';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'gold' | 'outline' | 'ghost' | 'onDark';
type Size = 'sm' | 'md' | 'lg';

const base =
  'group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-semibold tracking-tight transition-all duration-300 ease-premium disabled:pointer-events-none disabled:opacity-50';

const variants: Record<Variant, string> = {
  primary:
    'bg-navy-900 text-white shadow-card hover:bg-navy-800 hover:shadow-lift hover:-translate-y-px',
  gold:
    'bg-gold-500 text-navy-950 shadow-card hover:bg-gold-400 hover:shadow-lift hover:-translate-y-px',
  outline:
    'border border-navy-900/15 bg-white text-navy-900 hover:border-navy-900/35 hover:bg-sand-50',
  ghost: 'text-navy-900 hover:text-gold-700',
  onDark:
    'border border-white/25 bg-white/5 text-white backdrop-blur-sm hover:border-gold-500/60 hover:bg-white/10',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-[13px]',
  md: 'h-11 px-6 text-sm',
  lg: 'h-[52px] px-7 text-[15px]',
};

type ButtonProps = {
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>;

export function Button({
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    const external = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:');
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
