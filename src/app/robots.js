import { COMPANY_URL } from "@/constants/company";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${COMPANY_URL}/sitemap.xml`,
  };
}
