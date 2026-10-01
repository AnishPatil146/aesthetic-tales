"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  isOpen: boolean;
  images: {
    url: string;
    caption: string;
    title?: string;
  }[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function ImageLightbox({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const currentImage = images[currentIndex];

  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handlePrev, handleNext, onClose]);

  if (!isOpen || !currentImage) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0a0c]/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 animate-fadeIn select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between z-10">
        <div className="text-xs uppercase tracking-[0.25em] text-[#c5a880]">
          {currentIndex + 1} / {images.length}
        </div>
        <button
          type="button"
          onClick={onClose}
          className="w-10 h-10 rounded-full border border-[#faf8f5]/20 flex items-center justify-center text-[#faf8f5] hover:border-[#c5a880] hover:text-[#c5a880] transition-colors"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Area with Nav Buttons */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
        {/* Previous Button */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 z-20 w-12 h-12 rounded-full bg-[#0a0a0c]/70 border border-[#faf8f5]/15 flex items-center justify-center text-[#faf8f5] hover:text-[#c5a880] hover:border-[#c5a880] transition-colors"
            aria-label="Previous photograph"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        <div className="relative w-full h-full max-w-5xl max-h-[80vh]">
          <Image
            src={currentImage.url}
            alt={currentImage.caption || "Aesthetic Tales photograph"}
            fill
            quality={95}
            className="object-contain"
          />
        </div>

        {/* Next Button */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-2 sm:right-6 z-20 w-12 h-12 rounded-full bg-[#0a0a0c]/70 border border-[#faf8f5]/15 flex items-center justify-center text-[#faf8f5] hover:text-[#c5a880] hover:border-[#c5a880] transition-colors"
            aria-label="Next photograph"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Bottom Caption */}
      <div className="max-w-2xl mx-auto text-center space-y-1 z-10 px-4">
        {currentImage.title && (
          <p className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-medium">
            {currentImage.title}
          </p>
        )}
        <p className="font-serif text-sm sm:text-base text-[#faf8f5] italic">
          &ldquo;{currentImage.caption}&rdquo;
        </p>
      </div>
    </div>
  );
}
