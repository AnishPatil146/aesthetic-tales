import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden text-center border-t border-[#faf8f5]/10">
      {/* Full-width celebration background visual */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/garden-soiree.jpg"
          alt="Aesthetic Tales Garden Celebration"
          fill
          priority
          className="object-cover object-center brightness-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/85 to-[#0a0a0c]/70" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 space-y-6">
        <div className="inline-flex items-center space-x-3 text-xs tracking-[0.3em] uppercase text-[#c5a880] font-medium">
          <span className="w-6 h-[1px] bg-[#c5a880]" />
          <span>BEGIN YOUR JOURNEY</span>
          <span className="w-6 h-[1px] bg-[#c5a880]" />
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#faf8f5] leading-[1.1] text-balance">
          HAVE A CELEBRATION IN MIND?
        </h2>

        <p className="text-base sm:text-lg text-[#c8c2b7] font-light max-w-xl mx-auto leading-relaxed">
          Let&apos;s turn your idea into an experience.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-5">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 rounded-full bg-[#c5a880] text-[#0a0a0c] text-xs uppercase tracking-[0.22em] font-semibold hover:bg-[#e0ceb7] transition-all duration-300 shadow-xl group"
          >
            <span>PLAN YOUR EVENT</span>
            <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <a
            href={siteConfig.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full border border-[#faf8f5]/20 text-[#faf8f5] text-xs uppercase tracking-[0.22em] font-semibold hover:border-[#25D366] hover:text-[#25D366] transition-all duration-300 group bg-[#0a0a0c]/60 backdrop-blur-md"
          >
            <MessageCircle className="w-4 h-4 mr-2 text-[#25D366]" />
            <span>WHATSAPP US</span>
          </a>
        </div>
      </div>
    </section>
  );
}
