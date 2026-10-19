import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import Problem from '@/components/Problem';
import Deliverable from '@/components/Deliverable';
import Pricing from '@/components/Pricing';
import Method from '@/components/Method';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import GuideDownload from '@/components/GuideDownload';
import FinalCTA from '@/components/FinalCTA';
import { homeFaqs } from '@/lib/home-faq';

export const metadata: Metadata = {
  title: { absolute: 'Laeti SEO | Visibilité locale pour les professionnels de l’habitat' },
  description:
    'Professionnels de l’habitat : diagnostic visibilité à 790 €. Audit de la fiche Google, d’une page locale et des réseaux sociaux, avec plan d’action priorisé.',
  alternates: { canonical: 'https://laeti-seo.fr' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://laeti-seo.fr',
    siteName: 'Laeti SEO',
    title: 'Laeti SEO | Visibilité locale pour les professionnels de l’habitat',
    description:
      'Diagnostic visibilité à 790 € : audit de votre fiche Google, d’une page locale de votre site et de vos réseaux sociaux, avec un plan d’action priorisé.',
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
      name: "Diagnostic visibilité locale pour professionnels de l'habitat",
      isPartOf: { '@id': '#website' },
      about: { '@id': 'https://laeti-seo.fr/#business' },
      description:
        "Décorateur, cuisiniste, menuisier, artisan : analysez votre présence Google avec un diagnostic SEO local à 790 €. Plan d'action priorisé livré sous 5 jours.",
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
        "Diagnostic de visibilité locale et accompagnement SEO local pour les professionnels de l'habitat : décorateurs, architectes d'intérieur, cuisinistes, menuisiers et artisans.",
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
            "Audit de votre fiche Google Business Profile, analyse de la visibilité d'une page locale de votre site et de votre présence sur les réseaux sociaux. Plan d'action priorisé, rapport livré sous 5 jours ouvrés et appel de restitution de 45 minutes.",
          price: '790',
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          name: 'Sprint local 3 mois',
          description:
            "Diagnostic inclus + optimisation complète de la fiche Google Business Profile, stratégie avis clients, 2 Google Posts par mois, rapport mensuel et appel de suivi. Payable en 3 mensualités de 500 €.",
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
        <Testimonials />
        <Problem />
        <Deliverable />
        <Pricing />
        <Method />
        <About />
        <FAQ />
        <GuideDownload />
        <FinalCTA
          heading={<>Donnez aux bons clients une raison de vous contacter.</>}
          body={
            <p
              className="mx-auto mt-6 max-w-[50ch] text-base leading-relaxed text-white/65"
              style={{ fontFamily: 'Inter, "Inter Fallback"' }}
            >
              Votre métier, votre secteur, les projets que vous voulez attirer : faisons le point pour voir comment améliorer votre présence locale.
            </p>
          }
          microcopy="Appel gratuit · 20 minutes · Sans engagement"
        />
      </main>
    </>
  );
}

