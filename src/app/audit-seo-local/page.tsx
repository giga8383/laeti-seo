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
                <Link
                  href="/offre"
                  className="inline-flex items-center gap-2 rounded-full bg-[#fceb30] px-6 py-3.5 font-bold text-[#264d8c] transition-all duration-300 hover:brightness-105 active:scale-[0.98]"
                  style={{ fontFamily: inter.style.fontFamily, fontSize: '15px' }}
                >
                  Demander mon audit SEO local
                  <ArrowRight size={15} weight="bold" />
                </Link>
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
                  {/* Capture GBP auditée */}
                  <div
                    className="overflow-hidden rounded-2xl"
                    style={{ border: '1px solid rgba(255,255,255,0.12)' }}
                  >
                    <div
                      className="flex items-center justify-center"
                      style={{
                        height: '200px',
                        background: 'linear-gradient(135deg, rgba(38,77,140,0.6) 0%, rgba(15,30,72,0.9) 100%)',
                      }}
                    >
                      {/* ⚠️ À REMPLACER par une capture d'écran anonymisée d'une vraie fiche GBP auditée */}
                      <div className="text-center px-6">
                        <p style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '14px', color: 'rgba(252,235,48,0.8)' }}>
                          Exemple de fiche GBP auditée
                        </p>
                        <p style={{ fontFamily: inter.style.fontFamily, fontSize: '12px', color: 'rgba(255,255,255,0.40)', marginTop: '6px' }}>
                          Capture d&apos;écran anonymisée à intégrer
                        </p>
                      </div>
                    </div>
                    <div className="px-4 py-3" style={{ background: 'rgba(255,255,255,0.03)' }}>
                      <p style={{ fontFamily: inter.style.fontFamily, fontSize: '12px', color: 'rgba(255,255,255,0.45)' }}>
                        Exemple de fiche Google Business Profile avant/après audit
                      </p>
                    </div>
                  </div>
                  {/* Rapport PDF */}
                  <div
                    className="overflow-hidden rounded-2xl"
                    style={{ border: '1px solid rgba(255,255,255,0.12)' }}
                  >
                    <div
                      className="flex items-center justify-center"
                      style={{
                        height: '160px',
                        background: 'linear-gradient(135deg, rgba(15,30,72,0.9) 0%, rgba(38,77,140,0.6) 100%)',
                      }}
                    >
                      {/* ⚠️ À REMPLACER par une photo du rapport PDF livré */}
                      <div className="text-center px-6">
                        <p style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '14px', color: 'rgba(252,235,48,0.8)' }}>
                          Aperçu du rapport livré
                        </p>
                        <p style={{ fontFamily: inter.style.fontFamily, fontSize: '12px', color: 'rgba(255,255,255,0.40)', marginTop: '6px' }}>
                          Photo du rapport PDF à intégrer
                        </p>
                      </div>
                    </div>
                    <div className="px-4 py-3" style={{ background: 'rgba(255,255,255,0.03)' }}>
                      <p style={{ fontFamily: inter.style.fontFamily, fontSize: '12px', color: 'rgba(255,255,255,0.45)' }}>
                        Rapport structuré avec plan d&apos;action priorisé, livré en PDF
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
                <span style={{ color: 'rgba(15,30,72,0.40)' }}>si vous êtes professionnel de l&apos;habitat avec une zone locale</span>
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
                  className="h-full rounded-[2rem] p-10"
                  style={{ background: '#f4f6fb', border: '1px solid rgba(15,30,72,0.10)' }}
                >
                  <div className="mb-6 h-[3px] w-10 rounded-full" style={{ background: 'rgba(15,30,72,0.20)' }} />
                  <h3 className="mb-7" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '18px', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(15,30,72,0.40)' }}>
                    N&apos;est <span style={{ color: '#0f1e48' }}>pas adapté</span>
                  </h3>
                  <ul className="space-y-5">
                    {notForYou.map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ background: 'rgba(15,30,72,0.08)' }}>
                          <X size={11} weight="bold" color="rgba(15,30,72,0.40)" />
                        </span>
                        <span style={{ fontFamily: inter.style.fontFamily, fontSize: '15px', lineHeight: '24px', color: 'rgba(15,30,72,0.65)' }}>
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
            {/* ⚠️ TÉMOIGNAGE POLE ASSAINISSEMENT :à remplacer par l'avis Google exact */}
            <ScrollReveal delay={0.1}>
              <figure
                className="rounded-[2rem] p-10"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07)',
                }}
              >
                <Quotes size={32} weight="fill" color="rgba(252,235,48,0.5)" className="mb-6" />
                <blockquote
                  className="mb-8 text-white/80"
                  style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500, fontSize: 'clamp(18px, 2.5vw, 24px)', lineHeight: '1.5' }}
                >
                  {/* ⚠️ Remplacer par le texte exact de l'avis Google de Pole Assainissement */}
                  &quot;Laetitia a analysé notre fiche Google et identifié des problèmes que je n&apos;avais jamais vus. En quelques semaines après ses corrections, on a commencé à recevoir des appels de clients qu&apos;on ne connaissait pas du tout. Le rapport était très clair, sans jargon.&quot;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="flex gap-0.5 mb-2">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} size={16} weight="fill" color="#fceb30" />
                      ))}
                    </div>
                    <figcaption>
                      <p style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '16px', color: '#ffffff' }}>
                        Pôle Assainissement
                      </p>
                      <p style={{ fontFamily: inter.style.fontFamily, fontSize: '13px', color: 'rgba(255,255,255,0.45)', marginTop: '2px' }}>
                        Professionnel de l&apos;assainissement · Avis Google vérifié
                      </p>
                    </figcaption>
                  </div>
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
              <Link
                href="/offre"
                className="inline-flex items-center gap-2 rounded-full bg-[#fceb30] px-8 py-4 font-bold text-[#264d8c] transition-all duration-300 hover:brightness-105 active:scale-[0.98]"
                style={{ fontFamily: inter.style.fontFamily, fontSize: '15px' }}
              >
                Demander mon audit SEO local
                <ArrowRight size={15} weight="bold" />
              </Link>
            </ScrollReveal>
          </div>
        </section>

      </main>
    </>
  );
}
