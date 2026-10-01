"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const processStages = [
  {
    step: "01",
    id: "idea",
    name: "IDEA",
    subtitle: "Discovery & Personal Vision",
    shortSummary: "You tell us what you're imagining.",
    description:
      "You tell us what you're imagining. We begin by listening deeply to your celebration vision, family traditions, aesthetic preferences, guest count, and the feeling you want to evoke.",
    deliverables: ["Initial Discovery Call", "Budget Allocation Framework", "Date & Venue Consultation"],
  },
  {
    step: "02",
    id: "concept",
    name: "CONCEPT",
    subtitle: "Theme & Creative Narrative",
    shortSummary: "We develop the creative direction.",
    description:
      "We develop the creative direction. Our creative team develops original concept mood boards, bespoke color palettes, visual narratives, and thematic styling tailored to your story.",
    deliverables: ["Bespoke Mood Board", "Color Palette Curation", "Spatial Floor Layout 2D/3D"],
  },
  {
    step: "03",
    id: "design",
    name: "DESIGN",
    subtitle: "Décor, Mandap & Visual Details",
    shortSummary: "Décor, styling and visual details.",
    description:
      "Décor, styling and visual details. Architectural mandap drawings, stage scenography, organic balloon sculpting, floral cultivar selections, lighting washes, and tablescape samples.",
    deliverables: ["Stage & Backdrop Engineering", "Custom Floral & Lighting Specs", "Tableware & Linen Swatches"],
  },
  {
    step: "04",
    id: "plan",
    name: "PLAN",
    subtitle: "Vendor Orchestration & Logistics",
    shortSummary: "Coordination and preparation.",
    description:
      "Coordination and preparation. Sanath Poojari coordinates top Indian florists, caterers, lighting artists, sound technicians, and artisans with minute-by-minute run-of-show schedules.",
    deliverables: ["Master Production Timeline", "Vendor Contracting & Briefs", "Licensing & Venue Compliance"],
  },
  {
    step: "05",
    id: "execute",
    name: "EXECUTE",
    subtitle: "Flawless On-Site Production",
    shortSummary: "We bring everything together.",
    description:
      "We bring everything together. Our dedicated crew builds the transformation hours ahead of guest arrival, performing sound checks, floral conditioning, and atmospheric lighting tests.",
    deliverables: ["Precision Staging & Rigging", "Floral & Scenography Dressing", "Command Center Supervision"],
  },
  {
    step: "06",
    id: "celebrate",
    name: "CELEBRATE",
    subtitle: "Joyful Memories & Peace of Mind",
    shortSummary: "You enjoy the moment.",
    description:
      "You enjoy the moment. You arrive as an honored guest to your own celebration. We guide every cue, toast, ritual, and cake cutting so you can cherish every precious moment.",
    deliverables: ["On-Day Floor Directorship", "Guest Hospitality Flow", "Seamless Midnight Wrap-Up"],
  },
];

export default function PhilosophySection() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = processStages[activeStageIndex];

  return (
    <section id="process" className="py-24 md:py-36 bg-[#070708] border-t border-[#faf8f5]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center space-x-3 text-xs tracking-[0.3em] uppercase text-[#c5a880] font-medium">
            <span className="w-6 h-[1px] bg-[#c5a880]" />
            <span>EVENT PLANNING PROCESS</span>
            <span className="w-6 h-[1px] bg-[#c5a880]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#faf8f5] tracking-tight">
            FROM IDEA <br className="hidden sm:inline" />
            <span className="italic text-[#c5a880]">TO EVENT.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#c8c2b7] font-light max-w-xl mx-auto leading-relaxed">
            Every celebration at Aesthetic Tales follows our structured 6-stage methodology — ensuring every detail is thoughtfully planned and beautifully executed.
          </p>
        </div>

        {/* Interactive Stage Selector Bar */}
        <div className="relative mb-12">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-[#faf8f5]/15 -translate-y-1/2 -z-0" />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 relative z-10">
            {processStages.map((stage, idx) => {
              const isActive = activeStageIndex === idx;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActiveStageIndex(idx)}
                  className={`p-3.5 sm:p-4 rounded-sm border text-left transition-all duration-300 flex flex-col justify-between space-y-2 cursor-pointer ${
                    isActive
                      ? "bg-[#16161c] border-[#c5a880] shadow-lg shadow-[#c5a880]/10 scale-102"
                      : "bg-[#0d0d10] border-[#faf8f5]/10 hover:border-[#faf8f5]/30 opacity-70 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-mono font-medium ${
                        isActive ? "text-[#c5a880]" : "text-[#8c867d]"
                      }`}
                    >
                      {stage.step}
                    </span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#c5a880] animate-ping" />
                    )}
                  </div>
                  <div>
                    <p
                      className={`text-xs uppercase tracking-widest font-semibold ${
                        isActive ? "text-[#faf8f5]" : "text-[#8c867d]"
                      }`}
                    >
                      {stage.name}
                    </p>
                    <p className="text-[10px] text-[#8c867d] line-clamp-1 mt-0.5">
                      {stage.shortSummary}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Card */}
        <div className="p-8 sm:p-12 rounded-sm bg-[#101014] border border-[#faf8f5]/15 shadow-2xl relative overflow-hidden transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.25em] text-[#c5a880]">
                <span>Phase {activeStage.step} of 06</span>
                <span>•</span>
                <span>{activeStage.subtitle}</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-[#faf8f5] font-light">
                {activeStage.name} — {activeStage.shortSummary}
              </h3>

              <p className="text-sm sm:text-base text-[#c8c2b7] font-light leading-relaxed max-w-2xl">
                {activeStage.description}
              </p>

              <div className="pt-2 space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-[#8c867d]">
                  Key Deliverables in this stage:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  {activeStage.deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-sm bg-[#16161c] border border-[#faf8f5]/10 text-xs text-[#faf8f5] flex items-center space-x-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                      <span className="text-[11px]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-end text-right space-y-4">
              <span className="font-serif text-7xl sm:text-8xl text-[#c5a880]/20 font-light select-none">
                {activeStage.step}
              </span>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-full bg-[#c5a880] text-[#0a0a0c] text-xs uppercase tracking-[0.22em] font-semibold hover:bg-[#e0ceb7] transition-all shadow-md group"
              >
                <span>PLAN YOUR EVENT</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
