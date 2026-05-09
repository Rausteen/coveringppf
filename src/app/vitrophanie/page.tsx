import type { Metadata } from "next";
import { ServiceHero } from "@/components/ServiceHero";
import { ProcessSection } from "@/components/ProcessSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Gallery } from "@/components/Gallery";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { SectionHeader } from "@/components/SectionHeader";
import { CheckIcon } from "@/components/icons";
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd } from "@/components/SEOJsonLd";
import { HOME_FAQ } from "@/content/faq";
import { siteConfig } from "@/config/site";
import { extractText } from "@/lib/extract-text";

export const metadata: Metadata = {
  title: "Vitrophanie Strasbourg | Vitrine, signalétique & décoration",
  description:
    "Vitrophanie à Strasbourg : habillage de vitrines, signalétique, effet dépoli pour la confidentialité, décoration de bureaux et locaux commerciaux.",
  alternates: { canonical: "/vitrophanie" },
  openGraph: {
    title: "Vitrophanie Strasbourg",
    description: "Habillage de vitrines, signalétique, confidentialité, décoration. Devis rapide WhatsApp.",
    url: `${siteConfig.domain}/vitrophanie`,
  },
};

const vitroFaq = HOME_FAQ.filter((f) => /vitrophanie|vitrine|confidentialité/i.test(f.q));

const USAGES = [
  "Habillage complet de vitrines de magasin",
  "Mise en avant de promotions, événements, soldes",
  "Signalétique d’entrée, horaires, coordonnées",
  "Décoration de bureaux et espaces de travail",
  "Effet dépoli pour la confidentialité (cabinets, salles de réunion)",
  "Logo et identité visuelle sur façade",
];

export default function VitrophaniePage() {
  return (
    <>
      <ServiceHero
        eyebrow="Vitrophanie"
        title={
          <>
            Vitrophanie à <span className="bg-gradient-to-r from-accent-soft via-accent to-accent-deep bg-clip-text text-transparent">Strasbourg</span>.
          </>
        }
        subtitle="Donnez de la présence à votre vitrine, à votre façade ou à vos bureaux. Habillage premium, signalétique nette, films dépolis pour la confidentialité — adapté à tous les commerces et locaux professionnels."
        bullets={[
          "Habillage de vitrines & façades",
          "Effet dépoli — confidentialité",
          "Décoration & signalétique premium",
          "Locaux commerciaux et professionnels",
        ]}
        service="Vitrophanie"
        ctaLocation="vitrophanie_hero"
        primaryLabel="Demander une vitrophanie"
      />

      <section className="py-20 sm:py-24">
        <div className="container-edge">
          <SectionHeader
            eyebrow="Cas d’usage"
            title="Une vitrine bien habillée fait toute la différence."
            subtitle="La vitrophanie, c’est l’une des manières les plus simples et les plus efficaces de donner une image pro à votre commerce."
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {USAGES.map((u) => (
              <li key={u} className="card flex items-start gap-2.5 text-sm text-white/85">
                <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-accent" />
                {u}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ProcessSection />
      <WhyChooseUs />
      <Gallery compact />
      <FAQ items={vitroFaq} title="Questions fréquentes — Vitrophanie" />
      <FinalCTA />

      <ServiceJsonLd
        name="Vitrophanie"
        description="Vitrophanie à Strasbourg : habillage de vitrines, signalétique, films dépolis pour la confidentialité, décoration de locaux."
        url={`${siteConfig.domain}/vitrophanie`}
      />
      <FaqJsonLd items={vitroFaq.map((it) => ({ q: it.q, aPlain: extractText(it.a) }))} />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: siteConfig.domain + "/" },
          { name: "Vitrophanie", url: siteConfig.domain + "/vitrophanie" },
        ]}
      />
    </>
  );
}
