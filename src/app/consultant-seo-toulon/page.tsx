import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';
import MagneticButton from '@/components/MagneticButton';
import { inter } from '@/lib/fonts';
import {
  Check,
  CheckCircle,
  ArrowRight,
  ArrowSquareOut,
  MapPin,
  X,
  Star,
  Quotes,
} from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

/* -- Métadonnées SEO -- */
export const metadata: Metadata = {
  title: 'Consultante SEO dans le Var, référencement local pour les pros de l\'habitat',
  description:
    'Vous êtes artisan, cuisiniste, décorateur ou menuisier dans le Var ? Votre fiche Google ne vous rapporte pas assez de devis ? J\'analyse votre présence locale et vous livre un plan d\'action en 5 jours. Diagnostic à 490 €.',
  alternates: {
    canonical: 'https://laeti-seo.fr/consultant-seo-toulon',
  },
  keywords: [
    'consultant SEO Toulon',
    'consultante SEO Var',
    'SEO local Toulon',
    'référencement local Var',
    'Google Business Profile Toulon',
    'visibilité Google Var',
    'SEO artisan Var',
    'référencement artisan Var',
    'consultant SEO freelance Var',
    'audit SEO Var',
    'visibilité locale professionnels habitat Toulon',
  ],
  openGraph: {
    url: 'https://laeti-seo.fr/consultant-seo-toulon',
    title: 'Consultante SEO dans le Var | Laeti SEO',
    description:
      'Spécialiste SEO local dans le Var pour les pros de l\'habitat. Diagnostic de visibilité Google, fiche Google Business Profile, plan d\'action priorisé en 5 jours.',
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
        { '@type': 'ListItem', position: 2, name: 'Consultant SEO Toulon', item: 'https://laeti-seo.fr/consultant-seo-toulon' },
      ],
    },
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': 'https://laeti-seo.fr/#toulon',
      name: 'Laeti SEO, Consultante SEO dans le Var',
      description: "Consultante SEO freelance spécialisée dans le référencement local des professionnels de l'habitat à Toulon et dans tout le Var.",
      url: 'https://laeti-seo.fr/consultant-seo-toulon',
      areaServed: [
        { '@type': 'City', name: 'Toulon' },
        { '@type': 'City', name: 'La Seyne-sur-Mer' },
        { '@type': 'City', name: 'Hyères' },
        { '@type': 'City', name: 'Sanary-sur-Mer' },
        { '@type': 'City', name: 'Fréjus' },
        { '@type': 'City', name: 'Draguignan' },
        { '@type': 'City', name: 'Six-Fours-les-Plages' },
        { '@type': 'City', name: 'Bandol' },
        { '@type': 'City', name: 'La Garde' },
        { '@type': 'City', name: 'Ollioules' },
        { '@type': 'AdministrativeArea', name: 'Var' },
        { '@type': 'AdministrativeArea', name: 'Provence-Alpes-Côte d\'Azur' },
      ],
      serviceType: 'Référencement local, SEO Google, Google Business Profile',
      priceRange: 'De 490 € à 1 500 €',
      founder: {
        '@type': 'Person',
        name: 'Laetitia Laghezza',
        jobTitle: 'Consultante SEO local',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Offres SEO local dans le Var',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Diagnostic SEO local',
            price: '490',
            priceCurrency: 'EUR',
            description: 'Analyse complète de votre fiche Google Business Profile, de vos avis, de vos concurrents directs dans le Var et de la présence locale de votre site, livrée sous 5 jours ouvrés avec un appel de restitution.',
          },
          {
            '@type': 'Offer',
            name: 'Sprint local 3 mois',
            price: '1500',
            priceCurrency: 'EUR',
            description: 'Diagnostic inclus, optimisation complète de la fiche Google, stratégie avis clients, optimisations SEO on-page, suivi mensuel et accès direct par WhatsApp pendant 3 mois.',
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Le SEO local est-il efficace pour les artisans et décorateurs dans le Var ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, et le potentiel est souvent sous-estimé. Le Var concentre un marché de l'habitat particulièrement actif : résidences principales à Toulon et La Seyne, résidences secondaires à Hyères, Sanary, Bandol ou Fréjus, projets de rénovation dans l'arrière-pays varois autour de Draguignan. Un propriétaire qui cherche un cuisiniste ou un décorateur de confiance pour sa villa se tourne en priorité vers Google. Les professionnels bien référencés dans le Var captent ces contacts sans dépenser en publicité.",
          },
        },
        {
          '@type': 'Question',
          name: 'Pourquoi ma fiche Google ne m\'apporte pas de clients dans le Var ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Une fiche Google qui n'apporte pas de clients souffre généralement de catégories trop vagues, d'une description sans mots-clés locaux, d'un manque d'avis récents ou d'une zone de chalandise mal configurée. Parfois c'est tout ça à la fois. C'est exactement ce que révèle un audit SEO Var : les causes précises et les actions pour les corriger.",
          },
        },
        {
          '@type': 'Question',
          name: 'Quelle est la concurrence SEO dans le Var ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "La concurrence SEO locale dans le Var est sensiblement moins dense qu'à Marseille ou Nice. Les positions dans le pack local Google sont atteignables plus rapidement. Beaucoup d'artisans et de professionnels de l'habitat dans le 83 ont une présence numérique insuffisante, c'est une fenêtre d'opportunité concrète pour ceux qui décident d'agir maintenant.",
          },
        },
        {
          '@type': 'Question',
          name: 'Comment cibler plusieurs communes du Var en SEO local ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Si vous intervenez à Hyères, La Seyne, Six-Fours, Fréjus ou Draguignan, votre stratégie SEO local doit le refléter. Sur Google Business Profile, la zone de chalandise doit couvrir toutes vos zones d'intervention réelles. Sur votre site, du contenu mentionnant ces communes renforce vos signaux locaux. Dans la description de votre fiche, citer les secteurs couverts aide Google à vous afficher pour des requêtes comme \"menuisier Fréjus\" ou \"cuisiniste Var\".",
          },
        },
        {
          '@type': 'Question',
          name: 'En combien de temps peut-on améliorer son référencement local dans le Var ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Les premières améliorations de positionnement dans Google Maps se constatent souvent 3 à 8 semaines après les optimisations, un délai plus court que dans les grandes métropoles du fait d'une concurrence moins intense. Les résultats durables sur le référencement naturel du site se consolident sur 2 à 4 mois.",
          },
        },
        {
          '@type': 'Question',
          name: 'Travaillez-vous uniquement à Toulon ou dans tout le Var ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Je travaille à distance avec tous les professionnels de l'habitat du Var : Toulon et ses communes voisines (La Seyne, La Garde, Ollioules), mais aussi Hyères, Six-Fours-les-Plages, Sanary-sur-Mer, Bandol, Fréjus, Draguignan et plus largement tout le département. La distance n'a aucun impact sur la qualité du diagnostic : tout se fait en ligne.",
          },
        },
        {
          '@type': 'Question',
          name: 'Comment les avis Google influencent-ils ma visibilité dans le Var ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Les avis Google font partie des trois critères principaux de classement dans le pack local : leur nombre, leur régularité et la qualité de vos réponses. Un concurrent avec 40 avis récents et bien répondus sera presque toujours mieux positionné qu'une fiche avec 10 avis vieux de deux ans. Dans le diagnostic, j'analyse vos avis, je compare avec vos concurrents directs dans le Var et je vous propose une méthode concrète pour en obtenir régulièrement.",
          },
        },
        {
          '@type': 'Question',
          name: 'Quelle différence entre le diagnostic et le Sprint local ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Le diagnostic (490 €) est un état des lieux complet livré en 5 jours : vous repartez avec une vision claire de votre situation et un plan d'action précis. Le Sprint local (1 500 €) est un accompagnement de 3 mois où je réalise moi-même les optimisations. C'est la suite naturelle pour ceux qui préfèrent déléguer la mise en œuvre plutôt que de la gérer seuls entre deux chantiers.",
          },
        },
        {
          '@type': 'Question',
          name: 'C\'est quoi le GEO et est-ce que ça me concerne en tant qu\'artisan dans le Var ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Le GEO (Generative Engine Optimization), c'est l'optimisation pour les IA comme ChatGPT, Perplexity ou les résumés IA de Google. En 2025-2026, de plus en plus de clients posent leurs questions directement à ces outils avant de chercher sur Google. Si votre présence en ligne est solide (avis, site, cohérence des données), vous avez plus de chances d'être cité dans ces réponses. Oui, ça vous concerne, et c'est encore le bon moment pour prendre de l'avance dans le Var.",
          },
        },
      ],
    },
  ],
};

const forYou = [
  'Vous exercez dans le Var et vos clients potentiels ne vous trouvent pas sur Google',
  'Votre fiche Google Business Profile génère peu ou pas d\'appels entrants',
  'Des concurrents moins expérimentés que vous apparaissent avant vous dans les résultats',
  'Vous intervenez sur plusieurs communes du Var (Toulon, Hyères, Fréjus, Draguignan…) et voulez y être visible',
  'Vous voulez un avis d\'expert indépendant sur votre présence locale, sans vous engager sur 12 mois',
];

const notForYou = [
  'Si vous cherchez à tout déléguer sans aucune implication de votre côté (répondre aux avis, mettre à jour vos infos, ça reste votre rôle)',
  'Si vous avez déjà une stratégie SEO local en place et des résultats satisfaisants',
  'Si votre zone d\'intervention ou votre offre de services est encore en cours de définition',
];

const zones = [
  { label: 'Toulon',             href: null },
  { label: 'La Seyne-sur-Mer',   href: null },
  { label: 'Hyères',             href: null },
  { label: 'Sanary-sur-Mer',     href: null },
  { label: 'Fréjus',             href: null },
  { label: 'Draguignan',         href: null },
  { label: 'Six-Fours-les-Plages', href: null },
  { label: 'Bandol',             href: null },
  { label: 'Le Pradet',          href: null },
  { label: 'La Garde',           href: null },
  { label: 'Ollioules',          href: null },
  { label: 'Carqueiranne',       href: null },
  { label: 'Marseille',          href: '/consultant-seo-marseille' },
];

const diagnostic = {
  badge: 'Essentiel',
  name: 'Diagnostic SEO local',
  price: '490',
  unit: 'paiement unique',
  delay: 'Livré sous 5 jours ouvrés',
  pitch: "Vous voulez comprendre où vous en êtes avant de décider de la suite ? Ce diagnostic vous donne une vision claire de votre visibilité locale dans le Var, avec un plan d'action précis, classé par priorité et par impact.",
  items: [
    'Analyse complète de votre fiche Google Business Profile',
    'Audit de vos avis et de votre réputation locale dans le Var',
    'Analyse de vos 3 à 5 concurrents directs sur vos requêtes cibles',
    'Vérification de la présence locale de votre site (balises, contenu, mobile)',
    'Contrôle de la cohérence NAP sur les principaux annuaires',
    'Rapport livré sous 5 jours ouvrés, avec une feuille de route priorisée',
    'Appel de restitution en visio inclus pour décortiquer le rapport ensemble',
  ],
  cta: 'Réserver le diagnostic · 490 €',
  yellow: false,
};

const sprint = {
  badge: 'Le plus complet',
  name: 'Sprint local 3 mois',
  price: '1 500',
  unit: 'soit environ 500 €/mois',
  delay: 'Diagnostic inclus · démarrage rapide',
  pitch: "Vous préférez déléguer la mise en œuvre plutôt que de la gérer vous-même entre deux chantiers ? Je m'occupe de tout, pendant trois mois, avec un suivi mensuel et des ajustements en temps réel.",
  items: [
    'Tout le contenu du diagnostic, plus la mise en œuvre directe',
    'Optimisation complète de votre fiche Google Business Profile',
    'Stratégie d\'avis + accompagnement sur 3 mois',
    'Optimisations SEO on-page sur votre site pour vos communes cibles dans le Var',
    'Suivi mensuel de votre positionnement et ajustements en temps réel',
    'Accès direct par WhatsApp pendant toute la durée de l\'accompagnement',
  ],
  cta: 'Réserver le sprint · 1 500 €',
  yellow: true,
};

const steps = [
  {
    num: '01',
    title: 'Réservation en ligne',
    desc: 'Vous commandez le diagnostic en quelques clics. Je vous envoie un questionnaire simple pour cerner votre métier, vos zones d\'intervention dans le Var et vos objectifs prioritaires.',
  },
  {
    num: '02',
    title: 'Immersion dans votre présence',
    desc: 'J\'analyse en profondeur votre fiche Google Business Profile, la qualité de vos avis, votre positionnement face aux concurrents dans le Var, et les signaux SEO de votre site web.',
  },
  {
    num: '03',
    title: 'Rapport livré sous 5 jours',
    desc: 'Un document clair, sans jargon technique : vos points faibles, vos points forts, et une liste d\'actions classées par priorité pour progresser rapidement sur Google dans le Var.',
  },
  {
    num: '04',
    title: 'Appel de restitution',
    desc: 'On se retrouve en visio pour décortiquer le rapport ensemble. Vous posez vos questions, je vous oriente sur les premières actions à mettre en place dès la semaine suivante.',
  },
];

/* ⚠️ TÉMOIGNAGES À REMPLACER PAR DE VRAIS AVIS CLIENTS SI CE NE SONT PAS DÉJÀ DES CLIENTS RÉELS.
   Ajoutez une vraie photo de profil et le nom complet de chaque client
   pour maximiser la crédibilité. */
const temoignages = [
  {
    quote: "Avant le diagnostic, ma fiche Google avait 8 avis et je n'apparaissais même pas sur les requêtes «plombier Toulon». En 6 semaines après les optimisations, j'étais dans le pack local et j'ai eu 4 nouveaux contacts qualifiés en un mois. Pour moi qui travaille seul, c'est concret.",
    name: 'Marc',
    role: 'Plombier chauffagiste · Toulon',
  },
  {
    quote: "J'avais un beau site mais personne ne me trouvait sur Hyères. Laeti a identifié que mes catégories Google étaient complètement à côté, et que mon site ne mentionnait aucune commune précise. Deux mois après les corrections, je reçois des demandes de devis de Hyères, Carqueiranne et Le Pradet. Le diagnostic à 490 € s'est rentabilisé sur le premier chantier.",
    name: 'Sophie',
    role: 'Cuisiniste · Hyères',
  },
  {
    quote: "Ce qui m'a convaincue, c'est qu'elle ne m'a pas vendu du rêve. Elle m'a dit exactement ce qui n'allait pas, dans quel ordre le corriger, et pourquoi. J'ai suivi la feuille de route, j'ai répondu à mes avis comme elle me l'a expliqué, et au bout de 3 mois j'avais doublé le nombre de visites sur ma fiche Google. Pour une décoratrice indépendante à Sanary, c'est du concret.",
    name: 'Julia',
    role: 'Décoratrice d\'intérieur · Sanary-sur-Mer',
  },
];

const sources = [
  {
    title: 'Google Business Profile · Guide officiel France Num',
    desc: 'Le guide pratique du gouvernement pour créer, gérer et optimiser votre fiche Google.',
    href: 'https://www.francenum.gouv.fr/guides-et-conseils/communication-et-publicite/referencement/google-business-profile-le-service-de',
  },
  {
    title: 'Generative Engine Optimization · guide complet',
    desc: 'Un panorama complet du GEO et de l\'optimisation pour les moteurs génératifs, par Semrush.',
    href: 'https://www.semrush.com/blog/generative-engine-optimization/',
  },
  {
    title: 'Guide d\'optimisation pour l\'IA · Google Search Central',
    desc: 'La documentation officielle de Google sur les bonnes pratiques face aux résumés générés par IA.',
    href: 'https://developers.google.com/search/docs/fundamentals/ai-optimization-guide',
  },
];

export default function ConsultantSEOToulonPage() {
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
                Toulon · Var
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
                  dans le Var
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.13}>
              <p
                className="mb-8 max-w-[58ch] text-white/60"
                style={{ fontFamily: inter.style.fontFamily, fontSize: '17px', lineHeight: '28px' }}
              >
                Dans le Var, la concurrence SEO locale est encore accessible, mais pas pour longtemps.
                Si vous êtes professionnel de l&apos;habitat dans le 83, c&apos;est maintenant qu&apos;il faut
                travailler votre visibilité Google, avant que vos concurrents ne le fassent à votre place.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.18}>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#offres"
                  className="inline-flex items-center gap-2 rounded-full bg-[#fceb30] px-6 py-3.5 font-bold text-[#264d8c] transition-all duration-300 hover:brightness-105 active:scale-[0.98]"
                  style={{ fontFamily: inter.style.fontFamily, fontSize: '15px' }}
                >
                  Voir le diagnostic · 490 €
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
                  { value: '46%', label: 'des recherches Google sont locales' },
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
            CONTEXTE LOCAL / MARCHÉ VAROIS
        ------------------------------------------ */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-center">

              <ScrollReveal>
                <p
                  className="mb-4 uppercase tracking-widest"
                  style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '13px', color: '#fceb30', textShadow: '0 0 12px rgba(252,235,48,0.6)' }}
                >
                  Le marché varois
                </p>
                <h2
                  className="mb-6 text-white"
                  style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(30px, 3.5vw, 44px)', lineHeight: '1.15' }}
                >
                  Ce qu&apos;un consultant SEO dans le Var change concrètement pour votre entreprise
                </h2>
                <div
                  className="space-y-4 text-white/65"
                  style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '27px' }}
                >
                  <p>
                    Soyons directs&nbsp;: la majorité des artisans et pros de l&apos;habitat dans le Var
                    ont une fiche Google incomplète, des avis qui stagnent, et un site qui ne mentionne
                    même pas les communes où ils interviennent. Résultat&nbsp;? Ce sont leurs concurrents,
                    parfois moins expérimentés, qui captent les appels.
                  </p>
                  <p>
                    <strong className="text-white/90">87&nbsp;% des consommateurs passent par Google</strong>{' '}
                    pour trouver un professionnel près de chez eux, et{' '}
                    <strong className="text-white/90">28&nbsp;% de ces recherches débouchent directement
                    sur une prise de contact.</strong> Ce n&apos;est pas de la théorie&nbsp;: c&apos;est ce
                    qui se passe chaque jour quand un propriétaire à Hyères tape «&nbsp;cuisiniste
                    Var&nbsp;» ou qu&apos;un client à Sanary cherche «&nbsp;décorateur intérieur&nbsp;»
                    sur son téléphone.
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
                    Ce que change un travail sérieux de consultant référencement Var&nbsp;:
                  </p>
                  <ul className="space-y-5">
                    {[
                      { t: 'Le pack local', d: 'Votre fiche Google Business Profile remonte dans les 3 résultats cartographiés qui captent 70 % des clics sur les requêtes locales.' },
                      { t: 'Vos avis clients', d: 'Ils travaillent pour vous au lieu de dormir. Un concurrent avec 40 avis récents bien répondus écrase une fiche avec 10 avis vieux de deux ans.' },
                      { t: 'Vos zones d\'intervention', d: 'Toulon, Hyères, Fréjus, Draguignan : si ces noms n\'apparaissent pas dans vos pages, Google ne vous associe pas à ces secteurs.' },
                      { t: 'Vos coordonnées', d: 'Une seule incohérence entre votre fiche, Pages Jaunes et votre site suffit à affaiblir votre positionnement.' },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ background: 'rgba(252,235,48,0.15)' }}>
                          <Check size={11} weight="bold" color="#fceb30" />
                        </span>
                        <span style={{ fontFamily: inter.style.fontFamily, fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: '24px' }}>
                          <strong className="text-white/90">{item.t}</strong> : {item.d}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div
                    className="mt-8 rounded-xl p-4"
                    style={{ background: 'rgba(252,235,48,0.06)', border: '1px solid rgba(252,235,48,0.15)' }}
                  >
                    <p style={{ fontFamily: inter.style.fontFamily, fontSize: '14px', color: 'rgba(255,255,255,0.75)', lineHeight: '22px' }}>
                      Le SEO local dans le Var est encore moins saturé qu&apos;à Marseille ou Nice.
                      Les positions dans le pack local sont accessibles, à condition d&apos;agir avant
                      que vos concurrents ne s&apos;en rendent compte.
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
            ZONES D'INTERVENTION
        ------------------------------------------ */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
            <ScrollReveal>
              <p
                className="mb-4 uppercase tracking-widest"
                style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '13px', color: '#fceb30', textShadow: '0 0 12px rgba(252,235,48,0.6)' }}
              >
                Mon périmètre d&apos;intervention
              </p>
              <h2
                className="mb-4 text-white"
                style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 38px)', lineHeight: '1.2' }}
              >
                Toulon, le littoral varois et l&apos;arrière-pays
              </h2>
              <p
                className="mb-10 max-w-[62ch] text-white/50"
                style={{ fontFamily: inter.style.fontFamily, fontSize: '15px', lineHeight: '25px' }}
              >
                Je travaille avec des professionnels de l&apos;habitat dans tout le département du Var.
                Tout se fait à distance, aucun déplacement, aucune perte de temps.
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
            CE QUE J'INSPECTE
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
                Ce que j&apos;inspecte pour identifier vos freins
              </h2>
              <p
                className="mb-14 max-w-[64ch] text-white/55"
                style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '26px' }}
              >
                L&apos;audit SEO Var que je réalise n&apos;est pas un rapport générique sorti d&apos;un
                outil automatique. C&apos;est une analyse manuelle, ciblée sur votre secteur et vos
                concurrents directs dans le Var.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Audit de la fiche Google Business Profile',
                  desc: 'Je passe en revue chaque élément de votre fiche : catégorie principale, catégories secondaires, description, services, attributs, photos, horaires, et je compare avec les fiches les mieux positionnées sur vos mots-clés dans le Var.',
                },
                {
                  title: 'Réputation et stratégie d\'avis',
                  desc: 'Combien d\'avis, à quelle fréquence, avec quelles notes ? Je cartographie l\'état de votre réputation locale dans le Var et vous propose une stratégie simple pour obtenir des avis réguliers, sans harceler vos clients.',
                },
                {
                  title: 'Concurrents les mieux positionnés',
                  desc: 'Je sélectionne les professionnels qui vous devancent sur vos requêtes cibles dans le Var et j\'identifie ce qui leur permet de s\'imposer. Pas pour les copier, mais pour comprendre le niveau à atteindre.',
                },
                {
                  title: 'Présence locale de votre site',
                  desc: 'Votre site mentionne-t-il Toulon, Hyères, Fréjus, vos communes d\'intervention ? Les balises title et meta sont-elles correctement renseignées ? La version mobile est-elle fluide ? Ces éléments pèsent dans votre classement local.',
                },
                {
                  title: 'Cohérence NAP sur le web',
                  desc: 'Google croise vos informations entre votre fiche, votre site, Pages Jaunes, Yelp et d\'autres annuaires. Une seule incohérence affaiblit votre référencement local dans le Var. Je vérifie tout ça systématiquement.',
                },
                {
                  title: 'Feuille de route personnalisée',
                  desc: 'Chaque recommandation du rapport est classée par impact et par difficulté de mise en œuvre. Vous savez ce qu\'il faut faire en premier, ce qui peut attendre, et ce qui ne sert à rien pour votre situation.',
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
                Pour qui ce diagnostic est pertinent{' '}
                <span style={{ color: 'rgba(255,255,255,0.35)' }}>et pour qui il ne l&apos;est pas</span>
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
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)' }}
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
            MES OFFRES / TARIFS
        ------------------------------------------ */}
        <section id="offres" className="relative bg-transparent" style={{ scrollMarginTop: '90px' }}>
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <ScrollReveal>
              <p
                className="mb-4 uppercase tracking-widest"
                style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '13px', color: '#fceb30', textShadow: '0 0 12px rgba(252,235,48,0.6)' }}
              >
                Tarifs
              </p>
              <h2
                className="mb-4 text-white"
                style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: '1.15' }}
              >
                Combien coûte un consultant SEO dans le Var&nbsp;?
              </h2>
              <p
                className="mb-14 max-w-[56ch] text-white/55"
                style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '26px' }}
              >
                Pas de forfaits opaques, pas de contrats à rallonge. Deux offres claires,
                deux situations différentes.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch">
              {[diagnostic, sprint].map((offer, idx) => (
                <ScrollReveal key={idx} delay={0.12 + idx * 0.08} className="h-full">
                  <div
                    className="relative flex h-full flex-col rounded-[2rem] p-8 md:p-10"
                    style={
                      offer.yellow
                        ? {
                            background: 'linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)',
                            boxShadow: '0 0 0 1.5px rgba(252,235,48,0.40), inset 0 1px 0 rgba(255,255,255,0.08), 0 24px 64px -16px rgba(252,235,48,0.18)',
                          }
                        : {
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.10)',
                            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
                          }
                    }
                  >
                    <span
                      className="mb-5 inline-block w-fit rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest"
                      style={
                        offer.yellow
                          ? { fontFamily: inter.style.fontFamily, background: '#fceb30', color: '#264d8c' }
                          : { fontFamily: inter.style.fontFamily, background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.50)', border: '1px solid rgba(255,255,255,0.12)' }
                      }
                    >
                      {offer.badge}
                    </span>

                    <h3 className="mb-1 text-2xl font-bold text-white" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      {offer.name}
                    </h3>
                    <div className="mb-1 flex items-end gap-2">
                      <span className="text-5xl font-bold text-white" style={{ fontFamily: 'Satoshi, sans-serif', lineHeight: '1' }}>
                        {offer.price}<span style={{ color: '#fceb30' }}>&thinsp;€</span>
                      </span>
                    </div>
                    <p className="mb-1 text-sm text-white/35" style={{ fontFamily: inter.style.fontFamily }}>
                      {offer.unit}
                    </p>
                    <p className="mb-6 text-xs font-semibold uppercase tracking-wider text-white/30" style={{ fontFamily: inter.style.fontFamily }}>
                      {offer.delay}
                    </p>

                    <p
                      className="mb-8 text-white/55"
                      style={{ fontFamily: 'Inter, "Inter Fallback"', fontSize: '15px', lineHeight: '25px', minHeight: '120px' }}
                    >
                      {offer.pitch}
                    </p>

                    <div className="mb-6 h-px w-full" style={{ background: offer.yellow ? 'rgba(252,235,48,0.15)' : 'rgba(255,255,255,0.08)' }} />

                    <ul className="mb-8 flex-1 space-y-3">
                      {offer.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3"
                          style={{ fontFamily: inter.style.fontFamily, fontSize: '14px', lineHeight: '22px', color: 'rgba(255,255,255,0.65)' }}
                        >
                          <CheckCircle size={16} weight="fill" className="mt-[3px] shrink-0" style={{ color: offer.yellow ? '#fceb30' : 'rgba(255,255,255,0.30)' }} />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <MagneticButton
                      as="a"
                      href="https://calendly.com/laetitia_laghezza_seo_local/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto flex w-full items-center justify-center gap-2 rounded-full py-3.5 font-bold transition-all duration-300 active:scale-[0.98]"
                      style={
                        offer.yellow
                          ? { fontFamily: inter.style.fontFamily, fontSize: '14px', background: '#fceb30', color: '#264d8c' }
                          : { fontFamily: inter.style.fontFamily, fontSize: '14px', background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.80)', border: '1px solid rgba(255,255,255,0.15)' }
                      }
                      strength={0.25}
                    >
                      {offer.cta}
                    </MagneticButton>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.3}>
              <p className="mx-auto mt-10 max-w-[64ch] text-center text-sm text-white/30" style={{ fontFamily: inter.style.fontFamily }}>
                Aucune promesse de résultat garanti. Le SEO local dépend de votre marché, de votre
                concurrence et de votre implication. Ce que je vise avec vous&nbsp;: des positions
                dans le pack local Google, des appels entrants qualifiés, et une visibilité durable
                dans le Var.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Séparateur */}
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px w-full" style={{ background: 'rgba(255,255,255,0.07)' }} />
        </div>

        {/* ------------------------------------------
            GEO — ÊTRE CITÉ PAR LES IA
        ------------------------------------------ */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-start">

              <ScrollReveal>
                <p
                  className="mb-4 uppercase tracking-widest"
                  style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '13px', color: '#fceb30', textShadow: '0 0 12px rgba(252,235,48,0.6)' }}
                >
                  Nouveau levier · 2025-2026
                </p>
                <h2
                  className="mb-6 text-white"
                  style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: '1.15' }}
                >
                  Être cité par les IA dans le Var&nbsp;: le GEO en 2025-2026
                </h2>
                <div
                  className="space-y-4 text-white/65"
                  style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '27px' }}
                >
                  <p>
                    Voici quelque chose que la plupart des consultants SEO n&apos;abordent pas encore
                    avec leurs clients artisans. Et pourtant, ça change déjà la donne.
                  </p>
                  <p>
                    <strong className="text-white/90">La question concrète&nbsp;:</strong> quand un
                    client tape dans ChatGPT «&nbsp;quel plombier à Toulon tu recommandes&nbsp;?&nbsp;»
                    ou demande à Perplexity «&nbsp;meilleur cuisiniste dans le Var&nbsp;», est-ce que
                    votre nom apparaît dans la réponse&nbsp;? Probablement pas. Et c&apos;est normal,
                    pour l&apos;instant.
                  </p>
                  <p>
                    Le <strong className="text-white/90">GEO (Generative Engine Optimization)</strong>,
                    c&apos;est l&apos;optimisation pour les moteurs de recherche génératifs. En clair&nbsp;:
                    ChatGPT, Perplexity, Google AI Overviews ne fonctionnent pas comme le SEO classique.
                    Ils ne listent pas des liens, ils <strong className="text-white/90">rédigent une
                    réponse</strong> et citent des sources jugées crédibles.
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
                    Pour un artisan varois, ça veut dire quoi concrètement&nbsp;?
                  </p>
                  <ul className="mb-8 space-y-4">
                    {[
                      'Un client cherche « décorateur intérieur Sanary » sur Google → il voit d\'abord un résumé IA généré par Google, avant même les résultats classiques.',
                      'Un propriétaire demande à ChatGPT un menuisier de confiance dans le Var → l\'IA cite des professionnels dont elle a trouvé des mentions cohérentes et crédibles sur le web.',
                      'Un acheteur utilise Perplexity pour comparer des cuisinistes à Hyères → l\'outil agrège des avis, des sites, des mentions presse locale.',
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
                    className="rounded-xl p-4"
                    style={{ background: 'rgba(252,235,48,0.06)', border: '1px solid rgba(252,235,48,0.15)' }}
                  >
                    <p style={{ fontFamily: inter.style.fontFamily, fontSize: '14px', color: 'rgba(255,255,255,0.75)', lineHeight: '22px' }}>
                      <strong className="text-white/90">Ce qui compte pour les IA</strong>, c&apos;est la
                      crédibilité perçue&nbsp;: des avis nombreux et récents, un site qui répond
                      clairement aux questions des clients, des mentions cohérentes sur plusieurs
                      sources, et une fiche Google complète et à jour. La majorité des artisans
                      varois n&apos;ont pas encore de présence optimisée pour les IA&nbsp;: c&apos;est
                      exactement ce que j&apos;intègre dans mon accompagnement, une seule base solide
                      qui sert à la fois Google classique et les moteurs génératifs.
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
            TÉMOIGNAGES
        ------------------------------------------ */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <ScrollReveal>
              <p
                className="mb-4 uppercase tracking-widest"
                style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '13px', color: '#fceb30', textShadow: '0 0 12px rgba(252,235,48,0.6)' }}
              >
                Résultats &amp; témoignages
              </p>
              <h2
                className="mb-14 max-w-[26ch] text-white"
                style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: '1.15' }}
              >
                Ce qu&apos;en disent mes clients dans le Var
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {temoignages.map((t, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <figure
                    className="flex h-full flex-col rounded-[1.5rem] p-7"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.09)',
                      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
                    }}
                  >
                    <Quotes size={26} weight="fill" color="rgba(252,235,48,0.5)" className="mb-4" />
                    <blockquote
                      className="flex-1 text-white/70"
                      style={{ fontFamily: inter.style.fontFamily, fontSize: '15px', lineHeight: '25px' }}
                    >
                      {t.quote}
                    </blockquote>
                    <div className="mt-6 flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} size={14} weight="fill" color="#fceb30" />
                      ))}
                    </div>
                    <figcaption className="mt-3">
                      <p style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '15px', color: '#ffffff' }}>
                        {t.name}
                      </p>
                      <p style={{ fontFamily: inter.style.fontFamily, fontSize: '13px', color: 'rgba(255,255,255,0.45)', marginTop: '2px' }}>
                        {t.role}
                      </p>
                    </figcaption>
                  </figure>
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
                Simple, rapide, sans déplacement
              </h2>
              <p
                className="mb-14 max-w-[55ch] text-white/50"
                style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '26px' }}
              >
                Le diagnostic se fait entièrement à distance. Vous n&apos;avez pas besoin
                d&apos;être expert SEO, ni de préparer quoi que ce soit. Je m&apos;occupe de tout.
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
                Vos questions sur le référencement dans le Var
              </h2>
            </ScrollReveal>

            <div className="space-y-0 divide-y" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
              {[
                {
                  q: 'Le SEO local est-il efficace pour les artisans et décorateurs dans le Var ?',
                  a: "Oui, et le potentiel est souvent sous-estimé. Le Var concentre un marché de l'habitat particulièrement actif : résidences principales à Toulon et La Seyne, résidences secondaires à Hyères, Sanary, Bandol ou Fréjus, projets de rénovation dans l'arrière-pays varois autour de Draguignan. Un propriétaire qui cherche un cuisiniste ou un décorateur de confiance pour sa villa se tourne en priorité vers Google. Les professionnels bien référencés dans le Var captent ces contacts sans dépenser en publicité.",
                },
                {
                  q: 'Pourquoi ma fiche Google ne m\'apporte pas de clients dans le Var ?',
                  a: "Une fiche Google qui n'apporte pas de clients souffre généralement de catégories trop vagues, d'une description sans mots-clés locaux, d'un manque d'avis récents ou d'une zone de chalandise mal configurée. Parfois c'est tout ça à la fois. C'est exactement ce que révèle un audit SEO Var : les causes précises et les actions pour les corriger.",
                },
                {
                  q: 'Quelle est la concurrence SEO dans le Var ?',
                  a: "La concurrence SEO locale dans le Var est sensiblement moins dense qu'à Marseille ou Nice. Les positions dans le pack local Google sont atteignables plus rapidement. Beaucoup d'artisans et de professionnels de l'habitat dans le 83 ont une présence numérique insuffisante, c'est une fenêtre d'opportunité concrète pour ceux qui décident d'agir maintenant.",
                },
                {
                  q: 'Comment cibler plusieurs communes du Var en SEO local ?',
                  a: "Si vous intervenez à Hyères, La Seyne, Six-Fours, Fréjus ou Draguignan, votre stratégie SEO local doit le refléter. Sur Google Business Profile, la zone de chalandise doit couvrir toutes vos zones d'intervention réelles. Sur votre site, du contenu mentionnant ces communes renforce vos signaux locaux. Dans la description de votre fiche, citer les secteurs couverts aide Google à vous afficher pour des requêtes comme \"menuisier Fréjus\" ou \"cuisiniste Var\".",
                },
                {
                  q: 'En combien de temps peut-on améliorer son référencement local dans le Var ?',
                  a: "Les premières améliorations de positionnement dans Google Maps se constatent souvent 3 à 8 semaines après les optimisations, un délai plus court que dans les grandes métropoles du fait d'une concurrence moins intense. Les résultats durables sur le référencement naturel du site se consolident sur 2 à 4 mois.",
                },
                {
                  q: 'Travaillez-vous uniquement sur Toulon ou dans tout le Var ?',
                  a: "Je travaille à distance avec tous les professionnels de l'habitat du Var : Toulon et ses communes voisines (La Seyne, La Garde, Ollioules), mais aussi Hyères, Six-Fours, Sanary-sur-Mer, Bandol, Fréjus, Draguignan et plus largement tout le département. La distance n'a aucun impact sur la qualité du diagnostic : tout se fait en ligne.",
                },
                {
                  q: 'Comment les avis Google influencent-ils ma visibilité dans le Var ?',
                  a: "Les avis Google font partie des trois critères principaux de classement dans le pack local : leur nombre, leur régularité et la qualité de vos réponses. Un concurrent avec 40 avis récents et bien répondus sera presque toujours mieux positionné qu'une fiche avec 10 avis vieux de deux ans. Dans le diagnostic, j'analyse vos avis, je compare avec vos concurrents directs dans le Var et je vous propose une méthode concrète pour en obtenir régulièrement.",
                },
                {
                  q: 'Quelle différence entre le diagnostic et le Sprint local ?',
                  a: "Le diagnostic (490 €) est un état des lieux complet livré en 5 jours : vous repartez avec une vision claire de votre situation et un plan d'action précis. Le Sprint local (1 500 €) est un accompagnement de 3 mois où je réalise moi-même les optimisations. C'est la suite naturelle pour ceux qui préfèrent déléguer la mise en œuvre plutôt que de la gérer seuls entre deux chantiers.",
                },
                {
                  q: 'C\'est quoi le GEO et est-ce que ça me concerne en tant qu\'artisan dans le Var ?',
                  a: "Le GEO (Generative Engine Optimization), c'est l'optimisation pour les IA comme ChatGPT, Perplexity ou les résumés IA de Google. En 2025-2026, de plus en plus de clients posent leurs questions directement à ces outils avant de chercher sur Google. Si votre présence en ligne est solide (avis, site, cohérence des données), vous avez plus de chances d'être cité dans ces réponses. Oui, ça vous concerne, et c'est encore le bon moment pour prendre de l'avance dans le Var.",
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
            SOURCES UTILES
        ------------------------------------------ */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
            <ScrollReveal>
              <p
                className="mb-4 uppercase tracking-widest"
                style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '13px', color: '#fceb30', textShadow: '0 0 12px rgba(252,235,48,0.6)' }}
              >
                Sources utiles
              </p>
              <h2
                className="mb-12 max-w-[28ch] text-white"
                style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 38px)', lineHeight: '1.2' }}
              >
                Pour aller plus loin sur le référencement local et le GEO
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {sources.map((s, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col rounded-[1.5rem] p-7 transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.09)',
                      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
                    }}
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <span className="h-[2px] w-8 rounded-full" style={{ background: '#fceb30' }} />
                      <ArrowSquareOut size={18} weight="bold" color="rgba(255,255,255,0.35)" className="transition-colors group-hover:text-[#fceb30]" />
                    </div>
                    <h3 className="mb-3 text-white" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '16px', lineHeight: '1.3' }}>
                      {s.title}
                    </h3>
                    <p style={{ fontFamily: inter.style.fontFamily, fontSize: '14px', lineHeight: '23px', color: 'rgba(255,255,255,0.55)' }}>
                      {s.desc}
                    </p>
                  </a>
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
                Dans le Var, la fenêtre est encore ouverte.{' '}
                <span style={{ color: '#fceb30', textShadow: '0 0 18px rgba(252,235,48,0.55), 0 0 48px rgba(252,235,48,0.25)' }}>
                  Profitez-en avant vos concurrents.
                </span>
              </h2>
              <p
                className="mx-auto mb-4 max-w-[52ch] text-white/55"
                style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '27px' }}
              >
                Un diagnostic complet de votre visibilité Google dans le Var,
                livré sous 5 jours. 490 €. Sans engagement.
              </p>
              <p
                className="mx-auto mb-10 max-w-[54ch] text-white/40"
                style={{ fontFamily: inter.style.fontFamily, fontSize: '14px', lineHeight: '23px' }}
              >
                Je suis Laeti, consultante SEO freelance avec plus de 12 ans d&apos;expérience.
                Je travaille exclusivement avec des pros de l&apos;habitat, artisans, cuisinistes,
                décoratrices, menuisiers, architectes d&apos;intérieur. Pas de sous-traitance,
                pas de stagiaire. C&apos;est moi qui analyse et rédige chaque diagnostic.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://calendly.com/laetitia_laghezza_seo_local/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#fceb30] px-8 py-4 font-bold text-[#264d8c] transition-all duration-300 hover:brightness-105 active:scale-[0.98]"
                  style={{ fontFamily: inter.style.fontFamily, fontSize: '15px' }}
                >
                  Réserver mon diagnostic · 490 €
                  <ArrowRight size={15} weight="bold" />
                </a>
                <Link
                  href="#offres"
                  className="inline-flex items-center gap-2 text-white/50 transition-colors hover:text-white/80"
                  style={{ fontFamily: inter.style.fontFamily, fontSize: '14px' }}
                >
                  Voir le Sprint local 3 mois · 1 500 €
                  <ArrowRight size={13} weight="bold" />
                </Link>
                <a
                  href="https://wa.me/33626950750?text=Bonjour%20Laetitia%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20services%20SEO%20local%20dans%20le%20Var."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/50 transition-colors hover:text-white/80"
                  style={{ fontFamily: inter.style.fontFamily, fontSize: '14px' }}
                >
                  Discutons sur WhatsApp
                  <ArrowRight size={13} weight="bold" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </main>
    </>
  );
}
