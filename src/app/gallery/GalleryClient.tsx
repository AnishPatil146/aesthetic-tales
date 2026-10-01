"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { galleryCategories, galleryItems, GalleryCategory } from "@/content/gallery";
import ImageLightbox from "@/components/ImageLightbox";
import { Maximize2, ArrowUpRight } from "lucide-react";

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("ALL");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredItems = galleryItems.filter((item) => {
    if (activeCategory === "ALL") return true;
    return item.category === activeCategory;
  });

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  const lightboxImages = filteredItems.map((item) => ({
    url: item.image,
    caption: item.caption,
    title: item.title,
  }));

  return (
    <div className="pt-28 pb-0">
      {/* Header */}
      <section className="py-20 md:py-28 bg-[#0a0a0c] border-b border-[#faf8f5]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center space-x-3 text-xs tracking-[0.3em] uppercase text-[#c5a880] font-medium">
              <span className="w-6 h-[1px] bg-[#c5a880]" />
              <span>VISUAL PHOTOGRAPHY ARCHIVE</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#faf8f5] leading-tight">
              CELEBRATION <br />
              <span className="italic text-[#c5a880]">GALLERY.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#c8c2b7] font-light leading-relaxed">
              Explore our visual anthology of birthdays, baby showers, engagements, ring ceremonies, weddings, and bespoke event styling across India.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="pt-12 flex flex-wrap gap-2.5 sm:gap-3" role="tablist" aria-label="Gallery Categories">
            {galleryCategories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all cursor-pointer ${
                  activeCategory === category
                    ? "bg-[#c5a880] text-[#0a0a0c] font-semibold shadow-md"
                    : "bg-[#121216] border border-[#faf8f5]/10 text-[#c8c2b7] hover:border-[#faf8f5]/30 hover:text-[#faf8f5]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry / Editorial Grid */}
      <section className="py-24 bg-[#0c0c0f]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {filteredItems.length === 0 ? (
            <div className="py-20 text-center border border-dashed border-[#faf8f5]/10 rounded-sm">
              <p className="font-serif text-xl text-[#faf8f5]">No images found in this category.</p>
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {filteredItems.map((item, idx) => {
                const aspectClass =
                  item.aspect === "panoramic"
                    ? "aspect-[16/9]"
                    : item.aspect === "portrait"
                    ? "aspect-[3/4]"
                    : "aspect-[4/3]";

                return (
                  <div
                    key={item.id}
                    onClick={() => openLightbox(idx)}
                    className="break-inside-avoid group relative cursor-pointer overflow-hidden rounded-sm bg-[#121216] border border-[#faf8f5]/10 hover:border-[#c5a880]/50 transition-all duration-300 shadow-md"
                  >
                    <div className={`relative w-full ${aspectClass} overflow-hidden`}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300" />

                      <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex justify-end">
                          <div className="w-8 h-8 rounded-full bg-[#0a0a0c]/80 backdrop-blur-sm border border-[#faf8f5]/20 flex items-center justify-center text-[#faf8f5]">
                            <Maximize2 className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <span className="text-[10px] uppercase tracking-wider text-[#c5a880] font-medium">
                            {item.category} · {item.location}
                          </span>
                          <h3 className="font-serif text-lg text-[#faf8f5]">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-[#121216] border-t border-[#faf8f5]/5 flex items-center justify-between text-xs text-[#8c867d]">
                      <span className="truncate pr-2">{item.title}</span>
                      {item.eventSlug && (
                        <Link
                          href={`/events/${item.eventSlug}`}
                          onClick={(e) => e.stopPropagation()}
                          className="shrink-0 text-[10px] uppercase tracking-wider text-[#c5a880] hover:text-[#faf8f5] flex items-center transition-colors"
                        >
                          <span>Case Study</span>
                          <ArrowUpRight className="w-3 h-3 ml-0.5" />
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <ImageLightbox
        isOpen={lightboxOpen}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
}
