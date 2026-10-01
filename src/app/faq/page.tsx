import type { Metadata } from "next";
import FaqClient from "./FaqClient";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about booking timelines, destination event planning, decor design, and coordination with Aesthetic Tales.",
};

export default function FaqPage() {
  return (
    <>
      <FaqClient />
      <ContactCTA />
    </>
  );
}
