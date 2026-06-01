'use client';

import { inter } from '@/lib/fonts';

const trust = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#264d8c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="9,12 11,14 15,10" stroke="#fceb30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Travail 100 % personnel',
    body: 'Pas de sous-traitance, pas de stagiaire. C’est moi qui analyse et rédige chaque diagnostic.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#264d8c" strokeWidth="1.8"/>
        <polyline points="12,6 12,12 16,14" stroke="#fceb30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Livré en 5 jours',
    body: 'Un plan d’action priorisé, clair et directement applicable, sans attendre des semaines.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#264d8c" strokeWidth="1.8"/>
        <circle cx="12" cy="10" r="3" stroke="#fceb30" strokeWidth="2"/>
      </svg>
    ),
    title: 'Spécialiste SEO local',
    body: 'Focalisée sur la visibilité locale des pros de l’habitat : fiche Google, avis, cartes.',
  },
];

export default function PreFooter() {
  return (
    <>
      {/* ── Section 1 : 3 arguments de confiance ── */}
      <section style={{ background: '#ffffff', borderTop: '1px solid rgba(38,77,140,0.07)' }}>
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">

          {/* Titre */}
          <div className="mb-12 text-center">
            <p style={{
              fontFamily: 'Satoshi, sans-serif',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '42px',
              lineHeight: '48px',
              color: '#264d8c',
              marginBottom: '10px',
              textShadow: '0 0 12px rgba(35,85,182,0.6), 0 0 28px rgba(35,85,182,0.35), 0 0 56px rgba(35,85,182,0.15)',
            }}>
              Pourquoi moi&nbsp;?
            </p>
            <h2 style={{
              fontFamily: 'Satoshi, sans-serif',
              fontWeight: 700,
              fontSize: '22px',
              lineHeight: '1.3',
              color: 'rgba(38,77,140,0.40)',
            }}>
              Un accompagnement direct, sans intermédiaire.
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {trust.map(({ icon, title, body }) => (
              <div
                key={title}
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(38,77,140,0.09)',
                  borderRadius: '20px',
                  padding: '28px 28px 30px',
                  boxShadow: '0 4px 24px -4px rgba(38,77,140,0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                <div style={{
                  width: '52px', height: '52px',
                  borderRadius: '14px',
                  background: 'rgba(38,77,140,0.05)',
                  border: '1px solid rgba(38,77,140,0.10)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  {icon}
                </div>
                <p style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: 700,
                  fontSize: '17px',
                  lineHeight: '1.25',
                  color: '#264d8c',
                }}>
                  {title}
                </p>
                <p style={{
                  fontFamily: inter.style.fontFamily,
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '23px',
                  color: 'rgba(38,77,140,0.65)',
                }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Carte guide gratuit — fond blanc + glow jaune ── */}
      <section style={{ background: '#ffffff', borderTop: '1px solid rgba(38,77,140,0.06)' }}>
        <div className="mx-auto max-w-7xl px-6 py-12">

          {/* Cadre centré */}
          <div style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '24px',
            border: '1.5px solid rgba(252,235,48,0.55)',
            background: '#ffffff',
            boxShadow: '0 0 48px rgba(252,235,48,0.22), 0 0 16px rgba(252,235,48,0.12), 0 8px 32px rgba(38,77,140,0.07)',
            padding: '36px 40px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '32px',
            flexWrap: 'wrap',
          }}>

            {/* Halo jaune interne */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse 70% 180% at 40% 50%, rgba(252,235,48,0.13) 0%, transparent 65%)',
              pointerEvents: 'none',
            }} />

            {/* Liseré jaune haut du cadre */}
            <div style={{
              position: 'absolute', top: 0, left: '10%', right: '10%',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, rgba(252,235,48,0.90) 40%, rgba(252,235,48,1) 50%, rgba(252,235,48,0.90) 60%, transparent)',
              borderRadius: '2px',
            }} />

            {/* Icône + texte */}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '20px', flex: '1 1 300px' }}>
              <div style={{
                flexShrink: 0,
                width: '58px', height: '58px',
                borderRadius: '15px',
                background: 'rgba(252,235,48,0.14)',
                border: '1.5px solid rgba(252,235,48,0.55)',
                boxShadow: '0 0 20px rgba(252,235,48,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="#264d8c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="14,2 14,8 20,8" stroke="#264d8c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="9" y1="13" x2="15" y2="13" stroke="#264d8c" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="9" y1="17" x2="13" y2="17" stroke="#264d8c" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>

              <div>
                <span style={{
                  display: 'inline-block',
                  fontFamily: inter.style.fontFamily,
                  fontWeight: 700,
                  fontSize: '10px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#264d8c',
                  background: 'rgba(252,235,48,0.40)',
                  border: '1px solid rgba(252,235,48,0.75)',
                  borderRadius: '5px',
                  padding: '2px 9px',
                  marginBottom: '8px',
                  boxShadow: '0 0 8px rgba(252,235,48,0.20)',
                }}>
                  Gratuit
                </span>
                <p style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: 700,
                  fontSize: '19px',
                  lineHeight: '1.3',
                  color: '#0f1e48',
                }}>
                  Les 7 points à vérifier en priorité pour améliorer votre visibilité locale sur Google
                </p>
                <p style={{
                  fontFamily: inter.style.fontFamily,
                  fontWeight: 400,
                  fontSize: '13px',
                  color: 'rgba(38,77,140,0.50)',
                  marginTop: '5px',
                }}>
                  Téléchargeable en 1 clic, professionnels de l&apos;habitat
                </p>
              </div>
            </div>

            {/* Bouton */}
            <a
              href="/#guide"
              style={{
                position: 'relative',
                fontFamily: inter.style.fontFamily,
                fontWeight: 700,
                fontSize: '14px',
                background: 'linear-gradient(135deg, #fceb30 0%, #f5d800 100%)',
                color: '#0f1e48',
                borderRadius: '9999px',
                padding: '13px 30px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                boxShadow: '0 0 28px rgba(252,235,48,0.50), 0 4px 16px rgba(252,235,48,0.28)',
                border: '1.5px solid rgba(252,235,48,0.85)',
                transition: 'transform 0.15s, box-shadow 0.15s',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                flexShrink: 0,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 0 48px rgba(252,235,48,0.70), 0 8px 28px rgba(252,235,48,0.40)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 0 28px rgba(252,235,48,0.50), 0 4px 16px rgba(252,235,48,0.28)';
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="#0f1e48" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="7,10 12,15 17,10" stroke="#0f1e48" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="12" y1="15" x2="12" y2="3" stroke="#0f1e48" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
              Télécharger le guide
            </a>

          </div>
        </div>
      </section>
    </>
  );
}
