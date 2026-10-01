import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/content/services";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Services & Capabilities | Aesthetic Tales",
  description:
    "Explore the Indian event services offered by Aesthetic Tales: Birthday Celebrations, Baby Showers, Engagements, Ring Ceremonies, Weddings, Event Décor, and Customized Celebrations.",
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-0">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-[#0a0a0c] border-b border-[#faf8f5]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center space-x-3 text-xs tracking-[0.3em] uppercase text-[#c5a880] font-medium">
              <span className="w-6 h-[1px] bg-[#c5a880]" />
              <span>What We Create</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#faf8f5] leading-tight">
              SERVICES CRAFTED <br />
              <span className="italic text-[#c5a880]">AROUND YOUR STORY.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#c8c2b7] font-light leading-relaxed">
              We offer bespoke event planning, design, and turnkey directorship. Whether orchestrating a multi-day royal wedding or an intimate coastal gathering, we curate every touchpoint with artistic vision and production mastery.
            </p>
          </div>
        </div>
      </section>

      {/* Services List - Each with its own visual editorial section */}
      <section className="py-24 bg-[#0c0c0f]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-32">
          {servicesData.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={service.slug}
                id={service.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Image Col */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative aspect-[16/11] w-full rounded-sm overflow-hidden border border-[#faf8f5]/10 shadow-2xl group">
                    <Image
                      src={service.heroImage}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/70 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded bg-[#0a0a0c]/80 backdrop-blur-md border border-[#faf8f5]/10 text-xs font-mono text-[#c5a880]">
                      0{index + 1}
                    </div>
                  </div>
                </div>

                {/* Content Col */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-medium">
                    {service.tagline}
                  </p>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#faf8f5] font-light">
                    {service.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#c8c2b7] font-light leading-relaxed">
                    {service.fullDescription}
                  </p>

                  {/* What we handle preview */}
                  <div className="space-y-2 pt-2">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#faf8f5] font-semibold">
                      Signature Elements:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#8c867d]">
                      {service.whatWeHandle.slice(0, 4).map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center space-x-4">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center px-6 py-3 rounded-full bg-[#c5a880] text-[#0a0a0c] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#e0ceb7] transition-all group shadow-md"
                    >
                      <span>Explore Service Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <ContactCTA />
    </div>
  );
}
