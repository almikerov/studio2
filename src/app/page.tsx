'use client';

import { useState } from 'react';
import { Film, MonitorPlay } from 'lucide-react';
import { reels, fullVideos, type Video } from '@/lib/video-data';
import VideoCard from '@/components/video/video-card';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';

function VideoGrid({
  videos,
  id,
  onVideoClick,
}: {
  videos: Video[];
  id: string;
  onVideoClick: (video: Video) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {videos.map(video => (
        <VideoCard key={video.id} video={video} onClick={() => onVideoClick(video)} />
      ))}
    </div>
  );
}

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const handleVideoClick = (video: Video) => {
    setSelectedVideo(video);
  };

  const handleCloseDialog = () => {
    setSelectedVideo(null);
  };
  
  const getEmbedUrl = (url: string) => {
    if (url.includes('yandex.ru/d/')) {
        const parts = url.split('yandex.ru/d/');
        const publicPath = parts[1];
        try {
            // The path is already URI encoded, but the embed needs it to be decoded first
            const decodedPath = decodeURIComponent(publicPath);
            return `https://disk.yandex.ru/client/disk/` + decodedPath;
        } catch (e) {
            console.error("Error decoding URI component: ", e);
            // Fallback to a simpler replacement if decoding fails
            return url.replace('yandex.ru/d/', 'yandex.ru/client/disk/');
        }
    }
    // Handle older yandex.com/i/ format
    return url.replace('yandex.com/i/', 'yandex.com/embed/');
  };


  return (
    <div className="flex min-h-screen flex-col bg-black">
      <main className="flex-1">
        <section
          id="hero"
          className="container mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-16 text-center"
        >
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Я - Марк
          </h1>
          <p className="mx-auto mt-6 max-w-[700px] text-lg text-foreground/80 md:text-xl">
            Я видеограф, снимаю рекламу, видео, рилсы
          </p>
        </section>

        <section id="videos" className="bg-black py-20 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="mb-12 flex flex-col items-center text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
                My Work
              </h2>
              <p className="mt-4 max-w-2xl text-foreground/80 md:text-lg">
                A collection of my recent projects, from short and snappy reels to full-length cinematic features.
              </p>
            </div>

            <div className="space-y-16">
              <div>
                <div className="mb-8 flex items-center justify-center gap-3">
                  <MonitorPlay className="h-8 w-8 text-primary" />
                  <h3 className="font-headline text-2xl font-semibold text-primary sm:text-3xl">
                    Reels
                  </h3>
                </div>
                <VideoGrid videos={reels} id="reels" onVideoClick={handleVideoClick} />
              </div>

              <div>
                <div className="mb-8 flex items-center justify-center gap-3">
                  <Film className="h-8 w-8 text-primary" />
                  <h3 className="font-headline text-2xl font-semibold text-primary sm:text-3xl">
                    Full-Length Videos
                  </h3>
                </div>
                <VideoGrid videos={fullVideos} id="full-videos" onVideoClick={handleVideoClick} />
              </div>
            </div>
          </div>
        </section>
      </main>
      {selectedVideo && (
        <Dialog open={!!selectedVideo} onOpenChange={handleCloseDialog}>
          <DialogContent className="max-w-4xl p-0">
             <div className="aspect-video">
                <iframe
                    key={selectedVideo.id}
                    src={getEmbedUrl(selectedVideo.url)}
                    width="100%"
                    height="100%"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="border-0"
                ></iframe>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
