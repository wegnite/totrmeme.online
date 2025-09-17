'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  platform: string;
  engagement: string;
  type: 'origin' | 'viral' | 'evolution' | 'crossover';
}

const timelineEvents: TimelineEvent[] = [
  {
    date: 'Sep 1, 2025',
    title: 'TOTR Meme Origin',
    description:
      'TikToker @ddghfjwiedi3929 posts the first known "Тотя" meme featuring two naked SpongeBobs',
    platform: 'TikTok',
    engagement: '2M+ plays',
    type: 'origin',
  },
  {
    date: 'Sep 5, 2025',
    title: 'Music Remix Trend',
    description:
      'Stay (Kid LAROI & Justin Bieber) remix becomes the signature sound for TOTR memes',
    platform: 'TikTok',
    engagement: '500K+ uses',
    type: 'evolution',
  },
  {
    date: 'Sep 10, 2025',
    title: 'Cross-Platform Spread',
    description:
      'TOTR memes begin appearing on Instagram Reels and YouTube Shorts',
    platform: 'Multi-platform',
    engagement: '1M+ shares',
    type: 'viral',
  },
  {
    date: 'Sep 15, 2025',
    title: 'TOTR vs ПЫ War',
    description:
      'Community splits between TOTR supporters and ПЫ (Minion-potato hybrid) fans',
    platform: 'TikTok',
    engagement: '3M+ debates',
    type: 'crossover',
  },
  {
    date: 'Sep 20, 2025',
    title: 'Russian Brainrot Peak',
    description:
      'TOTR becomes the face of the Russian brainrot movement alongside Italian and German variants',
    platform: 'Global',
    engagement: '10M+ mentions',
    type: 'viral',
  },
];

const typeColors = {
  origin: 'bg-blue-100 text-blue-800 border-blue-200',
  viral: 'bg-red-100 text-red-800 border-red-200',
  evolution: 'bg-green-100 text-green-800 border-green-200',
  crossover: 'bg-purple-100 text-purple-800 border-purple-200',
};

const typeEmojis = {
  origin: '🌱',
  viral: '🔥',
  evolution: '🔄',
  crossover: '⚔️',
};

export function TotrTimeline() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const filteredEvents = selectedType
    ? timelineEvents.filter((event) => event.type === selectedType)
    : timelineEvents;

  const displayEvents = isExpanded
    ? filteredEvents
    : filteredEvents.slice(0, 3);

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center">📅 TOTR Meme Timeline</CardTitle>
        <p className="text-sm text-muted-foreground text-center">
          Follow the viral journey from origin to global phenomenon
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 justify-center">
          <Button
            variant={selectedType === null ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedType(null)}
          >
            All Events
          </Button>
          {Object.entries(typeEmojis).map(([type, emoji]) => (
            <Button
              key={type}
              variant={selectedType === type ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedType(type)}
              className="capitalize"
            >
              {emoji} {type}
            </Button>
          ))}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {displayEvents.map((event, index) => (
          <div key={index} className="relative">
            {/* Timeline Line */}
            {index !== displayEvents.length - 1 && (
              <div className="absolute left-6 top-12 w-px h-16 bg-border" />
            )}

            <div className="flex gap-4">
              {/* Timeline Dot */}
              <div className="flex-shrink-0">
                <div
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center text-lg ${typeColors[event.type]}`}
                >
                  {typeEmojis[event.type]}
                </div>
              </div>

              {/* Event Content */}
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant="outline" className="text-xs">
                    {event.date}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {event.platform}
                  </Badge>
                  <Badge variant="outline" className="text-xs text-green-600">
                    {event.engagement}
                  </Badge>
                </div>

                <h4 className="font-semibold text-lg">{event.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Show More Button */}
        {filteredEvents.length > 3 && (
          <div className="text-center pt-4">
            <Button
              variant="outline"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded
                ? 'Show Less'
                : `Show ${filteredEvents.length - 3} More Events`}
            </Button>
          </div>
        )}

        {filteredEvents.length === 0 && selectedType && (
          <div className="text-center py-8 text-muted-foreground">
            No events found for "{selectedType}" type.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
