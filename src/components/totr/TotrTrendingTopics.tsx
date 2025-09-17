'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Hash, Search, TrendingUp } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

interface TrendingTopic {
  id: string;
  name: string;
  count: number;
  views: number;
  isHot: boolean;
  growth: number; // percentage growth
}

export function TotrTrendingTopics() {
  const t = useTranslations('TotrTrendingTopics');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample trending topics data - in real app this would come from API
  const trendingTopics: TrendingTopic[] = [
    {
      id: 'totr-classic',
      name: t('topics.classic'),
      count: 15420,
      views: 2850000,
      isHot: true,
      growth: 125,
    },
    {
      id: 'spongebob-totr',
      name: t('topics.spongebob'),
      count: 12340,
      views: 1950000,
      isHot: true,
      growth: 89,
    },
    {
      id: 'totya-energy',
      name: t('topics.totya'),
      count: 9870,
      views: 1670000,
      isHot: true,
      growth: 156,
    },
    {
      id: 'brainrot-mode',
      name: t('topics.brainrot'),
      count: 8760,
      views: 1420000,
      isHot: false,
      growth: 45,
    },
    {
      id: 'russian-memes',
      name: t('topics.russian'),
      count: 7650,
      views: 1280000,
      isHot: false,
      growth: 67,
    },
    {
      id: 'viral-totr',
      name: t('topics.viral'),
      count: 6540,
      views: 1150000,
      isHot: true,
      growth: 203,
    },
    {
      id: 'ocean-vibes',
      name: t('topics.ocean'),
      count: 5430,
      views: 890000,
      isHot: false,
      growth: 34,
    },
    {
      id: 'purple-haze',
      name: t('topics.purple'),
      count: 4320,
      views: 720000,
      isHot: false,
      growth: 78,
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

  const filteredTopics = trendingTopics.filter((topic) =>
    topic.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const topHotTopics = filteredTopics
    .filter((topic) => topic.isHot)
    .slice(0, 3);
  const otherTopics = filteredTopics
    .filter((topic) => !topic.isHot)
    .slice(0, 5);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Hash className="w-5 h-5 text-purple-500" />
          {t('title')}
        </CardTitle>
        <p className="text-muted-foreground text-sm">{t('description')}</p>
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder={t('searchPlaceholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Hot Topics */}
        {topHotTopics.length > 0 && (
          <div className="space-y-3">
            <h4 className="font-medium text-sm flex items-center gap-1">
              🔥 {t('stats.trending')}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {topHotTopics.map((topic) => (
                <Button
                  key={topic.id}
                  variant="outline"
                  className="h-auto p-4 flex flex-col items-start gap-2 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="font-medium text-sm">{topic.name}</span>
                    <div className="flex items-center gap-1 text-xs text-green-600">
                      <TrendingUp className="w-3 h-3" />+{topic.growth}%
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full text-xs text-muted-foreground">
                    <span>
                      {formatNumber(topic.count)} {t('stats.memes')}
                    </span>
                    <span>
                      {formatNumber(topic.views)} {t('stats.views')}
                    </span>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Other Topics */}
        {otherTopics.length > 0 && (
          <div className="space-y-3">
            <h4 className="font-medium text-sm">Popular Topics</h4>
            <div className="flex flex-wrap gap-2">
              {otherTopics.map((topic) => (
                <Badge
                  key={topic.id}
                  variant="outline"
                  className="cursor-pointer hover:bg-accent transition-colors px-3 py-1.5 text-sm"
                >
                  <div className="flex items-center gap-2">
                    <span>{topic.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {formatNumber(topic.count)}
                    </span>
                  </div>
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="border-t pt-4">
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Button size="sm">Browse All Topics</Button>
            <Button variant="outline" size="sm">
              Submit New Topic
            </Button>
          </div>
        </div>

        {/* No Results */}
        {filteredTopics.length === 0 && searchQuery && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">
              No topics found for "{searchQuery}"
            </p>
            <Button
              variant="outline"
              size="sm"
              className="mt-2"
              onClick={() => setSearchQuery('')}
            >
              Clear Search
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
