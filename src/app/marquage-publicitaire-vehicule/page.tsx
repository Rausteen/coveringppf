import type { Metadata } from "next";
import { ServiceHero } from "@/components/ServiceHero";
import { ProcessSection } from "@/components/ProcessSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Gallery } from "@/components/Gallery";
import { PhotoCTA } from "@/components/PhotoCTA";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { SectionHeader } from "@/components/SectionHeader";
import { CheckIcon } from "@/components/icons";
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd } from "@/components/SEOJsonLd";
import { HOME_FAQ } from "@/content/faq";
import { siteConfig } from "@/config/site";
import { extractText } from "@/lib/extract-text";

export const metadata: Metadata = {
  title: "Marquage publicitaire véhicule Strasbourg | Utilitaire & flotte",
  description:
    "Marquage publicitaire véhicule à Strasbourg : utilitaires, voitures de fonction, flottes. Logo, identité visuelle, visibilité quotidienne. Devis WhatsApp.",
  alternates: { canonical: "/marquage-publicitaire-vehicule" },
  openGraph: {
    title: "Marquage publicitaire véhicule Strasbourg",
    description:
      "Transformez votre utilitaire en support publicitaire visible chaque jour. Pose nette et durable.",
    url: `${siteConfig.domain}/marquage-publicitaire-vehicule`,
  },
};

const marquageFaq = HOME_FAQ.filter((f) => /marquage|utilitaire|artisan|logo/i.test(f.q));

const SUPPORTS = [
  "Utilitaires (Trafic, Kangoo, Master, Sprinter, Boxer, Ducato…)",
  "Voitures de fonction & véhicules commerciaux",
  "Flottes d’entreprise (cohérence visuelle)",
  "Camions, remorques, food-trucks",
];

const APPLICATIONS = [
  "Logo + coordonnées (téléphone, site, adresse)",
  "Identité visuelle complète (couleurs, charte)",
  "Lettrage adhésif découpé",
  "Marquage partiel ou covering + marquage",
];

export default function MarquagePage() {
  return (
    <>
      <ServiceHero
        eyebrow="Marquage publicitaire véhicule"
        title={
          <>
            Marquage publicitaire véhicule à <span className="bg-gradient-to-r from-accent-soft via-accent to-accent-deep bg-clip-text text-transparent">Strasbourg</span>.
          </>
        }
        subtitle="Transformez votre véhicule utilitaire ou votre flotte en support de communication local. Visibilité quotidienne sur les routes de Strasbourg, du Bas-Rhin et de l’Alsace."
        bullets={[
          "Adapté artisans, entreprises, commerces, indépendants",
          "Lettrage, logo, identité visuelle complète",
          "Pose nette et durable, sans plis",
          "Visibilité 7j/7 sur la route",
        ]}
        service="Marquage"
        ctaLocation="marquage_hero"
        primaryLabel="Créer mon marquage"
        image={{
          src: "/marquage-hero.webp",
          alt: "Marquage publicitaire sur flotte d’utilitaires à Strasbourg",
        }}
      />

      <section className="py-20 sm:py-24">
        <div className="container-edge grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Supports"
              title="Tous les véhicules pros se prêtent au marquage."
            />
            <ul className="mt-6 space-y-3">
              {SUPPORTS.map((s) => (
                <li key={s} className="flex items-start gap-2.5 text-sm text-white/85">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader
              eyebrow="Applications"
              title="Du simple lettrage au covering complet + marquage."
            />
            <ul className="mt-6 space-y-3">
              {APPLICATIONS.map((s) => (
                <li key={s} className="flex items-start gap-2.5 text-sm text-white/85">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ProcessSection />
      <WhyChooseUs />
      <Gallery compact />
      <PhotoCTA />
      <FAQ items={marquageFaq} title="Questions fréquentes — Marquage" />
      <FinalCTA />

      <ServiceJsonLd
        name="Marquage publicitaire véhicule"
        description="Marquage publicitaire de véhicules utilitaires et de flottes à Strasbourg. Pose de lettrage, logo et identité visuelle."
        url={`${siteConfig.domain}/marquage-publicitaire-vehicule`}
      />
      <FaqJsonLd items={marquageFaq.map((it) => ({ q: it.q, aPlain: extractText(it.a) }))} />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: siteConfig.domain + "/" },
          { name: "Marquage publicitaire véhicule", url: siteConfig.domain + "/marquage-publicitaire-vehicule" },
        ]}
      />
    </>
  );
}
