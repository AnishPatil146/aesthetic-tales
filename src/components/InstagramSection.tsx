import Image from "next/image";
import { siteConfig } from "@/content/site";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/icons";

const instagramFeed = [
  {
    id: "ig-1",
    image: "/images/birthday-soiree.jpg",
    caption: "A Little Wild One first birthday celebration setup. #AestheticTales #BirthdayDecor",
  },
  {
    id: "ig-2",
    image: "/images/hero-wedding.jpg",
    caption: "Sacred lakeside wedding mandap and fragrant jasmine chandeliers. #WeddingDecor #AestheticTales",
  },
  {
    id: "ig-3",
    image: "/images/baby-shower.jpg",
    caption: "Pastel balloon dreamscape & floral clouds welcoming baby. #BabyShower #Celebrations",
  },
  {
    id: "ig-4",
    image: "/images/engagement-stage.jpg",
    caption: "Circular floral arch stage for an intimate ring ceremony. #EngagementDecor #IndianEvents",
  },
  {
    id: "ig-5",
    image: "/images/champagne-tower.jpg",
    caption: "Seven-tier champagne coupe tower pour for the royal sangeet cocktail soirée. #SangeetDecor #AestheticTales",
  },
  {
    id: "ig-6",
    image: "/images/royal-mandap.jpg",
    caption: "500kg of fresh jasmine & sacred temple bells scenography. #EventDecor #Scenography",
  },
];

export default function InstagramSection() {
  return (
    <section className="py-24 md:py-36 bg-[#070708] border-t border-[#faf8f5]/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center space-x-3 text-xs tracking-[0.3em] uppercase text-[#c5a880] font-medium">
            <InstagramIcon className="w-4 h-4 text-[#c5a880]" />
            <span>{siteConfig.instagram.handle}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#faf8f5] tracking-tight">
            SEE MORE OF OUR STORIES
          </h2>
          <p className="text-sm sm:text-base text-[#c8c2b7] font-light">
            Follow Aesthetic Tales for our latest celebrations, setups and event moments.
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-12">
          {instagramFeed.map((post) => (
            <a
              key={post.id}
              href={siteConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-sm bg-[#121215] border border-[#faf8f5]/10 hover:border-[#c5a880]/50 transition-all duration-300 shadow-sm"
              aria-label={`View Instagram post: ${post.caption}`}
            >
              <Image
                src={post.image}
                alt="Aesthetic Tales Instagram Moment"
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#0a0a0c]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3 text-center">
                <InstagramIcon className="w-6 h-6 text-[#faf8f5] transition-transform group-hover:scale-110" />
              </div>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href={siteConfig.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 rounded-full border border-[#c5a880]/60 text-xs uppercase tracking-[0.22em] font-semibold text-[#faf8f5] hover:bg-[#c5a880] hover:text-[#0a0a0c] transition-all duration-300 group shadow-md"
          >
            <InstagramIcon className="w-4 h-4 mr-2" />
            <span>FOLLOW @THEAESTHETALES</span>
            <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
