'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  Check,
  Copy,
  Heart,
  Palette,
  Sparkles,
  Type,
} from 'lucide-react';
import type { Locale } from 'next-intl';
import { useState } from 'react';

const totrTextVariations = [
  { text: 'тотя❤️', label: 'Classic TOTR with Heart', category: 'classic' },
  { text: 'тотя💜', label: 'Purple Heart TOTR', category: 'classic' },
  { text: 'тотя🧡', label: 'Orange Heart TOTR', category: 'classic' },
  { text: 'тотя💙', label: 'Blue Heart TOTR', category: 'classic' },
  { text: 'тотя💚', label: 'Green Heart TOTR', category: 'classic' },
  { text: 'тотя🤍', label: 'White Heart TOTR', category: 'classic' },
  { text: 'тотя🖤', label: 'Black Heart TOTR', category: 'classic' },
  { text: '💜тотя💜', label: 'Surrounded by Hearts', category: 'decorated' },
  { text: '✨тотя✨', label: 'Sparkly TOTR', category: 'decorated' },
  { text: '🌟тотя🌟', label: 'Starry TOTR', category: 'decorated' },
  { text: '💫тотя💫', label: 'Magical TOTR', category: 'decorated' },
  { text: '🎀тотя🎀', label: 'Bow TOTR', category: 'decorated' },
  { text: '🌸тотя🌸', label: 'Floral TOTR', category: 'decorated' },
  { text: '💖тотя💖', label: 'Sparkling Heart TOTR', category: 'decorated' },
  { text: 'TOTR', label: 'Latin TOTR', category: 'latin' },
  { text: 'TOTR❤️', label: 'Latin TOTR with Heart', category: 'latin' },
  { text: 'totr', label: 'Lowercase TOTR', category: 'latin' },
  { text: 'totya', label: 'Full Transliteration', category: 'latin' },
  { text: 'T O T R', label: 'Spaced TOTR', category: 'stylized' },
  { text: 'т о т я', label: 'Spaced Russian', category: 'stylized' },
  { text: '𝕥𝕠𝕥я', label: 'Mathematical Bold', category: 'stylized' },
  { text: '𝓉𝑜𝓉𝓎𝒶', label: 'Script Style', category: 'stylized' },
  { text: 'тотя ♡', label: 'White Heart', category: 'symbols' },
  { text: 'тотя ♥', label: 'Black Heart Suit', category: 'symbols' },
  { text: 'тотя ღ', label: 'Georgian Love', category: 'symbols' },
  { text: 'тотя ❣', label: 'Heavy Heart Exclamation', category: 'symbols' },
  { text: 'тотя 💕', label: 'Two Hearts', category: 'symbols' },
  { text: 'тотя 💓', label: 'Beating Heart', category: 'symbols' },
];

const categories = [
  { id: 'classic', name: 'Classic TOTR', icon: '❤️' },
  { id: 'decorated', name: 'Decorated', icon: '✨' },
  { id: 'latin', name: 'Latin Script', icon: 'T' },
  { id: 'stylized', name: 'Stylized', icon: '𝓣' },
  { id: 'symbols', name: 'Heart Symbols', icon: '♡' },
];

interface TotrTextContentProps {
  locale?: Locale;
}

export function TotrTextContent({ locale }: TotrTextContentProps) {
  void locale;

  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('classic');

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setTimeout(() => setCopiedText(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const filteredTexts = totrTextVariations.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-pink-50 dark:from-purple-950/20 dark:via-gray-900 dark:to-pink-950/20">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge
              variant="secondary"
              className="text-sm font-semibold bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
            >
              <Type className="w-4 h-4 mr-1" />
              TEXT & SYMBOLS
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
            TOTR Text Copy &amp; Paste
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Copy beautiful TOTR text instantly! Get тотя❤️ symbols, fonts, and
            stylish variations for your social media, memes, and messages.
          </p>
        </div>

        {/* Quick Copy Section */}
        <Card className="mb-12 border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="text-4xl">⚡</div>
              <span>Quick Copy - Most Popular</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {totrTextVariations.slice(0, 6).map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg border hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="text-2xl font-bold mb-1">{item.text}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {item.label}
                    </div>
                  </div>
                  <Button
                    onClick={() => copyToClipboard(item.text)}
                    variant={copiedText === item.text ? 'default' : 'outline'}
                    size="sm"
                    className="ml-2"
                  >
                    {copiedText === item.text ? (
                      <>
                        <Check className="w-4 h-4 mr-1" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-1" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category Navigation */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  Text Categories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      type="button"
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{category.icon}</span>
                        <span className="font-medium">{category.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Text Collection */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">
                    {categories.find((c) => c.id === selectedCategory)?.icon}
                  </span>
                  {categories.find((c) => c.id === selectedCategory)?.name} TOTR
                  Text
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {filteredTexts.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-purple-50 dark:from-gray-800 dark:to-purple-950/20 rounded-lg border hover:shadow-md transition-all"
                    >
                      <div className="flex-1">
                        <div className="text-3xl font-bold mb-2 select-all">
                          {item.text}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {item.label}
                        </div>
                      </div>
                      <Button
                        onClick={() => copyToClipboard(item.text)}
                        variant={
                          copiedText === item.text ? 'default' : 'outline'
                        }
                        size="sm"
                        className="ml-4"
                      >
                        {copiedText === item.text ? (
                          <>
                            <Check className="w-4 h-4 mr-1" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 mr-1" />
                            Copy
                          </>
                        )}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tips Section */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-2xl">
              How to Style TOTR Text Like a Pro
            </CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6 text-sm text-gray-600 dark:text-gray-300">
            <div className="space-y-3">
              <h3 className="font-semibold text-purple-600 dark:text-purple-400">
                Styling Tips
              </h3>
              <ul className="space-y-2">
                <li>
                  • Pair Cyrillic "тотя" with hearts or sparkles for instant
                  cuteness.
                </li>
                <li>
                  • Mix Latin and Cyrillic versions to stand out in captions.
                </li>
                <li>
                  • Use uppercase LATIN letters when you want bold meme energy.
                </li>
                <li>
                  • Combine with gradient backgrounds for authentic TOTR vibes.
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-pink-600 dark:text-pink-400">
                Copy &amp; Share Ideas
              </h3>
              <ul className="space-y-2">
                <li>• Add "тотя❤️" to your TikTok captions or comments.</li>
                <li>
                  • Paste stylized versions into Discord chats to hype your
                  friends.
                </li>
                <li>
                  • Pair the text with our meme generator exports for
                  thumbnails.
                </li>
                <li>
                  • Use "TOTR" variants when your audience is primarily English
                  speaking.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="mt-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          <CardContent className="p-8 text-center">
            <Sparkles className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              Ready to Share Some TOTR Love?
            </h2>
            <p className="text-xl mb-6 text-purple-100">
              Copy your favorite TOTR text and spread the cuteness!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => copyToClipboard('тотя❤️')}
                className="bg-white text-purple-600 hover:bg-gray-100"
                size="lg"
              >
                <Heart className="w-5 h-5 mr-2" />
                Copy тотя❤️
              </Button>
              <LocaleLink href="/generator/totr" className="inline-flex">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-600"
                  size="lg"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Create TOTR Meme
                </Button>
              </LocaleLink>
            </div>
          </CardContent>
        </Card>

        {/* Explore More */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-6">
            Explore More TOTR Resources
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
                Complete beginner's guide
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
                Understand the slang
              </div>
            </LocaleLink>

            <LocaleLink
              href="/totr-russian-meaning"
              className="group p-4 bg-red-50 dark:bg-red-950/20 rounded-lg hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors"
            >
              <div className="font-semibold text-red-600 dark:text-red-400 group-hover:underline">
                Russian Origins
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Learn pronunciation
              </div>
            </LocaleLink>

            <LocaleLink
              href="/totr-meme-meaning"
              className="group p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg hover:bg-pink-100 dark:hover:bg-pink-950/30 transition-colors"
            >
              <div className="font-semibold text-pink-600 dark:text-pink-400 group-hover:underline">
                Meme Meaning
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Why it went viral
              </div>
            </LocaleLink>
          </div>
        </div>
      </div>
    </div>
  );
}
