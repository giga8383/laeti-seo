import MagneticButton from './MagneticButton';
import ScrollReveal from './ScrollReveal';
import { inter } from '@/lib/fonts';

const months = [
  {
    title: 'Mois 1, les fondations.',
    text: "Reprise complète de la fiche Google Business Profile, correction des pages qui bloquent l'indexation, mise en place du suivi des appels et des demandes. On assainit avant d'accélérer.",
  },
  {
    title: 'Mois 2, les pages locales.',
    text: "Rédaction et mise en ligne des pages ville/métier prioritaires, avec vos réalisations et vos mots de vos clients. Optimisation des pages existantes qui ont du potentiel.",
  },
  {
    title: 'Mois 3, contenu et autorité locale.',
    text: "Articles et pages qui répondent aux vraies questions de vos clients, structuration pour les aperçus IA, inscriptions et citations locales cohérentes (annuaires métier, presse locale, partenaires).",
  },
];

export default function SprintSection() {
  return (
    <section id="sprint" className="relative bg-[#f2f5fb]" style={{ scrollMarginTop: '80px' }}>
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <ScrollReveal>
          <div className="mb-12 max-w-3xl">
            <p
              className="mb-4 uppercase"
              style={{
                fontFamily: 'Satoshi, "Satoshi Fallback", ui-sans-serif, system-ui, -apple-system, sans-serif',
                fontWeight: 700,
                fontSize: '22px',
                lineHeight: '28px',
                color: '#2355b6',
                textShadow: '0 0 12px rgba(35,85,182,0.6), 0 0 28px rgba(35,85,182,0.35), 0 0 56px rgba(35,85,182,0.15)',
              }}
            >
              L&apos;accompagnement
            </p>
            <h2
              className="text-[#264d8c]"
              style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(30px, 4vw, 44px)', lineHeight: '1.1' }}
            >
              Le Sprint local à 500 €/mois, 3 mois minimum
            </h2>
            <p className="mt-5 text-[#264d8c]/70" style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '26px' }}>
              Pour appliquer le plan d&apos;action et tenir la cadence. Trois mois, parce qu&apos;en dessous, on ne peut rien observer de sérieux.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {months.map((m, i) => (
            <ScrollReveal key={m.title} delay={0.05 + i * 0.08} className="h-full">
              <div className="h-full rounded-[1.75rem] border border-[#264d8c]/10 bg-white p-8">
                <h3 className="mb-3 text-[#264d8c]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '21px', lineHeight: '1.25' }}>
                  {m.title}
                </h3>
                <p className="text-[#264d8c]/70" style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '26px' }}>
                  {m.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-6 rounded-[1.75rem] border border-[#264d8c]/10 bg-white p-8">
            <p className="text-[#264d8c]" style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '26px' }}>
              <strong>Chaque mois, sans exception,</strong> vous avez un point de 30 minutes, un compte rendu écrit avec ce qui a été fait et ce qui est prévu, et le relevé des indicateurs. Vous savez ce que vous payez.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="mt-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <p className="max-w-[60ch] text-[#264d8c]/70" style={{ fontFamily: inter.style.fontFamily, fontSize: '15px', lineHeight: '24px' }}>
              <strong className="text-[#264d8c]">Conditions.</strong> 500 € par mois, engagement de 3 mois minimum, sans reconduction forcée au-delà. Le périmètre est fixé par écrit au démarrage, après le diagnostic.
            </p>
            <MagneticButton
              as="a"
              href="https://calendly.com/laetitia_laghezza_seo_local/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full bg-[#264d8c] px-8 py-4 text-white transition-[filter] duration-300 hover:brightness-110 active:scale-[0.98]"
              style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '24px' }}
              strength={0.3}
            >
              Discuter du Sprint local
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
