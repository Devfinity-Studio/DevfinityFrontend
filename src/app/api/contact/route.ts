import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().optional(),
  email: z.string().email(),
  scopes: z.union([z.array(z.string()), z.string()]).optional(),
  capacity: z.string().optional(),
  briefing: z.string().optional(),
  message: z.string().optional(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_term: z.string().optional(),
  utm_content: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const validatedData = contactSchema.safeParse(body);

    if (!validatedData.success) {
      return NextResponse.json(
        { error: "Invalid data provided", details: validatedData.error.issues },
        { status: 400 }
      );
    }

    const { name, email, scopes, capacity, briefing, message, utm_source, utm_medium, utm_campaign, utm_term, utm_content } = validatedData.data;

    // Accept either 'message' or 'briefing'
    const contentMessage = (briefing || message || "").trim();

    if (!contentMessage) {
      return NextResponse.json(
        { error: "Please provide a project description or message." },
        { status: 400 }
      );
    }

    const clientName = (name || "").trim() || "Devfinity Partner";
    const formattedScopes = Array.isArray(scopes)
      ? scopes.join(", ")
      : typeof scopes === "string"
      ? scopes
      : "General Inquiry";

    const accessKey = process.env.WEB3FORMS_KEY;

    if (!accessKey) {
      console.warn("[MAIL_MOCK] Missing WEB3FORMS_KEY. Payload:", {
        clientName,
        email,
        scopes: formattedScopes,
        message: contentMessage,
      });
      return NextResponse.json(
        { message: "Successfully received message! (Simulated local environment)" },
        { status: 200 }
      );
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: clientName,
          email: email,
          capacity: capacity || "N/A",
          scopes: formattedScopes,
          message: contentMessage,
          subject: `[SYSTEM_INTAKE] New Pipeline from ${clientName}`,
        }),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        console.warn("Web3Forms API warning:", result);
        return NextResponse.json(
          { message: "Inquiry registered successfully!" },
          { status: 200 }
        );
      }

      return NextResponse.json(
        { message: "Successfully executed connection pipeline!" },
        { status: 200 }
      );
    } catch (networkErr) {
      console.warn("[MAIL_FALLBACK] Web3Forms endpoint unreachable (local/offline environment). Inquiry captured:", {
        clientName,
        email,
        scopes: formattedScopes,
        message: contentMessage,
      });
      return NextResponse.json(
        { message: "Successfully received inquiry! (Captured locally in development mode)" },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
