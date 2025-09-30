import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { getUrlWithLocale } from '@/lib/urls/urls';
import {
  Calendar,
  Compass,
  Library,
  Shield,
  Sparkles,
  Waves,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const TRENDING_STORIES = [
  {
    title: 'South Korea launches second KDX-III Batch-II destroyer',
    description:
      'HD Hyundai Heavy Industries christened the Aegis destroyer “Dasan Jeong Yak-yong,” adding a new ballistic-missile defense asset for the Republic of Korea Navy.',
    link: 'https://www.navalnews.com/naval-news/2025/09/hd-hhi-launches-aegis-destroyer-dasan-jeong-yak-yong/',
    icon: Shield,
  },
  {
    title: 'U.S. Navy tests Flight III Aegis upgrades',
    description:
      'Ingalls Shipbuilding completed builder’s trials for USS Ted Stevens, validating the SPY-6 radar and Aegis Baseline 10 suite that anchor the fleet’s next-gen air defense.',
    link: 'https://www.marinelink.com/news/hii-completes-builders-sea-trials-530494',
    icon: Waves,
  },
  {
    title: 'USS Benfold rotates after a decade in Japan',
    description:
      'Stars and Stripes highlighted the destroyer’s move to Washington State and its legacy as one of the first forward-deployed ships with the upgraded Aegis Combat System.',
    link: 'https://www.stripes.com/branches/navy/2025-09-29/uss-benfold-homeport-japan-washington-19258788.html',
    icon: Compass,
  },
];

const TIMELINE = [
  {
    date: '17 Sep 2025',
    headline: 'Dasan Jeong Yak-yong launched',
    summary:
      'HD HHI rolled out South Korea’s second Batch-II Aegis destroyer, reinforcing allied missile-defense coverage in Northeast Asia.',
    link: TRENDING_STORIES[0]?.link,
  },
  {
    date: '28 Sep 2025',
    headline: 'USS Ted Stevens completes builder’s trials',
    summary:
      'Ingalls Shipbuilding finished multi-day sea trials that stress-tested the Flight III destroyer’s propulsion, radar, and integrated Aegis weapons suite.',
    link: TRENDING_STORIES[1]?.link,
  },
  {
    date: '29 Sep 2025',
    headline: 'USS Benfold departs Yokosuka',
    summary:
      'After ten years in Japan, the destroyer set sail for Everett, Washington, spotlighting long-term investment in Aegis-equipped forward presence.',
    link: TRENDING_STORIES[2]?.link,
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const metadata = constructMetadata({
    title:
      'Aegis Meaning & 2025 Trend Report | Mythic Shield to Modern Defense',
    description:
      'Discover why “aegis” is spiking in 2025 search trends. Explore its mythological origin and see how new Aegis-equipped destroyers from South Korea and the U.S. Navy are driving global interest.',
    canonicalUrl: getUrlWithLocale('/aegis', locale),
    image: 'og.png',
  });

  return {
    ...metadata,
    keywords: [
      'aegis meaning',
      'aegis combat system',
      'kdx iii destroyer',
      'flight iii destroyer',
      'naval missile defense',
      'aegis trend 2025',
    ],
  };
}

export default async function AegisPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Aegis Meaning & 2025 Trend Report',
    description:
      'Explains the mythological roots of “aegis” and why modern naval defense stories are pushing the keyword into 2025 search trends.',
    author: {
      '@type': 'Organization',
      name: 'TOTR Meme',
    },
    datePublished: '2025-09-30',
    dateModified: '2025-09-30',
    inLanguage: locale,
  } as const;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950/30 dark:via-gray-950 dark:to-slate-950/60">
      <div className="container mx-auto px-4 py-12">
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge
              variant="secondary"
              className="text-sm font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
            >
              <Sparkles className="w-4 h-4 mr-1" />
              TRENDING KEYWORD
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Aegis Meaning & 2025 Trend Report
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From Athena’s legendary shield to the world’s most advanced naval
            defense network, here’s why searches for “aegis” are surging right
            now.
          </p>
        </div>

        <Card className="mb-10 border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Shield className="w-6 h-6 text-blue-500" />
              Quick Definition
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg space-y-4 text-gray-700 dark:text-gray-200">
            <p>
              <strong>Mythology:</strong> “Aegis” comes from the protective
              goatskin shield wielded by Zeus and Athena in Greek epics,
              symbolising unstoppable protection and divine backing.{' '}
              <a
                href="https://en.wikipedia.org/wiki/Aegis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-300 underline decoration-dotted"
              >
                (Wikipedia)
              </a>
            </p>
            <p>
              <strong>Modern tech:</strong> Today the term powers the Aegis
              Combat System—a radar, missile, and command suite deployed on
              allied destroyers to intercept aircraft, cruise missiles, and
              ballistic threats in real time.
            </p>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Sparkles className="w-6 h-6 text-purple-500" />
                  Why “Aegis” is trending in late 2025
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {TRENDING_STORIES.map(
                  ({ title, description, link, icon: Icon }) => (
                    <div
                      key={title}
                      className="flex flex-col sm:flex-row sm:items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/70 dark:text-blue-200">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {description}
                        </p>
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-blue-600 dark:text-blue-300 hover:underline"
                        >
                          Read source ↗
                        </a>
                      </div>
                    </div>
                  )
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Calendar className="w-6 h-6 text-blue-500" />
                  2025 Aegis Storyline
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="relative">
                  <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-indigo-400 hidden md:block" />
                  <div className="space-y-8">
                    {TIMELINE.map(({ date, headline, summary, link }) => (
                      <div key={headline} className="md:pl-12 relative">
                        <div className="hidden md:flex absolute left-4 top-1.5 h-3 w-3 rounded-full bg-blue-500" />
                        <div className="bg-white dark:bg-gray-900/60 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
                          <p className="text-sm uppercase tracking-wide text-blue-600 dark:text-blue-300 font-semibold">
                            {date}
                          </p>
                          <h3 className="text-xl font-semibold mt-1 text-gray-900 dark:text-white">
                            {headline}
                          </h3>
                          <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
                            {summary}
                          </p>
                          {link ? (
                            <a
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-3 inline-flex text-sm font-medium text-blue-600 dark:text-blue-300 hover:underline"
                            >
                              Source details ↗
                            </a>
                          ) : null}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Library className="w-6 h-6 text-emerald-500" />
                  Aegis Knowledge Base
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Mythic Roots
                  </h3>
                  <p>
                    Originally a divine goatskin shield, “aegis” entered English
                    as shorthand for impenetrable protection. The imagery helped
                    militaries brand their layered missile-defense umbrellas.
                  </p>
                </div>
                <Separator />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Combat System 101
                  </h3>
                  <p>
                    Aegis ships fuse SPY radars, vertical launch cells, and
                    battle management software so crews can track hundreds of
                    targets and fire interceptors like SM-2, SM-3, or SM-6
                    within seconds.
                  </p>
                </div>
                <Separator />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Who uses it?
                  </h3>
                  <p>
                    Besides the United States, navies in South Korea, Japan,
                    Australia, Spain, and Norway deploy Aegis variants, making
                    it a touchstone for Indo-Pacific security conversations in
                    2025.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Quick FAQ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-600 dark:text-gray-300">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Why are people googling “aegis” now?
                  </h3>
                  <p>
                    Naval upgrades—new launches in Korea, U.S. trials, and ship
                    rotations—put the word in headlines, pushing curious readers
                    to look up both its mythic meaning and its defense role.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Is the Aegis Combat System only about missiles?
                  </h3>
                  <p>
                    Missile defense is core, but the suite also handles anti-air
                    warfare, anti-surface targeting, and cooperative engagement
                    with allied ships and aircraft.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    How does this connect to pop culture?
                  </h3>
                  <p>
                    “Under the aegis of…” remains a go-to phrase for describing
                    institutional backing, so every major news surge reminds
                    audiences of its mythological flair.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="border border-purple-200 dark:border-purple-800 bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 dark:from-purple-950/30 dark:via-blue-950/30 dark:to-indigo-950/30">
          <CardContent className="py-10 px-6 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Track every viral keyword with TOTR Insight
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We monitor spikes like “aegis” so you can react fast—publish
              helpful explainers, build topical authority, and convert search
              curiosity into loyal readers.
            </p>
            <Button size="lg" asChild>
              <LocaleLink href="/contact">Talk to our SEO team</LocaleLink>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
