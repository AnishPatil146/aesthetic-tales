"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/content/projects";
import { ArrowUpRight } from "lucide-react";

const categories = [
  { label: "ALL", value: "all" },
  { label: "WEDDINGS", value: "weddings" },
  { label: "CELEBRATIONS", value: "celebrations" },
  { label: "CORPORATE", value: "corporate" },
  { label: "PRIVATE EVENTS", value: "private-events" },
];

export default function WorkClient() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === "all") return true;
    return p.categorySlug === activeFilter;
  });

  return (
    <div className="pt-28 pb-0">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-[#0a0a0c] border-b border-[#faf8f5]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center space-x-3 text-xs tracking-[0.3em] uppercase text-[#c5a880] font-medium">
              <span className="w-6 h-[1px] bg-[#c5a880]" />
              <span>Event Portfolio</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#faf8f5] leading-tight">
              RECENTLY CREATED <br />
              <span className="italic text-[#c5a880]">MOMENTS & CELEBRATIONS.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#c8c2b7] font-light leading-relaxed">
              Explore our curated portfolio of weddings, milestone birthdays, corporate galas, and private retreats. Each represents a distinct narrative designed and executed without compromise.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="pt-12 flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setActiveFilter(cat.value)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all cursor-pointer ${
                  activeFilter === cat.value
                    ? "bg-[#c5a880] text-[#0a0a0c] font-semibold shadow-md"
                    : "bg-[#121216] border border-[#faf8f5]/10 text-[#c8c2b7] hover:border-[#faf8f5]/30 hover:text-[#faf8f5]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase - Asymmetric Editorial Layout */}
      <section className="py-24 bg-[#0c0c0f]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {filteredProjects.length === 0 ? (
            <div className="py-20 text-center border border-dashed border-[#faf8f5]/10 rounded-sm">
              <p className="font-serif text-xl text-[#faf8f5]">No celebrations found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-sm bg-[#121216] border border-[#faf8f5]/10 hover:border-[#c5a880]/50 transition-all duration-500 shadow-xl"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#18181c]">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-80" />

                    <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-[#0a0a0c]/80 backdrop-blur-sm border border-[#faf8f5]/10 text-[10px] uppercase tracking-widest text-[#c5a880]">
                      {project.category}
                    </div>

                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#0a0a0c]/80 backdrop-blur-md border border-[#faf8f5]/20 flex items-center justify-center text-[#faf8f5] opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-4 h-4 text-[#c5a880]" />
                    </div>
                  </div>

                  <div className="p-7 space-y-2">
                    <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.25em] text-[#c5a880]">
                      <span>{project.location}</span>
                      <span>·</span>
                      <span>{project.year}</span>
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl text-[#faf8f5] group-hover:text-[#c5a880] transition-colors font-light">
                      {project.title}
                    </h2>
                    <p className="text-xs text-[#8c867d] leading-relaxed line-clamp-2">
                      {project.shortDescription}
                    </p>
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
