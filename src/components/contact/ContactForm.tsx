'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, Mail, MessageCircle } from 'lucide-react';
import { contact } from '@/content/site';
import { services } from '@/content/services';
import { cn } from '@/lib/utils';

/**
 * Static-site contact form.
 *
 * There is no backend in this project, so the form composes the enquiry and
 * hands it to the visitor's own mail client or WhatsApp. Nothing is posted
 * anywhere, and no data leaves the browser until the visitor sends it.
 *
 * ── To wire this to a real endpoint later ────────────────────────────────────
 * Replace `handleSubmit` with a `fetch()` POST to a form service (Formspree,
 * Web3Forms, Basin) or a Vercel/Cloudflare function. The field names below are
 * already sensible payload keys. Everything else on the page stays as is.
 */

const budgets = [
  'Not sure yet',
  'Under AED 15,000',
  'AED 15,000 – 30,000',
  'AED 30,000 – 75,000',
  'Above AED 75,000',
];

const inputClasses =
  'h-12 w-full rounded-sm border border-slateink-200 bg-white px-4 text-[15px] text-navy-900 placeholder:text-slateink-300 transition-colors duration-200 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500';

const labelClasses =
  'block text-[12px] font-semibold uppercase tracking-[0.12em] text-slateink-500';

/**
 * Native selects are stripped with `appearance-none` so they match the text
 * inputs, which means the disclosure chevron has to be drawn back in as a
 * background image.
 */
const selectClasses =
  "appearance-none bg-[url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23647489' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.8' d='m6 8 4 4 4-4'/%3E%3C/svg%3E\")] bg-[length:20px_20px] bg-[right_0.9rem_center] bg-no-repeat pr-11";

export function ContactForm() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    service: '',
    budget: budgets[0],
    message: '',
  });

  const set = (key: keyof typeof values) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setValues((v) => ({ ...v, [key]: e.target.value }));

  /** Plain-text summary reused by both the email and WhatsApp handoffs. */
  const summary = useMemo(
    () =>
      [
        `Name: ${values.name || '—'}`,
        `Email: ${values.email || '—'}`,
        `Phone: ${values.phone || '—'}`,
        `Country: ${values.country || '—'}`,
        `Service of interest: ${values.service || '—'}`,
        `Indicative budget: ${values.budget}`,
        '',
        'Details:',
        values.message || '—',
      ].join('\n'),
    [values],
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `Consultation enquiry — ${values.service || 'UAE business setup'}`;
    window.location.href = `${contact.emailHref}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(summary)}`;
  };

  const whatsappUrl = `${contact.whatsappHref}?text=${encodeURIComponent(
    `Hello LeadingZone, I would like to enquire about setting up in the UAE.\n\n${summary}`,
  )}`;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Full name <span className="text-gold-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            value={values.name}
            onChange={set('name')}
            placeholder="Your name"
            className={cn(inputClasses, 'mt-2.5')}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email <span className="text-gold-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={values.email}
            onChange={set('email')}
            placeholder="you@company.com"
            className={cn(inputClasses, 'mt-2.5')}
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={set('phone')}
            placeholder="+971 50 000 0000"
            className={cn(inputClasses, 'mt-2.5')}
          />
        </div>

        <div>
          <label htmlFor="country" className={labelClasses}>
            Country of residence
          </label>
          <input
            id="country"
            name="country"
            autoComplete="country-name"
            value={values.country}
            onChange={set('country')}
            placeholder="e.g. United Kingdom"
            className={cn(inputClasses, 'mt-2.5')}
          />
        </div>

        <div>
          <label htmlFor="service" className={labelClasses}>
            Service of interest
          </label>
          <select
            id="service"
            name="service"
            value={values.service}
            onChange={set('service')}
            className={cn(inputClasses, selectClasses, 'mt-2.5')}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>

        <div>
          <label htmlFor="budget" className={labelClasses}>
            Indicative budget
          </label>
          <select
            id="budget"
            name="budget"
            value={values.budget}
            onChange={set('budget')}
            className={cn(inputClasses, selectClasses, 'mt-2.5')}
          >
            {budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          What are you planning? <span className="text-gold-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={values.message}
          onChange={set('message')}
          placeholder="A sentence or two on your business activity, where your clients are, and how many visas you expect to need."
          className={cn(
            inputClasses,
            'mt-2.5 h-auto resize-y py-3.5 leading-relaxed',
          )}
        />
      </div>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row">
        <button
          type="submit"
          className="group inline-flex h-[52px] flex-1 items-center justify-center gap-2 rounded-sm bg-navy-900 px-7 text-[15px] font-semibold text-white shadow-card transition-all duration-300 ease-premium hover:-translate-y-px hover:bg-navy-800 hover:shadow-lift"
        >
          <Mail className="h-4 w-4 text-gold-400" strokeWidth={2} />
          Send Enquiry
          <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-1" />
        </button>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-[52px] items-center justify-center gap-2 rounded-sm border border-slateink-200 bg-white px-7 text-[15px] font-semibold text-navy-900 transition-colors duration-300 hover:border-navy-900/35 hover:bg-sand-50"
        >
          <MessageCircle className="h-4 w-4 text-gold-600" strokeWidth={2} />
          Send on WhatsApp
        </a>
      </div>

      <p className="pt-1 text-[12.5px] leading-relaxed text-slateink-500">
        Submitting opens your own email client with the enquiry pre-filled — nothing is
        stored on this website. We usually reply within one business day. See our{' '}
        <a href="/privacy-policy/" className="font-medium text-navy-900 lz-link-underline">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
