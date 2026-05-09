import Link from "next/link";
import { telHref, siteConfig } from "@/config/site";
import { PhoneIcon } from "./icons";

type Props = {
  label?: string;
  className?: string;
  variant?: "primary" | "secondary";
  ctaLocation: string;
  fullWidth?: boolean;
  showNumber?: boolean;
};

export function CallButton({
  label = "Appeler",
  className = "",
  variant = "secondary",
  ctaLocation,
  fullWidth = false,
  showNumber = false,
}: Props) {
  const base = variant === "primary" ? "btn-primary" : "btn-secondary";
  const width = fullWidth ? "w-full" : "";
  return (
    <Link
      href={telHref()}
      className={`${base} ${width} ${className}`}
      aria-label={`Appeler ${siteConfig.businessName}`}
      data-conversion-action="call_click"
      data-cta-location={ctaLocation}
    >
      <PhoneIcon className="h-4 w-4" />
      <span>
        {label}
        {showNumber ? ` · ${siteConfig.phoneNumber}` : ""}
      </span>
    </Link>
  );
}
