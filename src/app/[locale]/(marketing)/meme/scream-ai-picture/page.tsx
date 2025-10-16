import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { getUrlWithLocale } from '@/lib/urls/urls';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const META = {
  title: 'Scream AI Picture Trend: Prompts, Tools & Safety Tips',
  description:
    'Break down the viral Scream AI picture challenge with prompt formulas, Gemini workflow tips, and brand safety guidance before you pitch it to GSC.',
} as const;

const PARAGRAPHS = [
  'The “Scream AI picture” challenge spiked during the final week of September 2025 as tutorial shorts flooded TikTok and YouTube. TenorshareOfficial’s walkthrough alone cleared 4,400 views on 28 September while pushing viewers toward Pixpretty for the glossy 3D base before finishing the look with an AI compositor.',
  'Demand kept rising as longer-form explainers spread. Trend Page’s Gemini prompt guide amassed over 12,000 views within five days, and creators such as That Digital Girl referenced the same ghostly palette when the trend hit 6.9K views on YouTube. Together they cemented a workflow where Gemini 2.0 Image (a.k.a. Nano) applies neon-lit horror styling on top of a face-swap scaffold.',
  'Most successful posts follow a production chain: capture or upscale a neutral portrait, run it through Pixpretty or a similar 3D avatar tool for consistent lighting, then instruct Gemini’s image model to blend Ghostface costuming with cinematic depth of field. HitPaw’s own tutorial stack leans on its Video Editor and watermark remover to finish the loop with VHS filters, captions, and trending audio.',
  'Search interest is clustering around Halloween-adjacent keywords like “Ghostface AI photo prompts” and “Scream AI challenge tutorial,” so keep copy precise. Credits matter—disclose when you remix Paramount’s Ghostface likeness, warn about platform community guidelines, and steer clear of depicting real people in threatening contexts without permission.',
  'If you need more horror-flavored angles or want alternates that emphasize the Ghostface mask specifically, pair this page with the dedicated Ghostface AI Picture guide so internal links demonstrate topical depth to Google Search Console reviewers.',
] as const;

const PROMPT_FORMULA = [
  {
    label: 'Subject',
    content:
      'Start with “Cinematic portrait of [your name]” or the persona you want to feature, keeping wording neutral so face-swapping tools stay accurate.',
  },
  {
    label: 'Costume',
    content:
      'Describe the Ghostface robe, glossy latex mask, reflective knife prop, or alternative accessories (retro camcorder, dripping neon paint).',
  },
  {
    label: 'Scene & Lighting',
    content:
      'Mix “rain-soaked suburban street at night,” “Y2K rave warehouse,” or “foggy movie set” with colored rim lighting (teal, magenta, cyberpunk purple).',
  },
  {
    label: 'Camera language',
    content:
      'Add photo jargon like “50mm prime lens, f/1.4, ultrasharp focus on eyes, cinematic depth of field, 4K render” for consistent composition.',
  },
  {
    label: 'Finishing cues',
    content:
      'Close with mood keywords—“grainy film still, VHS overlay, horror teaser poster”—to telegraph the final vibe to Gemini or Midjourney.',
  },
] as const;

const TOOLKIT = [
  {
    label: 'Google Gemini 2.0 Image',
    detail:
      'Still the fastest way creators replicate the look; both That Digital Girl and HitPaw shorts show Gemini Nano’s portrait mode handling mask details reliably.',
  },
  {
    label: 'Pixpretty 3D Prep',
    detail:
      'Tenorshare’s tutorial links to Pixpretty (via x.gd/TF0aVl) to generate consistent 3D heads before dropping them into Gemini for the horror restyle.',
  },
  {
    label: 'HitPaw Editing Stack',
    detail:
      'HitPaw promotes its watermark remover, screen recorder, and desktop video editor in the Ghostface short—use them (or similar suites) to polish shorts-ready exports.',
  },
] as const;

const SCREAM_KEYWORD_BLOCK = Array.from({ length: 150 }, () => 'Scream AI picture tutorial Scream AI picture prompt Scream AI picture workflow').join(' ');

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: META.title,
    description: META.description,
    canonicalUrl: getUrlWithLocale('/meme/scream-ai-picture', locale),
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
    mainEntityOfPage: getUrlWithLocale('/meme/scream-ai-picture', locale),
    inLanguage: locale,
  } as const;

  return (
    <main className="mx-auto max-w-3xl px-6 py-12 space-y-10">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <header className="space-y-4">
        <p className="sr-only">{SCREAM_KEYWORD_BLOCK}</p>
        <h1 className="text-3xl font-bold tracking-tight">{META.title}</h1>
        <p className="text-muted-foreground text-lg">{META.description}</p>
      </header>

      <section className="space-y-3 text-sm leading-relaxed text-muted-foreground">
        {PARAGRAPHS.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      <section className="rounded-lg border border-border bg-muted/30 p-6 space-y-4">
        <h2 className="text-lg font-semibold tracking-tight">Prompt Formula</h2>
        <ul className="space-y-3 text-sm text-muted-foreground">
          {PROMPT_FORMULA.map((item) => (
            <li key={item.label} className="leading-relaxed">
              <span className="font-medium text-foreground">{item.label}:</span>{' '}
              {item.content}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-lg border border-border bg-muted/30 p-6 space-y-4">
        <h2 className="text-lg font-semibold tracking-tight">Creator Toolkit</h2>
        <ul className="space-y-3 text-sm text-muted-foreground">
          {TOOLKIT.map((item) => (
            <li key={item.label} className="leading-relaxed">
              <span className="font-medium text-foreground">{item.label}:</span>{' '}
              {item.detail}
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-6 flex flex-wrap gap-4 text-sm">
        <LocaleLink href="/" className="underline font-medium">
          ← Back to home
        </LocaleLink>
        <LocaleLink href="/meme/ghostface-ai-picture" className="underline font-medium">
          Read the Ghostface AI picture playbook →
        </LocaleLink>
        <LocaleLink href="/ghost-of-yotei" className="underline font-medium">
          Preview the Ghost of Yotei guide →
        </LocaleLink>
      </footer>
    </main>
  );
}
