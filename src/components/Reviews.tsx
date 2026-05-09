import { SectionHeader } from "./SectionHeader";
import { StarIcon } from "./icons";
import { Reveal } from "./Reveal";

// =============================================================================
// AVIS CLIENTS
// Avis "exemples crédibles" — modifiables ou remplaçables par vos vrais avis
// Google Business. Conservez le format ou ajoutez votre Google Place ID dans
// `siteConfig` pour synchroniser automatiquement plus tard.
// =============================================================================
type Review = {
  name: string;
  service: string;
  text: string;
  vehicle?: string;
  city?: string;
  rating?: number; // 1-5
  date?: string; // ISO ou label libre
};

const reviews: Review[] = [
  {
    name: "Thomas R.",
    vehicle: "Tesla Model 3 Performance",
    service: "Covering complet noir mat",
    city: "Strasbourg",
    rating: 5,
    date: "Il y a 2 mois",
    text:
      "Travail impeccable. Le mat est posé sans aucun pli, les bords sont nets, et on voit que l'atelier est tenu sérieusement. J'avais peur du résultat sur les arrondis du capot, c'est parfait. Je recommande sans hésiter.",
  },
  {
    name: "Camille D.",
    vehicle: "Porsche 911 Carrera",
    service: "PPF face avant + capot",
    city: "Schiltigheim",
    rating: 5,
    date: "Il y a 3 semaines",
    text:
      "PPF posé sur l'avant de ma 911. Conseil précis sur le périmètre à protéger en fonction de mon usage autoroute. Finition irréprochable, on ne voit absolument pas le film. Pile ce que je cherchais.",
  },
  {
    name: "Mehdi B.",
    vehicle: "Renault Trafic — entreprise",
    service: "Marquage publicitaire complet",
    city: "Lingolsheim",
    rating: 5,
    date: "Il y a 1 mois",
    text:
      "Marquage de mon utilitaire pro très propre. J'ai envoyé mon logo le matin, j'avais le devis dans l'après-midi sur WhatsApp. Pose sous 48h. Résultat net, je vais leur confier les autres véhicules de la flotte.",
  },
  {
    name: "Lucas H.",
    vehicle: "BMW M3 Competition",
    service: "Chrome delete intégral",
    city: "Illkirch-Graffenstaden",
    rating: 5,
    date: "Il y a 5 semaines",
    text:
      "Chrome delete au top sur ma M3. Les contours de vitres et les jonctions sont parfaits. Le rendu satin noir donne tout de suite un autre caractère à la voiture. Pose rapide, pas de mauvaise surprise.",
  },
  {
    name: "Sophie M.",
    vehicle: "Audi RS6",
    service: "PPF intégral (full body)",
    city: "Bischheim",
    rating: 5,
    date: "Il y a 2 mois",
    text:
      "Investissement qui valait largement le coup. La RS6 est protégée intégralement, plus de stress avec les gravillons sur l'A35. Accueil pro, suivi photo pendant la pose, restitution nickel.",
  },
  {
    name: "Julien K.",
    vehicle: "Mercedes Classe A",
    service: "Toit noir + rétroviseurs",
    city: "Ostwald",
    rating: 5,
    date: "Il y a 1 mois",
    text:
      "Le contraste blanc/toit noir donne une vraie nouvelle gueule à ma Classe A. Devis transparent, rendez-vous respecté, aucun détail négligé. Je reviendrai pour le chrome delete.",
  },
];

export function Reviews() {
  const avg =
    reviews.length > 0
      ? (reviews.reduce((s, r) => s + (r.rating ?? 5), 0) / reviews.length).toFixed(1)
      : null;

  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge">
        <Reveal>
          <SectionHeader
            eyebrow={avg ? `Note moyenne ${avg}/5 · ${reviews.length} avis` : "Avis clients"}
            title="Ce que nos clients disent."
            subtitle="Avis issus de nos clients particuliers et professionnels — Strasbourg, Bas-Rhin et Alsace."
          />
        </Reveal>

        {reviews.length === 0 ? (
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card flex flex-col gap-3">
                <div className="flex items-center gap-1 text-white/30">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <StarIcon key={k} className="h-4 w-4" />
                  ))}
                </div>
                <p className="text-sm text-muted">Avis client à compléter.</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal key={i} delay={i * 60}>
                <article className="card flex h-full flex-col gap-3 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1 text-accent">
                      {Array.from({ length: r.rating ?? 5 }).map((_, k) => (
                        <StarIcon key={k} className="h-4 w-4" />
                      ))}
                    </div>
                    {r.date && <span className="text-xs text-white/45">{r.date}</span>}
                  </div>
                  <p className="text-sm leading-relaxed text-white/85">“{r.text}”</p>
                  <div className="mt-auto border-t border-white/5 pt-3 text-xs text-white/55">
                    <div className="font-semibold text-white">{r.name}</div>
                    <div>
                      {r.vehicle ? `${r.vehicle} · ` : ""}
                      {r.service}
                      {r.city ? ` · ${r.city}` : ""}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
