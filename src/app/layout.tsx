import type { Metadata } from "next";
import { GridBackground } from "@/components/ui/grid-background";
import HabitatAccents from "@/components/HabitatAccents";
import CookieConsent from "@/components/CookieConsent";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Footer from "@/components/Footer";
import PreFooter from "@/components/PreFooter";
import { outfit, inter } from "@/lib/fonts";
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${outfit.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="min-h-full font-sans antialiased">
        <GridBackground />
        <HabitatAccents />
        <div className="relative z-0">{children}</div>
        <PreFooter />
        <Footer />
        <CookieConsent />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
