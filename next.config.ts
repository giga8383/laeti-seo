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
  // Force HTTPS
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Isole l'origine des fenêtres ouvertes par le site (protection contre les attaques cross-origin)
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },
  // Content Security Policy : liste blanche des sources autorisées
  // Note : pas de nonce par requête ici pour garder les pages statiques (SSG) sur Cloudflare Pages.
  // 'unsafe-inline' reste nécessaire pour les styles inline (utilisés partout dans les composants).
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Scripts : site lui-même + Google Analytics (chargé après consentement)
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
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
      // Empêche l'injection d'une balise <base> malveillante qui détournerait les URLs relatives
      "base-uri 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.31.57'],
  images: {
    // L'optimiseur /_next/image de Cloudflare Pages ne redimensionne pas réellement les
    // images (il renvoie le fichier d'origine tel quel malgré les paramètres w/q). On désactive
    // cette optimisation illusoire et on sert des fichiers déjà pré-optimisés (WebP, taille adaptée).
    unoptimized: true,
  },
  experimental: {
    // Ne charge que les icônes/fonctions réellement utilisées (réduit le JS inutilisé)
    optimizePackageImports: ['@phosphor-icons/react', 'framer-motion'],
  },
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
