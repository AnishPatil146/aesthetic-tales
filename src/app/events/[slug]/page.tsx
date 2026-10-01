import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { eventsData } from "@/content/events";
import EventDetailClient from "./EventDetailClient";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return eventsData.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = eventsData.find((p) => p.slug === slug);

  if (!event) {
    return {
      title: "Event Not Found | Aesthetic Tales",
    };
  }

  return {
    title: `${event.title} — ${event.categoryLabel} | Aesthetic Tales`,
    description: event.conceptHeadline,
    openGraph: {
      title: `${event.title} | Aesthetic Tales Celebration`,
      description: event.conceptHeadline,
      images: [
        {
          url: event.coverImage,
          width: 1200,
          height: 630,
          alt: event.title,
        },
      ],
    },
  };
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const event = eventsData.find((p) => p.slug === slug);

  if (!event) {
    notFound();
  }

  const relatedEvents = eventsData
    .filter((p) => p.slug !== event.slug)
    .slice(0, 3);

  return <EventDetailClient event={event} relatedEvents={relatedEvents} />;
}
