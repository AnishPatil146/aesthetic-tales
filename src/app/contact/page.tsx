import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Plan Your Event & Contact Studio",
  description:
    "Enquire with Aesthetic Tales about booking your wedding, milestone birthday, or corporate gala. Connect via bespoke consultation or WhatsApp.",
};

export default function ContactPage() {
  return <ContactClient />;
}
