import Image from "next/image";
import { siteConfig } from "@/config/site";
import { WhatsAppButton } from "./WhatsAppButton";
import { PinIcon } from "./icons";

export function AtelierShowcase() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900">
          <div className="relative aspect-[21/9] w-full sm:aspect-[16/7]">
            <Image
              src="/atelier-wide.webp"
              alt={`Atelier de pose PPF et covering à ${siteConfig.city}`}
              fill
              loading="lazy"
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink-950/85 via-ink-950/60 to-transparent" />
          </div>

          <div className="absolute inset-0 flex items-end sm:items-center">
            <div className="w-full p-6 sm:max-w-xl sm:p-10 lg:p-14">
              <span className="chip">
                <PinIcon className="h-3.5 w-3.5 text-accent" />
                Notre atelier · {siteConfig.city}
              </span>
              <h2 className="heading-display mt-4 text-2xl text-white sm:text-3xl lg:text-4xl">
                Un atelier pensé pour la précision.
              </h2>
              <p className="mt-3 text-sm text-white/75 sm:text-base">
                Espace propre, lumière contrôlée, outillage adapté. C’est ce que demande une
                pose maîtrisée de PPF ou de covering — et c’est exactement ce qu’on met en
                place pour chaque véhicule qui passe chez nous.
              </p>
              <div className="mt-6">
                <WhatsAppButton ctaLocation="atelier_showcase" label="Réserver mon créneau" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
