'use client';

import { inter } from '@/lib/fonts';

/* --- Données --- */

const navLinks = [
  { label: 'Accueil',          href: '/' },
  { label: 'Offre & Tarifs',   href: '/offre' },
  { label: 'Feuille de route', href: '/feuille-de-route' },
  { label: 'Blog SEO',         href: '/blog' },
  { label: 'À propos',         href: '/#qui-suis-je' },
  { label: 'Contact',          href: 'mailto:contact@laeti-seo.fr' },
];

const seoLocal = [
  { label: 'Consultante SEO Aix-en-Provence', href: '/consultant-seo-aix-en-provence' },
  // Prochaines pages :
  { label: 'Consultante SEO Marseille',        href: '/consultant-seo-marseille' },
  { label: 'Consultante SEO Toulon',           href: '/consultant-seo-toulon' },
  { label: 'Consultante SEO Avignon',          href: '#', soon: true },
  { label: 'Consultante SEO Nice',             href: '#', soon: true },
];

const ressources = [
  { label: 'Guide offert : 7 points visibilité locale', href: '/Guide-Trouvable' },
  { label: 'Blog SEO local',                 href: '/blog' },
  { label: 'FAQ',                            href: '/#faq' },
  { label: 'Audit SEO local',                href: '/audit-seo-local' },
  { label: 'Réserver un appel découverte',   href: '/offre' },
];

const legalLinks = [
  { label: 'Mentions légales',            href: '/mentions-legales' },
  { label: 'CGV',                         href: '/cgv' },
  { label: 'Politique de confidentialité', href: '/politique-de-confidentialite' },
  { label: 'Cookies',                     href: '/politique-de-confidentialite' },
];

/* --- Sous-composants --- */

function ColTitle({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: 'Satoshi, sans-serif',
      fontWeight: 700,
      fontSize: '11px',
      letterSpacing: '0.13em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.32)',
      marginBottom: '4px',
    }}>
      {children}
    </p>
  );
}

function NavItem({ label, href, soon }: { label: string; href: string; soon?: boolean }) {
  return (
    <li>
      <a
        href={soon ? undefined : href}
        aria-disabled={soon}
        style={{
          fontFamily: inter.style.fontFamily,
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '22px',
          color: soon ? 'rgba(255,255,255,0.28)' : 'rgba(255,255,255,0.65)',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          cursor: soon ? 'default' : 'pointer',
          transition: 'color 0.2s',
        }}
        onMouseEnter={e => { if (!soon) e.currentTarget.style.color = '#ffffff'; }}
        onMouseLeave={e => { if (!soon) e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; }}
      >
        {label}
        {soon && (
          <span style={{
            fontFamily: inter.style.fontFamily,
            fontSize: '10px',
            fontWeight: 600,
            color: 'rgba(252,235,48,0.55)',
            background: 'rgba(252,235,48,0.08)',
            border: '1px solid rgba(252,235,48,0.18)',
            borderRadius: '4px',
            padding: '1px 5px',
            lineHeight: '16px',
          }}>
            bientôt
          </span>
        )}
      </a>
    </li>
  );
}

function SeoItem({ label, href, soon }: { label: string; href: string; soon?: boolean }) {
  return (
    <li>
      <a
        href={soon ? undefined : href}
        aria-disabled={soon}
        style={{
          fontFamily: inter.style.fontFamily,
          fontWeight: soon ? 400 : 500,
          fontSize: '14px',
          lineHeight: '22px',
          color: soon ? 'rgba(252,235,48,0.30)' : 'rgba(252,235,48,0.80)',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          cursor: soon ? 'default' : 'pointer',
          transition: 'color 0.2s',
        }}
        onMouseEnter={e => { if (!soon) e.currentTarget.style.color = '#fceb30'; }}
        onMouseLeave={e => { if (!soon) e.currentTarget.style.color = soon ? 'rgba(252,235,48,0.30)' : 'rgba(252,235,48,0.80)'; }}
      >
        {label}
        {soon && (
          <span style={{
            fontFamily: inter.style.fontFamily,
            fontSize: '10px',
            fontWeight: 600,
            color: 'rgba(252,235,48,0.40)',
            background: 'rgba(252,235,48,0.06)',
            border: '1px solid rgba(252,235,48,0.12)',
            borderRadius: '4px',
            padding: '1px 5px',
            lineHeight: '16px',
          }}>
            bientôt
          </span>
        )}
      </a>
    </li>
  );
}

/* --- Footer principal --- */

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(165deg, #0c1a40 0%, #112258 55%, #0f1e48 100%)',
      borderTop: '1px solid rgba(255,255,255,0.07)',
    }}>

      {/* -- Corps du footer -- */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-[1.8fr_1fr_1.4fr_1fr]  lg:gap-16">

          {/* Col 1 - Marque */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-6">

            {/* Logo */}
            <div style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 900, fontSize: '22px', lineHeight: '1', display: 'flex', flexDirection: 'column', gap: '0px' }}>
              <span style={{ color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                Laet<span style={{ position: 'relative', display: 'inline-block' }}>
                  i
                  <span style={{
                    position: 'absolute', top: '-0.22em', left: '55%',
                    width: '0.28em', height: '0.28em', borderRadius: '50%',
                    background: '#fceb30', display: 'block',
                    boxShadow: '0 0 7px 2px rgba(252,235,48,0.55)',
                  }} />
                </span>
              </span>
              <span style={{ color: '#fceb30', textTransform: 'uppercase', letterSpacing: '0.02em' }}>SEO</span>
            </div>

            <p style={{
              fontFamily: inter.style.fontFamily,
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '23px',
              color: 'rgba(255,255,255,0.50)',
              maxWidth: '30ch',
            }}>
              Consultante SEO locale spécialisée dans la visibilité des professionnels de l&apos;habitat en France.
            </p>

            {/* Localisation + email */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, opacity: 0.45 }}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="rgba(255,255,255,0.6)"/>
                </svg>
                <span style={{ fontFamily: inter.style.fontFamily, fontSize: '13px', color: 'rgba(255,255,255,0.40)' }}>
                  Aix-en-Provence &amp; toute la France
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, opacity: 0.45 }}>
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="rgba(255,255,255,0.6)"/>
                </svg>
                <a href="mailto:contact@laeti-seo.fr" style={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: '13px',
                  color: 'rgba(252,235,48,0.65)',
                  textDecoration: 'none',
                }}>
                  contact@laeti-seo.fr
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, opacity: 0.45 }}>
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="rgba(255,255,255,0.6)"/>
                </svg>
                <a href="tel:+33626950750" style={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: '13px',
                  color: 'rgba(252,235,48,0.65)',
                  textDecoration: 'none',
                }}>
                  06 26 95 07 50
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '2px' }}>
              <a
                href="https://www.linkedin.com/in/laetitia-laghezza/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Laeti SEO"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '36px', height: '36px', borderRadius: '9px',
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'rgba(255,255,255,0.55)',
                  transition: 'background 0.2s, color 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.13)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.55)';
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

          </div>

          {/* Col 2 - Navigation */}
          <div className="flex flex-col gap-4">
            <ColTitle>Navigation</ColTitle>
            <ul className="flex flex-col gap-2">
              {navLinks.map(l => <NavItem key={l.href} {...l} />)}
            </ul>
          </div>

          {/* Col 3 - SEO Local */}
          <div className="flex flex-col gap-4">
            <ColTitle>SEO Local</ColTitle>
            <ul className="flex flex-col gap-2">
              {seoLocal.map(l => <SeoItem key={l.label} {...l} />)}
            </ul>
          </div>

          {/* Col 4 - Ressources */}
          <div className="flex flex-col gap-4">
            <ColTitle>Ressources</ColTitle>
            <ul className="flex flex-col gap-2">
              {ressources.map(l => <NavItem key={l.label} {...l} />)}
            </ul>
          </div>

        </div>
      </div>

      {/* -- Bande légale basse -- */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">

          <p style={{
            fontFamily: inter.style.fontFamily,
            fontWeight: 400,
            fontSize: '12px',
            color: 'rgba(255,255,255,0.28)',
          }}>
            © {new Date().getFullYear()} Laeti SEO · Tous droits réservés. Consultante SEO freelance, Aix-en-Provence.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {legalLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                style={{
                  fontFamily: inter.style.fontFamily,
                  fontWeight: 400,
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.28)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.60)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.28)')}
              >
                {label}
              </a>
            ))}
          </div>

        </div>
      </div>

    </footer>
  );
}
