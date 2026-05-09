import { SectionHeader } from "./SectionHeader";
import { StarIcon } from "./icons";
import { Reveal } from "./Reveal";

// =============================================================================
// AVIS CLIENTS — placeholders.
// Remplacez le tableau `reviews` par vos vrais avis Google quand ils sont prêts.
// Tant que `reviews` est vide, un placeholder est affiché à la place.
// =============================================================================
type Review = {
  name: string;
  service: string;
  text: string;
  vehicle?: string;
  city?: string;
  rating?: number; // 1-5
};

const reviews: Review[] = [];

export function Reviews() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge">
        <Reveal>
          <SectionHeader
            eyebrow="Avis clients"
            title="Ce que disent nos clients."
            subtitle="Ajoutez ici vos avis Google pour renforcer la confiance dès la première visite."
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
                <p className="text-sm text-muted">
                  Ajoutez ici vos avis Google clients. Cet emplacement est prêt à recevoir un avis réel
                  (texte, prénom, véhicule, prestation, ville).
                </p>
                <div className="mt-auto text-xs text-white/40">— Avis client à compléter</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {reviews.map((r, i) => (
              <article key={i} className="card flex flex-col gap-3">
                <div className="flex items-center gap-1 text-accent">
                  {Array.from({ length: r.rating ?? 5 }).map((_, k) => (
                    <StarIcon key={k} className="h-4 w-4" />
                  ))}
                </div>
                <p className="text-sm text-white/85">“{r.text}”</p>
                <div className="mt-auto text-xs text-white/55">
                  — {r.name}
                  {r.vehicle ? `, ${r.vehicle}` : ""}
                  {r.city ? ` · ${r.city}` : ""}
                  {` · ${r.service}`}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
