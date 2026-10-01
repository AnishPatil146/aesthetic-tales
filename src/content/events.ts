export type EventCategory =
  | "ALL"
  | "BIRTHDAYS"
  | "BABY SHOWERS"
  | "ENGAGEMENTS"
  | "RING CEREMONIES"
  | "WEDDINGS"
  | "DÉCOR"
  | "CELEBRATIONS";

export interface EventDetailItem {
  label: string;
  value: string;
}

export interface EventFilmMedia {
  title: string;
  duration: string;
  poster: string;
  videoUrl?: string;
  description: string;
}

export interface DroneMedia {
  title: string;
  duration: string;
  poster: string;
  videoUrl?: string;
  description: string;
  altitude?: string;
  specs?: string;
}

export interface MomentReelMedia {
  id: string;
  title: string;
  duration: string;
  poster: string;
  videoUrl?: string;
  instagramUrl?: string;
  caption: string;
}

export interface BTSMedia {
  id: string;
  title: string;
  duration: string;
  poster: string;
  videoUrl?: string;
  description: string;
}

export interface MixedMediaItem {
  id: string;
  type: "photo" | "video" | "drone" | "reel";
  src: string;
  videoUrl?: string;
  caption: string;
  aspectRatio?: "portrait" | "landscape" | "square";
  duration?: string;
}

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  category: EventCategory;
  categoryLabel: string;
  location: string;
  year: string;
  guestCount: string;
  duration: string;
  coverImage: string;
  coverVideo?: string;
  conceptHeadline: string;
  conceptDescription: string;
  accentColor: string;
  featured: boolean;
  order: number;
  services: string[];
  details: {
    decor: string;
    styling: string;
    backdrop: string;
    tablescape: string;
    entrance: string;
    stage: string;
    props: string;
    lighting: string;
    florals: string;
    customElements: string;
  };
  gallery: {
    src: string;
    caption: string;
    aspectRatio?: "portrait" | "landscape" | "square";
  }[];
  eventFilm?: EventFilmMedia;
  droneFootage?: DroneMedia;
  momentsReels?: MomentReelMedia[];
  behindTheScenes?: BTSMedia[];
  mixedMedia?: MixedMediaItem[];
  videoHighlight?: {
    title: string;
    duration: string;
    poster: string;
    videoUrl?: string;
  };
  testimonial?: {
    quote: string;
    client: string;
    role: string;
  };
}

export const eventCategories: EventCategory[] = [
  "ALL",
  "BIRTHDAYS",
  "BABY SHOWERS",
  "ENGAGEMENTS",
  "RING CEREMONIES",
  "WEDDINGS",
  "DÉCOR",
  "CELEBRATIONS",
];

export const eventsData: EventItem[] = [
  {
    id: "evt-1",
    slug: "a-little-wild-one",
    title: "A Little Wild One",
    category: "BIRTHDAYS",
    categoryLabel: "First Birthday Celebration",
    location: "Mumbai",
    year: "2026",
    guestCount: "120 Guests",
    duration: "Day Celebration",
    coverImage: "/images/birthday-soiree.jpg",
    conceptHeadline: "Whimsical safari wonders meets chic pastel luxury.",
    conceptDescription:
      "Designed for a charming first birthday in Mumbai, 'A Little Wild One' reimagined the safari theme with organic sage and cream balloon arches, custom gold acrylic animal silhouettes, a two-tier hand-painted cake pedestal, and interactive sensory play zones for the little guests.",
    accentColor: "#e6b062",
    featured: true,
    order: 1,
    services: ["Birthday Celebrations", "Event Décor", "Custom Theming"],
    details: {
      decor: "Organic sage, muted ivory and matte gold palette with handcrafted miniature safari props.",
      styling: "Soft wooden textures, rattan poufs, and custom animal illustrations across stationery.",
      backdrop: "Triple-arch panel backdrop with 3D acrylic 'Wild One' typography and organic balloon cascade.",
      tablescape: "Low picnic-style seating for kids with personalized wooden place mats and pastel favor boxes.",
      entrance: "Welcome arch framed in eucalyptus leaves, wild grasses, and plush jungle animal welcoming displays.",
      stage: "Tiered cake stage with fluted cylinder plinths and spotlight illumination.",
      props: "Custom hand-carved wooden animals, vintage suitcases, and a bespoke balloon photo booth.",
      lighting: "Soft warm ambient pin spots focusing on cake cutting and family photo areas.",
      florals: "Baby's breath clouds, pampas grass, white ranunculus, and fresh tropical foliage.",
      customElements: "Personalized milestone photo timeline and wooden animal keepsake activity station.",
    },
    eventFilm: {
      title: "A Little Wild One — The Birthday Cinematic Film",
      duration: "02:10",
      poster: "/images/birthday-soiree.jpg",
      description: "A joyful cinematic journey documenting the child's milestone celebration, baby laughter, customized artisan decorations, and family celebrations.",
    },
    momentsReels: [
      {
        id: "a-wild-one-reel-1",
        title: "Safari Cake Cutting & Confetti Shower",
        duration: "00:32",
        poster: "/images/birthday-soiree.jpg",
        instagramUrl: "https://www.instagram.com/theaesthetetales/",
        caption: "The magical moment the two-tier artisan safari cake was revealed to our birthday boy.",
      },
      {
        id: "a-wild-one-reel-2",
        title: "Sensory Play Zone & Balloon Wonder",
        duration: "00:28",
        poster: "/images/tablescape.jpg",
        instagramUrl: "https://www.instagram.com/theaesthetetales/",
        caption: "Little hands exploring our tactile safari ball pit and custom wooden animals.",
      },
    ],
    behindTheScenes: [
      {
        id: "a-wild-one-bts-1",
        title: "Balloon Architecture & Plinth Staging",
        duration: "01:15",
        poster: "/images/styling-flatlay.jpg",
        description: "Our styling team hand-tying 600+ dual-toned latex balloons into an organic cascade.",
      },
    ],
    mixedMedia: [
      { id: "mm-1", type: "video", src: "/images/birthday-soiree.jpg", caption: "Cinematic Birthday Film Highlight", duration: "02:10", aspectRatio: "landscape" },
      { id: "mm-2", type: "photo", src: "/images/birthday-soiree.jpg", caption: "Bespoke tiered cake table and organic balloon installation.", aspectRatio: "landscape" },
      { id: "mm-3", type: "reel", src: "/images/tablescape.jpg", caption: "Play Zone & Kids Table Moments", duration: "00:28", aspectRatio: "portrait" },
      { id: "mm-4", type: "photo", src: "/images/styling-flatlay.jpg", caption: "Custom safari stationery and milestone boards.", aspectRatio: "square" },
      { id: "mm-5", type: "photo", src: "/images/garden-soiree.jpg", caption: "Sunlit outdoor celebration lawn.", aspectRatio: "landscape" },
    ],
    gallery: [
      { src: "/images/birthday-soiree.jpg", caption: "Bespoke tiered cake table and organic balloon installation.", aspectRatio: "landscape" },
      { src: "/images/tablescape.jpg", caption: "Low picnic tablescape with custom linens and personalized favors.", aspectRatio: "portrait" },
      { src: "/images/styling-flatlay.jpg", caption: "Custom safari stationery, hand-calligraphed milestone boards, and details.", aspectRatio: "square" },
      { src: "/images/garden-soiree.jpg", caption: "Sunlit outdoor celebration area with ambient fairy lights.", aspectRatio: "landscape" },
    ],
    testimonial: {
      quote: "Aesthetic Tales created absolute magic for our son's first birthday. Every parent was stunned by the elegance and thoughtful kids' details.",
      client: "Pooja & Rohan Shah",
      role: "Host Parents",
    },
  },
  {
    id: "evt-2",
    slug: "royal-sangeet-cocktail",
    title: "Royal Sangeet & Cocktail Soirée",
    category: "WEDDINGS",
    categoryLabel: "Sangeet & Cocktail Celebration",
    location: "Alibaug · Mumbai",
    year: "2026",
    guestCount: "250 Guests",
    duration: "Evening Celebration",
    coverImage: "/images/champagne-tower.jpg",
    conceptHeadline: "Champagne towers, candlelit pavilions, and high-energy Sangeet rhythms.",
    conceptDescription:
      "A grand pre-wedding celebration blending royal Indian hospitality with sleek modern glamour. Set against a lush private estate in Alibaug, the evening featured a dramatic 7-tier crystal champagne tower, fairy light canopies over long family banquets, an open-air amphitheater dance stage, and warm ambient fire pits.",
    accentColor: "#c5a880",
    featured: true,
    order: 2,
    services: ["Weddings", "Event Décor", "Complete Event Planning"],
    details: {
      decor: "Deep charcoal, aged gold, crystal glass, and glowing amber candlelight.",
      styling: "Regal Indian contemporary luxury with black velvet lounges and brass accents.",
      backdrop: "Illuminated geometric stage backdrop flanked by cascading white rajnigandha and golden arches.",
      tablescape: "50-foot family dining tables adorned with crystal candlesticks, gold rimmed glasses, and fresh tuberoses.",
      entrance: "A grand 60-foot pathway lined with towering brass torchieres and hanging marigold spheres.",
      stage: "Reinforced 40-foot performance stage with concert-grade sound, pin-spot wash, and low-lying haze.",
      props: "7-tier crystal coupe champagne tower, custom couple monogram bar facade, and personalized cigar lounge.",
      lighting: "Warm amber stage wash, overhead fairy light canopy, and moving beam spotlights for performances.",
      florals: "White rajnigandha, Indian tuberoses, white orchids, and lush tropical greenery.",
      customElements: "Signature couple cocktail bar named after their relationship milestones.",
    },
    eventFilm: {
      title: "Royal Sangeet & Cocktail Soirée — Cinematic Event Film",
      duration: "02:45",
      poster: "/images/champagne-tower.jpg",
      description: "An evocative cinematic narrative uncovering the sunset cocktail reveal, the champagne tower pour, heartfelt family sangeet performances, and late-night dancing under the stars.",
    },
    droneFootage: {
      title: "From Above: The Heritage Courtyard Aerial Reveal",
      duration: "01:15",
      poster: "/images/garden-soiree.jpg",
      description: "High-altitude 4K drone cinematography sweeping over the estate, tracking the glowing candlelit courtyards and atmospheric lights illuminating the coastal amphitheater.",
      altitude: "60 meters · 4K 60FPS",
      specs: "Cinematic Widescreen Aerial Camera",
    },
    momentsReels: [
      {
        id: "sangeet-reel-1",
        title: "Golden Hour Champagne Tower Toast",
        duration: "00:35",
        poster: "/images/champagne-tower.jpg",
        instagramUrl: "https://www.instagram.com/theaesthetetales/",
        caption: "The delicate celebratory pour over a 7-tier crystal coupe tower during family toasts.",
      },
      {
        id: "sangeet-reel-2",
        title: "Sangeet Dance Floor Fireworks & Energy",
        duration: "00:30",
        poster: "/images/couple-palace.jpg",
        instagramUrl: "https://www.instagram.com/theaesthetetales/",
        caption: "High energy performances and cold pyrotechnics celebrating the bride and groom.",
      },
    ],
    behindTheScenes: [
      {
        id: "sangeet-bts-1",
        title: "The 18-Hour Build: Transforming the Coastal Lawn",
        duration: "02:30",
        poster: "/images/floral-arch.jpg",
        description: "Watch our team construct the reinforced dance stage, rig 10,000 fairy lights, and style the open-air cocktail lounge.",
      },
    ],
    mixedMedia: [
      { id: "s-mm-1", type: "video", src: "/images/champagne-tower.jpg", caption: "Royal Sangeet Event Film", duration: "02:45", aspectRatio: "landscape" },
      { id: "s-mm-2", type: "drone", src: "/images/garden-soiree.jpg", caption: "Aerial View: Coastal Estate Grounds from Above", duration: "01:15", aspectRatio: "landscape" },
      { id: "s-mm-3", type: "photo", src: "/images/champagne-tower.jpg", caption: "Seven-tier crystal coupe champagne tower with celebratory pour.", aspectRatio: "portrait" },
      { id: "s-mm-4", type: "photo", src: "/images/couple-palace.jpg", caption: "Couple portrait at the terrace backdrop.", aspectRatio: "landscape" },
      { id: "s-mm-5", type: "photo", src: "/images/floral-arch.jpg", caption: "Entrance walkway framed by aromatic Indian florals.", aspectRatio: "landscape" },
    ],
    gallery: [
      { src: "/images/champagne-tower.jpg", caption: "Seven-tier crystal coupe champagne tower with celebratory pour.", aspectRatio: "portrait" },
      { src: "/images/couple-palace.jpg", caption: "Couple portrait during the pre-sangeet golden hour shoot.", aspectRatio: "landscape" },
      { src: "/images/garden-soiree.jpg", caption: "Open-air lawn dining with ambient fairy light canopies.", aspectRatio: "landscape" },
      { src: "/images/floral-arch.jpg", caption: "Grand illuminated entrance portal welcoming family and guests.", aspectRatio: "landscape" },
    ],
    testimonial: {
      quote: "Our families were blown away by the Sangeet setup! The champagne tower, stage lighting, and coordination made the night feel like a Bollywood movie premier.",
      client: "Kabir & Rhea Singhania",
      role: "Couple",
    },
  },
  {
    id: "evt-3",
    slug: "celestial-bloom-baby-shower",
    title: "Celestial Bloom Baby Shower",
    category: "BABY SHOWERS",
    categoryLabel: "Baby Shower Celebration",
    location: "Mumbai",
    year: "2026",
    guestCount: "80 Guests",
    duration: "Afternoon High Tea",
    coverImage: "/images/baby-shower.jpg",
    conceptHeadline: "Ethereal pastel clouds, gold accents, and joyful beginnings.",
    conceptDescription:
      "A serene celebration welcoming a new life. We curated organic pastel balloon arches in blush peach, cream, and champagne gold, accompanied by cascading floral arches, illuminated neon lettering, and a multi-tiered dessert bar.",
    accentColor: "#d9a5b3",
    featured: true,
    order: 3,
    services: ["Baby Showers", "Event Décor", "Custom Theming"],
    details: {
      decor: "Organic balloon arches, gold metal rings, blush textiles, and crystal candelabras.",
      styling: "Gentle pastel luxury with velvet table coverings, gold votives, and delicate floral arrangements.",
      backdrop: "Curved golden archway featuring 'A Baby is Brewing' illuminated script and floral clouds.",
      tablescape: "High-tea dessert tables with pedestal stands, French macarons, and custom cupcake toppers.",
      entrance: "Welcome easel with soft floral drape, balloon garland, and personalized family greeting sign.",
      stage: "Plush velvet lounge chair framed by cascading balloon clusters for comfortable mom-to-be moments.",
      props: "Miniature gold elephant motifs, wishes-for-baby glass urns, and custom treat boxes.",
      lighting: "Warm glowing chandeliers, fairy light strings, and pillar candle lanterns.",
      florals: "Blush peach roses, white hydrangeas, baby's breath, and ranunculus blooms.",
      customElements: "Baby prediction cards, custom-scented candle party favors, and bespoke mocktail station.",
    },
    eventFilm: {
      title: "Celestial Bloom Baby Shower — Celebration Film",
      duration: "02:00",
      poster: "/images/baby-shower.jpg",
      description: "An intimate and heartwarming film celebrating new beginnings, the mother-to-be blessings, and pastel cloud decor details.",
    },
    momentsReels: [
      {
        id: "baby-reel-1",
        title: "Pastel Cloud Balloon Arch Reveal",
        duration: "00:40",
        poster: "/images/baby-shower.jpg",
        instagramUrl: "https://www.instagram.com/theaesthetetales/",
        caption: "Organic pastel balloon garland creation, dessert pedestal styling, and family joy.",
      },
    ],
    mixedMedia: [
      { id: "b-mm-1", type: "video", src: "/images/baby-shower.jpg", caption: "Celestial Bloom Celebration Film", duration: "02:00", aspectRatio: "landscape" },
      { id: "b-mm-2", type: "photo", src: "/images/baby-shower.jpg", caption: "Grand pastel balloon and floral arch setup with neon celebration script.", aspectRatio: "landscape" },
      { id: "b-mm-3", type: "reel", src: "/images/tablescape.jpg", caption: "Dessert Pedestals & Treat Bar Reel", duration: "00:40", aspectRatio: "portrait" },
      { id: "b-mm-4", type: "photo", src: "/images/styling-flatlay.jpg", caption: "Pastel stationery, keepsake cards, and delicate floral accents.", aspectRatio: "square" },
      { id: "b-mm-5", type: "photo", src: "/images/garden-soiree.jpg", caption: "Afternoon lawn seating for family high tea and games.", aspectRatio: "landscape" },
    ],
    gallery: [
      { src: "/images/baby-shower.jpg", caption: "Grand pastel balloon and floral arch setup with neon celebration script.", aspectRatio: "landscape" },
      { src: "/images/tablescape.jpg", caption: "Dessert and high tea tablescape with golden pedestals.", aspectRatio: "portrait" },
      { src: "/images/styling-flatlay.jpg", caption: "Pastel stationery, keepsake cards, and delicate floral accents.", aspectRatio: "square" },
      { src: "/images/garden-soiree.jpg", caption: "Afternoon lawn seating for family high tea and games.", aspectRatio: "landscape" },
    ],
    testimonial: {
      quote: "The baby shower was everything I dreamed of and more. The pastel decor was so soft, warm, and photogenic. Thank you Aesthetic Tales!",
      client: "Ananya & Dev Kothari",
      role: "Parents-to-be",
    },
  },
  {
    id: "evt-4",
    slug: "ethereal-sunset-engagement",
    title: "Ethereal Sunset Engagement",
    category: "ENGAGEMENTS",
    categoryLabel: "Ring Ceremony & Engagement",
    location: "Mumbai",
    year: "2026",
    guestCount: "200 Guests",
    duration: "Evening Celebration",
    coverImage: "/images/engagement-stage.jpg",
    conceptHeadline: "Circular floral arches, warm candlelight, and timeless romance.",
    conceptDescription:
      "An intimate yet grand Indian engagement celebration. We designed a circular double-arch floral stage, accented with hanging wisteria, golden geometric plinths, blush velvet Chesterfield seating, and romantic warm amber stage lighting overlooking the Mumbai sunset.",
    accentColor: "#c5a880",
    featured: true,
    order: 4,
    services: ["Engagements", "Event Décor", "Complete Event Planning"],
    details: {
      decor: "Ivory, champagne and blush tones with golden accents and rich floral abundance.",
      styling: "Luxury ceremonial stage, candle-flanked walkway, and elegant cocktail tables.",
      backdrop: "Interlocking circular floral arches with illuminated neon 'Engagement' script and backdrop drapes.",
      tablescape: "Round banquet tables with floral sphere centerpieces and gold-rimmed glassware.",
      entrance: "A 40-foot walkway lined with tall gold lanterns and rose petal carpets.",
      stage: "Raised velvet-carpeted stage with blush sofa, ring exchange pedestals, and flower showers.",
      props: "Custom gold ring tray with fresh rose buds, brass lanterns, and champagne flutes.",
      lighting: "Warm amber stage wash, fairy lights canopy, and dimmable mood lighting.",
      florals: "White hydrangeas, blush roses, hanging white wisteria, and gypsophila.",
      customElements: "Personalized couple monogram backdrop and custom celebratory confetti cannons.",
    },
    eventFilm: {
      title: "Ethereal Sunset Engagement — Cinematic Ceremony Film",
      duration: "02:30",
      poster: "/images/engagement-stage.jpg",
      description: "A breathtaking engagement film tracking the couple's arrival, the ring ceremony within the circular floral arch, emotional parent speeches, and an illuminated celebration under fireworks.",
    },
    droneFootage: {
      title: "From Above: Sunset Ridge Engagement Aerial Panorama",
      duration: "01:30",
      poster: "/images/engagement-stage.jpg",
      description: "Aerial cinematography framing the cliffside terrace, the circular stage, and the Arabian sea glowing under Mumbai's golden sunset.",
      altitude: "45 meters · 4K HDR",
      specs: "Pro Aerial Gimbal System",
    },
    momentsReels: [
      {
        id: "engagement-reel-1",
        title: "Golden Hour Ring Exchange Moment",
        duration: "00:35",
        poster: "/images/engagement-stage.jpg",
        instagramUrl: "https://www.instagram.com/theaesthetetales/",
        caption: "The tender exchange of rings framed within our sculptured circular floral arch.",
      },
    ],
    behindTheScenes: [
      {
        id: "engagement-bts-1",
        title: "Floral Artistry: Hand-Wiring 1,500 Colombian Roses",
        duration: "01:50",
        poster: "/images/floral-arch.jpg",
        description: "Close-up craftsmanship documenting our floral artisans conditioning and installing exotic blush orchids and heritage roses onto structural arches.",
      },
    ],
    mixedMedia: [
      { id: "e-mm-1", type: "video", src: "/images/engagement-stage.jpg", caption: "Cinematic Engagement Ceremony Film", duration: "02:30", aspectRatio: "landscape" },
      { id: "e-mm-2", type: "drone", src: "/images/engagement-stage.jpg", caption: "Aerial Story: Cliffside Venue Panorama", duration: "01:30", aspectRatio: "landscape" },
      { id: "e-mm-3", type: "photo", src: "/images/engagement-stage.jpg", caption: "Couple on the circular floral engagement stage during ring exchange.", aspectRatio: "landscape" },
      { id: "e-mm-4", type: "reel", src: "/images/champagne-tower.jpg", caption: "Champagne Toast Moments", duration: "00:35", aspectRatio: "portrait" },
      { id: "e-mm-5", type: "photo", src: "/images/floral-arch.jpg", caption: "Grand floral welcome archway leading to ceremonial area.", aspectRatio: "portrait" },
      { id: "e-mm-6", type: "photo", src: "/images/couple-palace.jpg", caption: "Couple portrait at the terrace backdrop.", aspectRatio: "landscape" },
    ],
    gallery: [
      { src: "/images/engagement-stage.jpg", caption: "Couple on the circular floral engagement stage during ring exchange.", aspectRatio: "landscape" },
      { src: "/images/floral-arch.jpg", caption: "Grand floral welcome archway leading to ceremonial area.", aspectRatio: "portrait" },
      { src: "/images/champagne-tower.jpg", caption: "Celebratory champagne toast station following the ring ceremony.", aspectRatio: "square" },
      { src: "/images/couple-palace.jpg", caption: "Couple portrait at the terrace backdrop.", aspectRatio: "landscape" },
    ],
    testimonial: {
      quote: "Aesthetic Tales executed our engagement stage to perfection. The circular floral arches looked even more stunning in person than on the 3D renders!",
      client: "Simran & Kabir Mehra",
      role: "Couple",
    },
  },
  {
    id: "evt-5",
    slug: "palace-wedding-mandap",
    title: "Palace Mandap & Royal Wedding",
    category: "WEDDINGS",
    categoryLabel: "Royal Wedding Celebration",
    location: "Udaipur · Mumbai",
    year: "2026",
    guestCount: "400 Guests",
    duration: "Multi-Day Wedding",
    coverImage: "/images/hero-wedding.jpg",
    conceptHeadline: "Sacred Vedic geometry, fragrant jasmine chandeliers, and regal lakeside vows.",
    conceptDescription:
      "A transcendent celebration of sacred traditions. Set beside an illuminated lake, this royal wedding featured a majestic four-pillar floral mandap woven from 600 kg of fresh jasmine, tuberoses, and lotus buds. Traditional brass temple bells, carved seating, and ambient warm oil lamps created an atmosphere of pure sanctity.",
    accentColor: "#c5a880",
    featured: true,
    order: 5,
    services: ["Weddings", "Event Décor", "Complete Event Planning"],
    details: {
      decor: "Cream raw silk, deep vermilion highlights, hand-beaten brass, and fragrant white florals.",
      styling: "Heritage Indian royal palace aesthetics with temple bells, brass urlis, and diya illumination.",
      backdrop: "Lakeside arched pavilion with layered sheer drapes and floating lotus ponds.",
      tablescape: "Heritage brass dinner thalis, fresh jasmine table garlands, and terracotta oil lamps.",
      entrance: "An 80-foot ceremonial walkway bordered by carved stone jali lamps and rose petal carpets.",
      stage: "Raised marble-inlaid mandap platform with sunken havan kund and sacred seating.",
      props: "Aged brass temple bells, ceremonial silver thalis, and carved rosewood plinths.",
      lighting: "Soft golden profile spotlights, concealed uplighting on florals, and warm perimeter glow.",
      florals: "Over 600 kg of fresh jasmine, white rajnigandha, red garden roses, and marigolds.",
      customElements: "Personalized Vedic ritual guides in silk-bound booklets for wedding guests.",
    },
    eventFilm: {
      title: "Palace Mandap & Royal Wedding — The Wedding Film",
      duration: "03:15",
      poster: "/images/hero-wedding.jpg",
      description: "A monumental cinematic wedding film documenting the emotional phere, Vedic chanting, petal showers, and royal evening reception under fireworks.",
    },
    droneFootage: {
      title: "From Above: The Palace Mandap & Lake Panorama",
      duration: "01:25",
      poster: "/images/royal-mandap.jpg",
      description: "Aerial sweep across the illuminated palace courtyards, the geometric floral mandap pavilion, and mirror reflections across the lake.",
      altitude: "50 meters · 4K 60FPS",
      specs: "Cinematic Drone Flyover",
    },
    momentsReels: [
      {
        id: "wedding-reel-1",
        title: "Sacred Phere & Rose Petal Shower",
        duration: "00:45",
        poster: "/images/couple-palace.jpg",
        instagramUrl: "https://www.instagram.com/theaesthetetales/",
        caption: "The bride and groom completing the sacred vows amidst showers of fresh red rose petals.",
      },
    ],
    mixedMedia: [
      { id: "w-mm-1", type: "video", src: "/images/hero-wedding.jpg", caption: "Royal Wedding Event Film", duration: "03:15", aspectRatio: "landscape" },
      { id: "w-mm-2", type: "drone", src: "/images/royal-mandap.jpg", caption: "Aerial View: Lakeside Palace Mandap", duration: "01:25", aspectRatio: "landscape" },
      { id: "w-mm-3", type: "photo", src: "/images/hero-wedding.jpg", caption: "Grand architectural floral mandap illuminated at twilight.", aspectRatio: "landscape" },
      { id: "w-mm-4", type: "photo", src: "/images/couple-palace.jpg", caption: "Couple blessing ceremony on the sacred floral stage.", aspectRatio: "landscape" },
      { id: "w-mm-5", type: "photo", src: "/images/floral-arch.jpg", caption: "Cascading tuberose and marigold entrance tunnel.", aspectRatio: "portrait" },
    ],
    gallery: [
      { src: "/images/hero-wedding.jpg", caption: "Grand architectural floral mandap illuminated at twilight.", aspectRatio: "landscape" },
      { src: "/images/royal-mandap.jpg", caption: "Hand-woven jasmine chandeliers and brass temple bells.", aspectRatio: "landscape" },
      { src: "/images/couple-palace.jpg", caption: "Couple blessing ceremony on the sacred floral stage.", aspectRatio: "landscape" },
      { src: "/images/floral-arch.jpg", caption: "Cascading tuberose and marigold entrance tunnel.", aspectRatio: "portrait" },
    ],
    testimonial: {
      quote: "Aesthetic Tales turned our wedding into poetry. The mandap looked celestial, and our families felt completely immersed in sacred serenity.",
      client: "Arjun & Priyanka Singhania",
      role: "Wedding Couple",
    },
  },
  {
    id: "evt-6",
    slug: "botanical-mandap-scenography",
    title: "Botanical Stage & Mandap Scenography",
    category: "DÉCOR",
    categoryLabel: "Stage & Scenography Décor",
    location: "Mumbai",
    year: "2026",
    guestCount: "350 Guests",
    duration: "Full Day Setup",
    coverImage: "/images/royal-mandap.jpg",
    conceptHeadline: "Architectural floral pillars, hanging wisteria, and sacred serenity.",
    conceptDescription:
      "A grand celebratory décor installation featuring a four-pillar botanical mandap constructed from hand-woven mogra, lotus buds, baby's breath clouds, and aged brass bell chandeliers set against a royal velvet curtain.",
    accentColor: "#c5a880",
    featured: true,
    order: 6,
    services: ["Event Décor", "Weddings", "Customized Celebrations"],
    details: {
      decor: "Traditional Indian sacred florals harmonized with contemporary architectural minimalism.",
      styling: "Brass urlis with floating candles, temple marigolds, and beige raw silk cushions.",
      backdrop: "Layered pleated cream fabric with suspended floral screens and cascading tassels.",
      tablescape: "Family dining tables adorned with brass thalis, jasmine garlands, and terra-cotta tea lights.",
      entrance: "Majestic archway of fresh tuberoses and bells creating an aromatic sensory journey.",
      stage: "Raised marble-look stage with sunken havan kund, flower petal carpet, and tiered seating.",
      props: "Aged brass temple bells, diya stands, and carved wooden stools.",
      lighting: "Soft golden profile spotlights, concealed uplighting on florals, and warm perimeter glow.",
      florals: "Over 500 kg of fresh jasmine, white rajnigandha, lotus buds, and baby's breath.",
      customElements: "Hand-rolled sacred welcome garlands and custom brass bell guest favors.",
    },
    eventFilm: {
      title: "Botanical Mandap Scenography — Architectural Film",
      duration: "02:15",
      poster: "/images/royal-mandap.jpg",
      description: "A cinematic documentation of sacred Indian scenography, architectural floral scale, morning sunlight filtering through jasmine chandeliers, and Vedic chanting resonance.",
    },
    droneFootage: {
      title: "From Above: Botanical Mandap Pavilion Aerial View",
      duration: "01:20",
      poster: "/images/royal-mandap.jpg",
      description: "Birds-eye drone perspective capturing the sacred geometry of the four floral pillars, concentric petal rings, and surrounding water reflection basins.",
      altitude: "35 meters · 4K 60FPS",
      specs: "Low-Altitude Aerial Flythrough",
    },
    mixedMedia: [
      { id: "m-mm-1", type: "video", src: "/images/royal-mandap.jpg", caption: "Botanical Mandap Scenography Film", duration: "02:15", aspectRatio: "landscape" },
      { id: "m-mm-2", type: "drone", src: "/images/royal-mandap.jpg", caption: "Aerial View: Sacred Geometric Pavilion", duration: "01:20", aspectRatio: "landscape" },
      { id: "m-mm-3", type: "photo", src: "/images/royal-mandap.jpg", caption: "The four-pillar architectural mandap illuminated at dusk.", aspectRatio: "landscape" },
      { id: "m-mm-4", type: "photo", src: "/images/floral-arch.jpg", caption: "Cascading tuberose and marigold entrance tunnel.", aspectRatio: "portrait" },
      { id: "m-mm-5", type: "photo", src: "/images/couple-palace.jpg", caption: "Couple blessing ceremony on the sacred floral stage.", aspectRatio: "landscape" },
    ],
    gallery: [
      { src: "/images/royal-mandap.jpg", caption: "The four-pillar architectural mandap illuminated at dusk.", aspectRatio: "landscape" },
      { src: "/images/floral-arch.jpg", caption: "Cascading tuberose and marigold entrance tunnel.", aspectRatio: "portrait" },
      { src: "/images/styling-flatlay.jpg", caption: "Brass accessories, ritual platters, and floral details.", aspectRatio: "square" },
      { src: "/images/couple-palace.jpg", caption: "Couple blessing ceremony on the sacred floral stage.", aspectRatio: "landscape" },
    ],
    testimonial: {
      quote: "The mandap looked like heaven on earth. The scent of fresh flowers filled the air, and our families were overwhelmed with joy.",
      client: "Rajesh & Meena Singhal",
      role: "Family Hosts",
    },
  },
  {
    id: "evt-7",
    slug: "candlelit-garden-dinner",
    title: "Twilight Garden Anniversary",
    category: "CELEBRATIONS",
    categoryLabel: "Private Celebration",
    location: "Mumbai",
    year: "2026",
    guestCount: "40 Guests",
    duration: "Intimate Dinner",
    coverImage: "/images/garden-soiree.jpg",
    conceptHeadline: "Canopy fairy lights, long banquet tables, and heartfelt intimacy.",
    conceptDescription:
      "A silver wedding anniversary celebrated under a canopy of 10,000 fairy lights in a private garden. A continuous 50-foot wooden banquet table adorned with olive branches, white peonies, and hundreds of taper candles.",
    accentColor: "#938573",
    featured: false,
    order: 7,
    services: ["Customized Celebrations", "Event Décor", "Complete Event Planning"],
    details: {
      decor: "Natural wooden textures, olive foliage, crystal stemware, and floating fairy lights.",
      styling: "Rustic garden charm combined with high-touch Indian hospitality.",
      backdrop: "Naturally framed by grand banyan trees illuminated with golden fairy light curtains.",
      tablescape: "Continuous raw oak table dressed with running greenery, white peonies, and taper candles.",
      entrance: "A lantern-lit winding stone path through the garden to the secluded dining courtyard.",
      stage: "Acoustic stage for live cello and acoustic guitar performances.",
      props: "Framed anniversary photos spanning 25 years on wooden easels, vintage brass vessels.",
      lighting: "Immersive fairy light canopy overhead and warm ground-level lanterns.",
      florals: "Olive branches, white peonies, eucalyptus, and white garden roses.",
      customElements: "Handwritten love letters at each place setting and custom embossed anniversary menus.",
    },
    eventFilm: {
      title: "Twilight Garden Anniversary — Celebration Film",
      duration: "01:45",
      poster: "/images/garden-soiree.jpg",
      description: "An intimate, candlelit celebration film capturing family toasts under 10,000 fairy lights, acoustic music, and 25 years of love.",
    },
    droneFootage: {
      title: "From Above: The Illuminated Garden Canopy",
      duration: "01:10",
      poster: "/images/garden-soiree.jpg",
      description: "A dusk aerial drone view descending through the treetop boughs directly above the radiant 50-foot candlelit banquet table.",
      altitude: "25 meters · 4K Drone",
      specs: "Twilight Widescreen Flyover",
    },
    mixedMedia: [
      { id: "g-mm-1", type: "video", src: "/images/garden-soiree.jpg", caption: "Twilight Garden Celebration Film", duration: "01:45", aspectRatio: "landscape" },
      { id: "g-mm-2", type: "drone", src: "/images/garden-soiree.jpg", caption: "Aerial View: Garden Canopy from Above", duration: "01:10", aspectRatio: "landscape" },
      { id: "g-mm-3", type: "photo", src: "/images/garden-soiree.jpg", caption: "Fairy light canopy over the 50-foot celebration banquet table.", aspectRatio: "landscape" },
      { id: "g-mm-4", type: "photo", src: "/images/tablescape.jpg", caption: "Intimate place setting with calligraphy menus and brass cutlery.", aspectRatio: "portrait" },
    ],
    gallery: [
      { src: "/images/garden-soiree.jpg", caption: "Fairy light canopy over the 50-foot celebration banquet table.", aspectRatio: "landscape" },
      { src: "/images/tablescape.jpg", caption: "Intimate place setting with calligraphy menus and brass cutlery.", aspectRatio: "portrait" },
      { src: "/images/champagne-tower.jpg", caption: "Champagne toast in honor of the silver anniversary couple.", aspectRatio: "square" },
      { src: "/images/birthday-soiree.jpg", caption: "Anniversary dessert table with hand-crafted confectioneries.", aspectRatio: "landscape" },
    ],
    testimonial: {
      quote: "Celebrating 25 years with our closest friends in this candlelit fairy garden was unforgettable. Aesthetic Tales made it deeply emotional and timeless.",
      client: "Sanjay & Neha Kapoor",
      role: "Anniversary Couple",
    },
  },
  {
    id: "evt-8",
    slug: "minimalist-tablescape-soiree",
    title: "The Art of Tablescape",
    category: "DÉCOR",
    categoryLabel: "Décor & Spatial Styling",
    location: "Mumbai",
    year: "2026",
    guestCount: "60 Guests",
    duration: "Evening Dinner",
    coverImage: "/images/tablescape.jpg",
    conceptHeadline: "Monochromatic floral runners, custom stone chargers, and fine crystal.",
    conceptDescription:
      "A masterclass in modern event styling. Designed for an exclusive private celebration, this dining setup featured custom fluted stoneware, smokey crystal glassware, matte gold cutlery, and sculptural monochromatic floral runners.",
    accentColor: "#c5a880",
    featured: false,
    order: 8,
    services: ["Event Décor", "Customized Celebrations"],
    details: {
      decor: "Monochromatic neutral palette of cream, charcoal, and warm travertine stone.",
      styling: "Editorial minimalism elevated with warm Indian hospitality cues.",
      backdrop: "Floor-to-ceiling draped Belgian linen with warm linear wash lighting.",
      tablescape: "Custom stone charger plates, smoked tumblers, linen napkins, and tapered beeswax candles.",
      entrance: "Minimalist welcoming monolith with carved typography and single floral stem arrangement.",
      stage: "Discreet speech podium framed by modern architectural floral plinths.",
      props: "Sculptural ceramic vases, hand-thrown stoneware, and custom wax seals.",
      lighting: "Low-voltage pinpoint downlighting highlighting individual table settings.",
      florals: "White anthuriums, bleached ruscus, calla lilies, and orchids in sculptural arrangements.",
      customElements: "Individually personalized leather menu folders with guests' initials embossed in gold.",
    },
    eventFilm: {
      title: "The Art of Tablescape — Editorial Craft Film",
      duration: "01:30",
      poster: "/images/tablescape.jpg",
      description: "An editorial styling study documenting the tactile nuances of fluted stoneware, linen textures, and floral composition.",
    },
    mixedMedia: [
      { id: "t-mm-1", type: "video", src: "/images/tablescape.jpg", caption: "Editorial Tablescape Craft Film", duration: "01:30", aspectRatio: "landscape" },
      { id: "t-mm-2", type: "photo", src: "/images/tablescape.jpg", caption: "Monochromatic floral runner and candlelit dining setup.", aspectRatio: "landscape" },
      { id: "t-mm-3", type: "photo", src: "/images/styling-flatlay.jpg", caption: "Handmade paper menus with blind debossed typography and wax seal.", aspectRatio: "portrait" },
      { id: "t-mm-4", type: "photo", src: "/images/champagne-tower.jpg", caption: "Cocktail welcome lounge setup.", aspectRatio: "square" },
    ],
    gallery: [
      { src: "/images/tablescape.jpg", caption: "Monochromatic floral runner and candlelit dining setup.", aspectRatio: "landscape" },
      { src: "/images/styling-flatlay.jpg", caption: "Handmade paper menus with blind debossed typography and wax seal.", aspectRatio: "portrait" },
      { src: "/images/champagne-tower.jpg", caption: "Cocktail welcome lounge setup.", aspectRatio: "square" },
      { src: "/images/garden-soiree.jpg", caption: "Outdoor view of the dining gallery.", aspectRatio: "landscape" },
    ],
    testimonial: {
      quote: "The table decor felt like an architectural masterpiece. Our guests took hundreds of photos before even sitting down!",
      client: "Rhea Merchant",
      role: "Private Host",
    },
  },
];
