import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { getUrlWithLocale } from '@/lib/urls/urls';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'TotrMemePage' });

  return constructMetadata({
    title: t('meta.title'),
    description: t('meta.description'),
    canonicalUrl: getUrlWithLocale('/meme/totr', locale),
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'TotrMemePage' });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: t('meta.title'),
    description: t('meta.description'),
    mainEntityOfPage: getUrlWithLocale('/meme/totr', locale),
    inLanguage: locale,
  } as const;

  return (
    <main className="mx-auto max-w-3xl px-6 py-12 space-y-6">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <header className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">{t('hero.title')}</h1>
        <p className="text-muted-foreground text-lg">{t('hero.subtitle')}</p>
      </header>
      <section className="space-y-3 text-sm leading-relaxed text-muted-foreground">
        {t.raw('body.paragraphs').map((paragraph: string, index: number) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>
      <footer className="mt-6 flex flex-wrap gap-4">
        <LocaleLink href="/generator/totr" className="underline font-medium">
          {t('cta.generator')}
        </LocaleLink>
        <LocaleLink
          href="/compare/totr-vs-py"
          className="underline font-medium"
        >
          {t('cta.compare')}
        </LocaleLink>
      </footer>
    </main>
  );
}
