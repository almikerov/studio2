'use client';

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
            <iframe
              src="https://player.vimeo.com/video/1134947669?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&controls=0&loop=1"
              width="1000"
              height="562"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="РИЛЛС_БМВ"
              className="aspect-video"
            ></iframe>
            <iframe
              src="https://player.vimeo.com/video/1134948817?badge=0&autopause=0&player_id=0&app_id=58479&controls=1&autoplay=1&muted=1"
              width="1000"
              height="562"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Презентация_формы_Арсенал"
              className="aspect-video"
            ></iframe>
            <div className="flex w-full max-w-5xl items-center justify-center gap-8">
              <iframe
                src="https://player.vimeo.com/video/1134949655?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=0&controls=1&loop=1"
                width="270"
                height="480"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Анастасия Арека Риллс"
                className="aspect-[9/16]"
              ></iframe>
              <iframe
                src="https://player.vimeo.com/video/1134950469?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=0&controls=1&loop=1"
                width="270"
                height="480"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                title="how are you"
                className="aspect-[9/16]"
              ></iframe>
              <div className="flex flex-col text-left">
                <h2 className="font-headline text-5xl font-bold tracking-tighter text-primary">
                  Рилсы
                </h2>
                <p className="mt-4 max-w-xs text-lg text-foreground/80">
                  Видео для продвижения вашего бренда в социальных сетях
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
