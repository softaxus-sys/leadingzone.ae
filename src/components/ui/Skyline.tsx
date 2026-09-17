import { cn } from '@/lib/utils';

/**
 * Dubai skyline silhouette, drawn inline as SVG.
 *
 * Deliberately not a photograph: it ships as ~4KB of markup, needs no network
 * request, has no licensing constraints and stays crisp at any width. Landmark
 * profiles are stylised (Emirates Towers, Museum of the Future, Burj Khalifa,
 * Burj Al Arab) rather than literal reproductions.
 *
 * To swap in real photography later, replace the <DubaiSkyline /> usage in
 * `src/components/home/Hero.tsx` with a <picture>/<Image> element — the
 * surrounding overlay and gradient stack is designed to work with either.
 */
export function DubaiSkyline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1600 520"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      focusable="false"
      className={cn('h-full w-full', className)}
    >
      <defs>
        {/* Warm haze sitting on the horizon line. */}
        <linearGradient id="lz-haze" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="rgb(200 169 106)" stopOpacity="0.30" />
          <stop offset="45%" stopColor="rgb(200 169 106)" stopOpacity="0.08" />
          <stop offset="100%" stopColor="rgb(200 169 106)" stopOpacity="0" />
        </linearGradient>

        {/* Depth layers: further back reads lighter against the navy field. */}
        <linearGradient id="lz-far" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgb(39 64 95)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="rgb(17 32 56)" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="lz-mid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgb(26 46 76)" stopOpacity="0.92" />
          <stop offset="100%" stopColor="rgb(10 20 36)" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="lz-near" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgb(10 20 36)" />
          <stop offset="100%" stopColor="rgb(5 11 20)" />
        </linearGradient>

        {/* Lit windows, tiled over the near layer only. */}
        <pattern id="lz-windows" width="11" height="16" patternUnits="userSpaceOnUse">
          <rect x="3" y="5" width="2.5" height="4" fill="rgb(217 193 142)" opacity="0.10" />
          <rect x="7" y="11" width="2" height="3" fill="rgb(217 193 142)" opacity="0.05" />
        </pattern>

        <g id="lz-near-shapes">
          {/* Emirates-style twin towers with chamfered crowns. */}
          <path d="M232 520V236l34-46 34 46v284Z" />
          <path d="M318 520V282l28-38 28 38v238Z" />

          {/* Mid-rise cluster, left of centre. */}
          <path d="M404 520V318h62v202Z" />
          <path d="M478 520V270h48v250Z" />
          <path d="M538 520V352h54v168Z" />
          <path d="M604 520V296h40v224Z" />

          {/* Burj Khalifa: stepped setbacks tapering to a spire. */}
          <path d="M756 520V372h14v-62h9v-52h7v-46h6v-34h4v-28h2.5L800 44l1.5 106h2.5v28h4v34h6v46h7v52h9v62h14v148Z" />

          {/* Towers stepping down to the right of the spire. */}
          <path d="M856 520V330h44v190Z" />
          <path d="M912 520V286h34v234Z" />
          <path d="M958 520V360h40v160Z" />

          {/* Museum of the Future: torus on a landscaped base. */}
          <path
            fillRule="evenodd"
            d="M1042 428a52 66 0 1 1 104 0 52 66 0 1 1-104 0Zm30 0a22 30 0 1 0 44 0 22 30 0 1 0-44 0Z"
          />
          <path d="M1058 494h72l10 26h-92Z" />

          {/* Burj Al Arab: straight mast with a concave sail. */}
          <path d="M1204 520V148c0-34 28-66 68-82v454Z" />
          <path d="M1272 66c30 74 58 254 68 454h-68Z" />

          {/* Right-hand cluster. */}
          <path d="M1372 520V344h46v176Z" />
          <path d="M1430 520V300h32v220Z" />
          <path d="M1474 520V378h52v142Z" />
        </g>
      </defs>

      {/* Horizon haze behind everything. */}
      <rect x="0" y="180" width="1600" height="340" fill="url(#lz-haze)" />

      {/* Far layer — low-contrast background massing. */}
      <g fill="url(#lz-far)" opacity="0.5">
        <path d="M0 520V394h70v126Z" />
        <path d="M84 520V350h56v170Z" />
        <path d="M152 520V412h74v108Z" />
        <path d="M640 520V336h52v184Z" />
        <path d="M700 520V300h40v220Z" />
        <path d="M1008 520V402h56v118Z" />
        <path d="M1160 520V356h40v164Z" />
        <path d="M1534 520V368h66v152Z" />
      </g>

      {/* Mid layer. */}
      <g fill="url(#lz-mid)" opacity="0.85">
        <path d="M40 520V330h54v190Z" />
        <path d="M108 520V386h60v134Z" />
        <path d="M180 520V300h44v220Z" />
        <path d="M1000 520V340h36v180Z" />
        <path d="M1120 520V312h38v208Z" />
        <path d="M1336 520V330h40v190Z" />
        <path d="M1500 520V296h44v224Z" />
      </g>

      {/* Near layer, drawn twice: once solid, once with the window pattern. */}
      <use href="#lz-near-shapes" fill="url(#lz-near)" />
      <use href="#lz-near-shapes" fill="url(#lz-windows)" />

      {/* Ground line with a faint gold edge. */}
      <rect x="0" y="516" width="1600" height="4" fill="rgb(200 169 106)" opacity="0.13" />
    </svg>
  );
}
