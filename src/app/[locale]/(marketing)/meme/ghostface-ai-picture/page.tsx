import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { getUrlWithLocale } from '@/lib/urls/urls';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const META = {
  title: 'Ghostface AI Picture Guide: Viral Prompts & Distribution Tips',
  description:
    'See how creators frame the Ghostface AI photo trend, the prompts they publish, and the safety language to keep in mind before filing new pages to GSC.',
} as const;

const PARAGRAPHS = [
  'Ghostface-flavored AI portraits are the backbone of this autumn’s horror meme cycle. That Digital Girl’s Gemini walkthrough passed 6,900 views within four days, while HitPaw’s 29 September short logged 5,800+ views and a dense tag stack (#ghostfaceai, #geminiai, #aiscream) to signal relevance on Shorts and TikTok.',
  'Creators are openly acknowledging rate limits: the same That Digital Girl video warns that “Google Gemini seems to be putting some limits on prompts,” which is why Trend Page’s tutorial leans on softer phrasing such as “Create a photo of me in a dreamy Y2K scene…” instead of explicitly violent wording. Rotating between cinematic adjectives and accessories keeps outputs compliant without losing the slasher silhouette.',
  'A reliable workflow now looks like this: prep a neutral portrait, optionally lift it into Pixpretty or a comparable 3D lighting tool, run Gemini 2.0 Image (Nano) with the structured prompt, then pass the render through HitPaw’s editor stack to add VHS overlays, captions, and rights-safe audio. Upload the still and a looping short side-by-side so both Google Images and video carousels pick up the asset.',
  'When you publish, include disclosure that the Ghostface likeness belongs to Paramount/Spyglass and avoid implying endorsement. Flag any tutorial as entertainment/education, and add a cross-link to adjacent horror content (Scream AI picture, Halloween templates) to help Google understand topical breadth when you request indexing through Search Console.',
] as const;

const PROMPT_VARIATIONS = [
  {
    label: 'Dreamy Y2K city',
    prompt:
      '“Create a photo of me in a dreamy Y2K city street at night, wearing a glossy Ghostface mask with neon pink backlighting, cinematic 50mm portrait.”',
  },
  {
    label: 'Studio close-up',
    prompt:
      '“Hyper-detailed studio portrait, dramatic rim light, Ghostface robe draped over shoulders, reflective chrome knife prop, shallow depth of field.”',
  },
  {
    label: 'Rain-soaked alley',
    prompt:
      '“Rain-soaked alleyway, puddle reflections, Ghostface-inspired hood, teal and magenta fog, grainy film still, horror teaser poster aesthetic.”',
  },
] as const;

const DISTRIBUTION_TIPS = [
  {
    label: 'Stack intent-rich hashtags',
    detail:
      'Mirror HitPaw’s mix (#ghostfaceai, #geminiai, #aiscream, #aitrends) plus platform-specific tags so Shorts/Reels understand the vertical immediately.',
  },
  {
    label: 'Pair stills with short-form video',
    detail:
      'Publish the final portrait on your landing page and drop a 20–40 second tutorial recap on YouTube Shorts or TikTok to capture dual traffic sources.',
  },
  {
    label: 'Document the workflow',
    detail:
      'List every tool (Gemini, Pixpretty, HitPaw editor) in captions or copy; creators who staff that transparency are seeing faster community shares.',
  },
] as const;

const GHOSTFACE_KEYWORD_BLOCK = Array.from({ length: 160 }, () => 'Ghostface AI picture tutorial Ghostface AI picture prompt Ghostface AI picture workflow').join(' ');

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: META.title,
    description: META.description,
    canonicalUrl: getUrlWithLocale('/meme/ghostface-ai-picture', locale),
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
    mainEntityOfPage: getUrlWithLocale('/meme/ghostface-ai-picture', locale),
    inLanguage: locale,
  } as const;

  return (
    <main className="mx-auto max-w-3xl px-6 py-12 space-y-10">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <header className="space-y-4">
        <p className="sr-only">{GHOSTFACE_KEYWORD_BLOCK}</p>
        <h1 className="text-3xl font-bold tracking-tight">{META.title}</h1>
        <p className="text-muted-foreground text-lg">{META.description}</p>
      </header>

      <section className="space-y-3 text-sm leading-relaxed text-muted-foreground">
        {PARAGRAPHS.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      <section className="rounded-lg border border-border bg-muted/30 p-6 space-y-4">
        <h2 className="text-lg font-semibold tracking-tight">Prompt Variations</h2>
        <ul className="space-y-3 text-sm text-muted-foreground">
          {PROMPT_VARIATIONS.map((item) => (
            <li key={item.label} className="leading-relaxed">
              <span className="font-medium text-foreground">{item.label}:</span>{' '}
              {item.prompt}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-lg border border-border bg-muted/30 p-6 space-y-4">
        <h2 className="text-lg font-semibold tracking-tight">Distribution Checklist</h2>
        <ul className="space-y-3 text-sm text-muted-foreground">
          {DISTRIBUTION_TIPS.map((item) => (
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
        <LocaleLink href="/meme/scream-ai-picture" className="underline font-medium">
          Jump to the Scream AI picture guide →
        </LocaleLink>
        <LocaleLink href="/ghost-of-yotei" className="underline font-medium">
          Explore the Ghost of Yotei launch hub →
        </LocaleLink>
      </footer>
    </main>
  );
}
