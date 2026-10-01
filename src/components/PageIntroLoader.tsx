"use client";

import { useEffect, useState } from "react";

export default function PageIntroLoader() {
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Only show once per session to avoid intrusive delays
    const hasSeen = sessionStorage.getItem("at_intro_seen");
    if (hasSeen) return;

    // Use requestAnimationFrame to avoid synchronous setState inside effect
    const showFrame = requestAnimationFrame(() => {
      setVisible(true);
    });

    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 1100);

    const removeTimer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("at_intro_seen", "true");
    }, 1500);

    return () => {
      cancelAnimationFrame(showFrame);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#070708] flex flex-col items-center justify-center transition-opacity duration-500 ease-out pointer-events-none ${
        fading ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div className="text-center space-y-4 px-6 animate-fadeIn">
        <div className="w-12 h-[1px] bg-[#c5a880] mx-auto mb-2" />
        <h1 className="font-serif text-2xl sm:text-4xl text-[#faf8f5] tracking-[0.25em] uppercase font-light">
          AESTHETIC TALES
        </h1>
        <p className="text-[10px] sm:text-xs text-[#c5a880] tracking-[0.35em] uppercase font-light">
          Celebrations Made Beautiful
        </p>
      </div>
    </div>
  );
}
