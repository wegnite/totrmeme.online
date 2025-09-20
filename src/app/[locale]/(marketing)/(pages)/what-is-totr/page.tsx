import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { getUrlWithLocale } from '@/lib/urls/urls';
import {
  ArrowRight,
  Calendar,
  Globe,
  Heart,
  Play,
  Sparkles,
  TrendingUp,
  Users,
  Video,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const metadata = constructMetadata({
    title:
      'What is TOTR? Complete Guide to the Viral Russian SpongeBob Meme 2025',
    description:
      'What is TOTR? Learn everything about the viral Russian SpongeBob meme taking over TikTok. Discover its meaning, origins, and cultural impact in 2025.',
    canonicalUrl: getUrlWithLocale('/what-is-totr', locale),
    image: 'images/totr-meaning-og.jpg',
  });

  return {
    ...metadata,
    keywords: [
      'what is totr',
      'totr meme',
      'totr spongebob',
      'what does totr mean',
      'russian meme',
      'тотя',
      'viral tiktok meme 2025',
    ],
  };
}

export default async function WhatIsTotrPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'What is TOTR? Complete Guide to the Viral Russian SpongeBob Meme 2025',
    description:
      'Complete guide explaining what TOTR is, its meaning, origins, and cultural impact as a viral Russian SpongeBob meme.',
    author: {
      '@type': 'Organization',
      name: 'TOTR Meme',
    },
    datePublished: '2025-09-19',
    dateModified: '2025-09-19',
    inLanguage: locale,
  } as const;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-blue-50 dark:from-purple-950/20 dark:via-gray-900 dark:to-blue-950/20">
      <div className="container mx-auto px-4 py-12">
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge
              variant="secondary"
              className="text-sm font-semibold bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
            >
              <Sparkles className="w-4 h-4 mr-1" />
              TRENDING NOW
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            What is TOTR?
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            The complete guide to understanding TOTR - the viral Russian
            SpongeBob meme that's taking over the internet in 2025
          </p>
        </div>

        {/* Featured Answer Box */}
        <Card className="mb-12 border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="text-4xl">🧽</div>
              <span>What is TOTR? - Simple Answer</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg space-y-4">
              <p className="text-xl font-semibold text-purple-700 dark:text-purple-300">
                <strong>TOTR</strong> is a viral Russian internet meme featuring
                two naked SpongeBob characters chanting "тотя❤️" (meaning "cutie"
                or "sweetie") to a remix of "Stay" by Kid LAROI & Justin Bieber.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="text-3xl mb-2">🇷🇺</div>
                  <div className="font-semibold">Russian Origin</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    тотя = "cutie"
                  </div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="text-3xl mb-2">🧽</div>
                  <div className="font-semibold">SpongeBob Meme</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Two characters dancing
                  </div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="text-3xl mb-2">📱</div>
                  <div className="font-semibold">Viral on TikTok</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Millions of views
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Origins Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Calendar className="w-6 h-6 text-blue-500" />
                  TOTR Origins & Timeline
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">
                    The Birth of TOTR Meme
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <div>
                        <div className="font-semibold">September 1, 2025</div>
                        <div className="text-gray-600 dark:text-gray-300">
                          User @ddghfjwiedi3929 posts the first viral TOTR video
                          on TikTok
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <div>
                        <div className="font-semibold">September 2-7, 2025</div>
                        <div className="text-gray-600 dark:text-gray-300">
                          Meme spreads rapidly across TikTok with thousands of
                          recreations
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      <div>
                        <div className="font-semibold">
                          September 8-15, 2025
                        </div>
                        <div className="text-gray-600 dark:text-gray-300">
                          Expands to Instagram, YouTube, and Twitter with
                          millions of views
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                        4
                      </div>
                      <div>
                        <div className="font-semibold">
                          September 16-19, 2025
                        </div>
                        <div className="text-gray-600 dark:text-gray-300">
                          TOTR becomes a global phenomenon with international
                          variations
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <h3 className="text-xl font-semibold">
                  What Makes TOTR Special?
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-purple-600 dark:text-purple-400">
                      Visual Elements
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Two naked SpongeBob characters</li>
                      <li>• Purple/ocean aesthetic background</li>
                      <li>• "тотя❤️" text overlay in stylized font</li>
                      <li>• Smooth character animations</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-pink-600 dark:text-pink-400">
                      Audio Elements
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>• "Stay" by Kid LAROI & Justin Bieber remix</li>
                      <li>• Bass-boosted version</li>
                      <li>• Perfect sync with character movement</li>
                      <li>• Catchy, memorable beat drop</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cultural Impact */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Globe className="w-6 h-6 text-green-500" />
                  Cultural Impact & Significance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <h3 className="text-xl font-semibold">Why TOTR Went Viral</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 rounded-lg">
                    <div className="text-2xl mb-2">💝</div>
                    <h4 className="font-semibold">Universal Appeal</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      The concept of "cutie" transcends language barriers
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg">
                    <div className="text-2xl mb-2">🎵</div>
                    <h4 className="font-semibold">Perfect Audio</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Catchy remix of a popular song
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-lg">
                    <div className="text-2xl mb-2">📱</div>
                    <h4 className="font-semibold">Perfect Format</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Short, loopable, and shareable
                    </p>
                  </div>
                </div>

                <Separator />

                <h3 className="text-xl font-semibold">TOTR's Global Reach</h3>
                <div className="space-y-4">
                  <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">
                      Platform Statistics
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <div className="font-semibold">TikTok</div>
                        <div>8.4M+ views</div>
                      </div>
                      <div>
                        <div className="font-semibold">YouTube</div>
                        <div>2.1M+ views</div>
                      </div>
                      <div>
                        <div className="font-semibold">Instagram</div>
                        <div>1.2M+ views</div>
                      </div>
                      <div>
                        <div className="font-semibold">Twitter</div>
                        <div>500K+ views</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">
                      Regional Popularity
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>Russia & Eastern Europe:</strong> Original
                        audience, highest engagement
                      </div>
                      <div>
                        <strong>United States:</strong> Massive viral spread,
                        1M+ daily searches
                      </div>
                      <div>
                        <strong>Asia:</strong> Strong adoption in gaming
                        communities
                      </div>
                      <div>
                        <strong>Global:</strong> Translated into 20+ languages
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How to Use TOTR */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Users className="w-6 h-6 text-orange-500" />
                  How to Use TOTR
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <h3 className="text-xl font-semibold">
                  Different Ways to Use TOTR
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg">
                      <h4 className="font-semibold text-pink-600 dark:text-pink-400 mb-2">
                        In Relationships
                      </h4>
                      <p className="text-sm">
                        Call your partner "totr" as a cute nickname
                      </p>
                      <div className="text-xs text-gray-500 mt-1">
                        Example: "Good morning, totr ❤️"
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                        With Friends
                      </h4>
                      <p className="text-sm">
                        Use ironically or playfully in group chats
                      </p>
                      <div className="text-xs text-gray-500 mt-1">
                        Example: "You're such a totr for helping me"
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">
                        In Gaming
                      </h4>
                      <p className="text-sm">
                        Express affection or appreciation to teammates
                      </p>
                      <div className="text-xs text-gray-500 mt-1">
                        Example: "Nice play, totr!"
                      </div>
                    </div>

                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">
                        On Social Media
                      </h4>
                      <p className="text-sm">
                        Comment on cute posts or use in captions
                      </p>
                      <div className="text-xs text-gray-500 mt-1">
                        Example: "This puppy is such a totr"
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Navigation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5" />
                  Learn More About TOTR
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <LocaleLink
                    href="/totr-meaning"
                    className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors"
                  >
                    <div className="font-semibold text-purple-600 dark:text-purple-400">
                      TOTR Meaning
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Detailed meaning explanation
                    </div>
                  </LocaleLink>

                  <LocaleLink
                    href="/totr-meme-meaning"
                    className="block p-3 bg-pink-50 dark:bg-pink-950/20 rounded-lg hover:bg-pink-100 dark:hover:bg-pink-950/30 transition-colors"
                  >
                    <div className="font-semibold text-pink-600 dark:text-pink-400">
                      TOTR Meme Meaning
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Meme culture context
                    </div>
                  </LocaleLink>

                  <LocaleLink
                    href="/totr-russian-meaning"
                    className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors"
                  >
                    <div className="font-semibold text-blue-600 dark:text-blue-400">
                      Russian Context
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Cultural background
                    </div>
                  </LocaleLink>

                  <LocaleLink
                    href="/totr-text"
                    className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors"
                  >
                    <div className="font-semibold text-green-600 dark:text-green-400">
                      Copy TOTR Text
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Get TOTR symbols
                    </div>
                  </LocaleLink>
                </div>
              </CardContent>
            </Card>

            {/* Key Facts */}
            <Card>
              <CardHeader>
                <CardTitle>TOTR Quick Facts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong>Created:</strong> September 1, 2025
                  </div>
                  <div>
                    <strong>Platform:</strong> TikTok (original)
                  </div>
                  <div>
                    <strong>Creator:</strong> @ddghfjwiedi3929
                  </div>
                  <div>
                    <strong>Characters:</strong> SpongeBob × 2
                  </div>
                  <div>
                    <strong>Music:</strong> "Stay" remix
                  </div>
                  <div>
                    <strong>Language:</strong> Russian (тотя)
                  </div>
                  <div>
                    <strong>Meaning:</strong> Cutie, sweetie
                  </div>
                  <div>
                    <strong>Status:</strong> Viral worldwide
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Watch Videos */}
            <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <CardContent className="p-6 text-center">
                <Video className="w-12 h-12 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">Watch TOTR Videos</h3>
                <p className="mb-4 text-purple-100">
                  See the viral videos that started it all
                </p>
                <LocaleLink
                  href="/#viral-videos"
                  className="inline-flex items-center gap-2 bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Play className="w-4 h-4" />
                  Watch Now
                </LocaleLink>
              </CardContent>
            </Card>

            {/* Create Your Own */}
            <Card className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              <CardContent className="p-6 text-center">
                <Sparkles className="w-12 h-12 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">
                  Create Your TOTR Meme
                </h3>
                <p className="mb-4 text-blue-100">
                  Make your own viral TOTR content
                </p>
                <LocaleLink
                  href="/generator/totr"
                  className="inline-flex items-center gap-2 bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Heart className="w-4 h-4" />
                  Start Creating
                </LocaleLink>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Comprehensive FAQ */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-2xl">
              Frequently Asked Questions: What is TOTR?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Q: What does TOTR stand for?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A: TOTR doesn't technically "stand for" anything - it's a
                  transliteration of the Russian word "тотя" which means "cutie"
                  or "sweetie." It became popular through viral SpongeBob memes.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Q: Is TOTR appropriate for all ages?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A: Yes! TOTR is a wholesome term meaning "cutie." The memes
                  are family-friendly, though some versions may contain cartoon
                  nudity (SpongeBob characters without pants).
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Q: How do you pronounce TOTR?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A: TOTR is pronounced "TOH-tya" or "TOE-tya." It comes from
                  the Russian "тотя" which has a soft 't' sound followed by
                  'ya'.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Q: Why is TOTR associated with SpongeBob?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A: The original viral video used SpongeBob characters because
                  they're universally recognizable and the innocent, childlike
                  nature fits with the "cutie" meaning of TOTR.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Q: Can I use TOTR in other languages?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A: Absolutely! While TOTR originates from Russian, it's become
                  a global internet term. Many people use it regardless of their
                  native language as a cute, endearing expression.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Content Navigation */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-8">
            Explore the TOTR Universe
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <LocaleLink
              href="/totr-meaning"
              className="group p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg hover:shadow-lg transition-all"
            >
              <div className="text-3xl mb-3">💜</div>
              <div className="font-semibold text-purple-600 dark:text-purple-400 group-hover:underline">
                TOTR Meaning
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Deep dive into the meaning
              </div>
            </LocaleLink>

            <LocaleLink
              href="/generator/totr"
              className="group p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg hover:shadow-lg transition-all"
            >
              <div className="text-3xl mb-3">🎨</div>
              <div className="font-semibold text-blue-600 dark:text-blue-400 group-hover:underline">
                TOTR Generator
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Create your own meme
              </div>
            </LocaleLink>

            <LocaleLink
              href="/"
              className="group p-6 bg-gradient-to-br from-pink-50 to-red-50 dark:from-pink-950/20 dark:to-red-950/20 rounded-lg hover:shadow-lg transition-all"
            >
              <div className="text-3xl mb-3">📱</div>
              <div className="font-semibold text-pink-600 dark:text-pink-400 group-hover:underline">
                Viral Videos
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Watch original content
              </div>
            </LocaleLink>

            <LocaleLink
              href="/totr-text"
              className="group p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-lg hover:shadow-lg transition-all"
            >
              <div className="text-3xl mb-3">📝</div>
              <div className="font-semibold text-green-600 dark:text-green-400 group-hover:underline">
                TOTR Text
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Copy paste symbols
              </div>
            </LocaleLink>
          </div>
        </div>
      </div>
    </div>
  );
}
