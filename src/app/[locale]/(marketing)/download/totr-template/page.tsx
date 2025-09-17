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
    title: 'TOTR Templates Download — Parody-Style Base Images',
    description:
      'Download parody-style base images for the TOTR (TOTЯ, Тотя) meme. Clear usage terms. No copyrighted IP included.',
    canonicalUrl: 'https://totrmeme.online/download/totr-template',
  });
}

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-bold">TOTR Templates</h1>
      <p className="mt-4 text-muted-foreground">
        Placeholder for template downloads. We will provide 3+ parody-style base
        images and an online editing link (Canva/Figma). Use only with proper
        licensing. No copyrighted IP provided.
      </p>
      <div className="mt-6 space-x-4">
        <a className="underline" href="/generator/totr">
          Use in Generator →
        </a>
        <a className="underline" href="/policy/ugc">
          Read UGC Policy →
        </a>
      </div>
    </main>
  );
}
