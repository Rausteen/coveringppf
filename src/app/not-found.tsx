import Link from "next/link";
import type { Metadata } from "next";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CallButton } from "@/components/CallButton";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-ink-950">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div className="container-edge relative flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <span className="chip">Erreur 404</span>
        <h1 className="heading-display mt-5 text-4xl text-white sm:text-5xl">
          Cette page n’existe pas (ou plus).
        </h1>
        <p className="mt-4 max-w-xl text-muted">
          Le lien est peut-être ancien. Le plus rapide pour avoir une réponse&nbsp;: écrivez-nous
          directement sur WhatsApp avec votre véhicule et votre projet.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <WhatsAppButton ctaLocation="not_found" label="Demander un devis sur WhatsApp" />
          <CallButton ctaLocation="not_found" label="Appeler" showNumber />
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-white/60">
          <Link href="/" className="hover:text-white">Accueil</Link>
          <Link href="/ppf-strasbourg" className="hover:text-white">PPF Strasbourg</Link>
          <Link href="/covering-strasbourg" className="hover:text-white">Covering Strasbourg</Link>
          <Link href="/marquage-publicitaire-vehicule" className="hover:text-white">Marquage</Link>
          <Link href="/realisations" className="hover:text-white">Réalisations</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </div>
      </div>
    </section>
  );
}
