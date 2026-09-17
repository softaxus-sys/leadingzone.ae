'use client';

import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { contact } from '@/content/site';
import { cn } from '@/lib/utils';

/**
 * Floating WhatsApp entry point. Appears after the hero so it never competes
 * with the primary CTA above the fold.
 */
export function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Message ${contact.whatsapp} on WhatsApp`}
      className={cn(
        'group fixed bottom-6 right-5 z-40 inline-flex h-14 items-center gap-3 rounded-full bg-navy-900 pl-4 pr-5 text-white shadow-lift transition-all duration-500 ease-premium hover:bg-navy-800 sm:bottom-8 sm:right-8',
        visible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0',
      )}
    >
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold-500 text-navy-950">
        <MessageCircle className="h-[18px] w-[18px]" strokeWidth={2.2} />
      </span>
      <span className="hidden text-sm font-semibold sm:inline">Chat with us</span>
    </a>
  );
}
