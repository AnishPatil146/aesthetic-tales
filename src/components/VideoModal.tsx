"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { hasPlayableVideo } from "@/content/media";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoTitle: string;
  videoUrl?: string;
  poster?: string;
}

export default function VideoModal({
  isOpen,
  onClose,
  videoTitle,
  videoUrl,
  poster = "/images/birthday-soiree.jpg",
}: VideoModalProps) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const canPlay = hasPlayableVideo(videoUrl) && !hasError;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#0a0a0c]/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8 animate-fadeIn"
      onClick={onClose}
    >
      {/* Header */}
      <div
        className="w-full max-w-4xl flex items-center justify-between mb-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="font-serif text-lg text-[#faf8f5]">{videoTitle}</h3>
        <button
          type="button"
          onClick={onClose}
          className="w-10 h-10 rounded-full border border-[#faf8f5]/20 flex items-center justify-center text-[#faf8f5] hover:border-[#c5a880] hover:text-[#c5a880] transition-colors"
          aria-label="Close viewer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Media Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl aspect-[16/9] bg-[#000] rounded-xl overflow-hidden border border-[#faf8f5]/10 shadow-2xl"
      >
        {canPlay ? (
          <video
            src={videoUrl}
            poster={poster}
            controls
            autoPlay
            playsInline
            onError={() => setHasError(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="relative w-full h-full">
            <Image
              src={poster}
              alt={videoTitle}
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 flex flex-col justify-end p-6 md:p-8">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#c5a880] font-semibold">
                AESTHETIC TALES CELEBRATION ARCHIVE
              </span>
              <h4 className="font-serif text-2xl text-white font-light mt-1">
                {videoTitle}
              </h4>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
