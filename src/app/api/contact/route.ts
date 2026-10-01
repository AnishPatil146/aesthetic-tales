import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      phoneNumber,
      email,
      eventType,
      eventDate,
      eventLocation,
      guestCount,
      themeIdea,
      budgetRange,
      message,
    } = body;

    // Validation
    if (!fullName || !phoneNumber || !email || !eventType) {
      return NextResponse.json(
        { error: "Please complete all required fields (Name, Phone, Email, Event Type)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Server-side simulated lead submission processing
    // In production, this can forward to SendGrid, Resend, CRM, or WhatsApp webhook
    console.log("New Aesthetic Tales Celebration Enquiry Received:", {
      fullName,
      phoneNumber,
      email,
      eventType,
      eventDate,
      eventLocation,
      guestCount,
      themeIdea,
      budgetRange,
      message,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Celebration enquiry received successfully.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "An unexpected error occurred while transmitting your enquiry. Please reach out via WhatsApp." },
      { status: 500 }
    );
  }
}
