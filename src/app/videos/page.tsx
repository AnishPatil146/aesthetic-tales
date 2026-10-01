import type { Metadata } from "next";
import VideosClient from "./VideosClient";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Cinematic Films & Reels",
  description:
    "Watch event films, reels, and behind-the-scenes scenography by Aesthetic Tales, captured across luxury weddings and celebrations.",
};

export default function VideosPage() {
  return (
    <>
      <VideosClient />
      <ContactCTA />
    </>
  );
}
