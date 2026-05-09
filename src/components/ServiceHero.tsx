import Link from "next/link";
import { siteConfig } from "@/config/site";
import { WhatsAppButton } from "./WhatsAppButton";
import { CallButton } from "./CallButton";
import { CheckIcon, PinIcon } from "./icons";
import type { WhatsAppService } from "@/config/site";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  bullets: string[];
  service: WhatsAppService;
  ctaLocation: string;
  primaryLabel?: string;
};

export function ServiceHero({ eyebrow, title, subtitle, bullets, service, ctaLocation, primaryLabel }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-ink-950 pt-12 sm:pt-16">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.25] mask-fade-b" />
      <div className="container-edge relative">
        <nav aria-label="Fil d’Ariane" className="text-xs text-white/50">
          <Link href="/" className="hover:text-white">Accueil</Link>
          <span className="mx-2 text-white/30">/</span>
          <span className="text-white/70">{eyebrow}</span>
        </nav>

        <div className="mt-6 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="chip">
              <PinIcon className="h-3.5 w-3.5 text-accent" />
              {siteConfig.city} · {siteConfig.region}
            </span>
            <h1 className="heading-display mt-4 text-4xl leading-[1.05] text-white sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/75">{subtitle}</p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <WhatsAppButton service={service} ctaLocation={ctaLocation} label={primaryLabel || "Demander un devis sur WhatsApp"} />
              <CallButton ctaLocation={ctaLocation} label="Appeler" showNumber />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="card">
              <h2 className="text-sm font-semibold text-white">En bref</h2>
              <ul className="mt-4 space-y-2.5">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-white/85">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="container-edge mt-14 px-0">
          <div className="divider-soft" />
        </div>
      </div>
    </section>
  );
}
