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
              <span className="text-white"> covering</span>,
              marquage publicitaire et vitrophanie. Pose soignée, finition premium, conseil personnalisé.
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

          {/* Visual mockup */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-accent/40 via-electric/20 to-transparent opacity-40 blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-ink-800 to-ink-950 shadow-card">
                {/* Image placeholder — remplacer par <Image src=... /> */}
                <div
                  className="relative aspect-[4/5] w-full"
                  role="img"
                  aria-label="Véhicule premium avec film PPF posé en atelier"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_30%,rgba(16,185,129,0.18),transparent_60%),radial-gradient(60%_40%_at_70%_80%,rgba(59,130,246,0.18),transparent_60%)]" />
                  <div
                    className="absolute inset-0 opacity-90"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 35%), radial-gradient(120% 60% at 0% 100%, rgba(0,0,0,0.6), transparent 60%)",
                    }}
                  />
                  {/* Vehicle silhouette */}
                  <svg
                    viewBox="0 0 600 750"
                    className="absolute inset-0 h-full w-full"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0F1521" />
                        <stop offset="60%" stopColor="#0A0F18" />
                        <stop offset="100%" stopColor="#05070A" />
                      </linearGradient>
                      <linearGradient id="reflect" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
                        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                      </linearGradient>
                    </defs>
                    <rect width="600" height="750" fill="url(#bodyGrad)" />
                    {/* Sleek car shape */}
                    <g>
                      <path
                        d="M80 470 Q160 360 300 350 Q440 360 520 470 L540 540 Q540 580 500 580 L100 580 Q60 580 60 540 Z"
                        fill="#0B1019"
                        stroke="rgba(16,185,129,0.35)"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M150 470 Q230 380 300 380 Q370 380 450 470 Z"
                        fill="rgba(255,255,255,0.06)"
                      />
                      <ellipse cx="160" cy="585" rx="35" ry="14" fill="#000" opacity="0.7" />
                      <ellipse cx="440" cy="585" rx="35" ry="14" fill="#000" opacity="0.7" />
                      <path d="M120 540 L480 540" stroke="rgba(16,185,129,0.5)" strokeWidth="1.4" />
                      <path d="M70 470 Q300 420 530 470" stroke="rgba(255,255,255,0.08)" fill="none" />
                    </g>
                    <rect width="600" height="750" fill="url(#reflect)" />
                  </svg>

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
