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

    // Use Web3Forms access key from environment variables or custom key
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      // If no key is configured in Vercel env, return notification explaining key requirement
      return NextResponse.json(
        {
          success: false,
          requireKey: true,
          message: "WEB3FORMS_ACCESS_KEY is missing. Please add your free Web3Forms access key to Vercel environment variables.",
        },
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
        access_key: accessKey,
        name,
        email,
        message,
        subject: `Portfolio Inquiry from ${name}`,
        from_name: `${name} (Portfolio Form)`,
      }),
    });

    const data = await res.json();

    if (res.ok && data.success) {
      return NextResponse.json({
        success: true,
        message: "Your message has been delivered to shaikshahidshariff@gmail.com!",
      });
    }

    return NextResponse.json(
      {
        success: false,
        message: data.message || "Failed to deliver message via Web3Forms.",
      },
      { status: 500 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error?.message || "Failed to send message." },
      { status: 500 }
    );
  }
}
