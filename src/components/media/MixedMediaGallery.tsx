"use client";

import { useState } from "react";
import Image from "next/image";
import { MixedMediaItem } from "@/content/events";
import { VideoItem } from "@/content/videos";
import VideoModal from "./VideoModal";
import { Play, Compass, Film, Camera, Sparkles, X, ChevronLeft, ChevronRight } from "lucide-react";

interface MixedMediaGalleryProps {
  media: MixedMediaItem[];
  title?: string;
  subtitle?: string;
}

export default function MixedMediaGallery({
  media,
  title = "THE DETAILS & MEDIA ARCHIVE",
  subtitle = "A curated mix of photography, films, drone reveals, and celebration moments.",
}: MixedMediaGalleryProps) {
  const [filter, setFilter] = useState<"ALL" | "PHOTO" | "VIDEO" | "DRONE" | "REEL">("ALL");
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  if (!media || media.length === 0) return null;

  const filteredMedia = media.filter((item) => {
    if (filter === "ALL") return true;
    if (filter === "PHOTO") return item.type === "photo";
    if (filter === "VIDEO") return item.type === "video";
    if (filter === "DRONE") return item.type === "drone";
    if (filter === "REEL") return item.type === "reel";
    return true;
  });

  const photoList = media.filter((m) => m.type === "photo");

  const handleItemClick = (item: MixedMediaItem) => {
    if (item.type === "photo") {
      const idx = photoList.findIndex((p) => p.id === item.id);
      setSelectedImageIndex(idx !== -1 ? idx : 0);
    } else {
      setSelectedVideo({
        id: item.id,
        title: item.caption,
        slug: item.id,
        type: item.type === "drone" ? "drone" : item.type === "reel" ? "reel" : "event-film",
        category: item.type === "drone" ? "DRONE" : item.type === "reel" ? "REELS" : "EVENT FILMS",
        thumbnail: item.src,
        poster: item.src,
        videoUrl: item.videoUrl,
        duration: item.duration || "01:00",
        description: item.caption,
        orientation: item.aspectRatio === "portrait" ? "portrait" : "landscape",
        isDrone: item.type === "drone",
      });
    }
  };

  return (
    <section className="py-20 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
              PHOTO + CINEMATIC MEDIA ARCHIVE
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-[#faf8f5] mt-2 tracking-tight">
              {title}
            </h2>
            <p className="text-sm md:text-base text-[#c8c2b7] font-light mt-2 max-w-xl">
              {subtitle}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {(["ALL", "PHOTO", "VIDEO", "DRONE", "REEL"] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-widest transition-all duration-300 ${
                  filter === cat
                    ? "bg-[#c5a880] text-[#0a0a0c] font-semibold shadow-lg"
                    : "bg-[#141418] text-[#c8c2b7] hover:text-[#faf8f5] border border-white/10"
                }`}
              >
                {cat === "ALL" ? "All Media" : cat + "s"}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Mixed Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedia.map((item) => {
            const isVideo = item.type !== "photo";
            const isPortrait = item.aspectRatio === "portrait";

            return (
              <div
                key={item.id}
                onClick={() => handleItemClick(item)}
                className={`group relative overflow-hidden rounded-xl bg-[#141418] border border-white/10 cursor-pointer shadow-lg transition-transform duration-500 hover:-translate-y-1.5 ${
                  isPortrait ? "row-span-2 aspect-[9/16]" : "aspect-[16/10]"
                }`}
              >
                {/* Media Image or Video Poster */}
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Top Badge: Type Indicator */}
                <div className="absolute top-4 left-4 z-10 flex items-center space-x-2">
                  {item.type === "photo" && (
                    <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[9px] uppercase tracking-widest text-[#faf8f5]">
                      <Camera className="w-2.5 h-2.5 text-[#c5a880]" />
                      <span>Photo</span>
                    </span>
                  )}
                  {item.type === "video" && (
                    <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[9px] uppercase tracking-widest text-[#c5a880]">
                      <Film className="w-2.5 h-2.5 text-[#c5a880]" />
                      <span>Film</span>
                    </span>
                  )}
                  {item.type === "drone" && (
                    <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-blue-900/60 backdrop-blur-md border border-blue-400/30 text-[9px] uppercase tracking-widest text-blue-300">
                      <Compass className="w-2.5 h-2.5 text-blue-300" />
                      <span>Drone</span>
                    </span>
                  )}
                  {item.type === "reel" && (
                    <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-purple-900/60 backdrop-blur-md border border-purple-400/30 text-[9px] uppercase tracking-widest text-purple-200">
                      <Sparkles className="w-2.5 h-2.5 text-purple-300" />
                      <span>Reel</span>
                    </span>
                  )}

                  {item.duration && (
                    <span className="px-2 py-0.5 rounded bg-black/60 text-[9px] font-mono text-[#faf8f5]/80">
                      {item.duration}
                    </span>
                  )}
                </div>

                {/* Play Button Indicator for Videos */}
                {isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#c5a880] text-[#0a0a0c] flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">
                      <Play className="w-5 h-5 ml-0.5 fill-current" />
                    </div>
                  </div>
                )}

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10 transition-transform duration-300">
                  <p className="text-xs sm:text-sm font-light text-[#faf8f5] leading-snug line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Video Modal Player */}
      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}

      {/* Fullscreen Image Lightbox for Photos */}
      {selectedImageIndex !== null && photoList[selectedImageIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8 select-none"
          onClick={() => setSelectedImageIndex(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#faf8f5] transition-colors z-20"
            aria-label="Close photo view"
          >
            <X className="w-6 h-6" />
          </button>

          {photoList.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImageIndex(
                    (selectedImageIndex - 1 + photoList.length) % photoList.length
                  );
                }}
                className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-20 transition-colors"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImageIndex(
                    (selectedImageIndex + 1) % photoList.length
                  );
                }}
                className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-20 transition-colors"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
          >
            <div className="relative w-full h-[75vh]">
              <Image
                src={photoList[selectedImageIndex].src}
                alt={photoList[selectedImageIndex].caption}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
            <p className="mt-4 text-xs sm:text-sm text-[#c8c2b7] text-center max-w-xl">
              {photoList[selectedImageIndex].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
