import type { Metadata } from "next";
import { ServiceHero } from "@/components/ServiceHero";
import { PPFFocus } from "@/components/PPFFocus";
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
  title: "PPF Strasbourg | Film protection carrosserie premium",
  description:
    "Pose de PPF (film de protection carrosserie) à Strasbourg : protection contre gravillons, micro-rayures et impacts. Pose partielle ou intégrale, devis WhatsApp.",
  alternates: { canonical: "/ppf-strasbourg" },
  openGraph: {
    title: "PPF Strasbourg | Film protection carrosserie premium",
    description:
      "Spécialiste de la pose de PPF à Strasbourg : protection invisible et durable de votre carrosserie. Devis rapide par WhatsApp.",
    url: `${siteConfig.domain}/ppf-strasbourg`,
  },
};

const ppfFaq = HOME_FAQ.filter((f) =>
  /PPF|protection|gravillons|carrosserie/i.test(f.q),
);

export default function PpfPage() {
  return (
    <>
      <ServiceHero
        eyebrow="PPF Strasbourg"
        title={
          <>
            Pose de PPF à <span className="bg-gradient-to-r from-accent-soft via-accent to-accent-deep bg-clip-text text-transparent">Strasbourg</span> — protection invisible & durable.
          </>
        }
        subtitle="Le PPF protège la peinture de votre véhicule contre les gravillons, les micro-rayures et les agressions du quotidien — sans modifier l’aspect d’origine. Pose partielle ou intégrale, conseil personnalisé."
        bullets={[
          "Film polyuréthane transparent",
          "Idéal véhicules neufs, premium et sportifs",
          "Pose partielle (face avant, capot…) ou intégrale",
          "Préserve la valeur de revente",
          `Atelier à ${siteConfig.city}, intervention ${siteConfig.region}`,
        ]}
        service="PPF"
        ctaLocation="ppf_hero"
        primaryLabel="Devis PPF sur WhatsApp"
        image={{
          src: "/ppf-hero.webp",
          alt: "Pose de PPF sur véhicule premium en atelier à Strasbourg",
        }}
      />
      <PPFFocus />
      <ProcessSection />
      <WhyChooseUs />
      <Gallery compact />
      <PhotoCTA />
      <FAQ items={ppfFaq} title="Questions fréquentes — PPF" />
      <FinalCTA />

      <ServiceJsonLd
        name="Pose de PPF — film de protection carrosserie"
        description="Pose professionnelle de film PPF (Paint Protection Film) à Strasbourg pour protéger la carrosserie contre les gravillons et micro-rayures."
        url={`${siteConfig.domain}/ppf-strasbourg`}
      />
      <FaqJsonLd
        items={ppfFaq.map((it) => ({ q: it.q, aPlain: extractText(it.a) }))}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: siteConfig.domain + "/" },
          { name: "PPF Strasbourg", url: siteConfig.domain + "/ppf-strasbourg" },
        ]}
      />
    </>
  );
}

