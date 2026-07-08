import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/schemas/contactFormSchema";
import { getServiceById } from "@/constants/services";
import { getMailTransporter, getContactReceiverEmail } from "@/lib/email/mailer";
import { renderContactNotificationEmail } from "@/lib/email/contactNotificationTemplate";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { success: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { name, phone, email, address, service, message } = parsed.data;
  const serviceLabel = getServiceById(service)?.title ?? "Not specified";

  const submittedAt = new Date().toLocaleString("en-CA", {
    timeZone: "America/Edmonton",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const { html, text } = renderContactNotificationEmail({
    name,
    phone,
    email,
    address,
    serviceLabel,
    message,
    submittedAt,
  });

  try {
    const transporter = getMailTransporter();
    const receiver = getContactReceiverEmail();

    await transporter.sendMail({
      from: { name: `${name} via Professional Epoxy Flooring`, address: process.env.GMAIL_USER },
      to: receiver,
      replyTo: { name, address: email },
      subject: `New Quote Request — ${name} (${serviceLabel})`,
      html,
      text,
    });
  } catch (error) {
    console.error("Failed to send contact form email:", error);
    return NextResponse.json(
      { success: false, message: "We couldn't send your request right now. Please call us directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
