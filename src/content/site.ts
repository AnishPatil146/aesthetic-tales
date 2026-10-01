export interface FounderInfo {
  name: string;
  designation: string;
  company: string;
  eventsCount: string;
  eventsCountLabel: string;
  image: string;
  story: string;
  specializations: string[];
}

export interface SiteConfig {
  name: string;
  tagline: string;
  headline: string;
  supportingText: string;
  description: string;
  phone: string;
  displayPhone: string;
  email: string;
  location: string;
  founder: FounderInfo;
  instagram: {
    handle: string;
    url: string;
  };
  whatsapp: {
    number: string;
    prefilledMessage: string;
    url: string;
  };
  navLinks: {
    label: string;
    href: string;
  }[];
  ctaText: string;
}

const rawWhatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "919820012345";
const defaultWhatsappMessage = "Hi Aesthetic Tales, I'd like to enquire about planning an event.";

export const siteConfig: SiteConfig = {
  name: "AESTHETIC TALES",
  tagline: "Creating celebrations. Crafting memories.",
  headline: "CELEBRATIONS MADE BEAUTIFUL.",
  supportingText:
    "Thoughtfully planned, beautifully styled and seamlessly executed celebrations made around your story.",
  description:
    "Aesthetic Tales is a premier Indian event planning, event management, and event décor studio founded by Sanath Poojari. Specializing in bespoke Birthdays, Baby Showers, Engagements, Ring Ceremonies, Weddings, and Celebrations across India.",
  phone: "+91 98200 12345",
  displayPhone: "+91 98200 12345",
  email: "hello@aesthetictales.com",
  location: "Mumbai · Available across India & Select Destinations",
  founder: {
    name: "SANATH POOJARI",
    designation: "FOUNDER & EVENT MANAGER",
    company: "AESTHETIC TALES",
    eventsCount: "25+",
    eventsCountLabel: "EVENTS PLANNED & EXECUTED",
    image: "/images/sanath-poojari.jpg",
    story:
      "With 25+ events planned and managed across birthdays, baby showers, engagements, weddings and celebrations, Sanath Poojari brings a hands-on approach to turning ideas into beautifully executed events. Meticulous logistics and spatial scenography ensure every celebration is delivered with poise, precision, and heartfelt warmth.",
    specializations: [
      "Birthdays",
      "Baby Showers",
      "Engagements",
      "Ring Ceremonies",
      "Weddings",
      "Event Décor",
      "Private Celebrations",
    ],
  },
  instagram: {
    handle: "@theaesthetetales",
    url: "https://www.instagram.com/theaesthetetales/",
  },
  whatsapp: {
    number: rawWhatsappPhone,
    prefilledMessage: defaultWhatsappMessage,
    url: `https://wa.me/${rawWhatsappPhone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
      defaultWhatsappMessage
    )}`,
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Our Events", href: "/events" },
    { label: "Gallery", href: "/gallery" },
    { label: "Videos", href: "/videos" },
    { label: "Contact", href: "/contact" },
  ],
  ctaText: "PLAN YOUR EVENT",
};
