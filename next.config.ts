import type { NextConfig } from "next";

const securityHeaders = [
  // Empêche l'intégration de votre site dans une iframe (clickjacking)
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  // Empêche le navigateur de deviner le type d'un fichier (MIME sniffing)
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Contrôle les infos de navigation envoyées aux sites tiers
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Désactive les fonctionnalités navigateur inutiles (caméra, micro, géoloc…)
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Force HTTPS — à activer uniquement une fois le site déployé en production HTTPS
  // {
  //   key: "Strict-Transport-Security",
  //   value: "max-age=63072000; includeSubDomains; preload",
  // },
  // Content Security Policy : liste blanche des sources autorisées
  // Ajustez les domaines selon vos besoins (ex: Google Analytics, fonts)
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Scripts : site lui-même + Google Analytics (à activer quand GA est branché)
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
      // Styles : site + Google Fonts + Fontshare (Satoshi)
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://api.fontshare.com",
      // Polices : site + Google Fonts + Fontshare (Satoshi)
      "font-src 'self' https://fonts.gstatic.com https://api.fontshare.com https://cdn.fontshare.com",
      // Images : site + données inline (pour les SVG/base64)
      "img-src 'self' data: https:",
      // Connexions réseau : GA
      "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com",
      // Interdit les iframes de sources inconnues
      "frame-ancestors 'self'",
      // Bloque les plugins Flash/Java/etc.
      "object-src 'none'",
      // upgrade-insecure-requests : à activer uniquement en production HTTPS
      // "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.31.57'],
  async headers() {
    return [
      {
        // Applique les headers à toutes les pages
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
