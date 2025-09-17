'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getUrlWithLocale } from '@/lib/urls/urls';
import { ExternalLink, Heart, MessageSquare, Users } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface UserMeme {
  id: string;
  title: string;
  imageUrl: string;
  author: {
    name: string;
    avatar: string;
    username: string;
  };
  likes: number;
  comments: number;
  createdAt: string;
  featured?: boolean;
}

interface TotrUserGalleryProps {
  locale: string;
}

export function TotrUserGallery({ locale }: TotrUserGalleryProps) {
  const t = useTranslations('TotrUserGallery');

  // Sample user memes data - in real app this would come from API
  const userMemes: UserMeme[] = [
    {
      id: '1',
      title: 'My first TOTR masterpiece!',
      imageUrl: '/imgs/memes/user-totr-1.png',
      author: {
        name: 'Alex Memer',
        avatar: '/imgs/users/user-1.jpg',
        username: '@alexmemer',
      },
      likes: 342,
      comments: 28,
      createdAt: '2 hours ago',
      featured: true,
    },
    {
      id: '2',
      title: 'TOTЯ energy is unmatched 🔥',
      imageUrl: '/imgs/memes/user-totr-2.png',
      author: {
        name: 'Sarah K',
        avatar: '/imgs/users/user-2.jpg',
        username: '@sarahk_memes',
      },
      likes: 189,
      comments: 15,
      createdAt: '4 hours ago',
    },
    {
      id: '3',
      title: 'Purple TOTR hits different',
      imageUrl: '/imgs/memes/user-totr-3.png',
      author: {
        name: 'Mike Chen',
        avatar: '/imgs/users/user-3.jpg',
        username: '@mikechen',
      },
      likes: 267,
      comments: 22,
      createdAt: '6 hours ago',
      featured: true,
    },
    {
      id: '4',
      title: 'Ocean vibes TOTR 🌊',
      imageUrl: '/imgs/memes/user-totr-4.png',
      author: {
        name: 'Luna Art',
        avatar: '/imgs/users/user-4.jpg',
        username: '@luna_art',
      },
      likes: 156,
      comments: 11,
      createdAt: '8 hours ago',
    },
  ];

  const formatNumber = (num: number): string => {
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
            <Users className="w-5 h-5 text-blue-500" />
            {t('title')}
          </CardTitle>
          <Button variant="outline" size="sm" asChild>
            <a href={getUrlWithLocale('/meme/totr', locale)}>
              {t('viewAll')}
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </Button>
        </div>
        <p className="text-muted-foreground text-sm">{t('description')}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Featured Memes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {userMemes.map((meme) => (
            <div
              key={meme.id}
              className={`group relative overflow-hidden rounded-lg border bg-card hover:shadow-md transition-all duration-200 ${
                meme.featured ? 'ring-2 ring-yellow-500/20' : ''
              }`}
            >
              {/* Featured Badge */}
              {meme.featured && (
                <div className="absolute top-2 left-2 z-10">
                  <span className="bg-yellow-500 text-yellow-50 text-xs px-2 py-1 rounded-full font-medium">
                    ⭐ {t('badges.featured')}
                  </span>
                </div>
              )}

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm text-center px-4">
                    {meme.title}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Button size="sm" variant="secondary">
                    {t('actions.viewMeme')}
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                {/* User Info */}
                <div className="flex items-start gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage
                      src={meme.author.avatar}
                      alt={meme.author.name}
                    />
                    <AvatarFallback>
                      {meme.author.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-sm truncate">
                        {meme.author.name}
                      </p>
                      <span className="text-xs text-muted-foreground">
                        {meme.author.username}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {meme.createdAt}
                    </p>
                  </div>
                </div>

                {/* Meme Title */}
                <h4 className="font-medium text-sm line-clamp-2">
                  {meme.title}
                </h4>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Heart className="w-4 h-4" />
                      {formatNumber(meme.likes)}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <MessageSquare className="w-4 h-4" />
                      {formatNumber(meme.comments)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t">
          <div className="text-center">
            <div className="font-bold text-lg">25.4K</div>
            <div className="text-xs text-muted-foreground">
              {t('stats.creators')}
            </div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg">184K</div>
            <div className="text-xs text-muted-foreground">
              {t('stats.memes')}
            </div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg">2.8M</div>
            <div className="text-xs text-muted-foreground">
              {t('stats.views')}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-3 pt-4 border-t">
          <p className="text-sm text-muted-foreground">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Button asChild>
              <a href={getUrlWithLocale('/generator/totr', locale)}>
                {t('cta.createMeme')}
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={getUrlWithLocale('/gallery', locale)}>
                {t('cta.joinCommunity')}
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
