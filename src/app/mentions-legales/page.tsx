import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site " + siteConfig.businessName,
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-edge max-w-3xl">
        <h1 className="heading-display text-3xl text-white sm:text-4xl">Mentions légales</h1>
        <div className="prose prose-invert mt-6 text-sm leading-relaxed text-white/75">
          <p>
            Site édité par <strong>{siteConfig.legalName}</strong>. À compléter avec : forme juridique,
            capital, RCS, SIRET, n° TVA intracommunautaire, directeur de la publication, hébergeur,
            coordonnées de contact, propriété intellectuelle, traitement des données personnelles.
          </p>
          <h2 className="mt-8 text-lg font-semibold text-white">Coordonnées</h2>
          <p>
            {siteConfig.address.street}, {siteConfig.address.postalCode} {siteConfig.address.city}
            <br />
            Téléphone&nbsp;: {siteConfig.phoneNumber}
            {siteConfig.email && (
              <>
                <br />
                Email&nbsp;: {siteConfig.email}
              </>
            )}
          </p>
          <p className="mt-6 text-xs text-white/40">
            Modèle à adapter — ce contenu est fourni à titre de placeholder et doit être complété par
            les informations légales réelles de l’entreprise avant mise en ligne.
          </p>
        </div>
      </div>
    </section>
  );
}
