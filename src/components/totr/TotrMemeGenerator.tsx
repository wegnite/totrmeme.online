'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCanvasStore } from '@/hooks/useCanvasState';
import { Redo, RotateCcw, Undo, Wand2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { type MutableRefObject, useEffect, useRef } from 'react';
import { ExportPanel } from './canvas/ExportPanel';
import { KonvaStage } from './canvas/KonvaStage';
import { StickerPanel } from './canvas/StickerPanel';
import { TemplateSelector, defaultTemplates } from './canvas/TemplateSelector';
import { TextEditor } from './canvas/TextEditor';

export function TotrMemeGenerator() {
  const t = useTranslations('TotrMemeGenerator');
  const stageRef = useRef(null);
  const {
    template,
    history,
    historyIndex,
    clearCanvas,
    undo,
    redo,
    setTemplate,
  } = useCanvasStore();

  const canUndo = historyIndex > 0;
  const canRedo = historyIndex < history.length - 1;

  const ensuredDefaultTemplate = useRef(false);
  const lastTemplateWithStarterText = useRef<string | null>(null);

  useEffect(() => {
    if (!template && !ensuredDefaultTemplate.current) {
      ensuredDefaultTemplate.current = true;
      const starter = defaultTemplates[0];
      setTemplate(starter);
    }
  }, [template, setTemplate]);

  useEffect(() => {
    if (!template) return;

    const canvasState = useCanvasStore.getState();
    const noTextPresent = canvasState.texts.length === 0;
    const templateChanged = lastTemplateWithStarterText.current !== template.id;

    if (templateChanged && noTextPresent) {
      const { addText } = useCanvasStore.getState();
      addText({
        text: 'Тотя ❤️',
        x: template.width * 0.28,
        y: template.height * 0.7,
        fontSize: Math.max(36, template.width * 0.12),
        fontFamily: 'Arial Black',
        fill: '#FF4DD3',
        stroke: '#000000',
        strokeWidth: 3,
        rotation: -6,
        scaleX: 1,
        scaleY: 1,
      });
      lastTemplateWithStarterText.current = template.id;
    }
  }, [template]);

  return (
    <div className="relative mx-auto w-full max-w-[1200px] space-y-6 px-4">
      <div className="grid gap-6 lg:grid-cols-[320px_1fr] xl:grid-cols-[320px_1fr_320px]">
        <div className="order-2 space-y-4 lg:order-1">
          <Card className="border-white/10 bg-white/[0.03] shadow-[0_30px_70px_-60px_rgba(124,58,237,0.75)] backdrop-blur-xl">
            <CardContent className="p-5">
              <TemplateSelector className="space-y-4" />
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/[0.025] backdrop-blur-xl">
            <CardContent className="space-y-3 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-medium text-white/80">
                  <Badge variant="outline" className="rounded-full px-2 py-0 text-[0.65rem]">
                    {t('quickActions.title')}
                  </Badge>
                  <span className="text-[0.65rem] uppercase tracking-[0.2em] text-white/40">
                    {t('quickActions.hint')}
                  </span>
                </div>
                <Wand2 className="h-4 w-4 text-primary" />
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={undo}
                  disabled={!canUndo}
                  className="justify-center"
                >
                  <Undo className="mr-1 h-3 w-3" />
                  {t('quickActions.undo')}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={redo}
                  disabled={!canRedo}
                  className="justify-center"
                >
                  <Redo className="mr-1 h-3 w-3" />
                  {t('quickActions.redo')}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={clearCanvas}
                  className="justify-center text-destructive hover:text-destructive"
                >
                  <RotateCcw className="mr-1 h-3 w-3" />
                  {t('quickActions.clearCanvas')}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="order-1 lg:order-2 space-y-4">
          <Card className="border-white/10 bg-white/[0.04] shadow-[0_40px_120px_-70px_rgba(56,189,248,0.65)] backdrop-blur-xl">
            <CardContent className="p-6">
              {template ? (
                <div className="space-y-5">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold tracking-tight text-white">
                      {t('canvas.title')}
                    </h3>
                    <p className="text-sm text-white/70">{t('canvas.description')}</p>
                  </div>
                  <div className="flex justify-center">
                    <KonvaStage
                      className="mx-auto max-w-full"
                      onStageRef={(ref) => {
                        if (stageRef.current !== ref) {
                          (stageRef as MutableRefObject<any>).current = ref;
                        }
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div className="flex h-[360px] items-center justify-center rounded-lg border border-dashed border-white/20 bg-white/5">
                  <div className="text-center text-white/70">
                    <p className="mb-2 text-sm">{t('canvas.selectTemplate')}</p>
                    <p className="text-xs text-white/60">{t('canvas.selectTemplateHint')}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {template && (
            <Card className="border-white/10 bg-white/[0.02] backdrop-blur-xl">
              <CardContent className="p-4">
                <h3 className="text-sm font-semibold text-white">
                  {t('tips.title')}
                </h3>
                <ul className="mt-2 space-y-1 text-xs text-white/70">
                  <li>{t('tips.dragText')}</li>
                  <li>{t('tips.clickEdit')}</li>
                  <li>{t('tips.shortcuts')}</li>
                  <li>{t('tips.styles')}</li>
                  <li>{t('tips.watermark')}</li>
                </ul>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="order-3 space-y-4">
          <TextEditor className="border-white/10 bg-white/[0.03] backdrop-blur-xl" />
          <StickerPanel />
          <ExportPanel
            stageRef={stageRef}
            className="border-white/10 bg-white/[0.03] backdrop-blur-xl"
          />
        </div>
      </div>
    </div>
  );
}
