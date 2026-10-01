"use client";

import { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";

const supportedEvents = [
  "Birthdays",
  "Baby Showers",
  "Engagements",
  "Ring Ceremonies",
  "Weddings",
  "Celebrations",
];

export default function CredibilityBanner() {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let current = 0;
          const target = 25;
          const duration = 1200;
          const stepTime = duration / target;

          const timer = setInterval(() => {
            current += 1;
            setCount(current);
            if (current >= target) {
              clearInterval(timer);
            }
          }, stepTime);
        }
      },
      { threshold: 0.3 }
    );

    const el = bannerRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [hasAnimated]);

  return (
    <section
      ref={bannerRef}
      className="relative py-14 sm:py-20 bg-[#070708] border-b border-[#faf8f5]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Main Stat */}
          <div className="flex items-center space-x-6 shrink-0">
            <div className="font-serif text-5xl sm:text-7xl lg:text-8xl font-light text-[#c5a880] tracking-tight leading-none select-none">
              {count}+
            </div>
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.3em] text-[#faf8f5] font-semibold">
                EVENTS PLANNED & EXECUTED
              </p>
              <p className="text-xs text-[#8c867d] font-light max-w-xs leading-relaxed">
                Thoughtfully planned, styled, and managed across Mumbai and premier destinations.
              </p>
            </div>
          </div>

          {/* Supporting Indian Celebrations List */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2.5 sm:gap-3">
            {supportedEvents.map((evt) => (
              <span
                key={evt}
                className="inline-flex items-center px-4 py-2 rounded-full bg-[#121216] border border-[#faf8f5]/15 text-xs text-[#c8c2b7] hover:border-[#c5a880]/50 hover:text-[#faf8f5] transition-all shadow-sm"
              >
                <Sparkles className="w-3 h-3 text-[#c5a880] mr-2 shrink-0" />
                <span>{evt}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
