"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { galleryItems } from "@/content/gallery";
import ImageLightbox from "./ImageLightbox";
import { ArrowUpRight, Maximize2 } from "lucide-react";

export default function SelectedGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const displayItems = galleryItems.slice(0, 6);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const lightboxImages = displayItems.map((item) => ({
    url: item.image,
    caption: item.caption,
    title: item.title,
  }));

  return (
    <section className="py-24 md:py-36 bg-[#0c0c0f] border-t border-[#faf8f5]/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-xs tracking-[0.3em] uppercase text-[#c5a880] font-medium">
              <span className="w-6 h-[1px] bg-[#c5a880]" />
              <span>Visual Poetry</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#faf8f5] tracking-tight">
              SELECTED GALLERY
            </h2>
          </div>

          <Link
            href="/gallery"
            className="inline-flex items-center text-xs uppercase tracking-[0.22em] font-medium text-[#c8c2b7] hover:text-[#c5a880] transition-colors self-start md:self-auto group"
          >
            <span>Explore Full Gallery</span>
            <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Editorial Masonry-Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative cursor-pointer overflow-hidden rounded-sm bg-[#121215] border border-[#faf8f5]/10 hover:border-[#c5a880]/40 transition-all duration-500 shadow-md"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Hover overlay icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0a0a0c]/80 backdrop-blur-md border border-[#faf8f5]/20 flex items-center justify-center text-[#faf8f5] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-4 h-4 text-[#c5a880]" />
                </div>

                {/* Category & Location Badge */}
                <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-[#0a0a0c]/80 backdrop-blur-sm border border-[#faf8f5]/10 text-[9px] uppercase tracking-widest text-[#c5a880]">
                  {item.category} · {item.location}
                </div>

                {/* Caption bottom bar */}
                <div className="absolute bottom-0 inset-x-0 p-6 space-y-1 transition-transform duration-300 group-hover:-translate-y-1">
                  <h3 className="font-serif text-lg text-[#faf8f5] font-light">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#8c867d] line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        isOpen={lightboxOpen}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
}
