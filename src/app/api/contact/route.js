import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/schemas/contactFormSchema";

export async function POST(request) {
  const body = await request.json();
  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { success: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  // TODO: send email notification / save lead to CRM using parsed.data
  return NextResponse.json({ success: true }, { status: 200 });
}
