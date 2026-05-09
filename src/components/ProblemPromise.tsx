import type { ReactNode } from "react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import {
  CarIcon,
  CoinsIcon,
  DropletIcon,
  MegaphoneIcon,
  PaletteIcon,
  ScratchIcon,
  ShieldIcon,
  SparkIcon,
} from "./icons";

type Problem = { icon: ReactNode; t: string; d: string };

const PROBLEMS: Problem[] = [
  {
    icon: <ScratchIcon className="h-5 w-5" />,
    t: "Peinture fragile",
    d: "Tourbillons, micro-rayures, oxydation prématurée.",
  },
  {
    icon: <CarIcon className="h-5 w-5" />,
    t: "Gravillons & impacts",
    d: "Face avant, capot et bas de caisse exposés en permanence.",
  },
  {
    icon: <DropletIcon className="h-5 w-5" />,
    t: "Traces de lavage",
    d: "Brosses agressives, mauvais produits, finition ternie.",
  },
  {
    icon: <PaletteIcon className="h-5 w-5" />,
    t: "Look qui lasse",
    d: "Envie de changer la couleur sans repeindre — réversible.",
  },
  {
    icon: <MegaphoneIcon className="h-5 w-5" />,
    t: "Visibilité pro",
    d: "Véhicule utilitaire ou flotte sans identité visuelle.",
  },
  {
    icon: <CoinsIcon className="h-5 w-5" />,
    t: "Valeur de revente",
    d: "Carrosserie marquée = décote au moment de revendre.",
  },
];

const PROMISES = [
  { icon: <ShieldIcon className="h-5 w-5" />, t: "Protéger la valeur de votre véhicule sur le long terme" },
  { icon: <SparkIcon className="h-5 w-5" />, t: "Améliorer l’esthétique avec une finition propre et durable" },
  { icon: <PaletteIcon className="h-5 w-5" />, t: "Choisir le bon film selon votre véhicule et votre objectif" },
  { icon: <CarIcon className="h-5 w-5" />, t: "Pose maîtrisée : bords nets, pas de plis, rendu sans compromis" },
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
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30">
                    <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative flex items-start gap-3">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20 transition-transform duration-300 group-hover:scale-110">
                        {p.icon}
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-white">{p.t}</div>
                        <p className="mt-1 text-sm text-muted">{p.d}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <Reveal variant="up" delay={150}>
          <div className="mt-14 overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/[0.10] via-accent/[0.04] to-transparent p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent ring-1 ring-accent/30">
                <ShieldIcon className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold text-white sm:text-xl">
                Notre promesse&nbsp;: une protection ou une transformation à la hauteur de votre véhicule.
              </h3>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {PROMISES.map((p) => (
                <li key={p.t} className="flex items-start gap-3 text-sm text-white/85">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-white/[0.04] text-accent">
                    {p.icon}
                  </span>
                  {p.t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
