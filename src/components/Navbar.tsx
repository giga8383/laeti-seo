'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X, CaretDown, CaretRight } from '@phosphor-icons/react';
import MagneticButton from './MagneticButton';
import { inter } from '@/lib/fonts';

const navLinks = [
  { label: 'Consultante SEO freelance', href: '/consultante-seo-freelance' },
  { label: 'Blog',                      href: '/blog'        },
  { label: 'À propos',                  href: '/#qui-suis-je' },
];

const offreItems = [
  { label: 'Audit SEO local', sub: 'Diagnostic Visibilité', href: '/audit-seo-local' },
  { label: 'Sprint local 3 mois', sub: 'Accompagnement complet', href: '/offre' },
];

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [isOverLight, setIsOverLight] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [offreOpen, setOffreOpen] = useState(false);
  const offreRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

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

  // Ferme le dropdown Offre si clic en dehors
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (offreRef.current && !offreRef.current.contains(e.target as Node)) {
        setOffreOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Menu mobile : fermeture avec Échap, blocage du défilement de la page, fermeture automatique
  // si l'écran passe en mode desktop, focus sur le premier lien à l'ouverture.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        burgerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    document.body.setAttribute('data-mobile-menu', 'open'); // masque le bouton WhatsApp (voir globals.css)
    const mq = window.matchMedia('(min-width: 1024px)');
    const onMq = () => { if (mq.matches) setMenuOpen(false); };
    mq.addEventListener('change', onMq);
    firstLinkRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.documentElement.style.overflow = prevOverflow;
      document.body.removeAttribute('data-mobile-menu');
      mq.removeEventListener('change', onMq);
    };
  }, [menuOpen]);

  const p = Math.min(scrollY / 80, 1);

  const linkColor = isOverLight ? 'rgba(30,58,100,0.80)' : 'rgba(255,255,255,0.85)';
  // Menu ouvert : fond assombri derrière, donc logo et burger restent clairs.
  const onLight   = isOverLight && !menuOpen;
  const logoTop   = onLight ? '#264d8c' : '#ffffff';
  const logoBot   = onLight ? '#0ea5e9' : '#fceb30';

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center px-6 pt-3 pointer-events-none">
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
        <div className="flex items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr]">

          {/* Logo */}
          <a href="/" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 900, fontSize: '16px', lineHeight: '1', display: 'flex', flexDirection: 'column', gap: '0px', textDecoration: 'none' }}>
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
          </a>

          {/* Liens desktop */}
          <div className="hidden items-center gap-7 lg:flex">

            {/* Consultante SEO freelance en premier */}
            <a
              href="/consultante-seo-freelance"
              className="whitespace-nowrap hover:opacity-100"
              style={{
                fontFamily: 'Inter, "Inter Fallback"',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '21px',
                color: linkColor,
                transition: 'color 0.35s',
              }}
            >
              Consultante SEO freelance
            </a>

            {/* Dropdown Offre */}
            <div ref={offreRef} style={{ position: 'relative' }}>
              <button
                onClick={() => setOffreOpen((v) => !v)}
                className="flex items-center gap-1 whitespace-nowrap"
                style={{
                  fontFamily: 'Inter, "Inter Fallback"',
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '21px',
                  color: linkColor,
                  transition: 'color 0.35s',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                Offre
                <CaretDown
                  size={12}
                  weight="bold"
                  style={{
                    transition: 'transform 0.2s',
                    transform: offreOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    color: linkColor,
                  }}
                />
              </button>

              <AnimatePresence>
                {offreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 12px)',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      minWidth: '220px',
                      background: 'rgba(255,255,255,0.98)',
                      borderRadius: '16px',
                      boxShadow: '0 8px 32px -4px rgba(38,77,140,0.18), 0 2px 8px rgba(0,0,0,0.08)',
                      border: '1px solid rgba(38,77,140,0.10)',
                      padding: '8px',
                      zIndex: 100,
                    }}
                  >
                    {offreItems.map(({ label, sub, href }) => (
                      <a
                        key={href}
                        href={href}
                        onClick={() => setOffreOpen(false)}
                        style={{ textDecoration: 'none', display: 'block' }}
                      >
                        <div
                          className="rounded-xl px-4 py-3 transition-colors hover:bg-[rgba(38,77,140,0.06)]"
                        >
                          <p style={{ fontFamily: 'Inter, "Inter Fallback"', fontStyle: 'normal', fontWeight: 700, fontSize: '14px', lineHeight: '20px', color: '#3262AB', textTransform: 'uppercase' }}>
                            {label}
                          </p>
                          <p style={{ fontFamily: 'Inter, "Inter Fallback"', fontStyle: 'normal', fontWeight: 400, fontSize: '12px', lineHeight: '16px', color: 'lab(19.1245 51.5264 -84.3836 / 0.5)', marginTop: '2px' }}>
                            {sub}
                          </p>
                        </div>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(1).map(({ label, href }) => (
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
              href="https://calendly.com/laetitia_laghezza_seo_local/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden lg:flex items-center gap-2 rounded-full bg-[#fceb30] px-4 py-2 text-[#264d8c] active:scale-[0.98]"
              style={{ fontFamily: inter.style.fontFamily, fontWeight: 700, fontSize: '12px', lineHeight: '17px', whiteSpace: 'nowrap' }}
              strength={0.25}
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#264d8c] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#264d8c]" />
              </span>
              Faire le point sur ma visibilité
            </MagneticButton>

            {/* Burger mobile : zone tactile 44 x 44 px */}
            <button
              ref={burgerRef}
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
              style={{
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.22)',
                color: onLight ? '#264d8c' : '#ffffff',
              }}
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Menu mobile : voile + panneau pleine largeur (visible sous 1024 px, comme le burger) */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="menu-overlay"
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="pointer-events-auto fixed inset-0 -z-10 lg:hidden"
              style={{ background: 'rgba(8,18,50,0.60)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}
            />
            <motion.div
              key="menu-sheet"
              id="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto mt-2 w-full overflow-y-auto rounded-3xl p-3 lg:hidden"
              style={{
                maxHeight: 'calc(100dvh - 96px)',
                background: 'linear-gradient(165deg, #0c1a40 0%, #112258 100%)',
                border: '1px solid rgba(255,255,255,0.14)',
                boxShadow: '0 24px 48px -12px rgba(0,0,0,0.45)',
              }}
            >
              <p
                className="px-3 pb-1 pt-2"
                style={{ fontFamily: inter.style.fontFamily, fontSize: '12px', fontWeight: 600, color: 'rgba(252,235,48,0.85)', textTransform: 'uppercase', letterSpacing: '0.12em' }}
              >
                Offre
              </p>
              <ul className="flex flex-col">
                {offreItems.map(({ label, sub, href }, i) => (
                  <li key={href}>
                    <a
                      ref={i === 0 ? firstLinkRef : undefined}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="flex min-h-[60px] items-center justify-between gap-3 rounded-2xl px-3 py-2 transition-colors active:bg-white/10"
                    >
                      <span className="flex flex-col">
                        <span style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '18px', lineHeight: '24px', color: '#ffffff' }}>{label}</span>
                        <span style={{ fontFamily: inter.style.fontFamily, fontSize: '13px', lineHeight: '18px', color: 'rgba(255,255,255,0.65)' }}>{sub}</span>
                      </span>
                      <CaretRight size={16} weight="bold" color="rgba(255,255,255,0.45)" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mx-3 my-2 h-px" style={{ background: 'rgba(255,255,255,0.10)' }} />

              <ul className="flex flex-col">
                {navLinks.map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="flex min-h-[52px] items-center justify-between gap-3 rounded-2xl px-3 transition-colors active:bg-white/10"
                      style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '18px', color: '#ffffff' }}
                    >
                      {label}
                      <CaretRight size={16} weight="bold" color="rgba(255,255,255,0.45)" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href="https://calendly.com/laetitia_laghezza_seo_local/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-3 flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-[#fceb30] px-4 text-[#264d8c] active:scale-[0.98]"
                style={{ fontFamily: inter.style.fontFamily, fontWeight: 700, fontSize: '15px' }}
              >
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#264d8c] opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#264d8c]" />
                </span>
                Faire le point sur ma visibilité
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
