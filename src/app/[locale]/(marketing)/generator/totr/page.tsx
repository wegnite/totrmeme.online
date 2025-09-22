import AdsterraNativeBanner from '@/analytics/adsterra-native';
import { TotrMemeGenerator } from '@/components/totr/TotrMemeGenerator';
import { TotrVideoShowcase } from '@/components/totr/TotrVideoShowcase';
import { constructMetadata } from '@/lib/metadata';
import { getUrlWithLocale } from '@/lib/urls/urls';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  return constructMetadata({
    title: '🔥 Viral TOTR Meme Generator - Create Trending Memes in Seconds',
    description:
      'Join 1M+ creators making viral TOTR memes! Easy drag-&-drop editor, trending templates, instant sharing. Make your meme go viral in minutes! ⚡',
    canonicalUrl: getUrlWithLocale('/generator/totr', locale),
  });
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'TOTR Meme Generator',
    description:
      'Create viral TOTR memes with our easy-to-use online generator',
    url: 'https://totrmeme.online/generator/totr',
    applicationCategory: 'Entertainment',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1000',
    },
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <main className="container mx-auto py-8">
        <TotrMemeGenerator />

        {/* Native Banner Ad */}
        <section className="py-12">
          <AdsterraNativeBanner />
        </section>
      </main>
      <TotrVideoShowcase />
    </>
  );
}
