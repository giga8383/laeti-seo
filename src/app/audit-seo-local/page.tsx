import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';
import { inter } from '@/lib/fonts';
import {
  Check,
  ArrowRight,
  X,
  Star,
  Quotes,
  ArrowSquareOut,
} from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

/* ── Métadonnées SEO ── */
export const metadata: Metadata = {
  title: 'Audit SEO local : identifiez pourquoi vos clients ne vous trouvent pas | Laeti SEO',
  description:
    "Audit SEO local pour artisans et professionnels de l'habitat : fiche Google Business Profile, citations NAP, concurrents locaux, Local Pack. Rapport en 5 jours, appel de restitution inclus.",
  alternates: {
    canonical: 'https://laeti-seo.fr/audit-seo-local',
  },
  keywords: [
    'audit SEO local',
    'diagnostic visibilité Google',
    'audit Google Business Profile',
    'référencement local artisan',
    'Local Pack Google',
    'audit citations NAP',
    'consultant SEO local freelance',
    'audit SEO artisan habitat',
  ],
  openGraph: {
    url: 'https://laeti-seo.fr/audit-seo-local',
    title: 'Audit SEO local | Diagnostic visibilité Google | Laeti SEO',
    description:
      "Identifiez pourquoi vos clients ne vous trouvent pas sur Google. Audit SEO local complet pour professionnels de l'habitat : rapport en 5 jours + appel de restitution.",
  },
};

/* ── JSON-LD ── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://laeti-seo.fr' },
        { '@type': 'ListItem', position: 2, name: 'Offre', item: 'https://laeti-seo.fr/offre' },
        { '@type': 'ListItem', position: 3, name: 'Audit SEO local', item: 'https://laeti-seo.fr/audit-seo-local' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://laeti-seo.fr/audit-seo-local#service',
      name: 'Audit SEO local pour artisans',
      serviceType: 'Audit SEO local',
      description: "Diagnostic complet de visibilité locale pour artisans et professionnels de l'habitat : Google Business Profile, citations NAP, site web, concurrents locaux. Livraison en 5 jours ouvrés.",
      url: 'https://laeti-seo.fr/audit-seo-local',
      provider: {
        '@type': 'Organization',
        name: 'Laeti SEO',
        url: 'https://laeti-seo.fr',
      },
      areaServed: {
        '@type': 'Country',
        name: 'France',
      },
      offers: {
        '@type': 'Offer',
        name: 'Audit SEO local',
        price: '190',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://laeti-seo.fr/audit-seo-local#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: "Combien de temps dure l'audit ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "L'audit est réalisé en 5 jours ouvrés à partir de la réception de vos accès (Google Business Profile, Google Search Console si disponible). L'appel de restitution dure 45 minutes. Vous n'avez rien à préparer, je vous guide.",
          },
        },
        {
          '@type': 'Question',
          name: "Quelle est la différence entre un audit et une optimisation ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "L'audit diagnostique : il identifie ce qui bloque votre visibilité locale et vous dit quoi faire, dans quel ordre. L'optimisation agit : elle met en œuvre les recommandations de l'audit. Les deux sont complémentaires. Certains clients appliquent eux-mêmes les recommandations. D'autres confient la mise en œuvre à la consultante.",
          },
        },
        {
          '@type': 'Question',
          name: "Mon entreprise est déjà visible sur Google, est-ce utile ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, et souvent encore plus. Être visible ne signifie pas être bien positionné. Un artisan peut apparaître en position 8 du Local Pack alors qu'il pourrait être en position 1 avec quelques corrections ciblées. L'audit identifie les gains rapides que vous laissez sur la table, même quand vous pensez que ça tourne.",
          },
        },
      ],
    },
  ],
};

const analyses = [
  {
    num: '01',
    title: 'Votre fiche Google Business Profile',
    intro: "C'est le premier signal que Google lit. Une fiche mal renseignée, c'est une vitrine fermée.",
    items: [
      'Catégorie principale et catégories secondaires',
      'Complétude de la description, des services et des attributs',
      'Qualité et régularité des photos',
      'Gestion des avis et des réponses',
      'Présence et cohérence des horaires (y compris les jours fériés)',
      'Posts et Q&A actifs',
    ],
    note: "Google l'indique explicitement : les établissements avec des informations complètes et précises sont plus susceptibles d'apparaître dans les résultats de proximité.",
  },
  {
    num: '02',
    title: 'Votre site web (technique + contenu local)',
    intro: 'Votre site envoie des signaux à Google. Encore faut-il qu\'ils soient lisibles.',
    items: [
      'Balises title et méta-descriptions avec ancrage géographique',
      'Pages de service localisées (ville, zone d\'intervention)',
      'Données structurées Schema.org (LocalBusiness)',
      'Vitesse de chargement et compatibilité mobile',
      'Cohérence entre l\'adresse affichée sur le site et celle de votre fiche',
    ],
    note: null,
  },
  {
    num: '03',
    title: 'Vos citations locales et cohérence NAP',
    intro: 'Les citations locales, c\'est chaque mention de votre entreprise sur un annuaire externe. Le NAP (Nom, Adresse, Téléphone) doit être identique partout, à la virgule près.',
    items: [
      'Inventaire des citations existantes',
      'Détection des incohérences NAP (ancienne adresse, numéro obsolète, variantes du nom)',
      'Identification des annuaires prioritaires manquants pour votre secteur',
    ],
    note: 'Une seule variation suffit à brouiller les signaux de confiance que Google reçoit sur votre entreprise.',
  },
  {
    num: '04',
    title: 'Vos concurrents locaux',
    intro: 'Pourquoi sont-ils devant vous ? Ce n\'est pas une question rhétorique :c\'est une analyse concrète.',
    items: [
      'Positionnement des 3 à 5 concurrents directs dans votre zone',
      'Comparaison de leur fiche, de leurs avis et de leurs citations',
      'Identification des écarts à combler en priorité',
    ],
    note: null,
  },
  {
    num: '05',
    title: 'Votre positionnement Local Pack & Google Maps',
    intro: "L'audit mesure votre visibilité locale réelle : à quelle distance de votre établissement apparaissez-vous dans le Local Pack ?",
    items: [
      'Analyse de positionnement géolocalisé (grille de mots-clés)',
      'Requêtes sur lesquelles vous êtes absent ou mal classé',
      'Opportunités de visibilité locale non exploitées',
    ],
    note: null,
  },
];

const livrables = [
  {
    title: 'Un rapport écrit structuré',
    desc: 'Chaque point de l\'audit est expliqué en langage clair, avec le niveau de priorité associé (critique / important / amélioration).',
  },
  {
    title: 'Un plan d\'action priorisé',
    desc: 'Les actions classées par impact et par facilité d\'exécution, pour savoir exactement par où commencer.',
  },
  {
    title: 'Un appel de restitution (45 min)',
    desc: 'Je vous explique les résultats, je réponds à vos questions, et on valide ensemble les prochaines étapes.',
  },
];

const forYou = [
  'Vous êtes artisan, décorateur, cuisiniste, menuisier ou tout professionnel de l\'habitat avec une zone d\'intervention locale',
  'Vous avez une fiche Google Business Profile (même si vous ne savez pas si elle est bien configurée)',
  'Vous perdez des devis face à des concurrents moins qualifiés que vous, mais mieux positionnés',
  'Vous avez déjà "essayé des choses" sur Google sans résultat visible',
  'Vous voulez comprendre précisément vos blocages avant d\'investir dans du référencement local',
];

const notForYou = [
  'Vous êtes un e-commerce sans ancrage géographique',
  'Vous cherchez un outil automatisé à faire vous-même (ce diagnostic est mené manuellement)',
  'Vous avez besoin de résultats en moins de 48 heures',
];

const sources = [
  {
    title: 'Conseils officiels Google pour améliorer votre classement local',
    desc: 'Google Business Profile Help :la documentation de référence.',
    href: 'https://support.google.com/business/answer/7091?hl=fr',
  },
  {
    title: 'Gérer votre fiche d\'établissement Google',
    desc: 'L\'interface officielle Google Business Profile.',
    href: 'https://business.google.com/fr/business-profile/',
  },
  {
    title: 'France Num :Google Business Profile',
    desc: 'Le guide pratique du service public pour les TPE et artisans.',
    href: 'https://www.francenum.gouv.fr/guides-et-conseils/communication-et-publicite/referencement/google-business-profile-le-service-de',
  },
];

export default function AuditSEOLocalPage() {
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
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_360px] lg:items-start">

              {/* ── Colonne gauche : texte ── */}
              <div>
                {/* Breadcrumb */}
                <ScrollReveal>
                  <p
                    className="mb-6 flex items-center gap-2 text-white/40"
                    style={{ fontFamily: inter.style.fontFamily, fontSize: '13px' }}
                  >
                    <Link href="/" className="hover:text-white/70 transition-colors">Accueil</Link>
                    <span>/</span>
                    <Link href="/offre" className="hover:text-white/70 transition-colors">Offre</Link>
                    <span>/</span>
                    <span className="text-white/65">Audit SEO local</span>
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.05}>
                  <p
                    className="mb-4 uppercase tracking-widest"
                    style={{
                      fontFamily: inter.style.fontFamily,
                      fontWeight: 600,
                      fontSize: '13px',
                      color: '#fceb30',
                      textShadow: '0 0 12px rgba(252,235,48,0.7), 0 0 28px rgba(252,235,48,0.4)',
                    }}
                  >
                    Diagnostic visibilité
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.09}>
                  <h1
                    className="mb-6 text-white"
                    style={{
                      fontFamily: 'Satoshi, "Satoshi Fallback", ui-sans-serif, system-ui, sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(36px, 5.5vw, 64px)',
                      lineHeight: '1.08',
                    }}
                  >
                    Audit SEO local :{' '}
                    <span style={{ color: '#fceb30', textShadow: '0 0 18px rgba(252,235,48,0.55), 0 0 48px rgba(252,235,48,0.25)' }}>
                      identifiez pourquoi vos clients ne vous trouvent pas
                    </span>
                  </h1>
                </ScrollReveal>

                <ScrollReveal delay={0.14}>
                  <p
                    className="mb-8 max-w-[62ch] text-white/60"
                    style={{ fontFamily: inter.style.fontFamily, fontSize: '17px', lineHeight: '28px' }}
                  >
                    Vous êtes présent sur Google, mais vos concurrents apparaissent avant vous.
                    Un audit SEO local identifie précisément les blocages qui vous coûtent des clients :
                    fiche Google Business Profile incomplète, signaux de confiance manquants, citations
                    locales incohérentes. Je mène le diagnostic personnellement, vous recevez le rapport
                    en 5 jours avec un plan d&apos;action priorisé, applicable immédiatement.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.18}>
                  <div className="flex flex-wrap items-center gap-4 mb-14">
                    <a
                      href="https://calendly.com/laetitia_laghezza_seo_local/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#fceb30] px-6 py-3.5 font-bold text-[#264d8c] transition-all duration-300 hover:brightness-105 active:scale-[0.98]"
                      style={{ fontFamily: inter.style.fontFamily, fontSize: '15px' }}
                    >
                      Demander mon audit SEO local
                      <ArrowRight size={15} weight="bold" />
                    </a>
                  </div>
                </ScrollReveal>

                {/* Carte auteure E-E-A-T */}
                <ScrollReveal delay={0.22}>
                  <div
                    className="inline-flex items-center gap-4 rounded-2xl px-5 py-4 mb-6"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.12)',
                    }}
                  >
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full"
                      style={{ border: '2px solid rgba(252,235,48,0.5)' }}>
                      <Image
                        src="/laeti-1.jpg"
                        alt="Laetitia Laghezza, consultante SEO local"
                        fill
                        className="object-cover object-center"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <p style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '14px', color: '#ffffff' }}>
                        Laetitia Laghezza
                      </p>
                      <p style={{ fontFamily: inter.style.fontFamily, fontSize: '12px', color: 'rgba(255,255,255,0.50)', marginTop: '1px' }}>
                        Consultante SEO local · 12+ ans d&apos;expérience
                      </p>
                    </div>
                    <a
                      href="https://www.linkedin.com/in/laetitia-laghezza/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 flex items-center gap-1 transition-opacity hover:opacity-80"
                      style={{ fontFamily: inter.style.fontFamily, fontSize: '12px', color: 'rgba(252,235,48,0.75)' }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                      <ArrowSquareOut size={11} weight="bold" />
                    </a>
                  </div>
                </ScrollReveal>
              </div>

              {/* ── Colonne droite : mock fiche Google anonymisée ── */}
              <ScrollReveal delay={0.28}>
                <div className="hidden lg:block sticky top-28">

                  {/* Label flottant */}
                  <div className="mb-3 flex items-center justify-end gap-2">
                    <span style={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: '11px',
                      fontWeight: 600,
                      color: 'rgba(255,255,255,0.35)',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}>
                      Exemple de fiche · données anonymisées
                    </span>
                  </div>

                  {/* Carte GBP */}
                  <a
                    href="https://maps.app.goo.gl/RJ82UwdqE6LWWZxr6"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', display: 'block' }}
                  >
                    <div
                      className="overflow-hidden rounded-[20px]"
                      style={{
                        background: '#ffffff',
                        boxShadow: '0 24px 60px -12px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.08)',
                      }}
                    >
                      {/* Mini-carte simulée */}
                      <div
                        className="relative h-36 w-full overflow-hidden"
                        style={{
                          background: 'linear-gradient(160deg, #e8f0d8 0%, #d4e6c3 30%, #c8ddb5 60%, #b8cf9e 100%)',
                        }}
                      >
                        {/* Grille de rue stylisée */}
                        <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.35 }}>
                          <line x1="0" y1="60" x2="100%" y2="60" stroke="#8fae6a" strokeWidth="8"/>
                          <line x1="0" y1="110" x2="100%" y2="110" stroke="#8fae6a" strokeWidth="4"/>
                          <line x1="80" y1="0" x2="80" y2="100%" stroke="#8fae6a" strokeWidth="6"/>
                          <line x1="220" y1="0" x2="220" y2="100%" stroke="#8fae6a" strokeWidth="4"/>
                          <rect x="90" y="20" width="50" height="30" rx="3" fill="#c5d8a0" stroke="#8fae6a" strokeWidth="1"/>
                          <rect x="150" y="25" width="60" height="25" rx="3" fill="#c5d8a0" stroke="#8fae6a" strokeWidth="1"/>
                          <rect x="90" y="70" width="40" height="30" rx="3" fill="#c5d8a0" stroke="#8fae6a" strokeWidth="1"/>
                        </svg>
                        {/* Pin rouge */}
                        <div style={{
                          position: 'absolute',
                          left: '50%',
                          top: '40%',
                          transform: 'translate(-50%, -50%)',
                          zIndex: 2,
                        }}>
                          <div style={{
                            width: '28px',
                            height: '28px',
                            background: '#EA4335',
                            borderRadius: '50% 50% 50% 0',
                            transform: 'rotate(-45deg)',
                            boxShadow: '0 2px 8px rgba(234,67,53,0.5)',
                          }} />
                          <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -65%) rotate(45deg)',
                            width: '10px',
                            height: '10px',
                            background: '#ffffff',
                            borderRadius: '50%',
                          }} />
                        </div>
                        {/* Logo Google Maps */}
                        <div style={{
                          position: 'absolute',
                          bottom: '8px',
                          right: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          background: 'rgba(255,255,255,0.85)',
                          borderRadius: '4px',
                          padding: '2px 6px',
                        }}>
                          <svg width="12" height="12" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#EA4335"/>
                          </svg>
                          <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '9px', fontWeight: 700, color: '#555', letterSpacing: '0.02em' }}>Google Maps</span>
                        </div>
                      </div>

                      {/* Corps de la fiche */}
                      <div style={{ padding: '16px 16px 12px' }}>

                        {/* Nom anonymisé */}
                        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '4px' }}>
                          <div>
                            <div style={{
                              width: '160px',
                              height: '20px',
                              background: '#e0e0e0',
                              borderRadius: '4px',
                              filter: 'blur(4px)',
                              marginBottom: '6px',
                            }} />
                            {/* Catégorie */}
                            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#70757a', margin: 0 }}>
                              Professionnel de l&apos;habitat
                            </p>
                          </div>
                          {/* Logo Google */}
                          <svg width="18" height="18" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: '2px' }}>
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                          </svg>
                        </div>

                        {/* Étoiles */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '12px' }}>
                          <span style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: '14px', color: '#202124' }}>5,0</span>
                          <div style={{ display: 'flex', gap: '1px' }}>
                            {Array.from({ length: 5 }).map((_, i) => (
                              <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#FBBC04">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                              </svg>
                            ))}
                          </div>
                          <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '13px', color: '#70757a' }}>· 12 avis</span>
                        </div>

                        {/* Boutons d'action */}
                        <div style={{ display: 'flex', gap: '6px', marginBottom: '14px' }}>
                          {[
                            { icon: '🌐', label: 'Site web' },
                            { icon: '🗺️', label: 'Itinéraire' },
                            { icon: '📞', label: 'Appeler' },
                          ].map(({ icon, label }) => (
                            <div
                              key={label}
                              style={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '3px',
                                background: '#f1f3f4',
                                borderRadius: '8px',
                                padding: '7px 4px',
                                cursor: 'default',
                              }}
                            >
                              <span style={{ fontSize: '14px' }}>{icon}</span>
                              <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', color: '#1a73e8', fontWeight: 500 }}>{label}</span>
                            </div>
                          ))}
                        </div>

                        {/* Séparateur */}
                        <div style={{ height: '1px', background: '#e0e0e0', margin: '0 -16px 10px' }} />

                        {/* Infos anonymisées */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                          {/* Adresse */}
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="#70757a" style={{ flexShrink: 0 }}>
                              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                            </svg>
                            <div style={{ width: '140px', height: '12px', background: '#e0e0e0', borderRadius: '3px', filter: 'blur(4px)' }} />
                          </div>
                          {/* Horaires */}
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="#70757a" style={{ flexShrink: 0 }}>
                              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
                            </svg>
                            <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#188038', fontWeight: 600 }}>
                              Ouvert
                            </span>
                            <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#70757a' }}>
                              · Ferme à 18:00
                            </span>
                          </div>
                          {/* Téléphone */}
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="#70757a" style={{ flexShrink: 0 }}>
                              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                            </svg>
                            <div style={{ width: '100px', height: '12px', background: '#e0e0e0', borderRadius: '3px', filter: 'blur(4px)' }} />
                          </div>
                        </div>

                        {/* Lien "Voir sur Google Maps" */}
                        <div style={{ marginTop: '14px', paddingTop: '10px', borderTop: '1px solid #e0e0e0', textAlign: 'center' }}>
                          <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#1a73e8', fontWeight: 500 }}>
                            Voir sur Google Maps ↗
                          </span>
                        </div>

                      </div>
                    </div>
                  </a>

                  {/* Badge "ce qu'on analyse" */}
                  <div
                    className="mt-3 flex items-center gap-2 rounded-xl px-4 py-3"
                    style={{
                      background: 'rgba(252,235,48,0.08)',
                      border: '1px solid rgba(252,235,48,0.18)',
                    }}
                  >
                    <Check size={14} weight="bold" color="#fceb30" style={{ flexShrink: 0 }} />
                    <p style={{ fontFamily: inter.style.fontFamily, fontSize: '12px', color: 'rgba(255,255,255,0.65)', lineHeight: '18px' }}>
                      C&apos;est exactement ce type de fiche que j&apos;analyse dans votre audit.
                    </p>
                  </div>

                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* Séparateur */}
        <div className="mx-auto max-w-7xl px-6 pt-4">
          <div className="h-px w-full" style={{ background: 'rgba(255,255,255,0.07)' }} />
        </div>

        {/* ══════════════════════════════════════════
            CE QU'ON ANALYSE
        ══════════════════════════════════════════ */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <ScrollReveal>
              <p
                className="mb-4 uppercase tracking-widest"
                style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '13px', color: '#fceb30', textShadow: '0 0 12px rgba(252,235,48,0.6)' }}
              >
                Ce qu&apos;on analyse
              </p>
              <h2
                className="mb-4 max-w-[28ch] text-white"
                style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: '1.15' }}
              >
                5 leviers passés au crible dans votre audit SEO local
              </h2>
              <p
                className="mb-14 max-w-[58ch] text-white/55"
                style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '26px' }}
              >
                Beaucoup de professionnels pensent que &quot;être sur Google&quot; suffit. Apparaître
                dans le Local Pack (les 3 résultats cartographiques qui captent l&apos;essentiel des
                clics) exige une cohérence précise sur plusieurs points.
              </p>
            </ScrollReveal>

            <div className="space-y-6">
              {analyses.map((a, i) => (
                <ScrollReveal key={i} delay={i * 0.07}>
                  <div
                    className="rounded-[1.5rem] p-8"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.09)',
                      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
                    }}
                  >
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-[auto_1fr]">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-mono font-bold"
                        style={{ background: 'rgba(252,235,48,0.12)', border: '1px solid rgba(252,235,48,0.25)', color: '#fceb30', fontSize: '13px' }}
                      >
                        {a.num}
                      </div>
                      <div>
                        <h3
                          className="mb-2 text-white"
                          style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '19px', lineHeight: '1.3' }}
                        >
                          {a.title}
                        </h3>
                        <p className="mb-4 text-white/60" style={{ fontFamily: inter.style.fontFamily, fontSize: '15px', lineHeight: '25px' }}>
                          {a.intro}
                        </p>
                        <ul className="space-y-2">
                          {a.items.map((item, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full" style={{ background: 'rgba(252,235,48,0.15)' }}>
                                <Check size={9} weight="bold" color="#fceb30" />
                              </span>
                              <span style={{ fontFamily: inter.style.fontFamily, fontSize: '14px', color: 'rgba(255,255,255,0.70)', lineHeight: '22px' }}>
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                        {a.note && (
                          <div
                            className="mt-5 rounded-xl px-4 py-3"
                            style={{ background: 'rgba(252,235,48,0.06)', border: '1px solid rgba(252,235,48,0.15)' }}
                          >
                            <p style={{ fontFamily: inter.style.fontFamily, fontSize: '13px', color: 'rgba(255,255,255,0.65)', lineHeight: '21px', fontStyle: 'italic' }}>
                              {a.note}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
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
            CE QUE VOUS RECEVEZ
        ══════════════════════════════════════════ */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-start">

              <ScrollReveal>
                <p
                  className="mb-4 uppercase tracking-widest"
                  style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '13px', color: '#fceb30', textShadow: '0 0 12px rgba(252,235,48,0.6)' }}
                >
                  Votre livrable
                </p>
                <h2
                  className="mb-6 text-white"
                  style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: '1.15' }}
                >
                  Ce que vous recevez
                </h2>
                <p className="mb-8 text-white/60" style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '27px' }}>
                  Pas un tableau de bord illisible. Un livrable concret, pensé pour que vous puissiez agir.
                  Délai de livraison : <strong className="text-white/90">5 jours ouvrés</strong> après réception de vos accès.
                </p>
                <div className="space-y-4">
                  {livrables.map((l, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 rounded-2xl p-5"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)' }}
                    >
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-mono font-bold text-sm"
                        style={{ background: 'rgba(252,235,48,0.12)', color: '#fceb30' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <p style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '15px', color: '#ffffff', marginBottom: '4px' }}>
                          {l.title}
                        </p>
                        <p style={{ fontFamily: inter.style.fontFamily, fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: '22px' }}>
                          {l.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Placeholder visuels */}
              <ScrollReveal delay={0.15}>
                <div className="space-y-4">
                  {/* Fiche GBP anonymisée */}
                  <a
                    href="https://maps.app.goo.gl/RJ82UwdqE6LWWZxr6"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', display: 'block' }}
                  >
                    <div
                      className="overflow-hidden rounded-2xl"
                      style={{
                        background: '#ffffff',
                        boxShadow: '0 8px 32px -8px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.06)',
                      }}
                    >
                      {/* Mini-carte */}
                      <div className="relative h-28 w-full overflow-hidden" style={{ background: 'linear-gradient(160deg, #e8f0d8 0%, #d4e6c3 30%, #c8ddb5 60%, #b8cf9e 100%)' }}>
                        <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.35 }}>
                          <line x1="0" y1="50" x2="100%" y2="50" stroke="#8fae6a" strokeWidth="8"/>
                          <line x1="0" y1="90" x2="100%" y2="90" stroke="#8fae6a" strokeWidth="4"/>
                          <line x1="100" y1="0" x2="100" y2="100%" stroke="#8fae6a" strokeWidth="6"/>
                          <line x1="280" y1="0" x2="280" y2="100%" stroke="#8fae6a" strokeWidth="4"/>
                          <rect x="110" y="10" width="50" height="28" rx="3" fill="#c5d8a0" stroke="#8fae6a" strokeWidth="1"/>
                          <rect x="175" y="15" width="70" height="24" rx="3" fill="#c5d8a0" stroke="#8fae6a" strokeWidth="1"/>
                        </svg>
                        <div style={{ position: 'absolute', left: '50%', top: '42%', transform: 'translate(-50%,-50%)', zIndex: 2 }}>
                          <div style={{ width: '22px', height: '22px', background: '#EA4335', borderRadius: '50% 50% 50% 0', transform: 'rotate(-45deg)', boxShadow: '0 2px 6px rgba(234,67,53,0.5)' }} />
                          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-65%) rotate(45deg)', width: '8px', height: '8px', background: '#ffffff', borderRadius: '50%' }} />
                        </div>
                        <div style={{ position: 'absolute', bottom: '6px', right: '8px', display: 'flex', alignItems: 'center', gap: '3px', background: 'rgba(255,255,255,0.88)', borderRadius: '3px', padding: '2px 5px' }}>
                          <svg width="10" height="10" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#EA4335"/></svg>
                          <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '8px', fontWeight: 700, color: '#555' }}>Google Maps</span>
                        </div>
                      </div>

                      {/* Corps */}
                      <div style={{ padding: '14px 14px 10px' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '4px' }}>
                          <div>
                            <div style={{ width: '130px', height: '16px', background: '#e0e0e0', borderRadius: '3px', filter: 'blur(4px)', marginBottom: '5px' }} />
                            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', color: '#70757a', margin: 0 }}>Professionnel de l&apos;habitat</p>
                          </div>
                          <svg width="16" height="16" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                          </svg>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '10px' }}>
                          <span style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: '13px', color: '#202124' }}>5,0</span>
                          <div style={{ display: 'flex', gap: '1px' }}>
                            {Array.from({ length: 5 }).map((_, i) => (
                              <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#FBBC04"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                            ))}
                          </div>
                          <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', color: '#70757a' }}>· 12 avis</span>
                        </div>
                        <div style={{ display: 'flex', gap: '5px', marginBottom: '12px' }}>
                          {['🌐 Site web', '🗺️ Itinéraire', '📞 Appeler'].map((btn) => (
                            <div key={btn} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', background: '#f1f3f4', borderRadius: '6px', padding: '5px 3px', cursor: 'default' }}>
                              <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '9px', color: '#1a73e8', fontWeight: 500, textAlign: 'center' }}>{btn}</span>
                            </div>
                          ))}
                        </div>
                        <div style={{ height: '1px', background: '#e0e0e0', margin: '0 -14px 10px' }} />
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="#70757a" style={{ flexShrink: 0 }}><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                            <div style={{ width: '120px', height: '10px', background: '#e0e0e0', borderRadius: '3px', filter: 'blur(4px)' }} />
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="#70757a" style={{ flexShrink: 0 }}><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>
                            <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', color: '#188038', fontWeight: 600 }}>Ouvert</span>
                            <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', color: '#70757a' }}>· Ferme à 18:00</span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="#70757a" style={{ flexShrink: 0 }}><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                            <div style={{ width: '90px', height: '10px', background: '#e0e0e0', borderRadius: '3px', filter: 'blur(4px)' }} />
                          </div>
                        </div>
                        <div style={{ marginTop: '12px', paddingTop: '8px', borderTop: '1px solid #e0e0e0', textAlign: 'center' }}>
                          <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', color: '#1a73e8', fontWeight: 500 }}>Voir sur Google Maps ↗</span>
                        </div>
                      </div>
                    </div>
                  </a>
                  <p style={{ fontFamily: inter.style.fontFamily, fontSize: '11px', color: 'rgba(255,255,255,0.30)', marginTop: '8px', textAlign: 'center', letterSpacing: '0.04em' }}>
                    Données anonymisées · exemple de fiche analysée
                  </p>
                  {/* Rapport PDF */}
                  <div
                    className="overflow-hidden rounded-2xl"
                    style={{ border: '1px solid rgba(255,255,255,0.12)' }}
                  >
                    <img
                      src="/rapport-preview.svg"
                      alt="Aperçu du rapport Diagnostic Visibilité Locale"
                      width={800}
                      height={440}
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                    <div className="px-4 py-3" style={{ background: 'rgba(255,255,255,0.03)' }}>
                      <p style={{ fontFamily: inter.style.fontFamily, fontSize: '12px', color: 'rgba(255,255,255,0.45)' }}>
                        Extrait · Rapport structuré avec plan d&apos;action priorisé, livré en PDF
                      </p>
                    </div>
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
            POUR QUI / PAS POUR QUI
        ══════════════════════════════════════════ */}
        <section className="relative" style={{ background: '#ffffff' }}>
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <ScrollReveal>
              <h2
                className="mb-12"
                style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: '1.15', color: '#0f1e48' }}
              >
                Cet audit est fait pour vous{' '}
                <span style={{ color: '#3262ab' }}>si vous êtes professionnel de l&apos;habitat avec une zone locale</span>
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <ScrollReveal delay={0.1}>
                <div
                  className="h-full rounded-[2rem] p-10"
                  style={{
                    background: 'linear-gradient(145deg, #2a57b8 0%, #3262ab 55%, #1d3f8f 100%)',
                    boxShadow: '0 30px 60px -15px rgba(50,98,171,0.30)',
                  }}
                >
                  <div className="mb-6 h-[3px] w-10 rounded-full" style={{ background: '#fceb30' }} />
                  <h3 className="mb-7" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '18px', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#ffffff' }}>
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
                  className="relative h-full overflow-hidden rounded-[2rem] p-10"
                  style={{
                    background: 'linear-gradient(145deg, #7dd3fc 0%, #bae6fd 55%, #e0f2fe 100%)',
                    border: '1px solid rgba(125,211,252,0.6)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.80), 0 0 40px -4px rgba(125,211,252,0.45), 0 0 80px -8px rgba(56,189,248,0.25), 0 24px 60px -16px rgba(125,211,252,0.30)',
                  }}
                >
                  <div className="pointer-events-none absolute -right-6 -top-6 opacity-[0.25]">
                    <X size={180} weight="bold" color="#ffffff" />
                  </div>
                  <div className="mb-6 h-[3px] w-10 rounded-full bg-white" />
                  <h3 className="mb-7" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '18px', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#264d8c' }}>
                    N&apos;est <span style={{ color: '#ffffff' }}>pas adapté</span>
                  </h3>
                  <ul className="space-y-5">
                    {notForYou.map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1e40af]/50">
                          <X size={11} weight="bold" color="#ffffff" />
                        </span>
                        <span style={{ fontFamily: inter.style.fontFamily, fontSize: '15px', lineHeight: '24px', color: 'rgba(38,77,140,0.80)' }}>
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
            TÉMOIGNAGE
        ══════════════════════════════════════════ */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
            <ScrollReveal>
              <p
                className="mb-10 uppercase tracking-widest"
                style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '13px', color: '#fceb30', textShadow: '0 0 12px rgba(252,235,48,0.6)' }}
              >
                Ils en parlent
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <figure
                className="rounded-[2rem] p-10"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07)',
                }}
              >
                {/* Badge Google */}
                <div className="flex items-center gap-2 mb-6">
                  <svg width="20" height="20" viewBox="0 0 24 24" aria-label="Google">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span style={{ fontFamily: inter.style.fontFamily, fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.55)' }}>
                    Avis Google · 5/5
                  </span>
                  <div className="flex gap-0.5 ml-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={13} weight="fill" color="#fceb30" />
                    ))}
                  </div>
                </div>

                <Quotes size={32} weight="fill" color="rgba(252,235,48,0.5)" className="mb-6" />
                <blockquote
                  className="mb-8 text-white/80"
                  style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500, fontSize: 'clamp(18px, 2.5vw, 24px)', lineHeight: '1.5' }}
                >
                  &quot;Merci à Laetitia qui a su optimiser notre fiche Google et améliorer notre visibilité, elle a été de bon conseil, très pro !!&quot;
                </blockquote>
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <figcaption>
                    <p style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '16px', color: '#ffffff' }}>
                      Pôle Assainissement
                    </p>
                    <p style={{ fontFamily: inter.style.fontFamily, fontSize: '13px', color: 'rgba(255,255,255,0.45)', marginTop: '2px' }}>
                      Professionnel de l&apos;assainissement · Visité en juin 2025
                    </p>
                  </figcaption>
                  <a
                    href="https://share.google/8p7kzzPxMvjpsUmLL"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: '12px',
                      fontWeight: 600,
                      color: 'rgba(255,255,255,0.40)',
                      textDecoration: 'none',
                      borderBottom: '1px solid rgba(255,255,255,0.15)',
                      paddingBottom: '1px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Voir l&apos;avis sur Google
                  </a>
                </div>
              </figure>
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
                Tout ce que vous voulez savoir sur l&apos;audit SEO local
              </h2>
            </ScrollReveal>
            <div className="space-y-0 divide-y" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
              {[
                {
                  q: "Combien de temps dure l'audit ?",
                  a: "L'audit est réalisé en 5 jours ouvrés à partir de la réception de vos accès (Google Business Profile, Google Search Console si disponible). L'appel de restitution dure 45 minutes. Vous n'avez rien à préparer, je vous guide.",
                },
                {
                  q: "Quelle est la différence entre un audit et une optimisation ?",
                  a: "L'audit diagnostique : il identifie ce qui bloque votre visibilité locale et vous dit quoi faire, dans quel ordre. L'optimisation agit : elle met en œuvre les recommandations de l'audit. Les deux sont complémentaires. Certains clients appliquent eux-mêmes les recommandations. D'autres confient la mise en œuvre à la consultante.",
                },
                {
                  q: "Mon entreprise est déjà visible sur Google, est-ce utile ?",
                  a: "Oui, et souvent encore plus. Être visible ne signifie pas être bien positionné. Un artisan peut apparaître en position 8 du Local Pack alors qu'il pourrait être en position 1 avec quelques corrections ciblées. L'audit identifie les gains rapides que vous laissez sur la table, même quand vous pensez que ça tourne.",
                },
              ].map((faq, i) => (
                <ScrollReveal key={i} delay={i * 0.06}>
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
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)' }}
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <span className="h-[2px] w-8 rounded-full" style={{ background: '#fceb30' }} />
                      <ArrowSquareOut size={18} weight="bold" color="rgba(255,255,255,0.35)" />
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
                Je veux savoir pourquoi{' '}
                <span style={{ color: '#fceb30', textShadow: '0 0 18px rgba(252,235,48,0.55), 0 0 48px rgba(252,235,48,0.25)' }}>
                  je suis invisible.
                </span>
              </h2>
              <p
                className="mx-auto mb-10 max-w-[50ch] text-white/55"
                style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '27px' }}
              >
                Audit SEO local complet. Rapport structuré livré en 5 jours ouvrés.
                Appel de restitution de 45 min inclus. 190 €. Sans engagement.
              </p>
              <a
                href="https://calendly.com/laetitia_laghezza_seo_local/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#fceb30] px-8 py-4 font-bold text-[#264d8c] transition-all duration-300 hover:brightness-105 active:scale-[0.98]"
                style={{ fontFamily: inter.style.fontFamily, fontSize: '15px' }}
              >
                Demander mon audit SEO local
                <ArrowRight size={15} weight="bold" />
              </a>
            </ScrollReveal>
          </div>
        </section>

      </main>
    </>
  );
}
