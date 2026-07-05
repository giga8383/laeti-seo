import type { Metadata } from "next";
import { GridBackground } from "@/components/ui/grid-background";
import HabitatAccents from "@/components/HabitatAccents";
import CookieConsent from "@/components/CookieConsent";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Footer from "@/components/Footer";
import PreFooter from "@/components/PreFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import { outfit, inter } from "@/lib/fonts";
import "./globals.css";

const SATOSHI_HREF = 'https://api.fontshare.com/v2/css?f[]=satoshi@700,900&display=swap';

export const metadata: Metadata = {
  metadataBase: new URL('https://laeti-seo.fr'),
  title: {
    default: "Diagnostic visibilité locale pour professionnels de l'habitat | Laeti SEO",
    template: "%s | Laeti SEO",
  },
  description:
    "Décorateur, cuisiniste, menuisier, artisan : vous n'apparaissez pas assez sur Google ? J'analyse votre fiche Google Business Profile, vos avis et votre présence locale, et vous remets un plan d'action priorisé. Diagnostic SEO local à 190 €.",
  keywords: [
    "diagnostic visibilité locale",
    "SEO local professionnels habitat",
    "référencement local artisan",
    "Google Business Profile optimisation",
    "fiche Google artisan",
    "visibilité Google Maps",
    "SEO local décorateur intérieur",
    "SEO local cuisiniste",
    "SEO local menuisier",
    "audit visibilité locale",
    "diagnostic SEO local",
    "demandes de devis Google",
  ],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'icon', url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  authors: [{ name: "Laeti SEO" }],
  creator: "Laeti SEO",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: 'https://laeti-seo.fr',
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: 'https://laeti-seo.fr',
    title: "Diagnostic visibilité locale pour professionnels de l'habitat | Laeti SEO",
    description:
      "Vous n'apparaissez pas assez sur Google ? J'analyse votre fiche Google Business Profile, vos concurrents et votre présence locale. Plan d'action priorisé livré sous 5 jours. 190 €.",
    siteName: "Laeti SEO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diagnostic visibilité locale | Laeti SEO",
    description:
      "Décorateur, cuisiniste, menuisier, artisan : comprenez pourquoi vous n'apparaissez pas assez sur Google. Diagnostic SEO local à 190 €.",
  },
  verification: {
    google: "DcYbOMnOtt1oMhlPULeAyJ3_Sf5joYz8nOuOoWgAON8",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${outfit.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        {/* Charge la police Satoshi sans bloquer le rendu : preload démarre la requête dès le
            parsing HTML, puis le script bascule le <link> en feuille de style une fois prêt
            (React ne supporte pas l'attribut onload en chaîne sur un <link>, d'où ce script). */}
        <link id="satoshi-preload" rel="preload" as="style" href={SATOSHI_HREF} />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var l=document.getElementById('satoshi-preload');if(!l)return;l.onload=function(){l.rel='stylesheet';};})();`,
          }}
        />
        <noscript>
          <link rel="stylesheet" href={SATOSHI_HREF} />
        </noscript>
      </head>
      <body className="min-h-full font-sans antialiased">
        <GridBackground />
        <HabitatAccents />
        <div className="relative z-0">{children}</div>
        <PreFooter />
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
