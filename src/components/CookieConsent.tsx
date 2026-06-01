'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from '@phosphor-icons/react';
import { inter } from '@/lib/fonts';

const crumbs = [
  { x: -6,  delay: 0,    size: 3   },
  { x:  2,  delay: 0.3,  size: 2   },
  { x:  7,  delay: 0.6,  size: 2.5 },
  { x: -2,  delay: 0.9,  size: 2   },
];

function CookieIcon() {
  return (
    <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      <Cookie size={22} weight="regular" />
      {crumbs.map((c, i) => (
        <motion.span
          key={i}
          style={{
            position: 'absolute',
            bottom: '-2px',
            left: `calc(50% + ${c.x}px)`,
            width: `${c.size}px`,
            height: `${c.size}px`,
            borderRadius: '50%',
            background: 'currentColor',
            display: 'block',
            originX: '50%',
            originY: '50%',
          }}
          animate={{
            y: [0, 10, 18],
            opacity: [0, 0.8, 0],
            scale: [1, 0.9, 0.6],
          }}
          transition={{
            duration: 1.4,
            delay: c.delay,
            repeat: Infinity,
            repeatDelay: 1.2,
            ease: 'easeIn',
          }}
        />
      ))}
    </span>
  );
}

export default function CookieConsent() {
  const [visible, setVisible]   = useState(false);
  const [decided, setDecided]   = useState(true);
  const [onLight, setOnLight]   = useState(false); // true si fond blanc sous le bouton

  useEffect(() => {
    const stored = localStorage.getItem('cookie-consent');
    if (!stored) setDecided(false);
  }, []);

  useEffect(() => {
    const check = () => {
      // Détecte la couleur de fond au centre de l'écran
      const x = window.innerWidth / 2;
      const y = window.innerHeight / 2;
      const stack = document.elementsFromPoint(x, y);
      for (const el of stack) {
        let node: Element | null = el;
        while (node && node !== document.body) {
          const bg = window.getComputedStyle(node).backgroundColor;
          if (bg && bg !== 'rgba(0, 0, 0, 0)') {
            setOnLight(bg === 'rgb(255, 255, 255)');
            return;
          }
          node = node.parentElement;
        }
      }
      setOnLight(false);
    };

    window.addEventListener('scroll', check, { passive: true });
    check();
    return () => window.removeEventListener('scroll', check);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
    setDecided(true);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
    setDecided(true);
  };

  if (decided) return null;

  return (
    <>
      {/* Bouton discret */}
      <AnimatePresence>
        {!visible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.25 }}
            onClick={() => setVisible(true)}
            aria-label="Gestion des cookies"
            style={{
              position: 'fixed',
              bottom: '24px',
              left: '24px',
              zIndex: 50,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: onLight ? 'rgba(38,77,140,0.08)' : 'rgba(255,255,255,0.08)',
              border: onLight ? '1px solid rgba(38,77,140,0.20)' : '1px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              boxShadow: onLight
                ? 'inset 0 1px 0 rgba(255,255,255,0.80), 0 2px 8px rgba(38,77,140,0.10)'
                : 'inset 0 1px 0 rgba(255,255,255,0.12)',
              cursor: 'pointer',
              color: onLight ? 'rgba(38,77,140,0.60)' : 'rgba(255,255,255,0.55)',
              transition: 'background 0.35s, color 0.35s, border-color 0.35s, box-shadow 0.35s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = onLight ? 'rgba(38,77,140,0.14)' : 'rgba(255,255,255,0.14)';
              (e.currentTarget as HTMLButtonElement).style.color = onLight ? 'rgba(38,77,140,1)' : 'rgba(255,255,255,0.9)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = onLight ? 'rgba(38,77,140,0.08)' : 'rgba(255,255,255,0.08)';
              (e.currentTarget as HTMLButtonElement).style.color = onLight ? 'rgba(38,77,140,0.60)' : 'rgba(255,255,255,0.55)';
            }}
          >
            <CookieIcon />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Barre cookie */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            style={{
              position: 'fixed',
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 50,
              background: 'rgba(255,255,255,0.88)',
              borderTop: '1px solid rgba(38,77,140,0.12)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: '0 -4px 24px -4px rgba(0,0,0,0.08)',
              padding: '14px 32px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            {/* Icône */}
            <span style={{ color: '#264d8c', flexShrink: 0 }}>
              <Cookie size={20} weight="regular" />
            </span>

            {/* Texte */}
            <p style={{
              fontFamily: 'Inter, "Inter Fallback"',
              fontWeight: 400,
              fontSize: '13px',
              lineHeight: '20px',
              color: 'rgba(30,58,100,0.80)',
              flex: 1,
              margin: 0,
              minWidth: '180px',
            }}>
              Ce site utilise Google Analytics pour mesurer son audience. Vos données ne sont pas revendues et aucun cookie ne sera déposé si vous ne le voulez pas.
            </p>

            {/* Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
              <button
                onClick={decline}
                style={{
                  fontFamily: 'Inter, "Inter Fallback"',
                  fontWeight: 500,
                  fontSize: '13px',
                  lineHeight: '20px',
                  color: 'rgba(30,58,100,0.70)',
                  background: '#ffffff',
                  border: '1px solid rgba(38,77,140,0.22)',
                  cursor: 'pointer',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(38,77,140,0.45)';
                  e.currentTarget.style.color = 'rgba(30,58,100,1)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(38,77,140,0.22)';
                  e.currentTarget.style.color = 'rgba(30,58,100,0.70)';
                }}
              >
                Pas la peine
              </button>
              <button
                onClick={accept}
                style={{
                  fontFamily: 'Inter, "Inter Fallback"',
                  fontWeight: 600,
                  fontSize: '13px',
                  lineHeight: '20px',
                  color: '#264d8c',
                  background: '#fceb30',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '6px 16px',
                  borderRadius: '9999px',
                  transition: 'filter 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.filter = 'brightness(1.08)')}
                onMouseLeave={e => (e.currentTarget.style.filter = 'brightness(1)')}
              >
                Ok go !
              </button>
            </div>

            {/* Fermer sans choisir */}
            <button
              onClick={() => setVisible(false)}
              aria-label="Fermer"
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: 'rgba(30,58,100,0.30)',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
                flexShrink: 0,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(30,58,100,0.70)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(30,58,100,0.30)')}
            >
              <X size={14} weight="bold" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
