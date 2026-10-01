"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { eventCategories, eventsData, EventCategory } from "@/content/events";
import { ArrowUpRight, MapPin, Calendar } from "lucide-react";

export default function EventsClient() {
  const [activeCategory, setActiveCategory] = useState<EventCategory>("ALL");

  const filteredEvents = eventsData.filter((event) => {
    if (activeCategory === "ALL") return true;
    return event.category === activeCategory;
  });

  return (
    <div className="pt-28 pb-24">
      {/* Header Section */}
      <section className="py-16 md:py-24 bg-[#0a0a0c] border-b border-[#faf8f5]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center space-x-3 text-xs tracking-[0.3em] uppercase text-[#c5a880] font-medium">
              <span className="w-6 h-[1px] bg-[#c5a880]" />
              <span>OUR CELEBRATION ARCHIVE</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#faf8f5] leading-tight">
              EVENTS WE&apos;VE <br />
              <span className="italic text-[#c5a880]">CREATED.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#c8c2b7] font-light leading-relaxed">
              Explore our portfolio of bespoke Indian celebrations: Birthdays, Baby Showers, Engagements, Ring Ceremonies, Weddings, and Custom Event Décor.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-12 flex flex-wrap gap-2.5 sm:gap-3" role="tablist" aria-label="Event Categories">
            {eventCategories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-[#c5a880] text-[#0a0a0c] shadow-lg shadow-[#c5a880]/20 font-semibold"
                      : "bg-[#121216] border border-[#faf8f5]/15 text-[#c8c2b7] hover:border-[#c5a880]/50 hover:text-[#faf8f5]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Events Showcase - Editorial Grid */}
      <section className="py-24 bg-[#0c0c0f]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {filteredEvents.length === 0 ? (
            <div className="py-20 text-center border border-dashed border-[#faf8f5]/10 rounded-sm">
              <p className="font-serif text-xl text-[#faf8f5]">No celebrations found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <Link
                  key={event.slug}
                  href={`/events/${event.slug}`}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-sm bg-[#121216] border border-[#faf8f5]/10 hover:border-[#c5a880]/50 transition-all duration-500 shadow-xl"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#18181c]">
                    <Image
                      src={event.coverImage}
                      alt={event.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-80" />

                    {/* Category badge */}
                    <div
                      className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold shadow-md bg-[#0a0a0c]/85 backdrop-blur-md border border-[#faf8f5]/15 text-[#faf8f5]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full inline-block mr-1.5" style={{ backgroundColor: event.accentColor }} />
                      {event.categoryLabel}
                    </div>
                  </div>

                  <div className="p-7 space-y-3">
                    <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.25em] text-[#8c867d]">
                      <span className="flex items-center">
                        <MapPin className="w-3 h-3 mr-0.5 text-[#c5a880]" />
                        {event.location}
                      </span>
                      <span>·</span>
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-0.5 text-[#c5a880]" />
                        {event.year}
                      </span>
                    </div>

                    <h2 className="font-serif text-2xl text-[#faf8f5] group-hover:text-[#c5a880] transition-colors leading-snug">
                      {event.title}
                    </h2>

                    <p className="text-xs text-[#8c867d] leading-relaxed line-clamp-2">
                      {event.conceptHeadline}
                    </p>

                    <div className="pt-4 border-t border-[#faf8f5]/10 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] font-medium text-[#c8c2b7] group-hover:text-[#faf8f5] transition-colors">
                      <span>View Event Story</span>
                      <div className="w-7 h-7 rounded-full border border-[#faf8f5]/20 flex items-center justify-center group-hover:border-[#c5a880] group-hover:bg-[#c5a880] group-hover:text-[#0a0a0c] transition-all">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
