'use client';

import Container from '@/components/layout/container';
import { Logo } from '@/components/layout/logo';
import { ModeSwitcherHorizontal } from '@/components/layout/mode-switcher-horizontal';
import { getFooterLinks } from '@/config/footer-config';
import { getSocialLinks } from '@/config/social-config';
import { LocaleLink } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import type React from 'react';

export function Footer({ className }: React.HTMLAttributes<HTMLElement>) {
  const t = useTranslations();
  const footerLinks = getFooterLinks();
  const socialLinks = getSocialLinks();

  return (
    <footer
      className={cn(
        'border-t border-white/10 bg-[#060224]/95 text-white backdrop-blur-2xl',
        className
      )}
    >
      <Container className="px-6">
        <div className="grid grid-cols-2 gap-10 py-16 md:grid-cols-6">
          <div className="col-span-full flex flex-col items-start md:col-span-2">
            <div className="space-y-4">
              {/* logo and name */}
              <div className="items-center space-x-2 flex">
                <Logo />
                <span className="font-display text-xl font-semibold text-white">
                  {t('Metadata.name')}
                </span>
              </div>

              {/* tagline */}
              <p className="py-2 text-base text-white/70 md:pr-12">
                {t('Marketing.footer.tagline')}
              </p>

              {/* social links - commented out as requested */}
              {/* <div className="flex items-center gap-4 py-2">
                <div className="flex items-center gap-2">
                  {socialLinks?.map((link) => (
                    <a
                      key={link.title}
                      href={link.href || '#'}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={link.title}
                      className="border border-border inline-flex h-8 w-8 items-center
                          justify-center rounded-full hover:bg-accent hover:text-accent-foreground"
                    >
                      <span className="sr-only">{link.title}</span>
                      {link.icon ? link.icon : null}
                    </a>
                  ))}
                </div>
              </div> */}
            </div>
          </div>

          {/* footer links */}
          {footerLinks?.map((section) => (
            <div
              key={section.title}
              className="items-start col-span-1 md:col-span-1"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
                {section.title}
              </span>
              <ul className="mt-4 list-inside space-y-3">
                {section.items?.map(
                  (item) =>
                    item.href && (
                      <li key={item.title}>
                        <LocaleLink
                          href={item.href || '#'}
                          target={item.external ? '_blank' : undefined}
                          className="text-sm text-white/60 transition hover:text-white"
                        >
                          {item.title}
                        </LocaleLink>
                      </li>
                    )
                )}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <div className="border-t border-white/10 py-8">
        <Container className="px-6">
          <div className="flex flex-col gap-4 text-white/60 md:flex-row md:items-center md:justify-between">
            <span className="text-sm">
              &copy; {new Date().getFullYear()} {t('Metadata.name')} · All
              rights reserved.
            </span>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <LocaleLink
                href="/privacy-policy"
                className="transition hover:text-white"
              >
                {t('Marketing.footer.legal.items.privacyPolicy')}
              </LocaleLink>
              <LocaleLink
                href="/terms-of-service"
                className="transition hover:text-white"
              >
                {t('Marketing.footer.legal.items.termsOfService')}
              </LocaleLink>
              <LocaleLink
                href="/cookie-policy"
                className="transition hover:text-white"
              >
                {t('Marketing.footer.legal.items.cookiePolicy')}
              </LocaleLink>
            </div>

            <div className="flex items-center gap-x-4 text-white">
              <ModeSwitcherHorizontal />
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
