import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function AboutHighlight() {
  return (
    <section className="py-24 md:py-36 bg-[#070708] border-t border-[#faf8f5]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-3 text-xs tracking-[0.3em] uppercase text-[#c5a880] font-medium">
              <span className="w-6 h-[1px] bg-[#c5a880]" />
              <span>ABOUT AESTHETIC TALES</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#faf8f5] leading-[1.15]">
              YOUR CELEBRATION. <br />
              <span className="italic text-[#c5a880]">OUR CREATIVE TOUCH.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#c8c2b7] font-light leading-relaxed">
              <p>
                <strong className="text-[#faf8f5] font-normal">Who We Are:</strong> Aesthetic Tales is an Indian event planning and creative décor brand focused on creating memorable celebrations across Mumbai and destination venues.
              </p>
              <p>
                <strong className="text-[#faf8f5] font-normal">What We Believe:</strong> Every event should feel personal. Whether designing a whimsical first birthday, a candlelit engagement, a darkly glamorous Halloween party, or an intimate dinner, we do not repeat catalog templates — we tailor the aesthetic around your ideas and personality.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#c8c2b7]">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span>Custom Themes & Mood Boards</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span>Organic Balloon & Floral Scenography</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span>Stage, Backdrop & Table Styling</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span>Complete On-Day Coordination</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center text-xs uppercase tracking-[0.22em] font-medium text-[#c5a880] hover:text-[#faf8f5] transition-colors group"
              >
                <span>Read Full Brand Story</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden border border-[#faf8f5]/10 shadow-2xl">
              <Image
                src="/images/floral-arch.jpg"
                alt="Aesthetic Tales Celebration Styling"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
