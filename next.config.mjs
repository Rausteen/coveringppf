/** @type {import('next').NextConfig} */

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Décommentez quand le site est servi en HTTPS (NDD + certbat / Cloudflare) :
  // { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  images: {
    // Les sources sont déjà des .webp optimisées → on les sert telles quelles.
    // Évite le pic CPU de l'optimiseur Next à la volée (critique pendant les
    // pics de trafic payant sur un petit VPS). Pour réactiver l'optimisation
    // responsive : passez `unoptimized: false` et gardez `formats: ['image/webp']`.
    unoptimized: true,
    formats: ["image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // Images & assets statiques du dossier /public — cache long.
        source: "/:all*(webp|jpg|jpeg|png|svg|ico|woff2|avif)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
