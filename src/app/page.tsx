'use client';

import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import React from 'react';

const AnimatedSection = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-[1200ms] ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
        className
      )}
    >
      {children}
    </div>
  );
};

const videoSources = [
  "https://player.vimeo.com/video/1134947669?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&controls=0&loop=1",
  "https://player.vimeo.com/video/1134948817?badge=0&autopause=0&player_id=0&app_id=58479&controls=1&autoplay=1&muted=1",
  "https://player.vimeo.com/video/1134949655?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&controls=1&loop=1",
  "https://player.vimeo.com/video/1134950469?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&controls=1&loop=1",
  "https://player.vimeo.com/video/1134956178?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1",
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <main className="flex-1">
        <section
          id="hero"
          className="container mx-auto flex min-h-[calc(50vh-4rem)] flex-col items-center justify-center px-4 py-16 text-center"
        >
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Я — Марк
          </h1>
          <p className="mx-auto mt-6 max-w-[700px] text-lg text-foreground/80 md:text-xl">
            Снимаю рекламу, видео, рилсы
          </p>
        </section>

        <section id="videos" className="bg-black pb-20 md:pb-24 lg:pb-32">
          <div className="container mx-auto flex flex-col items-center justify-center gap-8 px-4">
            <div className="w-full max-w-5xl">
              <iframe
                src={videoSources[0]}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                title="РИЛЛС_БМВ"
                className="aspect-video w-full"
                loading="lazy"
              />
            </div>

            <AnimatedSection className="flex flex-col text-center">
              <h2 className="font-headline text-5xl font-bold tracking-tighter text-primary">
                Видео-презентации
              </h2>
            </AnimatedSection>
            
            <div className="w-full max-w-5xl">
              <iframe
                src={videoSources[1]}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Презентация_формы_Арсенал"
                className="aspect-video w-full"
                loading="lazy"
              />
            </div>
            
            <div className="flex w-full max-w-5xl flex-col items-center justify-center gap-8 md:flex-row">
                <div className="order-2 flex flex-col items-center gap-8 md:order-1 md:flex-row">
                  <iframe
                    src={videoSources[2]}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Анастасия Арека Риллс"
                    className="aspect-[9/16] w-full max-w-[300px] md:max-w-xs"
                    loading="lazy"
                  />
                  <iframe
                    src={videoSources[3]}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="how are you"
                    className="aspect-[9/16] w-full max-w-[300px] md:max-w-xs"
                    loading="lazy"
                  />
                </div>
                <AnimatedSection className="order-1 flex flex-col text-center md:order-2 md:text-left">
                  <h2 className="font-headline text-5xl font-bold tracking-tighter text-primary">
                    Рилсы
                  </h2>
                  <p className="mt-4 max-w-xs text-lg text-foreground/80">
                    Видео для продвижения вашего бренда в социальных сетях
                  </p>
                </AnimatedSection>
              </div>


            <AnimatedSection className="flex flex-col text-center pt-12">
              <h2 className="font-headline text-5xl font-bold tracking-tighter text-primary">
                Бэкстейджы
              </h2>
            </AnimatedSection>

            <div className="w-full max-w-5xl">
              <iframe 
                src={videoSources[4]}
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                title="бекстэйдж"
                className="aspect-video w-full"
                loading="lazy"
              />
            </div>
            
            <AnimatedSection className="w-full max-w-5xl text-center pt-12">
              <h2 className="font-headline text-5xl font-bold tracking-tighter text-primary">
                Контакты
              </h2>
              <div className="mt-8 text-lg text-foreground/80 md:text-xl space-y-4">
                <p>ТГ: <a href="https://t.me/markus_media" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">@markus_media</a></p>
                <p>Телефон: +79066264616</p>
                <p>
                  VK: <a href="https://vk.com/markus_mediaa" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">https://vk.com/markus_mediaa</a>
                </p>
              </div>
            </AnimatedSection>

          </div>
        </section>
      </main>
    </div>
  );
}
