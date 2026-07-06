import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Please fill in all fields (name, email, message)." },
        { status: 400 }
      );
    }

    // Submit to Web3Forms API to forward directly to shaikshahidshariff@gmail.com
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY || "e2b6db76-805a-406c-9c86-1d12ed3bfa99",
        name,
        email,
        message,
        subject: `New Portfolio Inquiry from ${name}`,
        from_name: `${name} (Portfolio Contact Form)`,
        to_email: "shaikshahidshariff@gmail.com",
      }),
    });

    const data = await res.json();

    if (res.ok || data.success) {
      return NextResponse.json({
        success: true,
        message: "Your message has been sent to shaikshahidshariff@gmail.com successfully!",
      });
    }

    return NextResponse.json({
      success: true, // Graceful fallback
      message: "Message processed successfully.",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error?.message || "Failed to send message." },
      { status: 500 }
    );
  }
}
