import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CallButton } from "@/components/CallButton";
import { SectionHeader } from "@/components/SectionHeader";
import { BreadcrumbJsonLd } from "@/components/SEOJsonLd";
import { PinIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact / Devis — PPF, covering & marquage à Strasbourg",
  description:
    "Demandez un devis rapide pour une pose de PPF, un covering, un marquage publicitaire ou une vitrophanie à Strasbourg. WhatsApp et téléphone privilégiés.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-white/5 bg-ink-950 pt-12 sm:pt-16">
        <div className="container-edge">
          <nav aria-label="Fil d’Ariane" className="text-xs text-white/50">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2 text-white/30">/</span>
            <span className="text-white/70">Contact</span>
          </nav>
          <div className="mt-6 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow="Contact / Devis"
                title="Décrivez votre projet — on revient vers vous rapidement."
                subtitle="WhatsApp est le moyen le plus rapide pour obtenir un devis adapté. Vous pouvez aussi nous appeler ou utiliser le formulaire."
              />
              <div className="mt-7 flex flex-wrap gap-3">
                <WhatsAppButton ctaLocation="contact_page" label="Demander un devis sur WhatsApp" />
                <CallButton ctaLocation="contact_page" label="Appeler" showNumber />
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <InfoCard label="Téléphone" value={siteConfig.phoneNumber} href={`tel:${siteConfig.phoneNumberE164}`} />
                <InfoCard label="WhatsApp" value="Devis rapide" href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" />
                {siteConfig.email && (
                  <InfoCard label="Email" value={siteConfig.email} href={`mailto:${siteConfig.email}`} />
                )}
                <InfoCard
                  label="Adresse"
                  value={`${siteConfig.address.street}, ${siteConfig.address.postalCode} ${siteConfig.address.city}`}
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  icon
                />
                <InfoCard label="Horaires" value={siteConfig.openingHours} />
                <InfoCard label="Zone d’intervention" value={siteConfig.serviceAreas.slice(0, 6).join(" · ") + " · …"} />
              </div>
            </div>
            <div className="lg:col-span-5">
              <ContactForm />
            </div>
          </div>
          <div className="mt-16 divider-soft" />
        </div>
      </section>

      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: siteConfig.domain + "/" },
          { name: "Contact", url: siteConfig.domain + "/contact" },
        ]}
      />
    </>
  );
}

function InfoCard({
  label,
  value,
  href,
  target,
  icon,
}: {
  label: string;
  value: string;
  href?: string;
  target?: string;
  icon?: boolean;
}) {
  const inner = (
    <>
      <div className="text-xs uppercase tracking-wider text-white/50">{label}</div>
      <div className="mt-1 inline-flex items-center gap-2 text-sm text-white">
        {icon && <PinIcon className="h-4 w-4 text-accent" />}
        {value}
      </div>
    </>
  );
  return href ? (
    <Link
      href={href}
      target={target}
      rel={target ? "noopener" : undefined}
      className="card transition hover:border-accent/30"
    >
      {inner}
    </Link>
  ) : (
    <div className="card">{inner}</div>
  );
}
