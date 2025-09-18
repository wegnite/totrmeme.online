import { TotrHotMemes } from '@/components/totr/TotrHotMemes';
import { TotrMemeGenerator } from '@/components/totr/TotrMemeGenerator';
import { TotrMemePoll } from '@/components/totr/TotrMemePoll';
import { TotrQuickTutorial } from '@/components/totr/TotrQuickTutorial';
import { TotrTimeline } from '@/components/totr/TotrTimeline';
import { TotrTrendingTopics } from '@/components/totr/TotrTrendingTopics';
import { TotrUserGallery } from '@/components/totr/TotrUserGallery';
import { constructMetadata } from '@/lib/metadata';
import { getUrlWithLocale } from '@/lib/urls/urls';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
// import { getTranslations } from 'next-intl/server';

/**
 * https://next-intl.dev/docs/environments/actions-metadata-route-handlers#metadata-api
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: 'TOTR Meme Generator (TOTЯ, Тотя) — Free Creator',
    description:
      'Create viral TOTR memes instantly with our free generator! Learn the Russian brainrot phenomenon, download templates, and make TOTR/TOTЯ/Тотя content easily.',
    canonicalUrl: 'https://totrmeme.online/',
  });
}

interface HomePageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function HomePage(props: HomePageProps) {
  const params = await props.params;
  const { locale } = params;

  // 结构化数据 JSON-LD
  const jsonLdWebsite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TOTR Meme',
    url: 'https://totrmeme.online',
    description:
      'TOTR meme (TOTЯ, Тотя) meaning, origin timeline, free generator and templates.',
    inLanguage: 'en',
  } as const;

  const jsonLdItemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'What is the TOTR meme?',
        url: 'https://totrmeme.online/meme/totr',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'TOTR Meme Generator',
        url: 'https://totrmeme.online/generator/totr',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'TOTR Templates Download',
        url: 'https://totrmeme.online/download/totr-template',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'TOTR vs ПЫ',
        url: 'https://totrmeme.online/compare/totr-vs-py',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'TOTR Trends Timeline',
        url: 'https://totrmeme.online/trends/totr',
      },
    ],
  } as const;

  return (
    <>
      {/* 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdItemList) }}
      />

      {/* 首页 Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 pt-16 pb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            TOTR Meme Generator (TOTЯ, Тотя) — Create Viral TOTR Content
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            The ultimate TOTR meme creation tool featuring the viral Russian
            internet phenomenon. Generate custom SpongeBob TOTR content,
            download free TOTR templates, and join the TOTR brainrot movement
            that gained 2M+ views worldwide. Create trending TOTR memes online.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href={getUrlWithLocale('/meme/totr', locale)}
              className="inline-flex h-10 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground shadow hover:opacity-90"
            >
              Learn About TOTR
            </a>
            <a
              href={getUrlWithLocale('/generator/totr', locale)}
              className="inline-flex h-10 items-center rounded-md border px-5 text-sm font-medium text-foreground hover:bg-accent"
            >
              Create Meme Now
            </a>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Also searched as: TOTЯ meme, totya meme, totia meme, "Тотя мем",
            TOTR generator, TOTR templates.
          </p>
        </div>
      </section>

      {/* TOTR核心信息 */}
      <section className="mx-auto max-w-4xl px-6 py-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl my-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">
            🧽 TOTR Meme Explained - Complete TOTR Guide
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">📅 Origin & Timeline</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • <strong>Sept 1, 2025:</strong> First TOTR meme by
                @ddghfjwiedi3929
              </li>
              <li>
                • <strong>Visual:</strong> Two pantless SpongeBobs with "тотя❤️"
              </li>
              <li>
                • <strong>Music:</strong> Stay (Kid LAROI & Justin Bieber) remix
              </li>
              <li>
                • <strong>Impact:</strong> 2M+ plays, 200K+ likes in 2 weeks
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">🔥 Why TOTR Went Viral</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Part of Russian "brainrot" trend alongside ПЫ memes</li>
              <li>• TOTR SpongeBob content appeals to Gen Z/Gen Alpha</li>
              <li>• Easy to remix TOTR templates and share across platforms</li>
              <li>
                • Multiple TOTR spellings: TOTR, TOTЯ, totya, Тотя meme
                variations
              </li>
              <li>
                • TOTR generator tools make creation accessible to everyone
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 交互式TOTR体验区 */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            🎮 Professional TOTR Meme Creation Tools & Generator
          </h2>
          <p className="text-muted-foreground text-lg">
            Advanced TOTR meme generator, community TOTR voting, and trending
            TOTR content tracker
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {/* TOTR生成器 */}
          <div className="space-y-4">
            <TotrMemeGenerator />
          </div>

          {/* TOTR投票 */}
          <div className="space-y-4">
            <TotrMemePoll />
          </div>

          {/* TOTR时间线 */}
          <div className="space-y-4 lg:col-span-2 xl:col-span-1">
            <TotrTimeline />
          </div>
        </div>
      </section>

      {/* 热门TOTR内容展示区 */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* 热门模因 */}
          <div>
            <TotrHotMemes />
          </div>

          {/* 趋势话题 */}
          <div>
            <TotrTrendingTopics />
          </div>
        </div>
      </section>

      {/* 快速教程和用户画廊 */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* 快速教程 */}
          <div>
            <TotrQuickTutorial locale={locale} />
          </div>

          {/* 用户画廊 */}
          <div>
            <TotrUserGallery locale={locale} />
          </div>
        </div>
      </section>

      {/* 简要功能模块 */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border p-5 bg-primary/5">
            <h3 className="font-semibold">📖 Complete Guide</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Full explanation: origin timeline, visual elements, spelling
              variations, and relationship to ПЫ meme.
            </p>
            <a
              href={getUrlWithLocale('/meme/totr', locale)}
              className="mt-3 inline-block text-sm text-primary hover:underline font-medium"
            >
              Read the guide →
            </a>
          </div>
          <div className="rounded-lg border p-5">
            <h3 className="font-semibold">TOTR Meme Generator</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Advanced online meme creation tool with custom templates, text
              editor, and instant PNG export capabilities.
            </p>
            <a
              href={getUrlWithLocale('/generator/totr', locale)}
              className="mt-3 inline-block text-sm text-primary hover:underline"
            >
              Start creating →
            </a>
          </div>
          <div className="rounded-lg border p-5">
            <h3 className="font-semibold">Free TOTR Templates</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Download professional meme templates and assets. High-quality
              parody-style base images with clear licensing for content
              creation.
            </p>
            <a
              href={getUrlWithLocale('/download/totr-template', locale)}
              className="mt-3 inline-block text-sm text-primary hover:underline"
            >
              Download templates →
            </a>
          </div>
          <div className="rounded-lg border p-5">
            <h3 className="font-semibold">TOTR vs ПЫ</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Visual differences, usage context, and a community vote.
            </p>
            <a
              href={getUrlWithLocale('/compare/totr-vs-py', locale)}
              className="mt-3 inline-block text-sm text-primary hover:underline"
            >
              Compare them →
            </a>
          </div>
          <div className="rounded-lg border p-5">
            <h3 className="font-semibold">Trends Tracker</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Fresh timeline + official embeds of breakout moments.
            </p>
            <a
              href={getUrlWithLocale('/trends/totr', locale)}
              className="mt-3 inline-block text-sm text-primary hover:underline"
            >
              See timeline →
            </a>
          </div>
          <div className="rounded-lg border p-5">
            <h3 className="font-semibold">UGC & Copyright</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Upload only your own or licensed material. Official embed only.
            </p>
            <a
              href={getUrlWithLocale('/policy/ugc', locale)}
              className="mt-3 inline-block text-sm text-primary hover:underline"
            >
              Read policy →
            </a>
          </div>
        </div>
      </section>

      {/* Keyword Coverage */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-xl border bg-muted/40 p-6">
          <h2 className="text-lg font-semibold">TOTR Keyword Variations</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Different spellings people use when searching for TOTR content. Use
            them to keep your creations discoverable across search and social
            platforms.
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            <li>TOTR meme — English spelling</li>
            <li>TOTЯ meme — Cyrillic variant</li>
            <li>totya meme — lowercase version</li>
            <li>totia meme — alternative typo</li>
            <li>Тотя мем — Russian spelling</li>
            <li>TOTR vs ПЫ — comparison topic</li>
            <li>SpongeBob TOTR — character crossover</li>
            <li>TOTR template — template searches</li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Master TOTR meme creation with our generator, free templates, and
            trend tracker—perfect for TikTok, Instagram, YouTube, and more.
          </p>
        </div>
      </section>
    </>
  );
}
