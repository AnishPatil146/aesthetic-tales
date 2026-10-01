"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { videosData, VideoItem } from "@/content/videos";
import VideoModal from "@/components/media/VideoModal";
import { Play, ArrowUpRight, Clock, MapPin } from "lucide-react";

export default function VideoShowcase() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const displayVideos = videosData.slice(0, 3);

  return (
    <section className="py-24 md:py-36 bg-[#0a0a0c] border-t border-[#faf8f5]/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-xs tracking-[0.3em] uppercase text-[#c5a880] font-medium">
              <span className="w-6 h-[1px] bg-[#c5a880]" />
              <span>Motion & Atmosphere</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#faf8f5] tracking-tight">
              CINEMATIC STORIES
            </h2>
          </div>

          <Link
            href="/videos"
            className="inline-flex items-center text-xs uppercase tracking-[0.22em] font-medium text-[#c8c2b7] hover:text-[#c5a880] transition-colors self-start md:self-auto group"
          >
            <span>Watch All Films & Reels</span>
            <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-[#121215] border border-[#faf8f5]/10 hover:border-[#c5a880]/50 transition-all duration-500 shadow-xl flex flex-col justify-between"
            >
              {/* Poster Thumbnail */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#18181c]">
                <Image
                  src={video.poster}
                  alt={video.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-[#0a0a0c]/40 group-hover:bg-[#0a0a0c]/20 transition-colors" />

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded bg-[#0a0a0c]/80 backdrop-blur-sm border border-[#faf8f5]/10 text-[10px] tracking-wider text-[#faf8f5] flex items-center space-x-1">
                  <Clock className="w-3 h-3 text-[#c5a880]" />
                  <span>{video.duration}</span>
                </div>

                {/* Central Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#c5a880] text-[#0a0a0c] flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-6 h-6 ml-0.5 fill-current" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-2">
                <div className="flex items-center space-x-2 text-[10px] tracking-wider text-[#c5a880]">
                  <MapPin className="w-3 h-3" />
                  <span>{video.location || "Mumbai"}</span>
                </div>

                <h3 className="font-serif text-xl text-[#faf8f5] group-hover:text-[#c5a880] transition-colors leading-snug line-clamp-1">
                  {video.title}
                </h3>

                <p className="text-xs text-[#8c867d] line-clamp-2 leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </section>
  );
}
