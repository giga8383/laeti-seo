import ScrollReveal from './ScrollReveal';
import { inter } from '@/lib/fonts';

/* ══════════════════════════════════════════
   DIAGNOSTIC — étapes détaillées
══════════════════════════════════════════ */
const diagSteps = [
  {
    number: '01',
    title: 'Vous réservez',
    description:
      "Vous remplissez un formulaire simple : activité, zone géographique, URL de votre site, lien de votre fiche Google et vos objectifs. Je reviens vers vous sous 24 h pour confirmer la prise en charge.",
  },
  {
    number: '02',
    title: "J'analyse votre fiche Google Business Profile",
    description:
      "Catégories, description, photos, attributs, zone de desserte, mots-clés utilisés. Tout est passé en revue et comparé aux meilleures pratiques actuelles de référencement local.",
  },
  {
    number: '03',
    title: "J'analyse vos avis et signaux de confiance",
    description:
      "Quantité, fréquence, qualité de vos réponses, note globale. J'évalue ce que Google retient de votre réputation et ce que vos concurrents font mieux sur ce point précis.",
  },
  {
    number: '04',
    title: "J'analyse votre site web",
    description:
      "Je vérifie les signaux locaux de votre site. Cohérence des coordonnées, balises, maillage interne, page de contact, mentions de ville et de services. Tout ce qui aide ou freine Google à vous associer à votre zone.",
  },
  {
    number: '05',
    title: "J'analyse vos concurrents directs",
    description:
      "Qui vous devance dans votre zone ? Pourquoi ? Quels sont leurs points forts, leurs failles, et où se trouvent vos marges de progression les plus rapides à activer ?",
  },
  {
    number: '06',
    title: 'Je rédige votre rapport',
    description:
      "Un document clair, structuré, sans blabla. Les blocages identifiés, les corrections à apporter et les opportunités à saisir, classés par ordre de priorité et d'impact.",
  },
  {
    number: '07',
    title: 'Livraison sous 5 jours ouvrés',
    description:
      "Vous recevez votre diagnostic par email avec un plan d'action concret sur 30 jours. Pas de call obligatoire. Tout est dans le rapport. Vous savez quoi faire, dans quel ordre et pourquoi.",
  },
];

/* ══════════════════════════════════════════
   SPRINT — déroulé semaine par semaine
══════════════════════════════════════════ */
const sprintMonths = [
  {
    label: 'Mois 1',
    title: 'Comprendre & corriger',
    color: '#3b82f6',
    phases: [
      {
        period: 'Semaine 1',
        title: 'Diagnostic complet',
        description:
          "Point de départ du sprint. J'analyse votre fiche Google, vos avis, votre site et vos concurrents directs. Vous recevez le rapport complet avant la fin de la semaine.",
      },
      {
        period: 'Semaine 2',
        title: 'Optimisation de votre fiche Google',
        description:
          "Catégories, description réoptimisée, attributs, photos, zone de desserte. Tout est corrigé et mis à jour selon les standards actuels du référencement local.",
      },
      {
        period: 'Semaine 3',
        title: 'Cohérence locale & stratégie avis',
        description:
          "Je structure la cohérence complète de votre présence locale (NAP, services, messages, catégories) et je mets en place votre stratégie avis clients sur-mesure avec les modèles adaptés à votre activité.",
      },
      {
        period: 'Semaine 4',
        title: 'Appel bilan du mois 1',
        description:
          "On fait le point ensemble sur tout ce qui a été fait ce mois-ci, je vous explique les changements apportés, et vous posez vos questions. 30 min, sans jargon.",
      },
    ],
  },
  {
    label: 'Mois 2',
    title: 'Activer & maintenir',
    color: '#f59e0b',
    phases: [
      {
        period: 'Semaines 5 – 6',
        title: 'Activation des signaux',
        description:
          "Publication des 2 premiers Google Posts rédigés pour vous. Vérification des citations locales, travail sur les signaux de confiance supplémentaires.",
      },
      {
        period: 'Semaines 7 – 8',
        title: 'Rapport mensuel + appel de suivi',
        description:
          "Vous recevez votre premier rapport mensuel avec les actions menées, les résultats observés et l'évolution de votre positionnement. Un appel de 30 min pour faire le point et ajuster le cap si besoin.",
      },
    ],
  },
  {
    label: 'Mois 3',
    title: 'Suivre & consolider',
    color: '#10b981',
    phases: [
      {
        period: 'Semaines 9 – 10',
        title: 'Ajustements & nouveaux contenus',
        description:
          "2 nouveaux Google Posts publiés. Ajustements basés sur les données du mois 2. Monitoring des concurrents et détection des nouvelles opportunités locales à activer.",
      },
      {
        period: 'Semaines 11 – 12',
        title: 'Bilan des 3 mois',
        description:
          "Rapport final complet avec l'état des lieux avant/après, les actions menées, les résultats obtenus et les recommandations pour la suite. Appel de bilan inclus pour clôturer et décider de la suite ensemble si besoin.",
      },
    ],
  },
];

/* ══════════════════════════════════════════
   Sous-composants
══════════════════════════════════════════ */
function DiagStep({
  step,
  isLast,
  delay,
}: {
  step: { number: string; title: string; description: string };
  isLast: boolean;
  delay: number;
}) {
  return (
    <ScrollReveal delay={delay}>
      <div className="relative flex gap-5">
        <div className="flex flex-col items-center">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
            style={{
              border: '1px solid rgba(252,235,48,0.35)',
              background: 'rgba(252,235,48,0.10)',
            }}
          >
            <span className="font-mono text-xs font-bold" style={{ color: '#fceb30', fontFamily: 'monospace' }}>
              {step.number}
            </span>
          </div>
          {!isLast && (
            <div
              className="mt-2 w-px flex-1 min-h-[2rem]"
              style={{ background: 'linear-gradient(to bottom, rgba(252,235,48,0.20), transparent)' }}
            />
          )}
        </div>
        <div className="pb-8">
          <h4
            className="mb-1.5 font-semibold text-white"
            style={{ fontFamily: inter.style.fontFamily, fontSize: '15px' }}
          >
            {step.title}
          </h4>
          <p
            className="text-sm leading-relaxed text-white/55"
            style={{ fontFamily: inter.style.fontFamily, lineHeight: '22px' }}
          >
            {step.description}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

function SprintPhase({
  phase,
  accentColor,
  isLast,
  delay,
}: {
  phase: { period: string; title: string; description: string };
  accentColor: string;
  isLast: boolean;
  delay: number;
}) {
  return (
    <ScrollReveal delay={delay}>
      <div className="relative flex gap-4">
        <div className="flex flex-col items-center">
          <div
            className="mt-0.5 h-2 w-2 shrink-0 rounded-full"
            style={{ background: accentColor, opacity: 0.8 }}
          />
          {!isLast && (
            <div
              className="mt-2 w-px flex-1 min-h-[2rem]"
              style={{ background: `linear-gradient(to bottom, ${accentColor}33, transparent)` }}
            />
          )}
        </div>
        <div className="pb-6">
          <span
            className="mb-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold"
            style={{
              fontFamily: inter.style.fontFamily,
              background: `${accentColor}18`,
              color: accentColor,
              border: `1px solid ${accentColor}30`,
            }}
          >
            {phase.period}
          </span>
          <h5
            className="mb-1 font-semibold text-white/90"
            style={{ fontFamily: inter.style.fontFamily, fontSize: '14px' }}
          >
            {phase.title}
          </h5>
          <p
            className="text-sm text-white/50"
            style={{ fontFamily: inter.style.fontFamily, lineHeight: '22px' }}
          >
            {phase.description}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

/* ══════════════════════════════════════════
   Export principal
══════════════════════════════════════════ */
export default function Process() {
  return (
    <section className="relative bg-transparent">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">

        {/* ══════════════════════════════════════════
            BLOC 1 — DIAGNOSTIC VISIBILITÉ
        ══════════════════════════════════════════ */}
        <ScrollReveal>
          <div className="mb-4 flex items-center gap-3">
            <span
              className="inline-block rounded-full border border-white/15 bg-white/[0.07] px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/60"
              style={{ fontFamily: inter.style.fontFamily }}
            >
              Essentiel
            </span>
          </div>
          <h2
            className="mb-2 text-3xl font-bold text-white md:text-4xl"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            Diagnostic visibilité
          </h2>
          <p
            className="mb-14 text-sm text-white/35"
            style={{ fontFamily: inter.style.fontFamily }}
          >
            190 € · livraison sous 5 jours ouvrés
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-16">
          <div>
            {diagSteps.map((step, i) => (
              <DiagStep
                key={i}
                step={step}
                isLast={i === diagSteps.length - 1}
                delay={0.04 + i * 0.06}
              />
            ))}
          </div>

          {/* Récapitulatif visuel côté droit */}
          <ScrollReveal delay={0.10}>
            <div
              className="sticky top-28 hidden self-start rounded-[2rem] p-8 md:block"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
              }}
            >
              <p
                className="mb-6 text-xs font-semibold uppercase tracking-widest text-white/30"
                style={{ fontFamily: inter.style.fontFamily }}
              >
                Ce que vous recevez
              </p>
              <ul className="space-y-4">
                {[
                  'Un diagnostic clair de votre situation actuelle',
                  'Les blocages qui freinent votre visibilité locale',
                  'Une lecture de ce que vos concurrents font mieux',
                  "Un plan d'action priorisé sur 30 jours",
                  'Des recommandations classées par impact',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: '#fceb30', opacity: 0.7 }}
                    />
                    <span
                      className="text-sm text-white/60"
                      style={{ fontFamily: inter.style.fontFamily, lineHeight: '22px' }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div
                className="mt-8 rounded-xl p-4"
                style={{ background: 'rgba(252,235,48,0.06)', border: '1px solid rgba(252,235,48,0.15)' }}
              >
                <p
                  className="text-xs text-white/45"
                  style={{ fontFamily: inter.style.fontFamily, lineHeight: '20px' }}
                >
                  Pas de call obligatoire. Tout est dans le rapport. Lisible, actionnable, sans blabla.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ── Séparateur entre les deux offres ── */}
        <div className="my-20 h-px w-full" style={{ background: 'rgba(255,255,255,0.07)' }} />

        {/* ══════════════════════════════════════════
            BLOC 2 — SPRINT LOCAL 3 MOIS
        ══════════════════════════════════════════ */}
        <ScrollReveal>
          <div className="mb-4 flex items-center gap-3">
            <span
              className="inline-block rounded-full bg-[#fceb30] px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#264d8c]"
              style={{ fontFamily: inter.style.fontFamily }}
            >
              Tarif de lancement
            </span>
          </div>
          <h2
            className="mb-2 text-3xl font-bold text-white md:text-4xl"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            Sprint local 3 mois
          </h2>
          <p
            className="mb-14 text-sm text-white/35"
            style={{ fontFamily: inter.style.fontFamily }}
          >
            790 € · diagnostic inclus
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {sprintMonths.map((month, mi) => (
            <ScrollReveal key={mi} delay={0.06 + mi * 0.08}>
              <div
                className="h-full rounded-[2rem] p-7"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: `1px solid ${month.color}22`,
                  boxShadow: `inset 0 1px 0 rgba(255,255,255,0.05), 0 0 40px -16px ${month.color}20`,
                }}
              >
                {/* En-tête du mois */}
                <div className="mb-6 flex items-center gap-3">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                    style={{
                      background: `${month.color}18`,
                      color: month.color,
                      border: `1px solid ${month.color}35`,
                      fontFamily: 'monospace',
                    }}
                  >
                    {mi + 1}
                  </span>
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-widest"
                      style={{ fontFamily: inter.style.fontFamily, color: month.color }}
                    >
                      {month.label}
                    </p>
                    <p
                      className="text-sm font-semibold text-white/75"
                      style={{ fontFamily: inter.style.fontFamily }}
                    >
                      {month.title}
                    </p>
                  </div>
                </div>

                {/* Phases de la semaine */}
                <div>
                  {month.phases.map((phase, pi) => (
                    <SprintPhase
                      key={pi}
                      phase={phase}
                      accentColor={month.color}
                      isLast={pi === month.phases.length - 1}
                      delay={0.06 + mi * 0.08 + pi * 0.05}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
