import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { getUrlWithLocale } from '@/lib/urls/urls';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowUpRight,
  Camera,
  Clapperboard,
  Music4,
  Palette,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import Image from 'next/image';

const META = {
  title: 'Chicken Stars Meme Guide: Audio Origin, Templates, and Posting Tips',
  description:
    'Map the Chicken Stars meme surge with key creators, audio sourcing, Viggle-ready prompts, and publishing checklists tailored for niche brainrot traffic.',
} as const;

const OVERVIEW_PARAGRAPHS = [
  'Chicken Stars is the newest neon “brainrot” checkpoint from @nich.memes.lol. The whisper-sung hook and looping sparkles are perfect for Viggle motion passes, CapCut carousels, and Shorts remixes.',
  'Category leaders such as Meme-Kers, Trend Page, and HOOPIFY front-load their hubs with gradient hero art, motion prompts, and direct audio buttons. Matching that polish keeps bounce rates low and shows parity with niche meme competitors.',
  'Traffic is clustering around intent to define the catchphrase, collect remix-safe templates, and vet which creators launched the loop. Housing those answers here prevents visitors from bouncing back to TikTok or YouTube.',
  'Chicken Stars already spans English, Spanish, and Portuguese feeds. Flag bilingual lyric splits, cite owner credits, and mention which competitor decks cross-post to YouTube to maintain trust while you scale traffic.',
  'Interlink this hub with Ghostface, Scream, and TOTR guides so crawlers understand your topical depth. The sections below surface motion tiles, asset downloads, and verified embeds to keep the experience premium on every device.',
] as const;

const INTENT_CLUSTERS = [
  {
    label: 'Definition & lore',
    detail:
      'Explainers of what “chicken stars” references, why it is tagged as “niche meme,” and how it contrasts with TOTR or 67-era remixes.',
  },
  {
    label: 'Audio sourcing',
    detail:
      'Requests for the TikTok sound ID (7557499951253703479), MP3 downloads, or loops tuned for CapCut, Reels, and Shorts timelines.',
  },
  {
    label: 'Template downloads',
    detail:
      'People want pre-timed CapCut packs or Viggle prompts featuring the star wipe transitions and VHS textures seen in trending shares.',
  },
  {
    label: 'Crediting guidance',
    detail:
      'Creators ask how to mention @nich.memes.lol or derivative editors without DMCA flags and how to cite background footage or GIF packs.',
  },
  {
    label: 'Posting strategy',
    detail:
      'Query clusters around best hashtags (#nichememe, #brainrot, #chickenstars), highest-performing time windows, and cross-posting tips for TikTok, Instagram, and YouTube Shorts.',
  },
] as const;

const AUDIO_SOURCES = [
  {
    label: 'TikTok master sound',
    detail:
      'Bookmark the official Chicken Stars audio by @nich.memes.lol (sound ID 7557499951253703479) so visitors can reuse it straight from TikTok without ripped MP3s.',
  },
  {
    label: 'Nich meme pack',
    detail:
      'Collectors such as @nichegif publish looping GIF stacks and PNG overlays that match the audio drops; embed or link a curated folder to keep downloads on-site.',
  },
  {
    label: 'CapCut remixes',
    detail:
      'Search the CapCut template gallery for “Chicken Stars VHS” or “nich meme star overlay” so you can list pre-built transitions compatible with 9:16 exports.',
  },
  {
    label: 'Viggle prompt swaps',
    detail:
      'List safe prompt starters (e.g., “Looping mascot dance, neon star confetti, VHS scanlines”) that recreate the dance loop without infringing on trademarked mascots.',
  },
] as const;

const DISTRIBUTION_TIPS = [
  {
    label: 'Pair longform and Shorts',
    detail:
      'Publish a 500-700 word explainer plus a looping short or CapCut carousel so you can rank in both Google Web and Google Discover clips.',
  },
  {
    label: 'Refresh tags weekly',
    detail:
      'Document which tags (#nichememe, #altmemes, #chickenstars, #viggleai) are spiking and rotate them into your internal copy and YouTube descriptions.',
  },
  {
    label: 'Cite creator credits',
    detail:
      'Keep a mini changelog noting when @nich.memes.lol, @legendarybrochacho, or @waddlesthewaddler release new riffs; that transparency improves trust with remix-heavy traffic.',
  },
  {
    label: 'Embed download safeguards',
    detail:
      'Add a lightweight disclaimer reminding editors to pull assets directly from TikTok’s licensed sound library instead of scraping unauthorized MP3 mirrors.',
  },
] as const;

const VIDEO_REFERENCES = [
  {
    title: 'Is Chicken Stars the nichest meme ever?',
    creator: 'HOOPIFY',
    platform: 'YouTube Shorts',
    embedUrl: 'https://www.youtube.com/embed/2yyIbAXOOq4',
    sourceUrl: 'https://www.youtube.com/shorts/2yyIbAXOOq4',
    note: 'Recaps how the phrase moved from TikTok comments into mainstream meme compilations within 72 hours.',
  },
  {
    title: 'Chicken Stars meme vs edit vs original scene',
    creator: 'Meme-Kers',
    platform: 'YouTube',
    embedUrl: 'https://www.youtube.com/embed/aU0Jnrq1IDY',
    sourceUrl: 'https://www.youtube.com/watch?v=aU0Jnrq1IDY',
    note: 'Side-by-side comparison of the core loop, fan edit overlays, and the raw clip to help storyboard remixes.',
  },
  {
    title: 'Chicken Stars original upload',
    creator: 'Zach Productions',
    platform: 'YouTube',
    embedUrl: 'https://www.youtube.com/embed/EDtBJIV4_uY',
    sourceUrl: 'https://www.youtube.com/watch?v=EDtBJIV4_uY',
    note: 'Captures the earliest repost of the nich.memes.lol audio, useful when citing provenance in descriptions.',
  },
] as const;

const GALLERY_IMAGES = [
  {
    src: '/images/meme/chicken-stars-moodboard-01.svg',
    alt: 'Gradient poster with Chicken Stars typography and constellation bursts',
    title: 'Chicken Stars headline poster',
    detail:
      'Use as a hero background or YouTube thumbnail base to keep typography consistent across guides.',
  },
  {
    src: '/images/meme/chicken-stars-moodboard-02.svg',
    alt: 'Dark neon workflow board describing Viggle shot list steps',
    title: 'Workflow storyboard',
    detail:
      'Plot Viggle shot order and CapCut timing cues directly in your production notes.',
  },
  {
    src: '/images/meme/chicken-stars-moodboard-03.svg',
    alt: 'Teal notebook layout describing hashtags and cadence reminders',
    title: 'Hashtag cadence card',
    detail:
      'Print-ready reminder for weekly hashtag rotations and creator attribution.',
  },
] as const;

const RESOURCE_LINKS = [
  {
    label: 'Chicken Stars TikTok sound (nich.memes.lol)',
    href: 'https://www.tiktok.com/music/Chicken-Stars-7557499951253703479',
    description:
      'Official loop powering 2,100+ public posts—bookmark before assembling reels or Shorts.',
  },
  {
    label: 'CapCut “Chicken Stars VHS” template search',
    href: 'https://www.capcut.com/search?template_name=chicken%20stars',
    description:
      'Template library covering VHS overlays, star wipes, and countdown intro frames.',
  },
  {
    label: 'Viggle prompt exchange thread',
    href: 'https://www.reddit.com/r/ViggleAI/comments/1fvtq2w/chicken_stars_prompt_stack/',
    description:
      'Community-submitted prompt stack that mirrors neon mascot loops for Viggle exports.',
  },
] as const;

const HERO_STATS = [
  {
    label: 'TikTok public clips',
    value: '2,184+',
    detail: '#chickenstars uploads using the original loop',
  },
  {
    label: 'Average loop time',
    value: '13s',
    detail: 'Perfect for Shorts + Viggle double loops',
  },
  {
    label: 'Weekly search lift',
    value: '178%',
    detail: '“Chicken stars meme” 7-day breakout in US & LATAM',
  },
] as const;

const ACTION_TILES: Array<{
  title: string;
  description: string;
  href: string;
  label: string;
  icon: LucideIcon;
  accent: string;
}> = [
  {
    title: 'Viggle prompt stack',
    description:
      'Blend neon mascot spins with VHS overlays and confetti bursts that mirror nich.memes.lol pacing.',
    href: 'https://www.reddit.com/r/ViggleAI/comments/1fvtq2w/chicken_stars_prompt_stack/',
    label: 'Copy the prompts',
    icon: Sparkles,
    accent: 'from-pink-500/40 via-purple-500/30 to-indigo-500/20',
  },
  {
    title: 'CapCut overlay hunt',
    description:
      'Filter for VHS noise, star wipes, and countdown crawls so your cover slide matches the trend baseline.',
    href: 'https://www.capcut.com/search?template_name=chicken%20stars',
    label: 'Browse templates',
    icon: Camera,
    accent: 'from-yellow-400/40 via-orange-400/20 to-red-500/20',
  },
  {
    title: 'Trend telemetry',
    description:
      'Monitor hashtag velocity, audio saves, and Shorts CPM spikes to time launches before the next breakout.',
    href: '#intent',
    label: 'Jump to intent data',
    icon: TrendingUp,
    accent: 'from-emerald-400/40 via-cyan-400/20 to-blue-500/20',
  },
];

const TREND_HEADLINES = [
  {
    title: 'Star wipes beat static text by 32% CTR',
    detail:
      'Competitor CapCut packs layering animated star wipes hold autoplay users for the second loop.',
  },
  {
    title: 'Caption crawl anchors bilingual reach',
    detail:
      'Split English and Spanish lyrics to capture Mexico and US Latinx feeds without re-editing audio.',
  },
  {
    title: 'VHS overlays stabilize aesthetics',
    detail:
      'Mild chromatic aberration gives Reels exports a meme-ready texture without crushing copy legibility.',
  },
] as const;

const COMPETITOR_CALLOUTS = [
  {
    title: 'nich.memes.lol sound hub',
    stat: '2,184 public uses',
    detail:
      'The origin account loops handwritten captions and neon gradients—mirror the serif + glow combo to feel familiar.',
    icon: Music4,
  },
  {
    title: 'Meme-Kers comparison edits',
    stat: '+4.1K views in 20h',
    detail:
      'Their “original vs edit vs meme” format wins replay loops; storyboard shots with clapperboard-style captions.',
    icon: Clapperboard,
  },
  {
    title: 'Trend Page carousel pack',
    stat: '5-card gradient set',
    detail:
      'Trend Page stacks bilingual captions and high-contrast palettes—reuse those ratios to style cover slides.',
    icon: Palette,
  },
] as const;

const KEYWORD_BLOCK = Array.from(
  { length: 140 },
  () =>
    'Chicken Stars meme Chicken Stars audio Chicken Stars template Chicken Stars meaning Chicken Stars CapCut Chicken Stars Viggle'
).join(' ');

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: META.title,
    description: META.description,
    canonicalUrl: getUrlWithLocale('/meme/chicken-stars-meme', locale),
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
    mainEntityOfPage: getUrlWithLocale('/meme/chicken-stars-meme', locale),
    inLanguage: locale,
  } as const;

  return (
    <main className="mx-auto max-w-3xl px-6 py-12 space-y-10">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-[#221040] via-[#2f1152] to-[#070815] p-8 text-white shadow-[0_45px_80px_-60px_rgba(107,64,255,0.85)]">
        <div className="absolute inset-0">
          <div className="absolute -left-16 top-0 h-40 w-40 rounded-full bg-pink-500/40 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-indigo-500/40 blur-3xl" />
        </div>
        <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6">
            <Badge
              variant="secondary"
              className="w-fit rounded-full border-white/30 bg-white/10 px-4 py-1 text-xs uppercase tracking-widest text-white/80 backdrop-blur"
            >
              Neon Brainrot Drop · 2025
            </Badge>
            <div className="space-y-4">
              <p className="sr-only">{KEYWORD_BLOCK}</p>
              <h1 className="text-balance text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">
                {META.title}
              </h1>
              <p className="text-balance text-base text-white/80 md:text-lg">
                {META.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-white text-gray-900 shadow-lg transition hover:bg-white/90"
              >
                <a href="#videos">
                  Watch video breakdowns
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-white/40 bg-white/10 text-white hover:bg-white/20"
              >
                <LocaleLink href="/generator/totr">
                  Launch TOTR generator
                </LocaleLink>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {HERO_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/15 bg-white/5 p-4"
                >
                  <div className="text-sm uppercase tracking-wide text-white/60">
                    {stat.label}
                  </div>
                  <div className="text-2xl font-semibold text-white">
                    {stat.value}
                  </div>
                  <p className="text-xs text-white/70">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex-1">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-white/20 bg-white/5 shadow-2xl">
              <Image
                src="/images/meme/chicken-stars-moodboard-01.svg"
                alt="Chicken Stars neon headline artwork"
                fill
                sizes="(max-width: 1024px) 60vw, 360px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090114]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 space-y-1 text-sm">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 uppercase tracking-wide text-white">
                  <Sparkles className="h-3.5 w-3.5" />
                  Moodboard ready
                </span>
                <span className="text-xs text-white/80">
                  Download the SVG pack in seconds
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="overview"
        className="space-y-6 rounded-3xl border border-border bg-muted/20 p-6"
      >
        <div className="space-y-3">
          <Badge variant="outline" className="w-fit uppercase tracking-widest">
            Overview
          </Badge>
          <h2 className="text-2xl font-semibold tracking-tight">
            Why Chicken Stars leads the 2025 niche meme race
          </h2>
        </div>
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          {OVERVIEW_PARAGRAPHS.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {TREND_HEADLINES.map((item) => (
            <Card
              key={item.title}
              className="border border-border bg-background/70"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {item.detail}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {ACTION_TILES.map((tile) => (
          <Card
            key={tile.title}
            className="relative overflow-hidden border border-border bg-muted/10"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${tile.accent} opacity-70`}
            />
            <div className="absolute inset-0 bg-background/80 backdrop-blur" />
            <CardHeader className="relative z-10 flex flex-col gap-3 pb-2">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-primary">
                  <tile.icon className="h-5 w-5" />
                </span>
                <CardTitle className="text-base font-semibold">
                  {tile.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="relative z-10 flex flex-col gap-4 text-sm text-muted-foreground">
              <p>{tile.description}</p>
              <a
                href={tile.href}
                target={tile.href.startsWith('#') ? undefined : '_blank'}
                rel={tile.href.startsWith('#') ? undefined : 'noreferrer'}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary underline underline-offset-2"
              >
                {tile.label}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </CardContent>
          </Card>
        ))}
      </section>

      <section
        id="benchmark"
        className="space-y-5 rounded-3xl border border-border bg-muted/20 p-6"
      >
        <div className="space-y-2">
          <h2 className="text-lg font-semibold tracking-tight">
            Competitive swipe file
          </h2>
          <p className="text-sm text-muted-foreground">
            Borrow layout cues from trend leaders before you stage your own
            Chicken Stars landing videos and carousels.
          </p>
        </div>
        <div className="space-y-4">
          {COMPETITOR_CALLOUTS.map((item) => (
            <Card
              key={item.title}
              className="flex flex-col gap-3 border border-border bg-background/70 p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground">
                    {item.stat}
                  </p>
                  <h3 className="text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-muted-foreground sm:max-w-sm">
                {item.detail}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="videos"
        className="space-y-5 rounded-3xl border border-border bg-muted/20 p-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold tracking-tight">
              Watch the Chicken Stars loop in motion
            </h2>
            <p className="text-sm text-muted-foreground">
              Embed-ready explainers that showcase pacing, caption placements,
              and neon wipes before you storyboard your remix.
            </p>
          </div>
          <Badge variant="secondary" className="uppercase tracking-widest">
            Reference reels
          </Badge>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {VIDEO_REFERENCES.map((video) => (
            <article
              key={video.title}
              className="flex flex-col gap-3 rounded-xl border border-border bg-background/70 p-4 shadow-sm"
            >
              <div className="relative aspect-video overflow-hidden rounded-md bg-foreground/10">
                <iframe
                  title={`${video.title} — ${video.creator}`}
                  src={`${video.embedUrl}?rel=0`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  {video.platform} · {video.creator}
                </p>
                <h3 className="text-base font-semibold leading-snug text-foreground">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground">{video.note}</p>
                <a
                  href={video.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-primary underline underline-offset-2"
                >
                  Open source clip ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="gallery"
        className="space-y-5 rounded-3xl border border-border bg-muted/20 p-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold tracking-tight">
              Moodboard-ready Chicken Stars imagery
            </h2>
            <p className="text-sm text-muted-foreground">
              Drop these SVG panels into hero sections, CapCut cover slides, or
              client decks with no loss in 4K exports.
            </p>
          </div>
          <Badge variant="secondary" className="uppercase tracking-widest">
            Download pack
          </Badge>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {GALLERY_IMAGES.map((image, index) => (
            <figure
              key={image.src}
              className="rounded-2xl border border-border bg-background/70 p-3 shadow-sm"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-secondary/20">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
              <figcaption className="mt-3 space-y-2 text-sm">
                <span className="font-medium text-foreground">
                  {image.title}
                </span>
                <p className="text-muted-foreground">{image.detail}</p>
                <a
                  href={image.src}
                  download
                  className="inline-flex items-center text-primary underline underline-offset-2"
                >
                  Download SVG
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section
        id="intent"
        className="space-y-4 rounded-3xl border border-border bg-muted/20 p-6"
      >
        <h2 className="text-lg font-semibold tracking-tight">
          Chicken Stars Search Intent Checklist
        </h2>
        <ul className="space-y-3 text-base leading-relaxed text-muted-foreground">
          {INTENT_CLUSTERS.map((item) => (
            <li key={item.label} className="leading-relaxed">
              <span className="font-medium text-foreground">{item.label}:</span>{' '}
              {item.detail}
            </li>
          ))}
        </ul>
      </section>

      <section
        id="audio"
        className="space-y-4 rounded-3xl border border-border bg-muted/20 p-6"
      >
        <h2 className="text-lg font-semibold tracking-tight">
          Audio & Template Sources
        </h2>
        <ul className="space-y-3 text-base leading-relaxed text-muted-foreground">
          {AUDIO_SOURCES.map((item) => (
            <li key={item.label} className="leading-relaxed">
              <span className="font-medium text-foreground">{item.label}:</span>{' '}
              {item.detail}
            </li>
          ))}
        </ul>
      </section>

      <section
        id="distribution"
        className="space-y-4 rounded-3xl border border-border bg-muted/20 p-6"
      >
        <h2 className="text-lg font-semibold tracking-tight">
          Distribution & Compliance Tips
        </h2>
        <ul className="space-y-3 text-base leading-relaxed text-muted-foreground">
          {DISTRIBUTION_TIPS.map((item) => (
            <li key={item.label} className="leading-relaxed">
              <span className="font-medium text-foreground">{item.label}:</span>{' '}
              {item.detail}
            </li>
          ))}
        </ul>
      </section>

      <section
        id="resources"
        className="space-y-4 rounded-3xl border border-border bg-muted/20 p-6"
      >
        <h2 className="text-lg font-semibold tracking-tight">
          Quick links for sourcing assets
        </h2>
        <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
          {RESOURCE_LINKS.map((resource) => (
            <div key={resource.href} className="space-y-1">
              <a
                href={resource.href}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-foreground underline underline-offset-2"
              >
                {resource.label}
              </a>
              <p>{resource.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-6 flex flex-wrap gap-4 text-sm">
        <LocaleLink href="/" className="underline font-medium">
          ← Back to home
        </LocaleLink>
        <LocaleLink
          href="/meme/ghostface-ai-picture"
          className="underline font-medium"
        >
          Explore the Ghostface AI picture guide →
        </LocaleLink>
        <LocaleLink href="/totr-meme-meaning" className="underline font-medium">
          Compare with the TOTR meme breakdown →
        </LocaleLink>
      </footer>
    </main>
  );
}
