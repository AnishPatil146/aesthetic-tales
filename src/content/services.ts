export interface ServiceMedia {
  title: string;
  poster: string;
  duration: string;
  description: string;
  videoUrl?: string;
}

export interface ServiceReel {
  title: string;
  poster: string;
  duration: string;
  instagramUrl?: string;
  videoUrl?: string;
}

export interface ServiceDecorDetail {
  title: string;
  image: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  code: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  coverImage: string;
  heroImage: string;
  editorialQuote: string;
  category: string;
  accentColor: string;
  order: number;
  featured: boolean;
  images: string[];
  featuredVideo?: ServiceMedia;
  videos: ServiceMedia[];
  droneVideos?: ServiceMedia[];
  reels?: ServiceReel[];
  decorDetails?: ServiceDecorDetail[];
  whatWeHandle: string[];
  features: {
    title: string;
    description: string;
  }[];
  process: {
    step: string;
    title: string;
    detail: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "srv-1",
    slug: "birthday-celebrations",
    code: "01",
    title: "Birthday Celebrations",
    tagline: "Custom themes, décor and memorable celebrations planned around every milestone.",
    shortDescription:
      "Custom backdrops, balloon scenography, immersive theme setups, bespoke cake tables, and seamless party planning for all milestone ages.",
    fullDescription:
      "A birthday is a celebration of individuality and joyful chapters. Whether orchestrating a whimsical first birthday, a sweet sixteen garden brunch, or an opulent golden jubilee gala, Aesthetic Tales designs personalized environments brimming with personality, custom props, vibrant tablescapes, and flawless entertainment.",
    coverImage: "/images/birthday-soiree.jpg",
    heroImage: "/images/birthday-soiree.jpg",
    editorialQuote: "Turning milestone moments into joyous, beautifully styled memories that enchant guests of all ages.",
    category: "Birthdays",
    accentColor: "#e6b062",
    order: 1,
    featured: true,
    images: [
      "/images/birthday-soiree.jpg",
      "/images/tablescape.jpg",
      "/images/styling-flatlay.jpg",
      "/images/garden-soiree.jpg",
      "/images/champagne-tower.jpg",
    ],
    featuredVideo: {
      title: "Safari Milestone Celebration — Birthday Film",
      poster: "/images/birthday-soiree.jpg",
      duration: "02:10",
      description: "A joyful cinematic journey capturing cake cutting, sensory play zones, and family celebrations.",
    },
    videos: [
      {
        title: "Cake Cutting & Confetti Moments",
        poster: "/images/birthday-soiree.jpg",
        duration: "00:45",
        description: "The moment the artisan birthday cake was unveiled surrounded by loved ones.",
      },
      {
        title: "Sensory Play & Kids Activity Zone",
        poster: "/images/tablescape.jpg",
        duration: "00:35",
        description: "Custom low tablescapes and interactive safari play areas for our little celebrants.",
      },
    ],
    reels: [
      {
        title: "Balloon Arch Artistry & Plinths",
        poster: "/images/styling-flatlay.jpg",
        duration: "00:28",
        instagramUrl: "https://www.instagram.com/theaesthetetales/",
      },
    ],
    decorDetails: [
      {
        title: "Organic Balloon Scenography",
        image: "/images/birthday-soiree.jpg",
        description: "Multi-layered latex balloon installations with custom acrylic name lettering.",
      },
      {
        title: "Bespoke Cake Tablescapes",
        image: "/images/tablescape.jpg",
        description: "Tiered plinths, customized confectionery stands, and matching floral accents.",
      },
      {
        title: "Themed Stationery & Favors",
        image: "/images/styling-flatlay.jpg",
        description: "Hand-finished welcome boards, milestone timelines, and curated keepsake boxes.",
      },
    ],
    whatWeHandle: [
      "Custom Theme Conceptualization & Mood Boards",
      "Backdrop Design & Organic Balloon Scenography",
      "Bespoke Cake Tables & Dessert Displays",
      "Kids & Adult Entertainment Curation",
      "Interactive Photo Corners & Prop Styling",
      "Tablescape Styling, Custom Menus & Favors",
      "Venue Coordination & Lighting Ambience",
      "On-Day Floor Management & Timeline Orchestration",
    ],
    features: [
      {
        title: "Bespoke Themes for Every Age",
        description:
          "From jungle safari, fairy woodland, and royal prince/princess for little ones to Parisian chic, retro disco, and black-tie dinner parties for adults.",
      },
      {
        title: "Photogenic Focal Points",
        description:
          "We construct photogenic cake backdrops, floral and balloon arches, and custom neon signage designed for memorable Instagram moments.",
      },
      {
        title: "Stress-Free Hosting",
        description:
          "Our event directorship handles timing, vendor arrivals, cake cutting, and hospitality so you can simply celebrate with your loved ones.",
      },
    ],
    process: [
      { step: "01", title: "Theme Discovery", detail: "We discuss the birthday celebrant's passions, favorite colors, and guest list." },
      { step: "02", title: "Visual Deck & Layout", detail: "Custom mood board detailing backdrop, balloon palettes, and table decor." },
      { step: "03", title: "Production & Sourcing", detail: "Fabricating custom signages, sourcing florals, props, and coordinating vendors." },
      { step: "04", title: "On-Site Execution", detail: "Complete setup hours ahead of guest arrival, followed by seamless party management." },
    ],
    faqs: [
      {
        question: "How far in advance should we plan a birthday party?",
        answer: "We recommend booking 3 to 6 weeks in advance for bespoke setups, though we also accommodate shorter timelines based on availability.",
      },
      {
        question: "Do you organize both indoor and outdoor birthday setups?",
        answer: "Yes, we style residential living rooms, terrace spaces, banquet halls, lawn gardens, and private restaurant dining rooms.",
      },
    ],
  },
  {
    id: "srv-2",
    slug: "baby-showers",
    code: "02",
    title: "Baby Showers",
    tagline: "Beautiful, personalized celebrations for special moments.",
    shortDescription:
      "Tender pastel palettes, organic balloon art, floral dreamscapes, dessert styling, and heartfelt rituals to welcome new life.",
    fullDescription:
      "Welcoming a new baby is one of life's most poetic milestones. Aesthetic Tales transforms baby showers and traditional Indian Godh Bharai ceremonies into warm, whimsical sanctuaries filled with dreamy clouds, soft blush and sage florals, delicate dessert tables, customized keepsake corners, and thoughtful details celebrating the parents-to-be.",
    coverImage: "/images/baby-shower.jpg",
    heroImage: "/images/baby-shower.jpg",
    editorialQuote: "Soft pastel textures and gentle warmth celebrating the greatest gift of life.",
    category: "Baby Showers",
    accentColor: "#d9a5b3",
    order: 2,
    featured: true,
    images: [
      "/images/baby-shower.jpg",
      "/images/tablescape.jpg",
      "/images/styling-flatlay.jpg",
      "/images/garden-soiree.jpg",
    ],
    featuredVideo: {
      title: "Celestial Bloom — Baby Shower Film",
      poster: "/images/baby-shower.jpg",
      duration: "02:00",
      description: "An intimate and heartwarming film celebrating new beginnings, the mother-to-be blessings, and pastel cloud decor details.",
    },
    videos: [
      {
        title: "Balloon Arch & Shimmer Reveal",
        poster: "/images/baby-shower.jpg",
        duration: "00:40",
        description: "The moment the pastel cloud archway and dessert pedestals were unveiled.",
      },
    ],
    reels: [
      {
        title: "Dessert Pedestals & Treat Bar Reel",
        poster: "/images/tablescape.jpg",
        duration: "00:30",
        instagramUrl: "https://www.instagram.com/theaesthetetales/",
      },
    ],
    decorDetails: [
      {
        title: "Celestial Arch Architecture",
        image: "/images/baby-shower.jpg",
        description: "Curved golden archway featuring 'A Baby is Brewing' illuminated script and floral clouds.",
      },
      {
        title: "Keepsake & Wishes Station",
        image: "/images/styling-flatlay.jpg",
        description: "Personalized advice cards, polaroid guestbooks, and baby prediction jars.",
      },
    ],
    whatWeHandle: [
      "Custom Theme Creation (e.g. Celestial, Teddy & Clouds, Botanical Bloom)",
      "Organic Pastel Balloon Installations & Shimmer Arches",
      "Dessert & Cake Table Scenography with Custom Pedestals",
      "Custom Welcome Signage & Easel Florals",
      "Comfortable Seating & Lounges for Expectant Mothers",
      "Traditional Indian Godh Bharai / Seemantham Integration",
      "Baby Shower Games & Personalized Favors",
      "Coordination with Caterers, Photographers & Bakers",
    ],
    features: [
      {
        title: "Gentle, Harmonious Aesthetics",
        description:
          "Curated palettes in peach, cream, lavender, mint, and soft gold that create soothing yet luxurious celebration environments.",
      },
      {
        title: "Mother-First Comfort",
        description:
          "Ergonomic, plush seating setups styled elegantly so the expectant mother feels relaxed, pampered, and center of attention.",
      },
      {
        title: "Interactive Keepsake Stations",
        description:
          "Wishes-for-baby message jars, personalized advice cards, and polaroid guestbook stations styled to match the theme.",
      },
    ],
    process: [
      { step: "01", title: "Vision Session", detail: "Aligning on whether the theme is gender-neutral, pastel dream, or floral wonderland." },
      { step: "02", title: "Design Blueprint", detail: "Rendering the stage, backdrop dimensions, table centerpieces, and cake pedestals." },
      { step: "03", title: "Artisanal Preparation", detail: "Selecting fresh blooms, custom neon or vinyl lettering, and sweet treats coordination." },
      { step: "04", title: "Flawless Setup", detail: "Careful on-site installation ensuring a pristine, photo-ready celebration." },
    ],
    faqs: [
      {
        question: "Can you incorporate traditional Indian rituals like Godh Bharai or Seemantham?",
        answer: "Absolutely. We seamlessly blend traditional Indian cultural elements with contemporary, chic aesthetic décor.",
      },
      {
        question: "Do you design setups for private homes?",
        answer: "Yes, we regularly transform private living rooms, terraces, and garden courtyards into intimate baby shower sanctuaries.",
      },
    ],
  },
  {
    id: "srv-3",
    slug: "engagements",
    code: "03",
    title: "Engagements & Ring Ceremonies",
    tagline: "Elegant and memorable engagement setups.",
    shortDescription:
      "Romantic stage scenography, circular floral arches, fairy light canopies, intimate cocktail lounges, and coordinated celebration styling.",
    fullDescription:
      "The promise of forever deserves an ethereal setting. From grand ballrooms to romantic outdoor lawns and heritage terraces, Aesthetic Tales designs engagement stages, ring exchange gazebos, and dining environments that radiate sophisticated romance, warmth, and timeless elegance.",
    coverImage: "/images/engagement-stage.jpg",
    heroImage: "/images/engagement-stage.jpg",
    editorialQuote: "Where two souls celebrate the first chapter of their union surrounded by bespoke elegance.",
    category: "Engagements",
    accentColor: "#c5a880",
    order: 3,
    featured: true,
    images: [
      "/images/engagement-stage.jpg",
      "/images/floral-arch.jpg",
      "/images/couple-palace.jpg",
      "/images/champagne-tower.jpg",
      "/images/garden-soiree.jpg",
    ],
    featuredVideo: {
      title: "Ethereal Sunset Engagement — Cinematic Ceremony Film",
      poster: "/images/engagement-stage.jpg",
      duration: "02:30",
      description: "A breathtaking ceremony film tracking the ring exchange within the circular floral arch and family blessings.",
    },
    videos: [
      {
        title: "Golden Hour Ring Exchange",
        poster: "/images/engagement-stage.jpg",
        duration: "00:50",
        description: "Emotional ring exchange ceremony framed by double circular floral arches.",
      },
      {
        title: "Celebration Toast & Family Speeches",
        poster: "/images/champagne-tower.jpg",
        duration: "00:40",
        description: "Champagne coupe toast and heartfelt blessings under romantic amber lighting.",
      },
    ],
    droneVideos: [
      {
        title: "Cliffside Terrace Aerial Panorama",
        poster: "/images/engagement-stage.jpg",
        duration: "01:30",
        description: "Aerial cinematography framing the circular stage and Arabian sea glowing under Mumbai's golden sunset.",
      },
    ],
    reels: [
      {
        title: "Circular Floral Arch Craftsmanship",
        poster: "/images/floral-arch.jpg",
        duration: "00:35",
        instagramUrl: "https://www.instagram.com/theaesthetetales/",
      },
    ],
    decorDetails: [
      {
        title: "Circular Ceremonial Arch",
        image: "/images/engagement-stage.jpg",
        description: "Lush hydrangeas, baby's breath, and garden roses sculptured into breathtaking concentric rings.",
      },
      {
        title: "Grand Entrance Walkway",
        image: "/images/floral-arch.jpg",
        description: "40-foot tunnel of suspended floral cascades and candle lanterns.",
      },
    ],
    whatWeHandle: [
      "Ring Exchange Stage & Gazebo Scenography",
      "Circular Floral Arches & Statement Backdrops",
      "Fairy Light Canopies & Candlelight Paths",
      "Lounge Furniture & Velvet Chesterfield Seating",
      "Ring Platter & Ritual Floral Styling",
      "Guest Welcome Tunnel & Floral Entrances",
      "Live Acoustic Sound & Lighting Engineering",
      "Photographer & Videographer Choreography",
    ],
    features: [
      {
        title: "Architectural Floristry",
        description:
          "Lush hydrangeas, baby's breath clouds, Indian tuberoses, and garden roses sculptured into breathtaking ceremonial focal points.",
      },
      {
        title: "Cinematic Lighting",
        description:
          "Warm amber illumination, fairy light ceilings, and pinpoint stage wash that makes every photograph look straight out of a magazine.",
      },
      {
        title: "Seamless Ritual Coordination",
        description:
          "Harmonizing ring reveal moments, family blessings, champagne toasts, and celebratory dances with effortless poise.",
      },
    ],
    process: [
      { step: "01", title: "Couple Story", detail: "Understanding the couple's personal style, ring design, and family preferences." },
      { step: "02", title: "Spatial Architecture", detail: "Drafting stage dimensions, guest sightlines, and lighting positions." },
      { step: "03", title: "Material Curation", detail: "Specifying luxury linens, brass lanterns, floral cultivars, and custom backdrops." },
      { step: "04", title: "Production & Coordination", detail: "Overseeing complete execution, stage readiness, and ring ceremony timeline." },
    ],
    faqs: [
      {
        question: "Do you also manage the DJ, sound, and lighting for the engagement?",
        answer: "Yes, we provide integrated technical production including professional sound, mood lighting, and entertainment management.",
      },
    ],
  },
  {
    id: "srv-4",
    slug: "weddings",
    code: "04",
    title: "Weddings",
    tagline: "Sacred rituals, royal mandaps and unforgettable wedding celebrations.",
    shortDescription:
      "Bespoke mandap architecture, floral aisleways, sangeet stages, bridal entrances, and complete wedding scenography across India.",
    fullDescription:
      "An Indian wedding is a sacred tapestry of traditions, emotions, and family bonds. Aesthetic Tales brings artistic restraint, architectural grandeur, and flawless execution to modern Indian weddings. From sacred floral mandaps and scented mogra tunnels to electrifying sangeet stages and lavish reception banquets, we create timeless celebrations.",
    coverImage: "/images/royal-mandap.jpg",
    heroImage: "/images/hero-wedding.jpg",
    editorialQuote: "Sacred geometry, fresh temple blooms, and timeless romance crafted for your wedding day.",
    category: "Weddings",
    accentColor: "#c5a880",
    order: 4,
    featured: true,
    images: [
      "/images/royal-mandap.jpg",
      "/images/hero-wedding.jpg",
      "/images/couple-palace.jpg",
      "/images/floral-arch.jpg",
      "/images/tablescape.jpg",
      "/images/champagne-tower.jpg",
    ],
    featuredVideo: {
      title: "Royal Mandap & Sacred Vows — Wedding Film",
      poster: "/images/royal-mandap.jpg",
      duration: "03:15",
      description: "A cinematic documentation of sacred Indian scenography, morning sunlight filtering through jasmine chandeliers, and Vedic chanting resonance.",
    },
    videos: [
      {
        title: "Sacred Phere & Floral Shower",
        poster: "/images/couple-palace.jpg",
        duration: "01:10",
        description: "The couple completing the sacred seven vows under the four-pillar floral mandap.",
      },
      {
        title: "Bridal Entry & Jasmine Tunnel",
        poster: "/images/floral-arch.jpg",
        duration: "00:55",
        description: "Aromatic rajnigandha tunnel with soft amber candlelight for the bride's grand arrival.",
      },
    ],
    droneVideos: [
      {
        title: "Lakeside Mandap Aerial Reveal",
        poster: "/images/royal-mandap.jpg",
        duration: "01:25",
        description: "Full-width panoramic drone flight capturing the sacred geometric pavilion, concentric flower rings, and reflecting water.",
      },
    ],
    reels: [
      {
        title: "Mandap Floral Chandelier Installation",
        poster: "/images/styling-flatlay.jpg",
        duration: "00:40",
        instagramUrl: "https://www.instagram.com/theaesthetetales/",
      },
    ],
    decorDetails: [
      {
        title: "Four-Pillar Architectural Mandap",
        image: "/images/royal-mandap.jpg",
        description: "Hand-woven mogra, lotus buds, baby's breath clouds, and aged brass temple bells.",
      },
      {
        title: "Temple Brass & Marigold Urlis",
        image: "/images/styling-flatlay.jpg",
        description: "Handcrafted brass urlis with floating candles and fresh botanical petals.",
      },
    ],
    whatWeHandle: [
      "Custom Mandap Architecture & Sacred Havan Setup",
      "Grand Venue Entrance Tunnels & Welcome Arches",
      "Sangeet & Cocktail Stage Scenography",
      "Curated Reception Tablescapes & Fine Glassware",
      "Vedic Ritual Floral Platter & Garland Styling",
      "Atmospheric & Pin-Spot Lighting Engineering",
      "Bride & Groom Entry Choreography & Special Effects",
      "Complete Floor Management & Run-of-Show Directorship",
    ],
    features: [
      {
        title: "Cultural Authenticity with Modern Panache",
        description:
          "Honoring sacred Vedic traditions and regional nuances while curating fresh, sophisticated visual palettes.",
      },
      {
        title: "High-Touch Vendor Directorship",
        description:
          "Managing floral artisans, lighting technicians, sound engineers, and hospitality crews with military precision.",
      },
      {
        title: "Complete Destination Coordination",
        description:
          "Planning weddings across Mumbai, Alibaug, Goa, Udaipur, and premier destination estates.",
      },
    ],
    process: [
      { step: "01", title: "Cultural & Family Discovery", detail: "Understanding the couple's heritage, ritual requirements, and guest profile." },
      { step: "02", title: "Spatial 3D Layouts", detail: "Rendering the mandap, guest seating sightlines, and floral aisleways." },
      { step: "03", title: "Artisan Preparation", detail: "Sourcing 500+ kg of fresh blooms, brass fixtures, and customized textiles." },
      { step: "04", title: "The Wedding Day", detail: "Flawless on-site execution ensuring sacred serenity from sunrise to midnight." },
    ],
    faqs: [
      {
        question: "Do you handle complete wedding planning or just décor?",
        answer: "We offer both: end-to-end wedding planning as well as dedicated wedding décor and scenography directorship.",
      },
      {
        question: "Do you travel for destination weddings across India?",
        answer: "Yes, we regularly plan and design celebrations in Mumbai, Goa, Rajasthan, Pune, and other destination cities.",
      },
    ],
  },
  {
    id: "srv-5",
    slug: "event-decor",
    code: "05",
    title: "Event Décor & Scenography",
    tagline: "Stage, backdrop, tablescape, entrance and venue styling.",
    shortDescription:
      "Complete aesthetic styling for any venue: sculptural floral installations, statement entrances, mood lighting, and bespoke tablescapes.",
    fullDescription:
      "Even if you have already booked your venue and caterers, Aesthetic Tales provides comprehensive visual transformation. We take empty lawns, banquets, and courtyards, transforming them through bespoke stages, thematic backdrops, drapery, floral craftsmanship, and exquisite dining arrangements.",
    coverImage: "/images/royal-mandap.jpg",
    heroImage: "/images/royal-mandap.jpg",
    editorialQuote: "Transforming empty spatial volumes into unforgettable emotional environments.",
    category: "Event Décor",
    accentColor: "#c5a880",
    order: 5,
    featured: true,
    images: [
      "/images/royal-mandap.jpg",
      "/images/floral-arch.jpg",
      "/images/tablescape.jpg",
      "/images/styling-flatlay.jpg",
      "/images/garden-soiree.jpg",
    ],
    featuredVideo: {
      title: "The Art of Spatial Scenography — Craft Film",
      poster: "/images/royal-mandap.jpg",
      duration: "02:15",
      description: "An editorial styling study documenting the tactile nuances of fluted stoneware, linen textures, and floral composition.",
    },
    videos: [
      {
        title: "Tuberose & Bell Entrance Walkway",
        poster: "/images/floral-arch.jpg",
        duration: "00:45",
        description: "Aromatic entrance tunnel installation constructed with over 200 kg of fresh rajnigandha.",
      },
    ],
    droneVideos: [
      {
        title: "Open-Air Courtyard Décor Flythrough",
        poster: "/images/garden-soiree.jpg",
        duration: "01:15",
        description: "Birds-eye drone perspective capturing the scale of table arrangements and canopy lighting.",
      },
    ],
    decorDetails: [
      {
        title: "Architectural Statement Entrances",
        image: "/images/floral-arch.jpg",
        description: "Cascading blooms and sculptural arches setting the celebratory mood from the very first step.",
      },
      {
        title: "Curated Tablescapes",
        image: "/images/tablescape.jpg",
        description: "Monochromatic floral runners, fluted stoneware chargers, and custom brass cutlery.",
      },
    ],
    whatWeHandle: [
      "Custom Stage & Mandap Architecture",
      "Grand Venue Entrance Tunnels & Welcome Arches",
      "Curated Tablescapes, Fine Glassware & Custom Linens",
      "Ceiling Canopy Treatments & Suspended Florals",
      "Backdrop Design (Velvet, Acrylic, Shimmer, Wood, Floral)",
      "Atmospheric & Architectural Pin-Spot Lighting",
      "Bar Facades & Thematic Lounge Areas",
      "Personalized Signages & Calligraphy Details",
    ],
    features: [
      {
        title: "Spatial Optimization",
        description:
          "Transforming architectural challenges into breathtaking visual features that frame every key celebration moment.",
      },
      {
        title: "Layered Materiality",
        description:
          "Combining rich silks, aged brass, crystal glassware, fresh botanical blooms, and textured wood for tactile luxury.",
      },
      {
        title: "Flawless Setup & Strike",
        description:
          "Our experienced build teams work efficiently to construct and dismantle complex setups without damage or delay.",
      },
    ],
    process: [
      { step: "01", title: "Site Recce & Measurement", detail: "Detailed survey of your venue's dimensions, lighting points, and layout." },
      { step: "02", title: "3D CAD / Visual Board", detail: "Drafting accurate scale layouts and material swatches." },
      { step: "03", title: "Material Pre-Fabrication", detail: "Custom metalwork, carpentry, floral ordering, and print production." },
      { step: "04", title: "Precision Dressing", detail: "On-site dressing of tables, rigging, florals, and lighting checks." },
    ],
    faqs: [
      {
        question: "Can we hire Aesthetic Tales solely for décor if we already have a planner?",
        answer: "Yes, we frequently partner with external planners and venue hosts strictly as the creative décor & styling directors.",
      },
    ],
  },
  {
    id: "srv-6",
    slug: "customized-celebrations",
    code: "06",
    title: "Customized Celebrations",
    tagline: "If you have an idea, Aesthetic Tales can help turn it into an event.",
    shortDescription:
      "Tailor-made private dinners, milestone anniversaries, proposals, festive gatherings, pop-up events, and bespoke social experiences.",
    fullDescription:
      "Not every celebration fits into a predefined box. Have a romantic rooftop proposal in mind? An intimate 25th anniversary candlelit banquet? A Diwali celebration with modern elegance? Or a bespoke family reunion? Aesthetic Tales treats your unique imagination as our canvas, bringing your personal concept to life.",
    coverImage: "/images/garden-soiree.jpg",
    heroImage: "/images/tablescape.jpg",
    editorialQuote: "No vision is too unconventional; every idea has the potential to become pure poetry.",
    category: "Custom Celebrations",
    accentColor: "#c5a880",
    order: 6,
    featured: true,
    images: [
      "/images/garden-soiree.jpg",
      "/images/tablescape.jpg",
      "/images/champagne-tower.jpg",
      "/images/styling-flatlay.jpg",
      "/images/birthday-soiree.jpg",
    ],
    featuredVideo: {
      title: "Twilight Garden Anniversary — Celebration Film",
      poster: "/images/garden-soiree.jpg",
      duration: "01:45",
      description: "An intimate, candlelit celebration film capturing family toasts under 10,000 fairy lights, acoustic music, and 25 years of love.",
    },
    videos: [
      {
        title: "Canopy Fairy Light Dinner Reveal",
        poster: "/images/garden-soiree.jpg",
        duration: "00:45",
        description: "50-foot wooden banquet table adorned with olive branches, peonies, and taper candles.",
      },
    ],
    droneVideos: [
      {
        title: "From Above: The Illuminated Garden Canopy",
        poster: "/images/garden-soiree.jpg",
        duration: "01:10",
        description: "Dusk aerial drone view descending through the treetop boughs above the radiant 50-foot candlelit banquet table.",
      },
    ],
    decorDetails: [
      {
        title: "10,000 Fairy Light Canopy",
        image: "/images/garden-soiree.jpg",
        description: "Suspended constellation of warm golden fairy lights creating an enchanted evening ceiling.",
      },
      {
        title: "Artisanal Place Settings",
        image: "/images/tablescape.jpg",
        description: "Hand-calligraphed menu scrolls, personalized brass cutlery, and organic botanical runners.",
      },
    ],
    whatWeHandle: [
      "One-of-a-Kind Creative Concept Formulation",
      "Intimate Proposal & Anniversary Setups",
      "Festive Styling (Diwali, New Year's Eve, Family Milestones)",
      "Private Chef Dinners & High-Touch Dining Experiences",
      "Boutique Terrace & Residential Transformations",
      "Custom Artistic Installations & Ambient Styling",
      "Personalized Music, Scent & Lighting Curation",
      "Discreet, Private On-Site Execution",
    ],
    features: [
      {
        title: "Infinite Flexibility",
        description:
          "We tailor every element to match your bespoke vision, whether hosting 10 VIP guests or 500 attendees.",
      },
      {
        title: "Intimate Attention to Detail",
        description:
          "From hand-calligraphed menu scrolls to custom signature drinks and scented candle paths, we elevate every touchpoint.",
      },
      {
        title: "Discretion & Privacy",
        description:
          "We understand the paramount importance of privacy for our clients and uphold strict confidentiality.",
      },
    ],
    process: [
      { step: "01", title: "Idea Spark", detail: "Share your wildest celebration dream, reference mood board, or occasion." },
      { step: "02", title: "Tailored Proposal", detail: "We design a customized experiential blueprint and transparent cost breakdown." },
      { step: "03", title: "Artistic Production", detail: "Curating bespoke decor, lighting, culinary collaborations, and details." },
      { step: "04", title: "The Unforgettable Evening", detail: "A magical, personalized celebration executed to absolute perfection." },
    ],
    faqs: [
      {
        question: "Can you design celebrations in private homes or farmhouses?",
        answer: "Yes, transforming private residences, backyards, terraces, and farmhouses into bespoke event venues is one of our signatures.",
      },
    ],
  },
];
