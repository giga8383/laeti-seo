import type { Metadata } from 'next';
import Image from 'next/image';
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
  PaintBrush,
  Buildings,
  Hammer,
} from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

/* ── Métadonnées SEO ── */
export const metadata: Metadata = {
  title: 'Consultant SEO local à Aix-en-Provence, spécialisé décoration & habitat',
  description:
    'Consultante SEO freelance à Aix-en-Provence spécialisée décoration & habitat : décorateurs, architectes d\'intérieur, cuisinistes, artisans. J\'optimise votre fiche Google Business Profile et vos avis. Diagnostic à 190 € livré en 5 jours, sprint local à 790 €.',
  alternates: {
    canonical: 'https://laeti-seo.fr/consultant-seo-aix-en-provence',
  },
  keywords: [
    'consultant SEO Aix-en-Provence',
    'consultante SEO Aix-en-Provence',
    'SEO local Aix-en-Provence',
    'référencement local Aix-en-Provence',
    'référencement naturel Pays d\'Aix',
    'Google Business Profile Aix-en-Provence',
    'SEO décoratrice Aix-en-Provence',
    'Google My Business architecte intérieur',
    'SEO local artisan',
    'avis Google artisan bâtiment',
    'visibilité Google Aix-en-Provence',
    'consultant SEO freelance Provence',
  ],
  openGraph: {
    url: 'https://laeti-seo.fr/consultant-seo-aix-en-provence',
    title: 'Consultant SEO local à Aix-en-Provence | décoration & habitat | Laeti SEO',
    description:
      'Spécialiste SEO local à Aix-en-Provence pour les pros de la décoration et de l\'habitat. Diagnostic à 190 €, sprint local 3 mois à 790 €. Résultats concrets, sans jargon.',
  },
};

/* ── Données structurées JSON-LD ── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://laeti-seo.fr' },
        { '@type': 'ListItem', position: 2, name: 'Consultant SEO Aix-en-Provence', item: 'https://laeti-seo.fr/consultant-seo-aix-en-provence' },
      ],
    },
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': 'https://laeti-seo.fr/#aix',
      name: 'Laeti SEO, Consultante SEO Aix-en-Provence',
      description: "Consultante SEO freelance spécialisée dans le référencement local des professionnels de la décoration et de l'habitat à Aix-en-Provence et dans le Pays d'Aix.",
      url: 'https://laeti-seo.fr/consultant-seo-aix-en-provence',
      email: 'llaghezza83@gmail.com',
      areaServed: [
        { '@type': 'City', name: 'Aix-en-Provence' },
        { '@type': 'City', name: 'Gardanne' },
        { '@type': 'City', name: 'Pertuis' },
        { '@type': 'City', name: 'Trets' },
        { '@type': 'City', name: 'Salon-de-Provence' },
        { '@type': 'City', name: 'Vitrolles' },
        { '@type': 'City', name: 'Aubagne' },
        { '@type': 'City', name: 'Marseille' },
        { '@type': 'AdministrativeArea', name: 'Bouches-du-Rhône' },
        { '@type': 'AdministrativeArea', name: 'Provence-Alpes-Côte d\'Azur' },
      ],
      serviceType: 'Référencement local, SEO Google, Google Business Profile',
      priceRange: '€€',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Offres SEO local',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Diagnostic visibilité locale',
            price: '190',
            priceCurrency: 'EUR',
            description: 'Analyse complète de votre fiche Google Business Profile, vos avis et votre positionnement local, livrée sous 5 jours ouvrés.',
          },
          {
            '@type': 'Offer',
            name: 'Sprint local 3 mois',
            price: '790',
            priceCurrency: 'EUR',
            description: 'Diagnostic inclus, optimisation complète de la fiche Google, stratégie avis clients, 2 Google Posts par mois, rapport mensuel et appel de suivi.',
          },
        ],
      },
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
          name: 'Combien de temps pour apparaître sur Google à Aix-en-Provence ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Pour le référencement naturel dans le Pays d'Aix, comptez en général 2 à 4 mois pour voir des résultats significatifs sur votre fiche Google. Les premières améliorations (fiche complétée, nouveaux avis) peuvent être visibles en quelques semaines. Le SEO local est plus rapide que le référencement classique, mais ça reste un travail de fond, pas un coup de baguette magique.",
          },
        },
        {
          '@type': 'Question',
          name: 'Quelle différence entre le SEO local et Google Ads ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Avec Google Ads, vous payez chaque clic : dès que vous arrêtez, vous disparaissez. Le référencement local est un investissement qui dure : une fiche bien optimisée et des avis solides continuent de travailler pour vous même quand vous dormez. Les deux peuvent se compléter, mais le SEO local est souvent plus rentable sur le long terme pour les artisans et les indépendants de l'habitat à Aix-en-Provence.",
          },
        },
        {
          '@type': 'Question',
          name: 'Travaillez-vous uniquement à Aix-en-Provence ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Non. Je travaille principalement avec des professionnels du Pays d'Aix (Aix-en-Provence, Pertuis, Gardanne, Trets, Vitrolles…) mais j'accompagne aussi des clients dans d'autres villes de la région PACA. Tout se fait à distance : un appel et un accès à votre fiche suffisent pour démarrer.",
          },
        },
        {
          '@type': 'Question',
          name: 'Pourquoi vous spécialiser dans la décoration et l\'habitat ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Parce que les problématiques SEO d'une décoratrice ou d'un carreleur sont très différentes de celles d'un restaurant ou d'un avocat. Je connais les mots-clés de ces métiers, les attentes des clients locaux et les spécificités de la fiche Google pour ces activités. Cette spécialisation me permet d'aller plus vite et d'être plus pertinente qu'un généraliste.",
          },
        },
        {
          '@type': 'Question',
          name: 'Le diagnostic suffit-il si je veux juste un état des lieux ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Absolument. Le diagnostic à 190 € est une prestation complète et indépendante. Vous recevez un rapport détaillé avec toutes les corrections à faire, et vous pouvez très bien les appliquer vous-même. Il n'y a aucune obligation de continuer avec le sprint. Beaucoup de clients commencent par là pour savoir exactement où ils en sont.",
          },
        },
        {
          '@type': 'Question',
          name: 'Comment optimiser sa fiche Google Business Profile à Aix-en-Provence ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Optimiser sa fiche Google Business Profile à Aix-en-Provence passe par plusieurs étapes : choisir les bonnes catégories pour votre activité (décorateur, architecte d'intérieur, cuisiniste, menuisier…), compléter toutes les informations (horaires, description avec mots-clés locaux, services), ajouter des photos régulières de vos réalisations dans le Pays d'Aix, et mettre en place une stratégie pour collecter des avis clients. C'est précisément ce que j'analyse dans mon diagnostic de visibilité locale.",
          },
        },
        {
          '@type': 'Question',
          name: 'Combien coûte une consultante SEO à Aix-en-Provence ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Mes tarifs sont transparents : un diagnostic de visibilité locale complet est à 190 €, livré sous 5 jours. Pour un accompagnement complet sur 3 mois (diagnostic + optimisations + suivi), le Sprint local est à 790 €. Contrairement à une agence SEO d'Aix-en-Provence ou de Marseille qui facture souvent des forfaits mensuels de 800 à 2 000 €/mois, je travaille sur un périmètre défini, avec des livrables concrets.",
          },
        },
      ],
    },
  ],
};

/* ── Données ── */
const metiers = [
  {
    icon: PaintBrush,
    title: 'Décoratrices d\'intérieur',
    desc: "Quand un particulier tape « décoratrice intérieur Aix-en-Provence », il clique sur l'une des trois premières fiches Google. La concurrence est réelle, et une fiche mal remplie ou sans avis récents vous coûte des projets. Pour ce métier, le référencement local passe avant tout par un Google Business Profile complet, des photos de réalisations et des avis authentiques.",
  },
  {
    icon: Buildings,
    title: 'Architectes d\'intérieur',
    desc: "Vos clients cherchent des projets haut de gamme, et ils vérifient votre crédibilité en ligne avant même de vous appeler. Une fiche Google My Business architecte d'intérieur bien travaillée rassure, donne envie et filtre les bons clients. Sans elle, vous perdez des opportunités que vous ne voyez jamais.",
  },
  {
    icon: Hammer,
    title: 'Artisans & entreprises de l\'habitat',
    desc: "Cuisinistes, carreleurs, peintres, plaquistes… Le bouche-à-oreille reste précieux, mais il ne suffit plus : Google est devenu le nouveau bouche-à-oreille. Le SEO local artisan, c'est ce qui fait que votre téléphone sonne en dehors de votre réseau habituel, et que vous choisissez vos chantiers plutôt que de courir après eux.",
  },
];

const diagnostic = {
  badge: 'Essentiel',
  name: 'Diagnostic visibilité',
  price: '190',
  unit: 'paiement unique',
  delay: 'Livraison sous 5 jours ouvrés',
  pitch: "Vous ne savez pas pourquoi vous n'apparaissez pas sur Google ? Le diagnostic répond à cette question en une semaine. J'analyse votre fiche Google Business Profile, vos avis, votre positionnement local et je vous remets un rapport clair avec les points à corriger, dans l'ordre.",
  items: [
    'Analyse de votre fiche Google Business Profile',
    'Avis clients & signaux de confiance',
    'Positionnement local & concurrents aixois',
    'Audit SEO local de votre site web',
    'Rapport clair avec corrections priorisées',
  ],
  cta: 'Commander le diagnostic · 190 €',
  yellow: false,
};

const sprint = {
  badge: 'Le plus complet',
  name: 'Sprint local 3 mois',
  price: '790',
  unit: 'sur 3 mois',
  delay: 'Diagnostic inclus · démarrage rapide',
  pitch: "Le diagnostic est inclus, c'est le point de départ. Ensuite on corrige, on active et on suit : optimisation complète de votre fiche, stratégie avis clients, deux Google Posts par mois, rapport mensuel et un appel de suivi. Trois mois pour que Google sache enfin qui vous êtes.",
  items: [
    'Diagnostic complet inclus (point de départ)',
    'Optimisation complète de votre fiche Google',
    'Stratégie avis clients personnalisée',
    '2 Google Posts rédigés et publiés par mois',
    'Rapport mensuel + appel de suivi',
  ],
  cta: 'Démarrer le sprint · 790 €',
  yellow: true,
};

const forYou = [
  'Vous êtes décorateur, architecte d\'intérieur, cuisiniste, menuisier ou artisan à Aix-en-Provence ou dans le Pays d\'Aix',
  'Vous avez une fiche Google mais elle ne vous apporte pas assez de demandes de devis',
  'Vos concurrents aixois apparaissent avant vous sur Google sans que vous compreniez pourquoi',
  'Vous voulez être trouvé par des clients locaux qualifiés, sans dépenser en publicité payante',
  'Vous cherchez quelqu\'un qui connaît votre secteur et parle concret, sans termes techniques incompréhensibles',
];

const notForYou = [
  'Si vous cherchez des résultats en 48h sans travailler votre présence en ligne',
  'Si votre activité, vos services ou votre zone d\'intervention ne sont pas encore définis',
  'Si vous voulez une grosse agence avec des tableaux de bord compliqués et peu d\'actions concrètes',
];

const zones = [
  'Aix-en-Provence', 'Pertuis', 'Gardanne', 'Trets',
  'Meyreuil', 'Vitrolles', 'Salon-de-Provence', 'Aubagne',
  'La Ciotat', 'Marseille', 'Peyrolles-en-Provence', 'Venelles',
];

const steps = [
  {
    num: '01',
    title: 'On fait le point',
    desc: 'Un appel découverte gratuit de 20 minutes. Vous me parlez de votre activité, de votre zone et de vos objectifs. Je vous dis honnêtement ce que je peux faire pour vous.',
  },
  {
    num: '02',
    title: 'Je diagnostique',
    desc: "J'analyse votre fiche Google Business Profile, vos avis clients et vos concurrents locaux à Aix-en-Provence. Vous recevez un rapport clair, sans jargon, avec les priorités dans l'ordre.",
  },
  {
    num: '03',
    title: 'On corrige et on active',
    desc: "Optimisation de la fiche, mise en place d'une stratégie pour obtenir plus d'avis, publication des premiers Google Posts. Tout ce qui fait que Google commence à vous mettre en avant.",
  },
  {
    num: '04',
    title: 'On suit ensemble',
    desc: 'Chaque mois, un rapport pour voir ce qui progresse et un appel pour ajuster si besoin. Pas de surprise, pas de silence radio.',
  },
];

/* ⚠️ TÉMOIGNAGES À REMPLACER PAR DE VRAIS AVIS CLIENTS.
   Ajoutez une vraie photo de profil et le nom complet de chaque client
   pour maximiser la crédibilité. Un vrai visage + un vrai nom valent
   dix fois plus qu'un prénom seul. */
const temoignages = [
  {
    quote: "J'avais une fiche Google à moitié remplie depuis des années. En trois mois, j'ai commencé à recevoir des demandes de particuliers que je ne connaissais pas du tout, juste via Google. C'est exactement ce que je cherchais.",
    name: 'Sophie M.',
    role: 'Décoratrice d\'intérieur · Aix-en-Provence',
  },
  {
    quote: "Le diagnostic m'a ouvert les yeux. Je pensais que mon site suffisait. En réalité, ma fiche Google était incomplète et mes avis dataient de deux ans. Le rapport était très concret, j'ai pu corriger tout ça moi-même en une semaine.",
    name: 'Thomas R.',
    role: 'Cuisiniste · Pertuis',
  },
  {
    quote: "Travailler avec une consultante qui connaît vraiment les métiers du bâtiment, ça change tout. Elle ne m'a pas parlé de technique, elle m'a parlé de clients, de chantiers, de réputation. C'est ce dont j'avais besoin.",
    name: 'Nathalie B.',
    role: 'Architecte d\'intérieur · Aix-en-Provence',
  },
];

const sources = [
  {
    title: 'Centre d\'aide Google Business Profile',
    desc: 'La documentation officielle pour créer, gérer et optimiser votre fiche Google.',
    href: 'https://support.google.com/business/?hl=fr',
  },
  {
    title: 'France Num · Guide Google Business Profile',
    desc: 'Le guide pratique du gouvernement pour les TPE et les artisans.',
    href: 'https://www.francenum.gouv.fr/guides-et-conseils/communication-et-publicite/referencement/google-business-profile-le-service-de',
  },
  {
    title: 'France Num · Améliorer son référencement local',
    desc: 'Des conseils concrets pour progresser sur Google sans budget publicitaire.',
    href: 'https://www.francenum.gouv.fr/guides-et-conseils/communication-et-publicite/referencement/comment-ameliorer-votre-referencement',
  },
];

export default function ConsultantSEOAixPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>

        {/* ══════════════════════════════════════════
            HERO
        ══════════════════════════════════════════ */}
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
                Aix-en-Provence · Pays d&apos;Aix · Bouches-du-Rhône
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
                Consultant SEO local à<br />
                <span style={{ color: '#fceb30', textShadow: '0 0 18px rgba(252,235,48,0.55), 0 0 48px rgba(252,235,48,0.25)' }}>
                  Aix-en-Provence
                </span>
                , spécialisé décoration &amp; habitat
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.13}>
              <p
                className="mb-8 max-w-[60ch] text-white/60"
                style={{ fontFamily: inter.style.fontFamily, fontSize: '17px', lineHeight: '28px' }}
              >
                Vous êtes décoratrice, architecte d&apos;intérieur ou artisan dans le Pays d&apos;Aix
                et vous n&apos;apparaissez pas sur Google ? Je vous aide à corriger ça, concrètement,
                en partant de votre fiche Google. Deux offres : un diagnostic à 190 € livré en 5 jours,
                ou un sprint de 3 mois à 790 € pour des résultats durables.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.18}>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#offres"
                  className="inline-flex items-center gap-2 rounded-full bg-[#fceb30] px-6 py-3.5 font-bold text-[#264d8c] transition-all duration-300 hover:brightness-105 active:scale-[0.98]"
                  style={{ fontFamily: inter.style.fontFamily, fontSize: '15px' }}
                >
                  Voir mes offres
                  <ArrowRight size={15} weight="bold" />
                </Link>
                <Link
                  href="#deroule"
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

        {/* ══════════════════════════════════════════
            INTRO / POSITIONNEMENT
        ══════════════════════════════════════════ */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-4xl px-6 py-20 md:py-24 text-center">
            <ScrollReveal>
              <p
                className="mx-auto max-w-[42ch] text-white"
                style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 36px)', lineHeight: '1.25' }}
              >
                Vos clients cherchent «&nbsp;décoratrice intérieur Aix-en-Provence&nbsp;» ou
                «&nbsp;carreleur Aix&nbsp;» sur Google.{' '}
                <span style={{ color: 'rgba(255,255,255,0.40)' }}>
                  Si vous n&apos;apparaissez pas dans les premiers résultats, c&apos;est votre concurrent
                  qui décroche le téléphone, pas vous.
                </span>
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <p
                className="mx-auto mt-8 max-w-[56ch] text-white/60"
                style={{ fontFamily: inter.style.fontFamily, fontSize: '17px', lineHeight: '28px' }}
              >
                Le problème n&apos;est pas votre travail. C&apos;est votre visibilité en ligne. Je suis
                consultante SEO freelance à Aix-en-Provence, spécialisée dans les métiers du cadre
                de vie et de l&apos;habitat. Je travaille sur ce qui compte vraiment :{' '}
                <strong className="text-white/90">votre fiche Google, vos avis clients et votre positionnement local.</strong>
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Séparateur */}
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px w-full" style={{ background: 'rgba(255,255,255,0.07)' }} />
        </div>

        {/* ══════════════════════════════════════════
            POUR QUI JE TRAVAILLE
        ══════════════════════════════════════════ */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <ScrollReveal>
              <p
                className="mb-4 uppercase tracking-widest"
                style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '13px', color: '#fceb30', textShadow: '0 0 12px rgba(252,235,48,0.6)' }}
              >
                Pour qui je travaille
              </p>
              <h2
                className="mb-4 max-w-[26ch] text-white"
                style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: '1.15' }}
              >
                Exclusivement les pros du cadre de vie et de l&apos;habitat
              </h2>
              <p
                className="mb-14 max-w-[58ch] text-white/55"
                style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '26px' }}
              >
                Pas de e-commerce, pas de SaaS. Uniquement des métiers comme les vôtres,
                dans le Pays d&apos;Aix et ses alentours.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {metiers.map((m, i) => {
                const Icon = m.icon;
                return (
                  <ScrollReveal key={i} delay={i * 0.08}>
                    <div
                      className="h-full rounded-[1.5rem] p-7"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.09)',
                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
                      }}
                    >
                      <span
                        className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
                        style={{ background: 'rgba(252,235,48,0.12)', border: '1px solid rgba(252,235,48,0.25)' }}
                      >
                        <Icon size={20} weight="bold" color="#fceb30" />
                      </span>
                      <h3
                        className="mb-3 text-white"
                        style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '18px', lineHeight: '1.3' }}
                      >
                        {m.title}
                      </h3>
                      <p style={{ fontFamily: inter.style.fontFamily, fontSize: '14px', lineHeight: '23px', color: 'rgba(255,255,255,0.55)' }}>
                        {m.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Séparateur */}
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px w-full" style={{ background: 'rgba(255,255,255,0.07)' }} />
        </div>

        {/* ══════════════════════════════════════════
            FICHE GOOGLE = MEILLEUR COMMERCIAL
        ══════════════════════════════════════════ */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-center">

              <ScrollReveal>
                <p
                  className="mb-4 uppercase tracking-widest"
                  style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '13px', color: '#fceb30', textShadow: '0 0 12px rgba(252,235,48,0.6)' }}
                >
                  Votre meilleur commercial
                </p>
                <h2
                  className="mb-6 text-white"
                  style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: '1.15' }}
                >
                  Pourquoi votre fiche Google est votre meilleur commercial à Aix-en-Provence
                </h2>
                <div
                  className="space-y-4 text-white/65"
                  style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '27px' }}
                >
                  <p>
                    <strong className="text-white/90">46&nbsp;% des recherches Google concernent une entreprise locale.</strong>{' '}
                    Et quand quelqu&apos;un cherche un professionnel près de chez lui, la fiche Google
                    Business Profile est la première chose qu&apos;il voit, avant votre site, avant vos réseaux sociaux.
                  </p>
                  <p>
                    Pour les métiers de la décoration et de l&apos;habitat, c&apos;est encore plus vrai :
                    les clients veulent voir vos réalisations, lire des avis et vous appeler directement
                    depuis leur téléphone.
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
                    Négliger cette fiche, c&apos;est laisser vos concurrents prendre vos clients.<br />
                    <span style={{ color: '#fceb30', textShadow: '0 0 18px rgba(252,235,48,0.55), 0 0 40px rgba(252,235,48,0.25)' }}>
                      L&apos;optimiser, c&apos;est travailler une fois pour en profiter longtemps.
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
                    Une fiche bien optimisée, c&apos;est :
                  </p>
                  <ul className="space-y-5">
                    {[
                      { t: 'Votre vitrine n°1', d: 'Photos, description, services, zone d\'intervention, tout est visible en quelques secondes.' },
                      { t: 'Vos avis Google', d: 'La preuve sociale qui convainc avant même un premier échange.' },
                      { t: 'Un flux de contacts régulier', d: 'Appels, demandes d\'itinéraire, clics vers votre site, directement depuis la recherche.' },
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
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Séparateur */}
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px w-full" style={{ background: 'rgba(255,255,255,0.07)' }} />
        </div>

        {/* ══════════════════════════════════════════
            CE QUE J'ANALYSE
        ══════════════════════════════════════════ */}
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
                className="mb-4 max-w-[22ch] text-white"
                style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: '1.15' }}
              >
                Ce que j&apos;analyse et corrige pour votre visibilité à Aix-en-Provence
              </h2>
              <p
                className="mb-14 max-w-[60ch] text-white/55"
                style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '26px' }}
              >
                Un diagnostic SEO local à Aix-en-Provence couvre tous les leviers qui influencent
                votre positionnement dans Google Maps et les résultats de recherche locaux.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Fiche Google Business Profile',
                  desc: 'Catégories, description, services, attributs, photos, zone de chalandise : chaque élément de votre fiche GBP est audité et comparé à vos concurrents directs sur Aix-en-Provence.',
                },
                {
                  title: 'Analyse des avis clients',
                  desc: 'Note globale, fréquence des avis, qualité des réponses. Je vous indique combien d\'avis vos concurrents locaux ont et comment construire une stratégie pour en obtenir régulièrement.',
                },
                {
                  title: 'Positionnement concurrentiel',
                  desc: 'Qui sont vos concurrents les mieux positionnés à Aix-en-Provence sur vos requêtes cibles ? Pourquoi vous devancent-ils ? Quels écarts sont comblables rapidement ?',
                },
                {
                  title: 'Audit de votre site web',
                  desc: 'Votre site envoie-t-il les bons signaux SEO locaux ? Mots-clés géolocalisés, balises title, contenu local, vitesse de chargement, compatibilité mobile. Les points bloquants sont identifiés.',
                },
                {
                  title: 'Cohérence NAP & citations',
                  desc: 'Nom, adresse, téléphone : votre présence sur les annuaires locaux est-elle cohérente ? Une incohérence pénalise votre référencement local sur Aix-en-Provence.',
                },
                {
                  title: 'Plan d\'action priorisé',
                  desc: 'Un rapport clair livré sous 5 jours : ce qui est prioritaire, ce qui peut attendre, ce qui ne sert à rien. Pas un audit de 80 pages illisible, une feuille de route actionnable.',
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

        {/* ══════════════════════════════════════════
            MES OFFRES
        ══════════════════════════════════════════ */}
        <section id="offres" className="relative bg-transparent" style={{ scrollMarginTop: '90px' }}>
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <ScrollReveal>
              <p
                className="mb-4 uppercase tracking-widest"
                style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '13px', color: '#fceb30', textShadow: '0 0 12px rgba(252,235,48,0.6)' }}
              >
                Mes offres
              </p>
              <h2
                className="mb-4 text-white"
                style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: '1.15' }}
              >
                Par où voulez-vous commencer&nbsp;?
              </h2>
              <p
                className="mb-14 max-w-[52ch] text-white/55"
                style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '26px' }}
              >
                Commencez par comprendre ce qui bloque, ou passez directement à l&apos;action.
                Les deux offres s&apos;emboîtent naturellement.
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
                      href="/offre"
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
              <p className="mt-10 text-center text-sm text-white/30" style={{ fontFamily: inter.style.fontFamily }}>
                Paiement sécurisé par virement · Facture fournie · Sans engagement long
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Séparateur */}
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px w-full" style={{ background: 'rgba(255,255,255,0.07)' }} />
        </div>

        {/* ══════════════════════════════════════════
            POUR QUI / PAS POUR QUI
        ══════════════════════════════════════════ */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <ScrollReveal>
              <h2
                className="mb-12 text-white"
                style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: '1.15' }}
              >
                Ce diagnostic SEO local est fait pour vous{' '}
                <span style={{ color: 'rgba(255,255,255,0.35)' }}>si vous êtes professionnel de l&apos;habitat à Aix-en-Provence</span>
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

        {/* ══════════════════════════════════════════
            PROCESS / COMMENT ÇA SE PASSE
        ══════════════════════════════════════════ */}
        <section id="deroule" className="relative bg-transparent" style={{ scrollMarginTop: '90px' }}>
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <ScrollReveal>
              <p
                className="mb-4 uppercase tracking-widest"
                style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '13px', color: '#fceb30', textShadow: '0 0 12px rgba(252,235,48,0.6)' }}
              >
                Comment ça se passe
              </p>
              <h2
                className="mb-4 text-white"
                style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: '1.15' }}
              >
                Un déroulé clair, du premier appel au suivi mensuel
              </h2>
              <p
                className="mb-14 max-w-[55ch] text-white/50"
                style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '26px' }}
              >
                Pas de réunion inutile, pas de contrat de 12 mois. Un process clair, en 4 étapes.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div
                    className="h-full rounded-[1.5rem] p-7"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)' }}
                  >
                    <p className="mb-5 font-mono font-bold" style={{ fontSize: '13px', color: 'rgba(252,235,48,0.5)', letterSpacing: '0.08em' }}>
                      {step.num}
                    </p>
                    <h3 className="mb-3 text-white" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '17px', lineHeight: '1.3' }}>
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

        {/* ══════════════════════════════════════════
            TÉMOIGNAGES
        ══════════════════════════════════════════ */}
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
                className="mb-14 max-w-[24ch] text-white"
                style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: '1.15' }}
              >
                Ce qu&apos;en disent les pros de l&apos;habitat du Pays d&apos;Aix
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

        {/* ══════════════════════════════════════════
            ZONES D'INTERVENTION
        ══════════════════════════════════════════ */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
            <ScrollReveal>
              <h2
                className="mb-4 text-white"
                style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 38px)', lineHeight: '1.2' }}
              >
                J&apos;interviens dans tout le Pays d&apos;Aix et les Bouches-du-Rhône
              </h2>
              <p
                className="mb-10 max-w-[60ch] text-white/50"
                style={{ fontFamily: inter.style.fontFamily, fontSize: '15px', lineHeight: '25px' }}
              >
                Mon expertise en référencement local couvre Aix-en-Provence et les communes
                voisines. Je travaille à distance pour tous les professionnels de l&apos;habitat
                de la région PACA : un appel et un accès à votre fiche suffisent pour démarrer.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="flex flex-wrap gap-3">
                {zones.map((zone, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 rounded-full px-4 py-2"
                    style={{
                      background: i === 0 ? 'rgba(252,235,48,0.12)' : 'rgba(255,255,255,0.05)',
                      border: i === 0 ? '1px solid rgba(252,235,48,0.30)' : '1px solid rgba(255,255,255,0.09)',
                      fontFamily: inter.style.fontFamily,
                      fontSize: '13px',
                      fontWeight: i === 0 ? 600 : 400,
                      color: i === 0 ? '#fceb30' : 'rgba(255,255,255,0.55)',
                    }}
                  >
                    <MapPin size={11} weight="bold" />
                    {zone}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Séparateur */}
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px w-full" style={{ background: 'rgba(255,255,255,0.07)' }} />
        </div>

        {/* ══════════════════════════════════════════
            FAQ
        ══════════════════════════════════════════ */}
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
                SEO local pour la décoration &amp; l&apos;habitat à Aix-en-Provence
              </h2>
            </ScrollReveal>

            <div className="space-y-0 divide-y" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
              {[
                {
                  q: 'Combien de temps pour apparaître sur Google à Aix-en-Provence ?',
                  a: "Pour le référencement naturel dans le Pays d'Aix, comptez en général 2 à 4 mois pour voir des résultats significatifs sur votre fiche Google. Les premières améliorations (fiche complétée, nouveaux avis) peuvent être visibles en quelques semaines. Le SEO local est plus rapide que le référencement classique, mais ça reste un travail de fond, pas un coup de baguette magique.",
                },
                {
                  q: 'Quelle différence entre le SEO local et Google Ads ?',
                  a: "Avec Google Ads, vous payez chaque clic : dès que vous arrêtez, vous disparaissez. Le référencement local est un investissement qui dure : une fiche bien optimisée et des avis solides continuent de travailler pour vous même quand vous dormez. Les deux peuvent se compléter, mais le SEO local est souvent plus rentable sur le long terme pour les artisans et les indépendants.",
                },
                {
                  q: 'Travaillez-vous uniquement à Aix-en-Provence ?',
                  a: "Non. Je travaille principalement avec des professionnels du Pays d'Aix (Aix-en-Provence, Pertuis, Gardanne, Trets, Vitrolles…) mais j'accompagne aussi des clients dans d'autres villes de la région PACA. Tout se fait à distance : un appel et un accès à votre fiche suffisent pour démarrer.",
                },
                {
                  q: 'Pourquoi vous spécialiser dans la décoration et l\'habitat ?',
                  a: "Parce que les problématiques SEO d'une décoratrice ou d'un carreleur sont très différentes de celles d'un restaurant ou d'un avocat. Je connais les mots-clés de ces métiers, les attentes des clients locaux et les spécificités de la fiche Google pour ces activités. Cette spécialisation me permet d'aller plus vite et d'être plus pertinente qu'un généraliste.",
                },
                {
                  q: 'Comment optimiser sa fiche Google Business Profile à Aix-en-Provence ?',
                  a: "Une fiche optimisée pour Aix-en-Provence doit : choisir les bonnes catégories (décorateur, architecte d'intérieur, cuisiniste, menuisier…), remplir la description avec des mots-clés locaux naturels (« Pays d'Aix », « Bouches-du-Rhône », vos services), ajouter des photos récentes de vos réalisations, renseigner vos horaires et services en détail, et mettre en place une stratégie d'avis clients régulière. C'est précisément ce que j'analyse dans mon diagnostic.",
                },
                {
                  q: 'Le diagnostic suffit-il si je veux juste un état des lieux ?',
                  a: "Absolument. Le diagnostic à 190 € est une prestation complète et indépendante. Vous recevez un rapport détaillé avec toutes les corrections à faire, et vous pouvez très bien les appliquer vous-même. Il n'y a aucune obligation de continuer avec le sprint. Beaucoup de clients commencent par là pour savoir exactement où ils en sont.",
                },
                {
                  q: 'Combien coûte une consultante SEO à Aix-en-Provence ?',
                  a: "Mes tarifs sont transparents : le diagnostic de visibilité locale est à 190 €, livré sous 5 jours. Pour un accompagnement complet sur 3 mois (diagnostic + optimisations + suivi), le Sprint local est à 790 €. Contrairement à une agence qui facture 800 à 2 000 €/mois en forfait, je travaille sur un périmètre défini, avec des livrables concrets et mesurables.",
                },
              ].map((faq, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <div className="py-7">
                    <h3 className="mb-3 text-white" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '17px', lineHeight: '1.35' }}>
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

        {/* ══════════════════════════════════════════
            À PROPOS
        ══════════════════════════════════════════ */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <div className="grid grid-cols-1 gap-14 md:grid-cols-[4fr_6fr] md:items-center">

              <ScrollReveal>
                <div className="relative mx-auto w-full max-w-[320px] md:max-w-none">
                  <div
                    className="absolute pointer-events-none"
                    style={{
                      inset: '-30px',
                      background: 'radial-gradient(ellipse at 55% 45%, rgba(252,235,48,0.18) 0%, rgba(35,85,182,0.12) 50%, transparent 72%)',
                      filter: 'blur(20px)',
                      zIndex: 0,
                    }}
                  />
                  <div
                    className="relative overflow-hidden rounded-[2rem]"
                    style={{
                      aspectRatio: '3/4',
                      zIndex: 1,
                      boxShadow: '0 0 0 1.5px rgba(252,235,48,0.30), 0 24px 64px -12px rgba(38,77,140,0.45)',
                    }}
                  >
                    <Image
                      src="/laeti-1.jpg"
                      alt="Laetitia, consultante SEO local à Aix-en-Provence spécialisée décoration et habitat"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 360px"
                    />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.12}>
                <div>
                  <p
                    className="mb-4 uppercase tracking-widest"
                    style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '13px', color: '#fceb30', textShadow: '0 0 12px rgba(252,235,48,0.6)' }}
                  >
                    À propos
                  </p>
                  <h2
                    className="mb-6 text-white"
                    style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 42px)', lineHeight: '1.15' }}
                  >
                    Laetitia, consultante SEO local freelance à Aix-en-Provence
                  </h2>
                  <div
                    className="space-y-4 text-white/65"
                    style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '27px' }}
                  >
                    <p>
                      Spécialisée dans les métiers de la décoration d&apos;intérieur, de l&apos;architecture
                      et de l&apos;habitat, j&apos;aide les professionnels du Pays d&apos;Aix à gagner en
                      visibilité sur Google, sans jargon, sans engagement long terme inutile, avec
                      des résultats mesurables.
                    </p>
                    <p>
                      Je travaille seule, sans sous-traitance. Quand vous commandez un diagnostic,
                      c&apos;est moi qui analyse votre fiche et qui rédige votre rapport. Pas de stagiaire,
                      pas de fausses promesses, plus de 12 ans d&apos;expérience en SEO.
                    </p>
                  </div>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a
                      href="mailto:llaghezza83@gmail.com"
                      className="inline-flex items-center gap-2 rounded-full bg-[#fceb30] px-6 py-3.5 font-bold text-[#264d8c] transition-all duration-300 hover:brightness-105 active:scale-[0.98]"
                      style={{ fontFamily: inter.style.fontFamily, fontSize: '15px' }}
                    >
                      Me contacter par email
                      <ArrowRight size={15} weight="bold" />
                    </a>
                    <Link
                      href="/#qui-suis-je"
                      className="inline-flex items-center gap-2 text-white/55 transition-colors hover:text-white/85"
                      style={{ fontFamily: inter.style.fontFamily, fontSize: '14px' }}
                    >
                      En savoir plus sur mon parcours
                      <ArrowRight size={13} weight="bold" />
                    </Link>
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

        {/* ══════════════════════════════════════════
            SOURCES UTILES
        ══════════════════════════════════════════ */}
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
                className="mb-12 max-w-[26ch] text-white"
                style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 38px)', lineHeight: '1.2' }}
              >
                Pour aller plus loin sur le référencement local
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

        {/* ══════════════════════════════════════════
            CTA FINAL
        ══════════════════════════════════════════ */}
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
                Votre visibilité locale à Aix-en-Provence{' '}
                <span style={{ color: '#fceb30', textShadow: '0 0 18px rgba(252,235,48,0.55), 0 0 48px rgba(252,235,48,0.25)' }}>
                  mérite mieux que le hasard.
                </span>
              </h2>
              <p
                className="mx-auto mb-10 max-w-[50ch] text-white/55"
                style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '27px' }}
              >
                Un diagnostic complet de votre présence locale sur Google à Aix-en-Provence.
                Livré sous 5 jours. 190 €. Sans engagement.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://calendly.com/laetitia_laghezza_seo_local/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#fceb30] px-8 py-4 font-bold text-[#264d8c] transition-all duration-300 hover:brightness-105 active:scale-[0.98]"
                  style={{ fontFamily: inter.style.fontFamily, fontSize: '15px' }}
                >
                  Réserver mon diagnostic · 190 €
                  <ArrowRight size={15} weight="bold" />
                </a>
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
