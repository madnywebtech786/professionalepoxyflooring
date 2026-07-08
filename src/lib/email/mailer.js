import nodemailer from "nodemailer";

let cachedTransporter = null;

export function getMailTransporter() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    throw new Error("Email is not configured: GMAIL_USER and GMAIL_APP_PASSWORD must be set.");
  }

  if (!cachedTransporter) {
    cachedTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });
  }

  return cachedTransporter;
}

export function getContactReceiverEmail() {
  return process.env.CONTACT_RECEIVER_EMAIL || process.env.GMAIL_USER;
}
