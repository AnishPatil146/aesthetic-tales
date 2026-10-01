import Image from "next/image";
import Link from "next/link";
import { eventsData } from "@/content/events";
import { ArrowUpRight } from "lucide-react";

export default function FeaturedWork() {
  const featured = eventsData.slice(0, 5);

  return (
    <section className="py-24 md:py-36 bg-[#0a0a0c] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-xs tracking-[0.3em] uppercase text-[#c5a880] font-medium">
              <span className="w-6 h-[1px] bg-[#c5a880]" />
              <span>Celebration Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#faf8f5] tracking-tight">
              EVENTS WE&apos;VE CREATED
            </h2>
          </div>

          <Link
            href="/events"
            className="inline-flex items-center text-xs uppercase tracking-[0.22em] font-medium text-[#c8c2b7] hover:text-[#c5a880] transition-colors self-start md:self-auto group"
          >
            <span>View All Events</span>
            <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Asymmetric Editorial Portfolio Grid */}
        <div className="space-y-16">
          {/* Project 1: Full-Width Grand Hero Showcase */}
          {featured[0] && (
            <Link
              href={`/events/${featured[0].slug}`}
              className="group block relative overflow-hidden rounded-sm border border-[#faf8f5]/10 bg-[#121215]"
            >
              <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
                <Image
                  src={featured[0].coverImage}
                  alt={featured[0].title}
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/40 to-transparent" />
              </div>

              <div className="p-8 sm:p-12 relative flex flex-col md:flex-row md:items-end justify-between gap-6 -mt-16 sm:-mt-24 z-10">
                <div className="space-y-2 max-w-2xl bg-[#0a0a0c]/85 backdrop-blur-md p-6 rounded-sm border border-[#faf8f5]/10">
                  <div className="flex items-center space-x-3 text-[11px] uppercase tracking-[0.25em] text-[#c5a880]">
                    <span>{featured[0].categoryLabel}</span>
                    <span>·</span>
                    <span>{featured[0].location}</span>
                    <span>·</span>
                    <span>{featured[0].year}</span>
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#faf8f5] group-hover:text-[#c5a880] transition-colors font-light">
                    {featured[0].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8c867d] leading-relaxed">
                    {featured[0].conceptHeadline}
                  </p>
                </div>

                <div className="hidden sm:inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#faf8f5] group-hover:text-[#c5a880] transition-colors bg-[#0a0a0c]/85 backdrop-blur-md px-6 py-4 rounded-full border border-[#faf8f5]/10">
                  <span>View Event Story</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          )}

          {/* Project 2 & 3: Asymmetric Duo (Royal Sangeet & Baby Shower) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {featured[1] && (
              <Link
                href={`/events/${featured[1].slug}`}
                className="lg:col-span-6 group block relative overflow-hidden rounded-sm border border-[#faf8f5]/10 bg-[#121215]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={featured[1].coverImage}
                    alt={featured[1].title}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-7 space-y-2">
                  <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-medium">
                    <span>{featured[1].categoryLabel}</span>
                    <span>·</span>
                    <span>{featured[1].location}</span>
                    <span>·</span>
                    <span>{featured[1].year}</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#faf8f5] group-hover:text-[#c5a880] transition-colors">
                    {featured[1].title}
                  </h3>
                  <p className="text-xs text-[#8c867d] leading-relaxed line-clamp-2">
                    {featured[1].conceptHeadline}
                  </p>
                </div>
              </Link>
            )}

            {featured[2] && (
              <Link
                href={`/events/${featured[2].slug}`}
                className="lg:col-span-6 group block relative overflow-hidden rounded-sm border border-[#faf8f5]/10 bg-[#121215]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={featured[2].coverImage}
                    alt={featured[2].title}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-7 space-y-2">
                  <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.25em] text-[#d9a5b3] font-medium">
                    <span>{featured[2].categoryLabel}</span>
                    <span>·</span>
                    <span>{featured[2].location}</span>
                    <span>·</span>
                    <span>{featured[2].year}</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#faf8f5] group-hover:text-[#c5a880] transition-colors">
                    {featured[2].title}
                  </h3>
                  <p className="text-xs text-[#8c867d] leading-relaxed line-clamp-2">
                    {featured[2].conceptHeadline}
                  </p>
                </div>
              </Link>
            )}
          </div>

          {/* Project 4 & 5: Engagement and Palace Wedding */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {featured[3] && (
              <Link
                href={`/events/${featured[3].slug}`}
                className="lg:col-span-7 group block relative overflow-hidden rounded-sm border border-[#faf8f5]/10 bg-[#121215]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={featured[3].coverImage}
                    alt={featured[3].title}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-7 space-y-2">
                  <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.25em] text-[#c5a880]">
                    <span>{featured[3].categoryLabel}</span>
                    <span>·</span>
                    <span>{featured[3].location}</span>
                    <span>·</span>
                    <span>{featured[3].year}</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#faf8f5] group-hover:text-[#c5a880] transition-colors">
                    {featured[3].title}
                  </h3>
                  <p className="text-xs text-[#8c867d] leading-relaxed line-clamp-2">
                    {featured[3].conceptHeadline}
                  </p>
                </div>
              </Link>
            )}

            {featured[4] && (
              <Link
                href={`/events/${featured[4].slug}`}
                className="lg:col-span-5 group block relative overflow-hidden rounded-sm border border-[#faf8f5]/10 bg-[#121215]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={featured[4].coverImage}
                    alt={featured[4].title}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-7 space-y-2">
                  <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.25em] text-[#c5a880]">
                    <span>{featured[4].categoryLabel}</span>
                    <span>·</span>
                    <span>{featured[4].location}</span>
                    <span>·</span>
                    <span>{featured[4].year}</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#faf8f5] group-hover:text-[#c5a880] transition-colors">
                    {featured[4].title}
                  </h3>
                  <p className="text-xs text-[#8c867d] leading-relaxed line-clamp-2">
                    {featured[4].conceptHeadline}
                  </p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
