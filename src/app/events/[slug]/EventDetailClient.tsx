"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { EventItem } from "@/content/events";
import { VideoItem } from "@/content/videos";
import VideoPlayer from "@/components/media/VideoPlayer";
import VideoModal from "@/components/media/VideoModal";
import DroneSection from "@/components/media/DroneSection";
import ImageLightbox from "@/components/ImageLightbox";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  MapPin,
  Users,
  Clock,
  Play,
  Maximize2,
  Sparkles,
  Quote,
  Film,
} from "lucide-react";

interface Props {
  event: EventItem;
  relatedEvents: EventItem[];
}

export default function EventDetailClient({ event, relatedEvents }: Props) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const lightboxImages = event.gallery.map((g) => ({
    url: g.src,
    caption: g.caption,
    title: event.title,
  }));

  const detailEntries = [
    { label: "Décor", value: event.details.decor },
    { label: "Styling", value: event.details.styling },
    { label: "Backdrop", value: event.details.backdrop },
    { label: "Tablescape", value: event.details.tablescape },
    { label: "Entrance", value: event.details.entrance },
    { label: "Stage", value: event.details.stage },
    { label: "Props", value: event.details.props },
    { label: "Lighting", value: event.details.lighting },
    { label: "Florals", value: event.details.florals },
    { label: "Custom Elements", value: event.details.customElements },
  ].filter((item) => !!item.value);

  return (
    <div className="pt-28 pb-0 bg-[#0a0a0c]">
      {/* 1. Breadcrumbs / Top Back Navigation */}
      <section className="py-6 bg-[#0a0a0c] border-b border-[#faf8f5]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link
            href="/events"
            className="inline-flex items-center text-xs uppercase tracking-[0.2em] font-medium text-[#c8c2b7] hover:text-[#c5a880] transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-2 transition-transform group-hover:-translate-x-1" />
            <span>Back to All Events</span>
          </Link>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
            {event.categoryLabel}
          </span>
        </div>
      </section>

      {/* 2. Top Header & Metrics */}
      <section className="py-14 md:py-20 bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-xs tracking-[0.25em] uppercase font-medium">
              <span className="px-3.5 py-1.5 rounded-full bg-[#141418] border border-[#faf8f5]/15 text-[#faf8f5]">
                <span
                  className="w-2 h-2 rounded-full inline-block mr-2"
                  style={{ backgroundColor: event.accentColor }}
                />
                {event.categoryLabel}
              </span>
              <span className="text-[#faf8f5]/30">·</span>
              <span className="flex items-center text-[#faf8f5]/80">
                <MapPin className="w-3.5 h-3.5 mr-1 text-[#c5a880]" />
                {event.location}
              </span>
              <span className="text-[#faf8f5]/30">·</span>
              <span className="flex items-center text-[#faf8f5]/80">
                <Calendar className="w-3.5 h-3.5 mr-1 text-[#c5a880]" />
                {event.year}
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#faf8f5] leading-tight">
              {event.title}
            </h1>

            <p className="font-serif text-xl sm:text-2xl text-[#c5a880] italic font-light">
              &ldquo;{event.conceptHeadline}&rdquo;
            </p>

            <div className="pt-4 flex flex-wrap gap-6 text-xs text-[#8c867d] border-t border-[#faf8f5]/10">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-[#c5a880]" />
                <span>
                  Guest Count: <strong className="text-[#faf8f5]">{event.guestCount}</strong>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#c5a880]" />
                <span>
                  Duration: <strong className="text-[#faf8f5]">{event.duration}</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Hero Visual (Full-Width Cinematic Image) */}
      <section className="relative w-full aspect-[16/9] sm:aspect-[21/9] max-h-[700px] overflow-hidden bg-[#121215] border-y border-[#faf8f5]/10">
        <Image
          src={event.coverImage}
          alt={event.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-70" />
      </section>

      {/* 4. THE CONCEPT */}
      <section className="py-20 md:py-28 bg-[#0c0c0f]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center space-x-3 text-xs tracking-[0.3em] uppercase text-[#c5a880] font-medium">
                <span className="w-6 h-[1px] bg-[#c5a880]" />
                <span>Creative Direction</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#faf8f5] font-light">
                THE CONCEPT
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4 text-base sm:text-lg text-[#c8c2b7] font-light leading-relaxed">
              <p>{event.conceptDescription}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MAIN EVENT FILM (Rendered if eventFilm exists) */}
      {event.eventFilm && (
        <section className="py-24 bg-[#0a0a0c] border-t border-[#faf8f5]/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#faf8f5]/10 border border-[#faf8f5]/15 text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
                  <Film className="w-3 h-3 text-[#c5a880]" />
                  <span>WATCH THE EVENT FILM</span>
                </div>
                <h2 className="font-serif text-3xl md:text-5xl font-light text-[#faf8f5]">
                  THE EVENT FILM
                </h2>
                <p className="text-sm md:text-base text-[#c8c2b7] font-light max-w-xl">
                  {event.eventFilm.description}
                </p>
              </div>

              <div className="text-xs font-mono text-[#c5a880]">
                {event.eventFilm.duration} · High Fidelity
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#121216]">
              <VideoPlayer
                src={event.eventFilm.videoUrl}
                poster={event.eventFilm.poster}
                title={event.eventFilm.title}
                duration={event.eventFilm.duration}
                aspectRatio="landscape"
                autoPlay={false}
              />
            </div>
          </div>
        </section>
      )}

      {/* 6. DRONE / AERIAL FOOTAGE (Rendered ONLY when droneFootage exists) */}
      {event.droneFootage && (
        <DroneSection drone={event.droneFootage} eventTitle={event.title} />
      )}

      {/* 7. THE DETAILS (Craft & Elements) */}
      <section className="py-20 md:py-28 bg-[#0a0a0c] border-t border-[#faf8f5]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center space-x-3 text-xs tracking-[0.3em] uppercase text-[#c5a880] font-medium">
              <span className="w-6 h-[1px] bg-[#c5a880]" />
              <span>CRAFT & ELEMENTS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#faf8f5] font-light">
              THE DETAILS
            </h2>
            <p className="text-sm text-[#8c867d]">
              Every element was custom-styled and tailored specifically for this celebration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {detailEntries.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-sm bg-[#121216] border border-[#faf8f5]/10 hover:border-[#c5a880]/30 transition-colors space-y-2"
              >
                <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#c5a880] font-medium">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </div>
                <p className="text-sm text-[#c8c2b7] font-light leading-relaxed">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. EVENT GALLERY (Photo Lightbox) */}
      <section className="py-24 bg-[#0c0c0f] border-t border-[#faf8f5]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center space-x-3 text-xs tracking-[0.3em] uppercase text-[#c5a880] font-medium">
              <span className="w-6 h-[1px] bg-[#c5a880]" />
              <span>VISUAL HIGHLIGHTS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#faf8f5] font-light">
              EVENT GALLERY
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {event.gallery.map((item, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(idx)}
                className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-sm bg-[#121215] border border-[#faf8f5]/10 hover:border-[#c5a880]/50 transition-all duration-300"
              >
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-80" />

                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#0a0a0c]/80 backdrop-blur-md border border-[#faf8f5]/20 flex items-center justify-center text-[#faf8f5] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 text-[#c5a880]" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-xs text-[#faf8f5] font-light">
                  <p className="line-clamp-2 italic">&ldquo;{item.caption}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. MOMENTS: SHORT VERTICAL REELS (Rendered ONLY if reels exist) */}
      {event.momentsReels && event.momentsReels.length > 0 && (
        <section className="py-24 bg-[#0a0a0c] border-t border-[#faf8f5]/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 text-xs tracking-[0.3em] uppercase text-[#c5a880] font-medium">
                <span className="w-6 h-[1px] bg-[#c5a880]" />
                <span>CANDID HIGHLIGHTS</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#faf8f5] font-light">
                MOMENTS
              </h2>
              <p className="text-sm text-[#8c867d]">
                Vertical reels and celebration snapshots from {event.title}.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {event.momentsReels.map((reel) => (
                <div
                  key={reel.id}
                  onClick={() =>
                    setSelectedVideo({
                      id: reel.id,
                      title: reel.title,
                      slug: reel.id,
                      type: "reel",
                      category: "REELS",
                      thumbnail: reel.poster,
                      poster: reel.poster,
                      videoUrl: reel.videoUrl,
                      duration: reel.duration,
                      description: reel.caption,
                      orientation: "portrait",
                      instagramUrl: reel.instagramUrl,
                    })
                  }
                  className="group relative aspect-[9/16] max-w-[320px] mx-auto w-full overflow-hidden rounded-2xl bg-[#141418] border border-white/10 cursor-pointer shadow-xl transition-transform duration-500 hover:-translate-y-2"
                >
                  <Image
                    src={reel.poster}
                    alt={reel.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[9px] uppercase tracking-widest text-[#faf8f5]">
                      REEL · {reel.duration}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#c5a880] text-[#0a0a0c] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 ml-0.5 fill-current" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 inset-x-0 p-5 z-10 space-y-1">
                    <h3 className="text-sm font-medium text-white line-clamp-1">
                      {reel.title}
                    </h3>
                    <p className="text-xs text-[#c8c2b7] line-clamp-2">
                      {reel.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 10. BEHIND THE SCENES (Rendered ONLY if BTS media exists) */}
      {event.behindTheScenes && event.behindTheScenes.length > 0 && (
        <section className="py-20 bg-[#0c0c0f] border-t border-[#faf8f5]/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.3em] text-[#c5a880] font-medium">
                PRODUCTION PROCESS
              </span>
              <h2 className="font-serif text-3xl text-[#faf8f5] font-light">
                BEHIND THE SCENES
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {event.behindTheScenes.map((bts) => (
                <div
                  key={bts.id}
                  onClick={() =>
                    setSelectedVideo({
                      id: bts.id,
                      title: bts.title,
                      slug: bts.id,
                      type: "behind-the-scenes",
                      category: "BEHIND THE SCENES",
                      thumbnail: bts.poster,
                      poster: bts.poster,
                      videoUrl: bts.videoUrl,
                      duration: bts.duration,
                      description: bts.description,
                      orientation: "landscape",
                    })
                  }
                  className="group relative aspect-[16/9] overflow-hidden rounded-xl bg-[#141418] border border-white/10 cursor-pointer shadow-lg"
                >
                  <Image
                    src={bts.poster}
                    alt={bts.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />

                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[9px] uppercase tracking-widest text-[#c5a880]">
                      BTS · {bts.duration}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#c5a880] text-[#0a0a0c] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 ml-0.5 fill-current" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 inset-x-0 p-5 z-10">
                    <h3 className="text-sm font-medium text-white">{bts.title}</h3>
                    <p className="text-xs text-[#c8c2b7] line-clamp-1 mt-0.5">
                      {bts.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 11. Testimonial (if available) */}
      {event.testimonial && (
        <section className="py-20 bg-[#08080a] border-t border-[#faf8f5]/10">
          <div className="max-w-3xl mx-auto px-6 md:px-12 text-center space-y-6">
            <Quote className="w-10 h-10 text-[#c5a880]/40 mx-auto" />
            <p className="font-serif text-2xl sm:text-3xl text-[#faf8f5] font-light italic leading-relaxed">
              &ldquo;{event.testimonial.quote}&rdquo;
            </p>
            <div className="pt-2">
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#faf8f5]">
                {event.testimonial.client}
              </p>
              <p className="text-[11px] text-[#c5a880] mt-0.5">
                {event.testimonial.role} · {event.title}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 12. RELATED EVENTS */}
      {relatedEvents.length > 0 && (
        <section className="py-24 bg-[#0c0c0f] border-t border-[#faf8f5]/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.3em] text-[#c5a880]">MORE CELEBRATIONS</span>
                <h2 className="font-serif text-3xl text-[#faf8f5] font-light">
                  RELATED EVENTS
                </h2>
              </div>
              <Link
                href="/events"
                className="text-xs uppercase tracking-[0.2em] text-[#c5a880] hover:text-[#faf8f5] transition-colors"
              >
                View Archive
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedEvents.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/events/${rel.slug}`}
                  className="group relative overflow-hidden rounded-sm bg-[#121216] border border-[#faf8f5]/10 hover:border-[#c5a880]/50 transition-all duration-300 shadow-lg"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#18181c]">
                    <Image
                      src={rel.coverImage}
                      alt={rel.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-80" />
                  </div>
                  <div className="p-6 space-y-2">
                    <span className="text-[10px] uppercase tracking-wider text-[#c5a880] font-medium">
                      {rel.categoryLabel}
                    </span>
                    <h3 className="font-serif text-xl text-[#faf8f5] group-hover:text-[#c5a880] transition-colors">
                      {rel.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 13. Final CTA: HAVE AN IDEA FOR YOUR CELEBRATION? LET'S CREATE IT. */}
      <section className="py-24 md:py-32 bg-[#0a0a0c] text-center border-t border-[#faf8f5]/10 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 md:px-12 space-y-6 relative z-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#c5a880]">NEXT STEP</p>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#faf8f5] leading-tight">
            LET&apos;S CREATE YOUR <br />
            <span className="italic text-[#c5a880]">NEXT CELEBRATION.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#c8c2b7] font-light max-w-xl mx-auto leading-relaxed">
            Every celebration begins with a thoughtful conversation. Share your occasion, theme, date, and dreams with Sanath Poojari and our team.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-9 py-4 rounded-full bg-[#c5a880] text-[#0a0a0c] text-xs uppercase tracking-[0.22em] font-semibold hover:bg-[#e0ceb7] transition-all shadow-xl group"
            >
              <span>PLAN YOUR EVENT</span>
              <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
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
