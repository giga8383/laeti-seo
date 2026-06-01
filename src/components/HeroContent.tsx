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
            src="/laeti-1.jpg"
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
          fontSize: 'clamp(36px, 8vw, 72px)',
          lineHeight: '1.08',
        }}
      >
        <span style={{ color: '#fceb30', textShadow: '0 0 18px rgba(252,235,48,0.55), 0 0 48px rgba(252,235,48,0.25)' }}>Être</span> <span style={{ color: '#fceb30', textShadow: '0 0 18px rgba(252,235,48,0.55), 0 0 48px rgba(252,235,48,0.25)' }}>visible</span> localement, ce n&apos;est pas une question de chance.{' '}
        <span style={{ color: '#fceb30', textShadow: '0 0 18px rgba(252,235,48,0.55), 0 0 48px rgba(252,235,48,0.25)' }}>C&apos;est une</span> <span style={{ color: '#fceb30', textShadow: '0 0 18px rgba(252,235,48,0.55), 0 0 48px rgba(252,235,48,0.25)' }}>stratégie</span>.
      </h1>

      {/* Sous-titre */}
      <p
        className="max-w-[58ch] text-white/75"
        style={{ fontFamily: 'Inter, "Inter Fallback"', fontStyle: 'normal', fontWeight: 400, fontSize: '16px', lineHeight: '26px' }}
      >
        Vous êtes bon dans votre métier, mais invisible sur Google ?<br />
        J&apos;identifie ce qui vous freine et je corrige les blocages qui empêchent vos futurs clients de vous trouver.
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
          href="/offre"
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
          Réserver un diagnostic
        </MagneticButton>
        <MagneticButton
          as="a"
          href="/feuille-de-route"
          className="rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/5 active:scale-[0.98]"
          style={{ fontFamily: 'Inter, "Inter Fallback"', fontStyle: 'normal', fontWeight: 400, fontSize: '16px', lineHeight: '24px' }}
          strength={0.3}
        >
          Voir ce qui est analysé
        </MagneticButton>
      </div>

    </div>
  );
}
