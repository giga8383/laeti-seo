import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import OffreForWho from '@/components/OffreForWho';
import Offer from '@/components/Offer';
import OffrePricing from '@/components/OffrePricing';
import OffreFAQ from '@/components/OffreFAQ';
import FinalCTA from '@/components/FinalCTA';
import ScrollReveal from '@/components/ScrollReveal';
import OffreHeroIllustration from '@/components/OffreHeroIllustration';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mes offres, Diagnostic visibilité & Sprint local 3 mois',
  description:
    "Deux offres SEO local pour les professionnels de l'habitat : un diagnostic de visibilité à 190 € livré sous 5 jours, ou un sprint d'accompagnement de 3 mois à 790 €. Découvrez le détail, le déroulé et les tarifs.",
  alternates: {
    canonical: 'https://laeti-seo.fr/offre',
  },
  openGraph: {
    url: 'https://laeti-seo.fr/offre',
  },
};

export default function OffrePage() {
  return (
    <>
      <Navbar />
      <main>

        {/* -- En-tête de page -- */}
        <section className="relative bg-transparent" style={{ paddingTop: '120px' }}>
          <div className="mx-auto max-w-7xl px-6 pb-0 pt-12 md:pt-20">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

              {/* Colonne gauche : texte */}
              <div>
                <ScrollReveal delay={0.08}>
                  <h1
                    className="mb-5 max-w-[18ch] text-white"
                    style={{
                      fontFamily: 'Satoshi, "Satoshi Fallback", ui-sans-serif, system-ui, -apple-system, sans-serif',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: 'clamp(42px, 6vw, 72px)',
                      lineHeight: '1.08',
                      textTransform: 'uppercase',
                    }}
                  >
                    Comprendre ce qui bloque.<br />
                    <span style={{ color: '#fceb30', textShadow: '0 0 18px rgba(252,235,48,0.55), 0 0 48px rgba(252,235,48,0.25)' }}>Puis corriger.</span>
                  </h1>
                </ScrollReveal>
                <ScrollReveal delay={0.14}>
                  <p
                    className="max-w-[50ch] text-white/60"
                    style={{
                      fontFamily: 'Inter, "Inter Fallback"',
                      fontWeight: 400,
                      fontSize: '17px',
                      lineHeight: '28px',
                    }}
                  >
                    Si vous ne savez pas pourquoi vous n&apos;apparaissez pas assez
                    sur Google dans votre zone, commencez par le diagnostic.
                    Si vous voulez qu&apos;on corrige et qu&apos;on avance ensemble,
                    le sprint est fait pour ça.
                  </p>
                </ScrollReveal>
              </div>

              {/* Colonne droite : illustration */}
              <ScrollReveal delay={0.22}>
                <OffreHeroIllustration />
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* -- Séparateur visuel -- */}
        <div className="mx-auto max-w-7xl px-6 pt-16">
          <div className="h-px w-full" style={{ background: 'rgba(255,255,255,0.07)' }} />
        </div>

        {/* -- Pour qui / Pas pour qui -- */}
        <OffreForWho />

        {/* -- Séparateur visuel -- */}
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px w-full" style={{ background: 'rgba(255,255,255,0.07)' }} />
        </div>

        {/* -- Détail des deux offres -- */}
        <Offer />

        {/* -- Séparateur visuel -- */}
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px w-full" style={{ background: 'rgba(255,255,255,0.07)' }} />
        </div>

        {/* -- Tarifs -- */}
        <OffrePricing />

        {/* -- Séparateur visuel -- */}
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px w-full" style={{ background: 'rgba(255,255,255,0.07)' }} />
        </div>

        {/* -- FAQ offres -- */}
        <OffreFAQ />

        {/* -- Lien vers le blog -- */}
        <div className="mx-auto max-w-7xl px-6 pb-10 text-center">
          <p className="text-sm text-white/35" style={{ fontFamily: 'Inter, "Inter Fallback"' }}>
            Vous voulez comprendre le sujet avant de vous décider ?{' '}
            <Link href="/blog" className="text-white/55 underline underline-offset-4 transition-colors hover:text-white/80">
              Lisez les articles du blog
            </Link>
          </p>
        </div>

        {/* -- CTA final -- */}
        <FinalCTA
          heading={<>Vous avez les réponses.<br /><span style={{ color: '#fceb30', textShadow: '0 0 18px rgba(252,235,48,0.55), 0 0 48px rgba(252,235,48,0.25)' }}>Il reste une décision.</span></>}
          body={
            <>
              <p className="mx-auto mt-6 max-w-[50ch] text-base leading-relaxed text-white/65" style={{ fontFamily: 'Inter, "Inter Fallback"' }}>
                Le diagnostic est là si vous voulez comprendre avant d&apos;agir.<br />
                Le sprint est là si vous voulez qu&apos;on s&apos;en charge ensemble.
              </p>
              <p className="mx-auto mt-3 max-w-[50ch] text-base leading-relaxed text-white/65" style={{ fontFamily: 'Inter, "Inter Fallback"' }}>
                Dans les deux cas, pas de rapport creux, pas de promesses floues
                sur les délais. Juste un travail honnête sur ce qui bloque
                vraiment votre visibilité locale.
              </p>
            </>
          }
          cta="Réserver mon diagnostic · 190 €"
        />

      </main>
    </>
  );
}

