import Image from "next/image";
import { siteConfig } from "@/config/site";
import { WhatsAppButton } from "./WhatsAppButton";
import { CallButton } from "./CallButton";
import { CheckIcon, PinIcon } from "./icons";
import { Reveal } from "./Reveal";

const POINTS = [
  "Espace propre et lumière contrôlée",
  "Outillage professionnel adapté à chaque film",
  "Pose maîtrisée — bords nets, finition durable",
  "Suivi avant / après livraison",
];

export function AtelierShowcase() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-ink-900 shadow-card">
            <div className="grid lg:grid-cols-12">
              {/* Image */}
              <div className="relative lg:col-span-7">
                <div className="relative aspect-[16/10] w-full lg:aspect-auto lg:h-full lg:min-h-[520px]">
                  <Image
                    src="/atelier-wide.webp"
                    alt={`Atelier de pose PPF et covering à ${siteConfig.city}`}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-ink-900/50" />
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col justify-center gap-5 p-6 sm:p-10 lg:col-span-5 lg:p-12">
                <span className="chip self-start">
                  <PinIcon className="h-3.5 w-3.5 text-accent" />
                  Notre atelier · {siteConfig.city}
                </span>
                <h2 className="heading-display text-2xl text-white sm:text-3xl lg:text-4xl">
                  Un atelier pensé pour la précision.
                </h2>
                <p className="text-sm text-white/75 sm:text-base">
                  Espace propre, lumière contrôlée, outillage adapté. C’est ce que demande une
                  pose maîtrisée de PPF ou de covering — et c’est exactement ce qu’on met en
                  place pour chaque véhicule qui passe chez nous.
                </p>
                <ul className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {POINTS.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-white/85">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-2 flex flex-wrap gap-3">
                  <WhatsAppButton ctaLocation="atelier_showcase" label="Réserver mon créneau" />
                  <CallButton ctaLocation="atelier_showcase" label="Appeler" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
