import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site " + siteConfig.businessName,
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
};

// =============================================================================
// MENTIONS LÉGALES — MODÈLE À COMPLÉTER
// Remplacez tous les [À COMPLÉTER] par les informations réelles de l'entreprise
// avant la mise en ligne définitive (obligation légale — art. 6 III LCEN).
// =============================================================================

export default function MentionsLegalesPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-edge max-w-3xl">
        <h1 className="heading-display text-3xl text-white sm:text-4xl">Mentions légales</h1>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-white/75">
          <div>
            <h2 className="text-lg font-semibold text-white">Éditeur du site</h2>
            <p className="mt-2">
              {siteConfig.legalName} — [À COMPLÉTER : forme juridique (SARL, SAS, EI…), capital social]
              <br />
              Siège social&nbsp;: {siteConfig.address.street}, {siteConfig.address.postalCode} {siteConfig.address.city}
              <br />
              SIRET&nbsp;: [À COMPLÉTER] · RCS&nbsp;: [À COMPLÉTER] · TVA intracommunautaire&nbsp;: [À COMPLÉTER]
              <br />
              Téléphone&nbsp;: {siteConfig.phoneNumber}
              {siteConfig.email && (
                <>
                  {" "}· Email&nbsp;: {siteConfig.email}
                </>
              )}
              <br />
              Directeur de la publication&nbsp;: [À COMPLÉTER : nom du représentant légal]
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Hébergement</h2>
            <p className="mt-2">
              [À COMPLÉTER : nom de l’hébergeur, raison sociale, adresse, téléphone].
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Propriété intellectuelle</h2>
            <p className="mt-2">
              L’ensemble des contenus de ce site (textes, visuels, logos, mises en page) est protégé
              par le droit de la propriété intellectuelle. Toute reproduction ou représentation,
              totale ou partielle, sans autorisation écrite préalable, est interdite.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Données personnelles</h2>
            <p className="mt-2">
              Les informations transmises via le formulaire de contact ou WhatsApp sont utilisées
              uniquement pour traiter votre demande de devis. Elles ne sont pas cédées à des tiers.
              Conformément au RGPD, vous disposez d’un droit d’accès, de rectification et de
              suppression de vos données&nbsp;: contactez-nous à {siteConfig.email || "[email à compléter]"}.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Cookies & mesure d’audience</h2>
            <p className="mt-2">
              Ce site peut utiliser des cookies de mesure d’audience et de publicité (Google
              Analytics, Google Ads, Meta) afin d’améliorer le service et de mesurer l’efficacité
              de nos campagnes. [À COMPLÉTER : préciser la solution de consentement / bandeau cookies
              mise en place le cas échéant.]
            </p>
          </div>

          <p className="text-xs text-white/40">
            Modèle indicatif — à faire valider et compléter par l’entreprise (et, si possible, un
            conseil juridique) avant publication.
          </p>
        </div>
      </div>
    </section>
  );
}
