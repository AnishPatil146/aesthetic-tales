import { testimonialsConfig } from "@/content/testimonials";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  const { enabled, items } = testimonialsConfig;

  return (
    <section className="py-24 md:py-36 bg-[#0a0a0c] border-t border-[#faf8f5]/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center space-x-3 text-xs tracking-[0.3em] uppercase text-[#c5a880] font-medium">
            <span className="w-6 h-[1px] bg-[#c5a880]" />
            <span>Words of Trust</span>
            <span className="w-6 h-[1px] bg-[#c5a880]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#faf8f5] tracking-tight">
            CLIENT PERSPECTIVES
          </h2>
          <p className="text-xs sm:text-sm text-[#8c867d]">
            Reflections from host families, parents, and couples whose celebrations we planned and styled.
          </p>
        </div>

        {enabled && items.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map((item) => (
              <div
                key={item.id}
                className="relative p-8 rounded-sm bg-[#111115] border border-[#faf8f5]/10 flex flex-col justify-between space-y-6 hover:border-[#c5a880]/30 transition-all shadow-md group"
              >
                <Quote className="w-8 h-8 text-[#c5a880]/30 group-hover:text-[#c5a880]/60 transition-colors" />

                <p className="font-serif text-lg sm:text-xl text-[#faf8f5] font-light leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div className="pt-6 border-t border-[#faf8f5]/10 space-y-1">
                  <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#faf8f5]">
                    {item.client}
                  </p>
                  <p className="text-[11px] text-[#c5a880]">
                    {item.event} · {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Elegant CMS-ready empty state */
          <div className="p-12 text-center border border-dashed border-[#faf8f5]/15 rounded-sm max-w-xl mx-auto space-y-3">
            <Quote className="w-8 h-8 text-[#c5a880]/30 mx-auto" />
            <h3 className="font-serif text-xl text-[#faf8f5]">
              Curated Client Testimonials
            </h3>
            <p className="text-xs text-[#8c867d] leading-relaxed">
              Client testimonials are curated upon project debrief and published here with permission. Connect with our concierge to request verified private references.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
