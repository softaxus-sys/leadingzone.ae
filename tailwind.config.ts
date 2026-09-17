import type { Config } from 'tailwindcss';

/**
 * Colours are wired to CSS custom properties declared in `src/app/globals.css`
 * as space-separated RGB channels. Changing the palette is a one-file edit
 * there — Tailwind opacity modifiers (e.g. `bg-navy-900/70`) keep working.
 */
const token = (name: string) => `rgb(var(${name}) / <alpha-value>)`;

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: token('--lz-navy-950'),
          900: token('--lz-navy-900'),
          800: token('--lz-navy-800'),
          700: token('--lz-navy-700'),
          600: token('--lz-navy-600'),
          500: token('--lz-navy-500'),
        },
        gold: {
          700: token('--lz-gold-700'),
          600: token('--lz-gold-600'),
          500: token('--lz-gold-500'),
          400: token('--lz-gold-400'),
          300: token('--lz-gold-300'),
          100: token('--lz-gold-100'),
        },
        sand: {
          50: token('--lz-sand-50'),
          100: token('--lz-sand-100'),
          200: token('--lz-sand-200'),
        },
        slateink: {
          900: token('--lz-ink-900'),
          700: token('--lz-ink-700'),
          500: token('--lz-ink-500'),
          300: token('--lz-ink-300'),
          200: token('--lz-ink-200'),
          100: token('--lz-ink-100'),
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-inter)', 'ui-sans-serif', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.04', letterSpacing: '-0.035em' }],
        '6xl': ['3.75rem', { lineHeight: '1.06', letterSpacing: '-0.032em' }],
        '5xl': ['3rem', { lineHeight: '1.08', letterSpacing: '-0.03em' }],
        '4xl': ['2.25rem', { lineHeight: '1.14', letterSpacing: '-0.025em' }],
        '3xl': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      },
      maxWidth: {
        container: '78rem',
        prose: '44rem',
      },
      boxShadow: {
        card: '0 1px 2px rgb(15 23 42 / 0.04), 0 8px 24px -12px rgb(15 23 42 / 0.10)',
        lift: '0 2px 4px rgb(15 23 42 / 0.04), 0 24px 48px -20px rgb(15 23 42 / 0.20)',
        ring: '0 0 0 1px rgb(15 23 42 / 0.06)',
      },
      backgroundImage: {
        'gold-line':
          'linear-gradient(90deg, transparent, rgb(var(--lz-gold-500) / 0.65), transparent)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'none' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'sheen': {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(220%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.9s ease both',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
