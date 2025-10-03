'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import {
  BuildingIcon,
  ComponentIcon,
  CookieIcon,
  FileTextIcon,
  FlameIcon,
  Gamepad2Icon,
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
      title: 'Start Creating',
      items: [
        {
          title: 'TOTR Meme Generator',
          description: 'Drag-and-drop editor with parody-safe templates',
          icon: <WandSparklesIcon className="size-4 shrink-0" />,
          href: '/generator/totr',
          external: false,
        },
        {
          title: 'TOTR Text Pack',
          description: 'Copy “тотя❤️” symbols and styles for captions',
          icon: <FileTextIcon className="size-4 shrink-0" />,
          href: '/totr-text',
          external: false,
        },
        {
          title: 'Compare TOTR vs ПЫ',
          description: 'See how the two Russian brainrot memes differ',
          icon: <ComponentIcon className="size-4 shrink-0" />,
          href: '/compare/totr-vs-py',
          external: false,
        },
      ],
    },
    {
      title: 'Meme Trends',
      items: [
        {
          title: 'Ghostface AI Picture Guide',
          description: 'Gemini prompts, toolkit comparisons, Shorts strategy',
          icon: <FlameIcon className="size-4 shrink-0" />,
          href: '/meme/ghostface-ai-picture',
          external: false,
        },
        {
          title: 'Scream AI Challenge',
          description: 'Production pipeline, keyword targeting, safety notes',
          icon: <RocketIcon className="size-4 shrink-0" />,
          href: '/meme/scream-ai-picture',
          external: false,
        },
        {
          title: 'TOTR Meme Hub',
          description: 'Original clip, timeline, templates, and FAQs',
          icon: <ShieldCheckIcon className="size-4 shrink-0" />,
          href: '/what-is-totr',
          external: false,
        },
      ],
    },
    {
      title: 'Games',
      items: [
        {
          title: 'Ghost of Yōtei Launch Hub',
          description: 'Release timeline, PS5 bundles, Photo Mode toolkit',
          icon: <Gamepad2Icon className="size-4 shrink-0" />,
          href: '/ghost-of-yotei',
          external: false,
        },
        {
          title: 'Request Coverage',
          description: 'Tell us the next entertainment launch to track',
          icon: <MailIcon className="size-4 shrink-0" />,
          href: Routes.Contact,
          external: false,
        },
      ],
    },
    {
      title: 'Guides & Docs',
      items: [
        {
          title: 'TOTR Meaning',
          description: 'Linguistic breakdown and cultural context',
          icon: <FlameIcon className="size-4 shrink-0" />,
          href: '/totr-meaning',
          external: false,
        },
        {
          title: 'Russian Origins',
          description: 'Pronunciation tips and history from Ezo to TikTok',
          icon: <ShieldCheckIcon className="size-4 shrink-0" />,
          href: '/totr-russian-meaning',
          external: false,
        },
        {
          title: 'Meme Culture',
          description: 'How TOTR became a global internet phenomenon',
          icon: <ComponentIcon className="size-4 shrink-0" />,
          href: '/totr-meme-meaning',
          external: false,
        },
        ...(websiteConfig.blog.enable
          ? [
              {
                title: t('blog.title'),
                description: 'Latest launch notes and editorials',
                icon: <RocketIcon className="size-4 shrink-0" />,
                href: Routes.Blog,
                external: false,
              },
            ]
          : []),
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
