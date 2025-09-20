import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { getUrlWithLocale } from '@/lib/urls/urls';
import { ArrowRight, Heart, Play, TrendingUp, Users } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  const metadata = constructMetadata({
    title: 'TOTR Meaning: What Does TOTR Mean? Complete Guide 2025',
    description:
      'Discover the complete meaning of TOTR (тотя). Learn about this viral Russian meme featuring SpongeBob, its origins, cultural significance, and how to use it.',
    canonicalUrl: getUrlWithLocale('/totr-meaning', locale),
    image: 'og.png',
  });

  return {
    ...metadata,
    keywords: [
      'totr meaning',
      'what does totr mean',
      'totr definition',
      'тотя meaning',
      'totr meme meaning',
      'russian totr',
      'totr translation',
    ],
  };
}

export default async function TotrMeaningPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  await params;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50 dark:from-blue-950/20 dark:via-gray-900 dark:to-purple-950/20">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge variant="secondary" className="text-sm font-semibold">
              <TrendingUp className="w-4 h-4 mr-1" />
              VIRAL MEANING
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            TOTR Meaning: What Does TOTR Actually Mean?
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the complete meaning behind TOTR (тотя), the viral Russian
            internet meme that took TikTok and social media by storm in 2025.
          </p>
        </div>

        {/* Quick Answer Box */}
        <Card className="mb-12 border-2 border-pink-200 dark:border-pink-800 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-pink-500" />
              Quick Answer: TOTR Meaning
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg space-y-3">
              <p>
                <strong>TOTR (тотя)</strong> is a Russian slang term that
                roughly translates to <strong>"cutie"</strong> or{' '}
                <strong>"sweetie"</strong> in English.
              </p>
              <p>
                It became a viral internet meme in 2025 featuring two naked
                SpongeBob characters chanting "тотя❤️" (TOTR with a heart) to the
                remix of "Stay" by Kid LAROI & Justin Bieber.
              </p>
              <p className="text-pink-600 dark:text-pink-400 font-semibold">
                The meme represents affection, cuteness, and playful endearment
                in Russian internet culture.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Etymology Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  Etymology and Origins
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-xl font-semibold">
                  What Does TOTR Mean in Russian?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>TOTR (тотя)</strong> originates from Russian internet
                  slang. The Cyrillic "тотя" is transliterated as "totya" or
                  "totr" in Latin characters. It's an affectionate diminutive
                  term similar to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                  <li>
                    <strong>English:</strong> "cutie," "sweetie," "baby"
                  </li>
                  <li>
                    <strong>Context:</strong> Used to express endearment
                  </li>
                  <li>
                    <strong>Tone:</strong> Playful and affectionate
                  </li>
                  <li>
                    <strong>Usage:</strong> Often directed at someone you find
                    adorable
                  </li>
                </ul>

                <Separator className="my-6" />

                <h3 className="text-xl font-semibold">
                  The Viral Meme Evolution
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  The TOTR meaning expanded beyond its original Russian
                  definition when it became part of a viral TikTok meme in
                  September 2025:
                </p>
                <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                  <ul className="space-y-2">
                    <li>
                      📅 <strong>September 1, 2025:</strong> First viral video
                      by @ddghfjwiedi3929
                    </li>
                    <li>
                      🧽 <strong>Characters:</strong> Two naked SpongeBob
                      figures
                    </li>
                    <li>
                      🎵 <strong>Audio:</strong> "Stay" remix by Kid LAROI &
                      Justin Bieber
                    </li>
                    <li>
                      💜 <strong>Aesthetic:</strong> Purple/ocean themed
                      background
                    </li>
                    <li>
                      📱 <strong>Platform:</strong> Exploded on TikTok, then
                      spread to other platforms
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Cultural Context */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  Cultural Context and Usage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-xl font-semibold">How TOTR is Used</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-pink-50 dark:bg-pink-950/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-pink-600 dark:text-pink-400 mb-2">
                      Romantic Context
                    </h4>
                    <p className="text-sm">
                      Used between couples or when expressing romantic interest,
                      similar to calling someone "babe" or "honey"
                    </p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">
                      Friendship Context
                    </h4>
                    <p className="text-sm">
                      Used among friends to show affection, similar to "sweetie"
                      or "cutie pie"
                    </p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      Meme Context
                    </h4>
                    <p className="text-sm">
                      Used ironically or playfully in internet culture, often
                      with the heart emoji ❤️
                    </p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">
                      Gaming Context
                    </h4>
                    <p className="text-sm">
                      Used in gaming communities and Discord servers as a term
                      of endearment
                    </p>
                  </div>
                </div>

                <Separator className="my-6" />

                <h3 className="text-xl font-semibold">TOTR vs Similar Terms</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">
                          Term
                        </th>
                        <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">
                          Language
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
                          TOTR (тотя)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">
                          Russian
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">
                          Cutie, sweetie
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">
                          Viral meme, internet slang
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">
                          Малыш
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">
                          Russian
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">
                          Baby, little one
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">
                          More formal, less meme-y
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">
                          Котик
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">
                          Russian
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">
                          Kitten (affectionate)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">
                          Common romantic term
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Pronunciation Guide */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  How to Pronounce TOTR
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-yellow-50 dark:bg-yellow-950/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">
                    Pronunciation Guide
                  </h3>
                  <div className="space-y-3">
                    <p>
                      <strong>Cyrillic:</strong> тотя
                    </p>
                    <p>
                      <strong>Phonetic:</strong> /ˈtoʊtjə/ (TOH-tya)
                    </p>
                    <p>
                      <strong>English approximation:</strong> "TOE-tya" or
                      "TOH-tya"
                    </p>
                    <p>
                      <strong>Audio tip:</strong> Similar to "toy" + "tya" but
                      with a softer 't' sound
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Related Terms */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Related TOTR Terms
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
                      Complete guide to TOTR
                    </div>
                  </LocaleLink>

                  <LocaleLink
                    href="/totr-meme-meaning"
                    className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors"
                  >
                    <div className="font-semibold text-purple-600 dark:text-purple-400">
                      TOTR Meme Meaning
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Viral meme explained
                    </div>
                  </LocaleLink>

                  <LocaleLink
                    href="/totr-russian-meaning"
                    className="block p-3 bg-pink-50 dark:bg-pink-950/20 rounded-lg hover:bg-pink-100 dark:hover:bg-pink-950/30 transition-colors"
                  >
                    <div className="font-semibold text-pink-600 dark:text-pink-400">
                      TOTR Russian Meaning
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Russian cultural context
                    </div>
                  </LocaleLink>

                  <LocaleLink
                    href="/totr-text"
                    className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors"
                  >
                    <div className="font-semibold text-green-600 dark:text-green-400">
                      TOTR Text Copy
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Copy TOTR symbols
                    </div>
                  </LocaleLink>
                </div>
              </CardContent>
            </Card>

            {/* Quick Facts */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Facts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong>Origin:</strong> Russian internet slang
                  </div>
                  <div>
                    <strong>Literal meaning:</strong> Cutie, sweetie
                  </div>
                  <div>
                    <strong>Viral since:</strong> September 2025
                  </div>
                  <div>
                    <strong>Platform:</strong> TikTok, Instagram, YouTube
                  </div>
                  <div>
                    <strong>Associated with:</strong> SpongeBob meme
                  </div>
                  <div>
                    <strong>Music:</strong> "Stay" remix
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action CTA */}
            <Card className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">
                  Create Your Own TOTR Meme
                </h3>
                <p className="mb-4 text-pink-100">
                  Now that you know the meaning, make your own!
                </p>
                <LocaleLink
                  href="/generator/totr"
                  className="inline-flex items-center gap-2 bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Play className="w-4 h-4" />
                  Try Generator
                  <ArrowRight className="w-4 h-4" />
                </LocaleLink>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-2xl">
              Frequently Asked Questions About TOTR Meaning
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Q: What does TOTR mean in English?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A: TOTR (тотя) is a Russian term that means "cutie" or
                  "sweetie" in English. It's an affectionate way to address
                  someone you find adorable or endearing.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Q: Is TOTR appropriate to use?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A: Yes, TOTR is generally a positive, affectionate term.
                  However, context matters - it's best used with people you're
                  close to or in casual, friendly situations.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Q: How is TOTR different from other Russian terms of
                  endearment?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A: TOTR is more modern and internet-culture focused compared
                  to traditional terms like "малыш" (baby) or "дорогой" (dear).
                  It gained popularity through memes and social media.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Q: Why did TOTR become a meme?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A: TOTR became viral due to a TikTok video featuring SpongeBob
                  characters and catchy music. The combination of cute imagery,
                  Russian text, and memorable audio created perfect meme
                  conditions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation to other pages */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-6">Explore More About TOTR</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <LocaleLink
              href="/what-is-totr"
              className="group p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors"
            >
              <div className="font-semibold text-blue-600 dark:text-blue-400 group-hover:underline">
                What is TOTR?
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Complete beginner's guide
              </div>
            </LocaleLink>

            <LocaleLink
              href="/totr-meme-meaning"
              className="group p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors"
            >
              <div className="font-semibold text-purple-600 dark:text-purple-400 group-hover:underline">
                TOTR Meme Meaning
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Viral meme explained
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
                Create your own meme
              </div>
            </LocaleLink>

            <LocaleLink
              href="/totr-text"
              className="group p-4 bg-green-50 dark:bg-green-950/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors"
            >
              <div className="font-semibold text-green-600 dark:text-green-400 group-hover:underline">
                TOTR Text Copy
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Copy TOTR symbols
              </div>
            </LocaleLink>
          </div>
        </div>
      </div>
    </div>
  );
}
