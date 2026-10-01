"use client";

import { useState } from "react";
import { siteConfig } from "@/content/site";
import {
  ArrowUpRight,
  MessageCircle,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { InstagramIcon } from "@/components/icons";

export const eventTypes = [
  "Birthday",
  "Baby Shower",
  "Engagement",
  "Ring Ceremony",
  "Wedding",
  "Family Celebration",
  "Event Décor",
  "Customized Celebration",
  "Other",
] as const;

export const budgetRanges = [
  "Under ₹2 Lakhs",
  "₹2 Lakhs - ₹5 Lakhs",
  "₹5 Lakhs - ₹15 Lakhs",
  "₹15 Lakhs - ₹35 Lakhs",
  "₹35 Lakhs+",
  "Flexible / Prefer to discuss",
] as const;

export default function ContactClient() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    eventType: "Birthday",
    eventDate: "",
    eventLocation: "",
    guestCount: "",
    themeIdea: "",
    budgetRange: "₹2 Lakhs - ₹5 Lakhs",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || "Unable to send enquiry. Please try again or message via WhatsApp.");
      }
    } catch {
      setErrorMessage("Network issue. Please connect directly via WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-28 pb-24">
      {/* Header Section */}
      <section className="py-16 md:py-24 bg-[#0a0a0c] border-b border-[#faf8f5]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center space-x-3 text-xs tracking-[0.3em] uppercase text-[#c5a880] font-medium">
              <span className="w-6 h-[1px] bg-[#c5a880]" />
              <span>START A CONVERSATION</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#faf8f5] leading-tight">
              LET&apos;S PLAN YOUR NEXT <br />
              <span className="italic text-[#c5a880]">CELEBRATION.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#c8c2b7] font-light leading-relaxed">
              Tell us about your event and let&apos;s start creating something memorable.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Concierge Information */}
      <section className="py-20 bg-[#0c0c0f]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Form Column - 7 Cols */}
            <div className="lg:col-span-7">
              {submitted ? (
                /* Post-Submission Confirmation State */
                <div className="p-10 sm:p-14 rounded-sm bg-[#121216] border border-[#c5a880]/40 text-center space-y-8 animate-fadeIn shadow-2xl">
                  <div className="w-16 h-16 rounded-full bg-[#18181c] border border-[#c5a880]/50 flex items-center justify-center mx-auto text-[#c5a880]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#c5a880]">
                      ENQUIRY TRANSMITTED
                    </p>
                    <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#faf8f5] leading-tight">
                      THANK YOU. <br />
                      <span className="italic text-[#c5a880]">YOUR STORY HAS STARTED.</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-[#8c867d] max-w-md mx-auto leading-relaxed">
                      Our creative team has received your celebration details. We will review our schedule and get in touch with you within 24 hours.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#faf8f5]/10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href={siteConfig.whatsapp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#20ba59] transition-all shadow-md"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      <span>CHAT ON WHATSAPP</span>
                    </a>

                    <a
                      href={siteConfig.instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-[#faf8f5]/20 text-[#faf8f5] text-xs uppercase tracking-wider font-medium hover:border-[#c5a880] hover:text-[#c5a880] transition-all"
                    >
                      <InstagramIcon className="w-4 h-4 mr-2" />
                      <span>FOLLOW @THEAESTHETALES</span>
                    </a>
                  </div>
                </div>
              ) : (
                /* The Enquiry Form */
                <form
                  onSubmit={handleSubmit}
                  className="p-8 sm:p-12 rounded-sm bg-[#121216] border border-[#faf8f5]/10 space-y-6 shadow-xl"
                >
                  <div className="border-b border-[#faf8f5]/10 pb-4">
                    <h2 className="font-serif text-2xl text-[#faf8f5] font-light">
                      Event Enquiry Form
                    </h2>
                    <p className="text-xs text-[#8c867d] mt-1">
                      Share the details of your upcoming celebration.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-4 rounded-sm bg-red-950/40 border border-red-500/30 flex items-center space-x-3 text-red-200 text-xs">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label
                        htmlFor="fullName"
                        className="block text-[11px] uppercase tracking-wider text-[#c8c2b7]"
                      >
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Radhika Sharma"
                        className="w-full px-4 py-3 rounded-sm bg-[#18181c] border border-[#faf8f5]/15 text-sm text-[#faf8f5] placeholder:text-[#8c867d]/60 focus:outline-none focus:border-[#c5a880] transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2">
                      <label
                        htmlFor="phoneNumber"
                        className="block text-[11px] uppercase tracking-wider text-[#c8c2b7]"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        required
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="+91 98200 00000"
                        className="w-full px-4 py-3 rounded-sm bg-[#18181c] border border-[#faf8f5]/15 text-sm text-[#faf8f5] placeholder:text-[#8c867d]/60 focus:outline-none focus:border-[#c5a880] transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-[11px] uppercase tracking-wider text-[#c8c2b7]"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="radhika@example.com"
                        className="w-full px-4 py-3 rounded-sm bg-[#18181c] border border-[#faf8f5]/15 text-sm text-[#faf8f5] placeholder:text-[#8c867d]/60 focus:outline-none focus:border-[#c5a880] transition-colors"
                      />
                    </div>

                    {/* Event Type Dropdown */}
                    <div className="space-y-2">
                      <label
                        htmlFor="eventType"
                        className="block text-[11px] uppercase tracking-wider text-[#c8c2b7]"
                      >
                        Event Type *
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-sm bg-[#18181c] border border-[#faf8f5]/15 text-sm text-[#faf8f5] focus:outline-none focus:border-[#c5a880] transition-colors"
                      >
                        {eventTypes.map((t) => (
                          <option key={t} value={t} className="bg-[#18181c] text-[#faf8f5]">
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Event Date */}
                    <div className="space-y-2">
                      <label
                        htmlFor="eventDate"
                        className="block text-[11px] uppercase tracking-wider text-[#c8c2b7]"
                      >
                        Event Date / Month
                      </label>
                      <input
                        id="eventDate"
                        name="eventDate"
                        type="text"
                        value={formData.eventDate}
                        onChange={handleChange}
                        placeholder="e.g. November 2026 / Next Month"
                        className="w-full px-4 py-3 rounded-sm bg-[#18181c] border border-[#faf8f5]/15 text-sm text-[#faf8f5] placeholder:text-[#8c867d]/60 focus:outline-none focus:border-[#c5a880] transition-colors"
                      />
                    </div>

                    {/* Event Location */}
                    <div className="space-y-2">
                      <label
                        htmlFor="eventLocation"
                        className="block text-[11px] uppercase tracking-wider text-[#c8c2b7]"
                      >
                        Event Location / Venue
                      </label>
                      <input
                        id="eventLocation"
                        name="eventLocation"
                        type="text"
                        value={formData.eventLocation}
                        onChange={handleChange}
                        placeholder="e.g. Mumbai (Bandra / Juhu / Home / Hall)"
                        className="w-full px-4 py-3 rounded-sm bg-[#18181c] border border-[#faf8f5]/15 text-sm text-[#faf8f5] placeholder:text-[#8c867d]/60 focus:outline-none focus:border-[#c5a880] transition-colors"
                      />
                    </div>

                    {/* Approximate Guest Count */}
                    <div className="space-y-2">
                      <label
                        htmlFor="guestCount"
                        className="block text-[11px] uppercase tracking-wider text-[#c8c2b7]"
                      >
                        Guest Count
                      </label>
                      <input
                        id="guestCount"
                        name="guestCount"
                        type="text"
                        value={formData.guestCount}
                        onChange={handleChange}
                        placeholder="e.g. 50 (Intimate) or 200+ (Grand)"
                        className="w-full px-4 py-3 rounded-sm bg-[#18181c] border border-[#faf8f5]/15 text-sm text-[#faf8f5] placeholder:text-[#8c867d]/60 focus:outline-none focus:border-[#c5a880] transition-colors"
                      />
                    </div>

                    {/* Theme / Idea */}
                    <div className="space-y-2">
                      <label
                        htmlFor="themeIdea"
                        className="block text-[11px] uppercase tracking-wider text-[#c8c2b7]"
                      >
                        Theme / Idea
                      </label>
                      <input
                        id="themeIdea"
                        name="themeIdea"
                        type="text"
                        value={formData.themeIdea}
                        onChange={handleChange}
                        placeholder="e.g. Pastel Celestial, Retro Disco, Jungle Safari"
                        className="w-full px-4 py-3 rounded-sm bg-[#18181c] border border-[#faf8f5]/15 text-sm text-[#faf8f5] placeholder:text-[#8c867d]/60 focus:outline-none focus:border-[#c5a880] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Budget Range */}
                  <div className="space-y-2">
                    <label
                      htmlFor="budgetRange"
                      className="block text-[11px] uppercase tracking-wider text-[#c8c2b7]"
                    >
                      Budget Range
                    </label>
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-sm bg-[#18181c] border border-[#faf8f5]/15 text-sm text-[#faf8f5] focus:outline-none focus:border-[#c5a880] transition-colors"
                    >
                      {budgetRanges.map((b) => (
                        <option key={b} value={b} className="bg-[#18181c] text-[#faf8f5]">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-[11px] uppercase tracking-wider text-[#c8c2b7]"
                    >
                      Message / Special Requests
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about the setup, preferred elements (balloon arch, backdrop, cake table, photobooth), or any questions..."
                      className="w-full px-4 py-3 rounded-sm bg-[#18181c] border border-[#faf8f5]/15 text-sm text-[#faf8f5] placeholder:text-[#8c867d]/60 focus:outline-none focus:border-[#c5a880] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-full bg-[#c5a880] text-[#0a0a0c] text-xs uppercase tracking-[0.25em] font-semibold hover:bg-[#e0ceb7] transition-all duration-300 disabled:opacity-50 flex items-center justify-center space-x-2 cursor-pointer shadow-xl group"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>TRANSMITTING ENQUIRY...</span>
                        </>
                      ) : (
                        <>
                          <span>SEND ENQUIRY</span>
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Concierge Info Column - 5 Cols */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 rounded-sm bg-[#121216] border border-[#faf8f5]/10 space-y-6">
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880]">
                    Direct Connection
                  </p>
                  <h3 className="font-serif text-2xl text-[#faf8f5]">
                    Celebration Concierge
                  </h3>
                  <p className="text-xs text-[#8c867d] leading-relaxed">
                    Prefer immediate consultation? Reach our desk directly via WhatsApp or phone.
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-[#faf8f5]/10 text-xs">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                    <span className="text-[#c8c2b7]">{siteConfig.location}</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-[#c5a880] shrink-0" />
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-[#c8c2b7] hover:text-[#faf8f5] transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-[#c5a880] shrink-0" />
                    <a
                      href={siteConfig.whatsapp.url}
                      className="text-[#c8c2b7] hover:text-[#faf8f5] transition-colors"
                    >
                      {siteConfig.displayPhone}
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#faf8f5]/10 space-y-3">
                  <a
                    href={siteConfig.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center py-3.5 rounded-full bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#20ba59] transition-all shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    <span>CHAT ON WHATSAPP</span>
                  </a>

                  <a
                    href={siteConfig.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center py-3.5 rounded-full border border-[#25D366]/40 text-[#25D366] text-xs uppercase tracking-wider font-semibold hover:bg-[#25D366]/10 transition-all shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    <span>ENQUIRE ON WHATSAPP</span>
                  </a>

                  <a
                    href={siteConfig.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center py-3.5 rounded-full border border-[#faf8f5]/20 text-[#faf8f5] text-xs uppercase tracking-wider font-medium hover:border-[#c5a880] hover:text-[#c5a880] transition-all"
                  >
                    <InstagramIcon className="w-4 h-4 mr-2" />
                    <span>Follow @theaesthetetales</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
