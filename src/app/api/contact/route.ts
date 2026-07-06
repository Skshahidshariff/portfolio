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

    // Web3Forms Access Key for shaikshahidshariff@gmail.com
    const accessKey =
      process.env.WEB3FORMS_ACCESS_KEY || "62b48acd-0787-4bd0-b615-c7a92eba617c";

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
        subject: `New Portfolio Inquiry from ${name}`,
        from_name: `${name} (Portfolio Form)`,
        to_email: "shaikshahidshariff@gmail.com",
      }),
    });

    const data = await res.json();

    if (res.ok && data.success) {
      return NextResponse.json({
        success: true,
        message: "Your message has been delivered to shaikshahidshariff@gmail.com successfully!",
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
