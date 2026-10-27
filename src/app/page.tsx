import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Pillars from '@/components/Pillars';
import DiagnosticSection from '@/components/DiagnosticSection';
import SprintSection from '@/components/SprintSection';
import Method from '@/components/Method';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import { homeFaqs } from '@/lib/home-faq';

export const metadata: Metadata = {
  title: { absolute: "Consultant SEO local pour artisans et entreprises de l'habitat" },
  description:
    "Consultant SEO local indépendant, 12 ans d'expérience, basé en PACA. Diagnostic visibilité à 790 € en 5 jours. Appel découverte gratuit de 20 min.",
  alternates: { canonical: 'https://laeti-seo.fr' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://laeti-seo.fr',
    siteName: 'Laeti SEO',
    title: "Consultant SEO local pour artisans et entreprises de l'habitat | Laeti SEO",
    description:
      "Consultant SEO local indépendant, 12 ans d'expérience, basé en PACA. Diagnostic visibilité à 790 € en 5 jours. Appel découverte gratuit de 20 min.",
  },
};

/* -- Données structurées JSON-LD de la page (WebSite, Person et LocalBusiness sont dans le <head> du layout) -- */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://laeti-seo.fr/#webpage',
      url: 'https://laeti-seo.fr',
      name: "Consultant SEO local pour artisans et entreprises de l'habitat",
      isPartOf: { '@id': 'https://laeti-seo.fr/#website' },
      publisher: { '@id': 'https://laeti-seo.fr/#business' },
      about: { '@id': 'https://laeti-seo.fr/#business' },
      description:
        "Consultant SEO local indépendant pour les décorateurs, architectes d'intérieur, cuisinistes, menuisiers et entreprises de rénovation. Diagnostic visibilité à 790 € livré en 5 jours ouvrés, accompagnement Sprint local à 500 €/mois.",
      inLanguage: 'fr-FR',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Accueil',
            item: 'https://laeti-seo.fr',
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://laeti-seo.fr/#faq',
      isPartOf: { '@id': 'https://laeti-seo.fr/#webpage' },
      mainEntity: homeFaqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Pillars />
        <DiagnosticSection />
        <SprintSection />
        <Method />
        <About />
        <Testimonials showReviewTip />
        <FAQ label="FAQ" heading="Questions fréquentes" />
        <FinalCTA
          heading={<>On regarde où vous en êtes&nbsp;?</>}
          body={
            <p
              className="mx-auto mt-6 max-w-[56ch] text-base leading-relaxed text-white/65"
              style={{ fontFamily: 'Inter, "Inter Fallback"' }}
            >
              20 minutes au téléphone, gratuit, sans engagement. Vous décrivez votre activité et votre zone. Je vous dis ce qui, à mon avis, vous coûte le plus de clients aujourd&apos;hui. Si je ne suis pas la bonne personne pour vous, je vous le dis.
            </p>
          }
          cta="Réserver mon appel gratuit de 20 min"
          secondaryCta={{ label: 'Demander le diagnostic à 790 €', href: '/offre#diagnostic' }}
          microcopy="Réponse sous 24 heures ouvrées. Aucune relance commerciale automatisée."
        />
      </main>
    </>
  );
}

