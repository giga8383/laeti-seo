import { MagnifyingGlass, Package, Rocket, ChartLineUp } from '@phosphor-icons/react/dist/ssr';
import ScrollReveal from './ScrollReveal';
import { inter } from '@/lib/fonts';

const diag = {
  analyzed: [
    'Votre fiche Google Business Profile',
    'Votre visibilité sur Google Maps',
    'Vos avis clients et signaux de confiance',
    'Votre site web sur les points qui freinent votre visibilité locale',
    'Vos concurrents directs dans votre secteur géographique',
    'Les opportunités concrètes à activer en priorité',
  ],
  received: [
    'Un diagnostic clair de votre situation actuelle',
    "Les blocages qui vous empêchent d'être mieux visible",
    'Une lecture simple de ce que vos concurrents font mieux',
    "Un plan d'action priorisé sur 30 jours",
    'Des recommandations classées par impact et urgence',
  ],
};

const sprint = {
  included: [
    'Diagnostic visibilité complet (point de départ inclus)',
    'Optimisation complète de votre fiche Google Business Profile',
    'Stratégie avis clients sur-mesure',
    '2 Google Posts par mois rédigés et publiés',
    'Cohérence locale : zone, services, messages, catégories',
    'Suivi de vos concurrents dans votre zone',
  ],
  received: [
    'Rapport mensuel clair sur vos avancées',
    'Appel de suivi mensuel pour ajuster le cap (30 min, une fois par mois)',
    'Corrections actionnées, pas seulement listées',
    'Présence locale structurée et active sur 3 mois',
    'Visibilité que Google comprend enfin qui vous êtes',
  ],
};

function OfferCard({
  icon: Icon,
  iconBg,
  iconColor,
  title,
  items,
}: {
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  title: string;
  items: string[];
}) {
  return (
    <div
      className="h-full rounded-2xl p-6"
      style={{
        background: 'rgba(255,255,255,0.70)',
        border: '1px solid rgba(35,85,182,0.12)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.9)',
      }}
    >
      <div className="mb-4 flex items-center gap-3">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
          style={{ background: iconBg }}
        >
          <Icon size={17} weight="bold" style={{ color: iconColor }} />
        </span>
        <h4
          className="font-semibold"
          style={{ fontFamily: inter.style.fontFamily, color: '#1e3a6e' }}
        >
          {title}
        </h4>
      </div>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-3 leading-relaxed"
            style={{
              fontFamily: inter.style.fontFamily,
              fontSize: '14px',
              lineHeight: '22px',
              color: '#3262ab',
              opacity: 0.85,
            }}
          >
            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: iconColor, opacity: 0.7 }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ══════════════════════════════════════════
   Déco habitat — silhouettes de meubles, plante, lampe, motifs architecturaux
   pointer-events-none, positionnés en absolute autour des cartes
   ══════════════════════════════════════════ */
function OfferHabitatAccents() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">

      {/* ── Fauteuil scandinave — coin bas gauche ── */}
      <svg
        className="absolute hidden md:block"
        style={{ bottom: '5%', left: '1.5%', opacity: 0.30 }}
        width="150" height="135" viewBox="0 0 120 110" fill="none"
      >
        {/* Dossier */}
        <path d="M25 60 Q25 25 50 22 Q75 20 95 28 Q97 45 92 65" stroke="#2355b6" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        {/* Assise */}
        <path d="M22 62 Q22 70 30 72 L88 72 Q96 70 96 62" stroke="#2355b6" strokeWidth="1.4" fill="none" />
        <line x1="22" y1="62" x2="96" y2="62" stroke="#2355b6" strokeWidth="1.2" />
        {/* Coussin */}
        <path d="M30 60 Q30 50 40 50 L78 50 Q88 50 88 60" stroke="#2355b6" strokeWidth="0.9" fill="none" opacity="0.6" />
        {/* Pieds en bois */}
        <line x1="30" y1="72" x2="22" y2="98" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="88" y1="72" x2="96" y2="98" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="45" y1="72" x2="42" y2="95" stroke="#92400e" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
        <line x1="75" y1="72" x2="78" y2="95" stroke="#92400e" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      </svg>

      {/* ── Plante monstera grand format — bord droit, bas ── */}
      <svg
        className="absolute hidden md:block"
        style={{ bottom: '5%', right: '1.5%', opacity: 0.32 }}
        width="110" height="160" viewBox="0 0 70 110" fill="none"
      >
        {/* Feuilles élargies */}
        <path d="M35 70 Q12 58 5 32 Q22 36 30 56" stroke="#65a30d" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        <path d="M35 70 Q58 58 65 32 Q48 36 40 56" stroke="#65a30d" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        <path d="M35 70 Q35 38 30 12 Q42 18 38 48" stroke="#65a30d" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        <path d="M35 70 Q20 48 10 20" stroke="#65a30d" strokeWidth="1.1" fill="none" opacity="0.75" />
        <path d="M35 70 Q50 48 60 20" stroke="#65a30d" strokeWidth="1.1" fill="none" opacity="0.75" />
        {/* Pot terre cuite */}
        <path d="M22 70 L48 70 L44 100 L26 100 Z" stroke="#b45309" strokeWidth="1.7" fill="none" strokeLinejoin="round" />
        <line x1="23" y1="78" x2="47" y2="78" stroke="#b45309" strokeWidth="1" opacity="0.75" />
      </svg>

      {/* ══════════════════════════════════════════
          LUMINAIRE SUSPENDU — style esquisse marker/encre
          Drum dense hachuré + halo jaune marker
      ══════════════════════════════════════════ */}

      {/* ── Halo lumineux glowy doux qui éclaire vers le bas ── */}

      {/* Couche 1 — halo large très diffus (ambiance) */}
      <div
        className="absolute"
        style={{
          top: '140px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1200px',
          height: '760px',
          maxWidth: '95vw',
          background:
            'radial-gradient(ellipse 55% 70% at 50% 0%, rgba(252,235,48,0.22) 0%, rgba(252,220,40,0.12) 25%, rgba(252,200,40,0.05) 50%, transparent 75%)',
          filter: 'blur(30px)',
          pointerEvents: 'none',
        }}
      />

      {/* Couche 2 — cœur du halo (plus intense, proche de la lampe) */}
      <div
        className="absolute"
        style={{
          top: '160px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '450px',
          maxWidth: '90vw',
          background:
            'radial-gradient(ellipse 50% 60% at 50% 0%, rgba(254,243,199,0.55) 0%, rgba(252,235,48,0.30) 20%, rgba(252,200,40,0.12) 50%, transparent 80%)',
          filter: 'blur(20px)',
          pointerEvents: 'none',
        }}
      />

      {/* Couche 3 — point d'intensité juste sous l'ampoule */}
      <div
        className="absolute"
        style={{
          top: '155px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '300px',
          height: '200px',
          background:
            'radial-gradient(ellipse 50% 60% at 50% 0%, rgba(254,243,199,0.55) 0%, rgba(252,235,48,0.20) 40%, transparent 80%)',
          filter: 'blur(12px)',
          pointerEvents: 'none',
        }}
      />

      {/* Luminaire drum — style esquisse encre, hachures denses */}
      <svg
        className="absolute"
        style={{ top: '0%', left: '50%', transform: 'translateX(-50%)' }}
        width="280" height="220" viewBox="0 0 280 220" fill="none"
      >
        {/* ── Câble ── */}
        <line x1="140" y1="0" x2="140" y2="58"
          stroke="#0a1a2e" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="141.3" y1="2" x2="141.3" y2="56"
          stroke="#0a1a2e" strokeWidth="0.6" opacity="0.5" />

        {/* ── Bandeau supérieur — hachures sans fond solide ── */}
        {Array.from({ length: 32 }).map((_, i) => {
          const seed = ((Math.sin((i + 5) * 73.1) * 10000) % 1 + 1) % 1;
          const x = 84 + i * 1.8;
          return (
            <line key={`top-${i}`}
              x1={x + seed * 1.5} y1={53 + seed * 3}
              x2={x - 2 + seed * 3} y2={67 - seed * 2}
              stroke="#1e3a6e" strokeWidth={0.55 + seed * 0.4}
              opacity={0.65 + seed * 0.30} strokeLinecap="round" />
          );
        })}
        {/* Quelques croisements sur le bandeau */}
        {Array.from({ length: 14 }).map((_, i) => {
          const seed = ((Math.sin((i + 30) * 41.7) * 10000) % 1 + 1) % 1;
          const x = 86 + i * 4 + seed * 2;
          return (
            <line key={`tc-${i}`}
              x1={x} y1={56 + seed * 4}
              x2={x + 5 + seed * 4} y2={64 - seed * 2}
              stroke="#0a1a2e" strokeWidth="0.45" opacity="0.6" strokeLinecap="round" />
          );
        })}

        {/* ── Très léger fond pour donner volume sans masquer le sketch ── */}
        <path
          d="M78 60 Q75 95 80 134 L200 134 Q205 95 202 60 Z"
          fill="#1e3a6e" opacity="0.10"
        />

        {/* ── HACHURES VERTICALES principales (corps) ── */}
        {Array.from({ length: 130 }).map((_, i) => {
          const seed1 = ((Math.sin((i + 1) * 12.9898) * 43758.5453) % 1 + 1) % 1;
          const seed2 = ((Math.sin((i + 1) * 78.233) * 43758.5453) % 1 + 1) % 1;
          const seed3 = ((Math.sin((i + 1) * 39.7411) * 43758.5453) % 1 + 1) % 1;
          const x1 = 80 + seed1 * 122;
          const y1 = 62 + seed2 * 70;
          const len = 8 + seed3 * 22;
          const angle = -100 + seed3 * 32;
          const rad = (angle * Math.PI) / 180;
          const x2 = x1 + len * Math.cos(rad);
          const y2 = y1 + len * Math.sin(rad);
          // Mélange de couleurs pour donner profondeur
          const colors = ['#0a1a2e', '#1e3a6e', '#142036', '#0a1a2e'];
          const color = colors[i % 4];
          return (
            <line key={`h-${i}`}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke={color}
              strokeWidth={0.5 + seed2 * 0.6}
              opacity={0.55 + seed1 * 0.35}
              strokeLinecap="round"
            />
          );
        })}

        {/* ── Hachures diagonales croisées (couche moins dense) ── */}
        {Array.from({ length: 50 }).map((_, i) => {
          const seed1 = ((Math.sin((i + 50) * 22.4) * 43758.5453) % 1 + 1) % 1;
          const seed2 = ((Math.sin((i + 50) * 91.2) * 43758.5453) % 1 + 1) % 1;
          const x1 = 82 + seed1 * 118;
          const y1 = 64 + seed2 * 66;
          const len = 10 + seed2 * 16;
          const angle = -50 + seed1 * 25;
          const rad = (angle * Math.PI) / 180;
          return (
            <line key={`d-${i}`}
              x1={x1} y1={y1}
              x2={x1 + len * Math.cos(rad)} y2={y1 + len * Math.sin(rad)}
              stroke={i % 2 === 0 ? '#1e3a6e' : '#0a1a2e'}
              strokeWidth={0.4 + seed2 * 0.3} opacity={0.45 + seed1 * 0.3}
              strokeLinecap="round"
            />
          );
        })}

        {/* ── Boucles de griffonnage (style "stylo qui revient") ── */}
        {Array.from({ length: 18 }).map((_, i) => {
          const seed1 = ((Math.sin((i + 300) * 31.7) * 43758.5453) % 1 + 1) % 1;
          const seed2 = ((Math.sin((i + 300) * 17.4) * 43758.5453) % 1 + 1) % 1;
          const cx = 90 + i * 7 + seed1 * 4;
          const cy = 75 + seed2 * 50;
          const w = 4 + seed1 * 3;
          const h = 8 + seed2 * 4;
          return (
            <path key={`s-${i}`}
              d={`M${cx} ${cy} q${w} ${-h} ${w * 2} 0 q${-w} ${h} ${-w * 2} 0`}
              stroke="#0a1a2e" strokeWidth="0.6" fill="none"
              opacity={0.55 + seed1 * 0.30} strokeLinecap="round"
            />
          );
        })}

        {/* ── Quelques zébrures plus longues qui traversent ── */}
        {Array.from({ length: 18 }).map((_, i) => {
          const seed = ((Math.sin((i + 200) * 55.7) * 43758.5453) % 1 + 1) % 1;
          const x = 86 + i * 6 + seed * 3;
          return (
            <line key={`z-${i}`}
              x1={x} y1={64 + seed * 4}
              x2={x - 5 + seed * 10} y2={128 - seed * 5}
              stroke="#1e3a6e" strokeWidth={0.55 + seed * 0.35}
              opacity={0.55 + seed * 0.25} strokeLinecap="round"
            />
          );
        })}

        {/* ── Contour droit et gauche du drum (renfort encre, plus fin) ── */}
        <path d="M78 60 Q75 95 80 134"
          stroke="#0a1a2e" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M202 60 Q205 95 200 134"
          stroke="#0a1a2e" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* Contour fantôme légèrement décalé */}
        <path d="M79 62 Q76 95 81 132"
          stroke="#1e3a6e" strokeWidth="0.7" fill="none" strokeLinecap="round" opacity="0.6" />
        <path d="M201 62 Q204 95 199 132"
          stroke="#1e3a6e" strokeWidth="0.7" fill="none" strokeLinecap="round" opacity="0.6" />

        {/* ── Bord supérieur du drum (ligne d'horizon) ── */}
        <ellipse cx="140" cy="60" rx="62" ry="9.5"
          stroke="#0a1a2e" strokeWidth="1.8" fill="none" />

        {/* ── OUVERTURE INFÉRIEURE — INTÉRIEUR JAUNE VIF ── */}
        {/* Le bowl jaune (lumière) */}
        <ellipse cx="140" cy="138" rx="58" ry="11" fill="#fde047" />
        {/* Légère ombre intérieure profonde */}
        <ellipse cx="140" cy="135" rx="55" ry="9"
          fill="#facc15" opacity="0.65" />
        {/* Cerne du bord intérieur supérieur (arrière de l'ouverture) */}
        <path d="M84 134 Q140 122 196 134"
          stroke="#0a1a2e" strokeWidth="1.4" fill="none" />
        {/* Cerne du bord d'ouverture (encre épaisse) */}
        <ellipse cx="140" cy="138" rx="58" ry="11"
          stroke="#0a1a2e" strokeWidth="2.2" fill="none" />

        {/* ── Petites hachures sous l'ouverture (épaisseur du bord) ── */}
        {Array.from({ length: 20 }).map((_, i) => {
          const x = 86 + i * 5.5;
          const seed = ((Math.sin((i + 100) * 17.3) * 1000) % 1 + 1) % 1;
          return (
            <line key={`bot-${i}`}
              x1={x} y1={148 + seed * 2}
              x2={x - 1 + seed * 2} y2={154 + seed * 2}
              stroke="#0a1a2e" strokeWidth="0.5" opacity="0.55"
              strokeLinecap="round" />
          );
        })}

        {/* ── Quelques griffures de marker jaune au-dessus de l'ouverture (peinture) ── */}
        <line x1="92" y1="142" x2="118" y2="138" stroke="#fbbf24" strokeWidth="1.2" opacity="0.6" strokeLinecap="round" />
        <line x1="125" y1="141" x2="155" y2="137" stroke="#fbbf24" strokeWidth="1.4" opacity="0.7" strokeLinecap="round" />
        <line x1="160" y1="139" x2="188" y2="142" stroke="#fbbf24" strokeWidth="1.2" opacity="0.6" strokeLinecap="round" />
      </svg>


      {/* ── Vase amphore sur table d'appoint — haut droit, entre lampe et bord ── */}
      <svg
        className="absolute hidden lg:block"
        style={{ top: '32%', left: '4%', opacity: 0.26 }}
        width="100" height="140" viewBox="0 0 90 120" fill="none"
      >
        {/* Vase */}
        <path d="M30 38 L60 38 Q60 50 64 60 Q66 70 62 80 L28 80 Q24 70 26 60 Q30 50 30 38 Z"
          stroke="#0ea5e9" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        <line x1="30" y1="38" x2="60" y2="38" stroke="#0ea5e9" strokeWidth="1.2" />
        {/* Branches eucalyptus */}
        <path d="M45 38 Q45 22 52 12" stroke="#65a30d" strokeWidth="1.1" fill="none" strokeLinecap="round" />
        <path d="M45 38 Q42 26 34 16" stroke="#65a30d" strokeWidth="1.1" fill="none" strokeLinecap="round" />
        <path d="M45 38 Q48 28 58 22" stroke="#65a30d" strokeWidth="0.9" fill="none" strokeLinecap="round" opacity="0.85" />
        <ellipse cx="52" cy="12" rx="2.5" ry="4" stroke="#65a30d" strokeWidth="0.9" fill="none" transform="rotate(20 52 12)" />
        <ellipse cx="34" cy="16" rx="2.5" ry="4" stroke="#65a30d" strokeWidth="0.9" fill="none" transform="rotate(-20 34 16)" />
        <ellipse cx="58" cy="22" rx="2" ry="3" stroke="#65a30d" strokeWidth="0.8" fill="none" transform="rotate(40 58 22)" opacity="0.8" />
        {/* Table d'appoint */}
        <line x1="14" y1="82" x2="76" y2="82" stroke="#92400e" strokeWidth="2" strokeLinecap="round" />
        <line x1="22" y1="82" x2="20" y2="112" stroke="#92400e" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="68" y1="82" x2="70" y2="112" stroke="#92400e" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="20" y1="112" x2="70" y2="112" stroke="#92400e" strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
      </svg>

      {/* ── Parquet arête de poisson — bas centre ── */}
      <svg
        className="absolute hidden md:block"
        style={{ bottom: '0%', left: '50%', opacity: 0.22, transform: 'translateX(-50%)' }}
        width="280" height="50" viewBox="0 0 280 50" fill="none"
      >
        {Array.from({ length: 7 }).map((_, col) => (
          <g key={col} transform={`translate(${col * 40}, 0)`}>
            <rect x="2" y="8" width="14" height="22" stroke="#92400e" strokeWidth="1" fill="none" transform="rotate(-45 9 19)" />
            <rect x="20" y="8" width="14" height="22" stroke="#92400e" strokeWidth="1" fill="none" transform="rotate(45 27 19)" />
          </g>
        ))}
      </svg>

    </div>
  );
}

export default function Offer() {
  return (
    <section id="offre" className="relative isolate overflow-hidden bg-white" style={{ scrollMarginTop: '80px' }}>
      <OfferHabitatAccents />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">

        {/* ── header ── */}
        <ScrollReveal>
          <p
            className="mb-4 uppercase tracking-widest"
            style={{
              fontFamily: inter.style.fontFamily,
              fontWeight: 600,
              fontSize: '15px',
              lineHeight: '22px',
              color: '#2355b6',
              textShadow: '0 0 12px rgba(35,85,182,0.5), 0 0 28px rgba(35,85,182,0.25)',
            }}
          >
            Mes offres
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <h2
            className="mb-4 text-4xl font-bold tracking-tight md:text-5xl"
            style={{ fontFamily: 'Satoshi, sans-serif', color: '#1e3a6e' }}
          >
            Deux offres d&apos;accompagnement SEO local
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.14}>
          <p
            className="mb-14 max-w-[55ch]"
            style={{
              fontFamily: 'Inter, "Inter Fallback"',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '26px',
              color: '#3262ab',
              opacity: 0.75,
            }}
          >
            Un diagnostic ponctuel pour comprendre ce qui bloque, ou un
            sprint de trois mois pour corriger, activer et suivre.
          </p>
        </ScrollReveal>

        {/* ── deux offres côte à côte ── */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          {/* ── Offre 1 : Diagnostic — dégradé bleu ciel ── */}
          <ScrollReveal delay={0.18}>
            <div
              className="flex h-full flex-col rounded-[2rem] p-8 md:p-10"
              style={{
                background: 'linear-gradient(155deg, #bae6fd 0%, #e0f2fe 55%, #ffffff 100%)',
                border: '1px solid rgba(125,211,252,0.6)',
                boxShadow:
                  'inset 0 1px 0 rgba(255,255,255,0.80), 0 0 40px -4px rgba(125,211,252,0.40), 0 24px 60px -16px rgba(125,211,252,0.25)',
              }}
            >
              <div className="mb-7">
                <span
                  className="mb-3 inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest"
                  style={{
                    fontFamily: inter.style.fontFamily,
                    background: 'rgba(35,85,182,0.10)',
                    color: '#2355b6',
                    border: '1px solid rgba(35,85,182,0.18)',
                  }}
                >
                  Essentiel
                </span>
                <h3
                  className="text-2xl font-bold"
                  style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, color: '#1e3a6e' }}
                >
                  Diagnostic visibilité
                </h3>
                <p
                  className="mt-1 text-sm"
                  style={{ fontFamily: inter.style.fontFamily, color: '#3262ab', opacity: 0.55 }}
                >
                  190 € · livraison sous 5 jours ouvrés
                </p>
                <p
                  className="mt-4"
                  style={{
                    fontFamily: 'Inter, "Inter Fallback"',
                    fontWeight: 400,
                    fontSize: '15px',
                    lineHeight: '24px',
                    color: '#2c58b0',
                    opacity: 0.80,
                  }}
                >
                  Vous ne savez pas pourquoi vous n&apos;apparaissez pas sur Google ?<br />
                  Le diagnostic répond à cette question en une semaine.<br />
                  J&apos;analyse votre présence, je la compare à vos concurrents, et je vous remets un rapport clair avec les points à corriger, dans l&apos;ordre.
                </p>
              </div>
              <div className="mt-auto grid grid-cols-1 gap-4 sm:grid-cols-2">
                <OfferCard icon={MagnifyingGlass} iconBg="rgba(35,85,182,0.10)" iconColor="#2355b6" title="Ce que j'analyse" items={diag.analyzed} />
                <OfferCard icon={Package} iconBg="rgba(14,165,233,0.12)" iconColor="#0ea5e9" title="Ce que vous recevez" items={diag.received} />
              </div>
            </div>
          </ScrollReveal>

          {/* ── Offre 2 : Sprint — dégradé ambre/jaune ── */}
          <ScrollReveal delay={0.26}>
            <div
              className="relative flex h-full flex-col rounded-[2rem] p-8 md:p-10"
              style={{
                background: 'linear-gradient(155deg, #fde68a 0%, #fef3c7 55%, #ffffff 100%)',
                border: '1px solid rgba(251,191,36,0.55)',
                boxShadow:
                  'inset 0 1px 0 rgba(255,255,255,0.80), 0 0 40px -4px rgba(251,191,36,0.35), 0 24px 60px -16px rgba(251,191,36,0.20)',
              }}
            >
              <div className="mb-7">
                <span
                  className="mb-3 inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest"
                  style={{
                    fontFamily: inter.style.fontFamily,
                    background: '#264d8c',
                    color: '#fceb30',
                  }}
                >
                  Tarif de lancement
                </span>
                <h3
                  className="text-2xl font-bold"
                  style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, color: '#1e3a6e' }}
                >
                  Sprint local 3 mois
                </h3>
                <p
                  className="mt-1 text-sm"
                  style={{ fontFamily: inter.style.fontFamily, color: '#92400e', opacity: 0.65 }}
                >
                  790 € · diagnostic inclus
                </p>
                <p
                  className="mt-4"
                  style={{
                    fontFamily: 'Inter, "Inter Fallback"',
                    fontWeight: 400,
                    fontSize: '15px',
                    lineHeight: '24px',
                    color: '#78350f',
                    opacity: 0.80,
                  }}
                >
                  Le diagnostic est inclus. C&apos;est le point de départ. Ensuite on
                  corrige, on active et on suit : optimisation complète de votre fiche,
                  stratégie avis clients, deux Google Posts par mois, rapport mensuel
                  et un appel de suivi. Trois mois pour que Google sache enfin qui vous
                  êtes et ce que vous faites.
                </p>
              </div>
              <div className="mt-auto grid grid-cols-1 gap-4 sm:grid-cols-2">
                <OfferCard icon={Rocket} iconBg="rgba(180,83,9,0.10)" iconColor="#b45309" title="Ce qui est inclus" items={sprint.included} />
                <OfferCard icon={ChartLineUp} iconBg="rgba(234,88,12,0.10)" iconColor="#ea580c" title="Ce que vous recevez" items={sprint.received} />
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* ── Bouton feuille de route ── */}
        <ScrollReveal delay={0.32}>
          <div className="mt-10 flex justify-center">
            <a
              href="/feuille-de-route"
              className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-300 hover:bg-[#2355b6]/10"
              style={{
                fontFamily: inter.style.fontFamily,
                color: '#2355b6',
                borderColor: 'rgba(35,85,182,0.35)',
              }}
            >
              Voir le déroulé étape par étape
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
