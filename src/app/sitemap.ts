import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";
import { PROJECTS } from "@/data/projects";
import { SERVICES } from "@/data/services";
import { INDUSTRIES } from "@/data/industries";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes = [
    "/",
    "/work/",
    "/services/",
    "/services/website-design/ecommerce/",
    "/services/website-design/business/",
    "/about/",
    "/contact/",
    "/who-we-help/",
    "/intent-circle/",
    "/privacy/",
    "/terms/",
  ];

  const serviceRoutes = SERVICES.map((s) => s.href);
  const projectRoutes = PROJECTS.map((p) => `/work/${p.slug}/`);
  const industryRoutes = INDUSTRIES.map((i) => i.href);

  // /thank-you/ is intentionally excluded (noindex)
  const allRoutes = [
    ...staticRoutes,
    ...serviceRoutes,
    ...projectRoutes,
    ...industryRoutes,
  ];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/services") ? 0.9 : 0.8,
  }));
}
