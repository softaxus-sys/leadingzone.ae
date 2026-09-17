/**
 * One-off tool: derives the site's brand assets from the supplied master logo.
 *
 *   node scripts/generate-brand-assets.mjs
 *
 * Run this only when the master logo changes. The generated files are committed,
 * so a normal build never needs this script.
 *
 * Masters live in `brand-source/` rather than `public/` on purpose: `public/` is
 * copied verbatim into the static export, so anything left there is published
 * and served. The masters are ~300KB and referenced by nothing at runtime.
 *
 * It uses `sharp`, which is NOT a dependency of this project — it happens to be
 * present because Next.js pulls it in. If it is missing, install it temporarily:
 *
 *   npm i -D sharp && node scripts/generate-brand-assets.mjs && npm un sharp
 *
 * ── Why the reversed logo is generated rather than CSS-filtered ──────────────
 * The master logo is black type with a red mark. The site's header (over the
 * hero) and footer are near-black navy, where black type is invisible. The usual
 * shortcut, `filter: brightness(0) invert(1)`, turns the whole logo white and
 * throws away the red — the only brand colour in the mark. Instead this script
 * recolours black to white per-pixel and leaves red intact, blending across
 * anti-aliased edges so nothing fringes.
 */

import { existsSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const SRC = 'brand-source/leadingzone-logo-master.png';
const OUT = 'public/brand';

/** Content bounding box of the master file, measured from its alpha channel. */
const CONTENT = { left: 79, top: 16, width: 1883, height: 334 };
/** The "A" glyph containing the red mountain mark, isolated by letter gaps. */
const MARK = { left: 403, top: 16, width: 224, height: 229 };

const NAVY = { r: 10, g: 20, b: 36 };

/**
 * Recolour black → white while preserving red.
 *
 * `redness` (red minus the stronger of green/blue) drives a blend rather than a
 * hard threshold, so the anti-aliased boundary between the red mountain and the
 * black letterform stays smooth instead of picking up a white halo.
 */
async function toReversed(input) {
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] === 0) continue;
    const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
    const redness = r - Math.max(g, b);
    const t = Math.min(Math.max(redness / 60, 0), 1);
    data[i] = Math.round(255 * (1 - t) + r * t);
    data[i + 1] = Math.round(255 * (1 - t) + g * t);
    data[i + 2] = Math.round(255 * (1 - t) + b * t);
  }

  return sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toBuffer();
}

async function main() {
  if (!existsSync(SRC)) {
    console.error(`Master logo not found at ${SRC}`);
    process.exit(1);
  }
  mkdirSync(OUT, { recursive: true });

  const trimmed = await sharp(SRC).extract(CONTENT).png().toBuffer();

  // 1. Wordmark for light backgrounds — the master, trimmed and sized down.
  await sharp(trimmed)
    .resize({ width: 900 })
    .png({ compressionLevel: 9 })
    .toFile(path.join(OUT, 'leadingzone-logo.png'));

  // 2. Wordmark for dark backgrounds — white type, red mark preserved.
  const reversed = await toReversed(trimmed);
  await sharp(reversed)
    .resize({ width: 900 })
    .png({ compressionLevel: 9 })
    .toFile(path.join(OUT, 'leadingzone-logo-reversed.png'));

  // 3. Square mark (the "A") on navy — favicon and any compact placement.
  const mark = await sharp(SRC).extract(MARK).png().toBuffer();
  const markReversed = await toReversed(mark);
  const markOnNavy = sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { ...NAVY, alpha: 1 },
    },
  }).composite([
    { input: await sharp(markReversed).resize({ width: 300 }).toBuffer(), gravity: 'centre' },
  ]);
  await markOnNavy.png({ compressionLevel: 9 }).toFile(path.join(OUT, 'leadingzone-mark.png'));

  await sharp(await markOnNavy.png().toBuffer())
    .resize(256, 256)
    .png({ compressionLevel: 9 })
    .toFile('public/favicon.png');

  // 4. Open Graph card — 1200x630 navy with the reversed wordmark centred.
  await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: { ...NAVY, alpha: 1 },
    },
  })
    .composite([
      { input: await sharp(reversed).resize({ width: 760 }).toBuffer(), gravity: 'centre' },
    ])
    .png({ compressionLevel: 9 })
    .toFile('public/og-image.png');

  console.log('Generated:');
  for (const f of [
    `${OUT}/leadingzone-logo.png`,
    `${OUT}/leadingzone-logo-reversed.png`,
    `${OUT}/leadingzone-mark.png`,
    'public/favicon.png',
    'public/og-image.png',
  ]) {
    const m = await sharp(f).metadata();
    console.log(`  ${f}  ${m.width}x${m.height}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
