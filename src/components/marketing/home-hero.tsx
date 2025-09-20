'use client';

import { AuroraBackground } from '@/components/marketing/aurora-background';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getUrlWithLocale } from '@/lib/urls/urls';
import { cn } from '@/lib/utils';
import { Download, Play, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import type { Locale } from 'next-intl';
import Link from 'next/link';

interface HeroCopy {
  badge: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
}

interface QuickCard {
  heading: string;
  text: string;
}

interface QuickAnswerCopy {
  title: string;
  cards: ReadonlyArray<QuickCard>;
  tags: ReadonlyArray<string>;
}

interface HomeHeroProps {
  hero: HeroCopy;
  quickAnswer: QuickAnswerCopy;
  locale: Locale;
}

const cardGradients = [
  'from-[#6d5bff3d] via-[#6d5bff1f] to-[#6d5bff00]',
  'from-[#f472b63a] via-[#f472b61f] to-[#f472b600]',
  'from-[#38bdf832] via-[#38bdf818] to-[#38bdf800]',
];

export function HomeHero({ hero, quickAnswer, locale }: HomeHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <AuroraBackground />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.08),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(9,6,24,0.65)_0%,rgba(9,6,24,0.2)_45%,rgba(9,6,24,0.8)_100%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#ffffff0f_2px,transparent_2px)] [background-size:38px_38px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 pb-24 pt-32 sm:pt-36">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-10 text-left">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="space-y-6"
            >
              <Badge
                variant="secondary"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 shadow-[0_0_30px_rgba(109,91,255,0.25)] backdrop-blur"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                {hero.badge}
              </Badge>

              <div className="space-y-4">
                <motion.h1
                  className="font-display text-balance text-4xl leading-tight text-white sm:text-6xl lg:text-7xl"
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
                >
                  {hero.title}
                </motion.h1>

                <motion.p
                  className="text-balance text-lg text-white/70 sm:max-w-xl sm:text-xl"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                >
                  {hero.subtitle}
                </motion.p>
              </div>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.35 }}
              >
                <Button
                  size="lg"
                  asChild
                  className="h-14 rounded-full px-8 text-base font-semibold shadow-[0_18px_45px_-20px_rgba(103,64,255,0.9)]"
                >
                  <Link href={getUrlWithLocale('/generator/totr', locale)}>
                    <Play className="mr-2 h-5 w-5" />
                    {hero.primaryCta}
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="h-14 rounded-full border-white/30 px-8 text-base font-semibold text-white/90 backdrop-blur transition hover:border-white/60 hover:bg-white/10"
                >
                  <Link
                    href={getUrlWithLocale('/download/totr-template', locale)}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    {hero.secondaryCta}
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="grid gap-5 md:grid-cols-2"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.12 },
                },
              }}
            >
              {quickAnswer.cards.map((card, index) => (
                <motion.div
                  key={card.heading}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Card
                    className={cn(
                      'relative h-full overflow-hidden border-white/10 bg-white/5 p-6 text-left shadow-[0_15px_40px_-25px_rgba(109,91,255,0.8)] backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-white/10',
                      `bg-gradient-to-br ${cardGradients[index % cardGradients.length]}`
                    )}
                  >
                    <CardContent className="space-y-4 p-0">
                      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/60">
                        <Zap className="h-3.5 w-3.5 text-primary" />
                        {quickAnswer.title}
                      </div>
                      <h3 className="text-2xl font-semibold text-white">
                        {card.heading}
                      </h3>
                      <p className="text-sm leading-relaxed text-white/70">
                        {card.text}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-2 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            >
              {quickAnswer.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-widest text-white/60 backdrop-blur"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.45 }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_35px_120px_-45px_rgba(113,75,255,0.9)] backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.14),transparent_55%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.18),transparent_60%)]" />
              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex items-center justify-between text-sm text-white/60">
                  <span className="uppercase tracking-[0.3em]">TOTR LIVE</span>
                  <span className="flex items-center gap-2">
                    <span className="flex h-2 w-2 animate-pulse rounded-full bg-primary" />{' '}
                    4.9M posts
                  </span>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/60 p-6 shadow-inner">
                  <div className="flex items-center justify-between text-[0.75rem] uppercase tracking-widest text-white/50">
                    <span>TikTok • Stay Remix</span>
                    <span>Loop · HDR</span>
                  </div>
                  <div className="mt-6 flex items-center justify-between text-white">
                    <div className="space-y-2">
                      <p className="text-sm text-white/60">Authentic Overlay</p>
                      <p className="text-4xl font-semibold">тотя❤️</p>
                    </div>
                    <div className="grid gap-2 text-right text-xs text-white/50">
                      <span>+2.3M views this week</span>
                      <span>Shared every 4.1 seconds</span>
                      <span>90% repost ratio</span>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs text-white/60">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <p className="text-lg font-semibold text-white">62%</p>
                      <p>New Creators</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <p className="text-lg font-semibold text-white">18s</p>
                      <p>Avg Watch</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <p className="text-lg font-semibold text-white">x4</p>
                      <p>Remix Rate</p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 text-xs text-white/60 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-base font-semibold text-white">
                      {quickAnswer.cards[0]?.heading.replace(/[:：]/g, '') ||
                        'TOTR'}
                    </p>
                    <p className="text-xs text-white/60">
                      {quickAnswer.cards[0]?.text}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-base font-semibold text-white uppercase tracking-[0.3em]">
                      TOTR MEME KIT
                    </p>
                    <p className="text-xs text-white/60">
                      Templates · Audio · Caption drops
                    </p>
                  </div>
                </div>

                <Button
                  asChild
                  className="h-12 rounded-full border border-white/20 bg-white/10 text-sm font-semibold text-white shadow-[0_12px_30px_-18px_rgba(255,255,255,0.6)] backdrop-blur transition hover:border-white/40 hover:bg-white/20"
                >
                  <Link href={getUrlWithLocale('/generator/totr', locale)}>
                    Experience the generator →
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
