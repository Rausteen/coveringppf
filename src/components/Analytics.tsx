"use client";

import Script from "next/script";
import { useEffect } from "react";
import { siteConfig } from "@/config/site";

// =============================================================================
// ANALYTICS / CONVERSION TRACKING
// - N’injecte un script que si l’ID correspondant est renseigné dans
//   siteConfig.analytics (ou via NEXT_PUBLIC_* — voir .env.example).
// - Pousse automatiquement un event `cta_click` dans le dataLayer à chaque clic
//   sur un élément portant data-conversion-action (WhatsApp, appel, formulaire…).
//   → Dans GTM, créez un déclencheur "Custom Event" = `cta_click` et mappez vers
//     vos conversions Google Ads / Meta. Rien d’autre à coder.
// =============================================================================

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function Analytics() {
  const { gtmId, ga4Id, googleAdsId, metaPixelId } = siteConfig.analytics;

  // Délégation de clic : capture tous les CTA et pousse vers le dataLayer.
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>(
        "[data-conversion-action]"
      );
      if (!el) return;
      const detail = {
        event: "cta_click",
        conversion_action: el.dataset.conversionAction,
        cta_location: el.dataset.ctaLocation || "",
        service: el.dataset.service || "",
      };
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(detail);
      // Si gtag direct est présent (Google Ads sans GTM), on tente un event aussi.
      if (typeof window.gtag === "function") {
        window.gtag("event", "cta_click", detail);
      }
      // Si Meta Pixel présent, on signale un Lead sur WhatsApp/appel.
      if (
        typeof window.fbq === "function" &&
        (detail.conversion_action === "whatsapp_click" ||
          detail.conversion_action === "call_click")
      ) {
        window.fbq("track", "Lead");
      }
    }
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true } as EventListenerOptions);
  }, []);

  return (
    <>
      {/* ---- Google Tag Manager ---- */}
      {gtmId && (
        <>
          <Script id="gtm-init" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="gtm"
            />
          </noscript>
        </>
      )}

      {/* ---- Google Analytics 4 (si pas via GTM) ---- */}
      {ga4Id && !gtmId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga4Id}');`}
          </Script>
        </>
      )}

      {/* ---- Google Ads (conversion directe, si pas via GTM) ---- */}
      {googleAdsId && !gtmId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
            strategy="afterInteractive"
          />
          <Script id="gads-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${googleAdsId}');`}
          </Script>
        </>
      )}

      {/* ---- Meta Pixel ---- */}
      {metaPixelId && (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${metaPixelId}');fbq('track','PageView');`}
          </Script>
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}
    </>
  );
}
