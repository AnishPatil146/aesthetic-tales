"use client";

import { useState } from "react";
import { siteConfig } from "@/content/site";
import { MessageCircle, X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Discreet Luxury Tooltip */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center mr-3 px-3.5 py-1.5 rounded-full bg-[#121215]/95 text-[#faf8f5] text-[11px] tracking-wider uppercase border border-[#c5a880]/30 shadow-xl backdrop-blur-md transition-all">
          <span>Enquire on WhatsApp</span>
          <button
            type="button"
            onClick={() => setTooltipDismissed(true)}
            className="ml-2 text-[#8c867d] hover:text-[#faf8f5] p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={siteConfig.whatsapp.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-13 h-13 rounded-full bg-[#18181c] border border-[#c5a880]/50 hover:border-[#c5a880] text-[#faf8f5] flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#25D366] hover:text-white group"
        aria-label="Chat with Aesthetic Tales on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#25D366] rounded-full border-2 border-[#0a0a0c] animate-pulse" />
        <MessageCircle className="w-6 h-6 text-[#25D366] group-hover:text-white transition-colors" />
      </a>
    </div>
  );
}
