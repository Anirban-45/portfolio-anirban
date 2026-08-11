import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
		const apiKey = process.env.RESEND_API_KEY;
		console.log("DEBUG — KEY EXISTS:", !!apiKey);
    console.log("DEBUG — KEY LENGTH:", apiKey?.length);
    console.log("DEBUG — ALL ENV KEYS:", Object.keys(process.env).filter(k => k.includes("RESEND") || k.includes("CONTACT")));

		if (!apiKey) {
      return NextResponse.json(
        { success: false, error: "Server misconfigured: missing API key." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const { firstName, lastName, email, message } = await req.json();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL as string],
      replyTo: email,
      subject: `New message from ${firstName} ${lastName}`,
      text: `From: ${firstName} ${lastName} <${email}>\n\n${message}`,
    });

    if (error) {
      return NextResponse.json(
        { success: false, error: error.message ?? "Resend rejected the email." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Unexpected server error." },
      { status: 500 }
    );
  }
}
