'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, ChevronDown, Menu, MessageCircle, Phone, X } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { contact, primaryNav, type NavItem } from '@/content/site';
import { cn } from '@/lib/utils';

/**
 * Sticky header with two states.
 *
 * Every page on this site opens with a dark hero, so at scroll-top the header
 * renders transparent with light type sitting over that hero. Once the user
 * scrolls past it, the bar turns solid white and the type inverts to navy.
 */
export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Route change closes everything.
  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setOpenMenu(null);
      setMobileOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Small delay on close so the pointer can cross the gap to the panel.
  const scheduleClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const isActive = (href: string) => {
    const base = href.split('#')[0];
    if (base === '/') return pathname === '/';
    return pathname === base || pathname.startsWith(`${base}/`);
  };

  /**
   * Solid = white bar with navy type. Deliberately NOT tied to the mega-menu:
   * the menu panel is opaque white on its own, and flipping the bar while the
   * utility strip is still showing would leave that strip light-on-white.
   */
  const solid = scrolled || mobileOpen;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-premium',
        solid
          ? 'border-b border-slateink-200/80 bg-white/[0.94] shadow-[0_1px_20px_-8px_rgb(15_23_42_/_0.18)] backdrop-blur-xl'
          : 'border-b border-white/[0.08] bg-transparent',
      )}
    >
      {/* Utility bar — collapses on scroll to reclaim vertical space. */}
      <div
        className={cn(
          'hidden overflow-hidden border-b border-white/10 transition-[max-height,opacity] duration-300 ease-premium lg:block',
          scrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100',
        )}
      >
        <Container className="flex h-10 items-center justify-between text-[12.5px]">
          <p className="text-slate-400">
            Business setup &amp; corporate services in the UAE
          </p>
          <div className="flex items-center gap-6">
            <a
              href={contact.phoneHref}
              className="inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-gold-400"
            >
              <Phone className="h-3.5 w-3.5" strokeWidth={2} />
              {contact.phone}
            </a>
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-gold-400"
            >
              <MessageCircle className="h-3.5 w-3.5" strokeWidth={2} />
              WhatsApp
            </a>
          </div>
        </Container>
      </div>

      <Container>
        <div className="flex h-[76px] items-center justify-between gap-6">
          <Logo onDark={!solid} />

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {primaryNav.map((item) => (
              <DesktopNavItem
                key={item.label}
                item={item}
                solid={solid}
                active={isActive(item.href)}
                open={openMenu === item.label}
                onOpen={() => {
                  cancelClose();
                  setOpenMenu(item.groups ? item.label : null);
                }}
                onClose={scheduleClose}
              />
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className={cn(
                'group hidden h-11 items-center gap-2 rounded-sm px-5 text-sm font-semibold shadow-card transition-all duration-300 ease-premium hover:-translate-y-px hover:shadow-lift lg:inline-flex',
                solid
                  ? 'bg-navy-900 text-white hover:bg-navy-800'
                  : 'bg-gold-500 text-navy-950 hover:bg-gold-400',
              )}
            >
              Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-0.5" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="lz-mobile-nav"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              className={cn(
                'inline-flex h-11 w-11 items-center justify-center rounded-sm border transition-colors lg:hidden',
                solid
                  ? 'border-slateink-200 bg-white text-navy-900 hover:border-navy-900/30'
                  : 'border-white/25 bg-white/5 text-white hover:border-gold-500/60',
              )}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </Container>

      <MobileNav open={mobileOpen} pathname={pathname} />
    </header>
  );
}

/* -------------------------------------------------------------------------- */

function DesktopNavItem({
  item,
  solid,
  active,
  open,
  onOpen,
  onClose,
}: {
  item: NavItem;
  solid: boolean;
  active: boolean;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const linkClasses = cn(
    'relative inline-flex h-10 items-center gap-1.5 rounded-sm px-3.5 text-[14.5px] font-medium transition-colors duration-200',
    solid
      ? active
        ? 'text-navy-900'
        : 'text-slateink-700 hover:text-navy-900'
      : active
        ? 'text-white'
        : 'text-slate-300 hover:text-white',
  );

  if (!item.groups) {
    return (
      <Link href={item.href} className={linkClasses}>
        {item.label}
        <Underline show={active} />
      </Link>
    );
  }

  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <Link href={item.href} className={linkClasses} aria-expanded={open} onFocus={onOpen}>
        {item.label}
        <ChevronDown
          className={cn(
            'h-3.5 w-3.5 transition-transform duration-300 ease-premium',
            open && 'rotate-180',
          )}
          strokeWidth={2.5}
        />
        <Underline show={active} />
      </Link>

      <div
        className={cn(
          'absolute left-1/2 top-full z-50 w-[min(52rem,calc(100vw-4rem))] -translate-x-1/2 pt-3 transition-all duration-200 ease-premium',
          open
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-1 opacity-0',
        )}
      >
        <MegaMenu item={item} />
      </div>
    </div>
  );
}

function Underline({ show }: { show: boolean }) {
  return (
    <span
      aria-hidden
      className={cn(
        'absolute inset-x-3.5 bottom-1 h-px origin-left bg-gold-500 transition-transform duration-300 ease-premium',
        show ? 'scale-x-100' : 'scale-x-0',
      )}
    />
  );
}

function MegaMenu({ item }: { item: NavItem }) {
  return (
    <div className="overflow-hidden rounded-md border border-slateink-200 bg-white shadow-lift">
      <div className="grid gap-x-8 gap-y-7 p-7 sm:grid-cols-2">
        {item.groups?.map((group) => (
          <div key={group.heading}>
            <p className="lz-eyebrow mb-4">
              <span aria-hidden className="h-px w-5 bg-gold-600/70" />
              {group.heading}
            </p>
            <ul className="space-y-0.5">
              {group.items.map((child) => (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    className="group/link block rounded-sm px-3 py-2.5 transition-colors duration-200 hover:bg-sand-100"
                  >
                    <span className="flex items-center gap-2 text-[14.5px] font-semibold text-navy-900">
                      {child.label}
                      <ArrowRight className="h-3.5 w-3.5 -translate-x-1 text-gold-600 opacity-0 transition-all duration-300 ease-premium group-hover/link:translate-x-0 group-hover/link:opacity-100" />
                    </span>
                    <span className="mt-0.5 block text-[13px] leading-snug text-slateink-500">
                      {child.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-slateink-200 bg-sand-50 px-7 py-4">
        <p className="text-[13px] text-slateink-500">
          Not sure which route fits your business?
        </p>
        <Link
          href="/contact"
          className="lz-link-underline inline-flex items-center gap-1.5 text-[13px] font-semibold text-navy-900"
        >
          Book a free consultation
          <ArrowRight className="h-3.5 w-3.5 text-gold-600" />
        </Link>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */

function MobileNav({ open, pathname }: { open: boolean; pathname: string }) {
  return (
    <div
      id="lz-mobile-nav"
      className={cn(
        'overflow-hidden border-t border-slateink-200 bg-white transition-[max-height,opacity] duration-500 ease-premium lg:hidden',
        open ? 'max-h-[calc(100vh-76px)] opacity-100' : 'max-h-0 opacity-0',
      )}
    >
      <div className="max-h-[calc(100vh-76px)] overflow-y-auto overscroll-contain pb-8">
        <Container className="pt-6">
          <nav aria-label="Mobile">
            {primaryNav.map((item) =>
              item.groups ? (
                <div key={item.label} className="mb-6">
                  <Link
                    href={item.href}
                    className="mb-3 block text-[15px] font-bold text-navy-900"
                  >
                    {item.label}
                  </Link>
                  {item.groups.map((group) => (
                    <div
                      key={group.heading}
                      className="mb-4 border-l border-slateink-200 pl-4"
                    >
                      <p className="lz-eyebrow mb-2">
                        <span aria-hidden className="h-px w-4 bg-gold-600/70" />
                        {group.heading}
                      </p>
                      <ul>
                        {group.items.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={cn(
                                'block py-2 text-[14.5px] transition-colors',
                                pathname === child.href
                                  ? 'font-semibold text-gold-700'
                                  : 'text-slateink-700',
                              )}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block border-b border-slateink-100 py-3.5 text-[15px] font-semibold text-navy-900"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          {/* CTA stays visible at the end of the sheet. */}
          <div className="mt-7 space-y-3">
            <Link
              href="/contact"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-sm bg-navy-900 text-sm font-semibold text-white"
            >
              Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-sm border border-slateink-200 text-sm font-semibold text-navy-900"
            >
              <MessageCircle className="h-4 w-4 text-gold-600" />
              WhatsApp {contact.whatsapp}
            </a>
          </div>
        </Container>
      </div>
    </div>
  );
}
