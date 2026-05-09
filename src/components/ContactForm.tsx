"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { buildWhatsAppUrl, type WhatsAppService } from "@/config/site";
import { WhatsAppIcon } from "./icons";

const SERVICES: WhatsAppService[] = ["PPF", "Covering", "Marquage", "Vitrophanie"];

export function ContactForm() {
  const [name, setName] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [service, setService] = useState<WhatsAppService>("PPF");
  const [message, setMessage] = useState("");

  const note = useMemo(() => {
    const lines = [];
    if (name) lines.push(`Nom : ${name}`);
    if (vehicle) lines.push(`Véhicule : ${vehicle}`);
    lines.push(`Prestation : ${service}`);
    if (message) lines.push(`Message : ${message}`);
    return lines.join("\n");
  }, [name, vehicle, service, message]);

  const href = buildWhatsAppUrl(service, note);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (typeof window !== "undefined") {
          window.open(href, "_blank", "noopener");
        }
      }}
      className="rounded-2xl border border-white/[0.08] bg-ink-950/60 p-5 sm:p-7"
      data-conversion-action="contact_form_submit"
      data-cta-location="contact_form"
    >
      <p className="text-sm font-semibold text-white">Demande de devis rapide</p>
      <p className="mt-1 text-xs text-muted">
        WhatsApp reste le moyen le plus rapide&nbsp;: à l’envoi, votre message s’ouvre directement avec nos équipes.
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <Field label="Votre prénom / nom">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            autoComplete="name"
            placeholder="Ex. Antoine"
            className="input"
          />
        </Field>
        <Field label="Votre véhicule">
          <input
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
            type="text"
            placeholder="Ex. Tesla Model 3 Performance 2023"
            className="input"
          />
        </Field>
        <Field label="Prestation souhaitée">
          <select
            value={service}
            onChange={(e) => setService(e.target.value as WhatsAppService)}
            className="input"
          >
            {SERVICES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </Field>
        <Field label="Message (optionnel)" className="sm:col-span-2">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="Zones à protéger / couvrir, finitions souhaitées, délai…"
            className="input resize-y"
          />
        </Field>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">
          En cliquant, vous ouvrez WhatsApp avec votre demande pré-remplie.
        </p>
        <Link
          href={href}
          target="_blank"
          rel="noopener"
          className="btn-primary"
          data-conversion-action="whatsapp_click"
          data-cta-location="contact_form_submit"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Envoyer ma demande
        </Link>
      </div>

      <style jsx>{`
        :global(.input) {
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.75rem;
          padding: 0.7rem 0.9rem;
          color: white;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.15s ease, background 0.15s ease;
        }
        :global(.input:focus) {
          border-color: rgba(16, 185, 129, 0.5);
          background: rgba(255, 255, 255, 0.05);
        }
        :global(.input::placeholder) {
          color: rgba(255, 255, 255, 0.35);
        }
      `}</style>
    </form>
  );
}

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-xs font-medium text-white/70">{label}</span>
      {children}
    </label>
  );
}
