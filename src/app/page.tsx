import Hero from "@/components/Hero";
import CredibilityBanner from "@/components/CredibilityBanner";
import FounderSection from "@/components/FounderSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturedEventFilm from "@/components/FeaturedEventFilm";
import FeaturedWork from "@/components/FeaturedWork";
import PhilosophySection from "@/components/PhilosophySection";
import HomeDroneShowcase from "@/components/HomeDroneShowcase";
import SelectedGallery from "@/components/SelectedGallery";
import VideoShowcase from "@/components/VideoShowcase";
import IntroductionSection from "@/components/IntroductionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InstagramSection from "@/components/InstagramSection";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      {/* 01 — Cinematic Hero */}
      <Hero />

      {/* 02 — 25+ Events Credibility Banner */}
      <CredibilityBanner />

      {/* 03 — Sanath Poojari / Founder Introduction */}
      <FounderSection />

      {/* 04 — What We Create / Services (01 - 06) */}
      <ServicesSection />

      {/* 05 — Featured Event Film */}
      <FeaturedEventFilm />

      {/* 06 — Event Portfolio */}
      <FeaturedWork />

      {/* 07 — Event Planning Process: FROM IDEA TO EVENT (01 - 06) */}
      <PhilosophySection />

      {/* 08 — Drone / Aerial Showcase: FROM ABOVE */}
      <HomeDroneShowcase />

      {/* 09 — Photography Gallery */}
      <SelectedGallery />

      {/* 09B — Video / Reels Showcase */}
      <VideoShowcase />

      {/* 10 — About / Brand Philosophy */}
      <IntroductionSection />

      {/* 11 — Testimonials */}
      <TestimonialsSection />

      {/* 12 — Instagram: SEE MORE OF OUR STORIES */}
      <InstagramSection />

      {/* 13 — Final Enquiry CTA: HAVE A CELEBRATION IN MIND? */}
      <ContactCTA />
    </>
  );
}
