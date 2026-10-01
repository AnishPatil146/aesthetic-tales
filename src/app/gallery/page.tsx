import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Photography Gallery",
  description:
    "Explore the high-resolution editorial photography gallery of Aesthetic Tales, featuring weddings, private celebrations, and corporate galas.",
};

export default function GalleryPage() {
  return (
    <>
      <GalleryClient />
      <ContactCTA />
    </>
  );
}
