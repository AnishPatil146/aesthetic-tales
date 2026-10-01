export interface FAQItem {
  id: string;
  category: "General" | "Planning & Booking" | "Styling & Décor" | "Venues & Locations";
  question: string;
  answer: string;
}

export const faqsData: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "What types of events do you plan?",
    answer:
      "Aesthetic Tales plans, styles and executes Indian celebrations including Birthday Celebrations, Baby Showers, Engagements & Ring Ceremonies, Weddings, Event Décor & Scenography, and Customized Family Celebrations across Mumbai and premier destinations.",
  },
  {
    id: "faq-2",
    category: "Styling & Décor",
    question: "Do you provide event décor?",
    answer:
      "Yes! Creative décor and spatial scenography are central to our work. We design bespoke stages, mandaps, organic balloon installations, architectural floral gateways, ambient mood lighting, cake tables, and curated dining tablescapes tailored to your celebration.",
  },
  {
    id: "faq-3",
    category: "Styling & Décor",
    question: "Can you create customized themes?",
    answer:
      "Absolutely. We reject generic templates. Whether you envision a 'Little Wild One' safari first birthday, an ethereal pastel baby shower, a sacred lakeside wedding mandap, or a candlelit garden anniversary, we craft original concept mood boards and custom props for your event.",
  },
  {
    id: "faq-4",
    category: "Planning & Booking",
    question: "How early should I book?",
    answer:
      "For milestone birthdays, engagements, and weddings, we recommend booking 4 to 8 weeks in advance to allow ample time for custom fabrication and design approvals. For intimate home setups and baby showers, we can often accommodate bookings within 2 to 3 weeks based on availability.",
  },
  {
    id: "faq-5",
    category: "Planning & Booking",
    question: "Do you handle complete event planning?",
    answer:
      "Yes. We offer turnkey event planning — handling concept development, vendor curation (caterers, photographers, artists, DJ, sound), budget tracking, timeline coordination, and on-day floor direction. We also offer standalone décor & styling services if you already have other vendors in place.",
  },
  {
    id: "faq-6",
    category: "Venues & Locations",
    question: "Do you work at different venues?",
    answer:
      "Yes. We regularly produce setups at private residences, terraces, sprawling farmhouses, luxury hotel banquets, restaurant dining rooms, and outdoor garden lawns across Mumbai and select destination locations.",
  },
  {
    id: "faq-7",
    category: "Planning & Booking",
    question: "How does the enquiry process work?",
    answer:
      "It begins with a quick conversation via our website enquiry form or WhatsApp. We note your occasion, date, venue, guest count, and initial ideas. Next, we share a customized visual concept deck and transparent cost estimate before confirming your booking with an advance deposit.",
  },
];
