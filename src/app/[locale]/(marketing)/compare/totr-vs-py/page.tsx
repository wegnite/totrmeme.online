import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  await params;
  return constructMetadata({
    title: 'TOTR vs ПЫ — Differences Explained (With Examples)',
    description:
      'See how TOTR (TOTЯ, Тотя) compares to ПЫ — visuals, usage, and context. Community-friendly comparison page.',
    canonicalUrl: 'https://totrmeme.online/compare/totr-vs-py',
  });
}

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-bold">TOTR vs ПЫ</h1>
      <p className="mt-4 text-muted-foreground">
        Placeholder comparison. We will add visual examples and a simple poll to
        show preferences. Links out to official embeds only.
      </p>
      <div className="mt-6 space-x-4">
        <a className="underline" href="/meme/totr">
          What is TOTR? →
        </a>
        <a className="underline" href="/trends/totr">
          Trends Timeline →
        </a>
      </div>
    </main>
  );
}
