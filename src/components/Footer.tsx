import Link from "next/link";
import { siteConfig } from "@/content/site";
import { servicesData } from "@/content/services";
import { ArrowUpRight, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/icons";

export default function Footer() {
  const footerNavLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Our Events", href: "/events" },
    { label: "Gallery", href: "/gallery" },
    { label: "Videos", href: "/videos" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-[#070708] border-t border-[#faf8f5]/10 pt-20 pb-12 text-[#c8c2b7]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-[#faf8f5]/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.25em] text-[#faf8f5] uppercase font-light">
                Aesthetic Tales
              </span>
              <p className="text-[10px] tracking-[0.35em] text-[#c5a880] uppercase mt-1">
                Indian Event Planning & Event Management
              </p>
            </Link>
            <div className="font-serif text-lg italic text-[#c8c2b7] space-y-0.5">
              <p>Creating celebrations.</p>
              <p className="text-[#c5a880]">Crafting memories.</p>
            </div>
            <p className="text-xs leading-relaxed text-[#8c867d] max-w-sm">
              We plan, style and execute memorable Indian celebrations — from birthdays and baby showers to engagements, ring ceremonies, weddings, and customized celebrations.
            </p>

            <div className="flex items-center space-x-4 pt-2">
              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#faf8f5]/15 flex items-center justify-center text-[#faf8f5] hover:border-[#c5a880] hover:text-[#c5a880] transition-colors"
                aria-label="Follow Aesthetic Tales on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#faf8f5]/15 flex items-center justify-center text-[#faf8f5] hover:border-[#25D366] hover:text-[#25D366] transition-colors"
                aria-label="Enquire on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#faf8f5] font-medium">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#c5a880] transition-colors inline-flex items-center"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Celebrations & Services */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#faf8f5] font-medium">
              Celebrations
            </h3>
            <ul className="space-y-2.5 text-xs">
              {servicesData.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-[#c5a880] transition-colors inline-flex items-center"
                  >
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-[#c5a880] hover:underline transition-all inline-flex items-center text-[11px] uppercase tracking-wider font-medium pt-1"
                >
                  View All Services <ArrowUpRight className="w-3 h-3 ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Inquiries */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#faf8f5] font-medium">
              Enquiries
            </h3>
            <div className="space-y-3 text-xs text-[#8c867d]">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <span>{siteConfig.location}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#c5a880] shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-[#faf8f5] transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#c5a880] shrink-0" />
                <a
                  href={siteConfig.whatsapp.url}
                  className="hover:text-[#faf8f5] transition-colors"
                >
                  {siteConfig.displayPhone}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center text-xs uppercase tracking-[0.2em] font-semibold text-[#c5a880] hover:text-[#faf8f5] transition-colors"
              >
                <span>Plan Your Event</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#8c867d] space-y-4 sm:space-y-0">
          <p>© 2026 Aesthetic Tales. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <a
              href={siteConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#faf8f5] transition-colors"
            >
              {siteConfig.instagram.handle}
            </a>
            <span className="text-[#faf8f5]/20">·</span>
            <span>Indian Event Planning & Event Décor</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
