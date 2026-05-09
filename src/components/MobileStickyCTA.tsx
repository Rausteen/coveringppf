import Link from "next/link";
import { buildWhatsAppUrl, telHref } from "@/config/site";
import { PhoneIcon, WhatsAppIcon } from "./icons";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 lg:hidden">
      <div className="pointer-events-none absolute inset-x-0 -top-6 h-6 bg-gradient-to-t from-ink-950 to-transparent" />
      <div className="border-t border-white/10 bg-ink-900/95 px-3 pb-[max(env(safe-area-inset-bottom),0.5rem)] pt-2 backdrop-blur">
        <div className="flex items-center gap-2">
          <Link
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener"
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-ink-950"
            data-conversion-action="whatsapp_click"
            data-cta-location="mobile_sticky"
            data-service="Devis"
            aria-label="Demander un devis sur WhatsApp"
          >
            <WhatsAppIcon className="h-5 w-5" />
            <span>Devis WhatsApp</span>
          </Link>
          <Link
            href={telHref()}
            className="flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-3 text-sm font-semibold text-white"
            data-conversion-action="call_click"
            data-cta-location="mobile_sticky"
            aria-label="Appeler maintenant"
          >
            <PhoneIcon className="h-4 w-4" />
            <span>Appeler</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
