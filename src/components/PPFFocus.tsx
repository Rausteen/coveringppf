import { CheckIcon } from "./icons";
import { WhatsAppButton } from "./WhatsAppButton";
import { siteConfig } from "@/config/site";

const ZONES = [
  "Face avant complète",
  "Capot",
  "Pare-chocs avant",
  "Rétroviseurs",
  "Bas de caisse",
  "Montants & seuils",
  "Optiques de phares",
  "Full body (intégral)",
];

const FOR_WHOM = [
  "Véhicules neufs à protéger dès la livraison",
  "Voitures premium & sportives (Porsche, BMW M, AMG, Audi RS, Tesla)",
  "Conducteurs autoroute (A4, A35) — gravillons fréquents",
  "Véhicules à haute valeur de revente",
];

export function PPFFocus() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-ink-900 py-20 sm:py-24">
      <div className="pointer-events-none absolute -left-20 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
      <div className="container-edge relative grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="chip">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Focus PPF
          </span>
          <h2 className="heading-display mt-4 text-3xl text-white sm:text-4xl">
            Le PPF : la meilleure protection invisible pour votre carrosserie.
          </h2>
          <p className="mt-5 text-muted">
            Le <strong className="text-white">PPF</strong> (Paint Protection Film) est un film polyuréthane transparent qui se pose sur la peinture.
            Il absorbe les impacts de gravillons, les micro-rayures et les agressions du quotidien sans modifier la couleur ni l’aspect d’origine.
          </p>
          <p className="mt-3 text-muted">
            Pose partielle (face avant, capot, pare-chocs) ou intégrale (full body) — selon votre véhicule, votre budget et l’usage que vous en faites.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <WhatsAppButton service="PPF" ctaLocation="ppf_focus" label="Devis PPF sur WhatsApp" />
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="card">
              <h3 className="text-base font-semibold text-white">Pour qui ?</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-white/80">
                {FOR_WHOM.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold text-white">Zones de pose fréquentes</h3>
              <ul className="mt-4 grid grid-cols-1 gap-2.5 text-sm text-white/80 sm:grid-cols-1">
                {ZONES.map((z) => (
                  <li key={z} className="flex items-start gap-2.5">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{z}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card sm:col-span-2">
              <h3 className="text-base font-semibold text-white">Partiel ou complet&nbsp;?</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <div className="text-sm font-semibold text-accent">PPF partiel</div>
                  <p className="mt-1 text-sm text-muted">
                    Concentre la protection sur les zones les plus exposées (face avant, capot, pare-chocs, rétros). Excellent rapport protection / budget.
                  </p>
                </div>
                <div>
                  <div className="text-sm font-semibold text-accent">PPF complet (full body)</div>
                  <p className="mt-1 text-sm text-muted">
                    Protection intégrale du véhicule. Idéal pour conserver une carrosserie comme neuve et préserver la valeur de revente sur {siteConfig.city} et l’{siteConfig.region}.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
