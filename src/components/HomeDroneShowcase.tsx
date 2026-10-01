"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { videosData, VideoItem } from "@/content/videos";
import { ArrowUpRight, Play, Video } from "lucide-react";
import VideoModal from "@/components/media/VideoModal";

export default function HomeDroneShowcase() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  // Find featured drone video
  const droneVideo =
    videosData.find((v) => v.isDrone && v.featured) ||
    videosData.find((v) => v.type === "drone") ||
    videosData[0];

  if (!droneVideo) return null;

  return (
    <section className="py-24 md:py-36 bg-[#070708] border-t border-[#faf8f5]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-xs tracking-[0.3em] uppercase text-[#c5a880] font-medium">
              <span className="w-6 h-[1px] bg-[#c5a880]" />
              <span>AERIAL CINEMATOGRAPHY</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#faf8f5] tracking-tight">
              FROM ABOVE
            </h2>
            <p className="text-xs sm:text-sm text-[#8c867d] max-w-xl">
              Capturing the grand scale, sacred geometry, and expansive beauty of our celebration venues across India.
            </p>
          </div>

          <Link
            href="/videos?category=DRONE"
            className="inline-flex items-center text-xs uppercase tracking-[0.22em] font-medium text-[#c8c2b7] hover:text-[#c5a880] transition-colors self-start md:self-auto group"
          >
            <span>Explore All Drone Films</span>
            <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Full-Width Cinematic Drone Hero Box */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-sm overflow-hidden border border-[#faf8f5]/15 shadow-2xl group bg-[#0a0a0c]">
          <Image
            src={droneVideo.poster}
            alt={droneVideo.title}
            fill
            sizes="(max-width: 1200px) 100vw, 1280px"
            className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-transparent to-[#070708]/40" />

          {/* Top Drone Specs Badge */}
          <div className="absolute top-6 left-6 flex items-center space-x-2">
            <span className="px-3 py-1 rounded-full bg-[#0a0a0c]/80 backdrop-blur-md border border-[#c5a880]/30 text-[10px] uppercase tracking-widest text-[#c5a880] font-mono flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880] animate-pulse mr-2" />
              4K 60FPS · Aerial Drone Perspective
            </span>
          </div>

          {/* Centered Play Button */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <button
              type="button"
              onClick={() => setActiveVideo(droneVideo)}
              className="pointer-events-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0a0a0c]/80 backdrop-blur-md border border-[#c5a880]/60 text-[#faf8f5] hover:text-[#c5a880] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-[#c5a880] shadow-2xl group/play cursor-pointer"
              aria-label={`Play ${droneVideo.title}`}
            >
              <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current ml-1 transition-transform group-hover/play:scale-110" />
            </button>
          </div>

          {/* Bottom Narrative Overlay */}
          <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1.5 max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-medium">
                {droneVideo.location} · {droneVideo.year}
              </span>
              <h3 className="font-serif text-xl sm:text-3xl text-[#faf8f5] font-light">
                {droneVideo.title}
              </h3>
              <p className="text-xs text-[#c8c2b7] font-light line-clamp-2 hidden sm:block">
                {droneVideo.description}
              </p>
            </div>

            <div className="flex items-center space-x-3 shrink-0">
              <span className="text-xs text-[#8c867d] font-mono">{droneVideo.duration}</span>
              <button
                type="button"
                onClick={() => setActiveVideo(droneVideo)}
                className="px-4 py-2 rounded-full bg-[#c5a880] text-[#0a0a0c] text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-[#e0ceb7] transition-all flex items-center space-x-1.5 cursor-pointer"
              >
                <Video className="w-3.5 h-3.5" />
                <span>Watch Aerial Film</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Trigger */}
      {activeVideo && (
        <VideoModal
          video={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </section>
  );
}
