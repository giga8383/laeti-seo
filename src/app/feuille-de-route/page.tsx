import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Process from '@/components/Process';
import ScrollReveal from '@/components/ScrollReveal';
import { inter } from '@/lib/fonts';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';

export const metadata: Metadata = {
  title: 'Feuille de route, Comment se déroule le diagnostic et le sprint SEO local',
  description:
    "Découvrez étape par étape le déroulé du diagnostic de visibilité locale et du sprint SEO local 3 mois : ce qui se passe, dans quel ordre, et ce que vous recevez à chaque étape.",
  alternates: {
    canonical: 'https://laeti-seo.fr/feuille-de-route',
  },
  openGraph: {
    url: 'https://laeti-seo.fr/feuille-de-route',
  },
};

export default function FeuilleDeRoutePage() {
  return (
    <>
      <Navbar />
      <main>

        {/* -- En-tête -- */}
        <section className="relative bg-transparent" style={{ paddingTop: '120px' }}>
          <div className="mx-auto max-w-7xl px-6 pb-0 pt-12 md:pt-20">
            <ScrollReveal>
              <p
                className="mb-4 uppercase tracking-widest"
                style={{
                  fontFamily: inter.style.fontFamily,
                  fontWeight: 600,
                  fontSize: '15px',
                  lineHeight: '22px',
                  color: '#fceb30',
                  textShadow: '0 0 12px rgba(252,235,48,0.7), 0 0 28px rgba(252,235,48,0.4)',
                }}
              >
                Feuille de route
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.07}>
              <h1
                className="mb-5 text-white"
                style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(36px, 5vw, 64px)',
                  lineHeight: '1.08',
                  textTransform: 'uppercase',
                }}
              >
                Ce qui se passe,<br />
                <span style={{ color: '#fceb30', textShadow: '0 0 18px rgba(252,235,48,0.55), 0 0 48px rgba(252,235,48,0.25)' }}>
                  étape par étape.
                </span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.13}>
              <p
                className="max-w-[55ch] text-white/55"
                style={{
                  fontFamily: 'Inter, "Inter Fallback"',
                  fontWeight: 400,
                  fontSize: '17px',
                  lineHeight: '28px',
                }}
              >
                Pas de surprise, pas de flou. Voici exactement comment se déroule
                le diagnostic et le sprint SEO local, de votre réservation jusqu&apos;à
                la livraison.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* -- Séparateur -- */}
        <div className="mx-auto max-w-7xl px-6 pt-14 pb-2">
          <div className="h-px w-full" style={{ background: 'rgba(255,255,255,0.07)' }} />
        </div>

        {/* -- Déroulé -- */}
        <Process />

        {/* -- Séparateur -- */}
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px w-full" style={{ background: 'rgba(255,255,255,0.07)' }} />
        </div>

        {/* -- CTA bas de page -- */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-7xl px-6 py-20 text-center">
            <ScrollReveal>
              <p
                className="mb-3 text-3xl font-bold text-white md:text-4xl"
                style={{ fontFamily: 'Satoshi, sans-serif' }}
              >
                Vous savez à quoi vous en tenir.
              </p>
              <p
                className="mx-auto mb-8 max-w-[48ch] text-white/50"
                style={{
                  fontFamily: 'Inter, "Inter Fallback"',
                  fontSize: '16px',
                  lineHeight: '26px',
                }}
              >
                Le diagnostic est là si vous voulez comprendre avant d&apos;agir.<br />
                Le sprint est là si vous voulez qu&apos;on s&apos;en charge ensemble.
              </p>
              <a
                href="/offre"
                className="inline-flex items-center gap-2 rounded-full bg-[#fceb30] px-7 py-3.5 font-bold text-[#264d8c] transition-all duration-300 hover:brightness-105 active:scale-[0.98]"
                style={{ fontFamily: inter.style.fontFamily, fontSize: '14px' }}
              >
                Voir les offres
                <ArrowRight size={15} weight="bold" />
              </a>
            </ScrollReveal>
          </div>
        </section>

      </main>
    </>
  );
}

