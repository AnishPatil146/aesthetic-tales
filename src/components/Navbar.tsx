"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site";
import { Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-[#0a0a0c]/90 backdrop-blur-md border-b border-[#faf8f5]/10 shadow-2xl"
            : "py-6 bg-gradient-to-b from-[#0a0a0c]/80 via-[#0a0a0c]/30 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex flex-col items-start transition-opacity hover:opacity-90"
          >
            <span className="font-serif text-xl sm:text-2xl tracking-[0.22em] text-[#faf8f5] uppercase font-light">
              Aesthetic Tales
            </span>
            <span className="text-[9px] tracking-[0.35em] text-[#c5a880] uppercase -mt-0.5 font-medium transition-colors group-hover:text-[#e0ceb7]">
              Event Planning & Event Décor
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[12px] uppercase tracking-[0.2em] font-medium transition-all duration-300 relative py-1 ${
                    isActive
                      ? "text-[#c5a880]"
                      : "text-[#c8c2b7] hover:text-[#faf8f5]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#c5a880] rounded-full animate-fadeIn" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-[#c5a880]/60 text-[11px] uppercase tracking-[0.22em] font-semibold text-[#faf8f5] hover:bg-[#c5a880] hover:text-[#0a0a0c] transition-all duration-300 group shadow-sm hover:shadow-[#c5a880]/20"
            >
              <span>{siteConfig.ctaText}</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center space-x-3 lg:hidden">
            <Link
              href="/contact"
              className="px-3.5 py-1.5 rounded-full border border-[#c5a880]/70 text-[10px] uppercase tracking-[0.18em] font-semibold text-[#c5a880] hover:bg-[#c5a880] hover:text-[#0a0a0c] transition-all"
            >
              Enquire Now
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#faf8f5] hover:text-[#c5a880] transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#0a0a0c] flex flex-col justify-between px-8 py-24 transition-all duration-500 lg:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="space-y-6 pt-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880]">Menu</p>
          <div className="flex flex-col space-y-4">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-serif text-2xl tracking-wider transition-colors duration-200 ${
                    isActive ? "text-[#c5a880]" : "text-[#faf8f5] hover:text-[#c5a880]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="pt-8 border-t border-[#faf8f5]/10 space-y-5">
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between w-full px-6 py-3.5 bg-[#c5a880] text-[#0a0a0c] rounded-full text-xs uppercase tracking-[0.2em] font-semibold"
          >
            <span>Enquire Now</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <div className="flex items-center justify-between text-xs text-[#8c867d]">
            <a
              href={siteConfig.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-[#c8c2b7] hover:text-[#c5a880] transition-colors"
            >
              <MessageCircle className="w-4 h-4 mr-1.5 text-[#25D366]" />
              WhatsApp
            </a>
            <a
              href={siteConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c8c2b7] hover:text-[#c5a880] transition-colors"
            >
              Instagram
            </a>
            <span>{siteConfig.displayPhone}</span>
          </div>
        </div>
      </div>
    </>
  );
}
