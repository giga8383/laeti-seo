import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';
import { inter } from '@/lib/fonts';
import { Check, ArrowRight, MapPin, X } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

/* -- Métadonnées SEO -- */
export const metadata: Metadata = {
  title: 'Consultante SEO Marseille, Référencement local pros de l\'habitat',
  description:
    'Artisan, cuisiniste, menuisier, décorateur à Marseille : votre fiche Google vous rapporte-t-elle vraiment des devis ? J\'analyse votre visibilité locale et vous livre un plan d\'action concret en 5 jours. Diagnostic à 190 €.',
  alternates: {
    canonical: 'https://laeti-seo.fr/consultant-seo-marseille',
  },
  keywords: [
    'consultant SEO Marseille',
    'consultante SEO Marseille',
    'SEO local Marseille',
    'référencement local Marseille',
    'Google Business Profile Marseille',
    'visibilité Google Marseille',
    'SEO artisan Marseille',
    'référencement artisan Bouches-du-Rhône',
    'consultant SEO freelance Marseille',
    'visibilité locale professionnels habitat Marseille',
  ],
  openGraph: {
    url: 'https://laeti-seo.fr/consultant-seo-marseille',
    title: 'Consultante SEO Marseille | Laeti SEO',
    description:
      'Spécialiste SEO local à Marseille pour les pros de l\'habitat. Diagnostic de visibilité, Google Business Profile, présence locale. Plan d\'action livré en 5 jours.',
  },
};

/* -- Données structurées JSON-LD -- */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://laeti-seo.fr' },
        { '@type': 'ListItem', position: 2, name: 'Consultant SEO Marseille', item: 'https://laeti-seo.fr/consultant-seo-marseille' },
      ],
    },
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': 'https://laeti-seo.fr/#marseille',
      name: 'Laeti SEO, Consultante SEO Marseille',
      description: "Consultante SEO freelance spécialisée dans le référencement local des professionnels de l'habitat à Marseille et dans les Bouches-du-Rhône.",
      url: 'https://laeti-seo.fr/consultant-seo-marseille',
      areaServed: [
        { '@type': 'City', name: 'Marseille' },
        { '@type': 'City', name: 'Aubagne' },
        { '@type': 'City', name: 'Cassis' },
        { '@type': 'City', name: 'La Ciotat' },
        { '@type': 'City', name: 'Marignane' },
        { '@type': 'City', name: 'Vitrolles' },
        { '@type': 'City', name: 'Allauch' },
        { '@type': 'City', name: 'Aix-en-Provence' },
        { '@type': 'AdministrativeArea', name: 'Bouches-du-Rhône' },
        { '@type': 'AdministrativeArea', name: 'Provence-Alpes-Côte d\'Azur' },
      ],
      serviceType: 'Référencement local, SEO Google',
      priceRange: '€€',
      founder: {
        '@type': 'Person',
        name: 'Laetitia Laghezza',
        jobTitle: 'Consultante SEO local',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Pourquoi le SEO local est-il particulièrement important à Marseille ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Marseille est la deuxième ville de France avec plus d'un million d'habitants. Le volume de recherches locales y est bien plus élevé que dans les villes moyennes : des milliers de personnes tapent chaque mois \"cuisiniste Marseille\", \"menuisier 13008\" ou \"décorateur intérieur Marseille\" sur Google. La concurrence est réelle, mais le gâteau est immense. Un professionnel de l'habitat bien positionné sur Google à Marseille peut générer des dizaines de demandes de devis qualifiées chaque mois, sans dépenser un euro en publicité. À l'inverse, une fiche Google mal renseignée ou un site sans signaux locaux vous rendent invisible dans une ville où les prospects ont l'embarras du choix.",
          },
        },
        {
          '@type': 'Question',
          name: 'Comment fonctionne la recherche locale par arrondissement à Marseille ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "À Marseille, les recherches Google sont souvent hyper-localisées : les habitants du 8e cherchent \"cuisiniste Marseille 8\" ou \"décorateur 13008\", ceux du 13e cherchent \"artisan Marseille 13e\". Google utilise la localisation de l'internaute et les signaux de votre fiche (adresse, zone de chalandise, mots-clés dans la description) pour décider qui afficher. Si votre fiche ne mentionne pas clairement vos arrondissements d'intervention, vous manquez une grande partie des recherches pertinentes. L'optimisation SEO local à Marseille passe donc par une stratégie fine à l'échelle des secteurs, pas seulement \"Marseille\" en général.",
          },
        },
        {
          '@type': 'Question',
          name: 'Combien coûte un consultant SEO à Marseille ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Le marché du SEO à Marseille est très hétérogène : des agences qui facturent 1 500 € à 3 000 €/mois sur 12 mois d'engagement, des freelances généralistes à des tarifs variables, et peu de spécialistes du SEO local. Mon positionnement est différent : je propose un diagnostic de visibilité locale à 190 €, livré en 5 jours, sans abonnement. Si vous souhaitez aller plus loin avec un accompagnement de 3 mois incluant les optimisations, le Sprint local est à 790 €. Pas de contrat long, pas de promesses vagues : des livrables précis et des actions concrètes.",
          },
        },
        {
          '@type': 'Question',
          name: 'Quels secteurs de Marseille sont les plus compétitifs pour le SEO local ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Les arrondissements avec le plus de compétition SEO à Marseille sont généralement le 6e, le 7e, le 8e et le 13e, des secteurs résidentiels aisés avec une forte demande en rénovation et décoration. Le 1er et le 2e (Euroméditerranée) sont en plein développement. Les arrondissements nord (14e, 15e, 16e) sont souvent moins travaillés en SEO local, ce qui représente une opportunité réelle pour les artisans qui y exercent. Dans tous les cas, un diagnostic permet d'évaluer précisément la concurrence sur votre secteur exact et vos mots-clés cibles.",
          },
        },
        {
          '@type': 'Question',
          name: 'Ma fiche Google Business Profile est déjà créée, ai-je quand même besoin d\'un diagnostic SEO à Marseille ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Avoir une fiche Google n'est que la première étape. La plupart des professionnels de l'habitat à Marseille ont une fiche, mais très peu l'ont vraiment optimisée. Un diagnostic SEO local à Marseille révèle souvent : des catégories mal choisies qui réduisent votre visibilité, une description sans mots-clés pertinents, une zone de chalandise mal configurée, des photos insuffisantes ou trop anciennes, et un écart important avec les fiches de vos concurrents les mieux positionnés. Avoir une fiche existante, c'est bien. La faire travailler pour vous, c'est mieux.",
          },
        },
        {
          '@type': 'Question',
          name: 'En quoi un consultant SEO freelance est-il différent d\'une agence à Marseille ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "À Marseille, les agences SEO sont nombreuses mais rarement spécialisées sur les professionnels de l'habitat. Vous obtenez un forfait standardisé, souvent géré par plusieurs interlocuteurs, avec des rapports mensuels chargés de métriques mais peu d'actions concrètes. En tant que consultante SEO freelance spécialisée exclusivement dans le SEO local des pros de l'habitat, je connais vos clients, vos requêtes cibles et les tactiques qui fonctionnent réellement pour votre secteur à Marseille. C'est moi qui fais l'analyse, c'est moi qui rédige le rapport, personne d'autre.",
          },
        },
        {
          '@type': 'Question',
          name: 'Peut-on apparaître dans le pack local Google à Marseille sans site web ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, c'est possible. Google peut afficher une fiche Google Business Profile dans le pack local même sans site web associé, à condition que la fiche soit bien complétée et active. Cela dit, un site web envoie des signaux de confiance supplémentaires et renforce votre positionnement sur les requêtes longue traîne (\"menuisier porte sur mesure Marseille 8e\" par exemple). Si vous n'avez pas de site, je vous indique dans le diagnostic si c'est un frein réel pour vos objectifs ou si la fiche Google seule peut suffire à générer des contacts.",
          },
        },
        {
          '@type': 'Question',
          name: 'Je travaille dans plusieurs arrondissements de Marseille, comment l\'indiquer sur Google ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Google Business Profile permet de définir une zone de chalandise (les zones que vous desservez) indépendamment de votre adresse. Pour un artisan ou un décorateur qui intervient dans plusieurs arrondissements à Marseille, il faut configurer cette zone correctement, puis utiliser des mots-clés géolocalisés dans la description de la fiche et sur votre site. Il existe aussi des stratégies de contenu local pour apparaître sur des requêtes spécifiques à chaque secteur. C'est une des analyses clés que je réalise dans le diagnostic.",
          },
        },
      ],
    },
  ],
};

const forYou = [
  'Vous exercez à Marseille ou dans les communes voisines (Aubagne, Allauch, Cassis, La Ciotat…)',
  'Votre fiche Google existe mais ne génère pas assez d\'appels ni de demandes de devis',
  'Vous savez que des clients potentiels cherchent vos services sur Google, mais ce sont vos concurrents qu\'ils appellent',
  'Vous voulez comprendre pourquoi vous n\'apparaissez pas dans les premiers résultats et ce qu\'il faudrait changer',
  'Vous préférez un interlocuteur unique, disponible, qui connaît vraiment le SEO local des métiers de l\'habitat',
];

const notForYou = [
  'Si vous attendez des résultats sans aucun effort de votre côté (répondre aux avis, mettre à jour votre fiche…)',
  'Si vous cherchez un contrat mensuel longue durée avec un reporting hebdomadaire',
  'Si votre périmètre d\'activité ou vos services ne sont pas encore clairement définis',
];

const zones = [
  { label: 'Marseille (13e)', href: null },
  { label: 'Marseille (8e)',  href: null },
  { label: 'Marseille (6e)',  href: null },
  { label: 'Marseille (1er)', href: null },
  { label: 'Aubagne',         href: null },
  { label: 'Allauch',         href: null },
  { label: 'Plan-de-Cuques',  href: null },
  { label: 'Cassis',          href: null },
  { label: 'La Ciotat',       href: null },
  { label: 'Marignane',       href: null },
  { label: 'Vitrolles',       href: null },
  { label: 'Aix-en-Provence', href: '/consultant-seo-aix-en-provence' },
];

const steps = [
  {
    num: '01',
    title: 'Commande & questionnaire',
    desc: 'Vous réservez en ligne en quelques minutes. Je vous adresse un questionnaire court pour cerner votre activité, vos arrondissements cibles à Marseille et ce qui vous préoccupe le plus.',
  },
  {
    num: '02',
    title: 'Analyse de terrain',
    desc: 'Je passe votre présence en revue : fiche Google Business Profile, note et avis, positionnement dans le pack local marseillais, signaux SEO de votre site, cohérence sur les annuaires.',
  },
  {
    num: '03',
    title: 'Rapport livré en 5 jours',
    desc: 'Un document structuré, lisible sans être expert SEO : les points qui freinent votre visibilité à Marseille, les actions prioritaires, et les quick wins à mettre en place rapidement.',
  },
  {
    num: '04',
    title: 'Debriefing en visio',
    desc: 'On se retrouve 30 à 45 minutes pour parcourir le rapport ensemble. Je réponds à vos questions et vous repartez avec une vision claire de ce que vous devez faire en premier.',
  },
];

export default function ConsultantSEOMarseilePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>

        {/* ------------------------------------------
            HERO
        ------------------------------------------ */}
        <section className="relative bg-transparent" style={{ paddingTop: '120px' }}>
          <div className="mx-auto max-w-7xl px-6 pb-0 pt-12 md:pt-20">

            <ScrollReveal>
              <p
                className="mb-4 flex items-center gap-2 uppercase tracking-widest"
                style={{
                  fontFamily: inter.style.fontFamily,
                  fontWeight: 600,
                  fontSize: '13px',
                  color: '#fceb30',
                  textShadow: '0 0 12px rgba(252,235,48,0.7), 0 0 28px rgba(252,235,48,0.4)',
                }}
              >
                <MapPin size={14} weight="bold" />
                Marseille · Bouches-du-Rhône
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.07}>
              <h1
                className="mb-6 text-white"
                style={{
                  fontFamily: 'Satoshi, "Satoshi Fallback", ui-sans-serif, system-ui, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(38px, 5.5vw, 68px)',
                  lineHeight: '1.08',
                }}
              >
                Consultante SEO<br />
                <span style={{ color: '#fceb30', textShadow: '0 0 18px rgba(252,235,48,0.55), 0 0 48px rgba(252,235,48,0.25)' }}>
                  Marseille
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.13}>
              <p
                className="mb-8 max-w-[58ch] text-white/60"
                style={{ fontFamily: inter.style.fontFamily, fontSize: '17px', lineHeight: '28px' }}
              >
                À Marseille, des milliers de personnes cherchent chaque mois un artisan,
                un cuisiniste ou un décorateur sur Google. Si ce n&apos;est pas vous qu&apos;elles trouvent,
                c&apos;est votre concurrent qu&apos;elles appellent. Je vous aide à changer ça.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.18}>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/offre"
                  className="inline-flex items-center gap-2 rounded-full bg-[#fceb30] px-6 py-3.5 font-bold text-[#264d8c] transition-all duration-300 hover:brightness-105 active:scale-[0.98]"
                  style={{ fontFamily: inter.style.fontFamily, fontSize: '15px' }}
                >
                  Voir le diagnostic · 190 €
                  <ArrowRight size={15} weight="bold" />
                </Link>
                <Link
                  href="/feuille-de-route"
                  className="inline-flex items-center gap-2 text-white/60 transition-colors hover:text-white/90"
                  style={{ fontFamily: inter.style.fontFamily, fontSize: '14px' }}
                >
                  Comment ça se passe ?
                  <ArrowRight size={13} weight="bold" />
                </Link>
              </div>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal delay={0.24}>
              <div
                className="mt-14 grid grid-cols-2 gap-6 border-t pt-10 md:grid-cols-4"
                style={{ borderColor: 'rgba(255,255,255,0.08)' }}
              >
                {[
                  { value: '12+', label: 'ans en SEO' },
                  { value: '22+', label: 'clients accompagnés' },
                  { value: '5j',  label: 'livraison du diagnostic' },
                ].map((s, i) => (
                  <div key={i}>
                    <p style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '34px', lineHeight: '1', color: '#fceb30' }}>
                      {s.value}
                    </p>
                    <p style={{ fontFamily: inter.style.fontFamily, fontSize: '12px', color: 'rgba(255,255,255,0.45)', marginTop: '5px' }}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Séparateur */}
        <div className="mx-auto max-w-7xl px-6 pt-20">
          <div className="h-px w-full" style={{ background: 'rgba(255,255,255,0.07)' }} />
        </div>

        {/* ------------------------------------------
            CONTEXTE LOCAL MARSEILLE
        ------------------------------------------ */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-center">

              <ScrollReveal>
                <p
                  className="mb-4 uppercase tracking-widest"
                  style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '13px', color: '#fceb30', textShadow: '0 0 12px rgba(252,235,48,0.6)' }}
                >
                  Le marché marseillais
                </p>
                <h2
                  className="mb-6 text-white"
                  style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(30px, 3.5vw, 44px)', lineHeight: '1.15' }}
                >
                  Marseille : un marché immense, une bataille de visibilité encore plus grande
                </h2>
                <div
                  className="space-y-4 text-white/65"
                  style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '27px' }}
                >
                  <p>
                    Deuxième ville de France, Marseille concentre un volume de recherches locales
                    sans commune mesure avec les villes moyennes. Des milliers de requêtes
                    mensuelles du type <strong className="text-white/90">&quot;cuisiniste Marseille 13&quot;</strong>,{' '}
                    <strong className="text-white/90">&quot;menuisier Marseille 8e&quot;</strong> ou{' '}
                    <strong className="text-white/90">&quot;décorateur intérieur Marseille Nord&quot;</strong>, autant
                    d&apos;opportunités de contact que vous captez ou que vous laissez à un concurrent.
                  </p>
                  <p>
                    La particularité marseillaise : les habitants cherchent par arrondissement,
                    pas seulement par ville. Votre fiche Google doit refléter exactement les secteurs
                    où vous intervenez, sinon Google ne vous montrera pas aux bons endroits.
                  </p>
                  <p>
                    Autre réalité du terrain : beaucoup d&apos;artisans et de pros de l&apos;habitat
                    à Marseille ont une fiche Google mais ne l&apos;ont jamais vraiment travaillée.
                    C&apos;est précisément là que se joue l&apos;écart.
                  </p>
                  <p style={{
                    fontFamily: 'Satoshi, sans-serif',
                    fontWeight: 700,
                    fontSize: '20px',
                    lineHeight: '1.35',
                    color: 'rgba(255,255,255,0.90)',
                    borderLeft: '2px solid rgba(252,235,48,0.55)',
                    paddingLeft: '16px',
                    marginTop: '4px',
                  }}>
                    Pas nécessairement meilleur.<br />
                    <span style={{ color: '#fceb30', textShadow: '0 0 18px rgba(252,235,48,0.55), 0 0 40px rgba(252,235,48,0.25)' }}>
                      Juste mieux visible.
                    </span>
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div
                  className="rounded-[2rem] p-8 md:p-10"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
                    border: '1px solid rgba(255,255,255,0.10)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07)',
                  }}
                >
                  <p
                    className="mb-6 font-bold text-white"
                    style={{ fontFamily: 'Satoshi, sans-serif', fontSize: '18px' }}
                  >
                    Ce qui fait la différence entre une fiche Google qui génère des devis et une qui reste muette :
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Les catégories choisies correspondent exactement à vos services',
                      'La zone de chalandise couvre vos vrais arrondissements d\'intervention',
                      'La description intègre vos mots-clés métier et vos secteurs marseillais',
                      'Les photos de réalisations sont récentes et nombreuses',
                      'Les avis clients sont réguliers et font l\'objet de réponses soignées',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ background: 'rgba(252,235,48,0.15)' }}>
                          <Check size={11} weight="bold" color="#fceb30" />
                        </span>
                        <span style={{ fontFamily: inter.style.fontFamily, fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: '24px' }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div
                    className="mt-8 rounded-xl p-4"
                    style={{ background: 'rgba(252,235,48,0.06)', border: '1px solid rgba(252,235,48,0.15)' }}
                  >
                    <p style={{ fontFamily: inter.style.fontFamily, fontSize: '14px', color: 'rgba(255,255,255,0.75)', lineHeight: '22px' }}>
                      À Marseille, une fiche bien optimisée peut faire passer de 2 à 20 contacts par mois. C&apos;est ça, le SEO local.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Séparateur */}
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px w-full" style={{ background: 'rgba(255,255,255,0.07)' }} />
        </div>

        {/* ------------------------------------------
            CE QUE J'ANALYSE
        ------------------------------------------ */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <ScrollReveal>
              <p
                className="mb-4 uppercase tracking-widest"
                style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '13px', color: '#fceb30', textShadow: '0 0 12px rgba(252,235,48,0.6)' }}
              >
                Le diagnostic SEO local
              </p>
              <h2
                className="mb-4 max-w-[26ch] text-white"
                style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: '1.15' }}
              >
                Ce que je passe au crible pour votre visibilité à Marseille
              </h2>
              <p
                className="mb-14 max-w-[60ch] text-white/55"
                style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '26px' }}
              >
                Le diagnostic SEO local est une analyse complète de votre présence en ligne
                au regard de vos concurrents marseillais. Pas de théorie : que des constats
                actionnables.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Votre fiche Google Business Profile',
                  desc: 'Je vérifie chaque champ de votre fiche : catégories principale et secondaires, description, services, horaires, attributs spéciaux, photos. Chaque détail manquant est un signal négatif pour Google.',
                },
                {
                  title: 'Vos avis et votre réputation locale',
                  desc: 'Combien d\'avis ont vos 3 premiers concurrents à Marseille ? À quelle fréquence en reçoivent-ils ? Je vous montre l\'écart et comment le combler avec une stratégie réaliste.',
                },
                {
                  title: 'Analyse de vos concurrents directs',
                  desc: 'Je sélectionne les 5 concurrents qui vous devancent sur vos requêtes à Marseille et j\'identifie précisément ce qu\'ils font mieux que vous, et ce que vous pouvez récupérer.',
                },
                {
                  title: 'Les signaux locaux de votre site',
                  desc: 'Votre site mentionne-t-il Marseille, vos arrondissements, vos services avec les bons mots-clés ? Les balises title et méta, la vitesse de chargement, la version mobile : tout est inspecté.',
                },
                {
                  title: 'Cohérence de votre présence web',
                  desc: 'Google croise vos informations entre votre fiche, votre site et les annuaires. Une adresse ou un numéro de téléphone différent quelque part suffit à brouiller votre référencement local.',
                },
                {
                  title: 'Votre plan d\'action personnalisé',
                  desc: 'Le rapport final classe les actions par priorité et par impact estimé. Vous savez exactement quoi faire en premier pour gagner des positions sur Google à Marseille.',
                },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.07}>
                  <div
                    className="h-full rounded-[1.5rem] p-7"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.09)',
                      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
                    }}
                  >
                    <div className="mb-4 h-[2px] w-8 rounded-full" style={{ background: '#fceb30' }} />
                    <h3
                      className="mb-3 text-white"
                      style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '17px', lineHeight: '1.3' }}
                    >
                      {item.title}
                    </h3>
                    <p style={{ fontFamily: inter.style.fontFamily, fontSize: '14px', lineHeight: '23px', color: 'rgba(255,255,255,0.55)' }}>
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Séparateur */}
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px w-full" style={{ background: 'rgba(255,255,255,0.07)' }} />
        </div>

        {/* ------------------------------------------
            POUR QUI / PAS POUR QUI
        ------------------------------------------ */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <ScrollReveal>
              <h2
                className="mb-12 text-white"
                style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: '1.15' }}
              >
                À qui s&apos;adresse ce diagnostic SEO local à Marseille{' '}
                <span style={{ color: 'rgba(255,255,255,0.35)' }}>et à qui il ne convient pas</span>
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <ScrollReveal delay={0.1}>
                <div
                  className="h-full rounded-[2rem] p-10"
                  style={{
                    background: 'linear-gradient(145deg, #2a57b8 0%, #3262ab 55%, #1d3f8f 100%)',
                    boxShadow: '0 30px 60px -15px rgba(50,98,171,0.45)',
                  }}
                >
                  <div className="mb-6 h-[3px] w-10 rounded-full" style={{ background: '#fceb30' }} />
                  <h3
                    className="mb-7"
                    style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '18px', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#ffffff' }}
                  >
                    Pour <span style={{ color: '#fceb30' }}>vous</span>
                  </h3>
                  <ul className="space-y-5">
                    {forYou.map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ background: 'rgba(252,235,48,0.20)' }}>
                          <Check size={11} weight="bold" color="#fceb30" />
                        </span>
                        <span style={{ fontFamily: inter.style.fontFamily, fontSize: '15px', lineHeight: '24px', color: 'rgba(255,255,255,0.85)' }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div
                  className="h-full rounded-[2rem] p-10"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.10)',
                  }}
                >
                  <div className="mb-6 h-[3px] w-10 rounded-full" style={{ background: 'rgba(255,255,255,0.25)' }} />
                  <h3
                    className="mb-7"
                    style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '18px', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.50)' }}
                  >
                    N&apos;est <span style={{ color: 'rgba(255,255,255,0.85)' }}>pas pour vous</span>
                  </h3>
                  <ul className="space-y-5">
                    {notForYou.map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                          <X size={11} weight="bold" color="rgba(255,255,255,0.5)" />
                        </span>
                        <span style={{ fontFamily: inter.style.fontFamily, fontSize: '15px', lineHeight: '24px', color: 'rgba(255,255,255,0.55)' }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Séparateur */}
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px w-full" style={{ background: 'rgba(255,255,255,0.07)' }} />
        </div>

        {/* ------------------------------------------
            PROCESS
        ------------------------------------------ */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <ScrollReveal>
              <p
                className="mb-4 uppercase tracking-widest"
                style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '13px', color: '#fceb30', textShadow: '0 0 12px rgba(252,235,48,0.6)' }}
              >
                Le déroulé
              </p>
              <h2
                className="mb-4 text-white"
                style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: '1.15' }}
              >
                De la commande au plan d&apos;action : 4 étapes, 5 jours
              </h2>
              <p
                className="mb-14 max-w-[55ch] text-white/50"
                style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '26px' }}
              >
                Tout se passe à distance. Pas de déplacement, pas de réunion de cadrage de 2h.
                Vous commandez, je travaille, vous recevez.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div
                    className="h-full rounded-[1.5rem] p-7"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.09)',
                    }}
                  >
                    <p
                      className="mb-5 font-mono font-bold"
                      style={{ fontSize: '13px', color: 'rgba(252,235,48,0.5)', letterSpacing: '0.08em' }}
                    >
                      {step.num}
                    </p>
                    <h3
                      className="mb-3 text-white"
                      style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '17px', lineHeight: '1.3' }}
                    >
                      {step.title}
                    </h3>
                    <p style={{ fontFamily: inter.style.fontFamily, fontSize: '14px', lineHeight: '23px', color: 'rgba(255,255,255,0.55)' }}>
                      {step.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.35}>
              <div className="mt-10 text-center">
                <Link
                  href="/feuille-de-route"
                  className="inline-flex items-center gap-2 text-white/50 transition-colors hover:text-white/80"
                  style={{ fontFamily: inter.style.fontFamily, fontSize: '14px' }}
                >
                  Voir le déroulé complet
                  <ArrowRight size={13} weight="bold" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Séparateur */}
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px w-full" style={{ background: 'rgba(255,255,255,0.07)' }} />
        </div>

        {/* ------------------------------------------
            ZONES D'INTERVENTION
        ------------------------------------------ */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
            <ScrollReveal>
              <h2
                className="mb-4 text-white"
                style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 38px)', lineHeight: '1.2' }}
              >
                Tous les arrondissements de Marseille et les communes alentour
              </h2>
              <p
                className="mb-10 max-w-[60ch] text-white/50"
                style={{ fontFamily: inter.style.fontFamily, fontSize: '15px', lineHeight: '25px' }}
              >
                Que vous interveniez dans le sud, le nord, l&apos;est ou le centre de Marseille,
                le diagnostic tient compte de votre zone exacte. Je travaille à distance avec
                tous les professionnels de l&apos;habitat des Bouches-du-Rhône.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="flex flex-wrap gap-3">
                {zones.map((zone, i) => {
                  const sharedStyle: React.CSSProperties = {
                    background: i === 0 ? 'rgba(252,235,48,0.12)' : zone.href ? 'rgba(252,235,48,0.07)' : 'rgba(255,255,255,0.05)',
                    border: i === 0 ? '1px solid rgba(252,235,48,0.30)' : zone.href ? '1px solid rgba(252,235,48,0.25)' : '1px solid rgba(255,255,255,0.09)',
                    fontFamily: inter.style.fontFamily,
                    fontSize: '13px',
                    fontWeight: i === 0 || zone.href ? 600 : 400,
                    color: i === 0 ? '#fceb30' : zone.href ? 'rgba(252,235,48,0.75)' : 'rgba(255,255,255,0.55)',
                    textDecoration: 'none',
                    transition: zone.href ? 'background 0.2s, color 0.2s' : undefined,
                  };
                  const inner = (
                    <>
                      <MapPin size={11} weight="bold" />
                      {zone.label}
                      {zone.href && <span style={{ fontSize: '10px', opacity: 0.7 }}>→</span>}
                    </>
                  );
                  return zone.href ? (
                    <Link key={i} href={zone.href} className="flex items-center gap-2 rounded-full px-4 py-2" style={sharedStyle}>
                      {inner}
                    </Link>
                  ) : (
                    <span key={i} className="flex items-center gap-2 rounded-full px-4 py-2" style={sharedStyle}>
                      {inner}
                    </span>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Séparateur */}
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px w-full" style={{ background: 'rgba(255,255,255,0.07)' }} />
        </div>

        {/* ------------------------------------------
            FAQ
        ------------------------------------------ */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
            <ScrollReveal>
              <p
                className="mb-4 uppercase tracking-widest"
                style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '13px', color: '#fceb30', textShadow: '0 0 12px rgba(252,235,48,0.6)' }}
              >
                Questions fréquentes
              </p>
              <h2
                className="mb-14 text-white"
                style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(26px, 3.5vw, 42px)', lineHeight: '1.15' }}
              >
                Ce que les pros de l&apos;habitat à Marseille me demandent souvent
              </h2>
            </ScrollReveal>

            <div className="space-y-0 divide-y" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
              {[
                {
                  q: 'Pourquoi le SEO local est-il particulièrement important à Marseille ?',
                  a: "Marseille est la deuxième ville de France : le volume de recherches locales y est sans commune mesure avec une ville moyenne. Des milliers de personnes tapent chaque mois \"cuisiniste Marseille\", \"menuisier 13008\" ou \"décorateur Marseille Nord\" sur Google. La concurrence est réelle, mais la demande est immense. Un professionnel de l'habitat bien positionné à Marseille peut générer des dizaines de demandes de devis qualifiées chaque mois sans dépenser en publicité.",
                },
                {
                  q: 'Comment fonctionne la recherche locale par arrondissement à Marseille ?',
                  a: "Les habitants de Marseille cherchent souvent par arrondissement : \"cuisiniste 13008\", \"artisan Marseille 13e\", \"décorateur intérieur Marseille 6\". Google utilise la localisation de l'internaute et la zone de chalandise de votre fiche pour décider quoi afficher. Si votre fiche ne couvre pas clairement vos arrondissements d'intervention, vous passez à côté d'une part importante des recherches pertinentes. L'optimisation SEO local à Marseille passe par une stratégie fine à l'échelle des secteurs.",
                },
                {
                  q: 'Combien coûte un consultant SEO à Marseille ?',
                  a: "Le marché du SEO à Marseille est hétérogène : des agences à 1 500-3 000 €/mois sur engagement, des freelances généralistes à tarifs variables. Mon positionnement est différent : diagnostic de visibilité locale à 190 €, livré en 5 jours, sans abonnement. Pour aller plus loin avec un accompagnement de 3 mois incluant les optimisations, le Sprint local est à 790 €. Des livrables précis, des actions concrètes, pas de contrat long.",
                },
                {
                  q: 'Quels arrondissements de Marseille sont les plus compétitifs en SEO ?',
                  a: "Les arrondissements avec le plus de compétition SEO sont généralement le 6e, 7e, 8e et 13e, secteurs résidentiels aisés avec forte demande en rénovation. Le 1er et le 2e (Euroméditerranée) sont en développement. Les arrondissements nord (14e, 15e, 16e) sont souvent moins travaillés en SEO local, ce qui représente une opportunité réelle pour les artisans qui y exercent. Le diagnostic évalue précisément la compétition sur votre secteur exact.",
                },
                {
                  q: 'Ma fiche Google existe déjà, ai-je quand même besoin d\'un diagnostic ?',
                  a: "Avoir une fiche, c'est la première étape, pas la dernière. La plupart des professionnels à Marseille ont une fiche, mais très peu l'ont vraiment optimisée. Un diagnostic révèle souvent des catégories mal choisies, une description sans mots-clés, une zone de chalandise mal configurée, des photos insuffisantes. Avoir une fiche existante c'est bien. La faire travailler pour vous, c'est mieux.",
                },
                {
                  q: 'En quoi suis-je différente d\'une agence SEO marseillaise ?',
                  a: "Les agences marseillaises proposent rarement une spécialisation sur les professionnels de l'habitat. Vous obtenez un forfait standardisé, géré par plusieurs interlocuteurs, avec des rapports mensuels chargés de métriques peu actionnables. Je suis exclusivement spécialisée dans le SEO local des pros de l'habitat : je connais vos clients, vos requêtes cibles et les leviers qui fonctionnent réellement pour votre secteur. C'est moi qui fais l'analyse et rédige le rapport, personne d'autre.",
                },
                {
                  q: 'Peut-on apparaître dans le pack local Google à Marseille sans site web ?',
                  a: "Oui. Google peut afficher votre fiche Google Business Profile dans le pack local sans site associé, si la fiche est complète et active. Un site renforce cependant votre positionnement sur les requêtes longue traîne (\"menuisier porte sur mesure Marseille 8e\" par exemple). Si vous n'avez pas de site, le diagnostic indique si c'est un frein réel pour vos objectifs ou si la fiche seule peut suffire à générer des contacts.",
                },
                {
                  q: 'J\'interviens dans plusieurs arrondissements, comment l\'indiquer sur Google ?',
                  a: "Google Business Profile permet de définir une zone de chalandise indépendante de votre adresse. Pour un artisan couvrant plusieurs arrondissements à Marseille, il faut configurer cette zone précisément, utiliser des mots-clés géolocalisés dans la description et créer du contenu local sur votre site. C'est une des analyses clés du diagnostic : s'assurer que Google sait exactement où vous pouvez être sollicité.",
                },
              ].map((faq, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <div className="py-7">
                    <h3
                      className="mb-3 text-white"
                      style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '17px', lineHeight: '1.35' }}
                    >
                      {faq.q}
                    </h3>
                    <p style={{ fontFamily: inter.style.fontFamily, fontSize: '15px', lineHeight: '26px', color: 'rgba(255,255,255,0.55)' }}>
                      {faq.a}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Séparateur */}
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px w-full" style={{ background: 'rgba(255,255,255,0.07)' }} />
        </div>

        {/* ------------------------------------------
            CTA FINAL
        ------------------------------------------ */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-7xl px-6 py-24 text-center md:py-32">
            <ScrollReveal>
              <p
                className="mb-4 uppercase tracking-widest"
                style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '13px', color: '#fceb30', textShadow: '0 0 12px rgba(252,235,48,0.6)' }}
              >
                Prochaine étape
              </p>
              <h2
                className="mb-6 text-white"
                style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 54px)', lineHeight: '1.1' }}
              >
                Marseille est une ville immense.{' '}
                <span style={{ color: '#fceb30', textShadow: '0 0 18px rgba(252,235,48,0.55), 0 0 48px rgba(252,235,48,0.25)' }}>
                  Vos clients sont déjà en train de chercher.
                </span>
              </h2>
              <p
                className="mx-auto mb-10 max-w-[52ch] text-white/55"
                style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '27px' }}
              >
                Un diagnostic complet de votre présence Google à Marseille, livré sous 5 jours.
                190 €. Sans engagement. Vous repartez avec un plan d&apos;action clair.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/offre"
                  className="inline-flex items-center gap-2 rounded-full bg-[#fceb30] px-8 py-4 font-bold text-[#264d8c] transition-all duration-300 hover:brightness-105 active:scale-[0.98]"
                  style={{ fontFamily: inter.style.fontFamily, fontSize: '15px' }}
                >
                  Réserver mon diagnostic · 190 €
                  <ArrowRight size={15} weight="bold" />
                </Link>
                <Link
                  href="/offre"
                  className="inline-flex items-center gap-2 text-white/50 transition-colors hover:text-white/80"
                  style={{ fontFamily: inter.style.fontFamily, fontSize: '14px' }}
                >
                  Voir aussi le Sprint local 3 mois
                  <ArrowRight size={13} weight="bold" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </main>
    </>
  );
}
