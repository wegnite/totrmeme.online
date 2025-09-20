'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import {
  BuildingIcon,
  ComponentIcon,
  CookieIcon,
  FileTextIcon,
  FlameIcon,
  ListChecksIcon,
  MailIcon,
  RocketIcon,
  ShieldCheckIcon,
  SquareKanbanIcon,
  WandSparklesIcon,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { websiteConfig } from './website';

/**
 * Get navbar config with translations
 *
 * NOTICE: used in client components only
 *
 * docs:
 * https://totrmeme.online/docs/config/navbar
 *
 * @returns The navbar config with translated titles and descriptions
 */
export function getNavbarLinks(): NestedMenuItem[] {
  const t = useTranslations('Marketing.navbar');

  return [
    {
      title: 'TOTR Generator',
      href: '/generator/totr',
      external: false,
    },
    {
      title: 'Learn About TOTR',
      items: [
        {
          title: 'What is TOTR?',
          description: "Complete beginner's guide to the viral TOTR meme",
          icon: <ComponentIcon className="size-4 shrink-0" />,
          href: '/what-is-totr',
          external: false,
        },
        {
          title: 'TOTR Meaning',
          description: 'Deep dive into the linguistic meaning and definition',
          icon: <FlameIcon className="size-4 shrink-0" />,
          href: '/totr-meaning',
          external: false,
        },
        {
          title: 'Russian Origins',
          description:
            "Discover TOTR's Russian pronunciation and cultural context",
          icon: <ShieldCheckIcon className="size-4 shrink-0" />,
          href: '/totr-russian-meaning',
          external: false,
        },
        {
          title: 'Meme Culture',
          description:
            'Why the TOTR meme went viral and conquered the internet',
          icon: <RocketIcon className="size-4 shrink-0" />,
          href: '/totr-meme-meaning',
          external: false,
        },
        {
          title: 'TOTR Text & Symbols',
          description: 'Copy authentic Russian TOTR text and variations',
          icon: <FileTextIcon className="size-4 shrink-0" />,
          href: '/totr-text',
          external: false,
        },
      ],
    },
    ...(websiteConfig.blog.enable
      ? [
          {
            title: t('blog.title'),
            href: Routes.Blog,
            external: false,
          },
        ]
      : []),
    {
      title: 'Meme Tools',
      items: [
        {
          title: 'TOTR vs ПЫ',
          description: 'Compare TOTR and PY memes side by side',
          icon: <WandSparklesIcon className="size-4 shrink-0" />,
          href: '/#totr-vs-py',
          external: false,
        },
        {
          title: 'Meme Creator',
          description: 'Advanced meme generation tools',
          icon: <FlameIcon className="size-4 shrink-0" />,
          href: '/#creator',
          external: false,
        },
        {
          title: 'Template Library',
          description: 'Browse and download meme templates',
          icon: <ShieldCheckIcon className="size-4 shrink-0" />,
          href: '/#library',
          external: false,
        },
        {
          title: 'Trending Memes',
          description: "Explore what's trending in the meme world",
          icon: <RocketIcon className="size-4 shrink-0" />,
          href: '/#trending',
          external: false,
        },
        {
          title: 'Meme Timeline',
          description: 'Track the evolution of TOTR memes',
          icon: <ComponentIcon className="size-4 shrink-0" />,
          href: '/#timeline',
          external: false,
        },
      ],
    },
    {
      title: t('pages.title'),
      items: [
        {
          title: t('pages.items.tools.title'),
          description: t('pages.items.tools.description'),
          icon: <WandSparklesIcon className="size-4 shrink-0" />,
          href: Routes.Tools,
          external: false,
        },
        {
          title: t('pages.items.about.title'),
          description: t('pages.items.about.description'),
          icon: <BuildingIcon className="size-4 shrink-0" />,
          href: Routes.About,
          external: false,
        },
        {
          title: t('pages.items.contact.title'),
          description: t('pages.items.contact.description'),
          icon: <MailIcon className="size-4 shrink-0" />,
          href: Routes.Contact,
          external: false,
        },
        {
          title: t('pages.items.roadmap.title'),
          description: t('pages.items.roadmap.description'),
          icon: <SquareKanbanIcon className="size-4 shrink-0" />,
          href: Routes.Roadmap,
          external: true,
        },
        {
          title: t('pages.items.changelog.title'),
          description: t('pages.items.changelog.description'),
          icon: <ListChecksIcon className="size-4 shrink-0" />,
          href: Routes.Changelog,
          external: false,
        },
        {
          title: t('pages.items.cookiePolicy.title'),
          description: t('pages.items.cookiePolicy.description'),
          icon: <CookieIcon className="size-4 shrink-0" />,
          href: Routes.CookiePolicy,
          external: false,
        },
        {
          title: t('pages.items.privacyPolicy.title'),
          description: t('pages.items.privacyPolicy.description'),
          icon: <ShieldCheckIcon className="size-4 shrink-0" />,
          href: Routes.PrivacyPolicy,
          external: false,
        },
        {
          title: t('pages.items.termsOfService.title'),
          description: t('pages.items.termsOfService.description'),
          icon: <FileTextIcon className="size-4 shrink-0" />,
          href: Routes.TermsOfService,
          external: false,
        },
      ],
    },
    // {
    //   title: t('blocks.title'),
    //   items: [
    //     {
    //       title: t('blocks.items.magicui.title'),
    //       icon: <ComponentIcon className="size-4 shrink-0" />,
    //       href: Routes.MagicuiBlocks,
    //       external: false,
    //     },
    //     {
    //       title: t('blocks.items.hero-section.title'),
    //       icon: <FlameIcon className="size-4 shrink-0" />,
    //       href: Routes.HeroBlocks,
    //       external: false,
    //     },
    //     {
    //       title: t('blocks.items.logo-cloud.title'),
    //       icon: <SquareCodeIcon className="size-4 shrink-0" />,
    //       href: Routes.LogoCloudBlocks,
    //       external: false,
    //     },
    //     {
    //       title: t('blocks.items.features.title'),
    //       icon: <WandSparklesIcon className="size-4 shrink-0" />,
    //       href: Routes.FeaturesBlocks,
    //       external: false,
    //     },
    //     {
    //       title: t('blocks.items.integrations.title'),
    //       icon: <SnowflakeIcon className="size-4 shrink-0" />,
    //       href: Routes.IntegrationsBlocks,
    //       external: false,
    //     },
    //     {
    //       title: t('blocks.items.content.title'),
    //       icon: <NewspaperIcon className="size-4 shrink-0" />,
    //       href: Routes.ContentBlocks,
    //       external: false,
    //     },
    //     {
    //       title: t('blocks.items.stats.title'),
    //       icon: <ChartNoAxesCombinedIcon className="size-4 shrink-0" />,
    //       href: Routes.StatsBlocks,
    //       external: false,
    //     },
    //     {
    //       title: t('blocks.items.team.title'),
    //       icon: <UsersIcon className="size-4 shrink-0" />,
    //       href: Routes.TeamBlocks,
    //       external: false,
    //     },
    //     {
    //       title: t('blocks.items.testimonials.title'),
    //       icon: <ThumbsUpIcon className="size-4 shrink-0" />,
    //       href: Routes.TestimonialsBlocks,
    //       external: false,
    //     },
    //     {
    //       title: t('blocks.items.callToAction.title'),
    //       icon: <RocketIcon className="size-4 shrink-0" />,
    //       href: Routes.CallToActionBlocks,
    //       external: false,
    //     },
    //     {
    //       title: t('blocks.items.footer.title'),
    //       icon: <FootprintsIcon className="size-4 shrink-0" />,
    //       href: Routes.FooterBlocks,
    //       external: false,
    //     },
    //     {
    //       title: t('blocks.items.pricing.title'),
    //       icon: <CircleDollarSignIcon className="size-4 shrink-0" />,
    //       href: Routes.PricingBlocks,
    //       external: false,
    //     },
    //     {
    //       title: t('blocks.items.comparator.title'),
    //       icon: <SplitSquareVerticalIcon className="size-4 shrink-0" />,
    //       href: Routes.ComparatorBlocks,
    //       external: false,
    //     },
    //     {
    //       title: t('blocks.items.faq.title'),
    //       icon: <CircleHelpIcon className="size-4 shrink-0" />,
    //       href: Routes.FAQBlocks,
    //       external: false,
    //     },
    //     {
    //       title: t('blocks.items.login.title'),
    //       icon: <LogInIcon className="size-4 shrink-0" />,
    //       href: Routes.LoginBlocks,
    //       external: false,
    //     },
    //     {
    //       title: t('blocks.items.signup.title'),
    //       icon: <UserPlusIcon className="size-4 shrink-0" />,
    //       href: Routes.SignupBlocks,
    //       external: false,
    //     },
    //     {
    //       title: t('blocks.items.forgot-password.title'),
    //       icon: <LockKeyholeIcon className="size-4 shrink-0" />,
    //       href: Routes.ForgotPasswordBlocks,
    //       external: false,
    //     },
    //     {
    //       title: t('blocks.items.contact.title'),
    //       icon: <MailIcon className="size-4 shrink-0" />,
    //       href: Routes.ContactBlocks,
    //       external: false,
    //     },
    //   ],
    // },
  ];
}
