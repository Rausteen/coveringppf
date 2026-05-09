import type { Metadata } from "next";
import { ServiceHero } from "@/components/ServiceHero";
import { CoveringFocus } from "@/components/CoveringFocus";
import { ProcessSection } from "@/components/ProcessSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Gallery } from "@/components/Gallery";
import { PhotoCTA } from "@/components/PhotoCTA";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd } from "@/components/SEOJsonLd";
import { HOME_FAQ } from "@/content/faq";
import { siteConfig } from "@/config/site";
import { extractText } from "@/lib/extract-text";

export const metadata: Metadata = {
  title: "Covering Strasbourg | Covering voiture total ou partiel",
  description:
    "Covering automobile à Strasbourg : changement de couleur, finitions mat, satin, brillant, carbone, chrome delete. Pose premium, devis WhatsApp.",
  alternates: { canonical: "/covering-strasbourg" },
  openGraph: {
    title: "Covering Strasbourg | Covering voiture total ou partiel",
    description:
      "Covering voiture & auto à Strasbourg. Changez le style de votre véhicule sans peinture. Devis rapide WhatsApp.",
    url: `${siteConfig.domain}/covering-strasbourg`,
  },
};

const coveringFaq = HOME_FAQ.filter((f) =>
  /covering|finition|chrome delete|couleur|réversible|peinture|partiel/i.test(f.q),
);

export default function CoveringPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Covering Strasbourg"
        title={
          <>
            Covering voiture à <span className="bg-gradient-to-r from-accent-soft via-accent to-accent-deep bg-clip-text text-transparent">Strasbourg</span> — total ou partiel.
          </>
        }
        subtitle="Changez la couleur ou la finition de votre véhicule sans peinture, en conservant la possibilité de revenir à l’origine. Mat, satin, brillant, carbone, chrome delete — pose soignée, finition premium."
        bullets={[
          "Covering total ou partiel",
          "Finitions mat, satin, brillant, carbone, chrome",
          "Réversible — protège la peinture",
          "Particuliers, sportives, premium, utilitaires",
          `Atelier à ${siteConfig.city}, intervention ${siteConfig.region}`,
        ]}
        service="Covering"
        ctaLocation="covering_hero"
        primaryLabel="Devis covering sur WhatsApp"
        image={{
          src: "/covering-hero.webp",
          alt: "Covering automobile finition mat satin sur véhicule premium à Strasbourg",
        }}
      />
      <CoveringFocus />
      <ProcessSection />
      <WhyChooseUs />
      <Gallery compact />
      <PhotoCTA />
      <FAQ items={coveringFaq} title="Questions fréquentes — Covering" />
      <FinalCTA />

      <ServiceJsonLd
        name="Covering automobile"
        description="Covering voiture (total ou partiel) à Strasbourg : changement de couleur, finitions mat, satin, brillant, carbone, chrome delete."
        url={`${siteConfig.domain}/covering-strasbourg`}
      />
      <FaqJsonLd items={coveringFaq.map((it) => ({ q: it.q, aPlain: extractText(it.a) }))} />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: siteConfig.domain + "/" },
          { name: "Covering Strasbourg", url: siteConfig.domain + "/covering-strasbourg" },
        ]}
      />
    </>
  );
}
