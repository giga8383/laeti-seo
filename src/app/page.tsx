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

/* -- Données structurées JSON-LD -- */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': '#website',
      url: 'https://laeti-seo.fr',
      name: 'Laeti SEO',
      description: "Diagnostic de visibilité locale pour professionnels de l'habitat",
      inLanguage: 'fr-FR',
    },
    {
      '@type': 'WebPage',
      '@id': '#webpage',
      url: 'https://laeti-seo.fr',
      name: "Consultant SEO local pour artisans et entreprises de l'habitat",
      isPartOf: { '@id': '#website' },
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
      '@type': 'Person',
      '@id': '#laeti',
      name: 'Laetitia Laghezza',
      alternateName: 'Laeti SEO',
      jobTitle: 'Consultante SEO local',
      description: "Spécialiste SEO local pour les professionnels de l'habitat. Dans le marketing digital et l'e-commerce depuis 2007, dans le SEO depuis plus de 12 ans.",
      url: 'https://laeti-seo.fr',
      worksFor: { '@id': 'https://laeti-seo.fr/#business' },
      knowsAbout: [
        'SEO local',
        'Google Business Profile',
        'Référencement local',
        "Visibilité Google pour professionnels de l'habitat",
        'Google Maps optimisation',
        'Avis clients Google',
        'Marketing digital',
        'E-commerce',
      ],
    },
    {
      '@type': ['ProfessionalService', 'LocalBusiness'],
      '@id': 'https://laeti-seo.fr/#business',
      name: 'Laeti SEO',
      url: 'https://laeti-seo.fr/',
      founder: { '@id': '#laeti' },
      foundingDate: '2007',
      description:
        "Diagnostic de visibilité locale et accompagnement SEO local pour les professionnels de l'habitat, comme les décorateurs, architectes d'intérieur, cuisinistes, menuisiers et artisans.",
      image: 'https://laeti-seo.fr/laeti-photo.webp',
      telephone: '+33 6 26 95 07 50',
      email: 'laetitia@laeti-seo.fr',
      priceRange: 'De 790 € à 1 500 €',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rue du Commerce',
        postalCode: '83910',
        addressLocality: 'Pourrières',
        addressRegion: "Provence-Alpes-Côte d'Azur",
        addressCountry: 'FR',
      },
      areaServed: [
        { '@type': 'City', name: 'Aix-en-Provence' },
        { '@type': 'City', name: 'Marseille' },
        { '@type': 'City', name: 'Toulon' },
        { '@type': 'City', name: 'Nice' },
        { '@type': 'City', name: 'Aubagne' },
        { '@type': 'City', name: 'Brignoles' },
        { '@type': 'City', name: 'Rousset' },
        { '@type': 'City', name: 'Saint-Maximin-la-Sainte-Baume' },
        { '@type': 'City', name: 'Pourrières' },
        { '@type': 'AdministrativeArea', name: "Provence-Alpes-Côte d'Azur" },
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
      ],
      sameAs: [
        'https://maps.google.com/?cid=1919604341859857439',
        'https://www.linkedin.com/in/laetitia-laghezza/',
        'https://www.pagesjaunes.fr/pros/64458463',
      ],
      makesOffer: [
        {
          '@type': 'Offer',
          name: 'Diagnostic visibilité locale',
          description:
            "Audit de votre fiche Google Business Profile, audit technique et éditorial de votre site, cartographie de vos concurrents locaux, test de visibilité IA (ChatGPT, Perplexity, aperçus IA de Google), plan d'action priorisé et suivi de départ. Livré sous 5 jours ouvrés avec une restitution de 45 minutes.",
          price: '790',
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          name: 'Sprint local 3 mois',
          description:
            "Mois 1 pour les fondations (fiche Google, indexation, suivi), mois 2 pour les pages locales, mois 3 pour le contenu et l'autorité locale. Un point de 30 minutes et un compte rendu écrit chaque mois. 500 € par mois, 3 mois minimum (1 500 € au total), sans reconduction forcée.",
          price: '1500',
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
        },
      ],
      knowsAbout: [
        'Google Business Profile',
        'Google Maps SEO',
        'Référencement local',
        'Visibilité locale Google',
        'Avis clients Google',
        "SEO pour professionnels de l'habitat",
      ],
    },
    {
      '@type': 'FAQPage',
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

