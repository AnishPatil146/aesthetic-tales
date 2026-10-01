export interface ProjectItem {
  slug: string;
  title: string;
  category: string;
  categorySlug: "weddings" | "celebrations" | "corporate" | "private-events";
  location: string;
  year: string;
  guestCount: string;
  duration: string;
  coverImage: string;
  heroImage: string;
  shortDescription: string;
  conceptHeadline: string;
  story: string[];
  roles: string[];
  gallery: {
    url: string;
    caption: string;
    aspectRatio?: "landscape" | "portrait" | "square" | "panoramic";
  }[];
  videoHighlight?: {
    title: string;
    duration: string;
    poster: string;
    url?: string;
  };
  testimonial?: {
    quote: string;
    client: string;
    role: string;
  };
}

export const projectsData: ProjectItem[] = [
  {
    slug: "the-royal-affair",
    title: "The Royal Affair",
    category: "Wedding Celebration",
    categorySlug: "weddings",
    location: "Udaipur & Mumbai",
    year: "2026",
    guestCount: "350 Guests",
    duration: "3 Days",
    coverImage: "/images/hero-wedding.jpg",
    heroImage: "/images/hero-wedding.jpg",
    shortDescription:
      "A grand 3-day royal palace celebration framed with cascading white orchids, antique crystal chandeliers, and candlelit banquet halls.",
    conceptHeadline: "Where ancestral heritage meets refined modern romanticism.",
    story: [
      "Set against the majestic courtyards of a historic palace estate, The Royal Affair was envisioned as a multi-sensory journey through classic grandeur and contemporary editorial styling.",
      "A glass canopy was engineered across the open-air courtyard to preserve views of the starry sky, while suspending fifty bespoke crystal chandeliers. Below, mirrored banquet tables stretched into the distance, reflecting tens of thousands of white orchids, avalanche roses, and hand-poured pillar candles.",
      "Over three days, our team managed all facets of guest logistics, from bespoke airport arrivals and personalized welcome suites to a high-energy twilight Sangeet and an emotional morning pheras ceremony overlooking the water.",
    ],
    roles: [
      "Full Concept & Creative Scenography",
      "Architectural Glass Canopy & Chandelier Rigging",
      "Floral Architecture & Botanical Sourcing",
      "Guest Concierge & VIP Logistics",
      "Menu Design & Mirrored Tablescape Styling",
      "Cinematography & Sound Orchestration",
      "On-Site Master Floor Directorship",
    ],
    gallery: [
      { url: "/images/hero-wedding.jpg", caption: "The Grand Courtyard Dinner under glass canopy and crystal chandeliers", aspectRatio: "panoramic" },
      { url: "/images/royal-mandap.jpg", caption: "Sunset Mandap framed with baby's breath and warm glowing lanterns", aspectRatio: "landscape" },
      { url: "/images/couple-palace.jpg", caption: "Editorial portrait on the palace balcony at twilight", aspectRatio: "portrait" },
      { url: "/images/tablescape.jpg", caption: "Hand-poured beeswax tapers and bespoke menu calligraphy", aspectRatio: "landscape" },
      { url: "/images/floral-arch.jpg", caption: "Monumental stone archway draped in ivory garden blooms", aspectRatio: "landscape" },
      { url: "/images/styling-flatlay.jpg", caption: "Handmade deckle-edge stationery and custom wax seals", aspectRatio: "landscape" },
    ],
    videoHighlight: {
      title: "The Royal Affair — 3-Day Wedding Film Highlights",
      duration: "02:45",
      poster: "/images/hero-wedding.jpg",
    },
    testimonial: {
      quote:
        "Aesthetic Tales turned our impossible dream into absolute effortless poetry. We walked into the courtyard and were brought to tears by the beauty.",
      client: "Aanya & Kabir",
      role: "Bride & Groom",
    },
  },
  {
    slug: "celestial-glasshouse",
    title: "The Celestial Glasshouse",
    category: "Milestone Celebration",
    categorySlug: "celebrations",
    location: "Alibaug",
    year: "2026",
    guestCount: "45 Guests",
    duration: "Evening",
    coverImage: "/images/birthday-soiree.jpg",
    heroImage: "/images/birthday-soiree.jpg",
    shortDescription:
      "An exclusive 30th birthday dinner in an illuminated glass conservatory with hanging wisteria, black mirrored dining, and curated tasting courses.",
    conceptHeadline: "Intimate nocturnal glamour beneath hanging blooms and amber filaments.",
    story: [
      "For this milestone 30th celebration, the client requested an intimate dinner that bypassed standard club aesthetics in favor of a private, high-design nocturnal sanctuary.",
      "We transformed a secluded botanical glasshouse into a sleek private dining room. Deep navy velvet curved banquettes enveloped a seamless black mirrored table that mirrored amber filament globes and hanging wisteria above.",
      "A seven-course progressive culinary tasting was served alongside custom craft cocktails curated by our visiting mixologist.",
    ],
    roles: [
      "Venue Transformation & Spatial Styling",
      "Suspended Botanical Ceiling Installation",
      "Private Chef & Sommelier Collaboration",
      "Ambient Lighting & Custom Neon Directorship",
      "Guest Seating & Monogrammed Keepsakes",
    ],
    gallery: [
      { url: "/images/birthday-soiree.jpg", caption: "The conservatory dining room glowing at twilight", aspectRatio: "landscape" },
      { url: "/images/champagne-tower.jpg", caption: "Champagne coupe tower centerpiece toast", aspectRatio: "portrait" },
      { url: "/images/tablescape.jpg", caption: "Smoke crystal stemware and matte black stationery", aspectRatio: "landscape" },
    ],
    videoHighlight: {
      title: "Celestial Glasshouse — Evening Reel",
      duration: "01:15",
      poster: "/images/birthday-soiree.jpg",
    },
    testimonial: {
      quote:
        "The most sophisticated evening of our lives. My guests are still talking about the atmosphere, the food, and the stunning styling.",
      client: "Devika M.",
      role: "Host",
    },
  },
  {
    slug: "twilight-at-the-lake",
    title: "Twilight at the Lake",
    category: "Engagement Ceremony",
    categorySlug: "weddings",
    location: "Udaipur",
    year: "2025",
    guestCount: "120 Guests",
    duration: "Sunset & Evening",
    coverImage: "/images/royal-mandap.jpg",
    heroImage: "/images/royal-mandap.jpg",
    shortDescription:
      "A breathtaking lakeside ring ceremony staged on a mirrored reflective platform amidst floating lanterns and thousands of white blossoms.",
    conceptHeadline: "Vows whispered where golden water meets cascading blossoms.",
    story: [
      "Designed as a tranquil sunset engagement, this ceremony was held on an extended jetty overlooking serene waters in Udaipur. As golden hour turned to dusk, ambient lanterns flickered to life across the shoreline.",
      "The focal point was an architectural dome enveloped in cloud-like gypsophila and white tuberoses, hovering above a reflective mirror aisle that mirrored the sky.",
    ],
    roles: [
      "Waterfront Pavilion Engineering",
      "Floral Architecture & Floating Candles",
      "Live Acoustic String Quartet Curation",
      "Guest Welcome & Sunset Cocktail Program",
    ],
    gallery: [
      { url: "/images/royal-mandap.jpg", caption: "The mirrored lake platform at peak golden hour", aspectRatio: "landscape" },
      { url: "/images/floral-arch.jpg", caption: "Candlelit aisle leading to the waterfront", aspectRatio: "portrait" },
      { url: "/images/couple-palace.jpg", caption: "Sunset portrait following the ring exchange", aspectRatio: "portrait" },
    ],
    testimonial: {
      quote:
        "Every single detail was treated like fine art. Aesthetic Tales created a magical, reverent atmosphere that exceeded our wildest hopes.",
      client: "Rhea & Siddharth",
      role: "Couple",
    },
  },
  {
    slug: "luminary-gala",
    title: "The Luminary Gala",
    category: "Corporate Gala & Summit",
    categorySlug: "corporate",
    location: "Mumbai",
    year: "2025",
    guestCount: "500 Guests",
    duration: "Full Day & Evening",
    coverImage: "/images/corporate-gala.jpg",
    heroImage: "/images/corporate-gala.jpg",
    shortDescription:
      "An architectural summit and awards dinner featuring sculpted geometric lighting, high-definition stage scenography, and luxury VIP hospitality.",
    conceptHeadline: "Corporate leadership articulated through architectural grandeur.",
    story: [
      "To celebrate twenty years of industry innovation, this corporate summit needed a stage and dining experience worthy of global business icons.",
      "Our team designed a polygonal architectural stage with layered warm backlighting and sculpted acoustics. The transition from daytime thought-leadership to the evening black-tie gala banquet was completed in under ninety minutes.",
    ],
    roles: [
      "Spatial Stage Architecture & Lighting Design",
      "Keynote AV & Live Broadcast Direction",
      "Banquet Flow & Seating Protocol Management",
      "VIP Green Room Concierge",
      "Award Ceremony Show Calling",
    ],
    gallery: [
      { url: "/images/corporate-gala.jpg", caption: "The main ballroom during the opening keynote", aspectRatio: "panoramic" },
      { url: "/images/champagne-tower.jpg", caption: "Executive welcome reception", aspectRatio: "portrait" },
    ],
    testimonial: {
      quote:
        "Flawless execution. In fifteen years of organizing our annual gala, this was the smoothest and visually most impressive edition by far.",
      client: "Vikram Singhania",
      role: "Managing Director",
    },
  },
  {
    slug: "under-the-olive-grove",
    title: "Under The Olive Grove",
    category: "Private Soirée",
    categorySlug: "private-events",
    location: "Goa",
    year: "2025",
    guestCount: "60 Guests",
    duration: "Evening",
    coverImage: "/images/garden-soiree.jpg",
    heroImage: "/images/garden-soiree.jpg",
    shortDescription:
      "A coastal hillside dinner under ancient trees, adorned with low botanical runners, twinkling fairy lights, and relaxed seaside elegance.",
    conceptHeadline: "Barefoot luxury and candlelit conversations beneath the stars.",
    story: [
      "Perched on a quiet bluff overlooking the sea, this private gathering celebrated an intimate silver anniversary. Long reclaimed wood tables wound beneath olive trees draped in thousands of fairy lights.",
      "Freshly baked bread, local cheeses, and chilled vintage wines were served as guests toasted under the warm sea breeze.",
    ],
    roles: [
      "Private Estate Styling",
      "Tree Lighting & Fairy Canopy Rigging",
      "Farm-to-Table Tableware & Florals",
      "Bespoke Wine Program Coordination",
    ],
    gallery: [
      { url: "/images/garden-soiree.jpg", caption: "The dinner table beneath olive boughs at twilight", aspectRatio: "landscape" },
      { url: "/images/tablescape.jpg", caption: "Lush olive and cream floral table runner", aspectRatio: "landscape" },
    ],
    testimonial: {
      quote:
        "The soulfulness of the evening was indescribable. It felt like dining in a dream created just for our family.",
      client: "Natasha & Sameer",
      role: "Hosts",
    },
  },
  {
    slug: "echoes-of-heritage",
    title: "Echoes of Heritage",
    category: "Intimate Nuptials",
    categorySlug: "weddings",
    location: "Jaipur",
    year: "2025",
    guestCount: "90 Guests",
    duration: "2 Days",
    coverImage: "/images/couple-palace.jpg",
    heroImage: "/images/couple-palace.jpg",
    shortDescription:
      "A heritage palace wedding defined by timeless ivory embroidery, delicate hand-tied florals, and centuries of architectural poetry.",
    conceptHeadline: "Quiet luxury celebrated within ancestral stone walls.",
    story: [
      "Echoes of Heritage honored the timeless beauty of historic Rajasthani architecture without overpowering it with garish modern props.",
      "Using local white marble, marigold-infused ivory roses, and brass lamps, we crafted a serene sanctuary for this intimate two-day wedding.",
    ],
    roles: [
      "Heritage Site Coordination & Permits",
      "Custom Handcrafted Brass Lantern Sourcing",
      "Day & Night Color Transition Design",
      "Guest Hospitality & Traditional Musicians",
    ],
    gallery: [
      { url: "/images/couple-palace.jpg", caption: "Couple on the royal balcony overlooking illuminated courtyards", aspectRatio: "portrait" },
      { url: "/images/floral-arch.jpg", caption: "Arched stone entryway framed with garden florals", aspectRatio: "landscape" },
      { url: "/images/styling-flatlay.jpg", caption: "Handmade royal invitations and wax seal suite", aspectRatio: "landscape" },
    ],
    testimonial: {
      quote:
        "Aesthetic Tales has a reverence for heritage that is very rare. They made our family feel like royalty while keeping everything intimate and genuine.",
      client: "Meera & Arjun",
      role: "Bride & Groom",
    },
  },
];
