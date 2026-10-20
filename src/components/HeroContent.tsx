'use client';

import Image from 'next/image';
import MagneticButton from './MagneticButton';
import { inter } from '@/lib/fonts';

export default function HeroContent() {
  return (
    <div className="flex flex-col items-start gap-8">

      {/* Avatar chip */}
      <div
        className="flex items-center gap-3 rounded-full px-4 py-2.5 lg:hidden"
        style={{
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.15)',
          backdropFilter: 'blur(10px)',
          width: 'fit-content',
        }}
      >
        <div
          className="relative overflow-hidden rounded-full shrink-0"
          style={{
            width: '52px',
            height: '52px',
            boxShadow: '0 0 0 2px #fceb30, 0 0 10px 1px rgba(252,235,48,0.35)',
          }}
        >
          <Image
            src="/laeti-1.webp"
            alt="Laeti"
            fill
            className="object-cover object-top"
            sizes="52px"
          />
        </div>
        <div>
          <p style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '15px', lineHeight: '20px', color: '#ffffff' }}>
            Laetitia Laghezza
          </p>
          <p style={{ fontFamily: inter.style.fontFamily, fontWeight: 400, fontSize: '12px', lineHeight: '17px', color: 'rgba(255,255,255,0.55)' }}>
            Consultante SEO local
          </p>
        </div>
      </div>

      {/* H1 */}
      <h1
        className="uppercase text-white"
        style={{
          fontFamily: 'Satoshi, "Satoshi Fallback", ui-sans-serif, system-ui, -apple-system, sans-serif',
          fontWeight: 700,
          fontSize: 'clamp(30px, 5vw, 50px)',
          lineHeight: '1.1',
        }}
      >
        <span style={{ color: '#fceb30', textShadow: '0 0 18px rgba(252,235,48,0.55), 0 0 48px rgba(252,235,48,0.25)' }}>Consultant SEO local</span>{' '}
        pour les artisans et les entreprises de l&apos;habitat
      </h1>

      {/* Sous-titre */}
      <p
        className="max-w-[58ch] text-white/75"
        style={{ fontFamily: 'Inter, "Inter Fallback"', fontStyle: 'normal', fontWeight: 400, fontSize: '16px', lineHeight: '26px' }}
      >
        Je m&apos;appelle Laetitia Laghezza. J&apos;aide les décorateurs, architectes d&apos;intérieur, cuisinistes, menuisiers et entreprises de rénovation à sortir de l&apos;invisibilité sur Google, dans leur ville. 12 ans de métier, une méthode, un livrable précis.
      </p>

      {/* Boutons */}
      <div className="flex flex-wrap items-center gap-4">
        <MagneticButton
          as="a"
          href="https://calendly.com/laetitia_laghezza_seo_local/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 rounded-full bg-[#fceb30] px-7 py-3.5 text-[#3262ab] active:scale-[0.98]"
          style={{
            fontFamily: 'Inter, "Inter Fallback"',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
            border: '2px solid rgba(252,235,48,0.4)',
            outline: '3px solid rgba(252,235,48,0.15)',
            outlineOffset: '2px',
            boxShadow: '0 0 20px -4px rgba(252,235,48,0.5), 0 0 48px -8px rgba(252,235,48,0.25)',
          }}
          strength={0.3}
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3262ab] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3262ab]" />
          </span>
          Réserver un appel gratuit de 20 min
        </MagneticButton>
        <MagneticButton
          as="a"
          href="#offres"
          className="rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/5 active:scale-[0.98]"
          style={{ fontFamily: 'Inter, "Inter Fallback"', fontStyle: 'normal', fontWeight: 400, fontSize: '16px', lineHeight: '24px' }}
          strength={0.3}
        >
          Voir les offres
        </MagneticButton>
      </div>

      {/* Réassurance */}
      <p
        className="-mt-2 max-w-[58ch] text-white/60"
        style={{ fontFamily: inter.style.fontFamily, fontWeight: 400, fontSize: '14px', lineHeight: '22px' }}
      >
        Appel de 20 minutes, sans engagement. Vous repartez avec deux ou trois actions concrètes à appliquer, même si nous ne travaillons pas ensemble. Diagnostic à 790 €, livré en 5 jours ouvrés.
      </p>

    </div>
  );
}
