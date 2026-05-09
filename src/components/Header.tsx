"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { WhatsAppButton } from "./WhatsAppButton";

const NAV = [
  { href: "/ppf-strasbourg", label: "PPF" },
  { href: "/covering-strasbourg", label: "Covering" },
  { href: "/marquage-publicitaire-vehicule", label: "Marquage" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-ink-950/80 backdrop-blur-md">
      <div className="container-edge flex h-16 items-center justify-between gap-4">
        <Link href="/" className="group flex items-center gap-2.5" aria-label={`${siteConfig.businessName} — accueil`}>
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-accent/40 bg-accent/10 text-accent">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 2 4 5v7c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5l-8-3Z" />
            </svg>
          </span>
          <span className="font-display text-[15px] font-semibold tracking-tight text-white">
            {siteConfig.businessName}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm text-white/75 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <WhatsAppButton ctaLocation="header" label="Devis WhatsApp" />
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-white/5 bg-ink-950 lg:hidden">
          <nav className="container-edge flex flex-col gap-1 py-4" aria-label="Navigation mobile">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-white/85 hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2">
              <WhatsAppButton ctaLocation="header_mobile" fullWidth label="Demander un devis sur WhatsApp" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
