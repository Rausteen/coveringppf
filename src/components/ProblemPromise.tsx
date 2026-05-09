import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

const PROBLEMS = [
  { t: "Peinture fragile", d: "Tourbillons, micro-rayures, oxydation prématurée." },
  { t: "Gravillons & impacts", d: "Face avant, capot et bas de caisse exposés en permanence." },
  { t: "Traces de lavage", d: "Brosses agressives, mauvais produits, finition ternie." },
  { t: "Look qui lasse", d: "Envie de changer la couleur sans repeindre — réversible." },
  { t: "Visibilité pro", d: "Véhicule utilitaire ou flotte sans identité visuelle." },
  { t: "Valeur de revente", d: "Carrosserie marquée = décote au moment de revendre." },
];

const PROMISES = [
  "Protéger la valeur de votre véhicule sur le long terme",
  "Améliorer l’esthétique avec une finition propre et durable",
  "Choisir le bon film selon votre véhicule et votre objectif",
  "Une pose maîtrisée, des bords nets, un rendu sans compromis",
];

export function ProblemPromise() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal variant="left" className="lg:col-span-5">
            <SectionHeader
              eyebrow="Pourquoi protéger ou habiller votre véhicule"
              title="Votre carrosserie subit la route tous les jours."
              subtitle="Stationnements serrés, autoroutes A4 / A35, hivers alsaciens, lavages quotidiens — sans protection, la peinture ternit et perd de la valeur."
            />
          </Reveal>

          <div className="lg:col-span-7">
            <div className="grid gap-3 sm:grid-cols-2">
              {PROBLEMS.map((p, i) => (
                <Reveal key={p.t} delay={i * 60}>
                  <div className="card h-full transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.04]">
                    <div className="text-sm font-semibold text-white">{p.t}</div>
                    <p className="mt-1.5 text-sm text-muted">{p.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <Reveal variant="up" delay={150}>
          <div className="mt-14 rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/[0.08] to-transparent p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-white sm:text-xl">
              Notre promesse&nbsp;: une protection ou une transformation à la hauteur de votre véhicule.
            </h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {PROMISES.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-white/85">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
