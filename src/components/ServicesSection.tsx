import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/content/services";
import { ArrowUpRight } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="py-24 md:py-36 bg-[#0c0c0f] border-t border-[#faf8f5]/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-xs tracking-[0.3em] uppercase text-[#c5a880] font-medium">
              <span className="w-6 h-[1px] bg-[#c5a880]" />
              <span>Services & Capabilities</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#faf8f5] tracking-tight">
              WHAT WE DO
            </h2>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center text-xs uppercase tracking-[0.22em] font-medium text-[#c8c2b7] hover:text-[#c5a880] transition-colors self-start md:self-auto group"
          >
            <span>View All Services</span>
            <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Services Grid with Image Zoom & Subtle Text Movement */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative flex flex-col justify-between overflow-hidden rounded-sm bg-[#121216] border border-[#faf8f5]/10 hover:border-[#c5a880]/50 transition-all duration-500 shadow-lg"
            >
              {/* Image Container with Zoom */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#18181c]">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-[#121216]/30 to-transparent" />

                {/* Step badge */}
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#0a0a0c]/80 backdrop-blur-sm border border-[#faf8f5]/10 text-[9px] uppercase tracking-widest text-[#c5a880]">
                  0{index + 1}
                </div>
              </div>

              {/* Service Info */}
              <div className="p-6 flex-1 flex flex-col justify-between transition-transform duration-300 group-hover:-translate-y-1">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#c5a880] font-medium">
                    {service.category}
                  </span>
                  <h3 className="font-serif text-xl text-[#faf8f5] group-hover:text-[#c5a880] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#8c867d] leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#faf8f5]/10 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] font-medium text-[#c8c2b7] group-hover:text-[#faf8f5] transition-colors">
                  <span>Explore</span>
                  <div className="w-6 h-6 rounded-full border border-[#faf8f5]/20 flex items-center justify-center group-hover:border-[#c5a880] group-hover:bg-[#c5a880] group-hover:text-[#0a0a0c] transition-all">
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
