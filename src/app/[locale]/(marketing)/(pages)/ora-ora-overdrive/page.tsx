import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { getUrlWithLocale } from '@/lib/urls/urls';
import {
  Calendar,
  Gamepad2,
  Gift,
  MapPin,
  Sparkles,
  Trophy,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const TRENDING_UPDATES = [
  {
    title: 'Launch locked for 25 September 2025',
    description:
      'Bandai Namco and gumi confirmed the JoJo mobile RPG launches on 25 September, turning “Ora Ora Overdrive” into a release-day search spike across anime and gacha communities.',
    link: 'https://jojo-oradora.com/articles/250918/',
  },
  {
    title: '1 million pre-registrations cleared',
    description:
      'The official campaign broke the one-million mark, rewarding players with UR tickets and developer spotlight—evidence that “Ora Ora Overdrive” hype has reached global fandom timelines.',
    link: 'https://jojo-oradora.com/articles/250924/',
  },
  {
    title: 'Fresh systems teased by community wikis',
    description:
      'Fan translators documented AP stamina, Harvest gathering, and PvP Battle Arena, giving curious players reasons to Google “Ora Ora Overdrive” tips before stepping into the grid battles.',
    link: 'https://oraora-overdrive.fandom.com/wiki/Basic_Guide',
  },
];

const TIMELINE_EVENTS = [
  {
    date: '18 Sep 2025',
    label: 'Launch date reveal',
    summary:
      'The official site locked the JoJo mobile RPG for a 25 September release in Japan, pushing “Ora Ora Overdrive” to the top of anime gaming chatter.',
    link: 'https://jojo-oradora.com/articles/250918/',
  },
  {
    date: '24 Sep 2025',
    label: 'Pre-registration milestone',
    summary:
      'Developers celebrated one million signups and confirmed bonus UR rewards, so “Ora Ora Overdrive” fans expect generous launch-day pulls.',
    link: 'https://jojo-oradora.com/articles/250924/',
  },
  {
    date: '25 Sep 2025',
    label: 'App store release',
    summary:
      'With iOS and Google Play links live, “Ora Ora Overdrive” begins service with parts 1–3 fully voiced and animated for story mode binge sessions.',
    link: 'https://jojo-oradora.com/',
  },
];

const FEATURE_CALLOUTS = [
  {
    heading: 'Grid-based overdrive battles',
    copy: 'Story and challenge stages unfold on an isometric grid where “Ora Ora Overdrive” squads position units, trigger overdrives, and sync Stands for combo chains.',
  },
  {
    heading: 'AP, Harvest, and gacha economy',
    copy: 'AP stamina, Harvest auto-gathering, and Star pulls define “Ora Ora Overdrive” progression—knowing when to spend 150 Stars per summon keeps UR rolls within reach.',
  },
  {
    heading: 'PvP Battle Arena + Bloodline trials',
    copy: 'Beyond story chapters, “Ora Ora Overdrive” layers Nemesis Rush, Fate of the Bloodline restrictions, and real-time Battle Arena duels for competitive players.',
  },
  {
    heading: 'Million-player reward ladder',
    copy: 'Every pre-registration tier unlocked freebies like UR Dio Brando, Start Dash packs, and UR Supporter tickets, making “Ora Ora Overdrive” launches feel generous from day one.',
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const metadata = constructMetadata({
    title: 'Ora Ora Overdrive Release Guide | JoJo Mobile RPG Trends & Rewards',
    description:
      'Track the JoJo’s Bizarre Adventure: Ora Ora Overdrive launch on 25 Sept 2025. See pre-registration rewards, gameplay systems, and why this mobile RPG is dominating anime search trends.',
    canonicalUrl: getUrlWithLocale('/ora-ora-overdrive', locale),
    image: 'og.png',
  });

  return {
    ...metadata,
    keywords: [
      'Ora Ora Overdrive',
      'JoJo mobile RPG',
      'Ora Ora Overdrive release date',
      'Ora Ora Overdrive pre registration',
      'Ora Ora Overdrive gameplay',
      'JoJo gacha 2025',
    ],
  };
}

export default async function OraOraOverdrivePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Ora Ora Overdrive Release Guide',
    description:
      'Deep dive into JoJo’s Bizarre Adventure: Ora Ora Overdrive launch timing, systems, and community rewards in 2025.',
    author: {
      '@type': 'Organization',
      name: 'TOTR Meme',
    },
    datePublished: '2025-09-30',
    dateModified: '2025-09-30',
    inLanguage: locale,
  } as const;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-rose-50 dark:from-amber-950/20 dark:via-gray-950 dark:to-rose-950/30">
      <div className="container mx-auto px-4 py-12">
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge
              variant="secondary"
              className="text-sm font-semibold bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-200"
            >
              <Sparkles className="w-4 h-4 mr-1" />
              TRENDING GAME LAUNCH
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-red-600 to-purple-600 bg-clip-text text-transparent">
            Ora Ora Overdrive Release Guide & Trend Watch
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ora Ora Overdrive hype exploded as JoJo fans counted down to the 25
            September mobile launch, pushing “Ora Ora Overdrive” searches beyond
            anime circles and into mainstream gaming dashboards.
          </p>
        </div>

        <Card className="mb-10 border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-r from-amber-50 to-rose-50 dark:from-amber-950/30 dark:to-rose-950/20 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Gamepad2 className="w-6 h-6 text-amber-500" />
              Quick Definition
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg space-y-4 text-gray-700 dark:text-gray-200">
            <p>
              Ora Ora Overdrive is a grid-based JoJo’s Bizarre Adventure mobile
              RPG from Bandai Namco and gumi, mixing anime cutscenes, Live2D
              storytelling, and turn-based tactics into one overdrive-fueled
              package.
            </p>
            <p>
              The phrase Ora Ora Overdrive also anchors the pre-registration
              campaign, social hashtags, and App Store listings, so ranking for
              Ora Ora Overdrive content now captures launch-week intent.
            </p>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Sparkles className="w-6 h-6 text-pink-500" />
                  Why Ora Ora Overdrive dominates searches now
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {TRENDING_UPDATES.map(({ title, description, link }) => (
                  <div
                    key={title}
                    className="p-4 rounded-xl bg-white dark:bg-gray-900/50 border border-amber-200 dark:border-amber-800"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {title}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
                      {description}
                    </p>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex text-sm font-medium text-amber-600 dark:text-amber-300 hover:underline"
                    >
                      Read source ↗
                    </a>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Calendar className="w-6 h-6 text-amber-500" />
                  Ora Ora Overdrive launch timeline
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  {TIMELINE_EVENTS.map(({ date, label, summary, link }) => (
                    <div
                      key={label}
                      className="bg-white dark:bg-gray-900/60 border border-amber-200 dark:border-amber-800 rounded-xl p-5 shadow-sm"
                    >
                      <p className="text-sm uppercase tracking-wide text-amber-600 dark:text-amber-300 font-semibold">
                        {date}
                      </p>
                      <h3 className="text-xl font-semibold mt-1 text-gray-900 dark:text-white">
                        {label}
                      </h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
                        {summary}
                      </p>
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex text-sm font-medium text-amber-600 dark:text-amber-300 hover:underline"
                      >
                        Source details ↗
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Gift className="w-6 h-6 text-purple-500" />
                  Ora Ora Overdrive reward ladder
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                <p>
                  From Twitter icons to UR Dio Brando, every milestone made Ora
                  Ora Overdrive pre-registration threads go viral. Keep
                  highlighting these giveaways in content updates to maintain
                  Ora Ora Overdrive keyword density and conversion.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <Trophy className="w-5 h-5 text-amber-500 mt-1" />
                    <span>
                      300k signups delivered free UR{' '}
                      <strong>[Emperor of Evil] Dio Brando</strong>, the first
                      big Ora Ora Overdrive headline for collectors.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Trophy className="w-5 h-5 text-amber-500 mt-1" />
                    <span>
                      800k pre-registrations secured UR Supporter tickets,
                      driving repeat Ora Ora Overdrive shares across Discord and
                      Reddit.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Trophy className="w-5 h-5 text-amber-500 mt-1" />
                    <span>
                      1M signups unlocked UR Assist Card tickets and cemented
                      Ora Ora Overdrive as 2025’s most anticipated JoJo mobile
                      drop.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  Core systems to highlight
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-gray-600 dark:text-gray-300">
                {FEATURE_CALLOUTS.map(({ heading, copy }) => (
                  <div key={heading} className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {heading}
                    </h3>
                    <p className="leading-relaxed">{copy}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  FAQ for Ora Ora Overdrive SEO
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-600 dark:text-gray-300">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Where do players download Ora Ora Overdrive?
                  </h3>
                  <p>
                    Direct readers to the official App Store and Google Play
                    links on jojo-oradora.com so Ora Ora Overdrive landing pages
                    earn trust and click-throughs.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Which JoJo parts show up at launch?
                  </h3>
                  <p>
                    Parts 1 through 3 feature fully voiced story arcs and Live2D
                    cutscenes at release, giving Ora Ora Overdrive coverage
                    plenty of lore hooks.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    How competitive can Ora Ora Overdrive get?
                  </h3>
                  <p>
                    Between Battle Arena, Nemesis Rush, and Fate of the
                    Bloodline restrictions, Ora Ora Overdrive content can target
                    PvE grinders and PvP tacticians alike.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="border border-purple-200 dark:border-purple-800 bg-gradient-to-r from-purple-50 via-amber-50 to-rose-50 dark:from-purple-950/30 dark:via-amber-950/30 dark:to-rose-950/30">
          <CardContent className="py-10 px-6 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Turn Ora Ora Overdrive buzz into evergreen traffic
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Build topical clusters around Ora Ora Overdrive metas, reroll
              guides, and JoJo lore breakdowns—then watch Ora Ora Overdrive
              searchers convert into long-term fans of your brand.
            </p>
            <Button size="lg" asChild>
              <LocaleLink href="/contact">
                Plan your Ora Ora Overdrive content sprint
              </LocaleLink>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
