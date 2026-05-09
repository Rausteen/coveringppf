import { ServiceCard } from "./ServiceCard";
import { SectionHeader } from "./SectionHeader";
import { CarIcon, MegaphoneIcon, ShieldIcon, SparkIcon } from "./icons";

export function ServicesGrid() {
  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="container-edge">
        <SectionHeader
          eyebrow="Nos prestations"
          title="Protéger, transformer, signer votre véhicule."
          subtitle="Trois expertises, une même exigence : pose soignée, finition propre, conseil sur-mesure."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <ServiceCard
            badge="Best-seller"
            highlighted
            icon={<ShieldIcon className="h-5 w-5" />}
            title="PPF — Film protection carrosserie"
            intro="Film transparent qui protège la peinture des gravillons, rayures légères et insectes — sans en altérer l’aspect."
            bullets={[
              "Protège gravillons, micro-rayures, insectes, frottements",
              "Film transparent, conserve l’aspect d’origine",
              "Idéal véhicules neufs, premium, sportifs (Tesla, Porsche, BMW, Mercedes, Audi)",
              "Zones : face avant, capot, pare-chocs, rétroviseurs, bas de caisse, full body",
            ]}
            cta={{ label: "Devis PPF sur WhatsApp", service: "PPF", ctaLocation: "services_ppf" }}
            href="/ppf-strasbourg"
          />
          <ServiceCard
            icon={<SparkIcon className="h-5 w-5" />}
            title="Covering automobile"
            intro="Changez la couleur ou la finition de votre véhicule sans peinture. Réversible, premium, personnalisé."
            bullets={[
              "Changer la couleur sans peinture",
              "Mat, satiné, brillant, carbone, chrome delete",
              "Réversible — protège légèrement la peinture",
              "Total covering ou covering partiel",
            ]}
            cta={{ label: "Devis covering", service: "Covering", ctaLocation: "services_covering" }}
            href="/covering-strasbourg"
          />
          <ServiceCard
            icon={<MegaphoneIcon className="h-5 w-5" />}
            title="Marquage publicitaire véhicule"
            intro="Transformez votre utilitaire ou votre flotte en support de communication local et quotidien."
            bullets={[
              "Logo, coordonnées, identité visuelle complète",
              "Visibilité locale chaque jour sur la route",
              "Adapté artisans, entreprises, commerces, indépendants",
              "Pose nette, durable, sans plis",
            ]}
            cta={{ label: "Créer mon marquage", service: "Marquage", ctaLocation: "services_marquage" }}
            href="/marquage-publicitaire-vehicule"
          />
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-xs text-white/55">
          <CarIcon className="h-4 w-4 text-accent" />
          Particuliers & professionnels — Strasbourg, Schiltigheim, Illkirch, Lingolsheim, Bischheim, Ostwald, Hoenheim, Eckbolsheim, Kehl.
        </div>
      </div>
    </section>
  );
}
