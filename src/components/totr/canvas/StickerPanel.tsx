'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useCanvasStore } from '@/hooks/useCanvasState';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const stickers = [
  {
    id: 'totr-duo',
    nameKey: 'stickers.duo',
    src: '/totr/stickers/totr-duo.svg',
    width: 260,
    height: 200,
  },
  {
    id: 'heart-burst',
    nameKey: 'stickers.heartBurst',
    src: '/totr/stickers/heart-burst.svg',
    width: 220,
    height: 200,
  },
  {
    id: 'sparkle-frame',
    nameKey: 'stickers.sparkleFrame',
    src: '/totr/stickers/sparkle-frame.svg',
    width: 280,
    height: 210,
  },
];

export function StickerPanel() {
  const t = useTranslations('TotrMemeGenerator');
  const { addImage, template } = useCanvasStore();

  const handleAddSticker = (sticker: (typeof stickers)[number]) => {
    if (!template) return;

    const centerX = template.width / 2 - sticker.width / 2;
    const centerY = template.height / 2 - sticker.height / 2;

    addImage({
      src: sticker.src,
      x: centerX,
      y: centerY,
      width: sticker.width,
      height: sticker.height,
      rotation: 0,
      scaleX: 1,
      scaleY: 1,
    });
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <Badge
            variant="outline"
            className="rounded-full px-2 py-0 text-[0.65rem]"
          >
            {t('label')}
          </Badge>
          {t('title')}
        </CardTitle>
        <p className="text-xs text-muted-foreground">{t('description')}</p>
      </CardHeader>
      <CardContent className="pt-0">
        <ScrollArea className="h-[210px] pr-1">
          <div className="space-y-3">
            {stickers.map((sticker) => (
              <button
                key={sticker.id}
                type="button"
                onClick={() => handleAddSticker(sticker)}
                className="group relative w-full overflow-hidden rounded-xl border border-border/40 bg-muted/30 transition hover:border-primary/40 hover:bg-primary/10"
                disabled={!template}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-primary/30 to-fuchsia-500/30" />
                <div className="relative flex items-center gap-3 p-3">
                  <div className="relative h-16 w-20 overflow-hidden rounded-lg border border-border/40 bg-background">
                    <Image
                      src={sticker.src}
                      alt={sticker.id}
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-medium text-sm text-foreground">
                      {sticker.id === 'totr-duo'
                        ? t('stickers.duo.name')
                        : sticker.id === 'heart-burst'
                          ? t('stickers.heartBurst.name')
                          : t('stickers.sparkleFrame.name')}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {sticker.id === 'totr-duo'
                        ? t('stickers.duo.description')
                        : sticker.id === 'heart-burst'
                          ? t('stickers.heartBurst.description')
                          : t('stickers.sparkleFrame.description')}
                    </p>
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {Math.round(sticker.width)}×{Math.round(sticker.height)}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>
        <Button
          type="button"
          onClick={() => template && handleAddSticker(stickers[0])}
          disabled={!template}
          variant="outline"
          size="sm"
          className="mt-3 w-full"
        >
          {t('cta')}
        </Button>
      </CardContent>
    </Card>
  );
}
