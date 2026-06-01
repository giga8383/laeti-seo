export default function OffreHeroIllustration() {
  return (
    <div className="relative w-full select-none" style={{ height: '420px' }}>

      {/* ── Grille de fond façon map ── */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 480 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Grid lines */}
        {Array.from({ length: 10 }).map((_, i) => (
          <line
            key={`v${i}`}
            x1={i * 53} y1="0" x2={i * 53} y2="420"
            stroke="rgba(255,255,255,0.04)" strokeWidth="1"
          />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <line
            key={`h${i}`}
            x1="0" y1={i * 53} x2="480" y2={i * 53}
            stroke="rgba(255,255,255,0.04)" strokeWidth="1"
          />
        ))}

        {/* Routes stylisées */}
        <path d="M0 210 Q120 190 240 215 Q360 240 480 210" stroke="rgba(255,255,255,0.07)" strokeWidth="8" fill="none" strokeLinecap="round" />
        <path d="M160 0 Q175 105 165 210 Q155 315 170 420" stroke="rgba(255,255,255,0.07)" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M320 0 Q335 140 310 280 Q295 360 330 420" stroke="rgba(255,255,255,0.05)" strokeWidth="5" fill="none" strokeLinecap="round" />

        {/* Zone de chaleur / halo */}
        <circle cx="240" cy="210" r="100" fill="rgba(252,235,48,0.04)" />
        <circle cx="240" cy="210" r="60" fill="rgba(252,235,48,0.06)" />
      </svg>

      {/* ── Carte principale : fiche Google Business ── */}
      <div
        className="absolute"
        style={{
          top: '32px', left: '50%', transform: 'translateX(-50%)',
          width: '320px',
          borderRadius: '16px',
          background: 'rgba(255,255,255,0.07)',
          border: '1px solid rgba(255,255,255,0.12)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.10), 0 20px 60px -12px rgba(0,0,0,0.3)',
          padding: '16px',
        }}
      >
        {/* Header fiche */}
        <div className="flex items-start gap-3 mb-3">
          {/* Photo miniature */}
          <div style={{
            width: '44px', height: '44px', borderRadius: '10px', flexShrink: 0,
            background: 'linear-gradient(135deg, rgba(252,235,48,0.25), rgba(252,235,48,0.08))',
            border: '1px solid rgba(252,235,48,0.20)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="#fceb30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 22V12h6v10" stroke="#fceb30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            {/* Nom */}
            <div style={{ height: '10px', width: '140px', borderRadius: '4px', background: 'rgba(255,255,255,0.55)', marginBottom: '6px' }} />
            {/* Catégorie */}
            <div style={{ height: '8px', width: '90px', borderRadius: '4px', background: 'rgba(255,255,255,0.20)' }} />
          </div>
        </div>

        {/* Étoiles + avis */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(i => (
              <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill={i <= 4 ? '#fceb30' : 'rgba(255,255,255,0.2)'}>
                <path d="M6 1l1.35 2.73L10.5 4.2l-2.25 2.19.53 3.1L6 8l-2.78 1.5.53-3.1L1.5 4.2l3.15-.47L6 1z"/>
              </svg>
            ))}
          </div>
          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter, sans-serif' }}>4.8 · 47 avis</span>
          <span style={{
            marginLeft: 'auto', fontSize: '10px', fontWeight: 600,
            color: '#fceb30', background: 'rgba(252,235,48,0.12)',
            border: '1px solid rgba(252,235,48,0.25)',
            padding: '2px 8px', borderRadius: '999px', fontFamily: 'Inter, sans-serif',
          }}>Ouvert</span>
        </div>

        {/* Ligne position */}
        <div className="flex items-center gap-2 mb-3">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="rgba(252,235,48,0.6)"/>
          </svg>
          <div style={{ height: '8px', width: '160px', borderRadius: '4px', background: 'rgba(255,255,255,0.18)' }} />
        </div>

        {/* Barre de séparation */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', marginBottom: '12px' }} />

        {/* Badge #1 */}
        <div className="flex items-center gap-2">
          <div style={{
            display: 'flex', alignItems: 'center', gap: '5px',
            background: 'rgba(252,235,48,0.12)', border: '1px solid rgba(252,235,48,0.22)',
            borderRadius: '8px', padding: '5px 10px',
          }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="#fceb30">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span style={{ fontSize: '10px', fontWeight: 700, color: '#fceb30', fontFamily: 'Inter, sans-serif' }}>#1 sur Google Maps</span>
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '5px',
            background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)',
            borderRadius: '8px', padding: '5px 10px',
          }}>
            <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.45)', fontFamily: 'Inter, sans-serif' }}>Votre secteur</span>
          </div>
        </div>
      </div>

      {/* ── Pin principal (le vôtre) ── */}
      <div className="absolute" style={{ top: '220px', left: '50%', transform: 'translateX(-50%)' }}>
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '50% 50% 50% 0',
            transform: 'rotate(-45deg)',
            background: '#fceb30',
            boxShadow: '0 0 0 4px rgba(252,235,48,0.25), 0 0 20px rgba(252,235,48,0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ transform: 'rotate(45deg)', width: '10px', height: '10px', borderRadius: '50%', background: '#264d8c' }} />
          </div>
          <div style={{ width: '2px', height: '12px', background: 'rgba(252,235,48,0.4)', marginTop: '2px' }} />
        </div>
      </div>

      {/* ── Petits pins concurrents ── */}
      {[
        { top: '195px', left: '25%', opacity: 0.3 },
        { top: '260px', left: '72%', opacity: 0.25 },
        { top: '175px', left: '68%', opacity: 0.2 },
      ].map((pin, i) => (
        <div key={i} className="absolute" style={{ top: pin.top, left: pin.left, opacity: pin.opacity }}>
          <div style={{
            width: '18px', height: '18px', borderRadius: '50% 50% 50% 0',
            transform: 'rotate(-45deg)',
            background: 'rgba(255,255,255,0.6)',
          }} />
        </div>
      ))}

      {/* ── Petite card flottante "Avant" ── */}
      <div
        className="absolute"
        style={{
          bottom: '24px', left: '16px',
          borderRadius: '12px',
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.10)',
          backdropFilter: 'blur(10px)',
          padding: '10px 14px',
          width: '140px',
        }}
      >
        <p style={{ fontSize: '9px', color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter, sans-serif', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Avant diagnostic</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,100,100,0.7)' }} />
          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', fontFamily: 'Inter, sans-serif' }}>Position #9</span>
        </div>
      </div>

      {/* ── Petite card flottante "Après" ── */}
      <div
        className="absolute"
        style={{
          bottom: '24px', right: '16px',
          borderRadius: '12px',
          background: 'rgba(252,235,48,0.08)',
          border: '1px solid rgba(252,235,48,0.22)',
          backdropFilter: 'blur(10px)',
          padding: '10px 14px',
          width: '140px',
          boxShadow: '0 8px 24px -6px rgba(252,235,48,0.15)',
        }}
      >
        <p style={{ fontSize: '9px', color: 'rgba(252,235,48,0.6)', fontFamily: 'Inter, sans-serif', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Après sprint</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fceb30' }} />
          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.80)', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>Position #1</span>
        </div>
      </div>

    </div>
  );
}
