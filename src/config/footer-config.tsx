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
      title: 'Highlights',
      items: [
        {
          title: 'TOTR Meme Generator',
          href: '/generator/totr',
          external: false,
        },
        {
          title: 'Ghostface AI Picture Guide',
          href: '/meme/ghostface-ai-picture',
          external: false,
        },
        {
          title: 'Scream AI Challenge',
          href: '/meme/scream-ai-picture',
          external: false,
        },
        {
          title: 'Chicken Stars Meme Guide',
          href: '/meme/chicken-stars-meme',
          external: false,
        },
        {
          title: 'Ghost of Yōtei Launch Hub',
          href: '/ghost-of-yotei',
          external: false,
        },
      ],
    },
    {
      title: 'Memes & AI',
      items: [
        {
          title: 'What is TOTR?',
          href: '/what-is-totr',
          external: false,
        },
        {
          title: 'TOTR Meaning',
          href: '/totr-meaning',
          external: false,
        },
        {
          title: 'Russian Origins',
          href: '/totr-russian-meaning',
          external: false,
        },
        {
          title: 'TOTR Meme Culture',
          href: '/totr-meme-meaning',
          external: false,
        },
        {
          title: 'Chicken Stars Trend Guide',
          href: '/meme/chicken-stars-meme',
          external: false,
        },
        {
          title: 'TOTR Text Pack',
          href: '/totr-text',
          external: false,
        },
      ],
    },
    {
      title: 'Games & Entertainment',
      items: [
        {
          title: 'Ghost of Yōtei Release Date',
          href: '/ghost-of-yotei#timeline',
          external: false,
        },
        {
          title: 'Photo Mode Tips',
          href: '/ghost-of-yotei#photo-mode',
          external: false,
        },
        {
          title: 'Request Coverage',
          href: Routes.Contact,
          external: false,
        },
        ...(websiteConfig.blog.enable
          ? [
              {
                title: 'Latest Articles',
                href: Routes.Blog,
                external: false,
              },
            ]
          : []),
      ],
    },
    {
      title: 'Support & Company',
      items: [
        {
          title: 'About Us',
          href: Routes.About,
          external: false,
        },
        {
          title: 'Contact',
          href: Routes.Contact,
          external: false,
        },
        {
          title: 'Changelog',
          href: Routes.Changelog,
          external: false,
        },
        {
          title: 'Roadmap',
          href: Routes.Roadmap,
          external: true,
        },
        ...(websiteConfig.docs.enable
          ? [
              {
                title: 'Documentation',
                href: Routes.Docs,
                external: false,
              },
            ]
          : []),
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
