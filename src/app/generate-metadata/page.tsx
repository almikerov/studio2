import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import MetadataGenerator from '@/components/forms/metadata-generator';
import { Bot } from 'lucide-react';

export default function GenerateMetadataPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-secondary/50">
        <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center">
              <Bot className="mx-auto h-12 w-12 text-primary" />
              <h1 className="font-headline mt-4 text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
                AI Metadata Generator
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
                Instantly generate captivating titles, descriptions, and tags for your videos. Just provide some details about your content, and let our AI do the rest.
              </p>
            </div>
            <MetadataGenerator />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
