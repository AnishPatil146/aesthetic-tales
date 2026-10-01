"use client";

import { useState } from "react";
import Image from "next/image";
import { videosData, videoCategories, VideoItem } from "@/content/videos";
import VideoModal from "@/components/media/VideoModal";
import { Play, Clock, MapPin, ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/icons";

export default function VideosClient() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const filteredVideos = videosData.filter((v) => {
    if (activeCategory === "ALL") return true;
    return v.category === activeCategory;
  });

  const featuredVideo = videosData.find((v) => v.featured && v.category === "EVENT FILMS") || videosData[0];

  return (
    <div className="pt-28 pb-0 bg-[#0a0a0c]">
      {/* Header */}
      <section className="py-20 md:py-28 bg-[#0a0a0c] border-b border-[#faf8f5]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center space-x-3 text-xs tracking-[0.3em] uppercase text-[#c5a880] font-medium">
              <span className="w-6 h-[1px] bg-[#c5a880]" />
              <span>AESTHETIC TALES CINEMATIC ARCHIVE</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#faf8f5] leading-tight">
              THE STORIES <br />
              <span className="italic text-[#c5a880]">WE&apos;VE CAPTURED.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#c8c2b7] font-light leading-relaxed">
              From full cinematic event films and high-altitude drone reveals to intimate celebration reels and behind-the-scenes transformations.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="pt-12 flex flex-wrap gap-2.5 sm:gap-3" role="tablist" aria-label="Video Categories">
            {videoCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#c5a880] text-[#0a0a0c] font-semibold shadow-md"
                    : "bg-[#121216] border border-[#faf8f5]/10 text-[#c8c2b7] hover:border-[#faf8f5]/30 hover:text-[#faf8f5]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video Banner (Shown on "ALL" or "EVENT FILMS") */}
      {(activeCategory === "ALL" || activeCategory === "EVENT FILMS") && featuredVideo && (
        <section className="py-16 bg-[#0c0c0f] border-b border-[#faf8f5]/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div
              onClick={() => setSelectedVideo(featuredVideo)}
              className="group relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-2xl overflow-hidden bg-[#121216] border border-white/10 cursor-pointer shadow-2xl"
            >
              <Image
                src={featuredVideo.poster}
                alt={featuredVideo.title}
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20" />

              <div className="absolute top-6 left-6 z-10 flex items-center space-x-2">
                <span className="px-3 py-1 rounded-full bg-[#c5a880] text-[#0a0a0c] text-[10px] uppercase tracking-widest font-semibold">
                  FEATURED EVENT FILM
                </span>
                <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] text-white font-mono">
                  {featuredVideo.duration}
                </span>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#c5a880] text-[#0a0a0c] flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 ml-1 fill-current" />
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-10 max-w-2xl space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-[#c5a880]">
                  {featuredVideo.location} · {featuredVideo.year}
                </span>
                <h3 className="font-serif text-2xl sm:text-4xl text-white font-light">
                  {featuredVideo.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#c8c2b7] line-clamp-2">
                  {featuredVideo.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Videos Grid with Editorial Mix */}
      <section className="py-24 bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {filteredVideos.length === 0 ? (
            <div className="py-20 text-center border border-dashed border-[#faf8f5]/10 rounded-xl">
              <p className="font-serif text-xl text-[#faf8f5]">No videos in this category yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVideos.map((video) => {
                const isPortrait = video.orientation === "portrait";

                return (
                  <div
                    key={video.id}
                    onClick={() => setSelectedVideo(video)}
                    className={`group relative cursor-pointer overflow-hidden rounded-xl bg-[#121216] border border-[#faf8f5]/10 hover:border-[#c5a880]/50 transition-all duration-500 shadow-xl flex flex-col justify-between ${
                      isPortrait ? "aspect-[9/16] max-w-[340px] mx-auto w-full" : "aspect-[16/10]"
                    }`}
                  >
                    {/* Poster Thumbnail */}
                    <div className="relative w-full h-full overflow-hidden bg-[#18181c]">
                      <Image
                        src={video.poster}
                        alt={video.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20 group-hover:via-black/20 transition-colors" />

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm border border-white/10 text-[9px] uppercase tracking-widest text-[#faf8f5]">
                          {video.category}
                        </span>

                        <div className="px-2 py-0.5 rounded bg-black/80 text-[10px] tracking-wider text-[#faf8f5] flex items-center space-x-1 font-mono">
                          <Clock className="w-3 h-3 text-[#c5a880]" />
                          <span>{video.duration}</span>
                        </div>
                      </div>

                      {/* Central Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-[#c5a880] text-[#0a0a0c] flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                          <Play className="w-6 h-6 ml-0.5 fill-current" />
                        </div>
                      </div>

                      {/* Bottom Info */}
                      <div className="absolute bottom-0 inset-x-0 p-5 z-10 space-y-1">
                        <div className="flex items-center space-x-2 text-[10px] tracking-wider text-[#c5a880]">
                          <MapPin className="w-3 h-3" />
                          <span>{video.location || "Mumbai"}</span>
                        </div>
                        <h3 className="font-serif text-lg sm:text-xl text-[#faf8f5] group-hover:text-[#c5a880] transition-colors line-clamp-1">
                          {video.title}
                        </h3>
                        <p className="text-xs text-[#c8c2b7] line-clamp-2">
                          {video.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Instagram Stories Callout */}
      <section className="py-20 bg-[#0c0c0f] border-t border-[#faf8f5]/10 text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-4">
          <InstagramIcon className="w-8 h-8 text-[#c5a880] mx-auto" />
          <h2 className="font-serif text-2xl sm:text-3xl text-white font-light">
            FOLLOW THE LATEST STORIES
          </h2>
          <p className="text-xs sm:text-sm text-[#c8c2b7] leading-relaxed">
            See daily setup transformations, floral installations, and real celebration highlights on our official Instagram page.
          </p>
          <div className="pt-2">
            <a
              href="https://www.instagram.com/theaesthetetales/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#c5a880] text-[#0a0a0c] text-xs uppercase tracking-widest font-semibold hover:bg-[#e0ceb7] transition-all"
            >
              <span>FOLLOW @THEAESTHETALES</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Video Modal Player */}
      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
}
