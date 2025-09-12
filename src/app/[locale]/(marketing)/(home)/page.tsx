import { SeedreamToolSection } from '@/components/ai/seedream/SeedreamToolSection';
import { constructMetadata } from '@/lib/metadata';
import { getUrlWithLocale } from '@/lib/urls/urls';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';

/**
 * https://next-intl.dev/docs/environments/actions-metadata-route-handlers#metadata-api
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return constructMetadata({
    title: t('title'),
    description: t('description'),
    canonicalUrl: getUrlWithLocale('', locale),
  });
}

interface HomePageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function HomePage(props: HomePageProps) {
  const params = await props.params;
  const { locale } = params;
  const t = await getTranslations('HomePage');

  return (
    <>
      <div className="flex flex-col">
        {/* SEO H1 + Intro (keep as the single page H1) */}
        <section className="container mx-auto px-4 pt-10 md:pt-12">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-center">{t('seoH1')}</h1>
          <p className="mt-3 text-base text-muted-foreground max-w-3xl mx-auto text-center">{t('seoIntro')}</p>
        </section>

        <section className="container mx-auto px-4 py-8">
          <SeedreamToolSection />
        </section>
      </div>
    </>
  );
}
