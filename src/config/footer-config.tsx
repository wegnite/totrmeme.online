'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import { useTranslations } from 'next-intl';
import { websiteConfig } from './website';

/**
 * Get footer config with translations
 *
 * NOTICE: used in client components only
 *
 * docs:
 * https://totrmeme.online/docs/config/footer
 *
 * @returns The footer config with translated titles
 */
export function getFooterLinks(): NestedMenuItem[] {
  const t = useTranslations('Marketing.footer');

  return [
    {
      title: 'TOTR Meme',
      items: [
        {
          title: 'TOTR Generator',
          href: '/',
          external: false,
        },
        {
          title: 'What is TOTR?',
          href: '/#what-is-totr',
          external: false,
        },
        {
          title: 'TOTR Templates',
          href: '/#templates',
          external: false,
        },
        {
          title: 'TOTR Timeline',
          href: '/#timeline',
          external: false,
        },
      ],
    },
    {
      title: 'Meme Tools',
      items: [
        {
          title: 'TOTR vs ПЫ',
          href: '/#totr-vs-py',
          external: false,
        },
        {
          title: 'Meme Creator',
          href: '/#creator',
          external: false,
        },
        {
          title: 'Template Library',
          href: '/#library',
          external: false,
        },
        {
          title: 'Trending Memes',
          href: '/#trending',
          external: false,
        },
        {
          title: 'Meme History',
          href: '/#history',
          external: false,
        },
      ],
    },
    {
      title: 'Help & Guides',
      items: [
        {
          title: 'How to Use Generator',
          href: '/#how-to-use',
          external: false,
        },
        {
          title: 'TOTR Meme Guide',
          href: '/#guide',
          external: false,
        },
        {
          title: 'Meme FAQ',
          href: '/#faq',
          external: false,
        },
        ...(websiteConfig.blog.enable
          ? [
              {
                title: 'TOTR Meme Blog',
                href: Routes.Blog,
                external: false,
              },
            ]
          : []),
        ...(websiteConfig.docs.enable
          ? [
              {
                title: 'Meme Documentation',
                href: Routes.Docs,
                external: false,
              },
            ]
          : []),
      ],
    },
    {
      title: 'About TOTR',
      items: [
        {
          title: 'About the Project',
          href: Routes.About,
          external: false,
        },
        {
          title: 'Contact Support',
          href: Routes.Contact,
          external: false,
        },
        {
          title: 'Updates',
          href: Routes.Changelog,
          external: false,
        },
        {
          title: 'Feature Requests',
          href: Routes.Roadmap,
          external: true,
        },
      ],
    },
    {
      title: t('legal.title'),
      items: [
        {
          title: t('legal.items.cookiePolicy'),
          href: Routes.CookiePolicy,
          external: false,
        },
        {
          title: t('legal.items.privacyPolicy'),
          href: Routes.PrivacyPolicy,
          external: false,
        },
        {
          title: t('legal.items.termsOfService'),
          href: Routes.TermsOfService,
          external: false,
        },
      ],
    },
  ];
}
