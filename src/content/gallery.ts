export const galleryCategories = [
  "ALL",
  "BIRTHDAYS",
  "BABY SHOWERS",
  "ENGAGEMENTS",
  "WEDDINGS",
  "DÉCOR",
  "CELEBRATIONS",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  location: string;
  image: string;
  caption: string;
  aspect: "landscape" | "portrait" | "panoramic" | "square";
  eventSlug?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Wild One First Birthday Scenography",
    category: "BIRTHDAYS",
    location: "Mumbai",
    image: "/images/birthday-soiree.jpg",
    caption: "Bespoke tiered cake table and organic balloon installation.",
    aspect: "landscape",
    eventSlug: "a-little-wild-one",
  },
  {
    id: "gal-2",
    title: "Sacred Architectural Mandap at Twilight",
    category: "WEDDINGS",
    location: "Udaipur · Mumbai",
    image: "/images/hero-wedding.jpg",
    caption: "Four-pillar sacred geometric mandap woven with fresh jasmine and temple brass bells.",
    aspect: "landscape",
    eventSlug: "palace-wedding-mandap",
  },
  {
    id: "gal-3",
    title: "Celestial Pastel Baby Shower Arch",
    category: "BABY SHOWERS",
    location: "Mumbai",
    image: "/images/baby-shower.jpg",
    caption: "Organic pastel balloon and fresh hydrangea archway with illuminated celebration script.",
    aspect: "landscape",
    eventSlug: "celestial-bloom-baby-shower",
  },
  {
    id: "gal-4",
    title: "Circular Floral Engagement Stage",
    category: "ENGAGEMENTS",
    location: "Mumbai",
    image: "/images/engagement-stage.jpg",
    caption: "Circular double floral arch and candle lanterns for an intimate Indian ring ceremony.",
    aspect: "landscape",
    eventSlug: "ethereal-sunset-engagement",
  },
  {
    id: "gal-5",
    title: "Royal Sangeet Champagne Coupe Tower",
    category: "WEDDINGS",
    location: "Alibaug · Mumbai",
    image: "/images/champagne-tower.jpg",
    caption: "Seven-tier crystal coupe champagne tower with celebratory pour for the pre-wedding soirée.",
    aspect: "portrait",
    eventSlug: "royal-sangeet-cocktail",
  },
  {
    id: "gal-6",
    title: "Sacred Botanical Mandap & Floral Bells",
    category: "DÉCOR",
    location: "Mumbai",
    image: "/images/royal-mandap.jpg",
    caption: "Hand-woven fresh jasmine, tuberose pillars, and temple brass bells.",
    aspect: "landscape",
    eventSlug: "botanical-mandap-scenography",
  },
  {
    id: "gal-7",
    title: "Monochromatic Stone Tablescape",
    category: "DÉCOR",
    location: "Mumbai",
    image: "/images/tablescape.jpg",
    caption: "Smoked glassware, tapered beeswax candles, and custom stoneware chargers.",
    aspect: "landscape",
    eventSlug: "minimalist-tablescape-soiree",
  },
  {
    id: "gal-8",
    title: "Twilight Garden Canopy Celebration",
    category: "CELEBRATIONS",
    location: "Mumbai",
    image: "/images/garden-soiree.jpg",
    caption: "10,000 fairy lights suspended over an intimate 50-foot wooden anniversary banquet.",
    aspect: "landscape",
    eventSlug: "candlelit-garden-dinner",
  },
  {
    id: "gal-9",
    title: "Grand Tuberose Entrance Portal",
    category: "DÉCOR",
    location: "Mumbai",
    image: "/images/floral-arch.jpg",
    caption: "Aromatic rajnigandha and marigold entrance tunnel with soft candlelight glow.",
    aspect: "portrait",
    eventSlug: "ethereal-sunset-engagement",
  },
  {
    id: "gal-10",
    title: "Pre-Wedding Palace Golden Hour Portrait",
    category: "WEDDINGS",
    location: "Udaipur",
    image: "/images/couple-palace.jpg",
    caption: "Couple in traditional bridal attire against the lake palace heritage terrace.",
    aspect: "landscape",
    eventSlug: "palace-wedding-mandap",
  },
  {
    id: "gal-11",
    title: "Artisanal Stationery & Ritual Platters",
    category: "DÉCOR",
    location: "Mumbai",
    image: "/images/styling-flatlay.jpg",
    caption: "Hand-calligraphed menu scrolls, wax seals, and sacred brass bell detailing.",
    aspect: "square",
    eventSlug: "botanical-mandap-scenography",
  },
];
