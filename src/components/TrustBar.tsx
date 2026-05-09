import Link from "next/link";
import { buildWhatsAppUrl, telHref, siteConfig } from "@/config/site";
import { CheckIcon, PhoneIcon, WhatsAppIcon } from "./icons";

const POINTS = [
  "Devis gratuit sous 30 min",
  "Sans engagement",
  `Atelier ${siteConfig.city}`,
];

export function TrustBar() {
  return (
    <div className="border-b border-accent/20 bg-gradient-to-r from-ink-950 via-accent/[0.08] to-ink-950">
      <div className="container-edge flex h-9 items-center justify-between gap-3 text-[12px] text-white/85">
        {/* Mobile: only the strongest claim */}
        <div className="flex items-center gap-2 sm:hidden">
          <CheckIcon className="h-3.5 w-3.5 text-accent" />
          <span className="font-medium">Devis gratuit sous 30 min</span>
        </div>

        {/* Desktop: full trust strip */}
        <ul className="hidden items-center gap-5 sm:flex">
          {POINTS.map((p) => (
            <li key={p} className="inline-flex items-center gap-1.5">
              <CheckIcon className="h-3.5 w-3.5 text-accent" />
              <span>{p}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href={telHref()}
            className="hidden items-center gap-1.5 text-white/85 hover:text-white sm:inline-flex"
            data-conversion-action="call_click"
            data-cta-location="trustbar"
          >
            <PhoneIcon className="h-3.5 w-3.5 text-accent" />
            <span className="font-semibold">{siteConfig.phoneNumber}</span>
          </Link>
          <Link
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-accent ring-1 ring-accent/30 hover:bg-accent/25"
            data-conversion-action="whatsapp_click"
            data-cta-location="trustbar"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" />
            <span className="font-semibold">WhatsApp</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
