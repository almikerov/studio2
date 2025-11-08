'use client';

import { useState } from 'react';
import { Film, MonitorPlay } from 'lucide-react';
import { reels, fullVideos, type Video } from '@/lib/video-data';
import VideoCard from '@/components/video/video-card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
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
    if (url.includes('youtube.com/watch')) {
      const videoId = new URL(url).searchParams.get('v');
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes('drive.google.com')) {
      // Assuming the URL is a shareable link, we need to extract the file ID and format it for embedding.
      // e.g., https://drive.google.com/file/d/FILE_ID/view?usp=sharing -> https://drive.google.com/embed?id=FILE_ID
      const parts = url.split('/');
      const fileId = parts[parts.indexOf('d') + 1];
      return `https://drive.google.com/embed?id=${fileId}`;
    }
    // Extracts the public key from a Yandex.Disk URL
    try {
      const urlObject = new URL(url);
      if (urlObject.hostname === 'disk.yandex.ru') {
         // For urls like https://disk.yandex.ru/i/HnN96P7IJhmUQ
        const pathParts = urlObject.pathname.split('/');
        const publicKey = pathParts[pathParts.length - 1];
        if (publicKey) {
          return `https://disk.yandex.ru/client/disk/public?id=${urlObject.pathname}&id-dialog=player`;
        }
      }
    } catch (e) {
      console.error('Invalid URL for video:', url, e);
    }
    return url;
  };


  return (
    <div className="flex min-h-screen flex-col bg-black">
      <main className="flex-1">
        <section
          id="hero"
          className="container mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-16 text-center"
        >
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Я — Марк
          </h1>
          <p className="mx-auto mt-6 max-w-[700px] text-lg text-foreground/80 md:text-xl">
            Снимаю рекламу, видео, рилсы
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
        <Dialog open={!!selectedVideo} onOpenChange={(isOpen) => !isOpen && handleCloseDialog()}>
          <DialogContent className="max-w-4xl p-0">
            <DialogHeader>
              <DialogTitle className="sr-only">Playing video: {selectedVideo.title}</DialogTitle>
              <DialogDescription className="sr-only">An embedded video player for the selected video.</DialogDescription>
            </DialogHeader>
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
