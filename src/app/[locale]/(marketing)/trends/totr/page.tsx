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
    title: 'TOTR Trends — Timeline of Viral Moments & Links',
    description:
      'News-style tracker for the TOTR (TOTЯ, Тотя) meme: breakout nodes, timeline updates, and official links. Updated regularly.',
    canonicalUrl: 'https://totrmeme.online/trends/totr',
  });
}

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-bold">TOTR Trends</h1>
      <p className="mt-4 text-muted-foreground">
        Placeholder for the timeline and link index. We will update with
        breakout moments and official embeds only. This page is intended to be
        refreshed frequently.
      </p>
      <div className="mt-6 space-x-4">
        <a className="underline" href="/meme/totr">
          Learn the meme →
        </a>
        <a className="underline" href="/generator/totr">
          Make yours →
        </a>
      </div>
    </main>
  );
}
