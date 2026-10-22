import MagneticButton from './MagneticButton';
import ScrollReveal from './ScrollReveal';
import { inter } from '@/lib/fonts';

const points = [
  {
    title: "L'audit de votre fiche Google Business Profile.",
    text: "Captures avant/après, catégories mal choisies, champs vides, incohérences avec votre site, avis et réponses. Chaque point est noté et priorisé.",
  },
  {
    title: "L'audit technique et éditorial de votre site.",
    text: "Indexation, balises, structure des pages, vitesse, mobile, données structurées. Vous savez précisément quelles pages freinent et pourquoi.",
  },
  {
    title: 'La cartographie de vos concurrents locaux.',
    text: "Les 3 à 5 entreprises qui vous devancent sur vos requêtes, ce qu'elles font mieux, et ce qui est réellement copiable dans votre contexte.",
  },
  {
    title: 'Le test de visibilité IA.',
    text: "Je pose 5 à 10 requêtes de vos clients (métier + ville) à ChatGPT, Perplexity et aux aperçus IA de Google. Vous voyez si vous êtes cité, qui l'est à votre place et sur quelles sources les IA s'appuient. Les actions pour devenir citable sont intégrées au plan d'action. Aucune apparition n'est garantie.",
  },
  {
    title: "Le plan d'action priorisé.",
    text: "Une liste d'actions classées par impact et par effort. Pour chacune, vous savez quoi faire, qui le fait et combien de temps ça prend. Pas de liste de 80 recommandations, seulement celles qui comptent.",
  },
  {
    title: 'Le suivi de départ.',
    text: "Les indicateurs à relever aujourd'hui (positions, appels, demandes d'itinéraire, formulaires) pour pouvoir mesurer le progrès dans trois mois. Sans point de départ, aucune progression n'est démontrable.",
  },
];

const label = {
  fontFamily: 'Satoshi, "Satoshi Fallback", ui-sans-serif, system-ui, -apple-system, sans-serif',
  fontWeight: 700,
  fontSize: '22px',
  lineHeight: '28px',
  textTransform: 'uppercase',
  color: '#fceb30',
  textShadow: '0 0 12px rgba(252,235,48,0.7), 0 0 28px rgba(252,235,48,0.4), 0 0 56px rgba(252,235,48,0.2)',
} as const;

export default function DiagnosticSection() {
  return (
    <section id="offres" className="relative bg-transparent" style={{ scrollMarginTop: '80px' }}>
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          {/* Colonne texte */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <ScrollReveal>
              <p className="mb-4" style={label}>L&apos;offre principale</p>
              <h2
                className="text-white"
                style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(30px, 4vw, 44px)', lineHeight: '1.1' }}
              >
                Le diagnostic visibilité à <span className="text-[#fceb30]">790 €</span>
              </h2>
              <p className="mt-5 max-w-[52ch] text-white/70" style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '26px' }}>
                Un état des lieux complet de votre visibilité locale, livré en 5 jours ouvrés, avec une restitution de 45 minutes pour décider quoi faire ensuite.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mt-8 rounded-[1.25rem] border border-white/10 bg-white/[0.06] p-6">
                <p className="text-white/75" style={{ fontFamily: inter.style.fontFamily, fontSize: '15px', lineHeight: '24px' }}>
                  Livraison sous <strong className="text-white">5 jours ouvrés</strong> après réception des accès.{' '}
                  <strong className="text-white">Restitution de 45 minutes</strong> en visio, enregistrée si vous le souhaitez, pour parcourir le document ensemble et répondre à vos questions. Le document reste votre propriété et vous pouvez le faire appliquer par votre prestataire actuel.
                </p>
              </div>

              <div className="mt-8">
                <MagneticButton
                  as="a"
                  href="/offre#diagnostic"
                  className="inline-flex rounded-full bg-[#fceb30] px-8 py-4 text-[#264d8c] transition-[filter] duration-300 hover:brightness-105 active:scale-[0.98]"
                  style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '24px' }}
                  strength={0.3}
                >
                  Demander le diagnostic à 790 €
                </MagneticButton>
              </div>

              <p className="mt-5 max-w-[52ch] text-white/55" style={{ fontFamily: inter.style.fontFamily, fontSize: '14px', lineHeight: '22px' }}>
                Le diagnostic ne garantit aucune position dans Google. Il garantit une chose. À la fin, vous saurez exactement où vous en êtes et ce qu&apos;il faut faire.
              </p>
            </ScrollReveal>
          </div>

          {/* Colonne livrable */}
          <div>
            <ScrollReveal>
              <p className="mb-6 text-white/60" style={{ fontFamily: inter.style.fontFamily, fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                Ce que contient le livrable
              </p>
            </ScrollReveal>
            <ol className="space-y-4">
              {points.map((p, i) => (
                <ScrollReveal key={p.title} delay={0.06 + i * 0.07}>
                  <li className="grid grid-cols-[44px_1fr] gap-4 rounded-[1.25rem] border border-white/10 bg-white/[0.05] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fceb30] text-[#264d8c]"
                      style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '16px' }}
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <div style={{ fontFamily: inter.style.fontFamily }}>
                      <strong className="mb-1 block text-[17px] font-semibold text-white">{p.title}</strong>
                      <span className="block text-[15px] leading-[24px] text-white/65">{p.text}</span>
                    </div>
                  </li>
                </ScrollReveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
