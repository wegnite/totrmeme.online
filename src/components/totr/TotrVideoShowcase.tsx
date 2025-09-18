'use client';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ExternalLink, Play, TrendingUp } from 'lucide-react';
import { useState } from 'react';

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
  },
  {
    id: 'tt-fearlessfigures',
    title: 'TOTЯ ❤️ Original TikTok Upload',
    platform: 'tiktok',
    creator: '@fearlessfigures',
    description:
      'The hugely shared TikTok where the double SpongeBobs glide in with glowing “тотя❤️” typography.',
    views: '8.4M+',
    embedUrl: 'https://www.tiktok.com/@fearlessfigures/video/7549201922935246110',
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

  return (
    <>
      <section className="py-12 bg-gradient-to-b from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <TrendingUp className="w-6 h-6 text-pink-500" />
              <Badge variant="secondary" className="text-sm font-semibold">
                VIRAL CONTENT
              </Badge>
            </div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              🔥 Real TOTR Videos Going Viral
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Watch the actual viral videos! Click any thumbnail to see the real
              TikTok and YouTube content that made TOTR famous.
            </p>
          </div>

          {/* Video Grid with Thumbnails */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {videoData.map((video) => (
              <div
                key={video.id}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => handleVideoClick(video)}
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-gray-900 overflow-hidden">
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
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) {
                            fallback.classList.remove('hidden');
                          }
                        }}
                      />

                      <div className="absolute inset-0 hidden bg-gradient-to-b from-purple-900 via-blue-900 to-purple-900 items-center justify-center">
                        <div className="text-center text-white">
                          <div className="text-4xl mb-2">🧽🧽</div>
                          <div className="text-2xl font-bold text-pink-300">
                            тотя❤️
                          </div>
                          <div className="text-xs mt-1 opacity-70">
                            {video.creator}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-blue-900 to-purple-900 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-4xl mb-2">🧽🧽</div>
                        <div className="text-2xl font-bold text-pink-300">
                          тотя❤️
                        </div>
                        <div className="text-xs mt-1 opacity-70">{video.creator}</div>
                      </div>
                    </div>
                  )}

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-all duration-300">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play
                        className="w-8 h-8 text-black ml-1"
                        fill="currentColor"
                      />
                    </div>
                  </div>

                  {/* Platform Badge */}
                  <div className="absolute top-2 left-2">
                    <Badge
                      className={`${platformColors[video.platform]} text-xs px-2 py-1`}
                    >
                      {platformIcons[video.platform]}{' '}
                      {video.platform.toUpperCase()}
                    </Badge>
                  </div>

                  {/* Views Badge */}
                  <div className="absolute top-2 right-2">
                    <Badge
                      variant="secondary"
                      className="bg-black/50 text-white border-none text-xs px-2 py-1"
                    >
                      {video.views} views
                    </Badge>
                  </div>
                </div>

                {/* Video Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <h3 className="text-white font-semibold text-sm line-clamp-2 mb-1">
                    {video.title}
                  </h3>
                  <p className="text-white/80 text-xs">{video.creator}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">
              🧠 What is TOTR Meme?
            </h3>
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h4 className="font-semibold mb-3 text-lg">📅 Origin Story</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>• Started September 1, 2025 by @ddghfjwiedi3929</li>
                  <li>• Russian "brainrot" meme featuring SpongeBob</li>
                  <li>
                    • Paired with "Stay" by Kid LAROI & Justin Bieber remix
                  </li>
                  <li>• 2M+ views in just 2 weeks on TikTok</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-lg">🎨 Key Elements</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>• Two naked SpongeBob characters</li>
                  <li>• "тотя❤️" text overlay</li>
                  <li>• Purple/ocean aesthetic</li>
                  <li>• Viral audio from "Stay" remix</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Badge variant="outline" className="text-sm">
                💜 Now create your own TOTR meme with our generator above! 💜
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div>
                <h3 className="text-xl font-bold">{selectedVideo.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {selectedVideo.creator}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Video Content */}
            <div className="p-6">
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                {selectedVideo.platform === 'youtube' ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : selectedVideo.platform === 'tiktok' ? (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-purple-900 via-blue-900 to-purple-900">
                    <div className="text-center">
                      <div className="text-8xl mb-4">🧽🧽</div>
                      <div className="text-4xl font-bold mb-4 text-pink-300">
                        тотя❤️
                      </div>
                      <div className="text-white mb-4">
                        Click below to watch on TikTok
                      </div>
                      <a
                        href={selectedVideo.embedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
                      >
                        <Play className="w-5 h-5" />
                        Watch on TikTok
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ) : selectedVideo.platform === 'instagram' ? (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900">
                    <div className="text-center text-white">
                      <div className="text-7xl mb-4">📸</div>
                      <p className="text-lg font-semibold mb-4">
                        Open Instagram to view the full TOTЯ reel.
                      </p>
                      <a
                        href={selectedVideo.embedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 text-purple-700 rounded-lg hover:bg-white transition-colors"
                      >
                        <Play className="w-5 h-5" />
                        View on Instagram
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="mt-4">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {selectedVideo.description}
                </p>
                <div className="flex items-center justify-between">
                  <Badge className={platformColors[selectedVideo.platform]}>
                    {platformIcons[selectedVideo.platform]}{' '}
                    {selectedVideo.platform.toUpperCase()}
                  </Badge>
                  <span className="text-sm text-gray-500">
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
