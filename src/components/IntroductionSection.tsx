import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function IntroductionSection() {
  return (
    <section id="intro" className="py-24 md:py-36 bg-[#0a0a0c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Column - 6 cols */}
          <div className="lg:col-span-6 space-y-6 lg:pr-8">
            <div className="flex items-center space-x-3 text-xs tracking-[0.3em] uppercase text-[#c5a880] font-medium">
              <span className="w-6 h-[1px] bg-[#c5a880]" />
              <span>WELCOME TO AESTHETIC TALES</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-5xl font-light text-[#faf8f5] leading-[1.15] text-balance">
              YOUR CELEBRATION. <br />
              <span className="italic text-[#c5a880]">OUR CREATIVE TOUCH.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#c8c2b7] font-light leading-relaxed">
              <p>
                Aesthetic Tales is not simply a decoration company. We combine event planning, event management, creative concepts, décor, styling, and execution into cohesive visual storytelling.
              </p>
              <p>
                From joyful milestone birthdays and serene baby showers to romantic engagements, ring ceremonies, sacred wedding mandaps, and intimate family dinners, we plan and style memorable celebrations with uncompromising attention to detail.
              </p>
            </div>

            {/* Signature Metrics / Principles */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#faf8f5]/10">
              <div>
                <p className="font-serif text-2xl sm:text-3xl text-[#c5a880] font-light">Custom</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#8c867d] mt-1">Theme Concepts</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl text-[#faf8f5] font-light">Turnkey</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#8c867d] mt-1">Décor & Styling</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl text-[#c5a880] font-light">25+ Events</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#8c867d] mt-1">Seamless Execution</p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center text-xs uppercase tracking-[0.22em] font-medium text-[#c5a880] hover:text-[#faf8f5] group transition-colors"
              >
                <span>Meet Sanath Poojari & Discover Our Process</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Editorial Photograph - 6 cols with asymmetric frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] w-full max-w-lg mx-auto overflow-hidden rounded-sm border border-[#faf8f5]/10 shadow-2xl group">
              <Image
                src="/images/birthday-soiree.jpg"
                alt="Aesthetic Tales Bespoke Celebration Setup"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                quality={90}
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/80 via-transparent to-transparent opacity-60" />

              {/* Floating Editorial Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0a0a0c]/85 backdrop-blur-md border border-[#faf8f5]/10 text-xs">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] mb-1">
                  Indian Celebration Studio
                </p>
                <p className="font-serif text-base text-[#faf8f5] italic">
                  &ldquo;Your celebration, thoughtfully planned and beautifully executed.&rdquo;
                </p>
              </div>
            </div>

            {/* Subtle decorative offset border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#c5a880]/20 -z-10 hidden sm:block max-w-lg mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
