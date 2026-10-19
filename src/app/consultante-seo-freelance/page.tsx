import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';
import MagneticButton from '@/components/MagneticButton';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import { inter } from '@/lib/fonts';

const URL = 'https://laeti-seo.fr/consultante-seo-freelance';
const CALENDLY = 'https://calendly.com/laetitia_laghezza_seo_local/30min';

export const metadata: Metadata = {
  title: "Consultante SEO freelance pour les professionnels de l'habitat",
  description:
    "Laetitia, consultante SEO freelance : plus de 12 ans de référencement, spécialisée dans la visibilité locale des professionnels de l'habitat. Je travaille seule, à distance, partout en France.",
  alternates: { canonical: URL },
  openGraph: {
    type: 'profile',
    locale: 'fr_FR',
    url: URL,
    siteName: 'Laeti SEO',
    title: "Consultante SEO freelance pour les professionnels de l'habitat | Laeti SEO",
    description:
      "Plus de 12 ans de référencement, une seule interlocutrice : j'analyse votre visibilité locale et je vous dis quoi améliorer, dans quel ordre.",
  },
};

const faqs = [
  {
    q: 'Travaillez-vous seule ?',
    a: "Oui. Je réalise personnellement l'analyse, les recommandations et le suivi. Il n'y a ni sous-traitance, ni stagiaire : vous échangez directement avec la personne qui s'occupe de votre visibilité.",
  },
  {
    q: 'Travaillez-vous uniquement en Provence ?',
    a: "Non. Je suis basée à Pourrières, dans le Var, mais je travaille à distance, en visioconférence et par e-mail, avec des professionnels de l'habitat partout en France. Des pages dédiées existent pour Aix-en-Provence, Marseille et Toulon.",
  },
  {
    q: 'Quelle différence avec une agence SEO ?',
    a: "Vous échangez directement avec la personne qui réalise le travail, sur un périmètre défini et avec des tarifs affichés. Je me concentre sur un seul sujet : la visibilité locale des professionnels de l'habitat.",
  },
  {
    q: 'Combien coûtent vos prestations ?',
    a: "Le diagnostic visibilité est à 790 €, en paiement unique. Le Sprint local est à 500 € par mois, avec un engagement de 3 mois minimum (1 500 € au total), diagnostic de départ inclus. Le premier appel de 20 minutes est gratuit et sans engagement.",
  },
  {
    q: 'Promettez-vous des résultats ?',
    a: "Non. Personne ne peut garantir une position sur Google. Je vous indique ce qui freine votre visibilité et les actions à mener en priorité ; les résultats dépendent ensuite de votre situation de départ, de la concurrence et de ce qui est réellement mis en place.",
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfilePage',
      '@id': `${URL}#webpage`,
      url: URL,
      name: "Consultante SEO freelance pour les professionnels de l'habitat",
      isPartOf: { '@id': 'https://laeti-seo.fr/#website' },
      about: { '@id': 'https://laeti-seo.fr/#laeti' },
      mainEntity: { '@id': 'https://laeti-seo.fr/#laeti' },
      inLanguage: 'fr-FR',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://laeti-seo.fr' },
          { '@type': 'ListItem', position: 2, name: 'Consultante SEO freelance', item: URL },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

const timeline = [
  { when: '2007', text: 'Je découvre le marketing digital.' },
  { when: '2008', text: "Je me lance dans l'e-commerce." },
  { when: 'Les années suivantes', text: 'Je me perfectionne dans le SEO, que je pratique depuis plus de 12 ans.' },
  { when: '2014', text: "J'arrête l'e-commerce et je me lance dans l'affiliation. J'apprends sur le tas, en lançant des dizaines de sites." },
  { when: "Aujourd'hui", text: "Je me concentre sur la visibilité locale des professionnels de l'habitat, parce que c'est là que tout se joue." },
];

const principles = [
  {
    title: 'Je travaille seule',
    text: "Pas de sous-traitance, pas de stagiaire : c'est moi qui analyse, qui rédige et qui assure le suivi.",
  },
  {
    title: 'Un langage clair',
    text: "Pas de jargon. Des actions concrètes, classées par priorité, que vous pouvez appliquer vous-même ou me confier.",
  },
  {
    title: 'Aucune fausse promesse',
    text: "Personne ne peut garantir une position sur Google. Je vous dis ce qui freine votre visibilité et ce qui peut s'améliorer.",
  },
  {
    title: 'À distance, partout en France',
    text: "Basée à Pourrières (Var), je travaille en visioconférence et par e-mail avec des professionnels de toute la France.",
  },
];

const differences = [
  'Un seul interlocuteur, du premier appel à la restitution.',
  'Un périmètre défini et des tarifs affichés : 790 € le diagnostic, 500 € par mois le Sprint local.',
  'Pas d’engagement caché : le diagnostic est un paiement unique, le Sprint local s’engage sur 3 mois minimum.',
  'Vous écrivez directement à la personne qui fait le travail.',
];

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
const body = { fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '26px' } as const;

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
                <p className="mb-5" style={yellowLabel}>Consultante SEO freelance</p>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <h1
                  className="mb-6 text-white"
                  style={{
                    fontFamily: 'Satoshi, "Satoshi Fallback", ui-sans-serif, system-ui, -apple-system, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(34px, 6vw, 60px)',
                    lineHeight: '1.08',
                    textTransform: 'uppercase',
                  }}
                >
                  Une seule interlocutrice.{' '}
                  <span style={{ color: '#fceb30', textShadow: '0 0 18px rgba(252,235,48,0.55), 0 0 48px rgba(252,235,48,0.25)' }}>
                    De l&apos;analyse au suivi.
                  </span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.14}>
                <p className="max-w-[56ch] text-white/75" style={body}>
                  Je m&apos;appelle Laetitia. Depuis plus de 12 ans, je travaille sur le référencement. Aujourd&apos;hui, j&apos;aide les
                  décorateurs, architectes d&apos;intérieur, cuisinistes, menuisiers et artisans à être plus visibles auprès des clients de leur secteur.
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

        {/* ── Parcours ── */}
        <section className="relative bg-white" style={{ backgroundColor: '#ffffff' }}>
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.2fr] md:gap-20">
              <ScrollReveal>
                <p className="mb-4" style={blueLabel}>Mon parcours</p>
                <h2 className="max-w-[16ch] text-[#264d8c]" style={h2}>
                  Du e-commerce au SEO local.
                </h2>
                <p className="mt-6 max-w-[46ch] text-[#264d8c]/70" style={body}>
                  Geek dans l&apos;âme, j&apos;aime explorer de nouvelles techniques pour être plus visible. Une fiche Google bien structurée
                  peut faire toute la différence face à un concurrent qui rafle les devis.
                </p>
              </ScrollReveal>

              <ol className="relative space-y-8 border-l-2 border-[#264d8c]/15 pl-8">
                {timeline.map((t, i) => (
                  <ScrollReveal key={t.when} delay={0.05 + i * 0.07}>
                    <li className="relative">
                      <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-[3px] border-white bg-[#fceb30] shadow-[0_0_0_2px_rgba(38,77,140,0.25)]" aria-hidden="true" />
                      <p className="mb-1 text-[#2355b6]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                        {t.when}
                      </p>
                      <p className="text-[#264d8c]" style={{ ...body, fontSize: '17px' }}>{t.text}</p>
                    </li>
                  </ScrollReveal>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ── Façon de travailler ── */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
            <ScrollReveal>
              <p className="mb-3" style={yellowLabel}>Ma façon de travailler</p>
              <h2 className="mb-12 max-w-[20ch] text-white" style={h2}>
                Simple, directe et sans détour.
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {principles.map((p, i) => (
                <ScrollReveal key={p.title} delay={0.06 + i * 0.07} className="h-full">
                  <div className="h-full rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]">
                    <h3 className="mb-3 text-white" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '1.3' }}>
                      {p.title}
                    </h3>
                    <p className="text-white/65" style={body}>{p.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Freelance vs structure ── */}
        <section className="relative bg-[#f2f5fb]">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
            <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1fr_1.1fr] md:gap-20">
              <ScrollReveal>
                <p className="mb-4" style={blueLabel}>Freelance ou agence ?</p>
                <h2 className="max-w-[18ch] text-[#264d8c]" style={h2}>
                  Ce que ça change concrètement.
                </h2>
                <p className="mt-6 max-w-[44ch] text-[#264d8c]/70" style={body}>
                  Travailler avec une consultante SEO freelance, c&apos;est avoir en face de vous la personne qui fait réellement le travail.
                </p>
              </ScrollReveal>
              <ul className="space-y-4">
                {differences.map((d, i) => (
                  <ScrollReveal key={d} delay={0.05 + i * 0.07}>
                    <li className="flex items-start gap-4 rounded-[1.25rem] border border-[#264d8c]/10 bg-white px-6 py-5">
                      <span className="mt-0.5 font-bold text-[#2355b6]" aria-hidden="true">✓</span>
                      <span className="text-[#264d8c]" style={{ ...body, fontSize: '17px' }}>{d}</span>
                    </li>
                  </ScrollReveal>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Avis ── */}
        <Testimonials />

        {/* ── Offres ── */}
        <section className="relative bg-white" style={{ backgroundColor: '#ffffff' }}>
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="mb-4" style={blueLabel}>Travailler ensemble</p>
                <h2 className="mx-auto max-w-[22ch] text-[#264d8c]" style={h2}>
                  Deux façons de travailler avec moi.
                </h2>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <ScrollReveal delay={0.05} className="h-full">
                <div className="flex h-full flex-col rounded-[2rem] bg-[#264d8c] p-8 md:p-10">
                  <h3 className="mb-2 text-white" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '24px' }}>
                    Diagnostic visibilité
                  </h3>
                  <p className="mb-6 text-white/70" style={{ ...body, fontSize: '15px' }}>
                    Vous savez ce qui freine votre visibilité, quoi améliorer et dans quel ordre agir.
                  </p>
                  <p className="mb-6 text-white" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '40px', lineHeight: 1 }}>
                    790 <span className="text-[#fceb30]">€</span>
                  </p>
                  <Link
                    href="/offre#diagnostic"
                    className="mt-auto rounded-full border border-white/25 bg-white/[0.08] py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-white/[0.14]"
                    style={{ fontFamily: inter.style.fontFamily }}
                  >
                    Découvrir le diagnostic
                  </Link>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.12} className="h-full">
                <div
                  className="flex h-full flex-col rounded-[2rem] p-8 md:p-10"
                  style={{ background: 'linear-gradient(145deg, #2c58b0 0%, #264d8c 60%, #1d3e77 100%)', boxShadow: '0 0 0 1.5px rgba(252,235,48,0.45)' }}
                >
                  <h3 className="mb-2 text-white" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '24px' }}>
                    Sprint local 3 mois
                  </h3>
                  <p className="mb-6 text-white/70" style={{ ...body, fontSize: '15px' }}>
                    Je mets les actions en place sur votre fiche Google et nous suivons l&apos;évolution de votre présence locale.
                  </p>
                  <p className="mb-6 text-white" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '40px', lineHeight: 1 }}>
                    500 <span className="text-[#fceb30]">€</span>
                    <span className="ml-2 text-sm font-normal text-white/50" style={{ fontFamily: inter.style.fontFamily }}>
                      / mois · 3 mois minimum
                    </span>
                  </p>
                  <Link
                    href="/offre#sprint"
                    className="mt-auto rounded-full bg-[#fceb30] py-3.5 text-center text-sm font-semibold text-[#264d8c] transition-[filter] hover:brightness-105"
                    style={{ fontFamily: inter.style.fontFamily }}
                  >
                    Découvrir l&apos;accompagnement
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            <p className="mt-8 text-center text-[#264d8c]/60" style={{ fontFamily: inter.style.fontFamily, fontSize: '15px' }}>
              Je travaille aussi avec des professionnels situés à{' '}
              <Link href="/consultant-seo-aix-en-provence" className="underline underline-offset-4">Aix-en-Provence</Link>,{' '}
              <Link href="/consultant-seo-marseille" className="underline underline-offset-4">Marseille</Link> et{' '}
              <Link href="/consultant-seo-toulon" className="underline underline-offset-4">Toulon</Link>.
            </p>
          </div>
        </section>

        <FAQ items={faqs} label="Questions fréquentes" heading="Travailler avec une consultante freelance" />

        <FinalCTA
          heading={<>Parlons de votre activité.</>}
          body={
            <p className="mx-auto mt-6 max-w-[50ch] text-base leading-relaxed text-white/65" style={{ fontFamily: inter.style.fontFamily }}>
              Un échange de 20 minutes pour comprendre votre zone, vos objectifs et voir si mes prestations répondent à votre besoin.
            </p>
          }
          microcopy="Appel gratuit · 20 minutes · Sans engagement"
        />
      </main>
    </>
  );
}
