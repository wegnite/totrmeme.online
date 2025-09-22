'use client';

import Script from 'next/script';
import { useEffect } from 'react';

/**
 * Adsterra Native Banner
 * 
 * Native banner ads that blend with site content
 */
export default function AdsterraNativeBanner() {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  const containerId = "container-326489faac48041616f3b86cb101057b";

  useEffect(() => {
    // Ensure the script loads and initializes properly
    const checkAdLoad = () => {
      if (typeof window !== 'undefined' && window.document.getElementById(containerId)) {
        console.log('Adsterra Native Banner container ready');
      }
    };

    // Check after a short delay to ensure DOM is ready
    setTimeout(checkAdLoad, 1000);
  }, [containerId]);

  return (
    <div className="adsterra-native-banner w-full">
      <Script
        async
        data-cfasync="false"
        src="//pl27696974.revenuecpmgate.com/326489faac48041616f3b86cb101057b/invoke.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log('Adsterra Native Banner script loaded');
        }}
        onError={(e) => {
          console.error('Adsterra Native Banner script failed to load:', e);
        }}
      />
      <div 
        id={containerId}
        className="min-h-[200px] w-full"
        style={{ display: 'block' }}
      />
    </div>
  );
}