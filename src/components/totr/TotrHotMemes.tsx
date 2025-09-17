'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Eye, Heart, TrendingUp } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface HotMeme {
  id: string;
  title: string;
  imageUrl: string;
  views: number;
  likes: number;
  downloads: number;
  tags: string[];
  isNew?: boolean;
  isTrending?: boolean;
}

export function TotrHotMemes() {
  const t = useTranslations('TotrHotMemes');

  // Sample hot memes data - in real app this would come from API
  const hotMemes: HotMeme[] = [
    {
      id: '1',
      title: 'Classic TOTR SpongeBob',
      imageUrl: '/imgs/memes/totr-classic-sample.png',
      views: 125000,
      likes: 8420,
      downloads: 2150,
      tags: ['TOTR', 'SpongeBob', 'Classic'],
      isTrending: true,
    },
    {
      id: '2',
      title: 'TOTЯ Ocean Vibes',
      imageUrl: '/imgs/memes/totr-ocean-sample.png',
      views: 89000,
      likes: 5670,
      downloads: 1890,
      tags: ['TOTЯ', 'Ocean', 'Blue'],
      isNew: true,
    },
    {
      id: '3',
      title: 'Purple Тотя Energy',
      imageUrl: '/imgs/memes/totr-purple-sample.png',
      views: 156000,
      likes: 12300,
      downloads: 3400,
      tags: ['Тотя', 'Purple', 'Energy'],
      isTrending: true,
    },
    {
      id: '4',
      title: 'TOTR vs ПЫ Battle',
      imageUrl: '/imgs/memes/totr-vs-py-sample.png',
      views: 203000,
      likes: 15800,
      downloads: 4200,
      tags: ['TOTR', 'ПЫ', 'Battle'],
      isTrending: true,
    },
  ];

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            🔥 {t('title')}
            <TrendingUp className="w-5 h-5 text-orange-500" />
          </CardTitle>
          <Button variant="outline" size="sm">
            {t('viewAll')}
          </Button>
        </div>
        <p className="text-muted-foreground text-sm">{t('description')}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {hotMemes.map((meme) => (
            <div
              key={meme.id}
              className="group relative overflow-hidden rounded-lg border bg-card hover:shadow-md transition-all duration-200"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">
                    {meme.title}
                  </span>
                </div>
                {/* Badges */}
                <div className="absolute top-2 left-2 flex gap-1">
                  {meme.isTrending && (
                    <Badge variant="destructive" className="text-xs">
                      🔥 {t('badges.trending')}
                    </Badge>
                  )}
                  {meme.isNew && (
                    <Badge variant="secondary" className="text-xs">
                      ✨ {t('badges.new')}
                    </Badge>
                  )}
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Button size="sm" variant="secondary">
                    {t('actions.useTemplate')}
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-3 space-y-2">
                <h4 className="font-medium text-sm line-clamp-1">
                  {meme.title}
                </h4>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {meme.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {formatNumber(meme.views)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      {formatNumber(meme.likes)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Download className="w-3 h-3" />
                      {formatNumber(meme.downloads)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center pt-4 border-t">
          <p className="text-sm text-muted-foreground mb-3">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Button>{t('cta.createNow')}</Button>
            <Button variant="outline">{t('cta.browseTemplates')}</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
