// =============================================================================
// CENTRAL SITE CONFIG
// Update business info here. Every CTA, schema and footer reads from this file.
// =============================================================================

export const siteConfig = {
  // -------- Identity --------
  businessName: "Covering PPF Strasbourg",
  legalName: "Covering PPF Strasbourg",
  tagline: "PPF & covering automobile premium à Strasbourg",
  domain: "https://www.coveringppf-strasbourg.fr", // remplacer par le domaine final

  // -------- Contact (à remplacer) --------
  // Format E.164 sans espaces pour WhatsApp (ex: 33612345678)
  whatsappNumber: "33600000000",
  // Numéro affiché et tel: (FR)
  phoneNumber: "+33 6 00 00 00 00",
  phoneNumberE164: "+33600000000",
  email: "contact@coveringppf-strasbourg.fr",

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
