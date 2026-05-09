import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "./SectionHeader";
import { ArrowIcon } from "./icons";
import { buildWhatsAppUrl } from "@/config/site";
import { Reveal } from "./Reveal";

type Item = {
  type: string;
  project: string;
  place?: string;
  image: string;
  alt: string;
  href?: string;
};

const ITEMS: Item[] = [
  {
    type: "PPF face avant",
    project: "Porsche 911 GT3",
    place: "Strasbourg",
    image: "/ppf-face-avant.webp",
    alt: "Pose de film PPF sur la face avant d’une Porsche 911 GT3 à Strasbourg",
    href: "/ppf-strasbourg",
  },
  {
    type: "Covering complet mat",
    project: "Tesla Model 3",
    place: "Schiltigheim",
    image: "/covering-tesla.webp",
    alt: "Covering complet noir mat sur Tesla Model 3 — atelier Schiltigheim",
    href: "/covering-strasbourg",
  },
  {
    type: "Chrome delete",
    project: "BMW M3 Competition",
    place: "Illkirch",
    image: "/chrome-delete.webp",
    alt: "Chrome delete sur BMW M3 Competition — finition noir satiné",
    href: "/covering-strasbourg",
  },
  {
    type: "Marquage utilitaire",
    project: "Renault Trafic — artisan",
    place: "Lingolsheim",
    image: "/marquage-utilitaire.webp",
    alt: "Marquage publicitaire véhicule sur Renault Trafic d’artisan à Lingolsheim",
    href: "/marquage-publicitaire-vehicule",
  },
  {
    type: "Covering toit noir",
    project: "Mercedes Classe A",
    place: "Ostwald",
    image: "/covering-toit-noir.webp",
    alt: "Covering toit noir brillant sur Mercedes Classe A à Ostwald",
    href: "/covering-strasbourg",
  },
  {
    type: "PPF intégral",
    project: "Audi RS6",
    place: "Bischheim",
    image: "/ppf-rs6.webp",
    alt: "PPF intégral (full body) sur Audi RS6 nardo grey — atelier Bischheim",
    href: "/ppf-strasbourg",
  },
];

export function Gallery({ compact = false }: { compact?: boolean }) {
  const items = compact ? ITEMS.slice(0, 3) : ITEMS;
  return (
    <section id="realisations" className="py-20 sm:py-24">
      <div className="container-edge">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeader
              eyebrow="Réalisations"
              title="Quelques projets PPF, covering & marquage."
              subtitle="Particuliers, sportives, premium, utilitaires d’artisans — chaque projet est traité avec la même exigence."
            />
            <Link href="/realisations" className="btn-secondary group/cta self-start text-sm">
              Voir toutes les réalisations
              <ArrowIcon className="h-4 w-4 transition group-hover/cta:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={`${item.type}-${i}`} delay={i * 70}>
              <article
                className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-900 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-card"
              >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink-900">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <span className="absolute left-3 top-3 chip">{item.type}</span>
              </div>
              <div className="flex items-center justify-between gap-3 px-4 py-4">
                <div>
                  <h3 className="text-sm font-semibold text-white">{item.project}</h3>
                  {item.place && <p className="text-xs text-muted">{item.place}</p>}
                </div>
                <Link
                  href={item.href || buildWhatsAppUrl()}
                  className="text-xs font-semibold text-accent hover:underline"
                  data-conversion-action={item.href ? "internal_nav" : "whatsapp_click"}
                  data-cta-location="gallery_card"
                >
                  Voir →
                </Link>
              </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
