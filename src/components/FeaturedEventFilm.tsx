"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Film, Eye } from "lucide-react";
import VideoPlayer from "@/components/media/VideoPlayer";
import VideoModal from "@/components/media/VideoModal";
import { videosData, VideoItem } from "@/content/videos";

export default function FeaturedEventFilm() {
  const featuredVideo =
    videosData.find((v) => v.id === "vid-featured-1") || videosData[0];
  const [modalVideo, setModalVideo] = useState<VideoItem | null>(null);

  if (!featuredVideo) return null;

  return (
    <section className="relative py-28 bg-[#0a0a0c] border-t border-[#faf8f5]/10 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#c5a880]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#faf8f5]/10 border border-[#faf8f5]/15 text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
              <Film className="w-3 h-3 text-[#c5a880]" />
              <span>FEATURED EVENT · CINEMATIC PRODUCTION FILM</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#faf8f5] tracking-tight">
              A Celebration Worth Remembering
            </h2>

            <p className="text-sm md:text-base text-[#c8c2b7] font-light max-w-xl leading-relaxed">
              Experience the atmosphere, sacred geometry, and celebratory joy of our signature events captured through editorial cinematography.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href={`/events/${featuredVideo.eventId || "palace-wedding-mandap"}`}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#faf8f5]/10 hover:bg-[#c5a880] hover:text-[#0a0a0c] border border-white/15 text-[#faf8f5] text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 group"
            >
              <span>EXPLORE EVENT CASE STUDY</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Visually Dominant Cinematic Video Player */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#121216]">
          <VideoPlayer
            src={featuredVideo.videoUrl}
            poster={featuredVideo.poster || featuredVideo.thumbnail}
            title={featuredVideo.title}
            duration={featuredVideo.duration}
            aspectRatio="landscape"
            loop={true}
            autoPlay={false}
            showDevBadge={true}
            className="w-full"
          />
        </div>

        {/* Information Bar Below Video */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-[#8c867d]">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#faf8f5]/50 block">
                EVENT
              </span>
              <span className="font-serif text-base text-[#faf8f5] font-light">
                {featuredVideo.title.split("—")[0]}
              </span>
            </div>

            <div className="hidden sm:block w-px h-6 bg-white/10" />

            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#faf8f5]/50 block">
                CATEGORY & LOCATION
              </span>
              <span className="text-[#c8c2b7]">
                {featuredVideo.category} · {featuredVideo.location || "Mumbai"} · {featuredVideo.year || "2026"}
              </span>
            </div>

            <div className="hidden sm:block w-px h-6 bg-white/10" />

            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#faf8f5]/50 block">
                DURATION
              </span>
              <span className="text-[#c5a880] font-mono">
                {featuredVideo.duration} · Full 4K
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={() => setModalVideo(featuredVideo)}
              className="inline-flex items-center space-x-1.5 text-xs text-[#c5a880] hover:text-white transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Open in Fullscreen Cinema</span>
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal Lightbox */}
      {modalVideo && (
        <VideoModal
          video={modalVideo}
          onClose={() => setModalVideo(null)}
        />
      )}
    </section>
  );
}
