import Image from 'next/image';
import { inter } from '@/lib/fonts';

function DarkBar({ width, height = 13 }: { width: number; height?: number }) {
  return (
    <span style={{ display: 'inline-block', width, height, background: 'rgba(255,255,255,0.16)', borderRadius: 3, verticalAlign: 'middle' }} />
  );
}

function LightBar({ width, height = 13 }: { width: number; height?: number }) {
  return (
    <span style={{ display: 'inline-block', width, height, background: '#e0dede', borderRadius: 3, verticalAlign: 'middle' }} />
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 0' }}>{children}</div>;
}

function Score({ value, label, color, bg, border }: { value: string; label: string; color: string; bg: string; border: string }) {
  return (
    <div style={{ position: 'absolute', top: 12, right: 14, background: bg, border: `1px solid ${border}`, borderRadius: 20, padding: '4px 12px', display: 'flex', alignItems: 'center', gap: 6 }}>
      <span style={{ fontFamily: 'Satoshi, sans-serif', fontSize: 15, fontWeight: 700, color, lineHeight: 1 }}>{value}</span>
      <span style={{ fontFamily: inter.style.fontFamily, fontSize: 9, fontWeight: 700, color, opacity: 0.7, letterSpacing: '1.2px', textTransform: 'uppercase' }}>{label}</span>
    </div>
  );
}

/* ── Icônes ── */
const PinIcon = ({ color = '#9aa0a6' }) => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="none" stroke={color} strokeWidth="1.6"/>
    <circle cx="12" cy="9" r="3" fill="none" stroke={color} strokeWidth="1.6"/>
  </svg>
);
const ClockIcon = ({ color = '#9aa0a6' }) => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.6"/>
    <path d="M12 7v5l3 3" stroke={color} strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);
const PhoneIcon = ({ color = '#9aa0a6' }) => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill={color} style={{ flexShrink: 0 }}>
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);
const GlobeIcon = ({ color = '#9aa0a6' }) => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.6"/>
    <line x1="12" y1="3" x2="12" y2="21" stroke={color} strokeWidth="1"/>
    <line x1="3.5" y1="9" x2="20.5" y2="9" stroke={color} strokeWidth="1"/>
    <line x1="3.5" y1="15" x2="20.5" y2="15" stroke={color} strokeWidth="1"/>
    <path d="M12 3 C8.5 8 8.5 16 12 21" stroke={color} strokeWidth="1" fill="none"/>
    <path d="M12 3 C15.5 8 15.5 16 12 21" stroke={color} strokeWidth="1" fill="none"/>
  </svg>
);

export default function GBPComparison() {
  const sep = <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', margin: '10px 0' }} />;
  const sepLight = <div style={{ height: 1, background: '#e8eaed', margin: '10px 0' }} />;

  return (
    <div className="overflow-hidden rounded-2xl" style={{ border: '1px solid rgba(255,255,255,0.13)' }}>

      {/* ════ AVANT ════ */}
      <div style={{ display: 'flex', background: 'linear-gradient(135deg, #162248 0%, #1e3470 100%)' }}>

        {/* 1 photo AVANT */}
        <div style={{ width: '36%', minHeight: 185, flexShrink: 0, position: 'relative', borderRight: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
          <Image src="/deco-chambre.webp" alt="Chambre avant optimisation" fill sizes="(max-width: 768px) 40vw, 260px" style={{ objectFit: 'cover', filter: 'brightness(0.55) saturate(0.7)' }}/>
          <span style={{ position: 'absolute', bottom: 8, left: 8, fontFamily: inter.style.fontFamily, fontSize: 10, color: 'rgba(255,255,255,0.55)', background: 'rgba(0,0,0,0.45)', borderRadius: 4, padding: '2px 6px' }}>1 photo · 1/10</span>
        </div>

        {/* Infos AVANT */}
        <div style={{ flex: 1, padding: '16px 18px 16px 20px', position: 'relative' }}>
          <Score value="2/10" label="avant" color="#ef4444" bg="rgba(220,38,38,0.15)" border="rgba(220,38,38,0.35)"/>

          <div style={{ marginBottom: 5 }}><DarkBar width={190} height={17}/></div>

          <p style={{ fontFamily: inter.style.fontFamily, fontSize: 11, color: 'rgba(255,255,255,0.45)', marginBottom: 9 }}>
            Architecte d&apos;intérieur
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 10 }}>
            <span style={{ color: '#fbbc04', fontSize: 13, letterSpacing: -1 }}>★★★</span>
            <span style={{ color: 'rgba(255,255,255,0.20)', fontSize: 13, letterSpacing: -1 }}>★★</span>
            <span style={{ fontFamily: inter.style.fontFamily, fontSize: 11, color: 'rgba(255,255,255,0.45)', marginLeft: 3 }}>3,2 · 8 avis</span>
          </div>

          {sep}

          <Row><PinIcon color="rgba(255,255,255,0.30)"/><DarkBar width={150}/></Row>
          <Row><ClockIcon color="#f87171"/><span style={{ fontFamily: inter.style.fontFamily, fontSize: 11.5, color: '#f87171' }}>Horaires non renseignés</span></Row>
          <Row><PhoneIcon color="rgba(255,255,255,0.20)"/><span style={{ fontFamily: inter.style.fontFamily, fontSize: 11.5, color: 'rgba(255,255,255,0.28)' }}>Non renseigné</span></Row>
          <Row><GlobeIcon color="rgba(255,255,255,0.20)"/><span style={{ fontFamily: inter.style.fontFamily, fontSize: 11.5, color: 'rgba(255,255,255,0.28)' }}>Aucun site web</span></Row>
        </div>
      </div>

      {/* ── Séparateur ── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0 20px', background: '#f1f3f4' }}>
        <div style={{ flex: 1, height: 1, background: '#d0d4dc' }}/>
        <span style={{ fontFamily: inter.style.fontFamily, fontSize: 9, fontWeight: 700, color: '#16a34a', letterSpacing: '1.5px', textTransform: 'uppercase', padding: '5px 0', whiteSpace: 'nowrap' }}>
          APRÈS OPTIMISATION ↓
        </span>
        <div style={{ flex: 1, height: 1, background: '#d0d4dc' }}/>
      </div>

      {/* ════ APRÈS ════ */}
      <div style={{ display: 'flex', background: '#ffffff' }}>

        {/* Grille 3 photos */}
        <div style={{ width: '36%', flexShrink: 0, display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 2, minHeight: 200 }}>
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image src="/deco-salon.webp" alt="Salon décoré" fill sizes="(max-width: 768px) 27vw, 175px" style={{ objectFit: 'cover' }}/>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <div style={{ position: 'relative', width: '100%', flex: 1, minHeight: 0 }}>
              <Image src="/deco-cuisine.webp" alt="Cuisine" fill sizes="(max-width: 768px) 13vw, 85px" style={{ objectFit: 'cover' }}/>
            </div>
            <div style={{ position: 'relative', width: '100%', flex: 1, minHeight: 0 }}>
              <Image src="/deco-chambre.webp" alt="Chambre" fill sizes="(max-width: 768px) 13vw, 85px" style={{ objectFit: 'cover' }}/>
            </div>
          </div>
        </div>

        {/* Infos APRÈS */}
        <div style={{ flex: 1, padding: '16px 18px 16px 20px', borderLeft: '1px solid #e8eaed', position: 'relative' }}>
          <Score value="9/10" label="après" color="#16a34a" bg="rgba(22,163,74,0.08)" border="rgba(22,163,74,0.30)"/>

          <div style={{ marginBottom: 5 }}><LightBar width={190} height={17}/></div>

          <p style={{ fontFamily: inter.style.fontFamily, fontSize: 11, color: '#70757a', marginBottom: 8 }}>
            Architecte d&apos;intérieur
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 10 }}>
            <span style={{ color: '#fbbc04', fontSize: 13, letterSpacing: -1 }}>★★★★★</span>
            <span style={{ fontFamily: inter.style.fontFamily, fontSize: 11.5, color: '#202124', fontWeight: 600, marginLeft: 3 }}>4,9</span>
            <span style={{ fontFamily: inter.style.fontFamily, fontSize: 11, color: '#70757a' }}>· 47 avis · Google</span>
          </div>

          {sepLight}

          <Row><PinIcon color="#5f6368"/><LightBar width={155}/></Row>
          <Row>
            <ClockIcon color="#1a7340"/>
            <span style={{ fontFamily: inter.style.fontFamily, fontSize: 11.5, color: '#1a7340', fontWeight: 600 }}>Ouvert</span>
            <span style={{ fontFamily: inter.style.fontFamily, fontSize: 11.5, color: '#70757a' }}>· Ferme à 18h00</span>
          </Row>
          <Row><PhoneIcon color="#5f6368"/><LightBar width={118}/></Row>
          <Row><GlobeIcon color="#1558d6"/><LightBar width={95}/></Row>
        </div>
      </div>

      {/* Légende */}
      <div style={{ padding: '9px 18px', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <p style={{ fontFamily: inter.style.fontFamily, fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>
          Exemple anonymisé · Fiche Google Business Profile architecte d&apos;intérieur — avant et après optimisation
        </p>
      </div>

    </div>
  );
}
