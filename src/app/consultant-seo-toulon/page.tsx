import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';
import { inter } from '@/lib/fonts';
import { Check, ArrowRight, MapPin, X } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

/* -- Métadonnées SEO -- */
export const metadata: Metadata = {
  title: 'Consultante SEO Toulon, Visibilité Google pour pros de l\'habitat dans le Var',
  description:
    'Vous êtes artisan, cuisiniste, décorateur ou menuisier à Toulon ? Votre fiche Google ne vous rapporte pas assez de devis ? J\'analyse votre présence locale et vous livre un plan d\'action en 5 jours. Diagnostic à 190 €.',
  alternates: {
    canonical: 'https://laeti-seo.fr/consultant-seo-toulon',
  },
  keywords: [
    'consultant SEO Toulon',
    'consultante SEO Toulon',
    'SEO local Toulon',
    'référencement local Toulon',
    'Google Business Profile Toulon',
    'visibilité Google Toulon',
    'SEO artisan Toulon',
    'référencement artisan Var',
    'consultant SEO freelance Var',
    'visibilité locale professionnels habitat Toulon',
  ],
  openGraph: {
    url: 'https://laeti-seo.fr/consultant-seo-toulon',
    title: 'Consultante SEO Toulon | Laeti SEO',
    description:
      'Spécialiste SEO local à Toulon pour les pros de l\'habitat. Diagnostic de visibilité Google, fiche Google Business Profile, plan d\'action priorisé en 5 jours.',
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
      name: 'Laeti SEO, Consultante SEO Toulon',
      description: "Consultante SEO freelance spécialisée dans le référencement local des professionnels de l'habitat à Toulon et dans le Var.",
      url: 'https://laeti-seo.fr/consultant-seo-toulon',
      areaServed: [
        { '@type': 'City', name: 'Toulon' },
        { '@type': 'City', name: 'La Seyne-sur-Mer' },
        { '@type': 'City', name: 'Hyères' },
        { '@type': 'City', name: 'Ollioules' },
        { '@type': 'City', name: 'Six-Fours-les-Plages' },
        { '@type': 'City', name: 'Sanary-sur-Mer' },
        { '@type': 'City', name: 'La Garde' },
        { '@type': 'City', name: 'Bandol' },
        { '@type': 'AdministrativeArea', name: 'Var' },
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
          name: 'Le SEO local est-il efficace pour les artisans et décorateurs à Toulon ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, et le potentiel est souvent sous-estimé à Toulon. La ville regroupe une population stable d'environ 170 000 habitants, fonctionnaires, familles militaires, actifs, avec un fort pouvoir d'achat et de nombreux projets de rénovation. Le marché des résidences secondaires dans le Var amplifie encore la demande : propriétaires d'une villa à Hyères ou à Sanary qui cherchent un cuisiniste ou un décorateur de confiance se tournent en priorité vers Google. Les professionnels de l'habitat bien référencés à Toulon captent ces contacts sans effort publicitaire.",
          },
        },
        {
          '@type': 'Question',
          name: 'Pourquoi ma fiche Google ne m\'apporte pas de clients à Toulon ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Une fiche Google Business Profile qui n'apporte pas de clients à Toulon souffre généralement de l'un de ces problèmes : des catégories trop vagues qui empêchent Google de comprendre votre activité exacte, une description sans mots-clés locaux pertinents (Toulon, Var, vos services précis), un manque d'avis clients récents, ou une zone de chalandise mal configurée qui exclut des communes proches pourtant dans votre périmètre. Parfois c'est tout ça à la fois, et c'est exactement ce que révèle un diagnostic.",
          },
        },
        {
          '@type': 'Question',
          name: 'Quelle est la concurrence SEO dans le secteur de Toulon ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "La concurrence SEO locale à Toulon est réelle mais sensiblement moins dense qu'à Marseille ou Nice. Cela signifie que les positions dans le pack local Google sont atteignables plus rapidement, à condition de travailler les bons leviers. Beaucoup d'artisans et de professionnels de l'habitat dans le Var ont une présence numérique insuffisante, c'est une fenêtre d'opportunité concrète pour ceux qui décident de s'y investir maintenant plutôt que dans deux ans.",
          },
        },
        {
          '@type': 'Question',
          name: 'Comment cibler les communes du Var autour de Toulon en SEO local ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Si vous intervenez à Toulon mais aussi à Hyères, La Seyne-sur-Mer, Six-Fours ou Sanary-sur-Mer, votre stratégie SEO local doit le refléter. Sur Google Business Profile, la zone de chalandise doit englober toutes vos zones d'intervention réelles. Sur votre site, des pages ou du contenu mentionnant ces communes renforce vos signaux locaux. Et dans la description de votre fiche, citer naturellement les secteurs que vous couvrez aide Google à vous afficher pour des recherches comme \"menuisier Hyères\" ou \"cuisiniste Var\". Le diagnostic identifie les lacunes et priorise ce qui a le plus d'impact.",
          },
        },
        {
          '@type': 'Question',
          name: 'En combien de temps peut-on améliorer son référencement local à Toulon ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "À Toulon, les premières améliorations de positionnement dans Google Maps se constatent souvent en 3 à 8 semaines après les optimisations, un délai plus court qu'à Marseille du fait d'une concurrence moins intense sur certaines niches. La fiche Google Business Profile réagit vite aux changements : une description retravaillée, des photos ajoutées et une stratégie d'avis mise en place peuvent déclencher une progression visible en quelques semaines. Les résultats durables sur le référencement site se consolident sur 2 à 4 mois.",
          },
        },
        {
          '@type': 'Question',
          name: 'Travaillez-vous uniquement à Toulon ou dans tout le Var ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Je travaille à distance avec tous les professionnels de l'habitat du Var : Toulon et ses communes voisines (La Seyne, La Garde, Ollioules), mais aussi Hyères, Six-Fours-les-Plages, Sanary-sur-Mer, Bandol et plus largement tout le département. La distance n'a aucun impact sur la qualité du diagnostic : tout se fait en ligne, avec un questionnaire initial, une analyse approfondie de votre présence Google et un rapport livré sous 5 jours.",
          },
        },
        {
          '@type': 'Question',
          name: 'Comment les avis Google influencent-ils ma visibilité à Toulon ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Les avis Google sont l'un des trois critères principaux que Google utilise pour classer les fiches locales à Toulon : leur nombre, leur régularité et votre façon d'y répondre. Un concurrent qui a 40 avis récents et bien répondus sera presque toujours mieux positionné qu'une fiche avec 10 avis vieux de deux ans. Dans le diagnostic, j'analyse l'état de vos avis, je compare avec vos concurrents directs à Toulon et je vous propose une méthode concrète et non intrusive pour en obtenir régulièrement.",
          },
        },
        {
          '@type': 'Question',
          name: 'Quelle différence entre un diagnostic SEO et un accompagnement long terme à Toulon ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Le diagnostic est un état des lieux complet de votre visibilité locale à Toulon, livré en une fois sous 5 jours pour 190 €. Il vous donne toutes les clés pour comprendre votre situation et agir vous-même, ou faire agir quelqu'un. Le Sprint local (790 €) est un accompagnement de 3 mois où je réalise moi-même les optimisations : fiche Google, site, contenu local, stratégie d'avis. C'est la suite logique du diagnostic pour ceux qui veulent déléguer la mise en œuvre.",
          },
        },
      ],
    },
  ],
};

const forYou = [
  'Vous exercez à Toulon ou dans le Var et vos clients potentiels ne vous trouvent pas sur Google',
  'Vous avez une fiche Google Business Profile qui génère peu ou pas d\'appels',
  'Vous constatez que des concurrents moins expérimentés que vous apparaissent avant vous dans les résultats',
  'Vous intervenez aussi à Hyères, La Seyne, Six-Fours ou d\'autres communes du Var et voulez y être visible',
  'Vous voulez un avis d\'expert indépendant sur votre présence locale, sans vous engager sur 12 mois',
];

const notForYou = [
  'Si vous cherchez à déléguer entièrement sans être impliqué (répondre aux avis, mettre à jour vos informations…)',
  'Si vous avez déjà une stratégie SEO local en place et des résultats satisfaisants',
  'Si votre zone d\'intervention ou votre offre de services est encore en cours de définition',
];

const zones = [
  { label: 'Toulon',             href: null },
  { label: 'La Seyne-sur-Mer',  href: null },
  { label: 'La Garde',          href: null },
  { label: 'Ollioules',         href: null },
  { label: 'Hyères',            href: null },
  { label: 'Six-Fours-les-Plages', href: null },
  { label: 'Sanary-sur-Mer',    href: null },
  { label: 'Bandol',            href: null },
  { label: 'Le Pradet',         href: null },
  { label: 'Carqueiranne',      href: null },
  { label: 'Solliès-Pont',      href: null },
  { label: 'Marseille',         href: '/consultant-seo-marseille' },
];

const steps = [
  {
    num: '01',
    title: 'Réservation en ligne',
    desc: 'Vous commandez le diagnostic en quelques clics. Je vous envoie un questionnaire simple pour cerner votre métier, vos zones d\'intervention dans le Var et vos objectifs prioritaires.',
  },
  {
    num: '02',
    title: 'Immersion dans votre présence',
    desc: 'J\'analyse en profondeur votre fiche Google Business Profile, la qualité de vos avis, votre positionnement face aux concurrents à Toulon, et les signaux SEO de votre site web.',
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
                  Toulon
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.13}>
              <p
                className="mb-8 max-w-[58ch] text-white/60"
                style={{ fontFamily: inter.style.fontFamily, fontSize: '17px', lineHeight: '28px' }}
              >
                Dans le Var, la concurrence SEO locale est encore accessible, mais pas pour longtemps.
                Si vous êtes professionnel de l&apos;habitat à Toulon, c&apos;est maintenant qu&apos;il faut
                travailler votre visibilité Google, avant que vos concurrents ne le fassent à votre place.
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
            CONTEXTE LOCAL TOULON
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
                  Toulon et le Var : un marché de l&apos;habitat soutenu, une visibilité locale encore à conquérir
                </h2>
                <div
                  className="space-y-4 text-white/65"
                  style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '27px' }}
                >
                  <p>
                    Toulon est la préfecture du Var, troisième ville de PACA. Sa population mêle
                    familles militaires, fonctionnaires, actifs et retraités, un socle stable avec
                    un fort volume de projets immobiliers et de rénovation. Et le Var, c&apos;est aussi
                    Hyères, Sanary, Bandol, Six-Fours : des communes à fort pouvoir d&apos;achat où
                    la demande en décoration et en menuiserie est constante.
                  </p>
                  <p>
                    La bonne nouvelle pour vous : le SEO local dans le Var est <strong className="text-white/90">moins saturé
                    qu&apos;à Marseille ou Nice</strong>. Beaucoup de vos concurrents n&apos;ont pas encore
                    travaillé sérieusement leur présence sur Google. Les positions dans le pack local
                    sont accessibles, à condition d&apos;agir avant eux.
                  </p>
                  <p>
                    Les recherches de type <strong className="text-white/90">&quot;cuisiniste Toulon&quot;</strong>,{' '}
                    <strong className="text-white/90">&quot;décorateur intérieur Var&quot;</strong> ou{' '}
                    <strong className="text-white/90">&quot;artisan menuisier La Seyne-sur-Mer&quot;</strong> génèrent
                    des contacts qualifiés chaque jour. La question est : est-ce vous que Google
                    met en avant, ou quelqu&apos;un d&apos;autre ?
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
                    Les signaux que Google surveille pour décider qui apparaît à Toulon :
                  </p>
                  <ul className="space-y-4">
                    {[
                      'La complétude et la cohérence de votre fiche Google Business Profile',
                      'Le nombre et la régularité de vos avis clients récents',
                      'La pertinence de vos catégories par rapport à la requête recherchée',
                      'Les mots-clés locaux présents dans votre description et sur votre site',
                      'La cohérence de vos coordonnées entre tous les annuaires du web',
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
                      Dans le Var, beaucoup de fiches Google sont incomplètes. C&apos;est une fenêtre d&apos;opportunité, mais elle ne restera pas ouverte indéfiniment.
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
                Ce que j&apos;inspecte pour identifier vos freins à Toulon
              </h2>
              <p
                className="mb-14 max-w-[60ch] text-white/55"
                style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '26px' }}
              >
                Le diagnostic est une photographie précise de votre situation SEO local dans
                le Var. Je compare votre présence à celle de vos concurrents directs à Toulon
                et je vous indique exactement ce qui freine ou favorise votre visibilité.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Audit de la fiche Google Business Profile',
                  desc: 'Je passe en revue chaque élément de votre fiche : catégorie principale, catégories secondaires, description, services, attributs, photos, horaires, et je compare avec les fiches les mieux positionnées à Toulon sur vos mots-clés.',
                },
                {
                  title: 'Réputation et stratégie d\'avis',
                  desc: 'Combien d\'avis, à quelle fréquence, avec quelles notes ? Je cartographie l\'état de votre réputation locale dans le Var et vous propose une stratégie simple pour obtenir des avis réguliers sans harceler vos clients.',
                },
                {
                  title: 'Concurrents les mieux positionnés',
                  desc: 'Je sélectionne les professionnels qui vous devancent sur vos requêtes cibles à Toulon et j\'identifie ce qui leur permet de s\'imposer. Pas pour les copier, mais pour comprendre le niveau à atteindre et comment y arriver.',
                },
                {
                  title: 'Présence locale de votre site',
                  desc: 'Votre site parle-t-il de Toulon, du Var, de vos communes d\'intervention ? Les balises sont-elles correctement renseignées ? La version mobile est-elle fluide ? Ces éléments pèsent dans votre classement local.',
                },
                {
                  title: 'Cohérence NAP sur le web',
                  desc: 'Google croise vos informations entre votre fiche, votre site, Pages Jaunes, Yelp et d\'autres annuaires. Une incohérence dans votre nom, adresse ou téléphone sur l\'un de ces supports affaiblit votre référencement local dans le Var.',
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
            ZONES D'INTERVENTION
        ------------------------------------------ */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
            <ScrollReveal>
              <h2
                className="mb-4 text-white"
                style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 38px)', lineHeight: '1.2' }}
              >
                Toulon, le littoral varois et l&apos;arrière-pays
              </h2>
              <p
                className="mb-10 max-w-[60ch] text-white/50"
                style={{ fontFamily: inter.style.fontFamily, fontSize: '15px', lineHeight: '25px' }}
              >
                J&apos;interviens pour tous les professionnels de l&apos;habitat du Var, qu&apos;ils soient
                basés à Toulon ou dans les communes voisines. La totalité du diagnostic
                se fait à distance, aucun déplacement nécessaire.
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
                Ce que les pros de l&apos;habitat du Var me posent comme questions
              </h2>
            </ScrollReveal>

            <div className="space-y-0 divide-y" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
              {[
                {
                  q: 'Le SEO local est-il efficace pour les artisans et décorateurs à Toulon ?',
                  a: "Oui, et le potentiel est souvent sous-estimé dans le Var. Toulon regroupe environ 170 000 habitants avec une population stable et un fort taux de propriétaires. Le marché des résidences secondaires à Hyères, Sanary ou Bandol amplifie encore la demande : un propriétaire qui cherche un cuisiniste ou un décorateur de confiance pour sa villa se tourne en priorité vers Google. Les professionnels bien référencés à Toulon captent ces contacts sans dépenser en publicité.",
                },
                {
                  q: 'Pourquoi ma fiche Google ne m\'apporte pas de clients à Toulon ?',
                  a: "Une fiche Google qui n'apporte pas de clients à Toulon souffre généralement de catégories trop vagues, d'une description sans mots-clés locaux pertinents, d'un manque d'avis récents ou d'une zone de chalandise mal configurée. Parfois c'est tout ça à la fois. C'est exactement ce que révèle un diagnostic : les causes précises et les actions qui permettent de les corriger.",
                },
                {
                  q: 'Quelle est la concurrence SEO dans le secteur de Toulon ?',
                  a: "La concurrence SEO locale à Toulon est sensiblement moins dense qu'à Marseille ou Nice. Les positions dans le pack local Google sont atteignables plus rapidement. Beaucoup d'artisans et de professionnels de l'habitat dans le Var ont une présence numérique insuffisante, c'est une fenêtre d'opportunité concrète pour ceux qui décident de s'y investir maintenant.",
                },
                {
                  q: 'Comment cibler les communes du Var autour de Toulon en SEO local ?',
                  a: "Si vous intervenez aussi à Hyères, La Seyne, Six-Fours ou Sanary, votre stratégie SEO local doit le refléter. Sur Google Business Profile, la zone de chalandise doit couvrir toutes vos zones d'intervention réelles. Sur votre site, du contenu mentionnant ces communes renforce vos signaux locaux. Dans la description de votre fiche, citer les secteurs couverts aide Google à vous afficher pour des requêtes comme \"menuisier Hyères\" ou \"cuisiniste Var\".",
                },
                {
                  q: 'En combien de temps peut-on améliorer son référencement local à Toulon ?',
                  a: "À Toulon, les premières améliorations de positionnement dans Google Maps se constatent souvent en 3 à 8 semaines après les optimisations, un délai plus court qu'à Marseille du fait d'une concurrence moins intense. La fiche Google réagit vite aux changements bien ciblés. Les résultats durables sur le référencement naturel du site se consolident sur 2 à 4 mois.",
                },
                {
                  q: 'Travaillez-vous uniquement à Toulon ou dans tout le Var ?',
                  a: "Je travaille à distance avec tous les professionnels de l'habitat du Var : Toulon et ses communes voisines (La Seyne, La Garde, Ollioules), mais aussi Hyères, Six-Fours, Sanary-sur-Mer, Bandol et plus largement tout le département. La distance n'a aucun impact sur la qualité du diagnostic : tout se fait en ligne.",
                },
                {
                  q: 'Comment les avis Google influencent-ils ma visibilité à Toulon ?',
                  a: "Les avis Google font partie des trois critères principaux de classement dans le pack local à Toulon : leur nombre, leur régularité et la qualité de vos réponses. Un concurrent avec 40 avis récents et bien répondus sera presque toujours mieux positionné qu'une fiche avec 10 avis vieux de deux ans. Dans le diagnostic, j'analyse vos avis, je compare avec vos concurrents directs et je vous propose une méthode concrète pour en obtenir régulièrement.",
                },
                {
                  q: 'Quelle différence entre le diagnostic et le Sprint local ?',
                  a: "Le diagnostic (190 €) est un état des lieux complet livré en 5 jours : vous repartez avec une vision claire de votre situation et un plan d'action précis. Le Sprint local (790 €) est un accompagnement de 3 mois où je réalise moi-même les optimisations. C'est la suite naturelle pour ceux qui préfèrent déléguer la mise en œuvre plutôt que de la gérer seuls.",
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
                Dans le Var, la fenêtre est encore ouverte.{' '}
                <span style={{ color: '#fceb30', textShadow: '0 0 18px rgba(252,235,48,0.55), 0 0 48px rgba(252,235,48,0.25)' }}>
                  Profitez-en avant vos concurrents.
                </span>
              </h2>
              <p
                className="mx-auto mb-10 max-w-[52ch] text-white/55"
                style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '27px' }}
              >
                Un diagnostic complet de votre visibilité Google à Toulon et dans le Var,
                livré sous 5 jours. 190 €. Sans engagement.
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
