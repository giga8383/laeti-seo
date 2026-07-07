import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Target from '@/components/Target';
import Benefits from '@/components/Benefits';
import Differentiation from '@/components/Differentiation';
import About from '@/components/About';
import Pricing from '@/components/Pricing';
import GuideDownload from '@/components/GuideDownload';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';

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
      about: { '@id': '#service' },
      description:
        "Décorateur, cuisiniste, menuisier, artisan : analysez votre présence Google avec un diagnostic SEO local à 190 €. Plan d'action priorisé livré sous 5 jours.",
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
      worksFor: { '@id': '#service' },
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
      '@id': '#service',
      name: 'Laeti SEO',
      founder: { '@id': '#laeti' },
      foundingDate: '2007',
      description:
        "Diagnostic de visibilité locale et accompagnement SEO local pour les professionnels de l'habitat : décorateurs, architectes d'intérieur, cuisinistes, menuisiers et artisans.",
      serviceType: 'SEO local, Référencement Google local',
      image: 'https://laeti-seo.fr/laeti-1.webp',
      telephone: '+33 6 26 95 07 50',
      priceRange: 'De 190 € à 790 €',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Pourrières',
        postalCode: '83910',
        addressRegion: "Provence-Alpes-Côte d'Azur",
        addressCountry: 'FR',
      },
      areaServed: {
        '@type': 'Country',
        name: 'France',
      },
      offers: [
        {
          '@type': 'Offer',
          name: 'Diagnostic visibilité locale',
          description:
            "Analyse complète de votre fiche Google Business Profile, de vos avis clients, de vos concurrents locaux et de votre site. Rapport priorisé livré sous 5 jours ouvrés.",
          price: '190',
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          name: 'Sprint local 3 mois',
          description:
            "Diagnostic inclus + optimisation complète de la fiche Google Business Profile, stratégie avis clients, 2 Google Posts par mois, rapport mensuel et appel de suivi.",
          price: '790',
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
      mainEntity: [
        {
          '@type': 'Question',
          name: "Est-ce que ce diagnostic est utile si j'ai déjà une fiche Google ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui. Avoir une fiche Google ne suffit pas. Ce qui compte, c'est ce qu'elle montre, comment elle ressort, si elle inspire confiance, et comment elle se compare aux concurrents de votre zone.",
          },
        },
        {
          '@type': 'Question',
          name: "Est-ce que c'est uniquement pour Google Maps ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Non. Google Maps est une partie importante du diagnostic, mais j'analyse aussi votre site, vos avis, votre présence locale et la cohérence globale de votre visibilité.",
          },
        },
        {
          '@type': 'Question',
          name: 'Est-ce que vous faites les corrections ensuite ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Le diagnostic sert d'abord à identifier clairement ce qui bloque. Si vous souhaitez être accompagné ensuite pour mettre en place certaines actions, on peut en discuter après le diagnostic.",
          },
        },
        {
          '@type': 'Question',
          name: 'Est-ce adapté si je débute ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, si votre activité est déjà claire et que vous souhaitez construire une présence locale solide. En revanche, si votre offre, votre zone ou vos services ne sont pas encore définis, il faudra d'abord clarifier ces bases.",
          },
        },
        {
          '@type': 'Question',
          name: 'Est-ce que vous promettez plus de devis immédiatement ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Non. Et méfiez-vous de ceux qui le promettent. Le diagnostic permet d'identifier les blocages et les actions prioritaires pour améliorer votre visibilité locale. Les résultats dépendent ensuite de votre situation actuelle, de votre concurrence et des actions réellement mises en place.",
          },
        },
      ],
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
        <Target />
        <Benefits />
        <Differentiation />
        <About />
        <Pricing />
        <GuideDownload />
        <FAQ />
        <FinalCTA />
      </main>
    </>
  );
}

