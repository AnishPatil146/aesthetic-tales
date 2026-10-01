import type { Metadata } from "next";
import Image from "next/image";
import { Sparkles, Compass, ShieldCheck } from "lucide-react";
import FounderSection from "@/components/FounderSection";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "About Us | Aesthetic Tales — Indian Event Planning & Management",
  description:
    "Learn about Aesthetic Tales, an Indian event planning and event management brand founded by Sanath Poojari. Creating bespoke birthdays, baby showers, engagements, ring ceremonies, and weddings.",
};

const approachSteps = [
  {
    step: "01",
    name: "IDEA",
    headline: "Discovery & Personal Story",
    description:
      "We begin by understanding who you are, your family traditions, your aesthetic preferences, and the emotional feeling you wish to evoke.",
  },
  {
    step: "02",
    name: "CONCEPT",
    headline: "Develop Theme & Creative Direction",
    description:
      "We translate ideas into cohesive artistic concepts. Mood boards, tactile color palettes, spatial layouts, and custom theme narratives are developed specifically for your celebration venue.",
  },
  {
    step: "03",
    name: "DESIGN",
    headline: "Plan Décor, Mandap & Visual Details",
    description:
      "Every mandap, stage backdrop, organic balloon arch, cake pedestal, floral arrangement, and lighting cue is engineered with care and photogenic poise.",
  },
  {
    step: "04",
    name: "PLAN",
    headline: "Coordinate Vendors, Logistics & Run-of-Show",
    description:
      "Sanath Poojari and our planning team coordinate leading Indian caterers, bakers, florists, lighting engineers, and musicians with minute-by-minute timelines.",
  },
  {
    step: "05",
    name: "EXECUTE",
    headline: "Flawless On-Site Production",
    description:
      "Our dedicated production team arrives hours in advance, constructing stages, setting atmospheric lighting, dressing tables, and perfecting every detail before the first guest arrives.",
  },
  {
    step: "06",
    name: "CELEBRATE",
    headline: "The Client Cherishes the Moment",
    description:
      "You, your family, and your guests step into the celebration without a single operational worry, completely free to create lifelong memories.",
  },
];

const pillars = [
  {
    icon: Sparkles,
    title: "Who We Are",
    desc: "Aesthetic Tales is an Indian event planning and event management brand focused on creating memorable celebrations across Mumbai and destination venues across India.",
  },
  {
    icon: Compass,
    title: "Our Philosophy",
    desc: "Every celebration should feel personal, thoughtful and beautifully executed. We combine creative concepts, spatial scenography, and seamless hospitality.",
  },
  {
    icon: ShieldCheck,
    title: "Our Core Promise",
    desc: "“Your celebration, thoughtfully planned and beautifully executed.” We make our clients see and feel the beauty of celebration without operational stress.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-0">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-[#0a0a0c] overflow-hidden border-b border-[#faf8f5]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center space-x-3 text-xs tracking-[0.3em] uppercase text-[#c5a880] font-medium">
              <span className="w-6 h-[1px] bg-[#c5a880]" />
              <span>ABOUT AESTHETIC TALES</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#faf8f5] leading-[1.08] text-balance">
              WE CREATE THE KIND OF MOMENTS <br />
              <span className="italic text-[#c5a880]">PEOPLE REMEMBER.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#c8c2b7] font-light leading-relaxed">
              Aesthetic Tales is an Indian event planning, event management, and event décor studio. We plan, style and execute unforgettable celebrations — from milestone birthdays and baby showers to romantic engagements, ring ceremonies, and royal weddings.
            </p>
          </div>
        </div>

        {/* Ambient glow */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#c5a880]/5 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Brand Identity / Core Beliefs */}
      <section className="py-24 bg-[#0c0c0f]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-sm bg-[#121216] border border-[#faf8f5]/10 hover:border-[#c5a880]/40 transition-all space-y-4 shadow-lg group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#18181c] border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880] group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="font-serif text-2xl text-[#faf8f5] font-light group-hover:text-[#c5a880] transition-colors">
                    {pillar.title}
                  </h2>
                  <p className="text-sm text-[#8c867d] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story & Photography Section */}
      <section className="py-24 md:py-32 bg-[#0a0a0c] border-t border-[#faf8f5]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Image Collage */}
            <div className="lg:col-span-6 space-y-6">
              <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden border border-[#faf8f5]/10 shadow-2xl">
                <Image
                  src="/images/birthday-soiree.jpg"
                  alt="Aesthetic Tales Bespoke First Birthday Setup"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                  className="object-cover object-center"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-video rounded-sm overflow-hidden border border-[#faf8f5]/10">
                  <Image
                    src="/images/royal-mandap.jpg"
                    alt="Sacred Indian wedding mandap"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-video rounded-sm overflow-hidden border border-[#faf8f5]/10">
                  <Image
                    src="/images/baby-shower.jpg"
                    alt="Baby shower balloon arch"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Story Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center space-x-3 text-xs tracking-[0.3em] uppercase text-[#c5a880] font-medium">
                <span className="w-6 h-[1px] bg-[#c5a880]" />
                <span>Our Vision & Heritage</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#faf8f5] font-light leading-snug">
                Turning your celebration ideas into living, photogenic memories.
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#c8c2b7] font-light leading-relaxed">
                <p>
                  Aesthetic Tales was created to bring warmth, originality, and fresh aesthetic energy to the Indian celebration scene. We are passionate about creating events that reflect the host&apos;s personality rather than rigid corporate formulas.
                </p>
                <p>
                  Whether styling an organic pastel wonderland for a baby shower, building an unforgettable jungle safari for a 1st birthday, designing a candlelit engagement stage, or erecting an architectural floral mandap for a royal wedding, we treat each celebration as a personalized canvas.
                </p>
                <p>
                  Our multidisciplinary team brings together spatial decorators, balloon sculptors, floral artisans, and logistical coordinators who obsess over every small detail.
                </p>
              </div>

              <div className="p-6 rounded-sm bg-[#121216] border border-[#c5a880]/30 space-y-2">
                <p className="font-serif text-lg text-[#faf8f5] italic">
                  &ldquo;Your celebration, thoughtfully planned and beautifully executed.&rdquo;
                </p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880]">
                  The Aesthetic Tales Promise
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prominent Sanath Poojari Founder Section */}
      <FounderSection />

      {/* 6-Step Visual Approach */}
      <section className="py-24 md:py-32 bg-[#0c0c0f] border-t border-[#faf8f5]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <div className="flex items-center justify-center space-x-3 text-xs tracking-[0.3em] uppercase text-[#c5a880] font-medium">
              <span className="w-6 h-[1px] bg-[#c5a880]" />
              <span>OUR APPROACH</span>
              <span className="w-6 h-[1px] bg-[#c5a880]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#faf8f5] tracking-tight">
              IDEA → CONCEPT → DESIGN <br className="hidden sm:inline" />
              <span className="italic text-[#c5a880]">PLAN → EXECUTE → CELEBRATE</span>
            </h2>
            <p className="text-sm sm:text-base text-[#c8c2b7] font-light max-w-xl mx-auto leading-relaxed">
              Our structured approach guarantees creative originality, clear communication, and stress-free execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approachSteps.map((step) => (
              <div
                key={step.step}
                className="p-8 rounded-sm bg-[#121216] border border-[#faf8f5]/10 hover:border-[#c5a880]/40 transition-all duration-300 space-y-4 shadow-lg group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl text-[#c5a880] font-light">
                      {step.step}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#faf8f5]/60 bg-[#18181c] px-2.5 py-1 rounded">
                      {step.name}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-[#faf8f5] group-hover:text-[#c5a880] transition-colors">
                    {step.headline}
                  </h3>
                  <p className="text-xs text-[#8c867d] leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#faf8f5]/10 text-[10px] uppercase tracking-wider text-[#8c867d]">
                  Phase {step.step} of 06
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <ContactCTA />
    </div>
  );
}
