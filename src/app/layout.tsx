import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { LocalBusinessJsonLd } from "@/components/SEOJsonLd";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "PPF & Covering à Strasbourg | Protection carrosserie & covering auto",
    template: "%s | " + siteConfig.businessName,
  },
  description:
    "Spécialiste PPF, covering automobile et marquage publicitaire véhicule à Strasbourg. Devis rapide par WhatsApp.",
  applicationName: siteConfig.businessName,
  keywords: [
    "PPF Strasbourg",
    "film protection carrosserie Strasbourg",
    "covering Strasbourg",
    "covering voiture Strasbourg",
    "covering auto Strasbourg",
    "marquage publicitaire véhicule Strasbourg",
    "protection carrosserie voiture Strasbourg",
    "PPF Alsace",
    "covering Alsace",
    "PPF près de Strasbourg",
    "covering près de Strasbourg",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.domain,
    siteName: siteConfig.businessName,
    title: "PPF & Covering à Strasbourg | Protection carrosserie & covering auto",
    description:
      "Spécialiste PPF, covering automobile et marquage publicitaire véhicule à Strasbourg. Devis rapide par WhatsApp.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: siteConfig.businessName }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PPF & Covering à Strasbourg",
    description: "Protection PPF & covering automobile premium. Devis WhatsApp.",
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#05070A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-ink-950"
        >
          Aller au contenu
        </a>
        <Header />
        <main id="main" className="pb-24 lg:pb-0">{children}</main>
        <Footer />
        <MobileStickyCTA />
        <LocalBusinessJsonLd />
      </body>
    </html>
  );
}
