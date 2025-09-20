'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import type { HTMLAttributes } from 'react';

interface AuroraBackgroundProps extends HTMLAttributes<HTMLDivElement> {}

const orbs = [
  {
    id: 'orb-1',
    top: '-12%',
    left: '-6%',
    size: 420,
    blur: 140,
    duration: 18,
    delay: 0,
    background:
      'radial-gradient(circle at 30% 30%, rgba(124, 58, 237, 0.75), transparent 65%)',
  },
  {
    id: 'orb-2',
    top: '8%',
    left: '58%',
    size: 360,
    blur: 160,
    duration: 22,
    delay: 2.5,
    background:
      'radial-gradient(circle at 70% 40%, rgba(244, 114, 182, 0.7), transparent 65%)',
  },
  {
    id: 'orb-3',
    top: '52%',
    left: '10%',
    size: 320,
    blur: 120,
    duration: 20,
    delay: 1.2,
    background:
      'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.8), transparent 65%)',
  },
  {
    id: 'orb-4',
    top: '64%',
    left: '66%',
    size: 400,
    blur: 180,
    duration: 24,
    delay: 3.4,
    background:
      'radial-gradient(circle at 50% 50%, rgba(165, 180, 252, 0.65), transparent 70%)',
  },
] as const;

export function AuroraBackground({
  className,
  ...props
}: AuroraBackgroundProps) {
  return (
    <div
      aria-hidden
      {...props}
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden [mask-image:radial-gradient(circle_at_top,white,transparent_75%)]',
        className
      )}
    >
      <div className="absolute inset-0">
        {orbs.map((orb) => (
          <motion.div
            key={orb.id}
            className="absolute rounded-full"
            initial={{ opacity: 0.35, scale: 1 }}
            animate={{ opacity: [0.3, 0.7, 0.35], scale: [1, 1.15, 1] }}
            transition={{
              duration: orb.duration,
              delay: orb.delay,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
            style={{
              width: orb.size,
              height: orb.size,
              top: orb.top,
              left: orb.left,
              filter: `blur(${orb.blur}px)`,
              background: orb.background,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.32),transparent_55%)] mix-blend-screen" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(56,189,248,0.2),transparent_50%)] mix-blend-screen" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(9,8,28,0.85),rgba(12,8,32,0.92)_45%,rgba(17,13,36,0.95))]" />
    </div>
  );
}
