'use client';

import { useCanvasStore } from '@/hooks/useCanvasState';
import Konva from 'konva';
import { useEffect, useRef, useState } from 'react';
import { Image, Layer, Rect, Stage, Text, Transformer } from 'react-konva';
import useImage from 'use-image';

interface KonvaStageProps {
  className?: string;
  onStageRef?: (ref: Konva.Stage | null) => void;
}

const BackgroundImage = ({
  src,
  width,
  height,
}: { src: string; width: number; height: number }) => {
  const [image] = useImage(src, 'anonymous');

  if (!image) {
    return null;
  }

  return (
    <Image image={image} width={width} height={height} listening={false} />
  );
};

const CanvasImage = ({ src, ...props }: any) => {
  const [image] = useImage(src, 'anonymous');
  return <Image image={image ?? undefined} {...props} />;
};

export const KonvaStage = ({ className, onStageRef }: KonvaStageProps) => {
  const stageRef = useRef<Konva.Stage>(null);
  const transformerRef = useRef<Konva.Transformer>(null);
  const [selectedShape, setSelectedShape] = useState<Konva.Node | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [stageScale, setStageScale] = useState(1);

  const {
    width,
    height,
    template,
    texts,
    images,
    selectedElementId,
    updateText,
    updateImage,
    selectElement,
  } = useCanvasStore();

  // Expose stage ref to parent
  useEffect(() => {
    if (onStageRef) {
      onStageRef(stageRef.current);
    }
  }, [onStageRef]);

  // Responsive scaling based on container width
  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const updateScale = () => {
      const availableWidth = element.offsetWidth;
      if (!availableWidth) return;
      const scale = Math.min(availableWidth / width, 1);
      setStageScale(scale || 1);
    };

    updateScale();

    if (typeof ResizeObserver !== 'undefined') {
      const observer = new ResizeObserver(updateScale);
      observer.observe(element);
      return () => observer.disconnect();
    }

    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [width, height, template?.id]);

  // Handle selection changes
  useEffect(() => {
    if (selectedElementId && transformerRef.current) {
      const stage = stageRef.current;
      if (stage) {
        const selectedNode = stage.findOne(`#${selectedElementId}`);
        if (selectedNode) {
          setSelectedShape(selectedNode);
          transformerRef.current.nodes([selectedNode]);
          transformerRef.current.getLayer()?.batchDraw();
        }
      }
    } else {
      setSelectedShape(null);
      if (transformerRef.current) {
        transformerRef.current.nodes([]);
        transformerRef.current.getLayer()?.batchDraw();
      }
    }
  }, [selectedElementId]);

  // Handle click on stage
  const handleStageClick = (e: Konva.KonvaEventObject<MouseEvent>) => {
    // If clicked on empty area, deselect
    const stage = stageRef.current;
    if (stage && e.target === stage) {
      selectElement(null, null);
      return;
    }

    // If clicked on a shape, select it
    const clickedShape = e.target;
    const id = clickedShape.id();
    const isText = clickedShape instanceof Konva.Text;
    const isImage = clickedShape instanceof Konva.Image;

    if (id && (isText || isImage)) {
      selectElement(id, isText ? 'text' : 'image');
    } else {
      // Clicked on something else, deselect
      selectElement(null, null);
    }
  };

  // Handle transform end
  const handleTransformEnd = (e: Konva.KonvaEventObject<Event>) => {
    const node = e.target;
    const id = node.id();

    if (!id) return;

    const newAttrs = {
      x: node.x(),
      y: node.y(),
      rotation: node.rotation(),
      scaleX: node.scaleX(),
      scaleY: node.scaleY(),
    };

    // Update the corresponding element in store
    const isText = node instanceof Konva.Text;
    const isImage = node instanceof Konva.Image;

    if (isText) {
      updateText(id, newAttrs);
    } else if (isImage) {
      updateImage(id, newAttrs);
    }
  };

  // Handle drag end
  const handleDragEnd = (e: Konva.KonvaEventObject<DragEvent>) => {
    const node = e.target;
    const id = node.id();

    if (!id) return;

    const newPosition = {
      x: node.x(),
      y: node.y(),
    };

    // Update the corresponding element in store
    const isText = node instanceof Konva.Text;
    const isImage = node instanceof Konva.Image;

    if (isText) {
      updateText(id, newPosition);
    } else if (isImage) {
      updateImage(id, newPosition);
    }
  };

  return (
    <div className={className} ref={containerRef}>
      <Stage
        ref={stageRef}
        width={width}
        height={height}
        scaleX={stageScale}
        scaleY={stageScale}
        onClick={handleStageClick}
        onTap={handleStageClick}
        className="border border-border rounded-lg shadow-sm"
        style={{ width: width * stageScale, height: height * stageScale }}
      >
        {/* Background Layer */}
        <Layer>
          {/* Background color */}
          <Rect
            x={0}
            y={0}
            width={width}
            height={height}
            fill={template?.backgroundColor || '#ffffff'}
            listening={false}
          />

          {/* Background image if template has one */}
          {template?.backgroundImage && (
            <BackgroundImage
              src={template.backgroundImage}
              width={width}
              height={height}
            />
          )}
        </Layer>

        {/* Content Layer */}
        <Layer>
          {/* Render all images */}
          {images.map((image) => (
            <CanvasImage
              key={image.id}
              id={image.id}
              src={image.src}
              x={image.x}
              y={image.y}
              width={image.width}
              height={image.height}
              rotation={image.rotation}
              scaleX={image.scaleX}
              scaleY={image.scaleY}
              draggable
              onDragEnd={handleDragEnd}
              onTransformEnd={handleTransformEnd}
            />
          ))}

          {/* Render all texts */}
          {texts.map((text) => (
            <Text
              key={text.id}
              id={text.id}
              text={text.text}
              x={text.x}
              y={text.y}
              fontSize={text.fontSize}
              fontFamily={text.fontFamily}
              fill={text.fill}
              stroke={text.stroke}
              strokeWidth={text.strokeWidth}
              rotation={text.rotation}
              scaleX={text.scaleX}
              scaleY={text.scaleY}
              draggable
              onDragEnd={handleDragEnd}
              onTransformEnd={handleTransformEnd}
            />
          ))}
        </Layer>

        {/* Transformer Layer */}
        <Layer>
          <Transformer
            ref={transformerRef}
            rotateEnabled
            resizeEnabled
            borderEnabled
            anchorSize={8}
            anchorStroke="#4F46E5"
            anchorFill="#FFFFFF"
            anchorCornerRadius={2}
            borderStroke="#4F46E5"
            borderStrokeWidth={2}
            borderDash={[5, 5]}
            keepRatio={false}
          />
        </Layer>
      </Stage>
    </div>
  );
};
