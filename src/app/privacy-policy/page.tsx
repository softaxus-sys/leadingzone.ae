import type { Metadata } from 'next';
import { LegalLayout } from '@/components/legal/LegalLayout';
import { contact, site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How LeadingZone Consultancy collects, uses and protects personal information submitted through this website.',
  alternates: { canonical: '/privacy-policy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lead="How we handle the information you share with us, and what rights you have over it."
      updated="17 September 2026"
    >
      <h2>1. Who we are</h2>
      <p>
        {site.legalName} (&ldquo;LeadingZone&rdquo;, &ldquo;we&rdquo;,
        &ldquo;us&rdquo;) is a private business setup and corporate services
        consultancy operating in the United Arab Emirates. This policy explains how we
        handle personal information collected through{' '}
        <a href={site.url}>{site.url.replace('https://', '')}</a> and through enquiries
        made to us.
      </p>
      <p>
        For any privacy question, or to exercise a right described below, contact us at{' '}
        <a href={contact.emailHref}>{contact.email}</a>.
      </p>

      <h2>2. Information we collect</h2>
      <p>We collect personal information in two ways.</p>
      <h3>Information you give us</h3>
      <p>
        When you complete the enquiry form, email us, message us on WhatsApp or call
        us, you may provide:
      </p>
      <ul>
        <li>Your name and country of residence</li>
        <li>Your email address and phone or WhatsApp number</li>
        <li>Details of the business you intend to establish or operate</li>
        <li>The service you are interested in and any indicative budget</li>
        <li>
          Any further information you choose to include in correspondence with us
        </li>
      </ul>
      <p>
        If you go on to engage us, we will separately collect the documentation
        required to progress your application — which may include identity documents,
        proof of address and corporate records. That information is handled under the
        engagement terms agreed with you.
      </p>

      <h3>Information collected automatically</h3>
      <p>
        This website is a static site and does not require you to create an account or
        log in. Our hosting provider may record standard technical information such as
        IP address, browser type and pages requested, for security and performance
        purposes. If analytics or advertising tools are added to the site in future,
        this policy will be updated to say so before they are enabled.
      </p>

      <h2>3. How the enquiry form works</h2>
      <p>
        The enquiry form on our contact page does not transmit anything to a server.
        Completing it opens your own email client or WhatsApp with the message
        pre-filled, and nothing is sent until you choose to send it. The information
        stays in your browser until that point.
      </p>

      <h2>4. How we use your information</h2>
      <p>We use personal information to:</p>
      <ul>
        <li>Respond to your enquiry and provide the consultation you requested</li>
        <li>Prepare proposals, quotations and scope documents</li>
        <li>Deliver the services you engage us for</li>
        <li>
          Prepare and submit applications to the relevant authorities, free zone bodies,
          banks and service providers on your instruction
        </li>
        <li>Meet our own legal, regulatory and record-keeping obligations</li>
        <li>Communicate with you about your active matters</li>
      </ul>
      <p>
        We do not sell personal information, and we do not share it with third parties
        for their own marketing purposes.
      </p>

      <h2>5. Sharing your information</h2>
      <p>We may share information where necessary to deliver a service, including with:</p>
      <ul>
        <li>
          Government departments, licensing authorities and free zone authorities, where
          required to progress an application you have instructed us to make
        </li>
        <li>Banks and financial institutions, in connection with an account application</li>
        <li>
          Registered agents, translators, typing centres, attestation services and
          similar providers engaged to complete a specific step
        </li>
        <li>
          Professional advisers — for example a lawyer, auditor or licensed tax agent —
          where you have asked us to work alongside them
        </li>
        <li>
          Authorities or regulators where we are legally required to disclose information
        </li>
      </ul>

      <h2>6. Retention</h2>
      <p>
        We keep enquiry correspondence for as long as needed to respond and for a
        reasonable period afterwards. Where you engage us, records relating to that
        engagement are kept for as long as required to deliver the service and to meet
        applicable legal, regulatory and record-keeping obligations, after which they
        are deleted or anonymised.
      </p>

      <h2>7. Security</h2>
      <p>
        We take reasonable technical and organisational measures to protect personal
        information against loss, misuse and unauthorised access. No method of
        transmission or storage is completely secure, and we cannot guarantee absolute
        security. Please avoid sending sensitive documents over unencrypted channels
        where an alternative is available.
      </p>

      <h2>8. International transfers</h2>
      <p>
        We are based in the United Arab Emirates. If you contact us from another
        country, your information will be processed in the UAE and may be handled by
        service providers located elsewhere. Where that happens, we take reasonable
        steps to ensure an appropriate level of protection.
      </p>

      <h2>9. Your rights</h2>
      <p>
        Subject to the law that applies to you, you may have the right to request
        access to the personal information we hold about you, to have inaccurate
        information corrected, to request deletion, to object to or restrict certain
        processing, and to withdraw consent where processing is based on consent.
      </p>
      <p>
        To make a request, email <a href={contact.emailHref}>{contact.email}</a>. We may
        need to verify your identity before responding, and we will respond within the
        period required by applicable law.
      </p>

      <h2>10. Cookies</h2>
      <p>
        This website does not set advertising or tracking cookies. Essential technical
        storage may be used by the hosting platform to serve the site. If cookies are
        introduced in future, we will update this policy and provide a means of
        managing your preferences.
      </p>

      <h2>11. Third-party links</h2>
      <p>
        This website may link to external sites, including WhatsApp and social media
        platforms. We are not responsible for the privacy practices of those services,
        and we recommend reviewing their own policies.
      </p>

      <h2>12. Children</h2>
      <p>
        Our services are directed at businesses and adults. We do not knowingly collect
        personal information from children. If you believe a child has provided us with
        personal information, contact us and we will delete it.
      </p>

      <h2>13. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The date at the top of this page
        reflects the most recent revision. Material changes will be reflected on this
        page.
      </p>

      <h2>14. Contact</h2>
      <p>
        Questions about this policy can be sent to{' '}
        <a href={contact.emailHref}>{contact.email}</a> or by phone on{' '}
        <a href={contact.phoneHref}>{contact.phone}</a>.
      </p>
    </LegalLayout>
  );
}
