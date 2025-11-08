import Link from 'next/link';
import { ArrowDown, Film, Mail, MonitorPlay } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { reels, fullVideos, type Video } from '@/lib/video-data';
import VideoCard from '@/components/video/video-card';
import ContactForm from '@/components/forms/contact-form';
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
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section
          id="hero"
          className="container mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-16 text-center"
        >
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Crafting Stories, Frame by Frame
          </h1>
          <p className="mx-auto mt-6 max-w-[700px] text-lg text-foreground/80 md:text-xl">
            A passionate videographer dedicated to capturing life's moments with a cinematic touch. Explore my work and let's create something beautiful together.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="#videos">
                View My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        <section id="videos" className="bg-secondary/50 py-20 md:py-24 lg:py-32">
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

        <section id="contact" className="py-20 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <Card className="mx-auto max-w-2xl overflow-hidden shadow-lg">
              <CardHeader className="bg-primary p-8 text-center text-primary-foreground">
                <Mail className="mx-auto h-12 w-12" />
                <CardTitle className="font-headline mt-4 text-3xl font-bold">Get In Touch</CardTitle>
                <p className="mt-2 text-primary-foreground/80">
                  Have a project in mind? I'd love to hear from you.
                </p>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
