"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectItem } from "@/content/projects";
import ImageLightbox from "@/components/ImageLightbox";
import VideoModal from "@/components/VideoModal";
import {
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  MapPin,
  Users,
  Play,
  Maximize2,
  Quote,
} from "lucide-react";

interface CaseStudyClientProps {
  project: ProjectItem;
}

export default function EventCaseStudyClient({ project }: CaseStudyClientProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const lightboxImages = project.gallery.map((g) => ({
    url: g.url,
    caption: g.caption,
    title: project.title,
  }));

  return (
    <article className="pt-28 pb-0">
      {/* 1. Header & Metadata Bar */}
      <section className="py-16 md:py-24 bg-[#0a0a0c] border-b border-[#faf8f5]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#c5a880] font-medium">
              <span>{project.category}</span>
              <span className="text-[#faf8f5]/30">·</span>
              <span className="flex items-center text-[#faf8f5]/70">
                <MapPin className="w-3.5 h-3.5 mr-1 text-[#c5a880]" />
                {project.location}
              </span>
              <span className="text-[#faf8f5]/30">·</span>
              <span className="flex items-center text-[#faf8f5]/70">
                <Calendar className="w-3.5 h-3.5 mr-1 text-[#c5a880]" />
                {project.year}
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#faf8f5] leading-tight">
              {project.title}
            </h1>

            <p className="font-serif text-xl sm:text-2xl text-[#c5a880] italic font-light">
              &ldquo;{project.conceptHeadline}&rdquo;
            </p>

            <div className="pt-4 flex flex-wrap gap-6 text-xs text-[#8c867d] border-t border-[#faf8f5]/10">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-[#c5a880]" />
                <span>Guest Count: <strong className="text-[#faf8f5]">{project.guestCount}</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-[#c5a880]" />
                <span>Duration: <strong className="text-[#faf8f5]">{project.duration}</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Hero Visual (Large full-width image or video trigger) */}
      <section className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-[#121215] overflow-hidden border-b border-[#faf8f5]/10">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          priority
          quality={95}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-60" />

        {project.videoHighlight && (
          <button
            type="button"
            onClick={() => setVideoModalOpen(true)}
            className="absolute bottom-8 right-8 px-6 py-3 rounded-full bg-[#0a0a0c]/80 backdrop-blur-md border border-[#c5a880]/50 text-xs uppercase tracking-[0.2em] font-semibold text-[#faf8f5] flex items-center space-x-2 hover:bg-[#c5a880] hover:text-[#0a0a0c] transition-all cursor-pointer shadow-2xl"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Play Film Highlights ({project.videoHighlight.duration})</span>
          </button>
        )}
      </section>

      {/* 3. The Story & The Concept */}
      <section className="py-24 bg-[#0c0c0f] border-b border-[#faf8f5]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center space-x-3 text-xs tracking-[0.3em] uppercase text-[#c5a880] font-medium">
                <span className="w-6 h-[1px] bg-[#c5a880]" />
                <span>The Narrative</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#faf8f5] font-light">
                Behind The Celebration
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-6 text-sm sm:text-base text-[#c8c2b7] font-light leading-relaxed">
              {project.story.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Role: Showing only what Aesthetic Tales handled */}
      <section className="py-20 bg-[#08080a] border-b border-[#faf8f5]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="flex items-center space-x-3 text-xs tracking-[0.3em] uppercase text-[#c5a880] font-medium">
              <span className="w-6 h-[1px] bg-[#c5a880]" />
              <span>Directorship & Execution</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#faf8f5] font-light">
              OUR ROLE
            </h2>
            <p className="text-xs sm:text-sm text-[#8c867d]">
              Specific responsibilities and creative mandates executed by Aesthetic Tales for this celebration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.roles.map((role, idx) => (
              <div
                key={idx}
                className="p-5 rounded-sm bg-[#111115] border border-[#faf8f5]/10 flex items-center space-x-3"
              >
                <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span className="text-xs uppercase tracking-wider font-medium text-[#faf8f5]">
                  {role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Editorial Image Gallery */}
      <section className="py-24 bg-[#0c0c0f] border-b border-[#faf8f5]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between mb-16">
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-xs tracking-[0.3em] uppercase text-[#c5a880] font-medium">
                <span className="w-6 h-[1px] bg-[#c5a880]" />
                <span>Visual Retrospective</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#faf8f5] font-light">
                EVENT GALLERY
              </h2>
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#8c867d] hidden sm:block">
              Click any photo to enlarge
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((item, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(idx)}
                className="group relative cursor-pointer overflow-hidden rounded-sm bg-[#121215] border border-[#faf8f5]/10 hover:border-[#c5a880]/50 transition-all duration-300"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={item.url}
                    alt={item.caption}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonial (if available for this event) */}
      {project.testimonial && (
        <section className="py-20 bg-[#08080a] border-b border-[#faf8f5]/10">
          <div className="max-w-3xl mx-auto px-6 md:px-12 text-center space-y-6">
            <Quote className="w-10 h-10 text-[#c5a880]/40 mx-auto" />
            <p className="font-serif text-2xl sm:text-3xl text-[#faf8f5] font-light italic leading-relaxed">
              &ldquo;{project.testimonial.quote}&rdquo;
            </p>
            <div className="pt-2">
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#faf8f5]">
                {project.testimonial.client}
              </p>
              <p className="text-[11px] text-[#c5a880] mt-0.5">
                {project.testimonial.role} · {project.title}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 7. Final Section: LET'S CREATE YOUR STORY */}
      <section className="py-24 md:py-32 bg-[#0c0c0f] text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 md:px-12 space-y-6 relative z-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#c5a880]">Next Chapter</p>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#faf8f5] leading-tight">
            LET&apos;S CREATE <br />
            <span className="italic text-[#c5a880]">YOUR STORY</span>
          </h2>
          <p className="text-sm sm:text-base text-[#c8c2b7] font-light max-w-xl mx-auto leading-relaxed">
            Every celebration begins with an honest conversation. Share your date, destination, and dreams with us.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-9 py-4 rounded-full bg-[#c5a880] text-[#0a0a0c] text-xs uppercase tracking-[0.22em] font-semibold hover:bg-[#e0ceb7] transition-all shadow-xl group"
            >
              <span>Plan Your Event</span>
              <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Modals */}
      <ImageLightbox
        isOpen={lightboxOpen}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />

      {project.videoHighlight && (
        <VideoModal
          isOpen={videoModalOpen}
          onClose={() => setVideoModalOpen(false)}
          videoTitle={project.videoHighlight.title}
          videoUrl={project.videoHighlight.url}
          poster={project.videoHighlight.poster}
        />
      )}
    </article>
  );
}
