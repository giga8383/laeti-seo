'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X } from '@phosphor-icons/react';
import MagneticButton from './MagneticButton';
import { inter } from '@/lib/fonts';

const navLinks = [
  { label: 'Consultante SEO freelance', href: '/'            },
  { label: 'Offre',                     href: '/offre'       },
  { label: 'Blog',                      href: '/blog'        },
  { label: 'À propos',                  href: '#qui-suis-je' },
];

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [isOverLight, setIsOverLight] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const check = () => {
      setScrollY(window.scrollY);

      // elementsFromPoint retourne tous les éléments empilés à ce point
      // on ignore la navbar elle-même et on cherche la 1ère couleur non transparente
      const stack = document.elementsFromPoint(window.innerWidth / 2, 90);
      for (const el of stack) {
        if (el.closest('[data-navbar]')) continue; // ignore la navbar
        let node: Element | null = el;
        while (node && node !== document.body) {
          const bg = window.getComputedStyle(node).backgroundColor;
          if (bg && bg !== 'rgba(0, 0, 0, 0)') {
            setIsOverLight(bg === 'rgb(255, 255, 255)');
            return;
          }
          node = node.parentElement;
        }
      }
      setIsOverLight(false); // fond sombre / transparent par défaut
    };

    window.addEventListener('scroll', check, { passive: true });
    check();
    return () => window.removeEventListener('scroll', check);
  }, []);

  const p = Math.min(scrollY / 80, 1);

  const linkColor = isOverLight ? 'rgba(30,58,100,0.80)' : 'rgba(255,255,255,0.85)';
  const logoTop   = isOverLight ? '#264d8c' : '#ffffff';
  const logoBot   = isOverLight ? '#0ea5e9' : '#fceb30';

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 pt-3 pointer-events-none">
      <nav
        data-navbar
        className="pointer-events-auto w-full"
        style={{
          maxWidth:             `${1280 - p * 360}px`,
          borderRadius:         `${p * 9999}px`,
          padding:              `${p * 6}px ${p * 18}px`,
          background:           `rgba(255,255,255,${p * 0.12})`,
          backdropFilter:       `blur(${p * 18}px)`,
          WebkitBackdropFilter: `blur(${p * 18}px)`,
          border:               `1px solid rgba(255,255,255,${p * 0.22})`,
          boxShadow: p > 0.05
            ? `inset 0 1px 0 rgba(255,255,255,${p * 0.25}), 0 8px 32px -8px rgba(0,0,0,${p * 0.15})`
            : 'none',
          transition: 'max-width 0.5s cubic-bezier(0.16,1,0.3,1), border-radius 0.5s cubic-bezier(0.16,1,0.3,1), padding 0.5s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center' }}>

          {/* Logo */}
          <div style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 900, fontSize: '16px', lineHeight: '1', display: 'flex', flexDirection: 'column', gap: '0px' }}>
            <span style={{ color: logoTop, textTransform: 'uppercase', letterSpacing: '0.02em', transition: 'color 0.35s' }}>
              Laet<span style={{ position: 'relative', display: 'inline-block' }}>
                i
                <span style={{
                  position: 'absolute',
                  top: '-0.22em',
                  left: '55%',
                  width: '0.28em',
                  height: '0.28em',
                  borderRadius: '50%',
                  background: logoBot,
                  display: 'block',
                  boxShadow: `0 0 6px 1px ${logoBot}99`,
                  transition: 'background 0.35s, box-shadow 0.35s',
                }} />
              </span>
            </span>
            <span style={{ color: logoBot, textTransform: 'uppercase', letterSpacing: '0.02em', transition: 'color 0.35s' }}>SEO</span>
          </div>

          {/* Liens desktop */}
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="whitespace-nowrap hover:opacity-100"
                style={{
                  fontFamily: 'Inter, "Inter Fallback"',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '21px',
                  color: linkColor,
                  transition: 'color 0.35s',
                }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* CTA + burger */}
          <div className="flex items-center justify-end gap-3">
            <MagneticButton
              as="a"
              href="/offre"
              className="group hidden lg:flex items-center gap-2 rounded-full bg-[#fceb30] px-4 py-2 text-[#264d8c] active:scale-[0.98]"
              style={{ fontFamily: inter.style.fontFamily, fontWeight: 700, fontSize: '12px', lineHeight: '17px', whiteSpace: 'nowrap' }}
              strength={0.25}
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#264d8c] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#264d8c]" />
              </span>
              Réserver un diagnostic
            </MagneticButton>

            {/* Burger mobile */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.10)',
                border: '1px solid rgba(255,255,255,0.18)',
                color: isOverLight ? '#264d8c' : '#ffffff',
              }}
              aria-label="Menu"
            >
              {menuOpen ? <X size={17} weight="bold" /> : <List size={17} weight="bold" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Menu mobile déroulant */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto mx-auto mt-2 w-full max-w-sm rounded-2xl px-4 py-4 md:hidden"
            style={{
              background: 'rgba(20, 40, 100, 0.92)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.14)',
              boxShadow: '0 16px 40px -8px rgba(0,0,0,0.3)',
            }}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                  style={{ fontFamily: inter.style.fontFamily }}
                >
                  {label}
                </a>
              ))}
              <div className="mt-2 border-t border-white/10 pt-3">
                <a
                  href="#offre"
                  onClick={() => setMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#fceb30] py-3 text-sm font-bold text-[#264d8c]"
                  style={{ fontFamily: inter.style.fontFamily }}
                >
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#264d8c] opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#264d8c]" />
                  </span>
                  Réserver un diagnostic
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
