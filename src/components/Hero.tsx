import Image from "next/image";
import { siteConfig } from "@/config/site";
import { WhatsAppButton } from "./WhatsAppButton";
import { CallButton } from "./CallButton";
import { CheckIcon, PinIcon } from "./icons";

const RASSURANCES = [
  "Devis rapide",
  "Réponse par WhatsApp",
  `${siteConfig.city} & alentours`,
  "Finitions premium",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 pt-10 sm:pt-14">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.35] mask-fade-b" />
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="container-edge relative">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="chip">
              <PinIcon className="h-3.5 w-3.5 text-accent" />
              PPF & covering automobile à {siteConfig.city}
            </span>

            <h1 className="heading-display mt-5 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              <span className="text-white">PPF & covering </span>
              <span className="bg-gradient-to-r from-accent-soft via-accent to-accent-deep bg-clip-text text-transparent">
                premium
              </span>
              <span className="text-white"> à {siteConfig.city}.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
              Protégez, personnalisez ou transformez votre véhicule avec une pose professionnelle de
              <span className="text-white"> film PPF</span>,
              <span className="text-white"> covering</span>
              {" "}et marquage publicitaire véhicule. Pose soignée, finition premium, conseil personnalisé.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <WhatsAppButton ctaLocation="hero" label="Demander un devis sur WhatsApp" />
              <CallButton ctaLocation="hero" label="Appeler maintenant" showNumber />
            </div>

            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/70">
              {RASSURANCES.map((r) => (
                <li key={r} className="inline-flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-accent" />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-accent/40 via-electric/20 to-transparent opacity-40 blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-ink-900 shadow-card">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/hero.webp"
                    alt={`Pose de PPF sur véhicule premium en atelier à ${siteConfig.city}`}
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="object-cover"
                  />
                  {/* Subtle dark overlay for chip readability */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />

                  {/* Floating chips */}
                  <div className="absolute left-4 top-4 chip">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" /> Film PPF
                  </div>
                  <div className="absolute right-4 top-4 chip">
                    Covering total · mat · satin
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/10 bg-ink-900/80 px-3 py-2 backdrop-blur">
                    <div className="text-xs text-white/70">Atelier {siteConfig.city}</div>
                    <div className="text-xs font-semibold text-accent">Finition premium</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-edge mt-16">
        <div className="divider-soft" />
      </div>
    </section>
  );
}
