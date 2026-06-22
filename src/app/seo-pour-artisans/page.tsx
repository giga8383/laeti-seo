import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';
import QuizGBP from '@/components/QuizGBP';
import { inter } from '@/lib/fonts';
import {
  Check,
  ArrowRight,
  ArrowSquareOut,
  MapPin,
  Star,
  Quotes,
  Warning,
} from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

/* ── Métadonnées SEO ── */
export const metadata: Metadata = {
  title: 'Référencement local pour artisans : soyez visible sur Google | Laeti SEO',
  description:
    "46 % des recherches Google ont une intention locale. Découvrez comment les artisans et professionnels de l'habitat peuvent apparaître dans le Local Pack : fiche GBP, avis clients, NAP, site web. Guide complet + quiz gratuit.",
  alternates: {
    canonical: 'https://laeti-seo.fr/seo-pour-artisans',
  },
  keywords: [
    'référencement local artisan',
    'SEO local artisan',
    'Google Business Profile artisan',
    'Local Pack Google artisan',
    'visibilité Google artisan',
    'SEO local bâtiment',
    'référencement local menuisier',
    'SEO local cuisiniste',
    'citations locales artisan',
    'avis Google artisan',
  ],
  openGraph: {
    url: 'https://laeti-seo.fr/seo-pour-artisans',
    title: 'Référencement local pour artisans | Laeti SEO',
    description:
      "Comment les artisans et professionnels de l'habitat apparaissent dans le Local Pack de Google. Guide complet : fiche GBP, NAP, avis, site web, citations locales.",
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
        { '@type': 'ListItem', position: 2, name: 'Référencement local pour artisans', item: 'https://laeti-seo.fr/seo-pour-artisans' },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Référencement local pour artisans : soyez visible sur Google',
      description: "Guide complet sur le SEO local pour les artisans et professionnels de l'habitat : fiche Google Business Profile, cohérence NAP, avis clients, site web et citations locales.",
      url: 'https://laeti-seo.fr/seo-pour-artisans',
      author: {
        '@type': 'Person',
        name: 'Laetitia Laghezza',
        jobTitle: 'Consultante SEO local',
        url: 'https://laeti-seo.fr',
        sameAs: 'https://www.linkedin.com/in/laetitia-laghezza/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Laeti SEO',
        url: 'https://laeti-seo.fr',
      },
      datePublished: '2026-06-05',
      dateModified: '2026-06-05',
      inLanguage: 'fr-FR',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Combien de temps faut-il pour apparaître dans le Local Pack ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "En partant de zéro, comptez 3 à 6 mois pour des résultats visibles, selon la concurrence dans votre zone et votre secteur. Les premières améliorations (fiche GBP optimisée, premiers avis) peuvent produire des effets en quelques semaines.",
          },
        },
        {
          '@type': 'Question',
          name: 'Est-ce que Google Business Profile est vraiment gratuit ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, la création et la gestion de la fiche sont entièrement gratuites. Seules les options publicitaires (Google Ads) sont payantes.",
          },
        },
        {
          '@type': 'Question',
          name: "J'ai déjà une fiche GBP mais je n'apparais pas. Pourquoi ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Les causes les plus fréquentes : catégorie principale mal choisie, zone de service non renseignée, peu ou pas d'avis, NAP incohérent avec votre site, fiche peu complète ou inactive (pas de posts, pas de photos récentes).",
          },
        },
        {
          '@type': 'Question',
          name: 'Dois-je avoir un site web pour faire du SEO local ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Non, vous pouvez obtenir des résultats avec une fiche GBP seule. Mais un site web optimisé multiplie vos chances d'apparaître et vous permet de capter les clics qui vont au-delà du Local Pack.",
          },
        },
        {
          '@type': 'Question',
          name: 'Quelle est la différence entre SEO local et Google Ads ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Le SEO local génère du trafic organique et gratuit sur le long terme, mais demande du temps. Google Ads génère des résultats immédiats mais payants,dès que vous arrêtez de payer, vous disparaissez. Les deux sont complémentaires.",
          },
        },
        {
          '@type': 'Question',
          name: 'Puis-je gérer mon SEO local moi-même ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, les bases (fiche GBP, avis, NAP) sont accessibles sans compétences techniques. Un audit professionnel vous fait gagner du temps en identifiant précisément ce qui bloque votre visibilité et en vous donnant un plan d'action clair.",
          },
        },
        {
          '@type': 'Question',
          name: "Le SEO local fonctionne-t-il pour les artisans sans vitrine physique ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui. Google propose un mode « zone de service » spécialement conçu pour les entreprises qui se déplacent chez leurs clients. Vous n'avez pas besoin d'afficher votre adresse personnelle.",
          },
        },
      ],
    },
  ],
};

/* ── Données ── */
const stats = [
  { value: '46 %',  label: 'des recherches Google ont une intention locale', source: 'BrightLocal / Semrush, 2024' },
  { value: '44 %',  label: 'des clics vont au 1er résultat du Local Pack',    source: 'BrightLocal, 2024' },
  { value: '76 %',  label: 'des recherches mobiles locales → appel en 24 h',  source: 'BrightLocal, 2024' },
  { value: '86 %',  label: 'utilisent Google Maps pour trouver un pro',       source: 'France Num / Google, 2025' },
  { value: '85 %',  label: 'font confiance aux avis en ligne',                source: 'Trustt, 2025' },
];

const gbpChecklist = [
  { title: 'Nom de l\'établissement', desc: 'Utilisez uniquement le nom réel de votre entreprise. N\'ajoutez pas de mots-clés ou de ville dans le nom : Google peut suspendre votre fiche.' },
  { title: 'Catégorie principale', desc: 'C\'est le signal le plus fort pour le Local Pack. Choisissez la catégorie la plus précise possible. Ajoutez des catégories secondaires uniquement si elles correspondent vraiment à vos services.' },
  { title: 'Zone de service', desc: 'Si vous vous déplacez chez vos clients, renseignez une zone de service plutôt qu\'une adresse publique. Google autorise jusqu\'à 20 zones de desserte.' },
  { title: 'Coordonnées et horaires', desc: 'Téléphone, site web, horaires,tout doit être exact, cohérent et à jour, y compris les jours fériés et les horaires exceptionnels.' },
  { title: 'Services détaillés', desc: 'Listez chaque prestation avec une description courte. Cela aide Google à vous afficher sur des requêtes longue traîne (ex. : « installation chaudière à condensation »).' },
  { title: 'Photos régulières', desc: 'Ajoutez un logo, une photo de couverture professionnelle, et des photos de vos réalisations. Les fiches avec photos reçoivent significativement plus de clics.' },
  { title: 'Posts Google', desc: 'Publiez au moins un post par mois : offre spéciale, conseil pratique, réalisation récente. Cela signale à Google que votre fiche est active.' },
];

const citations = [
  { name: 'PagesJaunes',               stars: 5, note: '' },
  { name: 'Houzz',                      stars: 5, note: 'rénovation, déco' },
  { name: 'Chambre des Métiers (CMA)', stars: 5, note: '' },
  { name: 'Yelp France',               stars: 4, note: '' },
  { name: 'Habitissimo',               stars: 4, note: '' },
  { name: 'Trustpilot',                stars: 4, note: '' },
  { name: 'Annuaire de la mairie',     stars: 4, note: '' },
  { name: 'Kompass',                   stars: 3, note: '' },
];

const expertQA = [
  {
    q: 'Quel est le blocage NAP le plus fréquent que tu rencontres chez les artisans bâtiment ?',
    a: "Le cas le plus courant, c'est le numéro de téléphone qui change sans que personne ne pense à mettre à jour les annuaires. Un artisan prend un nouveau forfait, récupère un nouveau numéro, le met sur son site,mais PagesJaunes, Yelp et Houzz affichent toujours l'ancien. Aux yeux de Google, ce sont deux entreprises différentes. J'ai vu des fiches perdre 30 % de visibilité locale uniquement à cause d'une incohérence de ce type.",
  },
  {
    q: "En 12 ans, quel résultat Local Pack t'a le plus surpris, et en combien de temps ?",
    a: "Un cuisiniste à Aix-en-Provence, invisible sur sa requête principale depuis deux ans. Après une optimisation complète de la fiche et une correction des citations NAP, il est passé en position 2 du Local Pack en 6 semaines,sans aucune modification du site. Ce qui m'a surprise, c'est la rapidité. Parfois les signaux sont si clairement bloqués que lever un seul frein suffit à déclencher un bond significatif.",
  },
  {
    q: "Pourquoi un cuisiniste ou un décorateur sous-estime-t-il systématiquement ses avis clients ?",
    a: "Parce qu'ils pensent que leurs clients ne laissent pas d'avis spontanément. Et ils ont partiellement raison,mais c'est précisément ça le problème. Dans l'habitat, la relation client est longue, personnelle. Quand vous demandez un avis à la fin d'un chantier, en face à face ou par SMS avec un lien direct, 70 % des clients satisfaits le font. Ceux qui ne le font jamais, c'est souvent ceux qui n'ont jamais osé demander.",
  },
];

const faq = [
  {
    q: 'Combien de temps faut-il pour apparaître dans le Local Pack ?',
    a: "En partant de zéro, comptez 3 à 6 mois pour des résultats visibles, selon la concurrence dans votre zone et votre secteur. Les premières améliorations (fiche GBP optimisée, premiers avis) peuvent produire des effets en quelques semaines.",
  },
  {
    q: 'Est-ce que Google Business Profile est vraiment gratuit ?',
    a: "Oui, la création et la gestion de la fiche sont entièrement gratuites. Seules les options publicitaires (Google Ads) sont payantes.",
  },
  {
    q: "J'ai déjà une fiche GBP mais je n'apparais pas. Pourquoi ?",
    a: "Les causes les plus fréquentes : catégorie principale mal choisie, zone de service non renseignée, peu ou pas d'avis, NAP incohérent avec votre site, fiche peu complète ou inactive (pas de posts, pas de photos récentes).",
  },
  {
    q: 'Dois-je avoir un site web pour faire du SEO local ?',
    a: "Non, vous pouvez obtenir des résultats avec une fiche GBP seule. Mais un site web optimisé multiplie vos chances d'apparaître et vous permet de capter les clics qui vont au-delà du Local Pack (résultats organiques).",
  },
  {
    q: 'Quelle est la différence entre SEO local et Google Ads ?',
    a: "Le SEO local génère du trafic organique et gratuit sur le long terme, mais demande du temps. Google Ads génère des résultats immédiats mais payants,dès que vous arrêtez de payer, vous disparaissez. Les deux sont complémentaires.",
  },
  {
    q: 'Puis-je gérer mon SEO local moi-même ?',
    a: "Oui, les bases (fiche GBP, avis, NAP) sont accessibles sans compétences techniques. Un audit professionnel vous fait gagner du temps en identifiant précisément ce qui bloque votre visibilité et en vous donnant un plan d'action clair.",
  },
  {
    q: "Le SEO local fonctionne-t-il pour les artisans sans vitrine physique ?",
    a: "Oui. Google propose un mode « zone de service » spécialement conçu pour les entreprises qui se déplacent chez leurs clients. Vous n'avez pas besoin d'afficher votre adresse personnelle.",
  },
];

const sources = [
  {
    title: 'Google Business Profile : le service de référencement indispensable',
    desc: 'France Num,guide pratique officiel pour les TPE et artisans. Mis à jour mars 2026.',
    href: 'https://www.francenum.gouv.fr/guides-et-conseils/communication-et-publicite/referencement/google-business-profile-le-service-de',
  },
  {
    title: 'Facteurs de Classement SEO Local & GMB 2026',
    desc: 'Cuik.io, guide complet sur les facteurs qui influencent le classement dans le Local Pack de Google.',
    href: 'https://cuik.io/guides/facteurs-classement-seo-local/',
  },
  {
    title: 'Chiffres clés du SEO local',
    desc: 'BrightLocal, données clés sur l\'efficacité du référencement local.',
    href: 'https://www.brightlocal.com/resources/local-seo-statistics/',
  },
];

/* ── Séparateur réutilisable ── */
function Sep() {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <div className="h-px w-full" style={{ background: 'rgba(255,255,255,0.07)' }} />
    </div>
  );
}

export default function SeoArtisansPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>

        {/* ════════════════════════════════════════
            HERO
        ════════════════════════════════════════ */}
        <section className="relative bg-transparent" style={{ paddingTop: '120px' }}>
          <div className="mx-auto max-w-7xl px-6 pb-0 pt-12 md:pt-20">

            {/* Breadcrumb */}
            <ScrollReveal>
              <p className="mb-6 flex items-center gap-2 text-white/40" style={{ fontFamily: inter.style.fontFamily, fontSize: '13px' }}>
                <Link href="/" className="hover:text-white/70 transition-colors">Accueil</Link>
                <span>/</span>
                <span className="text-white/65">Référencement local pour artisans</span>
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <p
                className="mb-4 flex items-center gap-2 uppercase tracking-widest"
                style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '13px', color: '#fceb30', textShadow: '0 0 12px rgba(252,235,48,0.7)' }}
              >
                <MapPin size={13} weight="bold" />
                Guide SEO local · Artisans &amp; pros de l&apos;habitat
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.09}>
              <h1
                className="mb-6 text-white"
                style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(36px, 5.5vw, 64px)', lineHeight: '1.08' }}
              >
                Référencement local pour artisans :{' '}
                <span style={{ color: '#fceb30', textShadow: '0 0 18px rgba(252,235,48,0.55), 0 0 48px rgba(252,235,48,0.25)' }}>
                  soyez visible sur Google
                </span>
              </h1>
            </ScrollReveal>

            {/* TL;DR */}
            <ScrollReveal delay={0.13}>
              <div
                className="mb-8 max-w-[70ch] rounded-2xl p-5"
                style={{ background: 'rgba(252,235,48,0.06)', border: '1px solid rgba(252,235,48,0.15)' }}
              >
                <p style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '13px', color: 'rgba(252,235,48,0.8)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>
                  TL;DR
                </p>
                <p style={{ fontFamily: inter.style.fontFamily, fontSize: '15px', lineHeight: '25px', color: 'rgba(255,255,255,0.75)' }}>
                  Le référencement local, c&apos;est l&apos;ensemble des actions qui permettent à votre entreprise d&apos;apparaître en tête des résultats Google quand un client proche tape « plombier urgence Lyon » ou « cuisiniste Bordeaux ».
                  Pour un artisan, c&apos;est le levier numérique le plus rentable : <strong className="text-white/90">46 % des recherches Google ont une intention locale</strong>, et
                  <strong className="text-white/90"> 76 % des personnes qui cherchent un professionnel sur mobile appellent dans les 24 heures</strong> (BrightLocal, 2024).
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.17}>
              <div className="flex flex-wrap items-center gap-4 mb-12">
                <Link
                  href="/audit-seo-local"
                  className="inline-flex items-center gap-2 rounded-full bg-[#fceb30] px-6 py-3.5 font-bold text-[#264d8c] transition-all duration-300 hover:brightness-105 active:scale-[0.98]"
                  style={{ fontFamily: inter.style.fontFamily, fontSize: '15px' }}
                >
                  Demander mon audit SEO local
                  <ArrowRight size={15} weight="bold" />
                </Link>
                <Link
                  href="/offre"
                  className="inline-flex items-center gap-2 text-white/55 transition-colors hover:text-white/85"
                  style={{ fontFamily: inter.style.fontFamily, fontSize: '14px' }}
                >
                  Voir les offres
                  <ArrowRight size={13} weight="bold" />
                </Link>
              </div>
            </ScrollReveal>

            {/* Carte auteure E-E-A-T */}
            <ScrollReveal delay={0.21}>
              <div
                className="inline-flex items-center gap-4 rounded-2xl px-5 py-4 mb-6"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full" style={{ border: '2px solid rgba(252,235,48,0.5)' }}>
                  <Image src="/laeti-1.jpg" alt="Laetitia Laghezza, consultante SEO local" fill className="object-cover object-center" sizes="48px" />
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
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                  <ArrowSquareOut size={11} weight="bold" />
                </a>
              </div>
            </ScrollReveal>

          </div>
        </section>

        {/* ── Quiz interactif ── */}
        <div className="mx-auto max-w-3xl px-6 pb-16">
          <QuizGBP />
        </div>

        <Sep />

        {/* ════════════════════════════════════════
            01,POURQUOI LE SEO LOCAL EST VITAL
        ════════════════════════════════════════ */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <ScrollReveal>
              <p className="mb-4 font-mono font-bold uppercase tracking-widest" style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '13px', color: '#fceb30', textShadow: '0 0 12px rgba(252,235,48,0.6)' }}>
                01
              </p>
              <h2 className="mb-4 max-w-[28ch] text-white" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: '1.15' }}>
                Pourquoi le SEO local est vital pour les artisans
              </h2>
              <p className="mb-14 max-w-[62ch] text-white/55" style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '26px' }}>
                Quand un propriétaire a une fuite d&apos;eau un dimanche soir, il ne feuillette pas les Pages Jaunes.
                Il ouvre Google et tape « plombier urgence [sa ville] ». Si vous n&apos;apparaissez pas dans les trois premiers résultats,
                vous n&apos;existez pas pour lui.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {stats.map((s, i) => (
                <ScrollReveal key={i} delay={i * 0.07}>
                  <div
                    className="flex h-full flex-col rounded-[1.5rem] p-6"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)' }}
                  >
                    <p style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '40px', lineHeight: '1', color: '#fceb30', textShadow: '0 0 18px rgba(252,235,48,0.4)' }}>
                      {s.value}
                    </p>
                    <p className="mt-3 flex-1 text-white/75" style={{ fontFamily: inter.style.fontFamily, fontSize: '14px', lineHeight: '22px' }}>
                      {s.label}
                    </p>
                    <p className="mt-3 text-white/30" style={{ fontFamily: inter.style.fontFamily, fontSize: '11px' }}>
                      {s.source}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.4}>
              <div
                className="mt-8 rounded-2xl p-6"
                style={{ background: 'rgba(252,235,48,0.06)', border: '1px solid rgba(252,235,48,0.15)' }}
              >
                <p style={{ fontFamily: inter.style.fontFamily, fontSize: '15px', lineHeight: '25px', color: 'rgba(255,255,255,0.80)' }}>
                  Si vous êtes plombier, électricien, menuisier, peintre, carreleur, cuisiniste ou décorateur,
                  vos futurs clients cherchent déjà vos services sur Google. La question n&apos;est pas <em>si</em> vous
                  devez faire du SEO local, mais <strong className="text-white">quand vous commencez.</strong>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <Sep />

        {/* ════════════════════════════════════════
            02,COMMENT FONCTIONNE LE LOCAL PACK
        ════════════════════════════════════════ */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-center">
              <ScrollReveal>
                <p className="mb-4 font-mono font-bold uppercase tracking-widest" style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '13px', color: '#fceb30', textShadow: '0 0 12px rgba(252,235,48,0.6)' }}>
                  02
                </p>
                <h2 className="mb-6 text-white" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: '1.15' }}>
                  Comment fonctionne le Local Pack de Google
                </h2>
                <p className="mb-8 text-white/60" style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '27px' }}>
                  Le Local Pack (ou « 3-pack local ») est ce bloc de trois fiches d&apos;entreprises qui apparaît
                  en haut des résultats Google, accompagné d&apos;une carte. Il capte <strong className="text-white/90">44 % des clics</strong> sur
                  les requêtes locales. Google décide qui y apparaît en évaluant trois facteurs principaux.
                </p>
                <div className="space-y-4">
                  {[
                    { num: '1', title: 'Pertinence', desc: 'Votre activité correspond-elle à ce que l\'internaute cherche ? (catégories, mots-clés, services)' },
                    { num: '2', title: 'Distance',   desc: 'Êtes-vous géographiquement proche du chercheur ou de la zone qu\'il mentionne ?' },
                    { num: '3', title: 'Notoriété',  desc: 'Avez-vous des avis, des citations, une présence en ligne cohérente et solide ?' },
                  ].map((f, i) => (
                    <div key={i} className="flex items-start gap-4 rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)' }}>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-mono font-bold text-sm" style={{ background: 'rgba(252,235,48,0.12)', color: '#fceb30' }}>
                        {f.num}
                      </span>
                      <div>
                        <p style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '15px', color: '#ffffff' }}>{f.title}</p>
                        <p style={{ fontFamily: inter.style.fontFamily, fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: '22px', marginTop: '3px' }}>{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div
                  className="rounded-[2rem] p-8 md:p-10"
                  style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)', border: '1px solid rgba(255,255,255,0.10)' }}
                >
                  <p style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '18px', color: 'rgba(255,255,255,0.90)', lineHeight: '1.3', marginBottom: '16px' }}>
                    Bonne nouvelle
                  </p>
                  <p style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '27px', color: 'rgba(255,255,255,0.65)' }}>
                    Les facteurs <strong className="text-white/90">Pertinence</strong> et <strong className="text-white/90">Notoriété</strong> sont
                    entièrement entre vos mains. La Distance dépend de votre zone de service.
                    C&apos;est exactement ce que le SEO local travaille.
                  </p>
                  <div className="mt-8 h-px w-full" style={{ background: 'rgba(255,255,255,0.08)' }} />
                  <p className="mt-6" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '20px', lineHeight: '1.35', color: 'rgba(255,255,255,0.90)', borderLeft: '2px solid rgba(252,235,48,0.55)', paddingLeft: '16px' }}>
                    Pas nécessairement meilleur.<br />
                    <span style={{ color: '#fceb30', textShadow: '0 0 18px rgba(252,235,48,0.55)' }}>Juste mieux visible.</span>
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <Sep />

        {/* ════════════════════════════════════════
            03,GOOGLE BUSINESS PROFILE
        ════════════════════════════════════════ */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <ScrollReveal>
              <p className="mb-4 font-mono font-bold uppercase tracking-widest" style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '13px', color: '#fceb30', textShadow: '0 0 12px rgba(252,235,48,0.6)' }}>
                03
              </p>
              <h2 className="mb-4 max-w-[30ch] text-white" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: '1.15' }}>
                Votre fiche Google Business Profile : la base de tout
              </h2>
              <p className="mb-14 max-w-[62ch] text-white/55" style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '26px' }}>
                La fiche GBP est votre vitrine numérique gratuite sur Google Search et Google Maps.
                Selon France Num (2025), <strong className="text-white/80">seule 1 entreprise sur 2 utilise ce service gratuit</strong>.
                C&apos;est votre avantage concurrentiel immédiat.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {gbpChecklist.map((item, i) => (
                  <ScrollReveal key={i} delay={i * 0.06}>
                    <div className="flex h-full items-start gap-4 rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)' }}>
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ background: 'rgba(252,235,48,0.15)' }}>
                        <Check size={10} weight="bold" color="#fceb30" />
                      </span>
                      <div>
                        <p style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '14px', color: '#ffffff', marginBottom: '4px' }}>{item.title}</p>
                        <p style={{ fontFamily: inter.style.fontFamily, fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: '21px' }}>{item.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={0.25}>
                <div className="overflow-hidden rounded-2xl h-full" style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                  <img
                    src="/gbp-avant-apres.svg"
                    alt="Exemple de fiche Google Business Profile avant et après optimisation — architecte d'intérieur"
                    width={800}
                    height={490}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                  <div className="px-4 py-3" style={{ background: 'rgba(255,255,255,0.03)' }}>
                    <p style={{ fontFamily: inter.style.fontFamily, fontSize: '12px', color: 'rgba(255,255,255,0.45)' }}>Exemple anonymisé · Fiche Google Business Profile avant et après optimisation</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <Sep />

        {/* ════════════════════════════════════════
            04,COHÉRENCE NAP
        ════════════════════════════════════════ */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-start">
              <ScrollReveal>
                <p className="mb-4 font-mono font-bold uppercase tracking-widest" style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '13px', color: '#fceb30', textShadow: '0 0 12px rgba(252,235,48,0.6)' }}>
                  04
                </p>
                <h2 className="mb-6 text-white" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: '1.15' }}>
                  La cohérence NAP : le signal de confiance que Google surveille
                </h2>
                <p className="mb-6 text-white/60" style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '27px' }}>
                  <strong className="text-white/90">NAP = Nom, Adresse, Téléphone.</strong> Google compare
                  les informations de votre fiche GBP avec toutes les mentions de votre entreprise sur le web.
                  Si votre numéro est différent sur PagesJaunes et sur votre site, Google perd confiance
                  dans vos données,et vous perdez des positions.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    'Définissez une version officielle de votre nom, adresse et téléphone',
                    'Reproduisez-la à l\'identique partout, sans abréviation ni variation',
                    'Alignez exactement ces données avec votre fiche GBP',
                    'Auditez et corrigez les annuaires existants (PagesJaunes, Yelp, Houzz…)',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full" style={{ background: 'rgba(252,235,48,0.15)' }}>
                        <Check size={9} weight="bold" color="#fceb30" />
                      </span>
                      <span style={{ fontFamily: inter.style.fontFamily, fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: '24px' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div
                  className="rounded-[2rem] p-8"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07)' }}
                >
                  <div className="mb-4 h-[2px] w-8 rounded-full" style={{ background: '#fceb30' }} />
                  <p style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '16px', color: '#ffffff', marginBottom: '12px' }}>
                    Exemple concret
                  </p>
                  <div className="space-y-3 mb-6">
                    {[
                      { label: 'Votre site',    value: '« Plomberie Dupont »',                   bad: false },
                      { label: 'PagesJaunes',   value: '« Dupont Plomberie & Chauffage »',        bad: true },
                      { label: 'Fiche GBP',     value: '« Dupont Jean-Pierre »',                  bad: true },
                    ].map((row, i) => (
                      <div key={i} className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: row.bad ? 'rgba(255,80,80,0.07)' : 'rgba(252,235,48,0.07)', border: `1px solid ${row.bad ? 'rgba(255,80,80,0.20)' : 'rgba(252,235,48,0.20)'}` }}>
                        <span style={{ fontFamily: inter.style.fontFamily, fontSize: '12px', color: 'rgba(255,255,255,0.45)', width: '80px', flexShrink: 0 }}>{row.label}</span>
                        <span style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 600, fontSize: '13px', color: row.bad ? 'rgba(255,140,140,0.85)' : 'rgba(252,235,48,0.85)' }}>{row.value}</span>
                      </div>
                    ))}
                  </div>
                  <p style={{ fontFamily: inter.style.fontFamily, fontSize: '13px', lineHeight: '21px', color: 'rgba(255,255,255,0.55)', fontStyle: 'italic' }}>
                    Aux yeux de Google : trois entités différentes. Résultat : vous diluez vos signaux locaux au lieu de les cumuler.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <Sep />

        {/* ════════════════════════════════════════
            05,AVIS CLIENTS
        ════════════════════════════════════════ */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <ScrollReveal>
              <p className="mb-4 font-mono font-bold uppercase tracking-widest" style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '13px', color: '#fceb30', textShadow: '0 0 12px rgba(252,235,48,0.6)' }}>
                05
              </p>
              <h2 className="mb-4 max-w-[28ch] text-white" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: '1.15' }}>
                Les avis clients : carburant du référencement local
              </h2>
              <p className="mb-14 max-w-[60ch] text-white/55" style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '26px' }}>
                Les avis Google sont à la fois un facteur de classement et un facteur de conversion.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <ScrollReveal>
                <div className="space-y-4">
                  {[
                    { stat: '88 %', txt: 'des consommateurs choisiraient une entreprise qui répond à tous ses avis, contre 47 % pour une entreprise qui n\'y répond jamais' },
                    { stat: '27 %', txt: 'des consommateurs considèrent uniquement les avis publiés dans les deux dernières semaines' },
                    { stat: '85 %', txt: 'des utilisateurs accordent autant de crédit aux avis en ligne qu\'aux recommandations personnelles' },
                  ].map((s, i) => (
                    <div key={i} className="flex items-start gap-5 rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)' }}>
                      <p style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '32px', lineHeight: '1', color: '#fceb30', flexShrink: 0 }}>{s.stat}</p>
                      <p style={{ fontFamily: inter.style.fontFamily, fontSize: '14px', lineHeight: '22px', color: 'rgba(255,255,255,0.65)' }}>{s.txt}</p>
                    </div>
                  ))}
                  <p className="pt-2 text-right text-white/30" style={{ fontFamily: inter.style.fontFamily, fontSize: '11px' }}>Source : BrightLocal, 2024</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div className="rounded-[2rem] p-8" style={{ background: 'linear-gradient(145deg, #2a57b8 0%, #3262ab 55%, #1d3f8f 100%)', boxShadow: '0 30px 60px -15px rgba(50,98,171,0.45)' }}>
                  <div className="mb-6 h-[3px] w-10 rounded-full" style={{ background: '#fceb30' }} />
                  <p style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '17px', color: '#ffffff', marginBottom: '20px' }}>
                    Comment obtenir plus d&apos;avis (légalement)
                  </p>
                  <ol className="space-y-4">
                    {[
                      'Demandez systématiquement à chaque client satisfait, juste après la prestation',
                      'Simplifiez le processus : envoyez un lien direct vers votre page d\'avis par SMS ou email',
                      'Utilisez un QR code sur vos factures, cartes de visite ou devis',
                      'Répondez à tous les avis, positifs comme négatifs, dans les 48 heures',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono font-bold text-xs" style={{ background: 'rgba(252,235,48,0.20)', color: '#fceb30' }}>{i + 1}</span>
                        <span style={{ fontFamily: inter.style.fontFamily, fontSize: '14px', lineHeight: '23px', color: 'rgba(255,255,255,0.80)' }}>{item}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="mt-6 flex items-start gap-3 rounded-xl p-4" style={{ background: 'rgba(0,0,0,0.20)' }}>
                    <Warning size={16} weight="fill" color="rgba(252,235,48,0.7)" className="mt-0.5 shrink-0" />
                    <p style={{ fontFamily: inter.style.fontFamily, fontSize: '13px', lineHeight: '21px', color: 'rgba(255,255,255,0.60)' }}>
                      Ne jamais acheter des avis ni demander à des proches d&apos;en laisser sans avoir utilisé vos services. Google détecte ces pratiques.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <Sep />

        {/* ════════════════════════════════════════
            06,SITE WEB
        ════════════════════════════════════════ */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <ScrollReveal>
              <p className="mb-4 font-mono font-bold uppercase tracking-widest" style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '13px', color: '#fceb30', textShadow: '0 0 12px rgba(252,235,48,0.6)' }}>
                06
              </p>
              <h2 className="mb-4 max-w-[28ch] text-white" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: '1.15' }}>
                Votre site web : la fondation technique
              </h2>
              <p className="mb-14 max-w-[62ch] text-white/55" style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '26px' }}>
                La fiche GBP est indispensable, mais elle ne remplace pas un site web optimisé.
                Google utilise votre site pour confirmer et enrichir les signaux de votre fiche.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Balises title et méta localisées',
                  desc: 'Exemple : Plombier à Lyon 69 – Intervention rapide | Dupont Plomberie. L\'ancrage géographique doit apparaître dans le titre.',
                  code: true,
                },
                {
                  title: 'Pages de service géolocalisées',
                  desc: 'Si vous intervenez dans plusieurs villes, créez une page dédiée par zone (/plombier-lyon, /plombier-villeurbanne). Contenu unique par page, pas de duplication.',
                  code: false,
                },
                {
                  title: 'NAP en pied de page',
                  desc: 'Affichez votre nom, adresse et téléphone sur toutes les pages en texte HTML (pas en image) pour que Google puisse le lire.',
                  code: false,
                },
                {
                  title: 'Schema.org LocalBusiness',
                  desc: 'Intégrez un balisage structuré JSON-LD de type LocalBusiness (ou son sous-type : Plumber, Electrician…) pour éliminer toute ambiguïté pour Google.',
                  code: false,
                },
                {
                  title: 'Vitesse et compatibilité mobile',
                  desc: 'Plus de 60 % des recherches locales se font sur mobile. Un site lent ou non responsive pénalise votre classement et fait fuir vos visiteurs.',
                  code: false,
                },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.07}>
                  <div className="h-full rounded-[1.5rem] p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)' }}>
                    <div className="mb-4 h-[2px] w-8 rounded-full" style={{ background: '#fceb30' }} />
                    <h3 style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '16px', color: '#ffffff', marginBottom: '8px', lineHeight: '1.3' }}>{item.title}</h3>
                    <p style={{ fontFamily: inter.style.fontFamily, fontSize: '14px', lineHeight: '23px', color: 'rgba(255,255,255,0.55)' }}>{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <Sep />

        {/* ════════════════════════════════════════
            07,CITATIONS LOCALES
        ════════════════════════════════════════ */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-start">
              <ScrollReveal>
                <p className="mb-4 font-mono font-bold uppercase tracking-widest" style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '13px', color: '#fceb30', textShadow: '0 0 12px rgba(252,235,48,0.6)' }}>
                  07
                </p>
                <h2 className="mb-6 text-white" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: '1.15' }}>
                  Les citations locales : multiplier les signaux
                </h2>
                <p className="mb-8 text-white/60" style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '27px' }}>
                  Une citation locale est toute mention de votre NAP sur un site tiers : annuaire professionnel,
                  chambre des métiers, blog local, presse régionale. Chaque citation cohérente renforce
                  la confiance de Google dans votre existence et votre localisation.
                </p>
                <div className="rounded-2xl p-5" style={{ background: 'rgba(252,235,48,0.06)', border: '1px solid rgba(252,235,48,0.15)' }}>
                  <p style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '15px', color: '#ffffff', marginBottom: '8px' }}>
                    Règle d&apos;or
                  </p>
                  <p style={{ fontFamily: inter.style.fontFamily, fontSize: '14px', lineHeight: '23px', color: 'rgba(255,255,255,0.70)' }}>
                    Qualité et cohérence avant quantité. <strong className="text-white/90">10 citations parfaitement cohérentes</strong> valent mieux que 50 citations avec des variantes de NAP.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <p style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '12px', color: 'rgba(255,255,255,0.40)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                  Annuaires prioritaires pour les artisans en France
                </p>
                <div className="space-y-3">
                  {citations.map((c, i) => (
                    <div key={i} className="flex items-center justify-between rounded-xl px-4 py-3" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <div>
                        <span style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '14px', color: 'rgba(255,255,255,0.80)' }}>{c.name}</span>
                        {c.note && <span style={{ fontFamily: inter.style.fontFamily, fontSize: '12px', color: 'rgba(255,255,255,0.35)', marginLeft: '8px' }}>({c.note})</span>}
                      </div>
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star key={s} size={12} weight={s < c.stars ? 'fill' : 'regular'} color={s < c.stars ? '#fceb30' : 'rgba(255,255,255,0.15)'} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <Sep />

        {/* ════════════════════════════════════════
            08,POUR QUI / MON AVIS
        ════════════════════════════════════════ */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <ScrollReveal>
              <p className="mb-4 font-mono font-bold uppercase tracking-widest" style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '13px', color: '#fceb30', textShadow: '0 0 12px rgba(252,235,48,0.6)' }}>
                08
              </p>
              <h2 className="mb-12 text-white" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: '1.15' }}>
                Pour qui ça marche{' '}
                <span style={{ color: 'rgba(255,255,255,0.35)' }}>et pour qui ça ne marche pas</span>
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-16">
              <ScrollReveal delay={0.1}>
                <div className="h-full rounded-[2rem] p-10" style={{ background: 'linear-gradient(145deg, #2a57b8 0%, #3262ab 55%, #1d3f8f 100%)', boxShadow: '0 30px 60px -15px rgba(50,98,171,0.45)' }}>
                  <div className="mb-6 h-[3px] w-10 rounded-full" style={{ background: '#fceb30' }} />
                  <h3 className="mb-7" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '18px', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#ffffff' }}>
                    Particulièrement efficace <span style={{ color: '#fceb30' }}>pour</span>
                  </h3>
                  <ul className="space-y-4">
                    {[
                      'Les artisans du bâtiment (plombier, électricien, maçon, couvreur, peintre, carreleur, menuisier, serrurier)',
                      'Les artisans de la rénovation intérieure (cuisiniste, parqueteur, plaquiste)',
                      'Les décorateurs d\'intérieur et architectes d\'intérieur',
                      'Les artisans avec une zone d\'intervention définie (rayon de 30 à 80 km)',
                      'Les entreprises qui reçoivent des demandes urgentes (dépannage, urgence)',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ background: 'rgba(252,235,48,0.20)' }}>
                          <Check size={11} weight="bold" color="#fceb30" />
                        </span>
                        <span style={{ fontFamily: inter.style.fontFamily, fontSize: '14px', lineHeight: '23px', color: 'rgba(255,255,255,0.85)' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="h-full rounded-[2rem] p-10" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)' }}>
                  <div className="mb-6 h-[3px] w-10 rounded-full" style={{ background: 'rgba(255,255,255,0.25)' }} />
                  <h3 className="mb-7" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '18px', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.50)' }}>
                    Moins <span style={{ color: 'rgba(255,255,255,0.85)' }}>adapté si</span>
                  </h3>
                  <ul className="space-y-4">
                    {[
                      'Vous intervenez sur toute la France sans ancrage géographique fort',
                      'Votre activité est 100 % en ligne (pas de déplacement, pas de zone de service)',
                      'Vous démarrez votre activité et n\'avez aucun avis ni historique (le SEO local prend 3 à 6 mois)',
                      'Vous cherchez des résultats immédiats (Google Ads Local est plus adapté en complément)',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                          <ArrowRight size={9} weight="bold" color="rgba(255,255,255,0.4)" />
                        </span>
                        <span style={{ fontFamily: inter.style.fontFamily, fontSize: '14px', lineHeight: '23px', color: 'rgba(255,255,255,0.55)' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Mon avis */}
            <ScrollReveal delay={0.1}>
              <figure
                className="rounded-[2rem] p-10"
                style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)', border: '1px solid rgba(255,255,255,0.10)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07)' }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full" style={{ border: '2px solid rgba(252,235,48,0.4)' }}>
                    <Image src="/laeti-1.jpg" alt="Laetitia Laghezza" fill className="object-cover object-center" sizes="40px" />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '13px', color: '#ffffff' }}>Laetitia Laghezza</p>
                    <p style={{ fontFamily: inter.style.fontFamily, fontSize: '11px', color: 'rgba(252,235,48,0.65)', marginTop: '1px', textTransform: 'uppercase', letterSpacing: '0.07em' }}>Mon avis</p>
                  </div>
                </div>
                <Quotes size={28} weight="fill" color="rgba(252,235,48,0.4)" className="mb-5" />
                <blockquote className="text-white/80" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500, fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: '1.6' }}>
                  Je refuse régulièrement des clients,et c&apos;est l&apos;une des meilleures décisions que j&apos;aie prises.
                  Quand quelqu&apos;un me contacte en espérant dépasser ses concurrents en 15 jours ou remonter en 1re position
                  d&apos;ici la semaine prochaine, je décline. Non par manque d&apos;envie, mais parce que le SEO local ne fonctionne
                  pas comme ça,et promettre l&apos;inverse serait vous mentir. Ce que j&apos;ai appris au fil des années :
                  les professionnels qui obtiennent les meilleurs résultats sont ceux qui comprennent que la visibilité
                  locale se <em>construit</em>, pas s&apos;achète. Ils répondent à leurs avis, mettent à jour leur fiche,
                  jouent le jeu sur la durée. Ces clients-là, je les garde longtemps.
                </blockquote>
              </figure>
            </ScrollReveal>
          </div>
        </section>

        <Sep />

        {/* ════════════════════════════════════════
            09,CE QUE JE FAIS / EXPERT Q&A
        ════════════════════════════════════════ */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <ScrollReveal>
              <p className="mb-4 font-mono font-bold uppercase tracking-widest" style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '13px', color: '#fceb30', textShadow: '0 0 12px rgba(252,235,48,0.6)' }}>
                09
              </p>
              <h2 className="mb-4 max-w-[28ch] text-white" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: '1.15' }}>
                Ce que je fais concrètement pour vous
              </h2>
              <p className="mb-14 max-w-[60ch] text-white/55" style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '26px' }}>
                Un audit SEO local complet couvre six axes. Voici ce que j&apos;analyse pour chacun.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mb-16">
              {[
                { num: '1', title: 'Audit de votre fiche GBP',         desc: 'Analyse de chaque champ, détection des incohérences, recommandations de catégories, audit des photos et des posts existants.' },
                { num: '2', title: 'Audit NAP complet',                 desc: 'Vérification de la cohérence sur les 20 principales sources locales. Identification et correction des incohérences.' },
                { num: '3', title: 'Analyse de vos avis',               desc: 'Ratio avis positifs/négatifs, fréquence, fraîcheur, taux de réponse. Mise en place d\'un processus de collecte d\'avis.' },
                { num: '4', title: 'Audit technique de votre site',     desc: 'Vérification du balisage Schema.org, des balises title/méta localisées, de la vitesse mobile, des pages de service géolocalisées.' },
                { num: '5', title: 'Analyse concurrentielle locale',    desc: 'Qui sont vos 3 concurrents directs dans le Local Pack ? Quels sont leurs points forts et failles ? Comment les dépasser ?' },
                { num: '6', title: 'Plan d\'action priorisé',           desc: 'Un document clair avec les actions classées par impact/effort, pour que vous sachiez exactement quoi faire en premier.' },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.06}>
                  <div className="h-full rounded-[1.5rem] p-7" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)' }}>
                    <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg font-mono font-bold text-sm" style={{ background: 'rgba(252,235,48,0.12)', border: '1px solid rgba(252,235,48,0.25)', color: '#fceb30' }}>
                      {item.num}
                    </div>
                    <h3 style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '16px', color: '#ffffff', marginBottom: '8px', lineHeight: '1.3' }}>{item.title}</h3>
                    <p style={{ fontFamily: inter.style.fontFamily, fontSize: '14px', lineHeight: '23px', color: 'rgba(255,255,255,0.55)' }}>{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Aperçu rapport PDF */}
            <ScrollReveal delay={0.1}>
              <div className="overflow-hidden rounded-2xl mb-16" style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                <img
                  src="/rapport-preview.svg"
                  alt="Aperçu du rapport Diagnostic Visibilité Locale"
                  width={800}
                  height={440}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                <div className="px-4 py-3" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <p style={{ fontFamily: inter.style.fontFamily, fontSize: '12px', color: 'rgba(255,255,255,0.45)' }}>Extrait · Rapport structuré avec plan d&apos;action priorisé, livré en PDF dans les 5 jours ouvrés</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Expert Q&A */}
            <ScrollReveal>
              <p className="mb-10 uppercase tracking-widest" style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '13px', color: '#fceb30', textShadow: '0 0 12px rgba(252,235,48,0.6)' }}>
                Questions terrain
              </p>
            </ScrollReveal>
            <div className="space-y-6">
              {expertQA.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="rounded-[1.5rem] p-8" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)' }}>
                    <p className="mb-4 text-white/50" style={{ fontFamily: inter.style.fontFamily, fontSize: '14px', lineHeight: '22px', fontStyle: 'italic' }}>
                      &ldquo;{item.q}&rdquo;
                    </p>
                    <div className="flex items-start gap-4">
                      <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full" style={{ border: '2px solid rgba(252,235,48,0.35)' }}>
                        <Image src="/laeti-1.jpg" alt="Laetitia Laghezza" fill className="object-cover object-center" sizes="36px" />
                      </div>
                      <p className="text-white/80" style={{ fontFamily: inter.style.fontFamily, fontSize: '15px', lineHeight: '26px' }}>
                        {item.a}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <Sep />

        {/* ════════════════════════════════════════
            10,FAQ
        ════════════════════════════════════════ */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
            <ScrollReveal>
              <p className="mb-4 uppercase tracking-widest" style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '13px', color: '#fceb30', textShadow: '0 0 12px rgba(252,235,48,0.6)' }}>
                Questions fréquentes
              </p>
              <h2 className="mb-14 text-white" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(26px, 3.5vw, 42px)', lineHeight: '1.15' }}>
                Tout ce que vous voulez savoir sur le référencement local
              </h2>
            </ScrollReveal>
            <div className="space-y-0 divide-y" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
              {faq.map((f, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <div className="py-7">
                    <h3 className="mb-3 text-white" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '17px', lineHeight: '1.35' }}>
                      {f.q}
                    </h3>
                    <p style={{ fontFamily: inter.style.fontFamily, fontSize: '15px', lineHeight: '26px', color: 'rgba(255,255,255,0.55)' }}>
                      {f.a}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <Sep />

        {/* ════════════════════════════════════════
            SOURCES
        ════════════════════════════════════════ */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
            <ScrollReveal>
              <p className="mb-4 uppercase tracking-widest" style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '13px', color: '#fceb30', textShadow: '0 0 12px rgba(252,235,48,0.6)' }}>
                Sources
              </p>
              <h2 className="mb-12 max-w-[26ch] text-white" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 38px)', lineHeight: '1.2' }}>
                Pour aller plus loin
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
                    <h3 className="mb-3 text-white" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '16px', lineHeight: '1.3' }}>{s.title}</h3>
                    <p style={{ fontFamily: inter.style.fontFamily, fontSize: '14px', lineHeight: '23px', color: 'rgba(255,255,255,0.55)' }}>{s.desc}</p>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <Sep />

        {/* ════════════════════════════════════════
            CTA FINAL
        ════════════════════════════════════════ */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-7xl px-6 py-24 text-center md:py-32">
            <ScrollReveal>
              <p className="mb-4 uppercase tracking-widest" style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '13px', color: '#fceb30', textShadow: '0 0 12px rgba(252,235,48,0.6)' }}>
                Prochaine étape
              </p>
              <h2 className="mb-6 text-white" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 54px)', lineHeight: '1.1' }}>
                Vos clients cherchent déjà.{' '}
                <span style={{ color: '#fceb30', textShadow: '0 0 18px rgba(252,235,48,0.55), 0 0 48px rgba(252,235,48,0.25)' }}>
                  Est-ce que c&apos;est vous qu&apos;ils trouvent ?
                </span>
              </h2>
              <p className="mx-auto mb-10 max-w-[52ch] text-white/55" style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '27px' }}>
                Un audit SEO local complet identifie précisément ce qui bloque votre visibilité.
                Rapport structuré en 5 jours ouvrés. Appel de restitution inclus. 190 €.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/audit-seo-local"
                  className="inline-flex items-center gap-2 rounded-full bg-[#fceb30] px-8 py-4 font-bold text-[#264d8c] transition-all duration-300 hover:brightness-105 active:scale-[0.98]"
                  style={{ fontFamily: inter.style.fontFamily, fontSize: '15px' }}
                >
                  Demander mon audit SEO local · 190 €
                  <ArrowRight size={15} weight="bold" />
                </Link>
                <Link
                  href="/offre"
                  className="inline-flex items-center gap-2 text-white/50 transition-colors hover:text-white/80"
                  style={{ fontFamily: inter.style.fontFamily, fontSize: '14px' }}
                >
                  Voir toutes les offres
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
