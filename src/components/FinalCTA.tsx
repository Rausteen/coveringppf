import { siteConfig } from "@/config/site";
import { WhatsAppButton } from "./WhatsAppButton";
import { CallButton } from "./CallButton";
import { PinIcon } from "./icons";
import { ContactForm } from "./ContactForm";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/5 bg-ink-900 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(16,185,129,0.10),transparent_60%)]" />
      <div className="container-edge relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="chip">
            <PinIcon className="h-3.5 w-3.5 text-accent" />
            {siteConfig.city} · {siteConfig.region}
          </span>
          <h2 className="heading-display mt-5 text-3xl text-white sm:text-4xl lg:text-5xl">
            Un projet PPF, covering ou marquage à {siteConfig.city}&nbsp;?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted">
            Envoyez-nous votre véhicule, votre idée et quelques photos. Nous revenons vers vous rapidement avec une solution adaptée — protection, esthétique, visibilité ou personnalisation.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <WhatsAppButton ctaLocation="final_cta" label="Obtenir mon devis sur WhatsApp" />
            <CallButton ctaLocation="final_cta" label="Appeler" showNumber />
          </div>
        </Reveal>

        <Reveal delay={150} className="mx-auto mt-14 max-w-3xl">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
