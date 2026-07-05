import { COMPANY_URL } from "@/constants/company";
import { SERVICES } from "@/constants/services";

export default function sitemap() {
  const lastModified = new Date();

  const staticRoutes = [
    { url: "/", changeFrequency: "monthly", priority: 1 },
    { url: "/about", changeFrequency: "monthly", priority: 0.7 },
    { url: "/services", changeFrequency: "monthly", priority: 0.9 },
    { url: "/projects", changeFrequency: "weekly", priority: 0.7 },
    { url: "/faq", changeFrequency: "monthly", priority: 0.6 },
    { url: "/contact", changeFrequency: "monthly", priority: 0.8 },
  ].map((route) => ({
    url: `${COMPANY_URL}${route.url}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const serviceRoutes = SERVICES.map((service) => ({
    url: `${COMPANY_URL}/services/${service.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
