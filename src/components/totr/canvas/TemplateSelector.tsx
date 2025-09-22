'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { type CanvasTemplate, useCanvasStore } from '@/hooks/useCanvasState';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

export const defaultTemplates: CanvasTemplate[] = [
  {
    id: 'totr-classic',
    name: 'TOTR Classic',
    backgroundColor: '#FFE066',
    backgroundImage: '/totr/templates/classic.svg',
    width: 480,
    height: 360,
  },
  {
    id: 'totr-ocean',
    name: 'Ocean Vibes',
    backgroundColor: '#0EA5E9',
    backgroundImage: '/totr/templates/ocean.svg',
    width: 480,
    height: 360,
  },
  {
    id: 'totr-purple',
    name: 'Purple Haze',
    backgroundColor: '#7C3AED',
    backgroundImage: '/totr/templates/neon.svg',
    width: 480,
    height: 360,
  },
];

interface TemplateSelectorProps {
  className?: string;
}

export function TemplateSelector({ className }: TemplateSelectorProps) {
  const t = useTranslations('TotrMemeGenerator.templateSelector');
  const { template, setTemplate } = useCanvasStore();

  const handleTemplateSelect = (selectedTemplate: CanvasTemplate) => {
    setTemplate(selectedTemplate);
  };

  const getTemplateName = (templateId: string) => {
    switch (templateId) {
      case 'totr-classic':
        return t('templates.classic');
      case 'totr-ocean':
        return t('templates.ocean');
      case 'totr-purple':
        return t('templates.purple');
      default:
        return templateId;
    }
  };

  return (
    <div className={cn('space-y-4', className)}>
      <div>
        <h3 className="text-lg font-semibold mb-2">{t('title')}</h3>
        <p className="text-sm text-muted-foreground">{t('description')}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {defaultTemplates.map((templateOption) => {
          const isSelected = template?.id === templateOption.id;

          return (
            <Card
              key={templateOption.id}
              className={cn(
                'cursor-pointer transition-all hover:shadow-md',
                isSelected && 'ring-2 ring-primary ring-offset-2'
              )}
              onClick={() => handleTemplateSelect(templateOption)}
            >
              <CardContent className="p-3">
                {/* Template Preview */}
                <div
                  className="w-full aspect-[4/3] rounded-xl border border-border/40 mb-3 flex items-center justify-center relative overflow-hidden shadow-[0_22px_38px_-26px_rgba(124,58,237,0.55)]"
                  style={{
                    backgroundColor: templateOption.backgroundColor,
                    backgroundImage: templateOption.backgroundImage
                      ? `url(${templateOption.backgroundImage})`
                      : undefined,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {/* Placeholder SpongeBob-style shapes */}
                  <div className="flex gap-2">
                    <div className="w-6 h-8 bg-yellow-400 rounded opacity-60" />
                    <div className="w-6 h-8 bg-yellow-400 rounded opacity-60" />
                  </div>

                  {/* Sample text overlay */}
                  <div
                    className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs font-bold text-white"
                    style={{
                      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                    }}
                  >
                    Тотя ❤️
                  </div>

                  {/* Selection indicator */}
                  {isSelected && (
                    <div className="absolute top-1 right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  )}
                </div>

                {/* Template Info */}
                <div className="text-center">
                  <h4 className="font-medium text-sm">
                    {getTemplateName(templateOption.id)}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {templateOption.width} × {templateOption.height}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      {template && (
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              // Add default text when template is selected
              const { addText } = useCanvasStore.getState();
              addText({
                text: 'Тотя ❤️',
                x: template.width / 2 - 50,
                y: template.height - 60,
                fontSize: 32,
                fontFamily: 'Arial Black',
                fill: '#FF69B4',
                stroke: '#000000',
                strokeWidth: 2,
                rotation: 0,
                scaleX: 1,
                scaleY: 1,
              });
            }}
          >
            {t('addDefaultText')}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              // Add sample text variations
              const { addText } = useCanvasStore.getState();
              const sampleTexts = ['TOTR', 'totya vibes', 'brainrot mode'];
              const randomText =
                sampleTexts[Math.floor(Math.random() * sampleTexts.length)];

              addText({
                text: randomText,
                x: Math.random() * (template.width - 100) + 50,
                y: Math.random() * (template.height - 100) + 50,
                fontSize: 28,
                fontFamily: 'Arial',
                fill: '#FFFFFF',
                stroke: '#000000',
                strokeWidth: 1,
                rotation: 0,
                scaleX: 1,
                scaleY: 1,
              });
            }}
          >
            {t('randomText')}
          </Button>
        </div>
      )}
    </div>
  );
}
