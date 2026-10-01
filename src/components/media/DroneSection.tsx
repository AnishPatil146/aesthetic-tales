import { DroneMedia } from "@/content/events";
import VideoPlayer from "./VideoPlayer";
import { Compass, Eye } from "lucide-react";

interface DroneSectionProps {
  drone: DroneMedia | undefined;
  eventTitle: string;
}

export default function DroneSection({ drone, eventTitle }: DroneSectionProps) {
  if (!drone) return null;

  return (
    <section className="relative py-24 bg-[#0a0a0c] border-t border-[#faf8f5]/10 overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#171a21] via-[#0a0a0c] to-[#0a0a0c] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-[10px] uppercase tracking-[0.25em] text-blue-300 font-semibold">
              <Compass className="w-3 h-3 text-blue-300 animate-spin-slow" />
              <span>AERIAL PERSPECTIVE · FROM ABOVE</span>
            </div>

            <h2 className="font-serif text-3xl md:text-5xl font-light text-[#faf8f5] tracking-tight">
              FROM ABOVE
            </h2>

            <p className="text-sm md:text-base text-[#c8c2b7] font-light max-w-xl leading-relaxed">
              &ldquo;An aerial look at the celebration.&rdquo; Discover the scale, architecture, and spatial harmony of {eventTitle} through high-definition drone cinematography.
            </p>
          </div>

          {/* Technical Specs Pill */}
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono tracking-wider text-[#8c867d]">
            {drone.altitude && (
              <span className="px-3 py-1.5 rounded-lg bg-[#141418] border border-[#faf8f5]/10 text-[#faf8f5]/80">
                ALT: {drone.altitude}
              </span>
            )}
            <span className="px-3 py-1.5 rounded-lg bg-[#141418] border border-[#faf8f5]/10 text-[#faf8f5]/80">
              {drone.specs || "4K 60FPS CINEMATIC DRONE"}
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#141418] border border-[#faf8f5]/10 text-[#c5a880]">
              {drone.duration}
            </span>
          </div>
        </div>

        {/* Cinematic Widescreen Drone Video Player */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#121216]">
          <VideoPlayer
            src={drone.videoUrl}
            poster={drone.poster}
            title={drone.title}
            duration={drone.duration}
            aspectRatio="widescreen"
            loop={true}
            autoPlay={false}
            showDevBadge={true}
          />
        </div>

        {/* Narrative Caption */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#8c867d]">
          <p className="italic font-light text-[#c8c2b7] max-w-2xl">
            {drone.description}
          </p>
          <div className="inline-flex items-center space-x-1.5 text-[10px] uppercase tracking-widest text-[#c5a880]">
            <Eye className="w-3.5 h-3.5" />
            <span>Interactive Widescreen Playback</span>
          </div>
        </div>
      </div>
    </section>
  );
}
