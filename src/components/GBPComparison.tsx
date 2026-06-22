import { inter } from '@/lib/fonts';

function BlurBar({ width, height = 13 }: { width: number; height?: number }) {
  return (
    <span style={{
      display: 'inline-block',
      width: `${width}px`,
      height: `${height}px`,
      background: '#dddcdc',
      borderRadius: '3px',
      verticalAlign: 'middle',
    }} />
  );
}

export default function GBPComparison() {
  return (
    <div className="overflow-hidden rounded-2xl h-full" style={{ border: '1px solid rgba(255,255,255,0.13)' }}>

      {/* Scores AVANT / APRÈS */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ padding: '12px 16px', textAlign: 'center', background: 'rgba(220,38,38,0.07)', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
          <p style={{ fontFamily: inter.style.fontFamily, fontSize: '9px', color: 'rgba(220,38,38,0.85)', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '3px' }}>AVANT</p>
          <p style={{ fontFamily: 'Satoshi, sans-serif', fontSize: '26px', fontWeight: 700, color: '#dc2626', lineHeight: 1 }}>
            2<span style={{ fontSize: '13px', color: 'rgba(220,38,38,0.45)', fontWeight: 400 }}>/10</span>
          </p>
          <p style={{ fontFamily: inter.style.fontFamily, fontSize: '10px', color: 'rgba(255,255,255,0.28)', marginTop: '3px' }}>6 points bloquants</p>
        </div>
        <div style={{ padding: '12px 16px', textAlign: 'center', background: 'rgba(22,163,74,0.07)' }}>
          <p style={{ fontFamily: inter.style.fontFamily, fontSize: '9px', color: 'rgba(22,163,74,0.90)', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '3px' }}>APRÈS</p>
          <p style={{ fontFamily: 'Satoshi, sans-serif', fontSize: '26px', fontWeight: 700, color: '#16a34a', lineHeight: 1 }}>
            9<span style={{ fontSize: '13px', color: 'rgba(22,163,74,0.45)', fontWeight: 400 }}>/10</span>
          </p>
          <p style={{ fontFamily: inter.style.fontFamily, fontSize: '10px', color: 'rgba(255,255,255,0.28)', marginTop: '3px' }}>Fiche optimisée</p>
        </div>
      </div>

      {/* Fiche GBP (état APRÈS) */}
      <div style={{ background: '#ffffff' }}>

        {/* Grille photos */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2px', height: '148px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/deco-salon.jpg"
            alt="Salon après aménagement intérieur"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/deco-cuisine.jpg"
              alt="Cuisine rénovée"
              style={{ width: '100%', flex: 1, objectFit: 'cover', display: 'block', minHeight: 0 }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/deco-chambre.jpg"
              alt="Chambre décorée"
              style={{ width: '100%', flex: 1, objectFit: 'cover', display: 'block', minHeight: 0 }}
            />
          </div>
        </div>

        {/* Infos fiche */}
        <div style={{ padding: '14px 16px' }}>

          {/* Nom — flouté */}
          <div style={{ marginBottom: '5px' }}>
            <BlurBar width={190} height={17} />
          </div>

          {/* Catégorie */}
          <p style={{ fontFamily: inter.style.fontFamily, fontSize: '12px', color: '#70757a', marginBottom: '8px' }}>
            Architecte d&apos;intérieur
          </p>

          {/* Étoiles */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '10px' }}>
            <span style={{ color: '#fbbc04', fontSize: '14px', letterSpacing: '-1px' }}>★★★★★</span>
            <span style={{ fontFamily: inter.style.fontFamily, fontSize: '12px', color: '#202124', fontWeight: 600 }}>4,9</span>
            <span style={{ fontFamily: inter.style.fontFamily, fontSize: '12px', color: '#70757a' }}>· 47 avis · Google</span>
          </div>

          <div style={{ height: '1px', background: '#e8eaed', margin: '10px 0' }} />

          {/* Adresse — floutée */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 0' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="none" stroke="#5f6368" strokeWidth="1.5"/>
              <circle cx="12" cy="9" r="3" fill="none" stroke="#5f6368" strokeWidth="1.5"/>
            </svg>
            <BlurBar width={155} />
          </div>

          {/* Horaires — visible */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 0' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
              <circle cx="12" cy="12" r="9" stroke="#5f6368" strokeWidth="1.5"/>
              <path d="M12 7v5l3 3" stroke="#5f6368" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span style={{ fontFamily: inter.style.fontFamily, fontSize: '12px', color: '#1a7340', fontWeight: 600 }}>Ouvert</span>
            <span style={{ fontFamily: inter.style.fontFamily, fontSize: '12px', color: '#70757a' }}>· Ferme à 18h00</span>
          </div>

          {/* Téléphone — flouté */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 0' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#5f6368" style={{ flexShrink: 0 }}>
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <BlurBar width={118} />
          </div>

          {/* Site web — flouté */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 0' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
              <circle cx="12" cy="12" r="9" stroke="#5f6368" strokeWidth="1.5"/>
              <line x1="12" y1="3" x2="12" y2="21" stroke="#5f6368" strokeWidth="1"/>
              <line x1="3.5" y1="9" x2="20.5" y2="9" stroke="#5f6368" strokeWidth="1"/>
              <line x1="3.5" y1="15" x2="20.5" y2="15" stroke="#5f6368" strokeWidth="1"/>
              <path d="M12 3 C8.5 8 8.5 16 12 21" stroke="#5f6368" strokeWidth="1" fill="none"/>
              <path d="M12 3 C15.5 8 15.5 16 12 21" stroke="#5f6368" strokeWidth="1" fill="none"/>
            </svg>
            <BlurBar width={98} />
          </div>

        </div>
      </div>

      {/* Légende */}
      <div style={{ padding: '10px 16px', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <p style={{ fontFamily: inter.style.fontFamily, fontSize: '11px', color: 'rgba(255,255,255,0.38)' }}>
          Exemple anonymisé · Fiche architecte d&apos;intérieur après optimisation
        </p>
      </div>

    </div>
  );
}
