import { CheckCircle, ArrowRight } from '@phosphor-icons/react/dist/ssr';
import MagneticButton from './MagneticButton';
import ScrollReveal from './ScrollReveal';
import { inter } from '@/lib/fonts';

const card1Includes = [
  'Analyse fiche Google Business Profile',
  'Avis clients & signaux de confiance',
  'Positionnement local & concurrents',
  'Rapport clair avec corrections priorisées',
];

const card2Includes = [
  'Diagnostic complet inclus (point de départ)',
  'Optimisation complète de votre fiche',
  'Stratégie avis clients',
  '2 Google Posts par mois',
  'Rapport mensuel + appel de suivi',
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
          <p
            className="mb-14 text-center"
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
            Tarif
          </p>
        </ScrollReveal>

        {/* cards grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch">

          {/* ── Carte 1 : Diagnostic ── */}
          <ScrollReveal delay={0.05} className="h-full">
            <div
              className="flex h-full flex-col rounded-[2rem] border border-[#3262ab]/12 bg-[#264d8c] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_48px_-12px_rgba(38,77,140,0.28)] md:p-10"
            >
              {/* badge */}
              <div className="mb-6">
                <span
                  className="inline-block rounded-full border border-white/15 bg-white/[0.08] px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/70"
                  style={{ fontFamily: inter.style.fontFamily }}
                >
                  Essentiel
                </span>
              </div>

              {/* title + desc */}
              <h2
                className="mb-3 text-xl font-bold text-white"
                style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700 }}
              >
                Diagnostic visibilité
              </h2>
              <p
                className="mb-6 text-sm leading-relaxed text-white/60"
                style={{ fontFamily: inter.style.fontFamily }}
              >
                Vous ne savez pas pourquoi vous n&apos;apparaissez pas sur Google.<br />
                Ou vous suspectez que votre fiche n&apos;est pas optimale, mais vous n&apos;avez jamais pris le temps de vérifier.
              </p>
              <p
                className="mb-8 text-sm leading-relaxed text-white/60"
                style={{ fontFamily: inter.style.fontFamily }}
              >
                Le diagnostic répond à cette question en une semaine.<br />
                J&apos;analyse votre fiche Google Business Profile, vos avis clients, votre positionnement local et je vous remets un rapport clair avec les points à corriger, dans l&apos;ordre.
              </p>

              {/* includes */}
              <div className="mb-8 space-y-3 border-t border-white/10 pt-6">
                {card1Includes.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle
                      size={15}
                      weight="fill"
                      className="mt-0.5 shrink-0 text-[#fceb30]"
                    />
                    <span
                      className="text-sm text-white/75"
                      style={{ fontFamily: inter.style.fontFamily }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* spacer push price + cta to bottom */}
              <div className="mt-auto">
                <div className="mb-6 flex items-end gap-1">
                  <span className="text-5xl font-bold tracking-tighter text-white">
                    190
                  </span>
                  <span className="mb-1.5 text-2xl font-bold text-[#fceb30]">€</span>
                  <span
                    className="mb-1.5 ml-1 text-sm text-white/45"
                    style={{ fontFamily: inter.style.fontFamily }}
                  >
                    livraison sous 5 jours ouvrés
                  </span>
                </div>

                <MagneticButton
                  as="a"
                  href="/offre"
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.08] py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/40 hover:bg-white/[0.14] active:scale-[0.98]"
                  strength={0.2}
                >
                  Demander mon diagnostic
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
                background:
                  'linear-gradient(145deg, #2c58b0 0%, #264d8c 60%, #1d3e77 100%)',
              }}
            >
              {/* recommended badge */}
              <div className="mb-6 flex items-center justify-between">
                <span
                  className="inline-block rounded-full bg-[#fceb30] px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#264d8c]"
                  style={{ fontFamily: inter.style.fontFamily }}
                >
                  Tarif de lancement
                </span>
                <span
                  className="text-xs font-medium text-[#fceb30]/70"
                  style={{ fontFamily: inter.style.fontFamily }}
                >
                  Le plus complet
                </span>
              </div>

              {/* title + desc */}
              <h2
                className="mb-3 text-xl font-bold text-white"
                style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700 }}
              >
                Sprint local 3 mois
              </h2>
              <p
                className="mb-4 text-sm leading-relaxed text-white/65"
                style={{ fontFamily: inter.style.fontFamily }}
              >
                Le diagnostic est inclus. C&apos;est le point de départ.
              </p>
              <p
                className="mb-8 text-sm leading-relaxed text-white/65"
                style={{ fontFamily: inter.style.fontFamily }}
              >
                Ensuite on corrige, on active et on suit : optimisation
                complète de votre fiche, stratégie avis clients, deux Google
                Posts par mois, rapport mensuel et un appel de suivi.<br />
                Trois mois pour que Google sache enfin qui vous êtes et ce que vous faites.
              </p>

              {/* includes */}
              <div className="mb-8 space-y-3 border-t border-white/10 pt-6">
                {card2Includes.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle
                      size={15}
                      weight="fill"
                      className="mt-0.5 shrink-0 text-[#fceb30]"
                    />
                    <span
                      className="text-sm text-white/80"
                      style={{ fontFamily: inter.style.fontFamily }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* price + cta */}
              <div className="mt-auto">
                <div className="mb-6 flex items-end gap-1">
                  <span className="text-5xl font-bold tracking-tighter text-white">
                    790
                  </span>
                  <span className="mb-1.5 text-2xl font-bold text-[#fceb30]">€</span>
                  <span
                    className="mb-1.5 ml-1 text-sm text-white/45"
                    style={{ fontFamily: inter.style.fontFamily }}
                  >
                    / 3 mois
                  </span>
                </div>

                <MagneticButton
                  as="a"
                  href="/offre"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#fceb30] py-3.5 text-sm font-semibold text-[#264d8c] transition-[filter] duration-300 hover:brightness-105 active:scale-[0.98]"
                  strength={0.2}
                >
                  Démarrer mon Sprint local
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
