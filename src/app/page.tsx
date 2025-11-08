import Link from 'next/link';
import { ArrowDown, Film, MonitorPlay } from 'lucide-react';
import { reels, fullVideos, type Video } from '@/lib/video-data';
import VideoCard from '@/components/video/video-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function VideoGrid({ videos, id }: { videos: Video[]; id: string }) {
  return (
    <div id={id} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}

export default function Home() {
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
                <VideoGrid videos={reels} id="reels" />
              </div>
              
              <div>
                <div className="mb-8 flex items-center justify-center gap-3">
                  <Film className="h-8 w-8 text-primary" />
                  <h3 className="font-headline text-2xl font-semibold text-primary sm:text-3xl">
                    Full-Length Videos
                  </h3>
                </div>
                <VideoGrid videos={fullVideos} id="full-videos" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
