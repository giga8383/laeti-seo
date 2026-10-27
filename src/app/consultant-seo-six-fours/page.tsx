import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';
import MagneticButton from '@/components/MagneticButton';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import { inter } from '@/lib/fonts';

const URL = 'https://laeti-seo.fr/consultant-seo-six-fours';
const BUSINESS_ID = 'https://laeti-seo.fr/#business';
const CALENDLY = 'https://calendly.com/laetitia_laghezza_seo_local/30min';

const TITLE = "Consultant SEO à Six-Fours-les-Plages pour l'habitat";
const DESCRIPTION =
  "Consultant SEO indépendant à Six-Fours-les-Plages pour artisans et pros de l'habitat. Diagnostic à 790 € livré en 5 jours, prix affichés.";

export const metadata: Metadata = {
  // `absolute` : évite le suffixe « | Laeti SEO » du gabarit global.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: URL,
    siteName: 'Laeti SEO',
    title: TITLE,
    description: DESCRIPTION,
  },
};

// Mêmes textes pour l'accordéon visible et pour le FAQPage du JSON-LD : ne les modifier qu'ensemble.
const faqs = [
  {
    q: "Combien de temps avant d'apparaître sur « consultant seo six fours les plages » ?",
    a: "Sur une requête aussi peu concurrentielle, les premiers effets sur la fiche Google Business Profile arrivent en 4 à 8 semaines. Sur les pages locales, comptez 3 à 6 mois. Pour situer : les variantes consultant seo six fours les plages et seo six fours placent aujourd'hui mon site autour de la position 34 et 78, sur l'accueil. Je publie ces chiffres parce qu'ils sont vérifiables, et je les redonnerai dans trois mois.",
  },
  {
    q: 'Faut-il une page par quartier - Le Brusc, Portissol, le Fort ?',
    a: "Non, pas au début. Trois pages de 300 mots sur trois quartiers d'une même commune se cannibalisent. Une bonne page Six-Fours avec les quartiers traités à l'intérieur suffit. On crée une page quartier quand le volume de recherche et l'offre le justifient - typiquement pour la location saisonnière au Brusc.",
  },
  {
    q: 'Mon entreprise est à Sanary ou à Ollioules. Est-ce bloquant pour me positionner à Six-Fours ?',
    a: "Google intègre la distance, donc non, ce n'est pas bloquant, mais ce n'est pas neutre. Depuis Sanary, vous êtes à dix minutes du centre de Six-Fours : c'est jouable sur beaucoup de requêtes, pas sur toutes. La bonne stratégie : dominer d'abord votre commune, puis attaquer la voisine avec une page dédiée. Jamais l'inverse.",
  },
  {
    q: 'Un cuisiniste de Six-Fours doit-il cibler aussi Sanary et La Seyne ?',
    a: "Oui, s'il y travaille. Un cuisiniste vend sur 20 à 30 km. Trois pages - Six-Fours, Sanary, La Seyne - couvrent le bassin. Une seule page « cuisine haut de gamme dans le Var » ne couvre rien.",
  },
  {
    q: 'La saison estivale change-t-elle quelque chose au référencement ?',
    a: "Oui. Les recherches de rénovation montent d'avril à septembre, portées par les résidences secondaires et les locations de tourisme. Un chantier décidé en juillet se signe souvent en septembre. Le travail SEO, lui, se fait en février. Si vous lisez cette page en juin, vous êtes en retard pour la saison en cours. Pas pour la suivante.",
  },
  {
    q: "Combien d'avis Google faut-il pour entrer dans le pack local ?",
    a: "Aucun seuil officiel. Ce qui compte : le nombre, la note, la fraîcheur, la régularité. Mieux vaut 15 avis étalés sur douze mois que 40 avis concentrés sur trois semaines. Et ils servent autant à classer qu'à convaincre : 96 % des consommateurs les lisent (BrightLocal, 2025).",
  },
  {
    q: 'Consultant SEO indépendant ou agence SEO à Six-Fours-les-Plages ?',
    a: "Trois différences : qui fait le travail, combien vous payez, ce que vous voyez. Une agence seo six fours les plages facture une structure en plus de la production. Ici, une seule personne, des prix affichés, un livrable daté. Pour un artisan qui n'a pas de service marketing, c'est le bon format. Pour un groupe multi-sites, non.",
  },
  {
    q: 'Faut-il refaire son site avant de travailler le SEO local ?',
    a: "Non. Dans la majorité des cas, une fiche Google Business Profile bien tenue et deux ou trois pages locales solides rapportent plus qu'un site refait. Refaites le site quand il bloque techniquement : lenteur, absence de balisage, impossible d'ajouter des pages. Pas avant.",
  },
];

const areaServed = [
  'Six-Fours-les-Plages',
  'Sanary-sur-Mer',
  'Ollioules',
  'La Seyne-sur-Mer',
  'Bandol',
  'Saint-Cyr-sur-Mer',
  "La Cadière-d'Azur",
  'Le Castellet',
  'Toulon',
  'La Valette-du-Var',
  'Hyères',
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${URL}#webpage`,
      url: URL,
      name: 'Consultant SEO à Six-Fours-les-Plages',
      inLanguage: 'fr-FR',
      isPartOf: { '@id': 'https://laeti-seo.fr/#website' },
      about: { '@id': BUSINESS_ID },
      breadcrumb: { '@id': `${URL}#breadcrumb` },
      mainEntity: { '@id': `${URL}#service` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://laeti-seo.fr/' },
        { '@type': 'ListItem', position: 2, name: 'Consultant SEO Six-Fours-les-Plages', item: URL },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${URL}#service`,
      name: 'Consultant SEO à Six-Fours-les-Plages',
      serviceType: "Référencement local (SEO local) pour artisans et entreprises de l'habitat",
      url: URL,
      description:
        "Référencement local pour les artisans et les entreprises de l'habitat de Six-Fours-les-Plages et de l'ouest varois : optimisation de la fiche Google Business Profile, création de pages locales, collecte et gestion des avis, cohérence NAP. Une méthode mesurable, des prix affichés et un livrable daté.",
      provider: { '@id': BUSINESS_ID },
      areaServed: [
        ...areaServed.map((name) => ({ '@type': 'City', name })),
        { '@type': 'AdministrativeArea', name: "Provence-Alpes-Côte d'Azur" },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Prestations de référencement local',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Diagnostic local',
            description:
              "État des lieux complet : fiche Google Business Profile, cohérence NAP, pages existantes, avis, concurrents visibles sur Six-Fours et Sanary, requêtes réelles avec impressions et positions. Plan d'action priorisé et appel de 45 minutes pour le passer en revue. Livré en 5 jours ouvrés.",
            price: '790',
            priceCurrency: 'EUR',
            valueAddedTaxIncluded: true,
            availability: 'https://schema.org/InStock',
            url: URL,
            itemOffered: {
              '@type': 'Service',
              name: 'Diagnostic local',
              serviceType: 'Audit SEO local',
              provider: { '@id': BUSINESS_ID },
            },
          },
          {
            '@type': 'Offer',
            name: 'Sprint local',
            description:
              "Trois mois pour poser les fondations : optimisation de la fiche Google Business Profile, création ou refonte des pages locales, mise en route de la collecte d'avis, suivi mensuel des positions. 500 € par mois pendant 3 mois, soit 1 500 € au total. Arrêt possible à la fin des trois mois.",
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '500',
              priceCurrency: 'EUR',
              unitCode: 'MON',
              valueAddedTaxIncluded: true,
              billingDuration: 3,
              billingIncrement: 1,
            },
            availability: 'https://schema.org/InStock',
            url: URL,
            itemOffered: {
              '@type': 'Service',
              name: 'Sprint local',
              serviceType: 'Accompagnement SEO local sur 3 mois',
              provider: { '@id': BUSINESS_ID },
            },
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${URL}#faq`,
      inLanguage: 'fr-FR',
      isPartOf: { '@id': `${URL}#webpage` },
      about: { '@id': BUSINESS_ID },
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

const yellowLabel = {
  fontFamily: 'Satoshi, "Satoshi Fallback", ui-sans-serif, system-ui, -apple-system, sans-serif',
  fontWeight: 700,
  fontSize: '22px',
  lineHeight: '28px',
  textTransform: 'uppercase',
  color: '#fceb30',
  textShadow: '0 0 12px rgba(252,235,48,0.7), 0 0 28px rgba(252,235,48,0.4), 0 0 56px rgba(252,235,48,0.2)',
} as const;

const blueLabel = {
  ...yellowLabel,
  color: '#2355b6',
  textShadow: '0 0 12px rgba(35,85,182,0.6), 0 0 28px rgba(35,85,182,0.35), 0 0 56px rgba(35,85,182,0.15)',
} as const;

const h2 = { fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(30px, 4vw, 44px)', lineHeight: '1.1' } as const;
const h3 = { fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '1.25' } as const;
const body = { fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '26px' } as const;

const link = 'underline underline-offset-4 text-[#fceb30] hover:brightness-110';
const linkBlue = 'font-semibold text-[#2355b6] underline underline-offset-4';

const B = ({ children }: { children: ReactNode }) => <strong className="text-white">{children}</strong>;

function Card({ n, title, children, delay = 0 }: { n: number; title: string; children: ReactNode; delay?: number }) {
  return (
    <ScrollReveal delay={delay} className="h-full">
      <li className="h-full rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]">
        <p className="mb-3 text-[#fceb30]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '15px', letterSpacing: '0.06em' }}>
          0{n}
        </p>
        <h3 className="mb-3 text-white" style={h3}>{title}</h3>
        <p className="text-white/65" style={body}>{children}</p>
      </li>
    </ScrollReveal>
  );
}

const enBref: [string, string][] = [
  ['Pour qui', "artisans et entreprises de l'habitat de Six-Fours-les-Plages et de l'ouest varois."],
  ['Ce que je travaille', 'fiche Google Business Profile, pages locales, avis, cohérence NAP.'],
  ['Prix affichés', 'diagnostic à 790 €, livré en 5 jours ouvrés. Sprint local à 500 €/mois sur 3 mois.'],
  ['Zone', 'Six-Fours, Sanary-sur-Mer, Ollioules, La Seyne-sur-Mer, Bandol, Toulon.'],
  ['Premier pas', 'un appel de 20 minutes, sans engagement.'],
];

export default function ConsultantSeoSixFoursPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="relative bg-transparent" style={{ paddingTop: '120px' }}>
          <div className="mx-auto max-w-4xl px-6 pb-20 pt-12 md:pt-20">
            <ScrollReveal>
              <p className="mb-5" style={yellowLabel}>Six-Fours-les-Plages</p>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h1
                className="mb-8 text-white"
                style={{
                  fontFamily: 'Satoshi, "Satoshi Fallback", ui-sans-serif, system-ui, -apple-system, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(32px, 5.4vw, 54px)',
                  lineHeight: '1.08',
                  textTransform: 'uppercase',
                }}
              >
                Consultant SEO{' '}
                <span style={{ color: '#fceb30', textShadow: '0 0 18px rgba(252,235,48,0.55), 0 0 48px rgba(252,235,48,0.25)' }}>
                  à Six-Fours-les-Plages
                </span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.14}>
              <div className="max-w-[66ch] space-y-5 text-white/75" style={body}>
                <p>
                  Vous tapez <B>consultant seo six fours</B> dans Google. Vous tombez sur une offre d&apos;emploi, deux annuaires et une
                  agence basée à Toulon. Aucune page écrite pour Six-Fours. Celle-ci comble le trou.
                </p>
                <p>
                  Je suis consultante SEO indépendante. Douze ans de métier. Une spécialité : les artisans et les entreprises de
                  l&apos;habitat. Cuisinistes, menuisiers, rénovateurs, décorateurs, architectes d&apos;intérieur. Pas de e-commerce.
                  Pas de grands comptes. Des pros qui vendent des chantiers et qui ont besoin d&apos;être trouvés à Six-Fours, à Sanary
                  et à Ollioules.
                </p>
                <p>
                  Une précision avant d&apos;aller plus loin, et elle est inconfortable : cette page n&apos;existait pas. Google ne la
                  connaissait pas. Sur les 90 derniers jours (29 juillet au 27 octobre 2026), les requêtes contenant « six fours » ont
                  généré 170 impressions et 0 clic, pour une position moyenne de 58,2. Et 98,8 % de ces impressions sont arrivées sur
                  la page d&apos;accueil. Autrement dit : la demande existe, la page dédiée non. Vous lisez la correction.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <MagneticButton
                  as="a"
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#fceb30] px-7 py-3.5 text-[#264d8c] active:scale-[0.98]"
                  style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '24px', boxShadow: '0 0 20px -4px rgba(252,235,48,0.5), 0 0 48px -8px rgba(252,235,48,0.25)' }}
                  strength={0.3}
                >
                  Faire le point sur ma visibilité
                </MagneticButton>
                <Link
                  href="/offre"
                  className="rounded-full border border-white/30 px-7 py-3.5 text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
                  style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '24px' }}
                >
                  Voir les offres
                </Link>
              </div>
              <p className="mt-4 text-white/55" style={{ fontFamily: inter.style.fontFamily, fontSize: '14px' }}>
                Appel gratuit de 20 minutes · Sans engagement
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── En bref ── */}
        <section className="relative bg-white" style={{ backgroundColor: '#ffffff' }}>
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
            <ScrollReveal>
              <p className="mb-4" style={blueLabel}>En bref</p>
            </ScrollReveal>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {enBref.map(([k, v], i) => (
                <ScrollReveal key={k} delay={0.05 + i * 0.06}>
                  <li className="flex items-start gap-4 rounded-[1.25rem] border border-[#264d8c]/10 bg-[#f2f5fb] px-6 py-5">
                    <span className="mt-0.5 font-bold text-[#2355b6]" aria-hidden="true">✓</span>
                    <span className="text-[#264d8c]" style={{ ...body, fontSize: '17px' }}>
                      <strong>{k}</strong> : {v}
                    </span>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Marché local ── */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
            <ScrollReveal>
              <p className="mb-3" style={yellowLabel}>Le marché local</p>
              <h2 className="mb-8 max-w-[24ch] text-white" style={h2}>
                Du Brusc à Portissol, deux saisons dans la même commune
              </h2>
            </ScrollReveal>
            <div className="space-y-5 text-white/70" style={body}>
              <ScrollReveal>
                <p>
                  Six-Fours-les-Plages : 37 109 habitants, 28 291 logements. Dont 8 095 résidences secondaires ou logements
                  occasionnels, soit 28,6 % du parc (
                  <a href="https://www.insee.fr/fr/statistiques/2011101?geo=COM-83129" target="_blank" rel="noopener noreferrer" className={link}>
                    Insee, recensement 2023
                  </a>
                  ).
                </p>
              </ScrollReveal>
              <ScrollReveal>
                <p>
                  Un logement sur quatre n&apos;est pas occupé à l&apos;année. Conséquence directe pour un cuisiniste ou un rénovateur :
                  le client n&apos;est pas dans la rue au moment où il cherche. Il prépare son projet à distance, en février depuis
                  Lyon. Ou sur place en juillet, entre deux baignades. Deux calendriers. Deux façons de le convaincre.
                </p>
              </ScrollReveal>
              <ScrollReveal>
                <p>Et trois micro-marchés, très différents.</p>
              </ScrollReveal>
            </div>
            <ol className="my-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card n={1} title="Le Brusc" delay={0.05}>
                Le port, les restaurants, la location saisonnière. Demande courte. Une terrasse à refaire avant juin, une cuisine pour
                un meublé de tourisme.
              </Card>
              <Card n={2} title="Portissol" delay={0.1}>
                La plage, le centre-ville, les commerces. Clientèle à l&apos;année, appartements à rénover, copropriétés qui votent des
                travaux.
              </Card>
              <Card n={3} title="Le Fort de Six-Fours" delay={0.15}>
                Le vieux village, les maisons de caractère, les ruelles. Menuiseries sur mesure, pierre, contraintes d&apos;urbanisme.
              </Card>
            </ol>
            <div className="space-y-5 text-white/70" style={body}>
              <ScrollReveal>
                <p>Trois quartiers, trois vocabulaires de recherche. Un client du Brusc ne tape pas ce que tape un propriétaire du Fort.</p>
              </ScrollReveal>
              <ScrollReveal>
                <p>
                  Ajoutez deux communes collées à la frontière. Sanary-sur-Mer à l&apos;ouest, son port et son marché. Ollioules au
                  nord, son centre ancien et ses artisans. Un menuisier de Six-Fours travaille à Sanary le lundi, à Ollioules le mardi.
                  Ses clients, eux, tapent <B>cuisiniste Sanary</B> ou <B>menuisier Ollioules</B>. Google ne mélange pas. Une page
                  Six-Fours ne fera jamais le travail d&apos;une page Sanary.
                </p>
              </ScrollReveal>
              <ScrollReveal>
                <p>
                  Reste la saisonnalité. Le Var concentre 36 % des nuitées régionales de la saison estivale 2025 (
                  <a href="https://www.insee.fr/fr/statistiques/8676183" target="_blank" rel="noopener noreferrer" className={link}>
                    Insee, décembre 2025
                  </a>
                  ). Traduction locale : la côte ouest-varoise se remplit d&apos;avril à septembre, et les résidences secondaires
                  rouvrent leurs portes. Ce pic a une conséquence SEO simple. Un artisan invisible en avril ne sera pas visible
                  davantage en juillet. Le référencement local se prépare trois à six mois avant la saison. Pas pendant.
                </p>
              </ScrollReveal>
              <ScrollReveal>
                <p>
                  Dernier point de marché, côté concurrence. Sur les dix premiers résultats de « consultant seo six fours » (SERP
                  française, octobre 2026), combien de pages vraiment écrites pour Six-Fours ? Deux. Le reste : un job board, deux
                  annuaires, un agrégateur de commerces, une page « Var » générique. La place est libre. Elle ne le restera pas.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── Pourquoi on n'apparaît pas ── */}
        <section className="relative bg-white" style={{ backgroundColor: '#ffffff' }}>
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
            <ScrollReveal>
              <p className="mb-4" style={blueLabel}>Les causes</p>
              <h2 className="mb-4 max-w-[24ch] text-[#264d8c]" style={h2}>
                Pourquoi les pros de l&apos;habitat n&apos;apparaissent pas
              </h2>
              <p className="mb-10 text-[#264d8c]/75" style={{ ...body, fontSize: '17px' }}>
                Vous vous reconnaissez ? Six causes. Elles se cumulent presque toujours.
              </p>
            </ScrollReveal>
            <ol className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                [
                  'La fiche Google Business Profile existe, mais elle ne travaille pas.',
                  <>
                    Pas de photos, pas de description, pas d&apos;horaires à jour. Catégorie principale « Entrepreneur » alors que le
                    métier est cuisiniste. Google classe sur trois critères : pertinence, distance, proéminence (
                    <a href="https://support.google.com/business/answer/7091?hl=fr" target="_blank" rel="noopener noreferrer" className={linkBlue}>
                      documentation Google
                    </a>
                    ). Une fiche vide n&apos;a aucune pertinence.
                  </>,
                ],
                [
                  'Une seule page pour toutes les villes.',
                  <>
                    Le chiffre est net : 98,8 % des impressions Six-Fours de mon propre site atterrissent sur l&apos;accueil. Un client
                    de Sanary et un client du Brusc lisent le même texte. Google n&apos;a aucune raison de vous montrer sur les deux
                    requêtes.
                  </>,
                ],
                [
                  "Le métier n'est pas écrit en clair.",
                  <>
                    Vous vendez de l&apos;« agencement sur mesure ». Vos clients cherchent un <strong>dressing</strong>, une{' '}
                    <strong>cuisine équipée</strong>, un <strong>placard sous escalier</strong>. Le vocabulaire du devis n&apos;est pas
                    celui de la recherche.
                  </>,
                ],
                [
                  'Les avis dorment.',
                  <>
                    96 % des consommateurs lisent des avis en ligne au moins de temps en temps, et 4 % seulement n&apos;en lisent
                    jamais (
                    <a href="https://www.brightlocal.com/research/local-consumer-review-survey-2025/" target="_blank" rel="noopener noreferrer" className={linkBlue}>
                      BrightLocal, 2025
                    </a>
                    ). Votre dernier avis date de 2022. Le concurrent d&apos;en face en a 40, dont douze de cette année.
                  </>,
                ],
                [
                  'Le NAP se contredit.',
                  <>
                    Même entreprise, trois numéros selon l&apos;annuaire. Ancienne adresse sur les Pages Jaunes. Nom écrit avec ou sans
                    « &amp; Fils ». Google doute. Un doute coûte des places.
                  </>,
                ],
                [
                  'Aucune preuve locale.',
                  <>
                    Zéro photo de chantier au Brusc, zéro mention de Portissol, zéro réalisation à Sanary. Rien qui dise : ce
                    professionnel travaille ici.
                  </>,
                ],
              ].map(([title, text], i) => (
                <ScrollReveal key={title as string} delay={0.05 + (i % 2) * 0.06} className="h-full">
                  <li className="h-full rounded-[1.25rem] border border-[#264d8c]/10 bg-[#f2f5fb] p-7">
                    <p className="mb-2 text-[#2355b6]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '15px', letterSpacing: '0.06em' }}>
                      0{i + 1}
                    </p>
                    <h3 className="mb-3 text-[#264d8c]" style={h3}>{title as string}</h3>
                    <p className="text-[#264d8c]/75" style={body}>{text as ReactNode}</p>
                  </li>
                </ScrollReveal>
              ))}
            </ol>
            <ScrollReveal delay={0.1}>
              <p className="mt-10 max-w-[68ch] text-[#264d8c]/80" style={{ ...body, fontSize: '17px' }}>
                Résultat : vous existez. Vous n&apos;êtes pas trouvé. C&apos;est exactement la différence entre une fiche qui existe et
                une fiche qui convertit.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Méthode ── */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
            <ScrollReveal>
              <p className="mb-3" style={yellowLabel}>La méthode</p>
              <h2 className="mb-8 max-w-[24ch] text-white" style={h2}>
                Quatre leviers, zéro magie
              </h2>
              <p className="mb-12 max-w-[68ch] text-white/70" style={body}>
                Quatre leviers. Pas de « technique secrète », pas de promesse d&apos;algorithme. Et une règle : j&apos;applique à mon
                propre site ce que je recommande aux clients. Le balisage de cette page, ses liens internes, ses prix affichés - même
                filtre.
              </p>
            </ScrollReveal>
            <ol className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card n={1} title="La fiche Google Business Profile : la plus négligée." delay={0.05}>
                Catégories secondaires, section Services remplie une par une, description qui nomme les communes, photos récentes,
                horaires à jour, réponses à tous les avis, Google Posts réguliers. C&apos;est gratuit. C&apos;est ce que presque
                personne ne fait. Et c&apos;est ce qui produit les premiers appels.
              </Card>
              <Card n={2} title="Les pages locales : une page, une intention." delay={0.1}>
                Une page par ville ou par quartier quand le volume le justifie. Contenu réel : rues, types de biens, contraintes
                d&apos;urbanisme, réalisations. Jamais de texte dupliqué avec le nom de la ville remplacé - Google le repère et
                n&apos;en tient plus compte.
              </Card>
              <Card n={3} title="Les avis : le levier le plus rapide." delay={0.05}>
                Demande au bon moment, à la fin du chantier et pas six mois après. Lien direct vers la fiche. Réponse systématique, y
                compris aux critiques. Jamais d&apos;avis acheté : c&apos;est interdit par Google et les consommateurs le voient.
              </Card>
              <Card n={4} title="La cohérence NAP : le socle invisible." delay={0.1}>
                Même nom, même adresse, même téléphone partout : fiche Google, site, annuaires locaux, presse, réseau de mandataires.
                Un socle propre vaut mieux que dix optimisations cosmétiques.
              </Card>
            </ol>
            <ScrollReveal delay={0.1}>
              <p className="mt-10 max-w-[68ch] text-white/70" style={body}>
                Le tout se mesure. Search Console, performances de la fiche, appels, demandes d&apos;itinéraire. Le détail de la
                prestation est sur la page{' '}
                <Link href="/audit-seo-local" className={link}>audit SEO local</Link>. Si vous cherchez le cadre général avant de
                parler budget, lisez <Link href="/seo-pour-artisans" className={link}>SEO pour artisans</Link> : c&apos;est écrit pour
                les métiers du chantier, pas pour les startups.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Offre ── */}
        <section className="relative bg-white" style={{ backgroundColor: '#ffffff' }}>
          <div className="mx-auto max-w-4xl px-6 py-24 md:py-28">
            <ScrollReveal>
              <p className="mb-4" style={blueLabel}>L&apos;offre</p>
              <h2 className="mb-4 max-w-[24ch] text-[#264d8c]" style={h2}>
                L&apos;offre, avec les prix affichés
              </h2>
              <p className="mb-10 text-[#264d8c]/75" style={{ ...body, fontSize: '17px' }}>
                Deux formats. Des prix publics, pas de devis mystère.
              </p>
            </ScrollReveal>
            <ol className="space-y-5">
              {[
                [
                  'Diagnostic local - 790 €, livré en 5 jours ouvrés.',
                  "État des lieux complet : fiche Google Business Profile, cohérence NAP, pages existantes, avis, concurrents visibles sur Six-Fours et Sanary, requêtes réelles avec impressions et positions. Un plan d'action priorisé, avec ce qui rapporte le plus vite, et un appel de 45 minutes pour le passer en revue. Cinq jours ouvrés. Pas cinq semaines.",
                ],
                [
                  'Sprint local - 500 €/mois pendant 3 mois.',
                  "1 500 € au total. Trois mois pour poser les fondations : optimisation de la fiche, création ou refonte des pages locales, mise en route de la collecte d'avis, suivi mensuel des positions. Vous pouvez arrêter à la fin des trois mois. Les fondations restent, elles.",
                ],
                [
                  'Ce que je ne promets pas : une position.',
                  "Personne ne peut la garantir. Google l'écrit noir sur blanc : il n'existe aucun moyen de payer ou de demander un meilleur classement local. Ce que je garantis : un travail daté, des livrables concrets, des chiffres que vous pouvez vérifier vous-même dans votre Search Console.",
                ],
              ].map(([title, text], i) => (
                <ScrollReveal key={title} delay={0.05 + i * 0.06}>
                  <li className="rounded-[1.25rem] border border-[#264d8c]/10 bg-[#f2f5fb] p-7">
                    <h3 className="mb-3 text-[#264d8c]" style={h3}>{i + 1}. {title}</h3>
                    <p className="text-[#264d8c]/75" style={body}>{text}</p>
                  </li>
                </ScrollReveal>
              ))}
            </ol>
            <ScrollReveal delay={0.1}>
              <p className="mt-8 text-[#264d8c]/80" style={{ ...body, fontSize: '17px' }}>
                Le détail des deux formules est sur la <Link href="/offre" className={linkBlue}>page offre</Link>. Vous pouvez juger
                le travail avant de payer : le diagnostic se lit, se conteste, s&apos;archive.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Zone d'intervention ── */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-4xl px-6 py-24 md:py-28">
            <ScrollReveal>
              <p className="mb-3" style={yellowLabel}>Zone</p>
              <h2 className="mb-8 text-white" style={h2}>Zone d&apos;intervention</h2>
            </ScrollReveal>
            <div className="space-y-5 text-white/70" style={body}>
              <ScrollReveal>
                <p>
                  Six-Fours-les-Plages, évidemment. Le Brusc, Portissol, le Fort, La Coudoulière, Les Lônes. Et les communes où vos
                  clients habitent vraiment : Sanary-sur-Mer, Ollioules, La Seyne-sur-Mer, Bandol, Saint-Cyr-sur-Mer, La
                  Cadière-d&apos;Azur, Le Castellet, Toulon, La Valette-du-Var, Hyères.
                </p>
              </ScrollReveal>
              <ScrollReveal>
                <p>
                  Sur place pour les rendez-vous qui le méritent. En visio pour le reste. Un diagnostic ne nécessite pas trois
                  déplacements.
                </p>
              </ScrollReveal>
              <ScrollReveal>
                <p>
                  Le référencement local ne s&apos;arrête pas à une frontière communale. Trois pages sœurs existent déjà, même
                  méthode, marchés différents :{' '}
                  <Link href="/consultant-seo-toulon" className={link}>consultant SEO à Toulon</Link>,{' '}
                  <Link href="/consultant-seo-marseille" className={link}>consultant SEO à Marseille</Link>,{' '}
                  <Link href="/consultant-seo-aix-en-provence" className={link}>consultant SEO à Aix-en-Provence</Link>.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Les réponses sont rendues dans le HTML initial : le FAQPage du JSON-LD les reprend mot pour mot. */}
        <FAQ items={faqs} label="FAQ" heading="Les questions qu'on me pose à Six-Fours" />

        <FinalCTA
          heading={<>Un appel de 20 minutes, sans engagement</>}
          body={
            <div className="mx-auto mt-6 max-w-[56ch] space-y-4 text-base leading-relaxed text-white/65" style={{ fontFamily: inter.style.fontFamily }}>
              <p>
                Vous décrivez votre métier, votre commune, les concurrents que vous voyez sortir devant vous. Je regarde votre fiche en
                direct, pendant l&apos;appel.
              </p>
              <p>
                Vingt minutes. Pas de slides. Pas de tunnel de vente. Vous ressortez avec deux ou trois actions à faire cette
                semaine - que vous travailliez avec moi ou non. C&apos;est le meilleur moyen de savoir si le sujet vous concerne
                vraiment.
              </p>
              <p>
                Si le diagnostic vous intéresse, il est là : 790 €, cinq jours ouvrés, plan d&apos;action priorisé.{' '}
                <Link href="/offre" className="underline underline-offset-4 text-[#fceb30]">Voir l&apos;offre</Link>.
              </p>
            </div>
          }
          cta="Demander un appel de 20 minutes"
        />

        {/* ── Sources ── */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-4xl px-6 pb-24">
            <h2 className="mb-4 text-white" style={{ ...h3, fontSize: '20px' }}>Sources</h2>
            <ul className="space-y-2 text-white/60" style={{ ...body, fontSize: '15px' }}>
              {[
                ['Google - Améliorer votre classement local', 'https://support.google.com/business/answer/7091?hl=fr'],
                ['Insee - Dossier complet, commune de Six-Fours-les-Plages (83129)', 'https://www.insee.fr/fr/statistiques/2011101?geo=COM-83129'],
                ["Insee - Saison touristique estivale 2025 en Provence-Alpes-Côte d'Azur", 'https://www.insee.fr/fr/statistiques/8676183'],
                ['BrightLocal - Local Consumer Review Survey 2025', 'https://www.brightlocal.com/research/local-consumer-review-survey-2025/'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
