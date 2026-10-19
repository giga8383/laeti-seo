'use client';

import Image from 'next/image';
import { Palette, Ruler, ForkKnife, Hammer, Wrench } from '@phosphor-icons/react';
import MagneticButton from './MagneticButton';
import { inter } from '@/lib/fonts';

export default function HeroContent() {
  return (
    <div className="flex flex-col items-start gap-8">

      {/* Avatar chip */}
      <div
        className="flex items-center gap-3 rounded-full px-4 py-2.5"
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
            Laeti
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
          fontSize: 'clamp(34px, 6vw, 60px)',
          lineHeight: '1.08',
        }}
      >
        Votre prochain client vous cherche sur Google.{' '}
        <span style={{ color: '#fceb30', textShadow: '0 0 18px rgba(252,235,48,0.55), 0 0 48px rgba(252,235,48,0.25)' }}>Aidez-le à vous trouver.</span>
      </h1>

      {/* Sous-titre */}
      <p
        className="max-w-[58ch] text-white/75"
        style={{ fontFamily: 'Inter, "Inter Fallback"', fontStyle: 'normal', fontWeight: 400, fontSize: '16px', lineHeight: '26px' }}
      >
        J&apos;analyse votre fiche Google, une page locale de votre site et vos réseaux sociaux pour identifier ce qui freine votre visibilité et les actions à mener en priorité.
      </p>

      {/* Tags métiers */}
      <div className="space-y-3">
        <p
          style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '15px', lineHeight: '22px', textTransform: 'uppercase' }}
          className="tracking-widest text-[#fceb30]/80"
        >
          Pour les professionnels de l&apos;habitat
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            { label: 'Décorateurs',             Icon: Palette,   color: '#f9a8d4' },
            { label: "Architectes d'intérieur", Icon: Ruler,     color: '#86efac' },
            { label: 'Cuisinistes',             Icon: ForkKnife, color: '#fcd34d' },
            { label: 'Menuisiers',              Icon: Hammer,    color: '#7dd3fc' },
            { label: 'Artisans',                Icon: Wrench,    color: '#c4b5fd' },
          ].map(({ label, Icon, color }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm transition-all duration-300 hover:scale-[1.04]"
              style={{
                color,
                background: `color-mix(in srgb, ${color} 10%, transparent)`,
                border: `1px solid color-mix(in srgb, ${color} 28%, transparent)`,
                boxShadow: `inset 0 1px 0 color-mix(in srgb, ${color} 15%, transparent)`,
              }}
            >
              <Icon size={14} weight="bold" />
              {label}
            </span>
          ))}
        </div>
      </div>

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
          Faire le point sur ma visibilité
        </MagneticButton>
        <MagneticButton
          as="a"
          href="#tarif"
          className="rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/5 active:scale-[0.98]"
          style={{ fontFamily: 'Inter, "Inter Fallback"', fontStyle: 'normal', fontWeight: 400, fontSize: '16px', lineHeight: '24px' }}
          strength={0.3}
        >
          Découvrir les offres
        </MagneticButton>
      </div>

      {/* Microcopy + réassurance */}
      <div className="-mt-2 space-y-5">
        <p
          className="max-w-[52ch] text-white/60"
          style={{ fontFamily: inter.style.fontFamily, fontWeight: 400, fontSize: '14px', lineHeight: '22px' }}
        >
          Appel gratuit de 20 minutes · Sans engagement.<br />
          Voyons si le diagnostic est adapté à votre activité.
        </p>
        <ul
          className="flex flex-wrap gap-x-6 gap-y-2 text-white/75"
          style={{ fontFamily: inter.style.fontFamily, fontWeight: 400, fontSize: '14px', lineHeight: '20px' }}
        >
          {['Plus de 12 ans en SEO', 'Une seule interlocutrice'].map((t) => (
            <li key={t} className="flex items-center gap-2">
              <span className="font-bold text-[#fceb30]" aria-hidden="true">✓</span>
              {t}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
