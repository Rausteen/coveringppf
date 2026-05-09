import Link from "next/link";
import { SectionHeader } from "./SectionHeader";
import { ArrowIcon } from "./icons";
import { buildWhatsAppUrl } from "@/config/site";

type Item = {
  type: string;
  project: string;
  place?: string;
  // Couleurs du dégradé placeholder — remplacer par <Image src=... /> quand les visuels seront prêts.
  hue: string;
  href?: string;
};

const ITEMS: Item[] = [
  { type: "PPF face avant", project: "Porsche 911 GT3", place: "Strasbourg", hue: "from-emerald-500/30 to-slate-900", href: "/ppf-strasbourg" },
  { type: "Covering complet mat", project: "Tesla Model 3", place: "Schiltigheim", hue: "from-zinc-500/25 to-zinc-950", href: "/covering-strasbourg" },
  { type: "Chrome delete", project: "BMW M3 Competition", place: "Illkirch", hue: "from-slate-500/25 to-black", href: "/covering-strasbourg" },
  { type: "Marquage utilitaire", project: "Renault Trafic — artisan", place: "Lingolsheim", hue: "from-blue-500/25 to-slate-900", href: "/marquage-publicitaire-vehicule" },
  { type: "Covering toit noir", project: "Mercedes Classe A", place: "Ostwald", hue: "from-zinc-400/20 to-black", href: "/covering-strasbourg" },
  { type: "PPF intégral", project: "Audi RS6", place: "Bischheim", hue: "from-cyan-400/25 to-slate-900", href: "/ppf-strasbourg" },
];

export function Gallery({ compact = false }: { compact?: boolean }) {
  const items = compact ? ITEMS.slice(0, 3) : ITEMS;
  return (
    <section id="realisations" className="py-20 sm:py-24">
      <div className="container-edge">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Réalisations"
            title="Quelques projets PPF, covering & marquage."
            subtitle="Particuliers, sportives, premium, utilitaires d’artisans — chaque projet est traité avec la même exigence."
          />
          <Link href="/realisations" className="btn-secondary self-start text-sm">
            Voir toutes les réalisations
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <article
              key={`${item.type}-${i}`}
              className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-900"
            >
              <div className={`relative aspect-[4/3] w-full bg-gradient-to-br ${item.hue}`}>
                {/* Image placeholder — remplacer par <Image fill ... /> */}
                <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_30%_30%,rgba(255,255,255,0.10),transparent_60%)]" />
                <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full opacity-90" aria-hidden="true">
                  <path
                    d="M40 200 Q100 130 200 125 Q300 130 360 200 L370 235 Q370 250 350 250 L50 250 Q30 250 30 235 Z"
                    fill="rgba(0,0,0,0.55)"
                    stroke="rgba(255,255,255,0.15)"
                  />
                  <ellipse cx="100" cy="252" rx="22" ry="8" fill="#000" opacity="0.6" />
                  <ellipse cx="300" cy="252" rx="22" ry="8" fill="#000" opacity="0.6" />
                </svg>
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
          ))}
        </div>
      </div>
    </section>
  );
}
