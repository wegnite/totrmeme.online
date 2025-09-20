'use client';

import { Badge } from '@/components/ui/badge';
import { Play, TrendingUp, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { VideoEmbed } from './VideoEmbed';

interface VideoItem {
  id: string;
  title: string;
  platform: 'tiktok' | 'youtube' | 'instagram';
  creator: string;
  description: string;
  views: string;
  embedUrl: string;
  thumbnailUrl?: string;
  videoId?: string;
  tiktokId?: string;
  instagramId?: string;
}

const videoData: VideoItem[] = [
  {
    id: 'yt-totr-original',
    title: 'Original TOTЯ ❤️ SpongeBob Clip (Stay Remix)',
    platform: 'youtube',
    creator: '@fearlessfigures',
    description:
      'Full-screen capture of the two pantless SpongeBobs chanting “тотя❤️” to the Stay remix — the clip that kicked off the brainrot.',
    views: '2.1M+',
    embedUrl: 'https://www.youtube.com/watch?v=vJvs5MtCtI4',
    thumbnailUrl: 'https://img.youtube.com/vi/vJvs5MtCtI4/hqdefault.jpg',
    videoId: 'vJvs5MtCtI4',
  },
  {
    id: 'ig-totr-remix',
    title: 'TOTR x Stay Remix (Instagram Reel)',
    platform: 'instagram',
    creator: '@fearlessfigures',
    description:
      'Vertical remix showing why the TOTЯ walk cycle pairs perfectly with the Stay drop — widely reposted across meme accounts.',
    views: '1.2M+',
    embedUrl: 'https://www.instagram.com/reel/DOru0bdDXqF/',
    instagramId: 'DOru0bdDXqF',
  },
  {
    id: 'tt-fearlessfigures',
    title: 'TOTЯ ❤️ Original TikTok Upload',
    platform: 'tiktok',
    creator: '@fearlessfigures',
    description:
      'The hugely shared TikTok where the double SpongeBobs glide in with glowing "тотя❤️" typography.',
    views: '8.4M+',
    embedUrl:
      'https://www.tiktok.com/@fearlessfigures/video/7549201922935246110',
    tiktokId: '7549201922935246110',
  },
  {
    id: 'tt-trixi-clip',
    title: 'TOTR vs ПЫ Split Screen Remix',
    platform: 'tiktok',
    creator: '@trixi.clipz17',
    description:
      'Side-by-side breakdown comparing the TOTR duo with its rival ПЫ brainrot characters.',
    views: '3.1M+',
    embedUrl: 'https://www.tiktok.com/@trixi.clipz17/video/7550912307568610590',
    tiktokId: '7550912307568610590',
  },
];

const platformColors: Record<VideoItem['platform'], string> = {
  tiktok: 'bg-pink-500 text-white',
  youtube: 'bg-red-500 text-white',
  instagram: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white',
};

const platformIcons = {
  tiktok: '🎵',
  youtube: '📹',
  instagram: '📸',
};

export function TotrVideoShowcase() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const handleVideoClick = (video: VideoItem) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  useEffect(() => {
    if (!selectedVideo) {
      document.body.style.overflow = '';
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedVideo]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedVideo(null);
      }
    };

    if (!selectedVideo) {
      return;
    }

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedVideo]);

  return (
    <>
      <section className="relative z-10 overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(109,91,255,0.25),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(56,189,248,0.18),transparent_55%)]" />
        <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:46px_46px]" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 backdrop-blur">
              <TrendingUp className="h-4 w-4 text-primary" />
              Viral Content Feed
            </div>
            <h2 className="text-4xl font-semibold text-white">
              🔥 Real TOTR Videos Going Viral
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">
              Click any thumbnail to watch the authentic TikTok, Instagram, and
              YouTube clips that launched the TOTR phenomenon.
            </p>
          </div>

          {/* Video Grid with Thumbnails */}
          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {videoData.map((video) => (
              <div
                key={video.id}
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-black/60 shadow-[0_35px_120px_-80px_rgba(244,114,182,0.85)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-black/70"
                onClick={() => handleVideoClick(video)}
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  {video.thumbnailUrl ? (
                    <>
                      <img
                        src={video.thumbnailUrl}
                        alt={video.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback =
                            target.nextElementSibling as HTMLElement;
                          if (fallback) {
                            fallback.classList.remove('hidden');
                          }
                        }}
                      />

                      <div className="absolute inset-0 hidden items-center justify-center bg-[radial-gradient(circle_at_center,_rgba(109,91,255,0.4),transparent_60%)]">
                        <div className="text-center text-white">
                          <div className="mb-2 text-4xl">🧽🧽</div>
                          <div className="text-2xl font-bold text-pink-300">
                            тотя❤️
                          </div>
                          <div className="mt-1 text-xs opacity-70">
                            {video.creator}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,_rgba(109,91,255,0.4),transparent_60%)]">
                      <div className="text-center text-white">
                        <div className="mb-2 text-4xl">🧽🧽</div>
                        <div className="text-2xl font-bold text-pink-300">
                          тотя❤️
                        </div>
                        <div className="mt-1 text-xs opacity-70">
                          {video.creator}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition duration-300 group-hover:bg-black/45">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-black transition-transform duration-300 group-hover:scale-110">
                      <Play className="ml-1 h-8 w-8" fill="currentColor" />
                    </div>
                  </div>

                  {/* Platform Badge */}
                  <div className="absolute top-2 left-2">
                    <Badge
                      className={`${platformColors[video.platform]} px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em]`}
                    >
                      {platformIcons[video.platform]}{' '}
                      {video.platform.toUpperCase()}
                    </Badge>
                  </div>

                  {/* Views Badge */}
                  <div className="absolute top-2 right-2">
                    <Badge className="border-white/20 bg-white/10 px-2 py-1 text-[0.65rem] text-white">
                      {video.views} views
                    </Badge>
                  </div>
                </div>

                {/* Video Info */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4">
                  <h3 className="mb-1 line-clamp-2 text-sm font-semibold text-white">
                    {video.title}
                  </h3>
                  <p className="text-xs text-white/70">{video.creator}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-[0_45px_140px_-80px_rgba(109,91,255,0.75)] backdrop-blur-xl">
            <h3 className="mb-6 text-center text-3xl font-semibold text-white">
              🧠 What is TOTR Meme?
            </h3>
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div className="space-y-3 text-sm text-white/70">
                <h4 className="text-lg font-semibold text-white">
                  📅 Origin Story
                </h4>
                <ul className="space-y-2">
                  <li>• Started September 1, 2025 by @ddghfjwiedi3929</li>
                  <li>• Russian "brainrot" meme featuring SpongeBob</li>
                  <li>
                    • Paired with the "Stay" remix (Kid LAROI & Justin Bieber)
                  </li>
                  <li>• 2M+ views within two weeks on TikTok</li>
                </ul>
              </div>
              <div className="space-y-3 text-sm text-white/70">
                <h4 className="text-lg font-semibold text-white">
                  🎨 Key Elements
                </h4>
                <ul className="space-y-2">
                  <li>
                    • Two pantless SpongeBob characters with hypnotic walk
                  </li>
                  <li>• "тотя❤️" glowing typography overlay</li>
                  <li>• Purple / ocean gradient aesthetic</li>
                  <li>• Viral brainrot audio from the "Stay" remix</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Badge className="border-white/20 bg-white/10 px-4 py-2 text-sm text-white">
                💜 Remix it instantly above with our live generator 💜
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-xl"
          onClick={closeModal}
        >
          <div
            className="w-full max-w-4xl max-h-[92vh] overflow-hidden rounded-3xl border border-white/10 bg-[#0b0720] shadow-[0_45px_160px_-80px_rgba(109,91,255,0.8)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-white">
                  {selectedVideo.title}
                </h3>
                <p className="text-sm text-white/60">{selectedVideo.creator}</p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="rounded-full border border-white/10 bg-white/10 p-2 text-white transition hover:border-white/30 hover:bg-white/20"
                aria-label="Close video"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Video Content */}
            <div className="px-6 py-6">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
                <VideoEmbed
                  platform={selectedVideo.platform}
                  videoId={selectedVideo.videoId}
                  tiktokId={selectedVideo.tiktokId}
                  instagramId={selectedVideo.instagramId}
                  embedUrl={selectedVideo.embedUrl}
                  autoplay={true}
                />
              </div>

              <div className="mt-5 space-y-4">
                <p className="text-sm text-white/70">
                  {selectedVideo.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <Badge
                    className={`${platformColors[selectedVideo.platform]} px-3 py-1 text-[0.7rem] uppercase tracking-[0.35em]`}
                  >
                    {platformIcons[selectedVideo.platform]}{' '}
                    {selectedVideo.platform.toUpperCase()}
                  </Badge>
                  <span className="text-white/50">
                    {selectedVideo.views} views
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
