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
    title: 'UGC & Copyright Policy — TOTR Meme',
    description:
      'Users may upload only their own or licensed material. We use official embeds only and handle takedown requests within 24h.',
    canonicalUrl: 'https://totrmeme.online/policy/ugc',
  });
}

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-bold">UGC & Copyright Policy</h1>
      <p className="mt-4 text-muted-foreground">
        We only provide parody-style base materials and tools. Do not upload or
        distribute copyrighted IP unless you have rights. For rights issues,
        please contact us with URLs and details. We aim to respond within 24h.
      </p>
      <div className="mt-6 space-x-4">
        <a className="underline" href="/generator/totr">
          Back to Generator →
        </a>
        <a className="underline" href="/meme/totr">
          Learn about TOTR →
        </a>
      </div>
    </main>
  );
}
