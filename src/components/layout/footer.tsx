import Link from 'next/link';
import { Clapperboard } from 'lucide-react';

const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
    {children}
  </Link>
);

const VimeoIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M2.69 7.43a2.5 2.5 0 0 1-1.2-2.12c0-1.6 1.4-2.8 3.1-2.8 1.8 0 2.8 1.4 2.8 3.2 0 1.2-.5 2.1-1.2 2.7l-1 .7c-.6.5-1.1.9-1.5 1.5.3-2.1 1-3.5 2.3-4.4C8.6 5.13 9.7 4.5 11.2 4.5c2.4 0 3.9 1.4 4.5 3.1.5 1.4.2 3.1-.8 5.2-1.2 2.6-2.5 5.2-4.1 5.2-1.1 0-2.1-.9-3-2.6-.8-1.5-1.4-3.1-1.8-4.5-.4-1.2-.8-2.3-1.3-3.2Z" />
        <path d="M14.5 18c-1 0-1.8-.5-2.3-1.4.3-2.5 1.1-4.2 2.5-5.3 1.2-1.1 2.3-1.8 3.5-1.8 1.4 0 2.3.8 2.3 2.3 0 .9-.5 1.7-1.4 2.2-1.1.5-2.2 1.1-2.2 2.6 0 .5.2.8.6.8.8 0 1.9-1.2 2.9-3.2.9-1.9 1.4-3.5 1.4-4.8 0-2.4-1.4-4.2-4.2-4.2-2.5 0-4.3 1.3-5.5 3.3" />
    </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect width="4" height="12" x="2" y="9"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-secondary/50">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <Link href="/" className="flex items-center gap-2">
          <Clapperboard className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-semibold">VideoVerse</span>
        </Link>
        <p className="text-sm text-muted-foreground">
          &copy; {year} VideoVerse. All rights reserved.
        </p>
        <div className="flex items-center space-x-4">
          <SocialIcon href="#">
            <VimeoIcon className="h-5 w-5" />
          </SocialIcon>
          <SocialIcon href="#">
            <InstagramIcon className="h-5 w-5" />
          </SocialIcon>
          <SocialIcon href="#">
            <LinkedinIcon className="h-5 w-5" />
          </SocialIcon>
        </div>
      </div>
    </footer>
  );
}
