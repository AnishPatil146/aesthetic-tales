export type VideoType =
  | "event-film"
  | "drone"
  | "highlight"
  | "reel"
  | "behind-the-scenes"
  | "setup"
  | "venue"
  | "decor"
  | "candid"
  | "other";

export type VideoOrientation = "landscape" | "portrait" | "square";

export const videoCategories = [
  "ALL",
  "EVENT FILMS",
  "DRONE",
  "BIRTHDAYS",
  "BABY SHOWERS",
  "ENGAGEMENTS",
  "WEDDINGS",
  "DÉCOR",
  "REELS",
  "BEHIND THE SCENES",
] as const;

export type VideoCategory = (typeof videoCategories)[number];

export interface VideoItem {
  id: string;
  title: string;
  slug: string;
  eventId?: string;
  type: VideoType;
  category: VideoCategory;
  thumbnail: string;
  poster: string;
  videoUrl?: string;
  duration: string;
  description: string;
  featured?: boolean;
  orientation: VideoOrientation;
  order?: number;
  instagramUrl?: string;
  isDrone?: boolean;
  location?: string;
  year?: string;
}

export const videosData: VideoItem[] = [
  {
    id: "vid-featured-1",
    title: "Palace Mandap & Royal Wedding — The Full Event Film",
    slug: "palace-wedding-mandap-film",
    eventId: "palace-wedding-mandap",
    type: "event-film",
    category: "EVENT FILMS",
    thumbnail: "/images/hero-wedding.jpg",
    poster: "/images/hero-wedding.jpg",
    duration: "03:15",
    description: "A monumental cinematic Indian wedding film documenting the emotional sacred phere, Vedic chanting, jasmine chandeliers, petal showers, and royal evening reception under fireworks.",
    featured: true,
    orientation: "landscape",
    order: 1,
    location: "Udaipur · Mumbai",
    year: "2026",
    instagramUrl: "https://www.instagram.com/theaesthetetales/",
  },
  {
    id: "vid-drone-1",
    title: "From Above: The Palace Mandap & Lake Panorama",
    slug: "palace-mandap-lake-drone",
    eventId: "palace-wedding-mandap",
    type: "drone",
    category: "DRONE",
    thumbnail: "/images/royal-mandap.jpg",
    poster: "/images/royal-mandap.jpg",
    duration: "01:25",
    description: "Aerial sweep across the illuminated palace courtyards, the geometric floral mandap pavilion, and mirror reflections across the lake.",
    featured: true,
    isDrone: true,
    orientation: "landscape",
    order: 2,
    location: "Udaipur · Mumbai",
    year: "2026",
  },
  {
    id: "vid-2",
    title: "Royal Sangeet & Cocktail Soirée — Cinematic Event Film",
    slug: "royal-sangeet-cocktail-film",
    eventId: "royal-sangeet-cocktail",
    type: "event-film",
    category: "WEDDINGS",
    thumbnail: "/images/champagne-tower.jpg",
    poster: "/images/champagne-tower.jpg",
    duration: "02:45",
    description: "The complete cinematic story of an enchanting Indian pre-wedding soirée in Alibaug — from sunset cocktails and seven-tier champagne cascades to electrifying family sangeet dances.",
    featured: true,
    orientation: "landscape",
    order: 3,
    location: "Alibaug · Mumbai",
    year: "2026",
    instagramUrl: "https://www.instagram.com/theaesthetetales/",
  },
  {
    id: "vid-3",
    title: "Ethereal Sunset Engagement — Ceremony Film",
    slug: "ethereal-sunset-engagement-film",
    eventId: "ethereal-sunset-engagement",
    type: "event-film",
    category: "ENGAGEMENTS",
    thumbnail: "/images/engagement-stage.jpg",
    poster: "/images/engagement-stage.jpg",
    duration: "02:30",
    description: "Ring exchange ceremony framed by a double circular floral arch overlooking Mumbai's golden sunset, followed by romantic champagne toasts.",
    featured: true,
    orientation: "landscape",
    order: 4,
    location: "Mumbai",
    year: "2026",
    instagramUrl: "https://www.instagram.com/theaesthetetales/",
  },
  {
    id: "vid-4",
    title: "A Little Wild One — First Birthday Film",
    slug: "wild-one-birthday-film",
    eventId: "a-little-wild-one",
    type: "event-film",
    category: "BIRTHDAYS",
    thumbnail: "/images/birthday-soiree.jpg",
    poster: "/images/birthday-soiree.jpg",
    duration: "02:10",
    description: "Whimsical safari wonders meets chic pastel luxury in Mumbai: custom tiered plinths, sensory kids' activities, and joyful milestone memories.",
    orientation: "landscape",
    order: 5,
    location: "Mumbai",
    year: "2026",
  },
  {
    id: "vid-5",
    title: "Celestial Bloom — Baby Shower Film",
    slug: "celestial-bloom-baby-shower-film",
    eventId: "celestial-bloom-baby-shower",
    type: "event-film",
    category: "BABY SHOWERS",
    thumbnail: "/images/baby-shower.jpg",
    poster: "/images/baby-shower.jpg",
    duration: "02:00",
    description: "Intimate pastel balloon clouds, fresh hydrangea arches, dessert table styling, and mother-to-be blessings.",
    orientation: "landscape",
    order: 6,
    location: "Mumbai",
    year: "2026",
  },
  {
    id: "vid-6",
    title: "From Above: Sunset Ridge Engagement Aerial Panorama",
    slug: "sunset-ridge-engagement-drone",
    eventId: "ethereal-sunset-engagement",
    type: "drone",
    category: "DRONE",
    thumbnail: "/images/engagement-stage.jpg",
    poster: "/images/engagement-stage.jpg",
    duration: "01:30",
    description: "Aerial cinematography tracking the circular floral stage, coastal cliffs, and Arabian sea glowing at dusk.",
    isDrone: true,
    orientation: "landscape",
    order: 7,
    location: "Mumbai",
    year: "2026",
  },
  {
    id: "vid-7",
    title: "Botanical Mandap & Temple Bell Scenography",
    slug: "botanical-mandap-scenography-film",
    eventId: "botanical-mandap-scenography",
    type: "decor",
    category: "DÉCOR",
    thumbnail: "/images/royal-mandap.jpg",
    poster: "/images/royal-mandap.jpg",
    duration: "02:15",
    description: "Over 500 kg of fresh jasmine, rajnigandha, lotus buds, and brass temple bells captured in morning sunlight.",
    orientation: "landscape",
    order: 8,
    location: "Mumbai",
    year: "2026",
  },
  {
    id: "vid-8",
    title: "Twilight Garden Canopy — 25th Anniversary Film",
    slug: "twilight-garden-anniversary-film",
    eventId: "candlelit-garden-dinner",
    type: "event-film",
    category: "EVENT FILMS",
    thumbnail: "/images/garden-soiree.jpg",
    poster: "/images/garden-soiree.jpg",
    duration: "01:45",
    description: "Under a canopy of 10,000 golden fairy lights, family toasts and acoustic cello melodies for a silver anniversary.",
    orientation: "landscape",
    order: 9,
    location: "Mumbai",
    year: "2026",
  },
  {
    id: "vid-reel-1",
    title: "Mandap Jasmine Chandelier Installation",
    slug: "mandap-jasmine-chandelier-reel",
    type: "reel",
    category: "REELS",
    thumbnail: "/images/styling-flatlay.jpg",
    poster: "/images/styling-flatlay.jpg",
    duration: "00:40",
    description: "Watch our artisans string fresh temple mogra and suspend brass bells for the sacred mandap.",
    orientation: "portrait",
    order: 10,
    instagramUrl: "https://www.instagram.com/theaesthetetales/",
  },
  {
    id: "vid-reel-2",
    title: "Seven-Tier Champagne Coupe Tower Pour",
    slug: "champagne-tower-pour-reel",
    type: "reel",
    category: "REELS",
    thumbnail: "/images/champagne-tower.jpg",
    poster: "/images/champagne-tower.jpg",
    duration: "00:35",
    description: "Celebratory pour over 7 tiers of crystal glasses during the sangeet cocktail reception.",
    orientation: "portrait",
    order: 11,
    instagramUrl: "https://www.instagram.com/theaesthetetales/",
  },
  {
    id: "vid-reel-3",
    title: "Pastel Balloon Cloud Room Transformation",
    slug: "pastel-balloon-cloud-reel",
    type: "reel",
    category: "REELS",
    thumbnail: "/images/baby-shower.jpg",
    poster: "/images/baby-shower.jpg",
    duration: "00:30",
    description: "Organic balloon sculpting and shimmer arch assembly for a magical baby shower reveal.",
    orientation: "portrait",
    order: 12,
    instagramUrl: "https://www.instagram.com/theaesthetetales/",
  },
  {
    id: "vid-bts-1",
    title: "Hand-Wiring 1,500 Colombian Roses: The Engagement Stage Build",
    slug: "hand-wiring-roses-bts",
    eventId: "ethereal-sunset-engagement",
    type: "behind-the-scenes",
    category: "BEHIND THE SCENES",
    thumbnail: "/images/floral-arch.jpg",
    poster: "/images/floral-arch.jpg",
    duration: "01:50",
    description: "Close-up craftsmanship documenting our floral artisans conditioning and installing exotic blush orchids and heritage roses onto structural arches.",
    orientation: "landscape",
    order: 13,
    location: "Mumbai",
    year: "2026",
  },
  {
    id: "vid-bts-2",
    title: "18-Hour Transformation: Empty Hall to Grand Celebration",
    slug: "empty-hall-to-celebration-bts",
    eventId: "royal-sangeet-cocktail",
    type: "behind-the-scenes",
    category: "BEHIND THE SCENES",
    thumbnail: "/images/tablescape.jpg",
    poster: "/images/tablescape.jpg",
    duration: "02:30",
    description: "A fast-paced time-lapse showing our crew staging heavy drapery, ceiling lighting rigs, and tablescape settings.",
    orientation: "landscape",
    order: 14,
    location: "Mumbai",
    year: "2026",
  },
];
