import Link from "next/link";
import { ReactNode } from "react";
import { ArrowIcon, CheckIcon } from "./icons";
import { WhatsAppButton } from "./WhatsAppButton";
import type { WhatsAppService } from "@/config/site";

type Props = {
  badge?: string;
  title: string;
  intro: string;
  bullets: string[];
  cta: { label: string; service: WhatsAppService; ctaLocation: string };
  href?: string;
  icon: ReactNode;
  highlighted?: boolean;
};

export function ServiceCard({ badge, title, intro, bullets, cta, href, icon, highlighted }: Props) {
  return (
    <article
      className={`group relative flex h-full flex-col rounded-2xl border p-6 sm:p-7 ${
        highlighted
          ? "border-accent/30 bg-gradient-to-b from-accent/[0.06] to-white/[0.02] shadow-glow"
          : "border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01]"
      }`}
    >
      {badge && (
        <span className="absolute right-5 top-5 rounded-full border border-accent/40 bg-accent/15 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-accent">
          {badge}
        </span>
      )}
      <div className={`grid h-11 w-11 place-items-center rounded-xl ${highlighted ? "bg-accent/15 text-accent" : "bg-white/5 text-white/80"}`}>
        {icon}
      </div>
      <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-muted">{intro}</p>

      <ul className="mt-5 space-y-2.5">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5 text-sm text-white/80">
            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center gap-3 pt-2">
        <WhatsAppButton
          service={cta.service}
          ctaLocation={cta.ctaLocation}
          label={cta.label}
          variant={highlighted ? "primary" : "secondary"}
        />
        {href && (
          <Link href={href} className="btn-ghost group/link text-sm">
            En savoir plus
            <ArrowIcon className="h-4 w-4 transition group-hover/link:translate-x-0.5" />
          </Link>
        )}
      </div>
    </article>
  );
}
