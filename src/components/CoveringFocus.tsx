import { WhatsAppButton } from "./WhatsAppButton";

const FINISHES = [
  { t: "Mat", d: "Look agressif, profond, très tendance." },
  { t: "Satiné", d: "Entre mat et brillant, élégant et discret." },
  { t: "Brillant", d: "Couleur saturée, effet peinture neuve." },
  { t: "Carbone", d: "Texture sportive, idéal pièces ciblées." },
  { t: "Chrome / métallisé", d: "Finitions premium, rendu profond." },
  { t: "Couleur sur-mesure", d: "Avery, 3M, Hexis, KPMF — large palette." },
];

const PARTIALS = [
  "Toit noir",
  "Capot mat ou carbone",
  "Rétroviseurs",
  "Bandes sportives",
  "Chrome delete (suppression chromes)",
  "Calandre, jantes, badges",
];

export function CoveringFocus() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="chip">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Focus covering
          </span>
          <h2 className="heading-display mt-4 text-3xl text-white sm:text-4xl">
            Changez le style de votre véhicule sans peinture.
          </h2>
          <p className="mt-5 text-muted">
            Le <strong className="text-white">covering</strong> est un film vinyle qui recouvre la carrosserie. Il vous permet de transformer la couleur, la finition ou un détail précis du véhicule.
            <span className="text-white"> Réversible</span>, il préserve la peinture d’origine.
          </p>
          <p className="mt-3 text-muted">
            Total covering ou covering partiel — la qualité de pose fait toute la différence : bords nets, contournements maîtrisés, finition sans plis.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <WhatsAppButton service="Covering" ctaLocation="covering_focus" label="Devis covering sur WhatsApp" />
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="card">
            <h3 className="text-base font-semibold text-white">Finitions disponibles</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {FINISHES.map((f) => (
                <div key={f.t} className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
                  <div className="text-sm font-semibold text-white">{f.t}</div>
                  <div className="mt-1 text-xs text-muted">{f.d}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div className="card">
              <h3 className="text-base font-semibold text-white">Covering total</h3>
              <p className="mt-2 text-sm text-muted">
                Changement de couleur intégral. Personnalisation forte, retour à l’origine possible. Idéal pour transformer un véhicule sans toucher à la peinture.
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold text-white">Covering partiel</h3>
              <ul className="mt-2 space-y-1.5 text-sm text-white/80">
                {PARTIALS.map((p) => (
                  <li key={p}>· {p}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
