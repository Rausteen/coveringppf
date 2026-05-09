import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ServiceHero } from "@/components/ServiceHero";
import { SectionHeader } from "@/components/SectionHeader";
import { CheckIcon } from "@/components/icons";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CallButton } from "@/components/CallButton";
import { FAQ, type FAQItem } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/SEOJsonLd";
import { Reveal } from "@/components/Reveal";
import { extractText } from "@/lib/extract-text";

export const metadata: Metadata = {
  title: "PPF ou covering : que choisir pour votre voiture ?",
  description:
    "PPF vs covering : différences, avantages, inconvénients, prix, durabilité. Le guide pour choisir entre protection invisible et personnalisation esthétique. Atelier Strasbourg.",
  alternates: { canonical: "/ppf-vs-covering" },
  openGraph: {
    title: "PPF ou covering : que choisir ?",
    description: "Comparatif clair entre PPF (protection) et covering (esthétique).",
    url: `${siteConfig.domain}/ppf-vs-covering`,
  },
};

const COMPARISON: { label: string; ppf: string; covering: string }[] = [
  { label: "Objectif principal", ppf: "Protéger la peinture", covering: "Changer le look ou la couleur" },
  { label: "Aspect", ppf: "Transparent — invisible", covering: "Mat, satin, brillant, carbone, chrome…" },
  { label: "Réversible", ppf: "Oui (dépose pro)", covering: "Oui (dépose pro)" },
  { label: "Auto-cicatrisant", ppf: "Oui sur films premium", covering: "Non" },
  { label: "Protection contre les gravillons", ppf: "Excellente", covering: "Limitée" },
  { label: "Durée de vie typique", ppf: "5 à 10 ans selon film", covering: "3 à 7 ans selon film" },
  { label: "Préserve la valeur de revente", ppf: "Oui — protège la peinture d’origine", covering: "Oui (si pose pro et dépose soignée)" },
  { label: "Carte grise à modifier", ppf: "Non", covering: "Oui si changement de couleur durable" },
];

const CHOOSE_PPF = [
  "Vous venez d’acheter un véhicule neuf",
  "Vous roulez beaucoup sur autoroute (gravillons fréquents)",
  "Vous avez un véhicule premium / sportif (Porsche, BMW M, AMG, Audi RS, Tesla…)",
  "Vous comptez garder le véhicule longtemps",
  "Vous voulez préserver la valeur de revente",
];

const CHOOSE_COVERING = [
  "Vous voulez changer la couleur ou la finition de votre voiture",
  "Vous voulez un look mat, satin, carbone ou chrome delete",
  "Vous voulez tester un look sans engagement (réversible)",
  "Vous voulez transformer un utilitaire en outil de communication",
  "Vous cherchez à personnaliser sans repeindre",
];

const COMBO_FAQ: FAQItem[] = [
  {
    q: "Peut-on combiner PPF et covering ?",
    a: (
      <>
        Oui — on peut tout à fait poser un PPF sur la peinture d’origine, puis un covering
        par-dessus pour changer la couleur tout en protégeant la carrosserie. C’est plus
        coûteux mais c’est la solution premium pour qui veut le meilleur des deux mondes.
      </>
    ),
  },
  {
    q: "Le PPF est-il vraiment invisible ?",
    a: (
      <>
        Oui — bien posé, il est indétectable à l’œil nu. Certains films premium apportent
        même un léger gloss qui rend la peinture plus profonde. Le seul moyen de le voir
        de près est d’examiner les bords (qui doivent être impeccables).
      </>
    ),
  },
  {
    q: "Le covering protège-t-il la peinture ?",
    a: (
      <>
        Le covering offre une protection légère contre les rayures de surface et les UV,
        mais ce n’est pas son objectif premier. Pour une vraie protection contre les
        gravillons et impacts, c’est le PPF qu’il faut.
      </>
    ),
  },
  {
    q: "Lequel coûte le plus cher ?",
    a: (
      <>
        À surface équivalente, un PPF transparent premium est généralement plus cher
        qu’un covering — la technologie polyuréthane et la pose sont plus complexes.
        Mais sur un périmètre partiel (face avant), le PPF reste très accessible et
        terriblement rentable.
      </>
    ),
  },
  {
    q: "Que choisir si je ne sais pas ?",
    a: (
      <>
        Envoyez-nous quelques photos du véhicule sur WhatsApp avec votre objectif
        (protéger, transformer, ou les deux). On vous oriente honnêtement vers la
        meilleure solution selon votre véhicule, votre usage et votre budget.
      </>
    ),
  },
];

export default function PpfVsCoveringPage() {
  return (
    <>
      <ServiceHero
        eyebrow="PPF vs covering"
        title={
          <>
            <span className="bg-gradient-to-r from-accent-soft via-accent to-accent-deep bg-clip-text text-transparent">PPF</span> ou <span className="bg-gradient-to-r from-accent-soft via-accent to-accent-deep bg-clip-text text-transparent">covering</span> : que choisir ?
          </>
        }
        subtitle="Deux technologies souvent confondues, deux objectifs différents. Le PPF protège, le covering transforme. Voici le guide simple pour choisir — ou les combiner."
        bullets={[
          "Comparatif clair PPF vs covering",
          "Cas d’usage typiques pour chacun",
          "Combinaison possible (PPF + covering)",
          "Conseil personnalisé sur votre véhicule",
        ]}
        service="Devis"
        ctaLocation="ppfvscovering_hero"
        primaryLabel="Demander conseil sur WhatsApp"
        image={{
          src: "/hero.webp",
          alt: "Atelier de pose PPF et covering à Strasbourg",
        }}
      />

      <section className="py-20 sm:py-24">
        <div className="container-edge">
          <Reveal>
            <SectionHeader
              eyebrow="Comparatif"
              title="PPF vs covering — face à face."
              subtitle="Tout ce qu’il faut savoir pour décider en 2 minutes."
            />
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-12 overflow-hidden rounded-2xl border border-white/10">
              <div className="hidden grid-cols-3 border-b border-white/10 bg-white/[0.04] text-xs font-semibold uppercase tracking-wider text-white/60 sm:grid">
                <div className="px-5 py-3">Critère</div>
                <div className="px-5 py-3 text-accent">PPF</div>
                <div className="px-5 py-3">Covering</div>
              </div>
              <div className="divide-y divide-white/5">
                {COMPARISON.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-1 gap-2 px-5 py-4 text-sm transition-colors hover:bg-white/[0.02] sm:grid-cols-3 sm:gap-0"
                  >
                    <div className="font-medium text-white">{row.label}</div>
                    <div className="text-accent sm:text-white/85">
                      <span className="font-semibold sm:hidden">PPF&nbsp;: </span>
                      {row.ppf}
                    </div>
                    <div className="text-white/85">
                      <span className="font-semibold sm:hidden">Covering&nbsp;: </span>
                      {row.covering}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/5 bg-ink-900 py-20 sm:py-24">
        <div className="container-edge grid gap-6 lg:grid-cols-2">
          <Reveal variant="left">
            <div className="card h-full">
              <h2 className="text-xl font-semibold text-white">Choisissez le PPF si…</h2>
              <ul className="mt-5 space-y-2.5">
                {CHOOSE_PPF.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-white/85">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <WhatsAppButton service="PPF" ctaLocation="ppfvscovering_choose_ppf" label="Devis PPF" />
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" delay={100}>
            <div className="card h-full">
              <h2 className="text-xl font-semibold text-white">Choisissez le covering si…</h2>
              <ul className="mt-5 space-y-2.5">
                {CHOOSE_COVERING.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-white/85">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <WhatsAppButton service="Covering" ctaLocation="ppfvscovering_choose_covering" label="Devis covering" />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="container-edge mt-12 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
            <span className="text-sm text-white/70">Toujours hésitant&nbsp;?</span>
            <CallButton ctaLocation="ppfvscovering_indecisive" label="Appeler pour conseil" showNumber />
          </div>
        </Reveal>
      </section>

      <FAQ items={COMBO_FAQ} title="Questions fréquentes — PPF vs covering" />
      <FinalCTA />

      <FaqJsonLd items={COMBO_FAQ.map((it) => ({ q: it.q, aPlain: extractText(it.a) }))} />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: siteConfig.domain + "/" },
          { name: "PPF ou covering", url: siteConfig.domain + "/ppf-vs-covering" },
        ]}
      />
    </>
  );
}
