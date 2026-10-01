"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ChevronDown,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
} from "lucide-react";
import { heroMediaSlides, hasPlayableVideo } from "@/content/media";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroMediaSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroMediaSlides[currentSlide];
  const canPlayHeroVideo = hasPlayableVideo(slide.videoSrc) && !videoError;

  const toggleVideoPlay = () => {
    if (!videoRef.current || !canPlayHeroVideo) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsVideoPlaying(true)).catch(() => setVideoError(true));
    } else {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current || !canPlayHeroVideo) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const toggleFullscreen = () => {
    if (!heroRef.current) return;
    if (!document.fullscreenElement) {
      heroRef.current.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen min-h-[660px] flex items-end pb-16 md:pb-20 overflow-hidden select-none bg-[#0a0a0c]"
    >
      {/* Background Visuals: High-Performance Editorial Imagery with Optional Local Video */}
      <div className="absolute inset-0 z-0">
        {/* Render Video ONLY when an authentic video source exists and has not encountered errors */}
        {canPlayHeroVideo && (
          <video
            ref={videoRef}
            key={slide.videoSrc}
            src={slide.videoSrc}
            poster={slide.poster}
            autoPlay
            playsInline
            muted={isMuted}
            loop
            onError={() => setVideoError(true)}
            className="hidden md:block absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-90 scale-105"
          />
        )}

        {/* Fallback Image Layer: Always mounted with smooth opacity crossfade */}
        {heroMediaSlides.map((s, idx) => (
          <div
            key={s.category}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide
                ? canPlayHeroVideo ? "opacity-100 md:opacity-40" : "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={s.poster}
              alt={`Aesthetic Tales ${s.category}`}
              fill
              priority={idx === 0}
              quality={90}
              className="object-cover object-center"
            />
          </div>
        ))}

        {/* Sophisticated Editorial Vignettes & Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/50 to-[#0a0a0c]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0a0a0c]/30 to-[#0a0a0c]/85" />
      </div>

      {/* Floating Hero Video Controls on Top Right (Rendered ONLY when video is active) */}
      {canPlayHeroVideo && (
        <div className="hidden md:flex absolute top-28 right-8 z-30 items-center space-x-2.5 p-1.5 rounded-full bg-[#0a0a0c]/70 backdrop-blur-md border border-white/10 shadow-xl">
          <button
            type="button"
            onClick={toggleVideoPlay}
            className="p-2 rounded-full hover:bg-white/15 text-[#faf8f5] transition-colors"
            title={isVideoPlaying ? "Pause Video" : "Play Video"}
            aria-label={isVideoPlaying ? "Pause Video" : "Play Video"}
          >
            {isVideoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>

          <button
            type="button"
            onClick={toggleMute}
            className="p-2 rounded-full hover:bg-white/15 text-[#faf8f5] transition-colors"
            title={isMuted ? "Unmute Audio" : "Mute Audio"}
            aria-label={isMuted ? "Unmute Audio" : "Mute Audio"}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>

          <button
            type="button"
            onClick={toggleFullscreen}
            className="p-2 rounded-full hover:bg-white/15 text-[#faf8f5] transition-colors"
            title="Fullscreen View"
            aria-label="Fullscreen"
          >
            <Maximize className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-3xl space-y-6">
          {/* Dynamic Event Category Badge with Smooth Morph */}
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#0a0a0c]/80 backdrop-blur-md border border-[#faf8f5]/15 text-[11px] uppercase tracking-[0.25em] text-[#faf8f5] shadow-lg">
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: slide.accent }}
            />
            <span className="font-semibold text-[#faf8f5]">{slide.category}</span>
            <span className="text-[#faf8f5]/40">·</span>
            <span className="text-[#faf8f5]/70 text-[10px] tracking-[0.2em]">{slide.location}</span>
          </div>

          {/* Headline - Exact User Requirement */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#faf8f5] leading-[1.05] text-balance">
            CELEBRATIONS <br />
            <span className="italic font-light text-[#c5a880]">MADE BEAUTIFUL.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base md:text-lg text-[#c8c2b7] font-light max-w-xl leading-relaxed text-balance">
            We plan, style and create unforgettable celebrations — from birthdays and baby showers to engagements, themed parties and everything in between.
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-5">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#c5a880] text-[#0a0a0c] text-xs uppercase tracking-[0.22em] font-semibold hover:bg-[#e0ceb7] transition-all duration-300 shadow-xl group"
            >
              <span>PLAN YOUR EVENT</span>
              <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/events"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-[#faf8f5]/25 text-[#faf8f5] text-xs uppercase tracking-[0.22em] font-medium hover:bg-[#faf8f5]/10 hover:border-[#faf8f5]/50 transition-all duration-300"
            >
              <span>EXPLORE OUR WORK</span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar: Interactive Slide Tabs & Scroll Indicator */}
        <div className="pt-10 flex flex-col sm:flex-row sm:items-center justify-between border-t border-[#faf8f5]/15 mt-10 gap-4 text-[11px] uppercase tracking-[0.22em] text-[#8c867d]">
          {/* Dynamic category tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {heroMediaSlides.map((s, i) => (
              <button
                key={s.category}
                type="button"
                onClick={() => setCurrentSlide(i)}
                className={`px-3 py-1 rounded-full text-[10px] tracking-[0.18em] transition-all duration-300 ${
                  i === currentSlide
                    ? "bg-[#faf8f5]/15 text-[#faf8f5] border border-[#c5a880]/60 shadow-sm"
                    : "text-[#8c867d] hover:text-[#faf8f5] border border-transparent"
                }`}
                aria-label={`Switch to ${s.category}`}
              >
                {s.category.split(" ")[0]}
              </button>
            ))}
          </div>

          {/* Scroll down prompt */}
          <a
            href="#intro"
            className="inline-flex items-center space-x-2 text-[#c8c2b7] hover:text-[#c5a880] transition-colors group cursor-pointer self-start sm:self-auto"
          >
            <span>Scroll to Explore</span>
            <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
