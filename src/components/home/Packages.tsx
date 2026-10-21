import { ArrowRight, ArrowUpRight, Building2, Check, Globe, MapPin, ShoppingBag } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { setupPackages } from '@/content/home';
import { cn } from '@/lib/utils';

const icons = { building: Building2, globe: Globe, pin: MapPin };

/** Three headline business setup packages. */
export function Packages() {
  return (
    <Section id="packages" className="bg-white">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Business setup packages"
          title="Choose your launchpad. We handle the rest."
          className="lg:max-w-2xl"
        />
        <Reveal delay={100}>
          <p className="max-w-sm text-[15px] leading-relaxed text-slateink-500">
            Transparent pricing, no hidden PRO fees. All packages include name approval, MOA
            drafting &amp; government liaison.
          </p>
        </Reveal>
      </div>

      <ul className="mt-14 grid gap-6 lg:grid-cols-3">
        {setupPackages.map((pkg, i) => {
          const Icon = icons[pkg.icon];
          return (
            <Reveal
              as="li"
              key={pkg.name}
              delay={i * 80}
              className={cn(
                'relative flex flex-col rounded-3xl p-7',
                pkg.featured
                  ? 'bg-navy-950 text-white shadow-xl'
                  : 'border border-gold-600 bg-white',
              )}
            >
              <span
                className={cn(
                  'absolute -top-3 left-6 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide',
                  pkg.featured ? 'bg-gold-600 text-white' : 'bg-navy-950 text-white',
                )}
              >
                {pkg.badge}
              </span>

              <div className="flex items-start justify-between gap-4">
                <span
                  className={cn(
                    'flex h-11 w-11 items-center justify-center rounded-xl',
                    pkg.featured ? 'bg-white/10 text-white' : 'bg-sand-100 text-navy-900',
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div className="text-right">
                  <p
                    className={cn(
                      'text-[11.5px] uppercase tracking-wide',
                      pkg.featured ? 'text-white/60' : 'text-slateink-500',
                    )}
                  >
                    Starting from
                  </p>
                  <p className="text-[1.6rem] font-semibold leading-tight">{pkg.price}</p>
                </div>
              </div>

              <h3 className="mt-6 text-[20px] font-semibold">{pkg.name}</h3>
              <p
                className={cn(
                  'mt-1 text-[13.5px]',
                  pkg.featured ? 'text-white/65' : 'text-slateink-500',
                )}
              >
                {pkg.subtitle}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {pkg.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-[14px]">
                    <span
                      className={cn(
                        'flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
                        pkg.featured ? 'bg-white/10' : 'bg-sand-100',
                      )}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className={pkg.featured ? 'text-white/85' : 'text-slateink-500'}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                href="/contact"
                variant={pkg.featured ? 'onDark' : 'primary'}
                size="lg"
                className={cn('mt-8 w-full', pkg.featured && '!bg-white !text-navy-900 hover:!bg-sand-100')}
              >
                Get This Package
                <ArrowRight className="h-4 w-4" />
              </Button>
              <p
                className={cn(
                  'mt-4 text-center text-[12px]',
                  pkg.featured ? 'text-white/55' : 'text-slateink-500',
                )}
              >
                No hidden fees &bull; Free consultation included
              </p>
            </Reveal>
          );
        })}
      </ul>

      <Reveal className="mt-8 flex flex-col gap-6 rounded-3xl border border-gold-300 bg-gradient-to-r from-white to-gold-100 p-6 sm:p-7 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex gap-5">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-950 text-white">
            <ShoppingBag className="h-5 w-5" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-[17px] font-semibold">E-commerce License in Dubai</h3>
              <span className="rounded-full bg-gold-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                New
              </span>
            </div>
            <p className="mt-1 max-w-xl text-[13.5px] leading-relaxed text-slateink-500">
              Sell on Noon, Amazon.ae, Instagram &amp; your own store. Includes DED e-trader
              compliant license + payment gateway + VAT.
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {['Noon Seller', 'Amazon UAE', 'Payment Gateway', 'Social Selling'].map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-slateink-200 bg-white px-3 py-1 text-[12px] font-medium text-navy-900"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-between gap-6 lg:justify-end">
          <div className="text-right">
            <p className="text-[11.5px] uppercase tracking-wide text-slateink-500">From</p>
            <p className="text-[1.5rem] font-semibold leading-tight">AED 6,999</p>
          </div>
          <Button href="/contact" variant="primary" size="lg">
            Start Selling
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
