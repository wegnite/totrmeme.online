import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  await params; // locale not used for now
  return constructMetadata({
    title: 'What Is the TOTR (TOTЯ, Тотя) Meme? Meaning & Origin',
    description:
      'Understand the viral TOTR/TOTЯ/Тотя meme in 60 seconds — meaning, origin timeline, spellings, and how it relates to ПЫ.',
    canonicalUrl: 'https://totrmeme.online/meme/totr',
  });
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What Is the TOTR (TOTЯ, Тотя) Meme? Meaning & Origin',
    mainEntityOfPage: 'https://totrmeme.online/meme/totr',
    inLanguage: 'en',
  };

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="text-3xl font-bold">
        TOTR Meme (TOTЯ, Тотя) — Meaning & Origin
      </h1>
      <p className="mt-4 text-muted-foreground">
        Quick guide to the viral TOTR meme. We cover the meaning, origin
        timeline, common spellings (totr/totya/totя/Тотя), and its relationship
        to the ПЫ meme. Explore examples via official embeds only.
      </p>
      <div className="mt-6 flex gap-3">
        <a className="underline" href="/generator/totr">
          Make your TOTR meme →
        </a>
        <a className="underline" href="/compare/totr-vs-py">
          Compare TOTR vs ПЫ →
        </a>
      </div>
    </main>
  );
}
