'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { useCanvasStore } from '@/hooks/useCanvasState';
import { Palette, Plus, Trash2, Type } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

const popularTexts = [
  'Тотя ❤️',
  'TOTR',
  'totya vibes',
  'brainrot mode',
  'SpongeBob core',
  'Russian energy',
  'мем энергия',
  'ПЫ vs TOTR',
];

const fontFamilies = [
  { name: 'Arial Black', value: 'Arial Black' },
  { name: 'Impact', value: 'Impact' },
  { name: 'Arial', value: 'Arial' },
  { name: 'Helvetica', value: 'Helvetica' },
  { name: 'Times New Roman', value: 'Times New Roman' },
];

const colorPresets = [
  { name: 'Hot Pink', value: '#FF69B4', bg: 'bg-pink-500' },
  { name: 'White', value: '#FFFFFF', bg: 'bg-white border border-gray-300' },
  { name: 'Black', value: '#000000', bg: 'bg-black' },
  { name: 'Red', value: '#FF0000', bg: 'bg-red-500' },
  { name: 'Blue', value: '#0066FF', bg: 'bg-blue-500' },
  { name: 'Yellow', value: '#FFFF00', bg: 'bg-yellow-500' },
  { name: 'Green', value: '#00FF00', bg: 'bg-green-500' },
  { name: 'Purple', value: '#9966FF', bg: 'bg-purple-500' },
];

interface TextEditorProps {
  className?: string;
}

export function TextEditor({ className }: TextEditorProps) {
  const t = useTranslations('TotrMemeGenerator.textEditor');
  const {
    texts,
    selectedElementId,
    selectedElementType,
    addText,
    updateText,
    removeText,
    template,
  } = useCanvasStore();

  const [newText, setNewText] = useState('Тотя ❤️');
  const [customColor, setCustomColor] = useState('#FF69B4');

  const selectedText = texts.find(
    (text) => text.id === selectedElementId && selectedElementType === 'text'
  );

  const handleAddText = () => {
    if (!template) return;

    addText({
      text: newText,
      x: template.width / 2 - 50,
      y: template.height / 2,
      fontSize: 32,
      fontFamily: 'Arial Black',
      fill: customColor,
      stroke: '#000000',
      strokeWidth: 2,
      rotation: 0,
      scaleX: 1,
      scaleY: 1,
    });

    setNewText('');
  };

  const handleUpdateText = (updates: any) => {
    if (selectedText) {
      updateText(selectedText.id, updates);
    }
  };

  const handleRemoveText = () => {
    if (selectedText) {
      removeText(selectedText.id);
    }
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Type className="w-5 h-5" />
          {t('title')}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Add New Text Section */}
        <div className="space-y-2">
          <Label>{t('addNewText')}</Label>
          <div className="flex gap-2">
            <Input
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              placeholder={t('placeholder')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && newText.trim()) {
                  handleAddText();
                }
              }}
            />
            <Button
              onClick={handleAddText}
              disabled={!newText.trim() || !template}
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>

          {/* Popular Text Shortcuts */}
          <div className="flex flex-wrap gap-1">
            {popularTexts.map((text) => (
              <Badge
                key={text}
                variant="secondary"
                className="cursor-pointer hover:bg-primary/10 text-xs py-0 px-1 h-6"
                onClick={() => setNewText(text)}
              >
                {text}
              </Badge>
            ))}
          </div>
        </div>

        {/* Selected Text Editor */}
        {selectedText && (
          <div className="space-y-3 border-t pt-3">
            <div className="flex items-center justify-between">
              <Label>{t('editSelected')}</Label>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleRemoveText}
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>

            {/* Text Content */}
            <div className="space-y-2">
              <Label>{t('textContent')}</Label>
              <Input
                value={selectedText.text}
                onChange={(e) => handleUpdateText({ text: e.target.value })}
                placeholder={t('textContent')}
              />
            </div>

            {/* Font Family */}
            <div className="space-y-2">
              <Label>{t('font')}</Label>
              <Select
                value={selectedText.fontFamily}
                onValueChange={(value) =>
                  handleUpdateText({ fontFamily: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {fontFamilies.map((font) => (
                    <SelectItem key={font.value} value={font.value}>
                      <span style={{ fontFamily: font.value }}>
                        {font.name}
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Font Size */}
            <div className="space-y-2">
              <Label>
                {t('fontSize')}: {selectedText.fontSize}px
              </Label>
              <Slider
                value={[selectedText.fontSize]}
                onValueChange={([value]) =>
                  handleUpdateText({ fontSize: value })
                }
                min={12}
                max={120}
                step={2}
                className="w-full"
              />
            </div>

            {/* Text Color */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Palette className="w-4 h-4" />
                {t('textColor')}
              </Label>
              <div className="grid grid-cols-4 gap-1">
                {colorPresets.map((color) => (
                  <Button
                    key={color.value}
                    variant={
                      selectedText.fill === color.value ? 'default' : 'outline'
                    }
                    className="h-6 p-1 text-xs"
                    onClick={() => handleUpdateText({ fill: color.value })}
                  >
                    <div className={`w-3 h-3 rounded ${color.bg} mr-1`} />
                    <span className="truncate">{color.name}</span>
                  </Button>
                ))}
              </div>

              {/* Custom Color Input */}
              <div className="flex gap-2">
                <input
                  type="color"
                  value={selectedText.fill}
                  onChange={(e) => handleUpdateText({ fill: e.target.value })}
                  className="w-6 h-6 rounded border border-border cursor-pointer"
                />
                <Input
                  value={selectedText.fill}
                  onChange={(e) => handleUpdateText({ fill: e.target.value })}
                  placeholder="#FF69B4"
                  className="font-mono text-xs h-6"
                />
              </div>
            </div>

            {/* Stroke Settings */}
            <div className="space-y-2">
              <Label>{t('strokeSettings')}</Label>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Label className="text-xs">{t('strokeColor')}</Label>
                  <div className="flex gap-1 mt-1">
                    <input
                      type="color"
                      value={selectedText.stroke || '#000000'}
                      onChange={(e) =>
                        handleUpdateText({ stroke: e.target.value })
                      }
                      className="w-6 h-6 rounded border border-border cursor-pointer"
                    />
                    <Input
                      value={selectedText.stroke || '#000000'}
                      onChange={(e) =>
                        handleUpdateText({ stroke: e.target.value })
                      }
                      className="font-mono text-xs h-6"
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-xs">
                    {t('strokeWidth')}: {selectedText.strokeWidth || 0}px
                  </Label>
                  <Slider
                    value={[selectedText.strokeWidth || 0]}
                    onValueChange={([value]) =>
                      handleUpdateText({ strokeWidth: value })
                    }
                    min={0}
                    max={10}
                    step={1}
                    className="mt-2"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Helper Text */}
        {!selectedText && texts.length > 0 && (
          <p className="text-sm text-muted-foreground text-center py-4">
            {t('clickToEdit')}
          </p>
        )}

        {texts.length === 0 && !template && (
          <p className="text-sm text-muted-foreground text-center py-4">
            {t('selectTemplate')}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
