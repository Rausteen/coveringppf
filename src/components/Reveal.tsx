"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** "up" (default), "left", "right", "scale", "none" */
  variant?: "up" | "left" | "right" | "scale" | "none";
  /** "0px 0px -10% 0px" by default — déclenche un peu avant l'arrivée pleine */
  rootMargin?: string;
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  variant = "up",
  rootMargin = "0px 0px -10% 0px",
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            obs.disconnect();
            break;
          }
        }
      },
      { rootMargin, threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin]);

  const fromMap: Record<NonNullable<Props["variant"]>, string> = {
    up: "translate-y-6 opacity-0",
    left: "-translate-x-6 opacity-0",
    right: "translate-x-6 opacity-0",
    scale: "scale-[0.97] opacity-0",
    none: "opacity-0",
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
      className={`will-change-transform transition-all duration-700 ease-out ${
        shown ? "translate-x-0 translate-y-0 scale-100 opacity-100" : fromMap[variant]
      } ${className}`}
    >
      {children}
    </div>
  );
}
