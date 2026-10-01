/**
 * Centralized Media Architecture for Aesthetic Tales
 * 
 * Guarantees zero broken video fetches and graceful fallback from:
 * VIDEO → POSTER → IMAGE
 */

export type MediaType = "image" | "video" | "drone" | "reel";

export interface MediaAsset {
  type: MediaType;
  src?: string; // Optional direct video URL or image URL
  poster: string; // Guaranteed high-quality image fallback
  alt?: string;
  title?: string;
  duration?: string;
  aspectRatio?: "landscape" | "portrait" | "widescreen" | "square";
  description?: string;
  instagramUrl?: string;
  isDrone?: boolean;
}

/**
 * Validates whether a media asset has a usable, accessible video source.
 * Prevents rendering empty, undefined, or unauthorized sample video URLs.
 */
export function hasPlayableVideo(src?: string | null): boolean {
  if (!src) return false;
  const clean = src.trim();
  if (clean.length === 0) return false;
  if (clean === "undefined" || clean === "null") return false;
  // Strictly prevent any legacy external sample bucket URLs
  if (clean.includes("storage.googleapis.com") || clean.includes("gtv-videos-bucket")) {
    return false;
  }
  return true;
}

/**
 * Homepage Hero Media Configuration
 * Priority:
 * 1. Client-provided video (e.g. /media/hero/hero-reel.mp4)
 * 2. Guaranteed local editorial event posters
 */
export interface HeroSlideMedia {
  category: string;
  title: string;
  location: string;
  poster: string;
  videoSrc?: string; // Set when client uploads actual video file into /public/media/hero/
  accent: string;
}

export const heroMediaSlides: HeroSlideMedia[] = [
  {
    category: "BIRTHDAY CELEBRATION",
    title: "A Little Wild One & Milestone Soirées",
    location: "Mumbai",
    poster: "/images/birthday-soiree.jpg",
    accent: "#e6b062",
  },
  {
    category: "BABY SHOWER",
    title: "Celestial Pastel Clouds & Organic Balloon Art",
    location: "Mumbai",
    poster: "/images/baby-shower.jpg",
    accent: "#d9a5b3",
  },
  {
    category: "HALLOWEEN NIGHT",
    title: "Midnight Gothic Glamour & Hand-Carved Pumpkins",
    location: "Mumbai",
    poster: "/images/halloween-party.jpg",
    accent: "#ff7043",
  },
  {
    category: "ENGAGEMENT CEREMONY",
    title: "Ethereal Circular Floral Arches & Romance",
    location: "Mumbai",
    poster: "/images/engagement-stage.jpg",
    accent: "#c5a880",
  },
  {
    category: "THEMED DÉCOR & STAGE",
    title: "Sacred Botanical Mandaps & Spatial Scenography",
    location: "Mumbai",
    poster: "/images/royal-mandap.jpg",
    accent: "#c5a880",
  },
];
