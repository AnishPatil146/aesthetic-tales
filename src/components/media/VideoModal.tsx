"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  ArrowUpRight,
} from "lucide-react";
import { InstagramIcon } from "@/components/icons";
import { VideoItem } from "@/content/videos";
import { hasPlayableVideo } from "@/content/media";

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
}

export default function VideoModal({ video, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [totalTime, setTotalTime] = useState("00:00");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === " " && videoRef.current) {
        e.preventDefault();
        if (videoRef.current.paused) {
          videoRef.current.play();
          setIsPlaying(true);
        } else {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      }
      if (e.key === "m" || e.key === "M") {
        if (videoRef.current) {
          videoRef.current.muted = !videoRef.current.muted;
          setIsMuted(videoRef.current.muted);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
      if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    };
  }, [onClose]);

  if (!video) return null;

  const canPlay = hasPlayableVideo(video.videoUrl) && !hasError;
  const isPortrait = video.orientation === "portrait";

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const togglePlay = () => {
    if (!videoRef.current || !canPlay) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setHasError(true));
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
      containerRef.current.requestFullscreen?.().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen?.().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const cur = videoRef.current.currentTime;
    const tot = videoRef.current.duration;
    if (tot > 0) {
      setProgress((cur / tot) * 100);
      setCurrentTime(formatTime(cur));
    }
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setTotalTime(formatTime(videoRef.current.duration));
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current || !canPlay) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = Math.max(0, Math.min(1, clickX / rect.width));
    videoRef.current.currentTime = newProgress * videoRef.current.duration;
    setProgress(newProgress * 100);
  };

  const handleMouseMove = () => {
    if (!canPlay) return;
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 2800);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-200 select-none p-4 sm:p-6 md:p-10"
      onClick={onClose}
    >
      {/* Top Header Bar */}
      <div
        className="absolute top-0 inset-x-0 z-30 flex items-center justify-between p-4 sm:p-6 bg-gradient-to-b from-black/90 to-transparent pointer-events-none"
      >
        <div className="flex items-center space-x-3 pointer-events-auto">
          <span className="px-2.5 py-1 rounded-full bg-[#c5a880]/20 border border-[#c5a880]/40 text-[#c5a880] text-[10px] tracking-[0.2em] uppercase font-semibold">
            {video.category}
          </span>
          {video.isDrone && (
            <span className="px-2.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-[10px] tracking-[0.2em] uppercase font-semibold">
              4K DRONE FOOTAGE
            </span>
          )}
          <span className="hidden sm:inline text-xs text-[#faf8f5]/60 font-mono tracking-wider">
            {video.location || "Mumbai"} {video.year ? `· ${video.year}` : ""}
          </span>
        </div>

        <div className="flex items-center space-x-3 pointer-events-auto">
          {video.instagramUrl && (
            <a
              href={video.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#c5a880] hover:text-[#0a0a0c] text-white text-[11px] tracking-wider transition-all"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>@theaesthetetales</span>
              <ArrowUpRight className="w-3 h-3 ml-0.5" />
            </a>
          )}
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#faf8f5] transition-colors"
            aria-label="Close viewer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Visual Box */}
      <div
        ref={containerRef}
        onClick={(e) => e.stopPropagation()}
        onMouseMove={handleMouseMove}
        className={`relative overflow-hidden bg-[#0a0a0c] rounded-2xl shadow-2xl transition-all ${
          isPortrait
            ? "w-full max-w-[390px] h-[82vh] max-h-[780px] aspect-[9/16] border border-white/10"
            : "w-full max-w-5xl aspect-[16/9] border border-white/10"
        }`}
      >
        {!canPlay ? (
          <div className="relative w-full h-full">
            <Image
              src={video.poster || video.thumbnail}
              alt={video.title}
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40 flex flex-col justify-end p-6 md:p-10">
              <div className="max-w-2xl space-y-3">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
                  AESTHETIC TALES ARCHIVE · {video.duration}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-white font-light">
                  {video.title}
                </h3>
                <p className="text-xs md:text-sm text-[#c8c2b7] leading-relaxed">
                  {video.description}
                </p>
                {video.instagramUrl && (
                  <div className="pt-2">
                    <a
                      href={video.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#c5a880] text-[#0a0a0c] text-xs font-semibold tracking-wider hover:bg-[#e0ceb7] transition-all"
                    >
                      <InstagramIcon className="w-4 h-4" />
                      <span>Watch on Instagram @theaesthetetales</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <>
            <video
              ref={videoRef}
              src={video.videoUrl}
              poster={video.poster || video.thumbnail}
              playsInline
              autoPlay
              muted={isMuted}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onError={() => setHasError(true)}
              onClick={togglePlay}
              className="w-full h-full object-cover cursor-pointer"
            />

            {!isPlaying && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 cursor-pointer backdrop-blur-[2px]"
              >
                <div className="w-20 h-20 rounded-full bg-[#c5a880] text-[#0a0a0c] flex items-center justify-center shadow-2xl scale-110">
                  <Play className="w-8 h-8 ml-1 fill-current" />
                </div>
              </div>
            )}

            {/* Cinematic Minimal Controls */}
            <div
              className={`absolute bottom-0 inset-x-0 z-20 p-4 sm:p-6 bg-gradient-to-t from-black/95 via-black/60 to-transparent transition-opacity duration-300 ${
                showControls || !isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <div
                onClick={handleSeek}
                className="relative w-full h-1.5 bg-white/20 hover:h-2 rounded-full cursor-pointer transition-all mb-3 group/bar"
              >
                <div
                  className="absolute top-0 left-0 h-full bg-[#c5a880] rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[#faf8f5]">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="p-1 rounded-full hover:bg-white/10 transition-colors"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
                  </button>

                  <button
                    type="button"
                    onClick={toggleMute}
                    className="p-1 rounded-full hover:bg-white/10 transition-colors"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>

                  <span className="text-[11px] font-mono tracking-wider text-[#faf8f5]/80">
                    {currentTime} / {totalTime || video.duration}
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="hidden md:inline-block text-xs text-[#faf8f5]/70 max-w-[280px] truncate">
                    {video.title}
                  </span>
                  <button
                    type="button"
                    onClick={toggleFullscreen}
                    className="p-1 rounded-full hover:bg-white/10 transition-colors"
                    aria-label="Fullscreen"
                  >
                    {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
