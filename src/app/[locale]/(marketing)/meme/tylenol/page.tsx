import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { getUrlWithLocale } from '@/lib/urls/urls';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const META = {
  title: 'Tylenol Autism Meme: Meaning, Origin & Why It Went Viral',
  description:
    'Discover the Tylenol autism meme that exploded in September 2025 after a controversial press conference. Learn the meaning, origin, and why it became a viral internet phenomenon.',
} as const;

const PARAGRAPHS = [
  'The Tylenol autism meme emerged on September 22, 2025, after a press conference where Donald Trump and HHS Secretary Robert F. Kennedy Jr. claimed that taking Tylenol during pregnancy could increase autism risk. The announcement, which lacked scientific backing, became immediate fuel for meme creators.',
  'Social media gravitated toward a Fox News screenshot framing an “AUTISM ANNOUNCEMENT” banner with Trump and Kennedy side by side. Users remixed the panel into reaction images lampooning pseudoscience, conspiracy rhetoric, and headline sensationalism.',
  'Within hours, X (Twitter), TikTok, and Reddit were saturated with edits pointing out that autism was identified decades before Tylenol became common in households, highlighting how misinformation cycles spawn viral satire.',
  'Related searches like “tylenol causing autism” and “tylenol autism lawsuit” shot up, while medical experts debunked the press conference. The meme format turned into a cultural critique of how health myths spread, using humor to expose faulty reasoning.',
  'Ultimately, the Tylenol autism meme underscores how internet communities weaponize humor to counter dubious claims and remind audiences to rely on evidence-based science.',
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: META.title,
    description: META.description,
    canonicalUrl: getUrlWithLocale('/meme/tylenol', locale),
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: META.title,
    description: META.description,
    mainEntityOfPage: getUrlWithLocale('/meme/tylenol', locale),
    inLanguage: locale,
  } as const;

  return (
    <main className="mx-auto max-w-3xl px-6 py-12 space-y-6">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <header className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">{META.title}</h1>
        <p className="text-muted-foreground text-lg">{META.description}</p>
      </header>
      <section className="space-y-3 text-sm leading-relaxed text-muted-foreground">
        {PARAGRAPHS.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>
      <footer className="mt-6 flex flex-wrap gap-4">
        <LocaleLink href="/" className="underline font-medium">
          ← Back to home
        </LocaleLink>
      </footer>
    </main>
  );
}
