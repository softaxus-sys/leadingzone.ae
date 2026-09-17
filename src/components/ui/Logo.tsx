import Link from 'next/link';
import { cn } from '@/lib/utils';
import { site } from '@/content/site';

/**
 * The LeadingZone wordmark.
 *
 * Two files rather than one with a CSS filter. The master logo is black type
 * with a red mark; on the navy header and footer black is invisible, and the
 * usual `brightness(0) invert(1)` trick would flatten the red away with it. The
 * reversed file is recoloured per-pixel — black to white, red preserved — by
 * `scripts/generate-brand-assets.mjs`.
 *
 * Both files are 900x160 (5.625:1). Widths below are that ratio applied to the
 * chosen height, hard-coded so the box is reserved before the image decodes and
 * the header never shifts on load.
 */
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
      aria-label={`${site.legalName} — home`}
      className={cn('inline-flex shrink-0 items-center', className)}
    >
      {/*
        Both variants are stacked and cross-faded with opacity rather than
        swapped through `src`, so the header's light/dark transition matches the
        rest of the bar instead of flashing while the other file decodes.
      */}
      <span className="relative block h-8 w-[180px] lg:h-10 lg:w-[225px]">
        <img
          src="/brand/leadingzone-logo.png"
          alt={site.legalName}
          width={900}
          height={160}
          decoding="async"
          fetchPriority="high"
          className={cn(
            'absolute inset-0 h-full w-full object-contain object-left transition-opacity duration-300 ease-premium',
            onDark ? 'opacity-0' : 'opacity-100',
          )}
        />
        <img
          src="/brand/leadingzone-logo-reversed.png"
          alt=""
          aria-hidden="true"
          width={900}
          height={160}
          decoding="async"
          fetchPriority="high"
          className={cn(
            'absolute inset-0 h-full w-full object-contain object-left transition-opacity duration-300 ease-premium',
            onDark ? 'opacity-100' : 'opacity-0',
          )}
        />
      </span>
    </Link>
  );
}

/** Footer lockup — always reversed, since the footer ground is always navy. */
export function LogoFooter({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${site.legalName} — home`}
      className={cn('inline-flex', className)}
    >
      <img
        src="/brand/leadingzone-logo-reversed.png"
        alt={site.legalName}
        width={900}
        height={160}
        loading="lazy"
        decoding="async"
        className="h-11 w-[248px] object-contain object-left"
      />
    </Link>
  );
}
