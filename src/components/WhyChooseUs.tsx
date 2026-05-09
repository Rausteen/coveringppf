import { siteConfig } from "@/config/site";
import { SectionHeader } from "./SectionHeader";
import { CheckIcon } from "./icons";
import { Reveal } from "./Reveal";

const ARGS = [
  {
    t: "Conseil personnalisé",
    d: "On vous oriente vers la solution la plus adaptée à votre véhicule, à votre usage et à votre budget — sans sur-vendre.",
  },
  {
    t: "Pose soignée",
    d: "Bords nets, contournements maîtrisés, finitions propres. Le détail fait la différence sur un PPF ou un covering.",
  },
  {
    t: "Films & matériaux sélectionnés",
    d: "Sélection de films qualitatifs et adaptés à chaque usage : protection, esthétique, marquage publicitaire véhicule.",
  },
  {
    t: "Solutions sur-mesure",
    d: "Partiel, complet, sportif, premium, utilitaire, flotte — la prestation s’adapte à votre véhicule et à votre objectif.",
  },
  {
    t: `Expertise locale à ${siteConfig.city}`,
    d: `Atelier basé à ${siteConfig.city}. Nous intervenons sur tout le ${siteConfig.department} et l’${siteConfig.region}.`,
  },
  {
    t: "Devis rapide par WhatsApp",
    d: "Quelques photos suffisent. Réponse claire, transparente, sans engagement.",
  },
  {
    t: "Particuliers & professionnels",
    d: "Voitures personnelles, sportives, premium, utilitaires d’artisans, flottes d’entreprise.",
  },
  {
    t: "Confidentialité & soin",
    d: "Votre véhicule est traité avec le sérieux qu’il mérite, à l’abri, dans un environnement de travail propre.",
  },
];

// =============================================================================
// PLACEHOLDERS CRÉDIBILITÉ — affichés uniquement si renseignés dans siteConfig.
// Pour activer une statistique, complétez `siteConfig.credentials` dans
// src/config/site.ts. Tant que les valeurs sont vides, rien ne s’affiche.
// =============================================================================
function Stats() {
  const c = siteConfig.credentials;
  const items = [
    c.yearsOfExperience && { k: "Années d’expérience", v: `${c.yearsOfExperience}+` },
    c.vehiclesCount && { k: "Véhicules réalisés", v: `${c.vehiclesCount}+` },
    c.brands.length > 0 && { k: "Films utilisés", v: c.brands.join(" · ") },
    c.certifications.length > 0 && { k: "Certifications", v: c.certifications.join(" · ") },
  ].filter(Boolean) as { k: string; v: string }[];

  if (items.length === 0) return null;

  return (
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((i) => (
        <div key={i.k} className="rounded-2xl border border-accent/20 bg-accent/[0.05] p-5 text-center">
          <div className="font-display text-2xl font-semibold text-white">{i.v}</div>
          <div className="mt-1 text-xs uppercase tracking-wider text-accent">{i.k}</div>
        </div>
      ))}
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section className="border-y border-white/5 bg-ink-900 py-20 sm:py-24">
      <div className="container-edge">
        <Reveal>
          <SectionHeader
            eyebrow="Pourquoi nous choisir"
            title="Le bon choix local pour votre véhicule."
            subtitle="On ne vend pas un produit. On accompagne un projet — protection, transformation ou communication."
          />
        </Reveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ARGS.map((a, i) => (
            <Reveal key={a.t} delay={i * 60}>
              <div className="card h-full transition-all duration-300 hover:-translate-y-1 hover:border-accent/30">
              <div className="flex items-start gap-3">
                <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-white">{a.t}</h3>
                  <p className="mt-1 text-sm text-muted">{a.d}</p>
                </div>
              </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Stats />
      </div>
    </section>
  );
}
