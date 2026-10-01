"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
} from "lucide-react";
import { hasPlayableVideo } from "@/content/media";

interface VideoPlayerProps {
  src?: string | null;
  poster: string;
  title: string;
  duration?: string;
  aspectRatio?: "landscape" | "portrait" | "widescreen";
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  showDevBadge?: boolean;
  className?: string;
}

export default function VideoPlayer({
  src,
  poster,
  title,
  duration,
  aspectRatio = "landscape",
  autoPlay = false,
  muted = true,
  loop = true,
  className = "",
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [totalTime, setTotalTime] = useState(duration || "00:00");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Validate video source - never render empty or unauthorized video URLs
  const canPlay = hasPlayableVideo(src) && !hasError;

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const togglePlay = () => {
    if (!videoRef.current || !canPlay) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {
        setHasError(true);
      });
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current || !canPlay) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen?.().then(() => {
        setIsFullscreen(true);
      }).catch(() => {});
    } else {
      document.exitFullscreen?.().then(() => {
        setIsFullscreen(false);
      }).catch(() => {});
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration;
    if (total > 0) {
      setProgress((current / total) * 100);
      setCurrentTime(formatTime(current));
    }
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    if (!duration) {
      setTotalTime(formatTime(videoRef.current.duration));
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current || !canPlay) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newProgress = Math.max(0, Math.min(1, clickX / width));
    videoRef.current.currentTime = newProgress * videoRef.current.duration;
    setProgress(newProgress * 100);
  };

  const handleMouseMove = () => {
    if (!canPlay) return;
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 2800);
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFsChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFsChange);
      if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    };
  }, []);

  const aspectClass =
    aspectRatio === "portrait"
      ? "aspect-[9/16] max-w-[340px] mx-auto rounded-2xl shadow-2xl"
      : aspectRatio === "widescreen"
      ? "aspect-[21/9]"
      : "aspect-[16/9]";

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
      className={`relative group bg-[#0a0a0c] overflow-hidden rounded-xl select-none ${aspectClass} ${className}`}
    >
      {/* 
        CONDITIONAL RENDERING ARCHITECTURE:
        If no valid video source exists or video error occurred:
        Render ONLY the high-resolution image poster with zero network requests to video files.
      */}
      {!canPlay ? (
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={poster}
            alt={title}
            fill
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          {/* Subtle elegant gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/80 via-transparent to-transparent pointer-events-none" />
        </div>
      ) : (
        <video
          ref={videoRef}
          src={src!}
          poster={poster}
          playsInline
          loop={loop}
          muted={isMuted}
          autoPlay={autoPlay}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onError={() => setHasError(true)}
          onClick={togglePlay}
          className="w-full h-full object-cover cursor-pointer"
        />
      )}

      {/* Play / Pause Interactive Overlay (Only active when valid video source is playable) */}
      {canPlay && !isPlaying && (
        <div
          onClick={togglePlay}
          className="absolute inset-0 z-10 flex items-center justify-center bg-[#0a0a0c]/40 cursor-pointer backdrop-blur-[1px] transition-all duration-300 group-hover:bg-[#0a0a0c]/30"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#c5a880] text-[#0a0a0c] flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
            <Play className="w-7 h-7 md:w-8 md:h-8 ml-1 fill-current" />
          </div>
        </div>
      )}

      {/* Minimalist Floating Cinematic Control Bar (Rendered ONLY when video is playable) */}
      {canPlay && (
        <div
          className={`absolute bottom-0 inset-x-0 z-20 p-4 md:p-6 bg-gradient-to-t from-[#0a0a0c]/90 via-[#0a0a0c]/50 to-transparent transition-opacity duration-300 ${
            showControls || !isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Scrubber Progress Bar */}
          <div
            onClick={handleSeek}
            className="relative w-full h-1.5 bg-white/20 hover:h-2.5 rounded-full cursor-pointer transition-all duration-200 mb-3 group/bar"
          >
            <div
              className="absolute top-0 left-0 h-full bg-[#c5a880] rounded-full relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow opacity-0 group-hover/bar:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Controls Row */}
          <div className="flex items-center justify-between text-[#faf8f5]">
            <div className="flex items-center space-x-3 md:space-x-4">
              <button
                type="button"
                onClick={togglePlay}
                className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 fill-current" />
                ) : (
                  <Play className="w-5 h-5 fill-current" />
                )}
              </button>

              <button
                type="button"
                onClick={toggleMute}
                className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>

              <span className="text-[11px] font-mono tracking-wider text-[#faf8f5]/80">
                {currentTime} / {totalTime}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <span className="hidden sm:inline-block text-[11px] uppercase tracking-widest text-[#faf8f5]/60 truncate max-w-[200px]">
                {title}
              </span>

              <button
                type="button"
                onClick={toggleFullscreen}
                className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
                aria-label={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
              >
                {isFullscreen ? (
                  <Minimize className="w-5 h-5" />
                ) : (
                  <Maximize className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
