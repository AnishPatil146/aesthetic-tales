import type { Metadata } from "next";
import EventsClient from "./EventsClient";

export const metadata: Metadata = {
  title: "Events We've Created | Aesthetic Tales Portfolio",
  description:
    "Explore our portfolio of bespoke Indian celebrations: Birthdays, Baby Showers, Engagements, Ring Ceremonies, Weddings, and Custom Event Décor.",
};

export default function EventsPage() {
  return <EventsClient />;
}
