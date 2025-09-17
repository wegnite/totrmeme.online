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
    title: 'TOTR Meme Generator — Make a TOTR (TOTЯ, Тотя) Meme Online',
    description:
      'Free online TOTR meme generator with parody-style templates. Add text, resize, and export PNG with watermark. No copyrighted assets built-in.',
    canonicalUrl: 'https://totrmeme.online/generator/totr',
  });
}

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-bold">TOTR Meme Generator</h1>
      <p className="mt-4 text-muted-foreground">
        MVP placeholder. Canvas-based generator will be added here (Fabric.js).
        You will be able to choose parody-style base art, add text, and export
        PNG with watermark. Uploads allowed only if you have rights.
      </p>
      <div className="mt-6 space-x-4">
        <a className="underline" href="/download/totr-template">
          Get templates →
        </a>
        <a className="underline" href="/meme/totr">
          What is TOTR? →
        </a>
      </div>
    </main>
  );
}
