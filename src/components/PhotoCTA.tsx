import { WhatsAppButton } from "./WhatsAppButton";
import { CallButton } from "./CallButton";
import { Reveal } from "./Reveal";

export function PhotoCTA() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/[0.10] via-ink-900 to-ink-900 p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="chip">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Pas sûr·e du service&nbsp;? Envoyez juste une photo.
              </span>
              <h2 className="heading-display mt-4 text-3xl text-white sm:text-4xl">
                Vous ne savez pas quelle prestation choisir&nbsp;? Envoyez-nous une photo.
              </h2>
              <p className="mt-4 max-w-2xl text-muted">
                Le plus simple est d’envoyer quelques photos du véhicule sur WhatsApp. On vous guide vers la meilleure solution selon votre objectif&nbsp;:
                <span className="text-white"> protection</span>,
                <span className="text-white"> esthétique</span>,
                <span className="text-white"> visibilité</span> ou
                <span className="text-white"> personnalisation</span>.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <WhatsAppButton ctaLocation="photo_cta" label="Envoyer mes photos sur WhatsApp" />
                <CallButton ctaLocation="photo_cta" label="Appeler l’atelier" />
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-ink-900/70 p-5 backdrop-blur">
                <p className="text-sm font-semibold text-white">À envoyer en message&nbsp;:</p>
                <ul className="mt-3 space-y-2 text-sm text-white/80">
                  <li>· Modèle du véhicule (marque, modèle, année)</li>
                  <li>· Prestation envisagée (PPF, covering, marquage…)</li>
                  <li>· Zone à protéger ou couvrir</li>
                  <li>· Ville / lieu d’usage du véhicule</li>
                  <li>· 2–3 photos suffisent</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
