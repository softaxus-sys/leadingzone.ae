'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, ChevronDown, Menu, MessageCircle, X } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { contact, primaryNav, type NavItem } from '@/content/site';
import { cn } from '@/lib/utils';

/** Fixed white header. A soft shadow appears once the page scrolls. */
export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
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

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300',
        scrolled && 'shadow-[0_4px_24px_-12px_rgb(0_0_0/0.18)]',
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between gap-6">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {primaryNav.map((item) => (
              <DesktopNavItem
                key={item.label}
                item={item}
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
              className="hidden h-11 items-center gap-2 whitespace-nowrap rounded-lg bg-gold-600 px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-gold-700 lg:inline-flex"
            >
              Free Consultation
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="lz-mobile-nav"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-sand-100 text-navy-900 transition-colors hover:bg-sand-200 lg:hidden"
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
  active,
  open,
  onOpen,
  onClose,
}: {
  item: NavItem;
  active: boolean;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const linkClasses = cn(
    'inline-flex h-10 items-center gap-1.5 whitespace-nowrap rounded-lg px-3.5 text-[14.5px] font-medium transition-colors duration-200',
    active ? 'bg-sand-100 text-navy-900' : 'text-slateink-700 hover:bg-sand-100 hover:text-navy-900',
  );

  if (!item.groups) {
    return (
      <Link href={item.href} className={linkClasses}>
        {item.label}
      </Link>
    );
  }

  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <Link href={item.href} className={linkClasses} aria-expanded={open} onFocus={onOpen}>
        {item.label}
        <ChevronDown
          className={cn('h-3.5 w-3.5 transition-transform duration-300 ease-premium', open && 'rotate-180')}
          strokeWidth={2.5}
        />
      </Link>

      <div
        className={cn(
          'absolute left-1/2 top-full z-50 w-[min(50rem,calc(100vw-4rem))] -translate-x-1/2 pt-2 transition-all duration-200 ease-premium',
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

function MegaMenu({ item }: { item: NavItem }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-[0_16px_48px_-12px_rgb(0_0_0/0.22)]">
      <div className="grid gap-x-8 gap-y-6 p-6 sm:grid-cols-2">
        {item.groups?.map((group) => (
          <div key={group.heading}>
            <p className="mb-3 px-3 text-[13px] font-semibold text-gold-600">{group.heading}</p>
            <ul className="space-y-0.5">
              {group.items.map((child) => (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    className="block rounded-xl px-3 py-2.5 transition-colors duration-200 hover:bg-sand-100"
                  >
                    <span className="block text-[14.5px] font-semibold text-navy-900">
                      {child.label}
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
    </div>
  );
}

/* -------------------------------------------------------------------------- */

function MobileNav({ open, pathname }: { open: boolean; pathname: string }) {
  return (
    <div
      id="lz-mobile-nav"
      className={cn(
        'overflow-hidden bg-white transition-[max-height,opacity] duration-500 ease-premium lg:hidden',
        open ? 'max-h-[calc(100vh-80px)] opacity-100' : 'max-h-0 opacity-0',
      )}
    >
      <div className="max-h-[calc(100vh-80px)] overflow-y-auto overscroll-contain pb-8">
        <Container className="pt-2">
          <nav aria-label="Mobile">
            {primaryNav.map((item) =>
              item.groups ? (
                <div key={item.label} className="mb-4">
                  <Link href={item.href} className="block py-3 text-[16px] font-semibold text-navy-900">
                    {item.label}
                  </Link>
                  <ul className="space-y-0.5 pl-3">
                    {item.groups.flatMap((group) => group.items).map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={cn(
                            'block py-2 text-[15px] transition-colors',
                            pathname === child.href
                              ? 'font-semibold text-gold-600'
                              : 'text-slateink-700',
                          )}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block py-3 text-[16px] font-semibold text-navy-900"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="mt-6 space-y-3">
            <Link
              href="/contact"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-gold-600 text-sm font-semibold text-white"
            >
              Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-sand-100 text-sm font-semibold text-navy-900"
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
