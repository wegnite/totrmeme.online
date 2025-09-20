import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { getUrlWithLocale } from '@/lib/urls/urls';
import {
  ArrowRight,
  Book,
  Globe,
  Heart,
  Languages,
  MapPin,
  Play,
  Volume2,
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
      'TOTR Russian Meaning: тотя - Complete Guide to Russian Origins | 2025',
    description:
      'Discover the authentic Russian meaning of TOTR (тотя). Learn proper pronunciation, cultural context, and how this Russian term of endearment became a global phenomenon.',
    canonicalUrl: getUrlWithLocale('/totr-russian-meaning', locale),
    image: 'og.png',
  });

  return {
    ...metadata,
    keywords: [
      'totr russian meaning',
      'тотя meaning',
      'russian totr',
      'totr in russian',
      'russian cutie',
      'тотя pronunciation',
      'russian endearment terms',
    ],
  };
}

export default async function TotrRussianMeaningPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  await params;
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-blue-50 dark:from-red-950/20 dark:via-gray-900 dark:to-blue-950/20">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge
              variant="secondary"
              className="text-sm font-semibold bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
            >
              <MapPin className="w-4 h-4 mr-1" />
              RUSSIAN ORIGINS
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 via-blue-600 to-white bg-clip-text text-transparent">
            TOTR Russian Meaning: тотя
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore the authentic Russian origins of TOTR (тотя). Understand the
            cultural context, proper pronunciation, and significance of this
            beloved Russian term of endearment.
          </p>
        </div>

        {/* Russian Flag Colors Design */}
        <div className="flex justify-center mb-8">
          <div className="flex rounded-lg overflow-hidden shadow-lg">
            <div className="w-24 h-4 bg-white" />
            <div className="w-24 h-4 bg-blue-500" />
            <div className="w-24 h-4 bg-red-500" />
          </div>
        </div>

        {/* Core Russian Meaning */}
        <Card className="mb-12 border-2 border-red-200 dark:border-red-800 bg-gradient-to-r from-red-50 to-blue-50 dark:from-red-950/20 dark:to-blue-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="text-4xl">🇷🇺</div>
              <span>Authentic Russian Meaning of тотя</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg space-y-4">
              <p className="text-xl font-semibold text-red-700 dark:text-red-300">
                <strong>тотя</strong> (totya/totr) is a Russian diminutive term
                of endearment meaning "cutie," "sweetie," or "little one." It's
                an intimate expression of affection used primarily in close
                relationships.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="text-3xl mb-2">📝</div>
                  <div className="font-semibold">Cyrillic: тотя</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Original Russian spelling
                  </div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="text-3xl mb-2">🔤</div>
                  <div className="font-semibold">Latin: totr/totya</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Transliteration
                  </div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="text-3xl mb-2">💝</div>
                  <div className="font-semibold">Meaning: cutie</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    English equivalent
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Linguistic Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Languages className="w-6 h-6 text-blue-500" />
                  Linguistic Analysis of тотя
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <h3 className="text-xl font-semibold">
                  Etymology and Word Formation
                </h3>

                <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-4">
                    Russian Grammatical Context
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <strong>Word Type:</strong> Diminutive noun
                      (уменьшительно-ласкательное)
                    </div>
                    <div>
                      <strong>Gender:</strong> Feminine (ж.р.)
                    </div>
                    <div>
                      <strong>Usage:</strong> Informal, intimate
                    </div>
                    <div>
                      <strong>Register:</strong> Colloquial/slang
                    </div>
                    <div>
                      <strong>Origin:</strong> Modern internet Russian (2020s)
                    </div>
                  </div>
                </div>

                <Separator />

                <h3 className="text-xl font-semibold">Pronunciation Guide</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                    <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3 flex items-center gap-2">
                      <Volume2 className="w-4 h-4" />
                      Phonetic Breakdown
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>IPA:</strong> [ˈtoʊtjə]
                      </div>
                      <div>
                        <strong>Stress:</strong> First syllable (ТО́тя)
                      </div>
                      <div>
                        <strong>т:</strong> Hard 't' sound
                      </div>
                      <div>
                        <strong>о:</strong> Open 'o' sound
                      </div>
                      <div>
                        <strong>т:</strong> Soft 't' before 'я'
                      </div>
                      <div>
                        <strong>я:</strong> 'ya' sound
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">
                      English Approximation
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>Sounds like:</strong> "TOH-tya"
                      </div>
                      <div>
                        <strong>Similar to:</strong> "toe" + "tya"
                      </div>
                      <div>
                        <strong>Rhythm:</strong> Two syllables, first stressed
                      </div>
                      <div>
                        <strong>Common mistakes:</strong> "tot-ya" (flat
                        pronunciation)
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <h3 className="text-xl font-semibold">Related Russian Terms</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">
                          Russian Term
                        </th>
                        <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">
                          Transliteration
                        </th>
                        <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">
                          Meaning
                        </th>
                        <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">
                          Usage
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">
                          тотя
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">
                          totya/totr
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">
                          cutie, sweetie
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">
                          Internet slang, memes
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">
                          малыш
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">
                          malysh
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">
                          baby, little one
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">
                          Common romantic term
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">
                          котик
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">
                          kotik
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">
                          kitten (affectionate)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">
                          Very popular endearment
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">
                          солнышко
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">
                          solnyshko
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">
                          little sun
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">
                          Formal, traditional
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Cultural Context */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Globe className="w-6 h-6 text-red-500" />
                  Cultural Context in Russian Society
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <h3 className="text-xl font-semibold">
                  Usage in Russian Culture
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-red-600 dark:text-red-400">
                      Traditional Context
                    </h4>
                    <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
                      <ul className="space-y-2 text-sm">
                        <li>
                          • <strong>Intimate relationships:</strong> Between
                          romantic partners
                        </li>
                        <li>
                          • <strong>Family settings:</strong> Parents to
                          children
                        </li>
                        <li>
                          • <strong>Close friendships:</strong> Among very close
                          friends
                        </li>
                        <li>
                          • <strong>Generational use:</strong> Popular among
                          younger Russians
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-blue-600 dark:text-blue-400">
                      Modern Internet Usage
                    </h4>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <ul className="space-y-2 text-sm">
                        <li>
                          • <strong>Social media:</strong> Comments and posts
                        </li>
                        <li>
                          • <strong>Gaming communities:</strong>{' '}
                          Russian-speaking gamers
                        </li>
                        <li>
                          • <strong>Meme culture:</strong> Viral content and
                          jokes
                        </li>
                        <li>
                          • <strong>VKontakte/Telegram:</strong> Popular on
                          Russian platforms
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Separator />

                <h3 className="text-xl font-semibold">
                  Regional Variations and Dialects
                </h3>
                <div className="space-y-4">
                  <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">
                      Geographic Usage
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <strong>Moscow Region:</strong> Very popular among young
                        people
                      </div>
                      <div>
                        <strong>St. Petersburg:</strong> Used in
                        artistic/creative communities
                      </div>
                      <div>
                        <strong>Siberia:</strong> Less common, more traditional
                        terms preferred
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">
                      Age Demographics
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>Gen Z (16-25):</strong> Primary users,
                        especially in memes
                      </div>
                      <div>
                        <strong>Millennials (26-40):</strong> Occasional use,
                        mostly online
                      </div>
                      <div>
                        <strong>Gen X+ (40+):</strong> Rare usage, prefer
                        traditional terms
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <h3 className="text-xl font-semibold">
                  Comparison with Traditional Russian Endearments
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 rounded-lg">
                    <h4 className="font-semibold text-red-600 dark:text-red-400 mb-3">
                      Modern Terms (Like тотя)
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Internet-born</li>
                      <li>• Casual, playful</li>
                      <li>• Used by younger generations</li>
                      <li>• Often accompanied by emojis</li>
                      <li>• Spread through memes</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg">
                    <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">
                      Traditional Terms
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Historically established</li>
                      <li>• More formal register</li>
                      <li>• Cross-generational use</li>
                      <li>• Literary origins</li>
                      <li>• Stable meanings</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Russian Internet Culture */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  тотя in Russian Internet Culture
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <h3 className="text-xl font-semibold">
                  Evolution in Russian Digital Spaces
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Early Internet Era (2010s)
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        тотя appeared in Russian forums and chat rooms as
                        informal endearment
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Social Media Adoption (2018-2020)
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Gained popularity on VKontakte and Russian Telegram
                        channels
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Meme Culture Integration (2021-2024)
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Became part of Russian meme vocabulary, often paired
                        with cute imagery
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Global Viral Moment (2025)
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        SpongeBob meme brought тотя to international attention
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                <h3 className="text-xl font-semibold">
                  Russian vs International Usage
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
                    <h4 className="font-semibold text-red-600 dark:text-red-400 mb-3">
                      🇷🇺 In Russia
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Natural part of vocabulary</li>
                      <li>• Used with full cultural context</li>
                      <li>• Proper grammatical declension</li>
                      <li>• Intimate, personal meaning</li>
                      <li>• Part of broader Russian endearment system</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">
                      🌍 Internationally
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Borrowed term via memes</li>
                      <li>• Surface-level understanding</li>
                      <li>• Fixed form (no declension)</li>
                      <li>• Playful, ironic usage</li>
                      <li>• Standalone internet expression</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Russian Facts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="w-5 h-5" />
                  Quick Russian Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong>Script:</strong> Cyrillic (тотя)
                  </div>
                  <div>
                    <strong>Pronunciation:</strong> TOH-tya
                  </div>
                  <div>
                    <strong>Gender:</strong> Feminine noun
                  </div>
                  <div>
                    <strong>Formality:</strong> Very informal
                  </div>
                  <div>
                    <strong>Age group:</strong> Gen Z primarily
                  </div>
                  <div>
                    <strong>Region:</strong> Urban areas
                  </div>
                  <div>
                    <strong>Platform:</strong> Internet/social media
                  </div>
                  <div>
                    <strong>Emotion:</strong> Affection, cuteness
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Russian Terms */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Russian Endearments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded-lg">
                    <div className="font-semibold text-red-600 dark:text-red-400">
                      котик (kotik)
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      kitten - very popular
                    </div>
                  </div>

                  <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <div className="font-semibold text-blue-600 dark:text-blue-400">
                      зайка (zayka)
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      bunny - classic term
                    </div>
                  </div>

                  <div className="p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                    <div className="font-semibold text-purple-600 dark:text-purple-400">
                      малыш (malysh)
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      baby - traditional
                    </div>
                  </div>

                  <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <div className="font-semibold text-green-600 dark:text-green-400">
                      солнышко (solnyshko)
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      little sun - formal
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Learn More */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5" />
                  Explore TOTR Further
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
                      Basic introduction
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
                      General meaning
                    </div>
                  </LocaleLink>

                  <LocaleLink
                    href="/totr-meme-meaning"
                    className="block p-3 bg-pink-50 dark:bg-pink-950/20 rounded-lg hover:bg-pink-100 dark:hover:bg-pink-950/30 transition-colors"
                  >
                    <div className="font-semibold text-pink-600 dark:text-pink-400">
                      Meme Culture
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Viral phenomenon
                    </div>
                  </LocaleLink>
                </div>
              </CardContent>
            </Card>

            {/* Russian Learning CTA */}
            <Card className="bg-gradient-to-r from-red-500 via-blue-500 to-white text-white">
              <CardContent className="p-6 text-center">
                <Globe className="w-12 h-12 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">Learn Russian</h3>
                <p className="mb-4 text-red-100">
                  Discover more beautiful Russian expressions
                </p>
                <LocaleLink
                  href="/totr-text"
                  className="inline-flex items-center gap-2 bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Languages className="w-4 h-4" />
                  Get Russian Text
                </LocaleLink>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-2xl">
              FAQ: TOTR Russian Meaning
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Q: How do Russians actually use тотя?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A: Russians use тотя primarily in intimate relationships and
                  close friendships. It's very informal and is most popular
                  among younger internet users. In romantic contexts, it
                  expresses deep affection.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Q: Is тотя a new word in Russian?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A: Yes, тотя is relatively new, emerging from Russian internet
                  culture in the 2010s. It's not found in traditional
                  dictionaries and represents modern Russian slang evolution.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Q: Can non-Russians use тотя appropriately?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A: While non-Russians can use тотя, it's important to
                  understand it's an intimate term. Using it casually might seem
                  odd to Russian speakers. It's best used in contexts where
                  you'd use similar affectionate terms in your own language.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Q: How is тотя different from other Russian pet names?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A: тотя is more modern and internet-focused compared to
                  traditional terms like котик (kitten) or зайка (bunny). It
                  represents the new generation of Russian endearments born from
                  digital culture.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Content Navigation */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-6">
            Continue Learning About TOTR
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <LocaleLink
              href="/what-is-totr"
              className="group p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors"
            >
              <div className="font-semibold text-blue-600 dark:text-blue-400 group-hover:underline">
                What is TOTR?
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Complete guide
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
                General definition
              </div>
            </LocaleLink>

            <LocaleLink
              href="/generator/totr"
              className="group p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg hover:bg-pink-100 dark:hover:bg-pink-950/30 transition-colors"
            >
              <div className="font-semibold text-pink-600 dark:text-pink-400 group-hover:underline">
                TOTR Generator
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Create memes
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
                Copy Cyrillic text
              </div>
            </LocaleLink>
          </div>
        </div>
      </div>
    </div>
  );
}
