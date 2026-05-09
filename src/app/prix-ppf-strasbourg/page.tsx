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
  title: "Prix PPF Strasbourg | Combien coûte un film de protection carrosserie ?",
  description:
    "Prix d’une pose de PPF à Strasbourg : critères qui font varier le tarif (véhicule, zones, film, finition). Devis gratuit et transparent par WhatsApp en 30 minutes.",
  alternates: { canonical: "/prix-ppf-strasbourg" },
  openGraph: {
    title: "Prix PPF Strasbourg | Pose de film de protection carrosserie",
    description:
      "Tout ce qui fait varier le prix d’un PPF à Strasbourg. Demandez un devis gratuit en 30 minutes par WhatsApp.",
    url: `${siteConfig.domain}/prix-ppf-strasbourg`,
  },
};

const FACTORS = [
  {
    t: "Le véhicule",
    d: "Citadine, berline, SUV, sportive, utilitaire — la surface à couvrir et la complexité des courbes changent énormément le temps de pose.",
  },
  {
    t: "Les zones à protéger",
    d: "Face avant seule, capot + pare-chocs + rétros, ou full body intégral. Plus la zone est grande, plus la pose mobilise de film et d’heures atelier.",
  },
  {
    t: "Le film choisi",
    d: "Films transparents standards, films auto-cicatrisants, films premium avec finition gloss ou satin. La technologie et la marque (XPEL, 3M, STEK, Hexis) influencent le prix.",
  },
  {
    t: "L’état de la carrosserie",
    d: "Une peinture neuve ou parfaitement préparée demande moins de temps. Une carrosserie marquée ou tourbillonnée peut nécessiter une préparation préalable.",
  },
  {
    t: "Le niveau de finition",
    d: "Bords roulés, contournements de logos, démontage de pièces pour une pose invisible — chaque niveau d’exigence se reflète dans le devis.",
  },
];

const PERIMETERS = [
  {
    t: "PPF face avant (kit minimum)",
    d: "Bouclier avant, rétroviseurs, parfois bord du capot. Excellent rapport protection/budget pour qui roule beaucoup sur autoroute (A4 / A35).",
  },
  {
    t: "PPF avant + capot complet",
    d: "Le réflexe pour les véhicules premium et sportifs. Couvre les zones les plus exposées aux gravillons et aux insectes.",
  },
  {
    t: "PPF intégral (full body)",
    d: "Protection totale, idéal sur véhicules neufs, à forte valeur ou destinés à être conservés longtemps. Préserve la valeur de revente.",
  },
];

const ppfPriceFaq: FAQItem[] = [
  {
    q: "Pourquoi vous n’affichez pas un prix fixe en ligne ?",
    a: (
      <>
        Parce que ce ne serait pas honnête. Deux véhicules de la même marque peuvent demander
        une pose totalement différente selon les zones à protéger, le film choisi et l’état
        de la peinture. Un{" "}
        <Link className="text-accent hover:underline" href={buildWhatsAppUrl("PPF")} target="_blank" rel="noopener">
          devis WhatsApp en 30 min
        </Link>{" "}
        avec quelques photos est plus fiable qu’une grille générique.
      </>
    ),
  },
  {
    q: "Le PPF est-il un investissement rentable ?",
    a: (
      <>
        Sur un véhicule premium ou neuf, oui — un éclat de gravillon profond sur un capot
        peut coûter plusieurs centaines d’euros à corriger. Le PPF absorbe ces impacts et
        protège la peinture d’origine, ce qui préserve la valeur de revente.
      </>
    ),
  },
  {
    q: "Combien de temps prend la pose ?",
    a: (
      <>
        Une pose partielle (face avant) se fait en général sur la journée. Un PPF intégral
        demande plusieurs jours selon le véhicule. Nous vous donnons un délai précis dans
        le devis.
      </>
    ),
  },
  {
    q: "Le film est-il garanti ?",
    a: (
      <>
        Les films PPF posés sont couverts par la garantie du fabricant (durée variable
        selon la marque). Nous vous indiquons la garantie applicable au film retenu lors
        du devis.
      </>
    ),
  },
  {
    q: "Pouvez-vous intervenir près de Strasbourg ?",
    a: (
      <>
        Oui — atelier basé à {siteConfig.city}, nous accueillons des clients de tout le {siteConfig.department} et l’{siteConfig.region}&nbsp;: {siteConfig.serviceAreas.slice(0, 8).join(", ")}.
      </>
    ),
  },
];

export default function PrixPpfPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Prix PPF Strasbourg"
        title={
          <>
            Combien coûte un <span className="bg-gradient-to-r from-accent-soft via-accent to-accent-deep bg-clip-text text-transparent">PPF</span> à Strasbourg&nbsp;?
          </>
        }
        subtitle="Le prix d’un film de protection carrosserie dépend du véhicule, du périmètre, du film choisi et du niveau de finition. On vous explique ce qui fait varier le tarif — puis on vous propose un devis gratuit, transparent, en 30 minutes par WhatsApp."
        bullets={[
          "Devis gratuit en 30 minutes",
          "Sans engagement, sans frais cachés",
          "Conseil sur le périmètre adapté à votre usage",
          "Films premium au choix (XPEL, 3M, STEK, Hexis…)",
        ]}
        service="PPF"
        ctaLocation="prix_ppf_hero"
        primaryLabel="Demander mon devis PPF"
        image={{
          src: "/ppf-application.webp",
          alt: "Pose au squeegee d’un film PPF auto-cicatrisant — atelier Strasbourg",
        }}
      />

      <section className="py-20 sm:py-24">
        <div className="container-edge">
          <Reveal>
            <SectionHeader
              eyebrow="Ce qui fait varier le prix"
              title="5 critères déterminent le tarif d’un PPF."
              subtitle="Aucun PPF ne ressemble à un autre. Voilà pourquoi un prix « catalogue » serait trompeur."
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
              title="Du kit avant au PPF intégral — que choisir ?"
              subtitle="Le bon périmètre dépend de votre usage du véhicule (autoroute, ville, week-end), de sa valeur et de la durée pendant laquelle vous comptez le garder."
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
                      Pose maîtrisée, bords nets
                    </li>
                    <li className="flex items-start gap-2 text-xs text-white/75">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      Film transparent, aspect d’origine préservé
                    </li>
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <WhatsAppButton service="PPF" ctaLocation="prix_ppf_band" label="Demander mon devis PPF" />
              <CallButton ctaLocation="prix_ppf_band" label="Appeler" showNumber />
            </div>
          </Reveal>
        </div>
      </section>

      <FAQ items={ppfPriceFaq} title="Questions fréquentes sur le prix d’un PPF" />
      <FinalCTA />

      <ServiceJsonLd
        name="Pose de PPF — film de protection carrosserie"
        description="Devis pour la pose d’un film PPF (Paint Protection Film) à Strasbourg. Critères, périmètres, conseils."
        url={`${siteConfig.domain}/prix-ppf-strasbourg`}
      />
      <FaqJsonLd items={ppfPriceFaq.map((it) => ({ q: it.q, aPlain: extractText(it.a) }))} />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: siteConfig.domain + "/" },
          { name: "Prix PPF Strasbourg", url: siteConfig.domain + "/prix-ppf-strasbourg" },
        ]}
      />
    </>
  );
}
