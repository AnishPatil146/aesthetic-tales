import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background with dark overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/floral-arch.jpg"
          alt="Aesthetic Tales Archway"
          fill
          priority
          className="object-cover object-center brightness-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/80 to-[#0a0a0c]/60" />
      </div>

      <div className="max-w-xl mx-auto text-center space-y-6 relative z-10">
        <p className="text-xs uppercase tracking-[0.35em] text-[#c5a880] font-medium">
          404 · Page Not Found
        </p>

        <h1 className="font-serif text-4xl sm:text-6xl font-light text-[#faf8f5] leading-tight text-balance">
          THIS STORY <br />
          <span className="italic text-[#c5a880]">ISN&apos;T HERE.</span>
        </h1>

        <p className="text-sm text-[#c8c2b7] font-light max-w-md mx-auto leading-relaxed">
          Let&apos;s get you back to the celebrations.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-[#c5a880] text-[#0a0a0c] text-xs uppercase tracking-[0.22em] font-semibold hover:bg-[#e0ceb7] transition-all shadow-xl group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            <span>BACK HOME</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
