import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, buildWhatsAppUrl } from "@/config/site";
import { ServiceHero } from "@/components/ServiceHero";
import { SectionHeader } from "@/components/SectionHeader";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CallButton } from "@/components/CallButton";
import { CheckIcon } from "@/components/icons";
import { FAQ, type FAQItem } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd } from "@/components/SEOJsonLd";
import { Reveal } from "@/components/Reveal";
import { extractText } from "@/lib/extract-text";

export const metadata: Metadata = {
  title: "Prix covering Strasbourg | Combien coûte un covering voiture ?",
  description:
    "Prix d’un covering voiture à Strasbourg : critères qui font varier le tarif (taille du véhicule, finition mat / satin / brillant, total ou partiel). Devis gratuit en 30 minutes par WhatsApp.",
  alternates: { canonical: "/prix-covering-strasbourg" },
  openGraph: {
    title: "Prix covering Strasbourg | Tarif covering voiture total ou partiel",
    description:
      "Tout ce qui fait varier le prix d’un covering à Strasbourg. Devis gratuit en 30 minutes par WhatsApp.",
    url: `${siteConfig.domain}/prix-covering-strasbourg`,
  },
};

const FACTORS = [
  {
    t: "La taille du véhicule",
    d: "Citadine, berline, break, SUV, sportive ou utilitaire — la surface à recouvrir change directement la quantité de film et le temps de pose.",
  },
  {
    t: "Total ou partiel",
    d: "Covering total (changement de couleur intégral) vs partiel (toit noir, capot, rétros, chrome delete, bandes sportives). Le partiel est très rentable pour un effet fort.",
  },
  {
    t: "La finition choisie",
    d: "Mat, satin, brillant, carbone, chrome, métallisé — chaque finition a son film et sa technique de pose. Les finitions chrome ou caméléon sont les plus exigeantes.",
  },
  {
    t: "La marque du film",
    d: "Avery Dennison, 3M, Hexis, KPMF, Inozetek… La qualité du film impacte la durabilité, le rendu et la facilité de dépose. On vous oriente selon votre objectif.",
  },
  {
    t: "Le niveau de finition",
    d: "Bords roulés sous les pièces, démontage de poignées et rétros, contournements de logos. Plus la pose est invisible, plus elle demande d’heures atelier.",
  },
];

const PERIMETERS = [
  {
    t: "Covering partiel — accents",
    d: "Toit noir, capot mat, rétroviseurs, chrome delete, bandes sportives. Effet fort, budget contenu, idéal pour démarrer.",
  },
  {
    t: "Covering partiel — étendu",
    d: "Toit + capot + hayon, ou full body sauf bas de caisse. Apporte un vrai changement de personnalité au véhicule.",
  },
  {
    t: "Covering total (full wrap)",
    d: "Changement de couleur intégral, finitions premium possibles. Idéal pour transformer un véhicule sans toucher à la peinture d’origine.",
  },
];

const coveringPriceFaq: FAQItem[] = [
  {
    q: "Pourquoi pas de prix fixe affiché ?",
    a: (
      <>
        Parce qu’un covering A1 mat ne coûte pas la même chose qu’un Range Rover full wrap
        chrome. La fourchette est trop large pour être utile. Un{" "}
        <Link className="text-accent hover:underline" href={buildWhatsAppUrl("Covering")} target="_blank" rel="noopener">
          devis WhatsApp en 30 min
        </Link>{" "}
        avec les photos est plus précis qu’un tableau générique.
      </>
    ),
  },
  {
    q: "Combien de temps faut-il prévoir en atelier ?",
    a: (
      <>
        Un covering partiel (toit noir, capot) se fait en général sur la journée. Un
        covering total demande 3 à 5 jours selon le véhicule, la finition et le niveau
        de démontage souhaité.
      </>
    ),
  },
  {
    q: "Le covering peut-il être enlevé sans abîmer la peinture ?",
    a: (
      <>
        Oui — c’est tout l’intérêt. Sur une peinture d’origine en bon état, la dépose
        à chaud par un poseur professionnel ne laisse aucune trace. Le covering est donc
        100% réversible.
      </>
    ),
  },
  {
    q: "Faut-il déclarer le changement de couleur ?",
    a: (
      <>
        Si la couleur du véhicule change durablement, oui — il faut faire modifier la
        carte grise (mention « couleur dominante »). Nous vous accompagnons sur la
        marche à suivre lors du devis.
      </>
    ),
  },
  {
    q: "Travaillez-vous autour de Strasbourg ?",
    a: (
      <>
        Oui — atelier basé à {siteConfig.city}, nous accueillons des clients de tout le {siteConfig.department} et l’{siteConfig.region}&nbsp;: {siteConfig.serviceAreas.slice(0, 8).join(", ")}.
      </>
    ),
  },
];

export default function PrixCoveringPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Prix covering Strasbourg"
        title={
          <>
            Combien coûte un <span className="bg-gradient-to-r from-accent-soft via-accent to-accent-deep bg-clip-text text-transparent">covering</span> à Strasbourg&nbsp;?
          </>
        }
        subtitle="Le prix d’un covering voiture dépend de la taille du véhicule, du périmètre, de la finition choisie et du niveau de pose. On vous explique les critères — puis on vous propose un devis gratuit, transparent, en 30 minutes par WhatsApp."
        bullets={[
          "Devis gratuit en 30 minutes",
          "Sans engagement, sans frais cachés",
          "Conseil sur la finition adaptée à votre véhicule",
          "Films au choix : Avery, 3M, Hexis, KPMF, Inozetek",
        ]}
        service="Covering"
        ctaLocation="prix_covering_hero"
        primaryLabel="Demander mon devis covering"
        image={{
          src: "/covering-squeegee.webp",
          alt: "Pose au squeegee d’un covering vinyle mat — atelier Strasbourg",
        }}
      />

      <section className="py-20 sm:py-24">
        <div className="container-edge">
          <Reveal>
            <SectionHeader
              eyebrow="Ce qui fait varier le prix"
              title="5 critères déterminent le tarif d’un covering."
              subtitle="Aucun covering ne ressemble à un autre. Voilà pourquoi un prix « catalogue » serait trompeur."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {FACTORS.map((f, i) => (
              <Reveal key={f.t} delay={i * 60}>
                <div className="card h-full transition-all duration-300 hover:-translate-y-1 hover:border-accent/30">
                  <div className="text-sm font-semibold text-white">{f.t}</div>
                  <p className="mt-2 text-sm text-muted">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-ink-900 py-20 sm:py-24">
        <div className="container-edge">
          <Reveal>
            <SectionHeader
              eyebrow="Périmètres les plus demandés"
              title="Du toit noir au full wrap — que choisir ?"
              subtitle="Le bon périmètre dépend de l’effet recherché et de votre budget. Le partiel offre souvent le meilleur ratio impact / prix."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {PERIMETERS.map((p, i) => (
              <Reveal key={p.t} delay={i * 80}>
                <div className="card h-full">
                  <div className="text-sm font-semibold text-accent">{p.t}</div>
                  <p className="mt-2 text-sm text-muted">{p.d}</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start gap-2 text-xs text-white/75">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      Réversible, peinture d’origine préservée
                    </li>
                    <li className="flex items-start gap-2 text-xs text-white/75">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      Finition au choix : mat, satin, brillant, carbone
                    </li>
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <WhatsAppButton service="Covering" ctaLocation="prix_covering_band" label="Demander mon devis covering" />
              <CallButton ctaLocation="prix_covering_band" label="Appeler" showNumber />
            </div>
          </Reveal>
        </div>
      </section>

      <FAQ items={coveringPriceFaq} title="Questions fréquentes sur le prix d’un covering" />
      <FinalCTA />

      <ServiceJsonLd
        name="Covering automobile"
        description="Devis pour un covering voiture (total ou partiel) à Strasbourg. Critères, finitions, conseils."
        url={`${siteConfig.domain}/prix-covering-strasbourg`}
      />
      <FaqJsonLd items={coveringPriceFaq.map((it) => ({ q: it.q, aPlain: extractText(it.a) }))} />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: siteConfig.domain + "/" },
          { name: "Prix covering Strasbourg", url: siteConfig.domain + "/prix-covering-strasbourg" },
        ]}
      />
    </>
  );
}
