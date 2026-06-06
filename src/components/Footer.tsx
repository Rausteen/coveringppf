import Link from "next/link";
import { siteConfig, telHref, buildWhatsAppUrl } from "@/config/site";

const SERVICES = [
  { href: "/ppf-strasbourg", label: "PPF Strasbourg" },
  { href: "/covering-strasbourg", label: "Covering Strasbourg" },
  { href: "/marquage-publicitaire-vehicule", label: "Marquage publicitaire véhicule" },
  { href: "/prix-ppf-strasbourg", label: "Prix PPF Strasbourg" },
  { href: "/prix-covering-strasbourg", label: "Prix covering Strasbourg" },
  { href: "/ppf-vs-covering", label: "PPF ou covering : guide" },
];

const PAGES = [
  { href: "/realisations", label: "Réalisations" },
  { href: "/contact", label: "Contact / Devis" },
  { href: "/mentions-legales", label: "Mentions légales" },
];

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5 bg-ink-950">
      <div className="container-edge grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg border border-accent/40 bg-accent/10 text-accent">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2 4 5v7c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5l-8-3Z" />
              </svg>
            </span>
            <span className="font-display text-[15px] font-semibold tracking-tight text-white">
              {siteConfig.businessName}
            </span>
          </div>
          <p className="mt-4 text-sm text-muted">
            Spécialiste {siteConfig.mainServices.slice(0, 2).join(" & ").toLowerCase()} et marquage publicitaire véhicule à {siteConfig.city} et alentours.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link href={buildWhatsAppUrl()} target="_blank" rel="noopener" className="chip hover:border-accent/40 hover:text-white" data-conversion-action="whatsapp_click" data-cta-location="footer">
              WhatsApp · Devis rapide
            </Link>
            <Link href={telHref()} className="chip hover:border-accent/40 hover:text-white" data-conversion-action="call_click" data-cta-location="footer">
              {siteConfig.phoneNumber}
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {SERVICES.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="hover:text-white">{s.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Navigation</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {PAGES.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="hover:text-white">{p.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Zone d’intervention</h3>
          <p className="mt-4 text-sm text-muted">
            {siteConfig.serviceAreas.slice(0, 9).join(" · ")} · {siteConfig.region}
          </p>
          <p className="mt-4 text-sm text-muted">{siteConfig.openingHours}</p>
          {siteConfig.email && (
            <p className="mt-2 text-sm text-muted">
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">{siteConfig.email}</a>
            </p>
          )}
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-edge flex flex-col items-start justify-between gap-3 py-6 text-xs text-white/45 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {siteConfig.legalName}. Tous droits réservés.</p>
          <p className="order-3 sm:order-2">PPF · Covering · Marquage publicitaire · {siteConfig.city} · {siteConfig.region}</p>
          <Link
            href="https://naviel.fr"
            target="_blank"
            rel="noopener"
            className="order-2 inline-flex items-center gap-1.5 text-white/55 transition-colors hover:text-white sm:order-3"
          >
            <span
              aria-hidden="true"
              className="inline-block h-[7px] w-[7px] rotate-45 bg-[#c8f24e]"
              style={{ borderRadius: "1px" }}
            />
            <span className="font-medium">Réalisé par Naviel</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
