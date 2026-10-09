import Link from 'next/link';
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Youtube,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { LogoFooter } from '@/components/ui/Logo';
import { contact, footerNav, site, social } from '@/content/site';

const socialLinks = [
  { href: social.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: social.instagram, label: 'Instagram', Icon: Instagram },
  { href: social.facebook, label: 'Facebook', Icon: Facebook },
  { href: social.youtube, label: 'YouTube', Icon: Youtube },
].filter((s): s is { href: string; label: string; Icon: typeof Linkedin } =>
  Boolean(s.href),
);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white/75">
      <Container>
        <div className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
          {/* Brand + contact */}
          <div className="lg:col-span-4">
            <LogoFooter />

            <p className="mt-6 max-w-sm text-[14.5px] leading-relaxed text-white/75">
              A private business setup and corporate services consultancy helping
              entrepreneurs and companies establish and operate in the United Arab
              Emirates.
            </p>

            <ul className="mt-8 space-y-3.5 text-[14.5px]">
              <li>
                <a
                  href={contact.phoneHref}
                  className="group inline-flex items-start gap-3 transition-colors hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white" strokeWidth={2} />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-start gap-3 transition-colors hover:text-white"
                >
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-white" strokeWidth={2} />
                  WhatsApp {contact.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={contact.emailHref}
                  className="group inline-flex items-start gap-3 transition-colors hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white" strokeWidth={2} />
                  {contact.email}
                </a>
              </li>
              <li className="inline-flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white" strokeWidth={2} />
                <span>
                  {contact.address.line1}
                  <br />
                  {contact.address.line2}
                </span>
              </li>
            </ul>

            {socialLinks.length > 0 ? (
              <div className="mt-8 flex items-center gap-2.5">
                {socialLinks.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-gold-600"
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.8} />
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          {/* Link columns */}
          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7 lg:col-start-6">
            <FooterColumn title="Business Setup" links={footerNav.businessSetup} />
            <FooterColumn title="Corporate Services" links={footerNav.corporateServices} />
            <FooterColumn title="Company" links={footerNav.company} />
          </div>
        </div>

        {/* Disclosure: keeps the consultancy/authority distinction explicit. */}
        <div className="border-t border-white/10 py-6">
          <p className="max-w-4xl text-[12.5px] leading-relaxed text-white/60">
            {site.legalName} is an independent private consultancy providing business
            setup and corporate support services. We are not a government authority,
            free zone authority, bank, law firm or licensed tax agent, and we do not
            issue licences, visas or approvals. All applications are subject to the
            decisions of the relevant authorities. Information on this website is
            general in nature, may change, and should not be relied on as legal,
            financial or tax advice.
          </p>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-[12.5px] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="transition-colors hover:text-white">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-[15px] font-semibold text-white">
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group inline-flex items-center gap-1.5 text-[14.5px] text-white/75 transition-colors duration-200 hover:text-white"
            >
              {link.label}
              
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
