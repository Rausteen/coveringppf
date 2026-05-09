import type { Metadata } from "next";
import { Gallery } from "@/components/Gallery";
import { PhotoCTA } from "@/components/PhotoCTA";
import { FinalCTA } from "@/components/FinalCTA";
import { SectionHeader } from "@/components/SectionHeader";
import { BreadcrumbJsonLd } from "@/components/SEOJsonLd";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Réalisations PPF, covering & marquage à Strasbourg",
  description:
    "Galerie de réalisations PPF, covering, chrome delete, marquage publicitaire et vitrophanie à Strasbourg et alentours.",
  alternates: { canonical: "/realisations" },
};

export default function RealisationsPage() {
  return (
    <>
      <section className="border-b border-white/5 bg-ink-950 pt-12 sm:pt-16">
        <div className="container-edge">
          <nav aria-label="Fil d’Ariane" className="text-xs text-white/50">
            <a href="/" className="hover:text-white">Accueil</a>
            <span className="mx-2 text-white/30">/</span>
            <span className="text-white/70">Réalisations</span>
          </nav>
          <div className="mt-6">
            <SectionHeader
              eyebrow="Réalisations"
              title="PPF, covering & marquage — quelques projets."
              subtitle="Particuliers, sportives, premium, utilitaires d’artisans, vitrines de commerces. Chaque projet est traité avec la même exigence de finition."
            />
          </div>
          <div className="mt-12 divider-soft" />
        </div>
      </section>
      <Gallery />
      <PhotoCTA />
      <FinalCTA />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: siteConfig.domain + "/" },
          { name: "Réalisations", url: siteConfig.domain + "/realisations" },
        ]}
      />
    </>
  );
}
