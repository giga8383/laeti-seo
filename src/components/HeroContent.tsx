'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';
import { inter } from '@/lib/fonts';

export default function HeroContent() {
  const [revealed, setRevealed] = useState(false);
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
            boxShadow: '0 0 0 2px #ffd426, 0 0 10px 1px rgba(255,212,38,0.35)',
          }}
        >
          <Image
            src="/laeti-avatar.webp"
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

      {/* Jaune sobre au repos ; au survol (ou au toucher), « Consultant SEO local » s'éclaire */}
      <style>{`
        .hero-glow { color: #e8c320; cursor: default; text-shadow: 0 0 0 rgba(255,212,38,0);
                     transition: color 0.4s ease, text-shadow 0.4s ease; }
        .hero-glow:hover { color: #ffe27a; text-shadow: 0 0 14px rgba(255,212,38,0.95), 0 0 38px rgba(255,212,38,0.7), 0 0 90px rgba(255,212,38,0.45); }
      `}</style>

      {/* H1 */}
      <h1
        className="uppercase text-white"
        style={{
          fontFamily: 'Satoshi, "Satoshi Fallback", ui-sans-serif, system-ui, -apple-system, sans-serif',
          fontWeight: 900,
          fontSize: 'clamp(34px, 5.4vw, 64px)',
          lineHeight: '1',
          letterSpacing: '-0.01em',
        }}
      >
        {/* Le masque de l'animation d'entrée est retiré une fois terminée, pour que le halo ne soit pas coupé */}
        <span className={`block pb-[0.06em] ${revealed ? '' : 'overflow-hidden'}`}>
          <motion.span
            className="hero-glow inline-block"
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Consultant
          </motion.span>
        </span>
        <span className={`relative block pb-[0.06em] ${revealed ? '' : 'overflow-hidden'}`}>
          <motion.span
            className="hero-glow inline-block"
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            SEO local
          </motion.span>
        </span>
        <span className="block overflow-hidden pb-[0.06em]">
          <motion.span
            className="block"
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onAnimationComplete={() => setRevealed(true)}
            style={{ fontSize: '0.5em', lineHeight: 1.08, letterSpacing: '0.005em', paddingTop: '0.25em' }}
          >
            pour les artisans et les entreprises de l&apos;habitat
          </motion.span>
        </span>
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
          className="group flex items-center gap-2.5 rounded-full bg-[#ffd426] px-7 py-3.5 text-[#1b1b5e] active:scale-[0.98]"
          style={{
            fontFamily: 'Inter, "Inter Fallback"',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
            border: '2px solid rgba(255,212,38,0.4)',
            outline: '3px solid rgba(255,212,38,0.15)',
            outlineOffset: '2px',
            boxShadow: '0 0 20px -4px rgba(255,212,38,0.5), 0 0 48px -8px rgba(255,212,38,0.25)',
          }}
          strength={0.3}
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1b1b5e] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1b1b5e]" />
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
