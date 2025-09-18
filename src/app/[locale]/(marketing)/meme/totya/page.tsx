import { constructMetadata } from '@/lib/metadata';
import { getUrlWithLocale } from '@/lib/urls/urls';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

interface Params {
  locale: Locale;
}

const youtubeAllow =
  'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';

const playlistUrls = {
  origin:
    'https://www.youtube.com/embed?listType=search&list=totr%20meme%20original',
  comparison:
    'https://www.youtube.com/embed?listType=search&list=totr%20vs%20py%20meme',
  remix:
    'https://www.youtube.com/embed?listType=search&list=totya%20meme%20compilation',
};

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: 'TOTЯ Meme — Story, Videos & Creator Resources',
    description:
      'Dive into the TOTЯ (Тотя) meme universe: viral videos, timeline milestones, fan-made remixes and safe-to-use resources for your next brainrot edit.',
    canonicalUrl: getUrlWithLocale('/meme/totya', locale),
  });
}

export default async function TotyaPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'TotyaPage' });

  const videos = [
    {
      key: 'origin' as const,
      embedUrl: playlistUrls.origin,
    },
    {
      key: 'comparison' as const,
      embedUrl: playlistUrls.comparison,
    },
    {
      key: 'remix' as const,
      embedUrl: playlistUrls.remix,
    },
  ];

  const timelineItems: Array<{
    key: 'origin' | 'remix' | 'vs' | 'global';
  }> = [{ key: 'origin' }, { key: 'remix' }, { key: 'vs' }, { key: 'global' }];

  const guideSteps = t.raw('guide.steps') as string[];
  const spotlightItems = t.raw('spotlight.items') as string[];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: t('hero.title'),
    inLanguage: locale,
    mainEntityOfPage: getUrlWithLocale('/meme/totya', locale),
    description: t('hero.subtitle'),
  } as const;

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="space-y-4 text-center">
        <span className="text-sm font-medium uppercase tracking-wide text-primary">
          {t('hero.eyebrow')}
        </span>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t('hero.title')}
        </h1>
        <p className="mx-auto max-w-3xl text-muted-foreground">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href={getUrlWithLocale('/generator/totr', locale)}
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow hover:opacity-90"
          >
            {t('hero.ctaGenerator')}
          </Link>
          <Link
            href={getUrlWithLocale('/compare/totr-vs-py', locale)}
            className="inline-flex items-center justify-center rounded-md border px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent"
          >
            {t('hero.ctaCompare')}
          </Link>
        </div>
      </section>

      {/* Spotlight */}
      <section className="rounded-2xl border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold">{t('spotlight.title')}</h2>
        <ul className="mt-4 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
          {spotlightItems.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                {index + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Videos */}
      <section className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">{t('videos.title')}</h2>
            <p className="text-sm text-muted-foreground">
              {t('videos.description')}
            </p>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {videos.map((video) => (
            <VideoCard
              key={video.key}
              title={t(`videos.items.${video.key}.title`)}
              description={t(`videos.items.${video.key}.description`)}
              platform={t(`videos.items.${video.key}.platform`)}
              duration={t(`videos.items.${video.key}.duration`)}
              embedUrl={video.embedUrl}
            />
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">{t('timeline.title')}</h2>
        <ol className="relative space-y-6 border-l pl-6">
          {timelineItems.map((item, index) => (
            <li key={item.key} className="relative">
              <span className="absolute -left-[11px] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-primary bg-background text-xs font-semibold text-primary">
                {index + 1}
              </span>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                {t(`timeline.items.${item.key}.date`)}
              </p>
              <h3 className="text-base font-semibold">
                {t(`timeline.items.${item.key}.title`)}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {t(`timeline.items.${item.key}.description`)}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Guide */}
      <section className="rounded-2xl border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold">{t('guide.title')}</h2>
        <ul className="mt-4 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
          {guideSteps.map((step, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {index + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{t('faq.title')}</h2>
        <div className="space-y-3">
          {(['origin', 'music', 'copyright'] as const).map((key) => (
            <details
              key={key}
              className="group rounded-xl border bg-card p-4 shadow-sm"
            >
              <summary className="cursor-pointer text-base font-semibold">
                {t(`faq.items.${key}.question`)}
              </summary>
              <p className="mt-2 text-sm text-muted-foreground">
                {t(`faq.items.${key}.answer`)}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border bg-gradient-to-br from-primary/10 via-background to-background p-6 text-center shadow-sm">
        <h2 className="text-xl font-semibold">{t('cta.title')}</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {t('cta.description')}
        </p>
        <div className="mt-4 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href={getUrlWithLocale('/generator/totr', locale)}
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow hover:opacity-90"
          >
            {t('cta.primary')}
          </Link>
          <Link
            href={getUrlWithLocale('/download/totr-template', locale)}
            className="inline-flex items-center justify-center rounded-md border px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent"
          >
            {t('cta.secondary')}
          </Link>
        </div>
      </section>
    </main>
  );
}

function VideoCard({
  title,
  description,
  platform,
  duration,
  embedUrl,
}: {
  title: string;
  description: string;
  platform: string;
  duration: string;
  embedUrl: string;
}) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border bg-card shadow-sm">
      <div className="aspect-video w-full bg-muted">
        <iframe
          src={embedUrl}
          title={title}
          allow={youtubeAllow}
          allowFullScreen
          loading="lazy"
          className="h-full w-full"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="text-xs font-medium uppercase text-primary/80">
          {platform} · {duration}
        </div>
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </article>
  );
}
