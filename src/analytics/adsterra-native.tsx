'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

// 广告配置常量
const AD_CONFIG = {
  containerId:
    process.env.NEXT_PUBLIC_ADSTERRA_CONTAINER_ID ||
    'container-326489faac48041616f3b86cb101057b',
  scriptUrl:
    process.env.NEXT_PUBLIC_ADSTERRA_SCRIPT_URL ||
    '//pl27696974.revenuecpmgate.com/326489faac48041616f3b86cb101057b/invoke.js',
} as const;

/**
 * Adsterra Native Banner
 *
 * Native banner ads that blend with site content
 * Uses environment variables for configuration
 */
export default function AdsterraNativeBanner() {
  const [loadError, setLoadError] = useState(false);

  if (process.env.NODE_ENV !== 'production') {
    return (
      <div className="w-full min-h-[200px] flex items-center justify-center bg-muted/20 rounded-lg border border-dashed border-muted-foreground/20">
        <p className="text-sm text-muted-foreground">
          Ad placeholder (dev mode)
        </p>
      </div>
    );
  }

  const { containerId, scriptUrl } = AD_CONFIG;

  useEffect(() => {
    if (loadError) return;

    // 验证广告容器是否正确初始化
    const checkAdLoad = () => {
      if (typeof window !== 'undefined') {
        const container = window.document.getElementById(containerId);
        if (container) {
          console.log('Adsterra Native Banner container ready');
        } else {
          console.warn('Adsterra Native Banner container not found');
        }
      }
    };

    // 延迟检查以确保DOM就绪
    const timer = setTimeout(checkAdLoad, 1000);
    return () => clearTimeout(timer);
  }, [containerId, loadError]);

  const handleScriptLoad = () => {
    console.log('Adsterra Native Banner script loaded successfully');
    setLoadError(false);
  };

  const handleScriptError = (error: Error) => {
    console.error('Adsterra Native Banner script failed to load:', error);
    setLoadError(true);
  };

  // 如果加载失败，显示降级内容
  if (loadError) {
    return (
      <div className="w-full min-h-[200px] flex items-center justify-center bg-muted/10 rounded-lg">
        <p className="text-sm text-muted-foreground">Advertisement space</p>
      </div>
    );
  }

  return (
    <div
      className="adsterra-native-banner w-full"
      role="banner"
      aria-label="Advertisement"
    >
      <Script
        async
        data-cfasync="false"
        src={scriptUrl}
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
        onError={handleScriptError}
      />
      <div
        id={containerId}
        className="min-h-[200px] w-full"
        style={{ display: 'block' }}
        aria-label="Native advertisement content"
      />
    </div>
  );
}
