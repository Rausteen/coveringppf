// =============================================================================
// CENTRAL SITE CONFIG
// Update business info here. Every CTA, schema and footer reads from this file.
// =============================================================================

export const siteConfig = {
  // -------- Identity --------
  // Nom affiché sur le site / Google Business. Vous pouvez le remplacer par un
  // nom de marque distinct (ex. "Wrap67") sans toucher au domaine.
  businessName: "PPF Strasbourg",
  legalName: "PPF Strasbourg",
  tagline: "PPF & covering automobile premium à Strasbourg",
  // Domaine canonical — pilotable via NEXT_PUBLIC_SITE_URL (voir .env.example).
  domain: (process.env.NEXT_PUBLIC_SITE_URL || "https://ppf-strasbourg.fr").replace(/\/$/, ""),

  // -------- Contact --------
  // Format E.164 sans espaces ni + pour WhatsApp (wa.me/<numéro>)
  whatsappNumber: "33767052435",
  // Numéro affiché (espacé) et tel: (E.164)
  phoneNumber: "+33 7 67 05 24 35",
  phoneNumberE164: "+33767052435",
  email: "contact@ppf-strasbourg.fr",

  // -------- Localisation --------
  city: "Strasbourg",
  region: "Alsace",
  department: "Bas-Rhin",
  address: {
    street: "Adresse à compléter",
    postalCode: "67000",
    city: "Strasbourg",
    country: "FR",
  },
  // URL Google Maps (itinéraire) — à remplacer
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Strasbourg",
  // Coordonnées approximatives Strasbourg pour LocalBusiness schema
  geo: {
    latitude: 48.5734,
    longitude: 7.7521,
  },

  // -------- Réseaux sociaux (optionnel) --------
  instagramUrl: "",
  facebookUrl: "",
  googleBusinessUrl: "",

  // -------- Horaires (placeholder) --------
  openingHours: "Lun–Sam · 9h–19h · Sur rendez-vous",
  openingHoursSpec: [
    { days: ["Mo", "Tu", "We", "Th", "Fr", "Sa"], opens: "09:00", closes: "19:00" },
  ],

  // -------- Zone d’intervention --------
  serviceAreas: [
    "Strasbourg",
    "Schiltigheim",
    "Illkirch-Graffenstaden",
    "Lingolsheim",
    "Bischheim",
    "Ostwald",
    "Hoenheim",
    "Eckbolsheim",
    "Kehl",
    "Alsace",
    "Bas-Rhin",
  ],

  // -------- Services principaux (ordre = ordre d’affichage) --------
  mainServices: ["PPF", "Covering", "Marquage publicitaire"],

  // -------- Placeholders crédibilité (NE PAS afficher si vide) --------
  // Remplir uniquement si l’info est réelle. Sinon laisser vide.
  credentials: {
    yearsOfExperience: "", // ex: "8"
    vehiclesCount: "", // ex: "500"
    brands: [] as string[], // ex: ["XPEL", "3M", "Avery Dennison", "Hexis"]
    certifications: [] as string[], // ex: ["XPEL Certified Installer"]
  },

  // -------- Analytics / tracking (laisser vide tant que non configuré) --------
  // Renseignez ici ou via variables d’environnement (voir .env.example).
  // Tant qu’un ID est vide, le script correspondant n’est PAS injecté.
  analytics: {
    // Google Tag Manager — recommandé (gère GA4 + Google Ads + Meta depuis l’interface GTM)
    gtmId: process.env.NEXT_PUBLIC_GTM_ID || "", // ex: "GTM-XXXXXXX"
    // Google Analytics 4 (si vous n’utilisez pas GTM)
    ga4Id: process.env.NEXT_PUBLIC_GA4_ID || "", // ex: "G-XXXXXXXXXX"
    // Google Ads (conversion tracking direct, si pas via GTM)
    googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "", // ex: "AW-XXXXXXXXXX"
    // Label de conversion Google Ads (clic WhatsApp / appel) — voir Analytics.tsx
    googleAdsConversionLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL || "", // ex: "abcDEF12gh"
    // Meta (Facebook/Instagram) Pixel
    metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "", // ex: "123456789012345"
  },
};

// =============================================================================
// WhatsApp helper — pré-remplit le message
// =============================================================================
export type WhatsAppService =
  | "PPF"
  | "Covering"
  | "Marquage"
  | "Devis";

export function buildWhatsAppUrl(service: WhatsAppService = "Devis", note?: string) {
  const lines = [
    `Bonjour, je souhaite un devis pour ${service}.`,
    "Véhicule : ",
    "Prestation souhaitée : ",
    "Ville : ",
    "Je peux envoyer des photos.",
  ];
  if (note) lines.push("", note);
  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}

export function telHref() {
  return `tel:${siteConfig.phoneNumberE164}`;
}
