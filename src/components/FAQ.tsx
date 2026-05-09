"use client";

import { useState } from "react";
import { ChevronDownIcon } from "./icons";
import { Reveal } from "./Reveal";

export type FAQItem = { q: string; a: React.ReactNode };

export function FAQ({ items, title, subtitle }: { items: FAQItem[]; title?: string; subtitle?: string }) {
  return (
    <section id="faq" className="py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal variant="left" className="lg:col-span-5">
            <span className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              FAQ
            </span>
            <h2 className="heading-display mt-4 text-3xl text-white sm:text-4xl">
              {title || "Vos questions, nos réponses."}
            </h2>
            {subtitle && <p className="mt-4 text-muted">{subtitle}</p>}
          </Reveal>
          <Reveal variant="right" delay={120} className="lg:col-span-7">
            <div className="divide-y divide-white/5 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]">
              {items.map((it, i) => (
                <FAQRow key={i} item={it} defaultOpen={i === 0} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FAQRow({ item, defaultOpen = false }: { item: FAQItem; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-white sm:text-base">{item.q}</span>
        <ChevronDownIcon className={`h-5 w-5 shrink-0 text-white/60 transition ${open ? "rotate-180 text-accent" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm leading-relaxed text-muted sm:text-[15px]">
          {item.a}
        </div>
      )}
    </div>
  );
}
