'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getUrlWithLocale } from '@/lib/urls/urls';
import { ArrowRight, Play, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface TutorialStep {
  number: number;
  icon: string;
  title: string;
  description: string;
}

interface TotrQuickTutorialProps {
  locale: string;
}

export function TotrQuickTutorial({ locale }: TotrQuickTutorialProps) {
  const t = useTranslations('TotrQuickTutorial');

  const steps: TutorialStep[] = [
    {
      number: 1,
      icon: '🎨',
      title: t('steps.step1.title'),
      description: t('steps.step1.description'),
    },
    {
      number: 2,
      icon: '✨',
      title: t('steps.step2.title'),
      description: t('steps.step2.description'),
    },
    {
      number: 3,
      icon: '📤',
      title: t('steps.step3.title'),
      description: t('steps.step3.description'),
    },
  ];

  return (
    <Card className="w-full bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-xl">
          <Zap className="w-6 h-6 text-yellow-500" />
          {t('title')}
        </CardTitle>
        <p className="text-muted-foreground">{t('subtitle')}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Steps */}
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-start gap-4">
              {/* Step Number */}
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                {step.number}
              </div>

              {/* Step Content */}
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{step.icon}</span>
                  <h4 className="font-semibold text-sm">{step.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="flex-shrink-0 pt-2">
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Preview Examples */}
        <div className="grid grid-cols-3 gap-2 py-4">
          {[
            { label: 'TOTR Classic', gradient: 'from-blue-200 to-blue-300' },
            { label: 'Тотя ❤️', gradient: 'from-purple-200 to-purple-300' },
            { label: 'Ocean Vibes', gradient: 'from-cyan-200 to-cyan-300' },
          ].map((example, index) => (
            <div
              key={index}
              className={`aspect-square rounded-lg bg-gradient-to-br ${example.gradient} dark:opacity-80 flex items-center justify-center border`}
            >
              <span className="text-xs font-medium text-gray-700 dark:text-gray-800 text-center px-1">
                {example.label}
              </span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
          <Button asChild className="flex-1">
            <a href={getUrlWithLocale('/generator/totr', locale)}>
              <Zap className="w-4 h-4 mr-2" />
              {t('tryNow')}
            </a>
          </Button>
          <Button variant="outline" className="flex-1">
            <Play className="w-4 h-4 mr-2" />
            {t('watchVideo')}
          </Button>
        </div>

        {/* Quick Tips */}
        <div className="bg-white/50 dark:bg-gray-900/20 rounded-lg p-3 space-y-2">
          <h5 className="font-medium text-sm">💡 Pro Tips:</h5>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• Use "Тотя ❤️" for authentic Russian TOTR vibes</li>
            <li>• Combine TOTR with SpongeBob for maximum viral potential</li>
            <li>• Export as PNG for transparent backgrounds</li>
            <li>• Share on TikTok with #TOTR #brainrot for trending</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
