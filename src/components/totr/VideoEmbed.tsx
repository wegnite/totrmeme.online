'use client';

import { ExternalLink, Loader2, Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface VideoEmbedProps {
  platform: 'youtube' | 'tiktok' | 'instagram';
  videoId?: string;
  tiktokId?: string;
  instagramId?: string;
  embedUrl: string;
  autoplay?: boolean;
}

const TIKTOK_SCRIPT_SRC = 'https://www.tiktok.com/embed.js';

export function VideoEmbed({
  platform,
  videoId,
  tiktokId,
  instagramId,
  embedUrl,
  autoplay = true,
}: VideoEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [embedError, setEmbedError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    setIsLoading(true);
    setEmbedError(false);
  }, [platform, videoId, tiktokId, instagramId, embedUrl]);

  useEffect(() => {
    if (platform !== 'tiktok') {
      return;
    }

    let isCancelled = false;

    const markLoaded = () => {
      if (!isCancelled) {
        setIsLoading(false);
        (
          window as typeof window & { tiktokEmbedLoad?: () => void }
        ).tiktokEmbedLoad?.();
      }
    };

    const markError = () => {
      if (!isCancelled) {
        setEmbedError(true);
        setIsLoading(false);
      }
    };

    const registerListeners = (script: HTMLScriptElement) => {
      const handleLoad = () => {
        script.dataset.loaded = 'true';
        markLoaded();
      };
      const handleError = () => {
        markError();
      };

      script.addEventListener('load', handleLoad);
      script.addEventListener('error', handleError);

      return () => {
        script.removeEventListener('load', handleLoad);
        script.removeEventListener('error', handleError);
      };
    };

    const existingScript = document.querySelector(
      `script[src="${TIKTOK_SCRIPT_SRC}"]`
    ) as HTMLScriptElement | null;
    let cleanup: (() => void) | undefined;

    if (existingScript) {
      if (existingScript.dataset.loaded === 'true') {
        markLoaded();
      } else {
        cleanup = registerListeners(existingScript);
      }
    } else {
      const script = document.createElement('script');
      script.src = TIKTOK_SCRIPT_SRC;
      script.async = true;
      cleanup = registerListeners(script);
      document.body.appendChild(script);
    }

    const fallbackTimer = window.setTimeout(() => {
      if (!isCancelled) {
        setIsLoading(false);
      }
    }, 5000);

    return () => {
      isCancelled = true;
      cleanup?.();
      window.clearTimeout(fallbackTimer);
    };
  }, [platform, tiktokId, embedUrl]);

  const handleIframeError = () => {
    setEmbedError(true);
    setIsLoading(false);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  // YouTube embed
  if (platform === 'youtube' && videoId) {
    return (
      <div className="relative w-full h-full">
        {isLoading && (
          <div className="absolute inset-0 bg-black flex items-center justify-center z-10">
            <Loader2 className="w-8 h-8 text-white animate-spin" />
          </div>
        )}
        <iframe
          ref={iframeRef}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=${autoplay ? 1 : 0}&rel=0&modestbranding=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          title="YouTube TOTR video"
          onLoad={handleIframeLoad}
          onError={handleIframeError}
        />
      </div>
    );
  }

  // TikTok embed
  if (platform === 'tiktok' && tiktokId && !embedError) {
    return (
      <div className="relative w-full h-full overflow-auto bg-black">
        {isLoading && (
          <div className="absolute inset-0 bg-black flex items-center justify-center z-10">
            <Loader2 className="w-8 h-8 text-white animate-spin" />
          </div>
        )}
        <div className="flex items-center justify-center min-h-full p-4">
          <blockquote
            className="tiktok-embed"
            cite={embedUrl}
            data-video-id={tiktokId}
            style={{ maxWidth: '605px', minWidth: '325px' }}
          >
            <section>
              <a
                target="_blank"
                title="View on TikTok"
                href={embedUrl}
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                View this video on TikTok
              </a>
            </section>
          </blockquote>
        </div>
        {!isLoading && (
          <div className="absolute bottom-4 right-4">
            <a
              href={embedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/90 text-white text-sm rounded-lg hover:bg-pink-600 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Open in TikTok
            </a>
          </div>
        )}
      </div>
    );
  }

  // Instagram embed
  if (platform === 'instagram' && instagramId && !embedError) {
    const instagramEmbedUrl = instagramId.startsWith('C')
      ? `https://www.instagram.com/p/${instagramId}/embed/`
      : `https://www.instagram.com/reel/${instagramId}/embed/`;

    return (
      <div className="relative w-full h-full">
        {isLoading && (
          <div className="absolute inset-0 bg-black flex items-center justify-center z-10">
            <Loader2 className="w-8 h-8 text-white animate-spin" />
          </div>
        )}
        <iframe
          ref={iframeRef}
          src={instagramEmbedUrl}
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full"
          style={{ border: 'none', background: 'white' }}
          title="Instagram TOTR video"
          onLoad={handleIframeLoad}
          onError={handleIframeError}
        />
      </div>
    );
  }

  // Fallback for when embed fails or is not supported
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-purple-900 via-blue-900 to-purple-900">
      <div className="text-center">
        <div className="text-8xl mb-4">🧽🧽</div>
        <div className="text-4xl font-bold mb-4 text-pink-300">тотя❤️</div>
        <div className="text-white mb-4">
          {embedError ? 'Embed not available' : 'Video player loading...'}
        </div>
        <a
          href={embedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
        >
          <Play className="w-5 h-5" />
          Watch on {platform.charAt(0).toUpperCase() + platform.slice(1)}
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
