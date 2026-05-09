import Link from "next/link";
import { buildWhatsAppUrl, type WhatsAppService } from "@/config/site";
import { WhatsAppIcon } from "./icons";

type Variant = "primary" | "secondary";

type Props = {
  service?: WhatsAppService;
  note?: string;
  label?: string;
  className?: string;
  variant?: Variant;
  ctaLocation: string; // pour tracking
  fullWidth?: boolean;
};

export function WhatsAppButton({
  service = "Devis",
  note,
  label = "Devis sur WhatsApp",
  className = "",
  variant = "primary",
  ctaLocation,
  fullWidth = false,
}: Props) {
  const href = buildWhatsAppUrl(service, note);
  const base = variant === "primary" ? "btn-primary" : "btn-secondary";
  const width = fullWidth ? "w-full" : "";
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener"
      className={`${base} ${width} ${className}`}
      aria-label={label}
      data-conversion-action="whatsapp_click"
      data-cta-location={ctaLocation}
      data-service={service}
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span>{label}</span>
    </Link>
  );
}
