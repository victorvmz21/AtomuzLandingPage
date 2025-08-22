import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone || !message) {
      console.warn("⚠️ Missing fields:", { name, email, phone, message });
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("❌ RESEND_API_KEY missing");
      return NextResponse.json(
        { error: "Server misconfiguration: RESEND_API_KEY not set" },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: "Atomuz Form <noreply@noreply.atomuz.com>", // use verified domain
      to: ["atomuz.development@gmail.com"],
      replyTo: email,
      subject: `New contact form from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    });

    console.log("📩 Resend response:", JSON.stringify({ data, error }, null, 2));

    if (error) {
      console.error("❌ Resend error:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    console.log("✅ Email sent successfully");
    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err: unknown) {
    console.error("💥 Unexpected error:", err);

    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Unknown error" }, { status: 500 });
  }
}
