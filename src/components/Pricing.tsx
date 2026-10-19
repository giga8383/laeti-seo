import { CheckCircle, ArrowRight } from '@phosphor-icons/react/dist/ssr';
import MagneticButton from './MagneticButton';
import ScrollReveal from './ScrollReveal';
import { inter } from '@/lib/fonts';

const card1Includes = [
  'Audit de votre fiche Google Business Profile (Google My Business)',
  'Analyse de la visibilité d’une page locale de votre site internet',
  'Analyse de votre présence sur les réseaux sociaux, avec des conseils à appliquer',
  'Plan d’action avec les corrections à mettre en place, classées par priorité',
  'Rapport écrit et appel de restitution de 45 minutes',
];

const card2Includes = [
  'Diagnostic initial et optimisation de votre fiche Google',
  'Stratégie pour recueillir des avis clients',
  '2 publications Google par mois',
  'Rapport mensuel et appel de suivi',
];

export default function Pricing() {
  return (
    <section
      id="tarif"
      className="relative isolate bg-white"
      style={{ backgroundColor: '#ffffff', scrollMarginTop: '80px' }}
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        {/* header */}
        <ScrollReveal>
          <div className="mb-14 text-center">
            <p
              className="mb-4"
              style={{
                fontFamily: 'Satoshi, "Satoshi Fallback", "League Spartan", "League Spartan Fallback", ui-sans-serif, system-ui, -apple-system, sans-serif',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '22px',
                lineHeight: '28px',
                color: '#2355b6',
                textTransform: 'uppercase',
                textShadow: '0 0 12px rgba(35,85,182,0.6), 0 0 28px rgba(35,85,182,0.35), 0 0 56px rgba(35,85,182,0.15)',
              }}
            >
              Les accompagnements
            </p>
            <h2
              className="mx-auto max-w-[22ch] text-[#264d8c]"
              style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(30px, 4vw, 44px)', lineHeight: '1.1' }}
            >
              Comprendre ce qui bloque. Puis passer à l&apos;action.
            </h2>
            <p
              className="mx-auto mt-5 max-w-[60ch] text-[#264d8c]/70"
              style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '26px' }}
            >
              Vous souhaitez un avis sur votre situation ou un accompagnement pour mettre les corrections en place ? Choisissez le point de départ qui vous convient.
            </p>
          </div>
        </ScrollReveal>

        {/* cards grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch">

          {/* ── Carte 1 : Diagnostic ── */}
          <ScrollReveal delay={0.05} className="h-full">
            <div
              className="flex h-full flex-col rounded-[2rem] border border-[#3262ab]/12 bg-[#264d8c] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_48px_-12px_rgba(38,77,140,0.28)] md:p-10"
            >
              <div className="mb-6">
                <span
                  className="inline-block rounded-full border border-white/15 bg-white/[0.08] px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/70"
                  style={{ fontFamily: inter.style.fontFamily }}
                >
                  Google, site et réseaux sociaux
                </span>
              </div>

              <h3
                className="mb-3 text-2xl font-bold text-white"
                style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700 }}
              >
                Diagnostic visibilité
              </h3>
              <p
                className="mb-8 text-sm leading-relaxed text-white/65"
                style={{ fontFamily: inter.style.fontFamily }}
              >
                Vous savez ce qui freine votre visibilité, quoi améliorer et dans quel ordre agir.
              </p>

              <div className="mb-8 space-y-3 border-t border-white/10 pt-6">
                {card1Includes.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={15} weight="fill" className="mt-0.5 shrink-0 text-[#fceb30]" />
                    <span className="text-sm text-white/75" style={{ fontFamily: inter.style.fontFamily }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <div className="mb-2 flex items-end gap-1">
                  <span className="text-5xl font-bold tracking-tighter text-white">790</span>
                  <span className="mb-1.5 text-2xl font-bold text-[#fceb30]">€</span>
                </div>
                <p
                  className="mb-6 min-h-[44px] text-sm leading-relaxed text-white/50"
                  style={{ fontFamily: inter.style.fontFamily }}
                >
                  Paiement unique · Rapport sous 5 jours ouvrés après réception des éléments nécessaires.
                </p>

                <MagneticButton
                  as="a"
                  href="/offre#diagnostic"
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.08] py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/40 hover:bg-white/[0.14] active:scale-[0.98]"
                  strength={0.2}
                >
                  Découvrir le diagnostic à 790 €
                  <ArrowRight size={15} weight="bold" />
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>

          {/* ── Carte 2 : Sprint local ── */}
          <ScrollReveal delay={0.15} className="h-full">
            <div
              className="relative flex h-full flex-col rounded-[2rem] p-8 shadow-[0_24px_64px_-16px_rgba(252,235,48,0.22),0_0_0_1.5px_rgba(252,235,48,0.45)] md:p-10"
              style={{
                background: 'linear-gradient(145deg, #2c58b0 0%, #264d8c 60%, #1d3e77 100%)',
              }}
            >
              <div className="mb-6 flex items-center justify-between">
                <span
                  className="inline-block rounded-full bg-[#fceb30] px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#264d8c]"
                  style={{ fontFamily: inter.style.fontFamily }}
                >
                  Pour avancer avec moi
                </span>
                <span className="text-xs font-medium text-[#fceb30]/70" style={{ fontFamily: inter.style.fontFamily }}>
                  3 mois minimum
                </span>
              </div>

              <h3
                className="mb-3 text-2xl font-bold text-white"
                style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700 }}
              >
                Sprint local 3 mois
              </h3>
              <p
                className="mb-8 text-sm leading-relaxed text-white/70"
                style={{ fontFamily: inter.style.fontFamily }}
              >
                Je mets les actions en place sur votre fiche Google et nous suivons l&apos;évolution de votre présence locale.
              </p>

              <div className="mb-8 space-y-3 border-t border-white/10 pt-6">
                {card2Includes.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={15} weight="fill" className="mt-0.5 shrink-0 text-[#fceb30]" />
                    <span className="text-sm text-white/80" style={{ fontFamily: inter.style.fontFamily }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <div className="mb-2 flex items-end gap-1">
                  <span className="text-5xl font-bold tracking-tighter text-white">500</span>
                  <span className="mb-1.5 text-2xl font-bold text-[#fceb30]">€</span>
                  <span className="mb-1.5 ml-1 text-sm text-white/45" style={{ fontFamily: inter.style.fontFamily }}>
                    / mois
                  </span>
                </div>
                <p
                  className="mb-6 min-h-[44px] text-sm leading-relaxed text-white/50"
                  style={{ fontFamily: inter.style.fontFamily }}
                >
                  3 mois minimum · 1 500 € au total.<br />
                  Le diagnostic de départ est inclus.
                </p>

                <MagneticButton
                  as="a"
                  href="/offre#sprint"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#fceb30] py-3.5 text-sm font-semibold text-[#264d8c] transition-[filter] duration-300 hover:brightness-105 active:scale-[0.98]"
                  strength={0.2}
                >
                  Découvrir l&apos;accompagnement
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* ── Bandeau hésitation ── */}
        <ScrollReveal delay={0.2}>
          <div className="mt-6 flex flex-col items-start justify-between gap-5 rounded-[1.5rem] border border-[#264d8c]/10 bg-[#f2f5fb] px-7 py-6 md:flex-row md:items-center">
            <div style={{ fontFamily: inter.style.fontFamily }}>
              <strong className="mb-1 block text-[17px] font-semibold text-[#264d8c]">
                Vous hésitez sur le point de départ ?
              </strong>
              <p className="max-w-[60ch] text-[15px] leading-[24px] text-[#264d8c]/65">
                Un appel gratuit de 20 minutes pour parler de votre activité et voir ce qui vous serait utile. Vous décidez ensuite si vous souhaitez aller plus loin.
              </p>
            </div>
            <MagneticButton
              as="a"
              href="https://calendly.com/laetitia_laghezza_seo_local/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full bg-[#264d8c] px-7 py-3.5 text-sm font-semibold text-white transition-[filter] duration-300 hover:brightness-110 active:scale-[0.98]"
              strength={0.2}
            >
              Faire le point sur ma visibilité
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
