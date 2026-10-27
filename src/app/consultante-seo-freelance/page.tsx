import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';
import MagneticButton from '@/components/MagneticButton';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import { inter } from '@/lib/fonts';

const URL = 'https://laeti-seo.fr/consultante-seo-freelance';
const CALENDLY = 'https://calendly.com/laetitia_laghezza_seo_local/30min';

const TITLE = "Consultante SEO freelance pour les pros de l'habitat";
const DESCRIPTION =
  "Consultante SEO freelance pour artisans et pros de l'habitat, en Provence et en France. Diagnostic à 790 € livré en 5 jours, tarifs affichés.";

export const metadata: Metadata = {
  // `absolute` : le title tient en 467 px sans le suffixe « | Laeti SEO » du gabarit global.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    type: 'profile',
    locale: 'fr_FR',
    url: URL,
    siteName: 'Laeti SEO',
    title: TITLE,
    description: DESCRIPTION,
  },
};

const enBref = [
  'Une interlocutrice unique, du diagnostic à la mise en œuvre.',
  'Des tarifs affichés, pas de devis qui gonflent en cours de route.',
  'Deux chantiers prioritaires : la fiche Google Business Profile et les pages locales.',
  'Un diagnostic livré en 5 jours ouvrés, à votre nom.',
];

const reasons = [
  {
    title: 'Une interlocutrice unique.',
    text: "Pas de chef de projet qui relaie à un pôle technique, puis revient avec une réponse approximative. Vous parlez à celle qui ouvre votre fiche, écrit vos pages et lit vos statistiques. Une question, une réponse. Pas de téléphone arabe.",
  },
  {
    title: 'Pas de frais de structure.',
    text: "Une agence facture ses bureaux, son équipe commerciale, son turnover. Sur une mission de visibilité, ces coûts ne vous apportent rien. Chez moi, le budget part dans le travail.",
  },
  {
    title: 'Une réactivité de 24 h ouvrées.',
    text: "Un horaire à changer, un chantier à mettre en avant, un avis à traiter : réponse sous 24 h ouvrées. Vous n'avez pas à relancer trois fois.",
  },
  {
    title: 'Des tarifs affichés.',
    text: "790 € le diagnostic, écrit noir sur blanc sur ce site. Vous savez ce que vous payez avant de décrocher le téléphone. C'est rare. C'est volontaire.",
  },
];

// Mêmes textes pour l'accordéon visible et pour le FAQPage du JSON-LD : ne les modifier qu'ensemble.
const faqs = [
  {
    q: 'Freelance ou agence : quelle différence réelle ?',
    a: "Le nombre d'intermédiaires. En agence, vous êtes souvent le dernier informé. Ici, vous parlez directement à celle qui exécute, sans réunion de calage. La contrepartie est assumée : je ne couvre pas tout, et je le dis quand ce n'est pas mon métier.",
  },
  {
    q: 'Combien de temps avant de voir des résultats ?',
    a: "Je ne promets pas de délai, et personne ne devrait. Un horaire corrigé sur une fiche peut se voir vite. Une page locale qui doit se positionner face à des concurrents installés prend plus de temps, et dépend de votre marché. Le diagnostic vous donne l'ordre de priorité, pas une date.",
  },
  {
    q: 'Travaillez-vous à distance ?',
    a: "Oui. Provence en priorité, France entière ensuite. Tout passe par des outils partagés : accès à votre fiche, documents, visios courtes. Le travail à distance n'a jamais empêché de vérifier ce qui a été fait.",
  },
  {
    q: 'Y a-t-il un engagement de durée ?',
    a: "Pas d'abonnement automatique. Le diagnostic est un livrable autonome. Si vous voulez la mise en œuvre ensuite, on cadre un périmètre et une durée. Si vous préférez l'appliquer vous-même, le document est fait pour ça.",
  },
  {
    q: 'Et si ça ne marche pas ?',
    a: 'Vous jugez sur pièce. Le diagnostic arrive en 5 jours ouvrés, avec des correctifs nommés et applicables. Vous lisez, vous testez, vous décidez. Aucune clause ne vous retient.',
  },
  {
    q: "L'IA et les Aperçus IA changent-ils la donne ?",
    a: 'Oui, sur un point : la précision des faits devient un critère de citation. Fiche complète, pages factuelles, avis récents, données structurées. Le reste - posture, bourrage de mots-clés, pages vides - perd de la valeur.',
  },
  {
    q: 'Pourquoi 790 € alors que d’autres proposent un audit gratuit ?',
    a: 'Un audit SEO local gratuit est presque toujours une plaquette commerciale : cinq constats génériques, et un devis qui suit. Le mien est mesuré, chiffré, livré en 5 jours, et utilisable sans moi. 790 €, c’est le prix d’un travail, pas d’un rendez-vous de vente.',
  },
  {
    q: 'Combien de clients suivez-vous en même temps ?',
    a: 'Un nombre volontairement limité. Au-delà, la réactivité de 24 h ouvrées devient une promesse creuse. Je préfère refuser une mission que dégrader le suivi.',
  },
];

const PERSON_ID = `${URL}#person`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfilePage',
      '@id': `${URL}#webpage`,
      url: URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: 'fr-FR',
      isPartOf: { '@id': 'https://laeti-seo.fr/#website' },
      // @id local : à basculer vers https://laeti-seo.fr/#person quand l'accueil déclarera ce nœud.
      about: { '@id': PERSON_ID },
      mainEntity: { '@id': PERSON_ID },
      breadcrumb: { '@id': `${URL}#breadcrumb` },
      hasPart: { '@id': `${URL}#faq` },
      datePublished: '2026-10-27',
      dateModified: '2026-10-27',
    },
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: 'Laetitia Laghezza',
      jobTitle: 'Consultante SEO freelance',
      description:
        "Consultante SEO freelance depuis 12 ans, spécialisée dans les artisans et les entreprises de l'habitat, en Provence et en France.",
      url: URL,
      sameAs: ['https://www.linkedin.com/in/laetitia-laghezza-seo-local/'],
      knowsAbout: [
        'Google Business Profile',
        'Pages locales',
        'Artisans du bâtiment',
        "Entreprises de l'habitat",
        'Visibilité dans les réponses IA',
      ],
      areaServed: [
        { '@type': 'AdministrativeArea', name: "Provence-Alpes-Côte d'Azur" },
        { '@type': 'Country', name: 'France' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${URL}#faq`,
      isPartOf: { '@id': `${URL}#webpage` },
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://laeti-seo.fr/' },
        { '@type': 'ListItem', position: 2, name: 'Consultante SEO freelance', item: URL },
      ],
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
const h3 = { fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '24px', lineHeight: '1.25' } as const;
const body = { fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '26px' } as const;

const extLink = 'underline underline-offset-4 text-[#fceb30] hover:brightness-110';

function Block({ title, children, delay = 0 }: { title: string; children: ReactNode; delay?: number }) {
  return (
    <ScrollReveal delay={delay} className="h-full">
      <div className="h-full rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]">
        <h3 className="mb-4 text-white" style={h3}>{title}</h3>
        <div className="space-y-4 text-white/70" style={body}>{children}</div>
      </div>
    </ScrollReveal>
  );
}

export default function ConsultanteSeoFreelancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="relative bg-transparent" style={{ paddingTop: '120px' }}>
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-12 md:pt-20 lg:grid-cols-[1.45fr_0.85fr] lg:gap-16">
            <div>
              <ScrollReveal>
                <p className="mb-5" style={yellowLabel}>Laetitia Laghezza</p>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <h1
                  className="mb-6 text-white"
                  style={{
                    fontFamily: 'Satoshi, "Satoshi Fallback", ui-sans-serif, system-ui, -apple-system, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(32px, 5.4vw, 54px)',
                    lineHeight: '1.08',
                    textTransform: 'uppercase',
                  }}
                >
                  Consultante SEO freelance{' '}
                  <span style={{ color: '#fceb30', textShadow: '0 0 18px rgba(252,235,48,0.55), 0 0 48px rgba(252,235,48,0.25)' }}>
                    pour les pros de l&apos;habitat
                  </span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.14}>
                <p className="max-w-[58ch] text-white/75" style={body}>
                  Je m&apos;appelle Laetitia Laghezza. Consultante SEO freelance depuis 12 ans, je travaille avec les artisans et les
                  entreprises de l&apos;habitat : cuisine, salle de bain, menuiserie, rénovation, toiture, aménagement. En Provence, et
                  partout en France. Mon livrable d&apos;entrée tient en une ligne : un diagnostic à 790 €, rendu en 5 jours ouvrés.
                </p>
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

            <ScrollReveal delay={0.2}>
              <figure className="mx-auto w-full max-w-[340px] lg:max-w-[350px] lg:justify-self-end">
                <div
                  className="relative overflow-hidden"
                  style={{
                    aspectRatio: '4 / 4.7',
                    borderRadius: '90px 12px 12px 12px',
                    border: '1px solid rgba(255,255,255,0.3)',
                    background: '#24477d',
                    boxShadow: '0 24px 64px -16px rgba(0,0,0,0.45), 0 0 48px -8px rgba(252,235,48,0.18)',
                  }}
                >
                  <Image
                    src="/laeti-3.webp"
                    alt="Laetitia Laghezza, consultante SEO freelance"
                    fill
                    priority
                    sizes="350px"
                    className="object-cover"
                    style={{ objectPosition: '50% 20%', filter: 'saturate(1.2) hue-rotate(18deg)' }}
                  />
                </div>
                <figcaption className="pt-4" style={{ fontFamily: inter.style.fontFamily }}>
                  <strong className="block text-[16px] font-semibold text-white">Laetitia Laghezza</strong>
                  <span className="block text-[14px] text-white/60">Consultante SEO freelance</span>
                </figcaption>
              </figure>
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
              {enBref.map((item, i) => (
                <ScrollReveal key={item} delay={0.05 + i * 0.06}>
                  <li className="flex items-start gap-4 rounded-[1.25rem] border border-[#264d8c]/10 bg-[#f2f5fb] px-6 py-5">
                    <span className="mt-0.5 font-bold text-[#2355b6]" aria-hidden="true">✓</span>
                    <span className="text-[#264d8c]" style={{ ...body, fontSize: '17px' }}>{item}</span>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Freelance plutôt qu'agence ── */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
            <ScrollReveal>
              <p className="mb-3" style={yellowLabel}>Freelance ou agence</p>
              <h2 className="mb-8 max-w-[26ch] text-white" style={h2}>
                Pourquoi une consultante SEO freelance plutôt qu&apos;une agence
              </h2>
              <div className="mb-12 max-w-[68ch] space-y-4 text-white/70" style={body}>
                <p>
                  Vous avez demandé trois devis. Vous avez reçu trois propositions, aucune mesure de votre visibilité actuelle, et des
                  tarifs différents sans explication. Normal : vous avez parlé à des commerciaux, pas à la personne qui fera le travail.
                </p>
                <p>Voici ce qui change avec une indépendante.</p>
              </div>
            </ScrollReveal>
            <ol className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {reasons.map((r, i) => (
                <ScrollReveal key={r.title} delay={0.06 + i * 0.07} className="h-full">
                  <li className="h-full rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]">
                    <p className="mb-3 text-[#fceb30]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '15px', letterSpacing: '0.06em' }}>
                      0{i + 1}
                    </p>
                    <h3 className="mb-3 text-white" style={{ ...h3, fontSize: '22px' }}>{r.title}</h3>
                    <p className="text-white/65" style={body}>{r.text}</p>
                  </li>
                </ScrollReveal>
              ))}
            </ol>
            <ScrollReveal delay={0.1}>
              <p className="mt-10 max-w-[68ch] text-white/70" style={body}>
                Une agence n&apos;est pas un mauvais choix en soi. Elle devient un mauvais choix quand votre besoin est clair, votre
                périmètre petit et votre budget réel.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Ce que je fais concrètement ── */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
            <ScrollReveal>
              <p className="mb-3" style={yellowLabel}>Concrètement</p>
              <h2 className="mb-12 max-w-[26ch] text-white" style={h2}>
                Ce que je fais concrètement pour votre visibilité
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Block title="Votre fiche Google Business Profile : le levier le plus sous-exploité" delay={0.05}>
                <p>
                  Seule une entreprise sur deux utilise Google Business Profile, selon le{' '}
                  <a
                    href="https://www.francenum.gouv.fr/guides-et-conseils/communication-et-publicite/referencement/google-business-profile-le-service-de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={extLink}
                  >
                    Baromètre France Num 2025
                  </a>
                  . Les autres ont une fiche créée par Google, jamais revendiquée. Pas de photos, pas de description, pas d&apos;horaires
                  à jour. Elles existent. Elles ne sont pas trouvées.
                </p>
                <p>
                  Votre fiche est souvent le premier contact. Et les recherches contenant « près de moi » ont progressé de plus de 250 %
                  ces dernières années, selon Google. Vos clients décident en quelques minutes. La fiche doit être prête.
                </p>
                <p>
                  Ce que je corrige : catégorie principale, zone desservie, section Services, description, photos de chantier
                  géolocalisées, horaires réels, réponses aux avis, Google Posts. Rien de spectaculaire. Presque toujours les mêmes oublis.
                </p>
              </Block>

              <Block title="Vos pages locales : une page par intention, pas quarante pages creuses" delay={0.12}>
                <p>
                  Un client ne tape pas « menuisier ». Il tape <strong className="text-white">« rénovation de cuisine à Toulon »</strong>,
                  « pose de fenêtres Aix-en-Provence », « réparation toiture fuite Marseille ». Chaque intention mérite sa page.
                </p>
                <p>
                  Une page locale utile contient : la ville, votre zone réelle d&apos;intervention, vos prestations, des réalisations
                  locales, des avis, un numéro cliquable. Pas de texte dupliqué avec la ville remplacée au kilomètre. Google le repère.
                  Vos clients aussi.
                </p>
                <p>
                  Vous n&apos;avez pas besoin de 40 pages. Vous avez besoin de 6 pages justes. Si vous êtes artisan et que vous démarrez,
                  commencez par la{' '}
                  <Link href="/seo-pour-artisans" className={extLink}>page dédiée aux artisans</Link>.
                </p>
              </Block>

              <Block title="Votre contenu et vos réalisations : la matière première est déjà chez vous" delay={0.05}>
                <p>
                  Vous avez des chantiers. Ils valent mieux que n&apos;importe quel article générique sur la rénovation. Photos
                  avant/après, descriptif de prestation, contraintes d&apos;accès, délais réels, prix de départ quand c&apos;est
                  possible, zones couvertes.
                </p>
                <p>
                  Et vos avis. 96 % des consommateurs consultent des avis en ligne pour une entreprise locale, d&apos;après la{' '}
                  <a
                    href="https://www.brightlocal.com/research/local-consumer-review-survey-2025/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={extLink}
                  >
                    Local Consumer Review Survey 2025
                  </a>{' '}
                  de BrightLocal. Un avis sans réponse, c&apos;est une conversation laissée en suspens. Je structure la collecte et je
                  traite les réponses.
                </p>
              </Block>

              <Block title="Votre visibilité dans les réponses IA" delay={0.12}>
                <p>
                  Les Aperçus IA et le Mode IA sont arrivés en France le 22 juillet 2026, comme l&apos;annonce{' '}
                  <a
                    href="https://blog.google/intl/fr-fr/nouveautes-produits/explorez-obtenez-des-reponses/recherche-ia-apercus-mode/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={extLink}
                  >
                    Google
                  </a>
                  . Une partie des réponses se construit désormais à partir de sources citées.
                </p>
                <p>
                  Conséquence directe : une entreprise absente des sources n&apos;est pas citée. Et une fiche incomplète donne peu de
                  matière à citer.
                </p>
                <p>
                  Le travail ne change pas de nature. Il devient plus exigeant. Des faits précis, une fiche complète, des pages qui
                  répondent vraiment, des avis récents, des données structurées propres. Même discipline, enjeu de plus.
                </p>
              </Block>
            </div>
          </div>
        </section>

        {/* ── Le jour du diagnostic ── */}
        <section className="relative bg-white" style={{ backgroundColor: '#ffffff' }}>
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
            <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1fr_1.2fr] md:gap-20">
              <ScrollReveal>
                <p className="mb-4" style={blueLabel}>Le diagnostic</p>
                <h2 className="max-w-[18ch] text-[#264d8c]" style={h2}>
                  Ce que vous recevez le jour du diagnostic
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="space-y-5 text-[#264d8c]/80" style={{ ...body, fontSize: '17px', lineHeight: '28px' }}>
                  <p>
                    Pas un rapport de 90 pages. Un document de travail, en 5 jours ouvrés : votre position réelle sur vos requêtes
                    métier, ce qui bloque, les correctifs par ordre de priorité, et les expressions que vos clients tapent vraiment. Le
                    tout à votre nom. Vous gardez le document, même si nous ne travaillons pas ensemble ensuite.
                  </p>
                  <p>
                    Le périmètre complet est sur la{' '}
                    <Link href="/offre" className="font-semibold text-[#2355b6] underline underline-offset-4">page Offre</Link>.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Les réponses sont rendues dans le HTML initial (accordéon replié en CSS) : le FAQPage du JSON-LD les reprend mot pour mot. */}
        <FAQ items={faqs} label="Questions fréquentes" heading="Travailler avec une consultante freelance" />

        {/* ── Avis (3 avis Google, non reformulés) ── */}
        <Testimonials />

        <FinalCTA
          heading={<>Parlons de votre visibilité.</>}
          body={
            <p className="mx-auto mt-6 max-w-[50ch] text-base leading-relaxed text-white/65" style={{ fontFamily: inter.style.fontFamily }}>
              Vingt minutes au téléphone. Sans engagement, sans présentation commerciale. Vous repartez avec un premier verdict : votre
              fiche tient-elle la route, et qu&apos;est-ce qui bloque en premier.
            </p>
          }
          cta="Demander un appel de 20 minutes"
        />
      </main>
    </>
  );
}
