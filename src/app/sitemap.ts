import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const routes = [
  "",
  "/ppf-strasbourg",
  "/covering-strasbourg",
  "/marquage-publicitaire-vehicule",
  "/vitrophanie",
  "/realisations",
  "/contact",
  "/mentions-legales",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((path) => ({
    url: `${siteConfig.domain}${path || "/"}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
