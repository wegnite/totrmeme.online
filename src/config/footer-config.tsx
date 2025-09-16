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
 * https://mksaas.com/docs/config/footer
 *
 * @returns The footer config with translated titles
 */
export function getFooterLinks(): NestedMenuItem[] {
  const t = useTranslations('Marketing.footer');

  return [
    {
      title: 'Thwordle Game',
      items: [
        {
          title: 'Play Thwordle',
          href: '/',
          external: false,
        },
        {
          title: 'How to Play',
          href: '/#how-to-play',
          external: false,
        },
        {
          title: 'Daily Word Puzzles',
          href: '/#daily-puzzles',
          external: false,
        },
        {
          title: 'Thwordle Statistics',
          href: '/#stats',
          external: false,
        },
      ],
    },
    {
      title: 'Word Game Themes',
      items: [
        {
          title: 'Harry Potter Wordle',
          href: '/#harry-potter',
          external: false,
        },
        {
          title: 'LOTR Word Game',
          href: '/#lotr',
          external: false,
        },
        {
          title: 'Greek Mythology Puzzle',
          href: '/#greek-mythology',
          external: false,
        },
        {
          title: 'Marvel Wordle',
          href: '/#marvel',
          external: false,
        },
        {
          title: 'DC Comics Word Game',
          href: '/#dc-comics',
          external: false,
        },
      ],
    },
    {
      title: 'Game Help',
      items: [
        {
          title: 'How to Play Thwordle',
          href: '/#how-to-play',
          external: false,
        },
        {
          title: 'Thwordle Tips & Strategies',
          href: '/#tips',
          external: false,
        },
        {
          title: 'Word Game FAQ',
          href: '/#faq',
          external: false,
        },
        ...(websiteConfig.blog.enable
          ? [
              {
                title: 'Thwordle Blog',
                href: Routes.Blog,
                external: false,
              },
            ]
          : []),
        ...(websiteConfig.docs.enable
          ? [
              {
                title: 'Game Documentation',
                href: Routes.Docs,
                external: false,
              },
            ]
          : []),
      ],
    },
    {
      title: 'About Thwordle',
      items: [
        {
          title: 'About the Game',
          href: Routes.About,
          external: false,
        },
        {
          title: 'Contact Support',
          href: Routes.Contact,
          external: false,
        },
        {
          title: 'Game Updates',
          href: Routes.Changelog,
          external: false,
        },
        {
          title: 'Feature Requests',
          href: Routes.Waitlist,
          external: false,
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
