import { PlaceHolderImages } from './placeholder-images';

export type Video = {
  id: string;
  title: string;
  thumbnail: string;
  thumbnail_width: number;
  thumbnail_height: number;
  thumbnail_hint: string;
  url: string;
};

const imageMap = new Map(PlaceHolderImages.map(img => [img.id, img]));

export const reels: Video[] = [
  {
    id: 'reel-1',
    title: 'Urban Explorer',
    thumbnail: imageMap.get('reel1')?.imageUrl ?? '',
    thumbnail_width: 600,
    thumbnail_height: 400,
    thumbnail_hint: imageMap.get('reel1')?.imageHint ?? 'video reel',
    url: 'https://disk.yandex.com/i/placeholder1',
  },
  {
    id: 'reel-2',
    title: 'Nature\'s Pulse',
    thumbnail: imageMap.get('reel2')?.imageUrl ?? '',
    thumbnail_width: 600,
    thumbnail_height: 400,
    thumbnail_hint: imageMap.get('reel2')?.imageHint ?? 'video reel',
    url: 'https://disk.yandex.com/i/placeholder2',
  },
  {
    id: 'reel-3',
    title: 'Digital Craft',
    thumbnail: imageMap.get('reel3')?.imageUrl ?? '',
    thumbnail_width: 600,
    thumbnail_height: 400,
    thumbnail_hint: imageMap.get('reel3')?.imageHint ?? 'video reel',
    url: 'https://disk.yandex.com/i/placeholder3',
  },
];

export const fullVideos: Video[] = [
  {
    id: 'full-1',
    title: 'Mountain\'s Majesty: A Cinematic Journey',
    thumbnail: imageMap.get('full1')?.imageUrl ?? '',
    thumbnail_width: 600,
    thumbnail_height: 400,
    thumbnail_hint: imageMap.get('full1')?.imageHint ?? 'cinematic video',
    url: 'https://disk.yandex.com/i/placeholder4',
  },
  {
    id: 'full-2',
    title: 'Neon Dreams: A Night in the City',
    thumbnail: imageMap.get('full2')?.imageUrl ?? '',
    thumbnail_width: 600,
    thumbnail_height: 400,
    thumbnail_hint: imageMap.get('full2')?.imageHint ?? 'cinematic video',
    url: 'https://disk.yandex.com/i/placeholder5',
  },
];
