import Link from 'next/link';
import { cn } from '@/lib/utils';
import { site } from '@/content/site';

/**
 * Wordmark + monogram. The mark is an "L" bracket enclosing a "Z" stroke,
 * sized on a 32px grid so it stays legible in the header and the footer.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
      className={cn('h-8 w-8', className)}
    >
      <rect
        x="0.75"
        y="0.75"
        width="30.5"
        height="30.5"
        rx="3.25"
        className="fill-navy-900"
      />
      {/* "Z" stroke */}
      <path
        d="M10 10h12l-9.5 12H22"
        fill="none"
        strokeWidth="2.4"
        strokeLinecap="square"
        strokeLinejoin="miter"
        className="stroke-gold-500"
      />
      {/* "L" foot, offset to read as a bracket under the Z */}
      <path d="M10 10v12" fill="none" strokeWidth="2.4" className="stroke-white/85" />
    </svg>
  );
}

export function Logo({
  onDark = false,
  className,
}: {
  onDark?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={cn('group inline-flex items-center gap-3', className)}
    >
      <LogoMark className="h-9 w-9 transition-transform duration-500 ease-premium group-hover:scale-[1.04]" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-display text-[19px] font-extrabold tracking-[-0.02em]',
            onDark ? 'text-white' : 'text-navy-900',
          )}
        >
          Leading<span className="text-gold-600">Zone</span>
        </span>
        <span
          className={cn(
            'mt-1 text-[9.5px] font-semibold uppercase tracking-[0.2em]',
            onDark ? 'text-slate-400' : 'text-slateink-500',
          )}
        >
          Consultancy
        </span>
      </span>
    </Link>
  );
}
