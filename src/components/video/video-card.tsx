import Image from 'next/image';
import type { Video } from '@/lib/video-data';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';

export default function VideoCard({ video, onClick }: { video: Video, onClick: () => void }) {
  return (
    <div className="group block cursor-pointer" onClick={onClick}>
      <Card className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:ring-2 hover:ring-primary/50">
        <CardContent className="relative aspect-[3/2] p-0">
          <Image
            src={video.thumbnail}
            alt={`Thumbnail for ${video.title}`}
            fill
            data-ai-hint={video.thumbnail_hint}
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            <PlayCircle className="h-16 w-16 text-white/80 transition-transform duration-300 ease-in-out group-hover:scale-110" />
          </div>
        </CardContent>
        <CardFooter className="p-4">
          <CardTitle className="font-headline text-lg font-medium tracking-tight text-primary">
            {video.title}
          </CardTitle>
        </CardFooter>
      </Card>
    </div>
  );
}
