import { COMPANY_NAME, COMPANY_URL } from "@/constants/company";

const BRAND = {
  navyDark: "#0c2344",
  navy: "#102f59",
  primary: "#198fcb",
  primaryLight: "#2fa8e6",
  surface: "#f8fafc",
  border: "#dce5ee",
  text: "#1f2937",
  textLight: "#64748b",
};

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label, value) {
  return `
    <tr>
      <td class="pef-label-cell" style="padding:14px 0;border-bottom:1px solid ${BRAND.border};vertical-align:top;width:120px;">
        <span style="font-family:'Segoe UI',Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${BRAND.textLight};">
          ${escapeHtml(label)}
        </span>
      </td>
      <td class="pef-value-cell" style="padding:14px 0;border-bottom:1px solid ${BRAND.border};vertical-align:top;">
        <span style="font-family:'Segoe UI',Arial,sans-serif;font-size:15px;color:${BRAND.text};word-break:break-word;">
          ${value}
        </span>
      </td>
    </tr>`;
}

export function renderContactNotificationEmail({ name, phone, email, address, serviceLabel, message, submittedAt }) {
  const safeName = escapeHtml(name);
  const safePhone = escapeHtml(phone);
  const safeEmail = escapeHtml(email);
  const safeAddress = escapeHtml(address);
  const safeService = escapeHtml(serviceLabel);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
  const logoUrl = `${COMPANY_URL}/images/logo.png`;

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>New Quote Request</title>
    <style>
      @media only screen and (max-width: 480px) {
        .pef-container { width: 100% !important; border-radius: 0 !important; border-left: 0 !important; border-right: 0 !important; }
        .pef-header { padding: 24px 20px !important; }
        .pef-body { padding: 24px 20px !important; }
        .pef-footer { padding: 18px 20px !important; }
        .pef-logo { width: 120px !important; }
        .pef-label-cell { width: 100px !important; font-size: 10px !important; }
        .pef-value-cell { font-size: 14px !important; }
      }
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:${BRAND.surface};font-family:'Segoe UI',Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BRAND.surface};padding:32px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" class="pef-container" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;border:1px solid ${BRAND.border};">

            <!-- Header band -->
            <tr>
              <td class="pef-header" style="background:linear-gradient(135deg, ${BRAND.navyDark} 0%, ${BRAND.navy} 100%);padding:28px 32px;text-align:center;">
                <img src="${logoUrl}" alt="${escapeHtml(COMPANY_NAME)}" width="140" class="pef-logo" style="display:block;margin:0 auto 14px;border:0;max-width:140px;height:auto;" />
                <span style="display:inline-block;padding:6px 14px;border-radius:999px;background:rgba(47,168,230,0.16);border:1px solid rgba(47,168,230,0.35);font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${BRAND.primaryLight};white-space:nowrap;">
                  New Quote Request
                </span>
              </td>
            </tr>

            <!-- Accent line -->
            <tr>
              <td style="height:4px;background:linear-gradient(90deg, ${BRAND.primary}, ${BRAND.primaryLight});font-size:0;line-height:0;">&nbsp;</td>
            </tr>

            <!-- Body -->
            <tr>
              <td class="pef-body" style="padding:32px 32px;">
                <p style="margin:0 0 4px;font-size:20px;font-weight:700;color:${BRAND.navyDark};">
                  ${safeName} wants a free quote
                </p>
                <p style="margin:0 0 28px;font-size:14px;color:${BRAND.textLight};">
                  Submitted ${escapeHtml(submittedAt)} via professionalepoxyflooring.ca
                </p>

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                  ${row("Name", safeName)}
                  ${row("Phone", `<a href="tel:${safePhone.replace(/[^\d+]/g, "")}" style="color:${BRAND.primary};text-decoration:none;">${safePhone}</a>`)}
                  ${row("Email", `<a href="mailto:${safeEmail}" style="color:${BRAND.primary};text-decoration:none;">${safeEmail}</a>`)}
                  ${row("Address", safeAddress)}
                  ${row("Service", safeService)}
                </table>

                <div style="margin-top:24px;padding:20px;border-radius:12px;background-color:${BRAND.surface};border:1px solid ${BRAND.border};">
                  <p style="margin:0 0 8px;font-family:'Segoe UI',Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${BRAND.textLight};">
                    Project Details
                  </p>
                  <p style="margin:0;font-size:15px;line-height:1.6;color:${BRAND.text};">
                    ${safeMessage}
                  </p>
                </div>

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:32px;">
                  <tr>
                    <td align="center">
                      <a href="mailto:${safeEmail}" style="display:inline-block;padding:14px 32px;border-radius:10px;background-color:${BRAND.navyDark};color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;">
                        Reply to ${safeName}
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td class="pef-footer" style="padding:20px 32px;background-color:${BRAND.surface};border-top:1px solid ${BRAND.border};">
                <p style="margin:0;font-size:12px;color:${BRAND.textLight};text-align:center;">
                  This lead was captured automatically from the contact form on
                  <a href="${COMPANY_URL}" style="color:${BRAND.primary};text-decoration:none;">professionalepoxyflooring.ca</a>.
                  You can reply directly to this email to reach the customer.
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const text = `New Quote Request — ${name}

Submitted ${submittedAt} via professionalepoxyflooring.ca

Name: ${name}
Phone: ${phone}
Email: ${email}
Address: ${address}
Service: ${serviceLabel}

Project Details:
${message}

Reply directly to this email to reach the customer.`;

  return { html, text };
}
