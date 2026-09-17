import type { Metadata } from 'next';
import { LegalLayout } from '@/components/legal/LegalLayout';
import { contact, site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'The terms governing use of the LeadingZone Consultancy website and the basis on which information on it is provided.',
  alternates: { canonical: '/terms-and-conditions' },
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      lead="The terms on which this website is provided, and the limits of what the information on it represents."
      updated="17 September 2026"
    >
      <h2>1. About these terms</h2>
      <p>
        These terms govern your use of{' '}
        <a href={site.url}>{site.url.replace('https://', '')}</a>, operated by{' '}
        {site.legalName}. By using the website you accept these terms. If you do not
        accept them, please do not use the site.
      </p>
      <p>
        These terms cover the website only. Any services we provide to you are governed
        by a separate written engagement agreement or proposal, which takes precedence
        over these terms in the event of a conflict.
      </p>

      <h2>2. Our status — an independent consultancy</h2>
      <p>
        {site.legalName} is a private business setup and corporate services consultancy.
        We are <strong>not</strong>:
      </p>
      <ul>
        <li>A UAE government department, ministry or regulatory authority</li>
        <li>A free zone authority or licensing body</li>
        <li>A bank or financial institution</li>
        <li>A law firm, and we do not provide legal advice</li>
        <li>A licensed tax agent or audit firm</li>
      </ul>
      <p>
        We prepare, coordinate and submit applications on behalf of clients who instruct
        us to do so. We have no authority to issue, approve or expedite any licence,
        permit, visa, registration or bank account. Every such decision rests with the
        relevant authority or institution.
      </p>

      <h2>3. Information on this website</h2>
      <p>
        Content on this website is general in nature and provided for information only.
        It does not constitute legal, financial, tax, immigration or investment advice,
        and it should not be relied on as a substitute for advice specific to your
        circumstances.
      </p>
      <p>
        Laws, regulations, fees, thresholds, ownership rules, visa allocations and
        authority procedures in the UAE change from time to time and may change without
        notice. While we take care to keep the site accurate, we do not warrant that all
        content is current, complete or error-free at any given moment. Always confirm
        the position that applies to your specific case before acting.
      </p>

      <h2>4. No guarantees of outcome</h2>
      <p>
        Nothing on this website is a promise or guarantee that any application will be
        approved, that a particular timeline will be met, that a particular cost will
        apply, or that a bank will open an account. Outcomes depend on the decisions of
        third parties, on the completeness and accuracy of the information and
        documentation provided to us, and on factors outside our control.
      </p>

      <h2>5. Fees and quotations</h2>
      <p>
        Any prices or ranges mentioned on this website or in initial correspondence are
        indicative only and are not an offer. Government fees, authority charges,
        third-party costs and exchange rates change and are outside our control. A
        binding scope and fee is set out in a written proposal or engagement agreement.
      </p>

      <h2>6. Your responsibilities</h2>
      <p>When engaging with us, you agree that:</p>
      <ul>
        <li>
          Information and documentation you provide is accurate, complete and lawfully
          obtained
        </li>
        <li>
          You will notify us promptly if information you have provided changes or
          becomes inaccurate
        </li>
        <li>
          You are responsible for complying with the laws of your own country of
          residence and citizenship, including any tax and reporting obligations
        </li>
        <li>
          You will not use our services or this website for any unlawful purpose,
          including tax evasion, money laundering, sanctions circumvention or the
          concealment of beneficial ownership
        </li>
      </ul>
      <p>
        We reserve the right to decline or discontinue work where we consider that a
        request is unlawful, misleading or outside our professional comfort.
      </p>

      <h2>7. Intellectual property</h2>
      <p>
        The design, text, graphics, layout and code of this website are owned by or
        licensed to {site.legalName} and are protected by applicable intellectual
        property law. You may view and print pages for your own reference. You may not
        reproduce, republish, sell or systematically extract content from this website
        without our prior written permission.
      </p>

      <h2>8. Third-party links</h2>
      <p>
        This website may link to third-party websites and services. Those links are
        provided for convenience. We do not control and are not responsible for the
        content, accuracy, availability or practices of external sites, and a link does
        not imply endorsement.
      </p>

      <h2>9. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {site.legalName} shall not be liable for
        any indirect, incidental, special or consequential loss, or for any loss of
        profit, revenue, business, goodwill or data, arising out of or in connection
        with your use of this website or reliance on any content on it.
      </p>
      <p>
        Nothing in these terms excludes or limits liability that cannot lawfully be
        excluded or limited.
      </p>

      <h2>10. Availability</h2>
      <p>
        We aim to keep this website available but do not guarantee uninterrupted access.
        We may suspend, withdraw or amend the site, or any part of it, without notice.
      </p>

      <h2>11. Privacy</h2>
      <p>
        Our handling of personal information is described in our{' '}
        <a href="/privacy-policy/">Privacy Policy</a>, which forms part of these terms.
      </p>

      <h2>12. Governing law</h2>
      <p>
        These terms are governed by the laws of the United Arab Emirates as applied in
        the Emirate of Dubai. The courts of Dubai shall have jurisdiction over any
        dispute arising out of or in connection with these terms, subject to any
        mandatory provisions of applicable law.
      </p>

      <h2>13. Changes to these terms</h2>
      <p>
        We may revise these terms from time to time. The version published on this page
        at the time you use the website is the version that applies. The date at the top
        of this page reflects the most recent revision.
      </p>

      <h2>14. Contact</h2>
      <p>
        Questions about these terms can be sent to{' '}
        <a href={contact.emailHref}>{contact.email}</a> or by phone on{' '}
        <a href={contact.phoneHref}>{contact.phone}</a>.
      </p>
    </LegalLayout>
  );
}
