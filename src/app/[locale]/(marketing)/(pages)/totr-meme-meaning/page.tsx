import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { getUrlWithLocale } from '@/lib/urls/urls';
import {
  ArrowRight,
  Heart,
  MessageCircle,
  Play,
  Share2,
  Sparkles,
  TrendingUp,
  Users,
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
      'TOTR Meme Meaning: Why the SpongeBob Meme Went Viral | Complete Guide 2025',
    description:
      'Discover the deeper meaning behind the TOTR meme phenomenon. Learn why this Russian SpongeBob meme captured millions of hearts and became a cultural sensation.',
    canonicalUrl: getUrlWithLocale('/totr-meme-meaning', locale),
    image: 'og.png',
  });

  return {
    ...metadata,
    keywords: [
      'totr meme meaning',
      'totr spongebob meme',
      'why totr viral',
      'totr meme explained',
      'russian meme culture',
      'viral tiktok meme meaning',
    ],
  };
}

export default async function TotrMemeMeaningPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  await params;

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-blue-50 dark:from-pink-950/20 dark:via-gray-900 dark:to-blue-950/20">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge
              variant="secondary"
              className="text-sm font-semibold bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300"
            >
              <Heart className="w-4 h-4 mr-1" />
              MEME CULTURE
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            TOTR Meme Meaning: The Cultural Phenomenon
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore the deeper meaning behind the TOTR meme that conquered the
            internet. Why did this Russian SpongeBob meme resonate with millions
            worldwide?
          </p>
        </div>

        {/* Core Meaning Section */}
        <Card className="mb-12 border-2 border-pink-200 dark:border-pink-800 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="text-4xl">🧠</div>
              <span>The Deeper TOTR Meme Meaning</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg space-y-4">
              <p className="text-xl font-semibold text-pink-700 dark:text-pink-300">
                The TOTR meme represents more than just viral entertainment -
                it's a cultural bridge connecting universal human emotions
                through playful internet language.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400">
                    Surface Meaning
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Cute SpongeBob characters dancing</li>
                    <li>• Russian word "тотя" (cutie/sweetie)</li>
                    <li>• Catchy music with visual appeal</li>
                    <li>• Simple, shareable format</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-400">
                    Deeper Meaning
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Expression of pure affection and joy</li>
                    <li>• Cultural exchange through memes</li>
                    <li>• Nostalgia meets modern internet culture</li>
                    <li>• Universal language of "cuteness"</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Cultural Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  Why TOTR Meme Became a Cultural Phenomenon
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <h3 className="text-xl font-semibold">
                  The Perfect Storm of Virality
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg">
                    <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">
                      🎯 Universal Appeal Factors
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <strong>Nostalgia:</strong> SpongeBob crosses
                        generational boundaries
                      </li>
                      <li>
                        <strong>Simplicity:</strong> Easy to understand and
                        reproduce
                      </li>
                      <li>
                        <strong>Positivity:</strong> Spreads joy and affection
                      </li>
                      <li>
                        <strong>Accessibility:</strong> No language barrier for
                        emotions
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-pink-50 to-red-50 dark:from-pink-950/20 dark:to-red-950/20 rounded-lg">
                    <h4 className="font-semibold text-pink-600 dark:text-pink-400 mb-3">
                      📱 Technical Success Elements
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <strong>Perfect Length:</strong> Short, loopable content
                      </li>
                      <li>
                        <strong>Audio Hook:</strong> Catchy, recognizable song
                      </li>
                      <li>
                        <strong>Visual Appeal:</strong> Bright, colorful,
                        engaging
                      </li>
                      <li>
                        <strong>Remix-able:</strong> Easy to create variations
                      </li>
                    </ul>
                  </div>
                </div>

                <Separator />

                <h3 className="text-xl font-semibold">
                  The Psychology Behind TOTR's Success
                </h3>
                <div className="bg-yellow-50 dark:bg-yellow-950/20 p-6 rounded-lg">
                  <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-4">
                    Psychological Triggers
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <strong>1. Parasocial Relationships:</strong> People form
                      emotional connections with the SpongeBob characters
                    </div>
                    <div>
                      <strong>2. Dopamine Response:</strong> Cute imagery
                      triggers positive brain chemistry
                    </div>
                    <div>
                      <strong>3. Social Belonging:</strong> Sharing the meme
                      creates in-group identity
                    </div>
                    <div>
                      <strong>4. Emotional Regulation:</strong> Viewing cute
                      content reduces stress and anxiety
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Meme Evolution */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  How TOTR Meme Meaning Evolved
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <h3 className="text-xl font-semibold">
                  From Russian Slang to Global Language
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Original Russian Context
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Started as intimate term of endearment in
                        Russian-speaking communities
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">Meme Transformation</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Visual meme format made it accessible to non-Russian
                        speakers
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">Global Adoption</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        International communities adopted it as universal
                        expression of affection
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold">Cultural Integration</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Now used across different cultures and contexts beyond
                        the original meme
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                <h3 className="text-xl font-semibold">
                  Different Interpretations Across Cultures
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
                    <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">
                      🇷🇺 Russian Culture
                    </h4>
                    <p className="text-sm">
                      Intimate, romantic expression between loved ones
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      🇺🇸 Western Culture
                    </h4>
                    <p className="text-sm">
                      Playful, ironic way to express appreciation
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                    <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">
                      🌏 Asian Culture
                    </h4>
                    <p className="text-sm">
                      Kawaii culture - extreme appreciation for cuteness
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Impact */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  TOTR Meme's Social and Cultural Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <h3 className="text-xl font-semibold">
                  Breaking Down Barriers
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-green-600 dark:text-green-400">
                      Positive Social Effects
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        • <strong>Cultural Exchange:</strong> Russian language
                        exposure to global audience
                      </li>
                      <li>
                        • <strong>Language Learning:</strong> Increased interest
                        in Russian language
                      </li>
                      <li>
                        • <strong>Community Building:</strong> Shared cultural
                        experiences online
                      </li>
                      <li>
                        • <strong>Stress Relief:</strong> Positive content
                        during difficult times
                      </li>
                      <li>
                        • <strong>Creative Expression:</strong> Inspired
                        countless user-generated content
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-orange-600 dark:text-orange-400">
                      Cultural Phenomena
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        • <strong>Meme Democracy:</strong> Russian culture
                        influencing global trends
                      </li>
                      <li>
                        • <strong>Nostalgia Marketing:</strong> Brands adopting
                        TOTR aesthetics
                      </li>
                      <li>
                        • <strong>Platform Evolution:</strong> TikTok's role in
                        cross-cultural spread
                      </li>
                      <li>
                        • <strong>Generational Bridge:</strong> Kids and adults
                        enjoying same content
                      </li>
                      <li>
                        • <strong>Digital Folklore:</strong> Modern myth-making
                        through memes
                      </li>
                    </ul>
                  </div>
                </div>

                <Separator />

                <h3 className="text-xl font-semibold">
                  The TOTR Effect on Internet Culture
                </h3>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">
                    Long-term Cultural Impact
                  </h4>
                  <div className="space-y-3 text-sm">
                    <p>
                      <strong>Normalization of Foreign Languages:</strong> TOTR
                      helped normalize using non-English terms in global
                      internet culture, paving the way for more linguistic
                      diversity online.
                    </p>
                    <p>
                      <strong>Emotional Authenticity:</strong> The genuine
                      affection behind TOTR encouraged more authentic emotional
                      expression in meme culture, moving beyond pure humor.
                    </p>
                    <p>
                      <strong>Cross-Platform Unity:</strong> TOTR became one of
                      the first memes to truly unite all major social platforms
                      with consistent messaging and format.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Understanding */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  TOTR Meme at a Glance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong>Core Emotion:</strong> Affection & Joy
                  </div>
                  <div>
                    <strong>Cultural Bridge:</strong> Russian → Global
                  </div>
                  <div>
                    <strong>Primary Appeal:</strong> Universal cuteness
                  </div>
                  <div>
                    <strong>Psychological Effect:</strong> Positive mood boost
                  </div>
                  <div>
                    <strong>Social Function:</strong> Expression of care
                  </div>
                  <div>
                    <strong>Viral Factor:</strong> Easy to share & modify
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Pages */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5" />
                  Understand TOTR Better
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <LocaleLink
                    href="/what-is-totr"
                    className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors"
                  >
                    <div className="font-semibold text-blue-600 dark:text-blue-400">
                      What is TOTR?
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Complete beginner's guide
                    </div>
                  </LocaleLink>

                  <LocaleLink
                    href="/totr-meaning"
                    className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors"
                  >
                    <div className="font-semibold text-purple-600 dark:text-purple-400">
                      TOTR Meaning
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Linguistic breakdown
                    </div>
                  </LocaleLink>

                  <LocaleLink
                    href="/totr-russian-meaning"
                    className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors"
                  >
                    <div className="font-semibold text-red-600 dark:text-red-400">
                      Russian Context
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Cultural origins
                    </div>
                  </LocaleLink>
                </div>
              </CardContent>
            </Card>

            {/* Engagement Stats */}
            <Card>
              <CardHeader>
                <CardTitle>TOTR Meme Impact Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span>Global Views</span>
                    <span className="font-semibold">12M+</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>User Recreations</span>
                    <span className="font-semibold">50K+</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Languages Adopted</span>
                    <span className="font-semibold">20+</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Countries Reached</span>
                    <span className="font-semibold">150+</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Avg. Engagement Rate</span>
                    <span className="font-semibold">8.5%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action CTAs */}
            <Card className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-12 h-12 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">
                  Join the TOTR Community
                </h3>
                <p className="mb-4 text-pink-100">
                  Connect with millions of TOTR fans worldwide
                </p>
                <LocaleLink
                  href="/#viral-videos"
                  className="inline-flex items-center gap-2 bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Users className="w-4 h-4" />
                  Watch & Share
                </LocaleLink>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-500 to-green-500 text-white">
              <CardContent className="p-6 text-center">
                <Play className="w-12 h-12 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">Create Your TOTR</h3>
                <p className="mb-4 text-blue-100">
                  Express your own affection through TOTR
                </p>
                <LocaleLink
                  href="/generator/totr"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  Start Creating
                </LocaleLink>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Expert Analysis */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-2xl">
              Expert Analysis: Why TOTR Meme Meaning Matters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">
                  Digital Anthropology Perspective
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  TOTR represents a fascinating case study in how emotions
                  transcend linguistic and cultural boundaries in the digital
                  age. The meme's success demonstrates that genuine affection
                  and cuteness operate as universal human languages, capable of
                  creating shared meaning across vastly different cultural
                  contexts.
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">
                  Communication Studies Insight
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  The TOTR phenomenon illustrates how modern internet culture
                  facilitates rapid adoption of foreign linguistic elements when
                  they're packaged in visually appealing, emotionally resonant
                  formats. This represents a new form of grassroots cultural
                  diplomacy through meme propagation.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-2xl">
              FAQ: Understanding TOTR Meme Meaning
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Q: What makes TOTR meme different from other viral memes?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A: Unlike memes focused on humor or shock value, TOTR centers
                  on genuine affection and positive emotions. It bridges
                  linguistic barriers through visual storytelling and universal
                  emotional appeal.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Q: Why do people find TOTR meme so emotionally satisfying?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A: TOTR triggers multiple positive psychological responses:
                  nostalgia (SpongeBob), cuteness overload (visual design), and
                  social connection (shared cultural experience). It provides a
                  dopamine boost through wholesome content.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Q: How has TOTR meme influenced internet culture?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A: TOTR helped normalize non-English expressions in global
                  internet culture and encouraged more authentic emotional
                  expression in memes. It demonstrates how positive content can
                  achieve viral success.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Q: Is TOTR meme meaning the same across all cultures?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A: While the core meaning of affection remains consistent,
                  different cultures interpret and use TOTR based on their own
                  contexts - romantic in Russia, playful in the West, and
                  kawaii-aligned in Asia.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation to Related Content */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-6">Explore More TOTR Content</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <LocaleLink
              href="/what-is-totr"
              className="group p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors"
            >
              <div className="font-semibold text-blue-600 dark:text-blue-400 group-hover:underline">
                What is TOTR?
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Basic introduction
              </div>
            </LocaleLink>

            <LocaleLink
              href="/totr-meaning"
              className="group p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors"
            >
              <div className="font-semibold text-purple-600 dark:text-purple-400 group-hover:underline">
                TOTR Meaning
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Detailed definition
              </div>
            </LocaleLink>

            <LocaleLink
              href="/generator/totr"
              className="group p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg hover:bg-pink-100 dark:hover:bg-pink-950/30 transition-colors"
            >
              <div className="font-semibold text-pink-600 dark:text-pink-400 group-hover:underline">
                Create TOTR Meme
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Make your own
              </div>
            </LocaleLink>

            <LocaleLink
              href="/totr-text"
              className="group p-4 bg-green-50 dark:bg-green-950/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors"
            >
              <div className="font-semibold text-green-600 dark:text-green-400 group-hover:underline">
                TOTR Text
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Copy symbols
              </div>
            </LocaleLink>
          </div>
        </div>
      </div>
    </div>
  );
}
