import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.businessName} — PPF & Covering ${siteConfig.city}`,
    short_name: siteConfig.businessName,
    description:
      "Spécialiste PPF, covering automobile et marquage publicitaire véhicule à Strasbourg. Devis rapide par WhatsApp.",
    start_url: "/",
    display: "standalone",
    background_color: "#05070A",
    theme_color: "#05070A",
    lang: "fr",
    icons: [
      { src: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
