import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/content/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PageIntroLoader from "@/components/PageIntroLoader";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0c",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aesthetictales.com"),
  title: {
    default: "Aesthetic Tales | Event Planning & Event Management",
    template: "%s | Aesthetic Tales",
  },
  description:
    "Aesthetic Tales is a premier Indian event planning, event management, and event décor studio founded by Sanath Poojari. Specializing in bespoke Birthdays, Baby Showers, Engagements, Ring Ceremonies, Weddings, and Celebrations across India.",
  keywords: [
    "Aesthetic Tales",
    "Sanath Poojari",
    "event planning and event management",
    "Indian event planner Mumbai",
    "birthday party planner Mumbai",
    "baby shower decor Mumbai",
    "engagement stage decor",
    "ring ceremony planning",
    "wedding mandap scenography",
    "balloon scenography",
    "Indian celebration planner",
    "@theaesthetetales",
  ],
  authors: [{ name: "Aesthetic Tales" }, { name: "Sanath Poojari" }],
  creator: "Sanath Poojari",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://aesthetictales.com",
    siteName: "Aesthetic Tales",
    title: "Aesthetic Tales | Event Planning & Event Management",
    description: "Creating celebrations. Crafting memories. Indian event planning, management, styling, and décor studio.",
    images: [
      {
        url: "/images/hero-wedding.jpg",
        width: 1200,
        height: 675,
        alt: "Aesthetic Tales Celebrations & Décor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aesthetic Tales | Event Planning & Event Management",
    description: "Creating celebrations. Crafting memories. We turn your celebration ideas into unforgettable experiences.",
    images: ["/images/hero-wedding.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org structured data for EventPlanner / LocalBusiness
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "EventPlanner",
    name: siteConfig.name,
    founder: {
      "@type": "Person",
      name: siteConfig.founder.name,
      jobTitle: siteConfig.founder.designation,
    },
    image: "https://aesthetictales.com/images/hero-wedding.jpg",
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    sameAs: [
      siteConfig.instagram.url,
      siteConfig.whatsapp.url,
    ],
    priceRange: "₹₹₹",
  };

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${plusJakarta.variable} antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#0a0a0c] text-[#faf8f5] selection:bg-[#c5a880] selection:text-[#0a0a0c]">
        <PageIntroLoader />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
