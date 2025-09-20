'use client';

import { useEffect, useState } from 'react';

export function ThwordleGame() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // iframe 加载完成后设置loading为false
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full relative">
      {/* 加载状态 */}
      {isLoading && (
        <div className="absolute inset-0 bg-background flex items-center justify-center z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4" />
            <p className="text-muted-foreground">加载游戏中...</p>
          </div>
        </div>
      )}

      {/* iframe 嵌入游戏 */}
      <iframe
        src="https://totrmeme.online/index.html"
        className="w-full border-0 rounded-lg"
        style={{
          height: '100vh',
          minHeight: '800px',
        }}
        title="Thwordle - Daily Thematic Word Puzzles"
        loading="lazy"
        sandbox="allow-scripts allow-same-origin allow-forms allow-storage-access-by-user-activation"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}
