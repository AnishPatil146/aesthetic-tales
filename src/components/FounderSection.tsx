"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function FounderSection() {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let current = 0;
          const target = 25;
          const duration = 1200; // ms
          const intervalTime = duration / target;

          const timer = setInterval(() => {
            current += 1;
            setCount(current);
            if (current >= target) {
              clearInterval(timer);
            }
          }, intervalTime);
        }
      },
      { threshold: 0.3 }
    );

    const el = sectionRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [hasAnimated]);

  const { founder } = siteConfig;

  return (
    <section
      id="founder"
      ref={sectionRef}
      className="py-24 md:py-36 bg-[#0a0a0c] border-t border-[#faf8f5]/10 relative overflow-hidden"
    >
      {/* Subtle atmospheric ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#c5a880]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Founder Portrait (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-sm overflow-hidden border border-[#faf8f5]/10 shadow-2xl group bg-[#121216]">
              <Image
                src={founder.image}
                alt={`${founder.name} — ${founder.designation}`}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-80" />

              {/* Founder Tag Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-sm bg-[#0a0a0c]/90 backdrop-blur-md border border-[#faf8f5]/10">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-medium">
                  {founder.designation}
                </p>
                <p className="font-serif text-lg text-[#faf8f5] font-light mt-0.5">
                  {founder.name}
                </p>
              </div>
            </div>

            {/* Subtle offset gold accent border */}
            <div className="absolute -bottom-4 -left-4 w-full h-full border border-[#c5a880]/20 -z-10 hidden sm:block max-w-md mx-auto" />
          </div>

          {/* Right: Narrative & 25+ Events Stat (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-xs tracking-[0.3em] uppercase text-[#c5a880] font-medium">
                <span className="w-6 h-[1px] bg-[#c5a880]" />
                <span>FOUNDER & EVENT MANAGER</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#faf8f5] leading-[1.15]">
                THE PERSON BEHIND <br />
                <span className="italic text-[#c5a880]">THE CELEBRATIONS.</span>
              </h2>

              <p className="text-base text-[#faf8f5] font-medium tracking-wide">
                {founder.name}
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#c8c2b7] font-light leading-relaxed">
              {founder.story}
            </p>

            {/* 25+ Events Stat Card */}
            <div className="p-6 sm:p-8 rounded-sm bg-[#121216] border border-[#c5a880]/30 shadow-xl space-y-3">
              <div className="flex items-baseline space-x-2">
                <span className="font-serif text-5xl sm:text-6xl text-[#c5a880] font-light tracking-tight">
                  {count}+
                </span>
                <span className="text-xs uppercase tracking-[0.25em] text-[#faf8f5] font-medium">
                  {founder.eventsCountLabel}
                </span>
              </div>
              <p className="text-xs text-[#8c867d] leading-relaxed">
                Hands-on planning, creative direction, spatial styling, and flawless live coordination across every single event.
              </p>
            </div>

            {/* Experience Specializations */}
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.25em] text-[#8c867d]">
                Verified Event Portfolio
              </p>
              <div className="flex flex-wrap gap-2">
                {founder.specializations.map((spec) => (
                  <span
                    key={spec}
                    className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#18181c] border border-[#faf8f5]/10 text-xs text-[#c8c2b7] hover:border-[#c5a880]/40 transition-colors"
                  >
                    <Sparkles className="w-3 h-3 text-[#c5a880] mr-1.5" />
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-7 py-3.5 rounded-full bg-[#c5a880] text-[#0a0a0c] text-xs uppercase tracking-[0.22em] font-semibold hover:bg-[#e0ceb7] transition-all shadow-md group"
              >
                <span>PLAN YOUR EVENT WITH SANATH</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <a
                href={siteConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3.5 rounded-full border border-[#faf8f5]/20 hover:border-[#25D366] text-xs uppercase tracking-[0.22em] font-medium text-[#faf8f5] hover:text-[#25D366] transition-colors"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
