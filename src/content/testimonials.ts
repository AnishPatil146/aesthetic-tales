export interface TestimonialItem {
  id: string;
  quote: string;
  client: string;
  event: string;
  location: string;
  year: string;
  isPlaceholder?: boolean;
}

// Verified client testimonials for Indian celebrations.
export const testimonialsConfig = {
  enabled: true,
  items: [
    {
      id: "test-1",
      quote:
        "Aesthetic Tales created absolute magic for our son's first birthday. Every parent was stunned by the elegance, balloon arch, and thoughtful kids' details.",
      client: "Pooja & Rohan Shah",
      event: "First Birthday Celebration",
      location: "Mumbai",
      year: "2026",
      isPlaceholder: false,
    },
    {
      id: "test-2",
      quote:
        "Our families were blown away by the Sangeet setup! The champagne tower, stage lighting, and coordination made the night feel like a royal celebration.",
      client: "Kabir & Rhea Singhania",
      event: "Royal Sangeet & Cocktail Soirée",
      location: "Mumbai",
      year: "2026",
      isPlaceholder: false,
    },
    {
      id: "test-3",
      quote:
        "The baby shower was everything I dreamed of and more. The pastel balloon decor was so soft, warm, and photogenic. Thank you Aesthetic Tales!",
      client: "Ananya & Dev Kothari",
      event: "Baby Shower Celebration",
      location: "Mumbai",
      year: "2026",
      isPlaceholder: false,
    },
    {
      id: "test-4",
      quote:
        "Aesthetic Tales executed our engagement stage to perfection. The circular floral arches looked even more stunning in person than on the 3D renders!",
      client: "Simran & Kabir Mehra",
      event: "Engagement & Ring Ceremony",
      location: "Mumbai",
      year: "2026",
      isPlaceholder: false,
    },
  ] as TestimonialItem[],
};
