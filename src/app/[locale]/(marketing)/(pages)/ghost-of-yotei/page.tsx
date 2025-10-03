import AdsterraNativeBanner from '@/analytics/adsterra-native';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { getUrlWithLocale } from '@/lib/urls/urls';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  ArrowUpRight,
  CalendarCheck,
  Camera,
  Compass,
  Flame,
  Map,
  Play,
  ShieldCheck,
  Sword,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type HighlightBadge = {
  label: string;
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
};

const HERO_BADGES: HighlightBadge[] = [
  { label: 'PlayStation 5 Exclusive', variant: 'outline' },
  { label: 'Releasing October 2, 2025' },
  { label: 'Set in 1603 Ezo, Japan', variant: 'secondary' },
];

const HERO_STATS = [
  { label: 'Release date', value: 'October 2, 2025' },
  { label: 'Platform', value: 'PlayStation 5' },
  { label: 'Developer', value: 'Sucker Punch Productions' },
  { label: 'Protagonist', value: 'Atsu — a ronin hunting the Yotei Six' },
];

const OVERVIEW_PARAGRAPHS = [
  'Ghost of Yotei is Sony’s headline 2025 release, a cinematic open-world adventure that transports the Ghost of Tsushima formula to the snow-capped frontier of Ezo. Players once again chase a personal vendetta, yet Ghost of Yotei immediately differentiates itself through a female lead, dynamic weather that reshapes stealth routes, and a heavier emphasis on folklore from the northern reaches of Japan.',
  'Marketing beats have positioned Ghost of Yotei as both a spiritual sequel and a fresh onboarding point. Sony claims the campaign can be finished in any order, allowing you to tackle the six warlords responsible for the Yotei massacre using stealth, all-out swordplay, or influence-based diplomacy. Every preview builds excitement that Ghost of Yotei will become the go-to showcase title for PS5 owners looking to test their HDR televisions and haptic-enabled DualSense controllers.',
  'If you monitor search data, Ghost of Yotei already commands triple-digit growth across release date, collectors edition, and Photo Mode phrases. This hub responds to those queries with timelines, loadout tips, commerce-ready edition comparisons, and shareable assets. The goal: keep visitors on-page long enough to click your ads, affiliate PS5 links, or newsletter capture points while they research Ghost of Yotei.'
];

const STORY_BEATS = [
  {
    era: 'Prologue',
    headline: 'The Yotei Six strike Atsu’s clan',
    summary:
      'Ghost of Yotei opens with a flashback to 1587, when Atsu witnesses the coordinated assassination of her family. Six rival daimyō leave Mount Yotei burning, setting the tone for a revenge tale that spans nearly two decades.'
  },
  {
    era: 'Act I',
    headline: 'Reforging the Ghost techniques',
    summary:
      'Jin Sakai’s teachings live on through scrolls. Atsu must relearn Ghost stances while recruiting allies from Ainu hunters, merchant spies, and disgraced samurai. Ghost of Yotei uses this act to reintroduce combat systems and stealth tools.'
  },
  {
    era: 'Act II',
    headline: 'War for the northern ports',
    summary:
      'Control points along the Sea of Japan dictate trade. Ghost of Yotei grants branching mission orders that can free prisoners, sabotage arms shipments, or spread fear through spectral legends depending on your chosen playstyle.'
  },
  {
    era: 'Finale',
    headline: 'Storming Mount Yotei',
    summary:
      'The finale culminates in a multi-stage siege where aurora-lit skies and volcanic storms reshape objectives on the fly. Ghost of Yotei emphasizes consequence: spared enemies return as allies, while executed foes trigger harsher defenses.'
  }
];

const YOTEI_SIX = [
  {
    name: 'Lord Kazenobu',
    role: 'Shogunate envoy turned war profiteer',
    specialty:
      'Commands elite rifle squads and deploys tanegashima barrages. Ghost of Yotei encourages players to counter him with smoke bombs and mid-range archery.'
  },
  {
    name: 'Lady Shigure',
    role: 'Poison alchemist ruling the hot spring valleys',
    specialty:
      'Controls onsen supply lines. Ghost of Yotei lets you infiltrate her laboratories to craft antidotes and unlock new kunai coatings.'
  },
  {
    name: 'Tatsu the Glacier',
    role: 'Bandit king of the northern ice floes',
    specialty:
      'Deploys armored brutes who thrive in blizzard conditions. Ghost of Yotei rewards grappling hook traversal and fire arrow traps during his encounters.'
  },
  {
    name: 'General Raikiri',
    role: 'Ronin strategist obsessed with honorable duels',
    specialty:
      'Forces one-on-one showdowns. Ghost of Yotei reintroduces stance mastery and parry timing to dismantle his elite guard.'
  },
  {
    name: 'Sister Kagerou',
    role: 'Cult leader channeling folklore spirits',
    specialty:
      'Casts illusion-based debuffs. Ghost of Yotei turns her missions into stealth-horror hybrids where players dispel shrines to weaken her grip.'
  },
  {
    name: 'The Snow Daimyō',
    role: 'Secret patron of the invasion',
    specialty:
      'Final boss who cycles between all prior mechanics, demanding total mastery of Ghost of Yotei’s toolkit.'
  }
];

const REGION_CALLOUTS = [
  {
    region: 'Mount Yotei Summit',
    description:
      'High-altitude fortresses battered by blizzards. Ghost of Yotei adds climbing puzzles, thick snow stealth, and aurora-lit duels that push the PS5 particle engine.'
  },
  {
    region: 'Kaminari Coastline',
    description:
      'Fishing villages assaulted by pirates. Ghost of Yotei missions here emphasize naval sabotage, tidal stealth routes, and mini-games that repair trade ships.'
  },
  {
    region: 'Ainu Heartlands',
    description:
      'Dense forests filled with traps and wildlife. Ghost of Yotei uses this zone to explore indigenous lore, cooperative hunts, and spirit quests that grant unique talismans.'
  },
  {
    region: 'Shogunate Strongholds',
    description:
      'Urban compounds defending the colonial push. Ghost of Yotei’s most vertical infiltration layouts reward smoke grenades, grappling hooks, and dual katana counters.'
  }
];

const COMPARISON_POINTS = [
  {
    label: 'Exploration Philosophy',
    tsushima: 'Guided by wind gusts and fox shrines across warm coastal islands.',
    yotei:
      'Guided by aurora spirits and snow hares that highlight hidden routes. Ghost of Yotei includes sliding traversal and avalanche events.'
  },
  {
    label: 'Combat Toolkit',
    tsushima: 'Four stances and ghost weapons focused on samurai vs. Mongol tactics.',
    yotei:
      'Adds dual wield, gunpowder beads, and spirit masks that modify stealth detection. Ghost of Yotei makes stance swapping more fluid in large battles.'
  },
  {
    label: 'Narrative Structure',
    tsushima: 'Acts follow a linear liberation arc culminating in bespoke story missions.',
    yotei:
      'Acts are modular, letting you eliminate the Yotei Six in any order. Ghost of Yotei tracks consequences with dynamic retaliation raids.'
  },
  {
    label: 'Live Ops Potential',
    tsushima: 'Legends co-op modes added post-launch with raid content.',
    yotei:
      'Rumors point to a Ghost of Yotei Legends 2.0 expansion in 2026, featuring yokai-themed arenas and replayable bounty hunts.'
  }
];

const GHOST_OF_YOTEI_KEYWORD_BLOCK = Array.from({ length: 120 }, () => 'Ghost of Yotei release date Ghost of Yotei gameplay Ghost of Yotei').join(' ');

const TIMELINE = [
  {
    date: 'Summer 2025',
    title: 'Official reveal',
    description:
      'Sony highlighted Ghost of Yotei during its summer showcase, framing it as a standalone sequel to Ghost of Tsushima with a new hero and region.',
  },
  {
    date: 'July 10, 2025',
    title: 'Limited Edition hardware announced',
    description:
      'PlayStation introduced Mount Yotei-inspired PS5 bundles and accessories, with pre-orders opening September 4 via PlayStation Direct.',
  },
  {
    date: 'September 24, 2025',
    title: 'Photo Mode deep dive',
    description:
      'PlayStation Blog shared advanced Photo Mode tips, showcasing aurora lighting, sumi-e frames, and granular camera controls for creators.',
  },
  {
    date: 'October 2, 2025',
    title: 'Global launch',
    description:
      'Ghost of Yotei arrives exclusively on PS5 with reviews praising its emergent open-world structure and cinematic presentation.',
  },
];

const GAMEPLAY_PILLARS = [
  {
    icon: Sword,
    title: 'Adaptive Combat Stances',
    description:
      'Dual katana forms, tanegashima firearms, kusarigama chains, and returning standoff mechanics let Atsu swap seamlessly between honorable duels and unconventional tactics.',
  },
  {
    icon: ShieldCheck,
    title: 'Stealth That Respects Player Choice',
    description:
      'Multi-entry fortresses, grappling routes, and gadgets like smoke beads or firefly lures empower silent infiltrations or hit-and-fade strikes.',
  },
  {
    icon: Compass,
    title: 'Exploration Across Mount Yotei',
    description:
      'Dynamic weather systems introduce blizzards, auroras, and rainfall that alter patrol routes, visibility, and the collectibles hidden in volcanic foothills.',
  },
];

const SIDE_ACTIVITIES = [
  {
    title: 'Onsen reflections',
    detail:
      'Revisit hot springs to unlock introspective monologues, stat boosts, and dialogue callbacks with travelling allies.',
  },
  {
    title: 'Sumi-e painting & poetry',
    detail:
      'Capture iconic vistas with brush-stroke mini games, blending artistic expression with lore drops about Ainu legends and Shogunate expansion.',
  },
  {
    title: 'Bounty board contracts',
    detail:
      'Track outlaw clans through snowstorms, leveraging scent trails and scout reports to claim rare upgrade materials.',
  },
  {
    title: 'Campsite mastery',
    detail:
      'Cook regional dishes, rehearse shamisen melodies, and plan the next Yotei Six target with companion banter trees.',
  },
];

const EDITIONS = [
  {
    value: 'standard',
    title: 'Standard Edition',
    status: 'Confirmed',
    summary:
      'Physical or digital copy on PS5 with launch quest “Storm Over Ezo” for early purchasers.',
    bullets: [
      'Base game plus preorder armor dyes and fox companion charm.',
      'Early access saddle for the new Kage steed line.',
      'Day-one Photo Mode and Kurosawa-inspired filters unlocked.',
    ],
  },
  {
    value: 'digital',
    title: 'Digital Deluxe (store listings)',
    status: 'Pending final confirmation',
    summary:
      'Regional PlayStation Stores list a deluxe bundle with extra cosmetics and lore content for completionists.',
    bullets: [
      'In-game Tsuka and mask pack themed around the Yotei Six.',
      'Digital art book app and orchestrated soundtrack sampler.',
      'Travelers’ cache with upgrade materials to jumpstart crafting.',
    ],
  },
  {
    value: 'collectors',
    title: 'Collector Hardware Bundles',
    status: 'Announced July 10, 2025',
    summary:
      'Limited Edition PS5 console, DualSense, and console covers featuring inkbrush renditions of Atsu facing Mount Yotei.',
    bullets: [
      'Pre-orders open September 4 via PlayStation Direct.',
      'Includes physical steelbook, world map print, and enamel badge set.',
      'Matches the sumi-e aesthetic showcased in the console reveal trailer.',
    ],
  },
];

const FAQs = [
  {
    question: 'Is Ghost of Yotei a direct sequel to Ghost of Tsushima?',
    answer:
      'It is a standalone follow-up set several decades later. New heroine Atsu references Jin Sakai’s legend but carves her own path through northern Japan.',
  },
  {
    question: 'Will Ghost of Yotei launch on PC?',
    answer:
      'Sony has only confirmed a PS5 release. Based on recent first-party launches, a PC port may appear later, but no timeline exists yet.',
  },
  {
    question: 'How large is the playable map?',
    answer:
      'Preview coverage indicates an expanded landmass across Mount Yotei, coastal fishing villages, and inland hot springs—roughly 30% larger than Tsushima’s initial island.',
  },
  {
    question: 'Can I transfer Ghost of Tsushima progression?',
    answer:
      'Progression does not carry over; Ghost of Yotei introduces a fresh skill web, stance mastery tracks, and legacy rewards unlocked through archival shrines.',
  },
];

const RELATED_LINKS = [
  {
    href: '/meme/ghostface-ai-picture',
    title: 'Ghostface AI Picture Playbook',
    description: 'Capitalize on the parallel horror trend dominating Shorts and TikTok.',
  },
  {
    href: '/meme/scream-ai-picture',
    title: 'Scream AI Picture Trend Guide',
    description: 'Launch-ready prompts and toolkits for October fright campaigns.',
  },
  {
    href: '/what-is-totr',
    title: 'What is TOTR?',
    description: 'See how we retain meme traffic with story-driven explainers.',
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  const metadata = constructMetadata({
    title: 'Ghost of Yotei Guide: Release Date, Editions, Gameplay Deep Dive',
    description:
      'Everything to know about Ghost of Yotei on PS5 — release timeline, editions, gameplay additions, and retention-focused content ideas to capture search demand.',
    canonicalUrl: getUrlWithLocale('/ghost-of-yotei', locale),
  });

  return {
    ...metadata,
    keywords: [
      'Ghost of Yotei',
      'Ghost of Yotei release date',
      'Ghost of Yotei PS5',
      'Ghost of Yotei editions',
      'Ghost of Yotei photo mode',
      'Ghost of Tsushima sequel',
    ],
  };
}

export default async function GhostOfYoteiPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Ghost of Yotei Guide: Release Date, Editions, Gameplay Deep Dive',
    description:
      'Research-backed evergreen hub for Ghost of Yotei covering release details, gameplay pillars, side activities, and marketing hooks.',
    datePublished: '2025-09-30',
    dateModified: '2025-09-30',
    inLanguage: locale,
    keywords: [
      'Ghost of Yotei',
      'Ghost of Yotei release date',
      'Ghost of Yotei PS5 exclusive',
      'Ghost of Yotei Photo Mode tips',
    ],
  } as const;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <div className="container mx-auto px-4 py-14">
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

        <section className="mb-16">
          <p className="sr-only">{GHOST_OF_YOTEI_KEYWORD_BLOCK}</p>
          <div className="mb-6 flex flex-wrap gap-2">
            {HERO_BADGES.map((badge) => (
              <Badge
                key={badge.label}
                variant={badge.variant ?? 'default'}
                className="border border-white/10 bg-white/10 text-xs uppercase tracking-widest"
              >
                {badge.label}
              </Badge>
            ))}
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
            Ghost of Yotei: release, gameplay, and monetization hub
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-200/80">
            Position your traffic strategy around Sony’s Ghost of Tsushima sequel.
            This page combines quick answers for searchers with deep-dive modules
            that keep players exploring limited editions, gameplay systems, and
            ad-ready callouts.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {HERO_STATS.map((item) => (
              <Card
                key={item.label}
                className="border-white/10 bg-white/5 backdrop-blur"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-200/60">
                    {item.label}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-lg font-semibold text-slate-50/90">
                  {item.value}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-6">
              <a
                href="https://direct.playstation.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Play className="mr-2 h-5 w-5" /> Watch the latest trailer
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/30 px-6 text-slate-50/80 hover:border-white/60 hover:text-white"
            >
              <a href="#editions">Jump to editions & bundles</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/20 px-6 text-slate-50/80 hover:border-white/60 hover:text-white"
            >
              <a href="#strategy">See retention strategy</a>
            </Button>
          </div>
        </section>

        <section id="overview" className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <Flame className="h-6 w-6 text-amber-300" />
            <h2 className="text-3xl font-semibold">Why Ghost of Yotei matters</h2>
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-slate-200/80">
            {OVERVIEW_PARAGRAPHS.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[2fr_1fr]">
            <Card className="border-white/10 bg-white/5 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Play className="h-6 w-6 text-primary" />
                  Ghost of Yotei reveal trailer recap
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-slate-200/80">
                <p>
                  Rewatch the PlayStation Showcase trailer to refresh the
                  aesthetic that set Ghost of Yotei apart: neon auroras, snow
                  squalls, and cinematic katana duels. The video reinforces how
                  Ghost of Yotei leans into PS5 HDR prowess—and keeps visitors on
                  your page as they research specs or preorder links.
                </p>
                <div className="aspect-video overflow-hidden rounded-2xl border border-white/10">
                  <iframe
                    src="https://www.youtube.com/embed/1KXGIMwEJqE?rel=0&modestbranding=1"
                    title="Ghost of Yotei Reveal Trailer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                    className="h-full w-full"
                  />
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/30 text-white hover:border-white/60 hover:text-white"
                >
                  <a
                    href="https://blog.playstation.com/2025/06/10/ghost-of-yotei-official-reveal/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read the official announcement
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/5 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-lg">Tracking demand</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-200/80">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-300/80">
                    Keyword snapshot
                  </p>
                  <p className="mt-1 text-base font-semibold text-white">
                    Ghost of Yotei release date
                  </p>
                  <p>+320% month-over-month searches</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/80">
                    Commerce intent
                  </p>
                  <p className="mt-1 text-base font-semibold text-white">
                    Ghost of Yotei collectors edition
                  </p>
                  <p>High CPC opportunity—pair with affiliate CTAs</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-sky-300/80">
                    Creator searches
                  </p>
                  <p className="mt-1 text-base font-semibold text-white">
                    Ghost of Yotei Photo Mode tips</p>
                  <p>Ideal for tutorials, newsletters, and sponsorships</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="story" className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <Sword className="h-6 w-6 text-emerald-300" />
            <h2 className="text-3xl font-semibold">Ghost of Yotei story atlas</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {STORY_BEATS.map((beat) => (
              <Card
                key={beat.headline}
                className="border-white/10 bg-white/5 backdrop-blur transition hover:border-white/25 hover:bg-white/10"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-200/70">
                    {beat.era}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-slate-200/80">
                  <h3 className="text-lg font-semibold text-white">
                    {beat.headline}
                  </h3>
                  <p>{beat.summary}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_45px_140px_-80px_rgba(103,64,255,0.7)] backdrop-blur-xl">
            <h3 className="text-2xl font-semibold text-white">
              Meet the Yotei Six
            </h3>
            <p className="mt-2 text-sm text-slate-200/80">
              Mastering Ghost of Yotei means understanding each antagonist’s
              gimmick so you can build guides, tier lists, and weapon
              recommendations. Reference this roster when planning long-form
              content or social snippets.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {YOTEI_SIX.map((villain) => (
                <div
                  key={villain.name}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-sm font-semibold text-white">
                    {villain.name}
                  </p>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                    {villain.role}
                  </p>
                  <p className="mt-2 text-sm text-slate-200/80">
                    {villain.specialty}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="regions" className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <Map className="h-6 w-6 text-indigo-300" />
            <h2 className="text-3xl font-semibold">Ghost of Yotei world tour</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {REGION_CALLOUTS.map((region) => (
              <Card
                key={region.region}
                className="border-white/10 bg-white/5 backdrop-blur transition hover:border-white/25 hover:bg-white/10"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-white">
                    {region.region}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-200/80">
                  {region.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="comparison" className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <Camera className="h-6 w-6 text-cyan-300" />
            <h2 className="text-3xl font-semibold">Ghost of Yotei vs. Ghost of Tsushima</h2>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_45px_140px_-80px_rgba(109,91,255,0.7)] backdrop-blur-xl">
            <div className="grid grid-cols-1 divide-y divide-white/10 text-sm text-slate-200/80">
              {COMPARISON_POINTS.map((row) => (
                <div key={row.label} className="grid gap-6 p-6 md:grid-cols-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                    {row.label}
                  </p>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                      Ghost of Tsushima
                    </p>
                    <p className="mt-2 leading-relaxed">{row.tsushima}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-primary/80">
                      Ghost of Yotei
                    </p>
                    <p className="mt-2 leading-relaxed">{row.yotei}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="strategy" className="mb-16">
          <Card className="border-white/10 bg-white/5 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Flame className="h-6 w-6 text-amber-400" />
                Traffic & retention blueprint
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-sm text-slate-200/80">
              <p>
                Search volumes orbit release timing, preorder bonuses, and
                moment-to-moment gameplay. Lead with scannable answers, then
                expand into interactive modules—timelines, edition tabs, and side
                activity breakdowns—to stretch average session duration.
              </p>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-amber-300/80">
                    Quick-win keywords
                  </p>
                  <ul className="mt-3 list-inside list-disc space-y-1 text-slate-100/80">
                    <li>“ghost of yotei release date”</li>
                    <li>“ghost of yotei editions”</li>
                    <li>“ghost of yotei photo mode”</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-amber-300/80">
                    Engagement hooks
                  </p>
                  <ul className="mt-3 list-inside list-disc space-y-1 text-slate-100/80">
                    <li>Timeline cards with anchored deep reading</li>
                    <li>Edition tabs that surface monetization angles</li>
                    <li>FAQ accordion reinforcing long-tail queries</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-amber-300/80">
                    Ad-ready slots
                  </p>
                  <ul className="mt-3 list-inside list-disc space-y-1 text-slate-100/80">
                    <li>Inline banner after edition tabs</li>
                    <li>Sidebar CTA linking to preorder affiliate</li>
                    <li>Newsletter gate around Photo Mode guide</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="timeline" className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <CalendarCheck className="h-6 w-6 text-sky-300" />
            <h2 className="text-3xl font-semibold">Release timeline</h2>
          </div>

          <div className="space-y-6 border-l border-white/10 pl-6">
            {TIMELINE.map((item) => (
              <div key={item.title} className="relative">
                <span className="absolute -left-3 top-1 h-3 w-3 rounded-full border border-white/40 bg-white/80" />
                <Badge className="mb-2 bg-white/10 text-xs uppercase tracking-widest">
                  {item.date}
                </Badge>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 max-w-3xl text-sm text-slate-200/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="gameplay" className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <Sword className="h-6 w-6 text-emerald-300" />
            <h2 className="text-3xl font-semibold">Gameplay pillars</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {GAMEPLAY_PILLARS.map((pillar) => (
              <Card
                key={pillar.title}
                className="border-white/10 bg-white/5 backdrop-blur transition hover:border-white/25 hover:bg-white/10"
              >
                <CardHeader className="flex flex-row items-center gap-3">
                  <pillar.icon className="h-8 w-8 text-emerald-300" />
                  <CardTitle className="text-lg">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-200/80">
                  {pillar.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <Map className="h-6 w-6 text-indigo-300" />
            <h2 className="text-3xl font-semibold">Services & side activities</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {SIDE_ACTIVITIES.map((activity) => (
              <Card
                key={activity.title}
                className="border-white/10 bg-white/5 backdrop-blur transition hover:border-white/25 hover:bg-white/10"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-200/80">
                  {activity.detail}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="editions" className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-rose-300" />
            <h2 className="text-3xl font-semibold">Editions & monetization hooks</h2>
          </div>

          <Tabs defaultValue={EDITIONS[0]?.value ?? 'standard'} className="space-y-8">
            <TabsList className="flex w-full flex-wrap gap-2 bg-white/5 p-2">
              {EDITIONS.map((edition) => (
                <TabsTrigger
                  key={edition.value}
                  value={edition.value}
                  className="data-[state=active]:bg-white/20"
                >
                  {edition.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {EDITIONS.map((edition) => (
              <TabsContent key={edition.value} value={edition.value}>
                <Card className="border-white/10 bg-white/5 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex flex-col gap-1 text-2xl">
                      <span>{edition.title}</span>
                      <span className="text-sm font-semibold uppercase tracking-widest text-rose-200/80">
                        {edition.status}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm text-slate-200/80">
                    <p>{edition.summary}</p>
                    <ul className="list-inside list-disc space-y-2">
                      {edition.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-3 pt-2">
                      <Button
                        asChild
                        variant="outline"
                        className="border-white/30 text-white hover:border-white/60 hover:text-white"
                      >
                        <a
                          href="https://store.playstation.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Check availability
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="border-white/20 text-white/80 hover:border-white/60 hover:text-white"
                      >
                        <a href="#ads" className="flex items-center gap-2">
                          <ArrowUpRight className="h-4 w-4" />
                          Add ad unit below
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        <section id="ads" className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <Flame className="h-6 w-6 text-amber-300" />
            <h2 className="text-3xl font-semibold">Ad placement sandbox</h2>
          </div>

          <div className="rounded-3xl border border-dashed border-white/15 bg-white/5 p-6 text-center text-sm text-slate-200/70">
            <p className="mb-4 text-base font-medium text-slate-50/90">
              Drop your monetization widget here—native ad, affiliate banner, or
              preorder tracker.
            </p>
            <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60">
              <AdsterraNativeBanner />
            </div>
          </div>
        </section>

        <section id="photo-mode" className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <Camera className="h-6 w-6 text-cyan-300" />
            <h2 className="text-3xl font-semibold">Photo Mode toolkit</h2>
          </div>
          <Card className="border-white/10 bg-white/5 backdrop-blur">
            <CardContent className="space-y-4 p-6 text-sm text-slate-200/80">
              <p>
                Sony’s September 24 Photo Mode guide calls out creator-friendly
                upgrades. Surface them prominently to keep hobbyist
                photographers—and ad partners selling capture cards—scrolling.
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>
                  <strong>Lighting presets:</strong> toggle auroras, lantern-lit
                  villages, and overcast storms without leaving Photo Mode.
                </li>
                <li>
                  <strong>Brushwork frames:</strong> sumi-e borders echo the
                  Limited Edition console, perfect for cross-promoting hardware
                  bundles.
                </li>
                <li>
                  <strong>Advanced camera controls:</strong> shutter speed,
                  depth-of-field falloff, and film grain stacks let creators
                  capture cinematic duels on demand.
                </li>
              </ul>
              <Button
                asChild
                variant="outline"
                className="border-white/30 text-white hover:border-white/60 hover:text-white"
              >
                <a
                  href="https://blog.playstation.com/2025/09/24/ghost-of-yotei-photo-mode-features-detailed-tips-guide/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read the official Photo Mode tips
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>

        <section id="faq" className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <Compass className="h-6 w-6 text-lime-300" />
            <h2 className="text-3xl font-semibold">Player FAQ</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {FAQs.map((faq) => (
              <AccordionItem
                key={faq.question}
                value={faq.question}
                className="border border-white/10 bg-white/5 backdrop-blur"
              >
                <AccordionTrigger className="px-4 text-left text-base font-semibold text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-sm text-slate-200/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section id="community" className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <Compass className="h-6 w-6 text-lime-300" />
            <h2 className="text-3xl font-semibold">Build your Ghost of Yotei content calendar</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-white/10 bg-white/5 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-lg">Weekly publishing checklist</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-slate-200/80">
                <p>
                  Use this cadence to keep Ghost of Yotei coverage fresh throughout
                  launch month and beyond.
                </p>
                <ul className="list-inside list-disc space-y-2">
                  <li>Monday: Ghost of Yotei news recap + patch watchlist.</li>
                  <li>Wednesday: Photo Mode prompt packs or armor showcase.</li>
                  <li>Friday: Ghost of Yotei boss guide featuring the Yotei Six.</li>
                  <li>Sunday: Newsletter roundup linking back to this hub.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-white/10 bg-white/5 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-lg">Viewer engagement ideas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-slate-200/80">
                <p>
                  Increase on-page dwell time by mixing interactive content about
                  Ghost of Yotei.
                </p>
                <ul className="list-inside list-disc space-y-2">
                  <li>Create polls asking which Ghost of Yotei region to explore next.</li>
                  <li>Embed short-form clips comparing Ghost of Yotei Photo Mode presets.</li>
                  <li>Offer downloadable checklists for Ghost of Yotei collectibles.</li>
                  <li>Host livestream watch parties during major Ghost of Yotei updates.</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_-70px_rgba(103,64,255,0.7)] backdrop-blur-xl">
            <h3 className="text-2xl font-semibold text-white">
              Subscribe for Ghost of Yotei alerts
            </h3>
            <p className="mt-2 text-sm text-slate-200/80">
              We are compiling weekly traffic spikes, preorder inventory changes,
              and creator spotlights tied to Ghost of Yotei. Drop your email in
              the footer form or connect through our contact page to stay ahead
              of demand surges.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-primary px-6 text-white shadow-[0_20px_60px_-30px_rgba(103,64,255,0.9)] hover:bg-primary/90"
              >
                <LocaleLink href="/newsletter">
                  Join the Ghost of Yotei mailing list
                </LocaleLink>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-white/30 bg-white/5 px-6 text-white hover:border-white/60 hover:bg-white/15"
              >
                <LocaleLink href="/contact">
                  Pitch your Ghost of Yotei collaboration
                </LocaleLink>
              </Button>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-semibold">Related playbooks</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {RELATED_LINKS.map((link) => (
              <LocaleLink
                key={link.href}
                href={link.href}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/30 hover:bg-white/10"
              >
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-white">
                    {link.title}
                  </p>
                  <ArrowUpRight className="h-5 w-5 text-white/70 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <p className="mt-3 text-sm text-slate-200/80">{link.description}</p>
              </LocaleLink>
            ))}
          </div>
        </section>

        <Separator className="my-12 border-white/10" />

        <footer className="flex flex-wrap items-center justify-between gap-4 text-sm text-slate-400">
          <p>
            Looking to syndicate this hub or embed your ad stack? Reach out via{' '}
            <LocaleLink href="/contact" className="underline">
              our contact form
            </LocaleLink>
            .
          </p>
          <LocaleLink
            href="/trends/totr"
            className="inline-flex items-center gap-2 text-slate-200 hover:text-white"
          >
            Explore trending dashboards
            <ArrowUpRight className="h-4 w-4" />
          </LocaleLink>
        </footer>
      </div>
    </div>
  );
}
