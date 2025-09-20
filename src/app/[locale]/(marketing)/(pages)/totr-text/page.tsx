import { TotrTextContent } from '@/components/totr/TotrTextContent';
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

  const metadata = constructMetadata({
    title:
      'TOTR Text Copy: тотя❤️ - Free TOTR Symbols & Fonts | Copy Paste 2025',
    description:
      'Copy TOTR text instantly! Get тотя❤️ symbols, fonts, and stylish TOTR text for social media, memes, and messages. Free copy-paste TOTR text generator.',
    canonicalUrl: getUrlWithLocale('/totr-text', locale),
    image: 'og.png',
  });

  return {
    ...metadata,
    keywords: [
      'totr text',
      'тотя copy paste',
      'totr symbols',
      'totr font',
      'totr text copy',
      'russian text symbols',
      'totr heart',
      'тотя❤️',
    ],
  };
}

export default async function TotrTextPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return <TotrTextContent locale={locale} />;
}
