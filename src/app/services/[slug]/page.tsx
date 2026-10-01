import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "@/content/services";
import { eventsData } from "@/content/events";
import { ArrowUpRight, ChevronRight, Play } from "lucide-react";
import ContactCTA from "@/components/ContactCTA";
import VideoPlayer from "@/components/media/VideoPlayer";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Aesthetic Tales — Indian Event Planning & Décor`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | Aesthetic Tales`,
      description: service.shortDescription,
      images: [{ url: service.heroImage }],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Find related events from our portfolio
  const relatedEvents = eventsData
    .filter((e) =>
      e.services.some(
        (srv) =>
          srv.toLowerCase().includes(service.title.toLowerCase().split(" ")[0]) ||
          srv.toLowerCase().includes(service.category.toLowerCase())
      )
    )
    .slice(0, 3);

  const displayRelatedEvents =
    relatedEvents.length > 0 ? relatedEvents : eventsData.slice(0, 3);

  return (
    <div className="pt-28 pb-0">
      {/* Breadcrumb Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-6 pb-4 flex items-center space-x-2 text-xs text-[#8c867d]">
        <Link href="/" className="hover:text-[#faf8f5] transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/services" className="hover:text-[#faf8f5] transition-colors">
          Services
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-[#c5a880]">{service.title}</span>
      </div>

      {/* 1. SERVICE HERO */}
      <section className="relative py-16 md:py-24 bg-[#0a0a0c] border-b border-[#faf8f5]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-3 text-xs tracking-[0.3em] uppercase text-[#c5a880] font-medium">
                <span className="w-6 h-[1px] bg-[#c5a880]" />
                <span>Service {service.code} · Mini Portfolio</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl font-light text-[#faf8f5] leading-tight">
                {service.title}
              </h1>

              <p className="font-serif text-xl sm:text-2xl text-[#c5a880] italic font-light">
                &ldquo;{service.tagline}&rdquo;
              </p>

              <p className="text-sm sm:text-base text-[#c8c2b7] font-light leading-relaxed">
                {service.fullDescription}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-7 py-3.5 rounded-full bg-[#c5a880] text-[#0a0a0c] text-xs uppercase tracking-[0.22em] font-semibold hover:bg-[#e0ceb7] transition-all shadow-md group"
                >
                  <span>PLAN THIS EVENT</span>
                  <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <a
                  href={`https://wa.me/919820012345?text=${encodeURIComponent(
                    `Hi Aesthetic Tales, I'd like to enquire about ${service.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3.5 rounded-full border border-[#faf8f5]/20 hover:border-[#25D366] text-xs uppercase tracking-[0.22em] font-medium text-[#faf8f5] hover:text-[#25D366] transition-colors"
                >
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden border border-[#faf8f5]/10 shadow-2xl">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION & SCOPE */}
      <section className="py-20 bg-[#0c0c0f] border-b border-[#faf8f5]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-12 space-y-3">
            <div className="flex items-center space-x-3 text-xs tracking-[0.3em] uppercase text-[#c5a880] font-medium">
              <span className="w-6 h-[1px] bg-[#c5a880]" />
              <span>Full Scope of Directorship</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#faf8f5] font-light">
              WHAT WE PLAN & STYLE
            </h2>
            <p className="text-xs sm:text-sm text-[#8c867d]">
              Turnkey management from concept design to midnight wrap-up.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.whatWeHandle.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-sm bg-[#121216] border border-[#faf8f5]/10 hover:border-[#c5a880]/30 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="w-8 h-8 rounded-full bg-[#18181c] border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880] text-xs font-mono">
                  0{idx + 1}
                </div>
                <p className="text-xs text-[#faf8f5] font-medium leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED EVENT FILM */}
      {service.featuredVideo && (
        <section className="py-24 bg-[#0a0a0c] border-b border-[#faf8f5]/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-8">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] text-[#c5a880]">
                CINEMATIC EVENT FILM
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#faf8f5] font-light">
                {service.featuredVideo.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#8c867d] max-w-2xl">
                {service.featuredVideo.description}
              </p>
            </div>

            <div className="relative rounded-sm overflow-hidden border border-[#faf8f5]/15 shadow-2xl bg-[#121216]">
              <VideoPlayer
                src={service.featuredVideo.videoUrl}
                poster={service.featuredVideo.poster}
                title={service.featuredVideo.title}
                duration={service.featuredVideo.duration}
                aspectRatio="landscape"
                autoPlay={false}
                showDevBadge={true}
                className="w-full"
              />
            </div>
          </div>
        </section>
      )}

      {/* 4. PHOTO SHOWCASE */}
      <section className="py-24 bg-[#0c0c0f] border-b border-[#faf8f5]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.3em] text-[#c5a880]">
              THE DETAILS & ATMOSPHERE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#faf8f5] font-light">
              PHOTO SHOWCASE
            </h2>
            <p className="text-xs sm:text-sm text-[#8c867d]">
              High-resolution captures of stages, dessert tables, entrance tunnels, and ceremonial moments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.images.map((img, i) => (
              <div
                key={i}
                className="group relative aspect-[4/3] rounded-sm overflow-hidden border border-[#faf8f5]/10 bg-[#121216] shadow-md"
              >
                <Image
                  src={img}
                  alt={`${service.title} photography showcase ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EVENT VIDEO SHOWCASE */}
      {service.videos.length > 0 && (
        <section className="py-24 bg-[#0a0a0c] border-b border-[#faf8f5]/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] text-[#c5a880]">
                EVENT HIGHLIGHTS & SHORT FILMS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#faf8f5] font-light">
                EVENT MOMENTS & VIDEOS
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.videos.map((vid, idx) => (
                <div
                  key={idx}
                  className="rounded-sm overflow-hidden border border-[#faf8f5]/10 bg-[#121216] shadow-xl group space-y-4 p-4"
                >
                  <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden bg-[#0a0a0c]">
                    <Image
                      src={vid.poster}
                      alt={vid.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[#0a0a0c]/40 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#0a0a0c]/80 border border-[#c5a880]/60 flex items-center justify-center text-[#faf8f5] group-hover:scale-110 group-hover:text-[#c5a880] transition-all">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>
                    <span className="absolute bottom-3 right-3 px-2 py-0.5 bg-[#0a0a0c]/80 backdrop-blur-sm text-[10px] font-mono text-[#c5a880] rounded">
                      {vid.duration}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-[#faf8f5] font-light">
                      {vid.title}
                    </h3>
                    <p className="text-xs text-[#8c867d] mt-1 leading-relaxed">
                      {vid.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. DÉCOR DETAILS */}
      {service.decorDetails && service.decorDetails.length > 0 && (
        <section className="py-24 bg-[#0c0c0f] border-b border-[#faf8f5]/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] text-[#c5a880]">
                ARTISANAL SCENOGRAPHY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#faf8f5] font-light">
                DÉCOR CLOSE-UPS & CRAFTSMANSHIP
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.decorDetails.map((detail, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-sm bg-[#121216] border border-[#faf8f5]/10 flex flex-col sm:flex-row gap-6 items-center shadow-lg"
                >
                  <div className="relative aspect-square w-32 shrink-0 rounded-sm overflow-hidden border border-[#faf8f5]/10">
                    <Image
                      src={detail.image}
                      alt={detail.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl text-[#faf8f5]">
                      {detail.title}
                    </h3>
                    <p className="text-xs text-[#8c867d] leading-relaxed">
                      {detail.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. DRONE FOOTAGE IF AVAILABLE */}
      {service.droneVideos && service.droneVideos.length > 0 && (
        <section className="py-24 bg-[#0a0a0c] border-b border-[#faf8f5]/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-8">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] text-[#c5a880]">
                AERIAL PERSPECTIVE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#faf8f5] font-light">
                FROM ABOVE
              </h2>
            </div>

            <div className="relative aspect-[21/9] w-full rounded-sm overflow-hidden border border-[#faf8f5]/15 shadow-2xl bg-[#0a0a0c] group">
              <Image
                src={service.droneVideos[0].poster}
                alt={service.droneVideos[0].title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-[#0a0a0c]/40" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-[#c5a880]">
                    4K 60FPS Aerial Cinematography
                  </span>
                  <h3 className="font-serif text-2xl text-[#faf8f5]">
                    {service.droneVideos[0].title}
                  </h3>
                  <p className="text-xs text-[#c8c2b7] max-w-xl hidden sm:block">
                    {service.droneVideos[0].description}
                  </p>
                </div>
                <span className="text-xs font-mono text-[#c5a880] bg-[#0a0a0c]/80 px-3 py-1 rounded">
                  {service.droneVideos[0].duration}
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 8. RELATED EVENTS */}
      <section className="py-24 bg-[#0a0a0c] border-b border-[#faf8f5]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] text-[#c5a880]">
                PORTFOLIO CASE STUDIES
              </span>
              <h2 className="font-serif text-3xl text-[#faf8f5] font-light">
                RELATED CELEBRATIONS
              </h2>
            </div>
            <Link
              href="/events"
              className="text-xs uppercase tracking-[0.2em] text-[#c5a880] hover:text-[#faf8f5] transition-colors"
            >
              View All Events
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayRelatedEvents.map((event) => (
              <Link
                key={event.slug}
                href={`/events/${event.slug}`}
                className="group relative overflow-hidden rounded-sm bg-[#121216] border border-[#faf8f5]/10 hover:border-[#c5a880]/50 transition-all duration-300 shadow-lg"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#18181c]">
                  <Image
                    src={event.coverImage}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-[10px] uppercase tracking-wider text-[#c5a880] font-medium">
                    {event.categoryLabel} · {event.location}
                  </span>
                  <h3 className="font-serif text-xl text-[#faf8f5] group-hover:text-[#c5a880] transition-colors leading-snug">
                    {event.title}
                  </h3>
                  <p className="text-xs text-[#8c867d] line-clamp-2 leading-relaxed">
                    {event.conceptHeadline}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. ENQUIRY CTA */}
      <ContactCTA />
    </div>
  );
}
