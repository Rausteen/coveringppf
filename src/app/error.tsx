"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Hook pour reporter à un service d'erreurs (Sentry, etc.) si configuré.
    // console.error(error);
  }, [error]);

  return (
    <section className="relative overflow-hidden bg-ink-950">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div className="container-edge relative flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <span className="chip">Une erreur est survenue</span>
        <h1 className="heading-display mt-5 text-3xl text-white sm:text-4xl">
          Oups — quelque chose s’est mal passé.
        </h1>
        <p className="mt-4 max-w-xl text-muted">
          Réessayez dans un instant. Si ça persiste, contactez-nous directement —
          on vous répond rapidement.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <button type="button" onClick={() => reset()} className="btn-primary">
            Réessayer
          </button>
          <Link href="/" className="btn-secondary">
            Retour à l’accueil
          </Link>
        </div>
      </div>
    </section>
  );
}
