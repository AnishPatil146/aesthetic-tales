"use client";

import { useState } from "react";
import { faqsData } from "@/content/faqs";
import { ChevronDown, MessageCircle } from "lucide-react";
import { siteConfig } from "@/content/site";

const categories = [
  "ALL",
  "General",
  "Planning & Booking",
  "Styling & Décor",
  "Destinations & Logistics",
] as const;

export default function FaqClient() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [expandedId, setExpandedId] = useState<string | null>("faq-1");

  const toggleAccordion = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const filteredFaqs = faqsData.filter((faq) => {
    if (activeCategory === "ALL") return true;
    return faq.category === activeCategory;
  });

  return (
    <div className="pt-28 pb-0">
      {/* Header */}
      <section className="py-20 md:py-28 bg-[#0a0a0c] border-b border-[#faf8f5]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center space-x-3 text-xs tracking-[0.3em] uppercase text-[#c5a880] font-medium">
              <span className="w-6 h-[1px] bg-[#c5a880]" />
              <span>Inquiries & Guidance</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#faf8f5] leading-tight">
              FREQUENTLY ASKED <br />
              <span className="italic text-[#c5a880]">QUESTIONS.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#c8c2b7] font-light leading-relaxed">
              Find transparent answers regarding our planning timeline, destination logistics, custom decor capabilities, and private booking process.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="pt-12 flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#c5a880] text-[#0a0a0c] font-semibold shadow-md"
                    : "bg-[#121216] border border-[#faf8f5]/10 text-[#c8c2b7] hover:border-[#faf8f5]/30 hover:text-[#faf8f5]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Accordion */}
      <section className="py-24 bg-[#0c0c0f]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-4">
          {filteredFaqs.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-sm bg-[#121216] border border-[#faf8f5]/10 overflow-hidden transition-all duration-300 hover:border-[#c5a880]/30"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between space-x-4 cursor-pointer focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-[#c5a880]">
                      {faq.category}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl text-[#faf8f5] font-light">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full border border-[#faf8f5]/10 flex items-center justify-center text-[#c8c2b7] shrink-0 transition-transform duration-300 ${
                      isExpanded ? "rotate-180 text-[#c5a880] border-[#c5a880]/40" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-[#8c867d] leading-relaxed border-t border-[#faf8f5]/5 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}

          {/* Need Direct Assistance Box */}
          <div className="pt-12">
            <div className="p-8 rounded-sm bg-[#18181e] border border-[#c5a880]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-2">
                <h4 className="font-serif text-xl text-[#faf8f5]">
                  Have a bespoke question not answered here?
                </h4>
                <p className="text-xs text-[#8c867d]">
                  Our private concierge is available on WhatsApp to answer event dates and logistics directly.
                </p>
              </div>

              <a
                href={siteConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#20ba59] transition-all shrink-0"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
