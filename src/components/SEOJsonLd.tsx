import { siteConfig } from "@/config/site";

type FaqEntry = { q: string; aPlain: string };

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "@id": `${siteConfig.domain}/#business`,
    name: siteConfig.businessName,
    url: siteConfig.domain,
    image: `${siteConfig.domain}/og.jpg`,
    telephone: siteConfig.phoneNumberE164,
    email: siteConfig.email || undefined,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.postalCode,
      addressLocality: siteConfig.address.city,
      addressCountry: siteConfig.address.country,
      addressRegion: siteConfig.region,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: siteConfig.serviceAreas.map((a) => ({ "@type": "City", name: a })),
    openingHoursSpecification: siteConfig.openingHoursSpec.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: [siteConfig.instagramUrl, siteConfig.facebookUrl, siteConfig.googleBusinessUrl].filter(Boolean),
    makesOffer: [
      { "@type": "Offer", name: "PPF — Film de protection carrosserie" },
      { "@type": "Offer", name: "Covering automobile" },
      { "@type": "Offer", name: "Marquage publicitaire véhicule" },
      { "@type": "Offer", name: "Vitrophanie" },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FaqJsonLd({ items }: { items: FaqEntry[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, aPlain }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: aPlain },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export function ServiceJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    areaServed: siteConfig.serviceAreas.map((a) => ({ "@type": "City", name: a })),
    provider: { "@id": `${siteConfig.domain}/#business` },
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
