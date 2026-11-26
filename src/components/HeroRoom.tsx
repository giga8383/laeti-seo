/*
  Pièce vide en 3D isométrique qui se meuble au fil des secondes :
  fenêtre, tapis, canapé, table basse, cadres, lampadaire, plante.
  100 % SVG + CSS (aucune image, aucun script). Chaque élément « tombe »
  en place l'un après l'autre. Avec prefers-reduced-motion, tout est
  affiché d'emblée, sans animation.
*/

const S = 44; // taille d'une unité
const H_WALL_TOP = 4.2 * S; // hauteur des murs en pixels : le sommet du coin du fond doit rester dans le cadre
const CX = 330;
const CY = 24 + H_WALL_TOP;

type P3 = [number, number, number];
const pt = ([x, y, z]: P3): string =>
  `${(CX + (x - y) * S * 0.866).toFixed(1)},${(CY + (x + y) * S * 0.5 - z * S).toFixed(1)}`;
const poly = (pts: P3[]) => pts.map(pt).join(' ');

function Box({
  x0, y0, z0, x1, y1, z1, top, left, right, stroke = 'rgba(255,255,255,0.45)',
}: {
  x0: number; y0: number; z0: number; x1: number; y1: number; z1: number;
  top: string; left: string; right: string; stroke?: string;
}) {
  return (
    <g strokeLinejoin="round" strokeWidth="0.9" stroke={stroke}>
      {/* face +y (à gauche à l'écran) */}
      <polygon points={poly([[x0, y1, z0], [x1, y1, z0], [x1, y1, z1], [x0, y1, z1]])} fill={left} />
      {/* face +x (à droite à l'écran) */}
      <polygon points={poly([[x1, y0, z0], [x1, y1, z0], [x1, y1, z1], [x1, y0, z1]])} fill={right} />
      {/* dessus */}
      <polygon points={poly([[x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]])} fill={top} />
    </g>
  );
}

const N = 6; // pièce de 6 x 6 unités
const H = 4.2; // hauteur des murs

export default function HeroRoom({ className = '' }: { className?: string }) {
  const leafLow = pt([0.7, 4.65, 1.6]).split(',');
  const leafTop = pt([0.7, 4.65, 1.9]).split(',');
  let step = 0;
  const d = () => ({ ['--i' as string]: step++ } as React.CSSProperties);

  return (
    <div className={`hero-room pointer-events-none ${className}`} aria-hidden="true">
      <svg viewBox="0 0 660 580" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full">
        <defs>
          <radialGradient id="hr-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffd426" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ffd426" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hr-win" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#bfe6ff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#7cc4f5" stopOpacity="0.75" />
          </linearGradient>
        </defs>

        {/* ── Coque de la pièce : sol + 2 murs ── */}
        <g className="rm rm-shell" style={d()}>
          <polygon points={poly([[0, 0, 0], [N, 0, 0], [N, N, 0], [0, N, 0]])} fill="rgba(255,255,255,0.10)" stroke="rgba(255,255,255,0.40)" strokeWidth="1" />
          <polygon points={poly([[0, 0, 0], [0, N, 0], [0, N, H], [0, 0, H]])} fill="rgba(255,255,255,0.055)" stroke="rgba(255,255,255,0.40)" strokeWidth="1" />
          <polygon points={poly([[0, 0, 0], [N, 0, 0], [N, 0, H], [0, 0, H]])} fill="rgba(255,255,255,0.085)" stroke="rgba(255,255,255,0.40)" strokeWidth="1" />
          {/* plinthes */}
          <polyline points={poly([[0, N, 0.22], [0, 0, 0.22], [N, 0, 0.22]])} stroke="rgba(255,255,255,0.22)" strokeWidth="0.8" />
        </g>

        {/* ── Fenêtre sur le mur de droite (y = 0) ── */}
        <g className="rm" style={d()}>
          <polygon points={poly([[3.3, 0, 1.2], [5.5, 0, 1.2], [5.5, 0, 3.6], [3.3, 0, 3.6]])} fill="url(#hr-win)" stroke="#ffffff" strokeWidth="1.6" />
          <polyline points={poly([[4.4, 0, 1.2], [4.4, 0, 3.6]])} stroke="#ffffff" strokeWidth="1.3" />
          <polyline points={poly([[3.3, 0, 2.4], [5.5, 0, 2.4]])} stroke="#ffffff" strokeWidth="1.3" />
          <polygon points={poly([[3.2, 0, 1.1], [5.6, 0, 1.1], [5.6, 0.12, 1.1], [3.2, 0.12, 1.1]])} fill="#ffffff" />
        </g>

        {/* ── Tapis ── */}
        <g className="rm" style={d()}>
          <polygon points={poly([[1.3, 1.3, 0.02], [4.7, 1.3, 0.02], [4.7, 4.7, 0.02], [1.3, 4.7, 0.02]])} fill="#ffd426" fillOpacity="0.92" stroke="#fff6a8" strokeWidth="1" />
          <polygon points={poly([[1.7, 1.7, 0.03], [4.3, 1.7, 0.03], [4.3, 4.3, 0.03], [1.7, 4.3, 0.03]])} fill="none" stroke="#264d8c" strokeOpacity="0.55" strokeWidth="1.2" strokeDasharray="5 4" />
        </g>

        {/* ── Canapé (contre le mur de droite) ── */}
        <g className="rm" style={d()}>
          {/* socle posé au sol */}
          <Box x0={2.2} y0={0.15} z0={0} x1={5.2} y1={1.85} z1={0.55} top="#5a90dd" left="#3b70bd" right="#2c5aa3" />
          {/* accoudoir gauche (le plus éloigné) */}
          <Box x0={2.2} y0={0.15} z0={0.55} x1={2.65} y1={1.85} z1={1.1} top="#5a90dd" left="#3b70bd" right="#2c5aa3" />
          {/* dossier, posé sur le fond de l'assise, collé au mur */}
          <Box x0={2.65} y0={0.15} z0={0.55} x1={4.75} y1={0.65} z1={1.5} top="#4d82cf" left="#3262ab" right="#264d8c" />
          {/* deux coussins d'assise */}
          <Box x0={2.65} y0={0.65} z0={0.55} x1={3.7} y1={1.8} z1={0.77} top="#6a9fe6" left="#4a82cf" right="#3a6fb8" />
          <Box x0={3.7} y0={0.65} z0={0.55} x1={4.75} y1={1.8} z1={0.77} top="#6a9fe6" left="#4a82cf" right="#3a6fb8" />
          {/* coussin jaune calé contre le dossier */}
          <Box x0={3.9} y0={0.65} z0={0.77} x1={4.5} y1={0.95} z1={1.3} top="#ffe27a" left="#ffd426" right="#d6ae1a" stroke="rgba(0,0,0,0.15)" />
          {/* accoudoir droit (le plus proche) */}
          <Box x0={4.75} y0={0.15} z0={0.55} x1={5.2} y1={1.85} z1={1.1} top="#5a90dd" left="#3b70bd" right="#2c5aa3" />
        </g>

        {/* ── Cadres sur le mur de gauche (x = 0) ── */}
        <g className="rm" style={d()}>
          <polygon points={poly([[0, 1.0, 2.1], [0, 2.4, 2.1], [0, 2.4, 3.5], [0, 1.0, 3.5]])} fill="#ffffff" stroke="#ffd426" strokeWidth="2" />
          <polygon points={poly([[0, 1.2, 2.3], [0, 2.2, 2.3], [0, 2.2, 3.3], [0, 1.2, 3.3]])} fill="#264d8c" />
          <polygon points={poly([[0, 1.45, 2.55], [0, 1.95, 2.55], [0, 1.7, 3.05]])} fill="#ffd426" />
          <polygon points={poly([[0, 3.0, 2.5], [0, 4.1, 2.5], [0, 4.1, 3.3], [0, 3.0, 3.3]])} fill="#ffffff" stroke="#ffffff" strokeWidth="1.5" />
          <polygon points={poly([[0, 3.15, 2.65], [0, 3.95, 2.65], [0, 3.95, 3.15], [0, 3.15, 3.15]])} fill="#7cc4f5" />
        </g>

        {/* ── Table basse ── */}
        <g className="rm" style={d()}>
          <Box x0={2.6} y0={2.5} z0={0} x1={3.9} y1={3.6} z1={0.55} top="#ffffff" left="#dfe8f5" right="#b9c9e2" />
          {/* petit vase */}
          <Box x0={3.1} y0={2.9} z0={0.55} x1={3.4} y1={3.2} z1={0.9} top="#ffd426" left="#f0c41f" right="#c79f14" stroke="rgba(0,0,0,0.15)" />
        </g>

        {/* ── Lampadaire ── */}
        <g className="rm" style={d()}>
          <ellipse cx={pt([0.9, 0.9, 3.2]).split(',')[0]} cy={pt([0.9, 0.9, 3.2]).split(',')[1]} rx="62" ry="62" fill="url(#hr-glow)" className="rm-pulse" />
          <polyline points={poly([[0.9, 0.9, 0], [0.9, 0.9, 3.0]])} stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" />
          <polygon points={poly([[0.55, 0.55, 0], [1.25, 0.55, 0], [1.25, 1.25, 0], [0.55, 1.25, 0]])} fill="#ffffff" fillOpacity="0.9" />
          <polygon points={poly([[0.5, 0.5, 2.85], [1.3, 0.5, 2.85], [1.1, 1.1, 3.55], [0.7, 0.7, 3.55]])} fill="#ffd426" stroke="#fff6a8" strokeWidth="1" />
        </g>

        {/* ── Plante ── */}
        <g className="rm" style={d()}>
          {/* Plante : à gauche, le long du mur de gauche, vers l'avant */}
          <Box x0={0.35} y0={4.3} z0={0} x1={1.05} y1={5.0} z1={0.65} top="#ffffff" left="#dfe8f5" right="#b9c9e2" />
          <g fill="#34d399" stroke="#0f766e" strokeWidth="0.9">
            <ellipse cx={leafLow[0]} cy={leafLow[1]} rx="12" ry="34" transform={`rotate(-22 ${leafLow[0]} ${leafLow[1]})`} />
            <ellipse cx={leafTop[0]} cy={leafTop[1]} rx="12" ry="38" />
            <ellipse cx={leafLow[0]} cy={leafLow[1]} rx="12" ry="34" transform={`rotate(24 ${leafLow[0]} ${leafLow[1]})`} />
          </g>
        </g>
      </svg>

      <style>{`
        .hero-room .rm { opacity: 0; transform: translateY(-34px); animation: rm-drop 0.75s cubic-bezier(0.34, 1.4, 0.5, 1) both; animation-delay: calc(0.5s + var(--i) * 0.7s); }
        .hero-room .rm-shell { transform: none; animation: rm-fade 1s ease both; animation-delay: 0.2s; }
        .hero-room .rm-pulse { animation: rm-glow 4s ease-in-out 6s infinite; transform-origin: center; transform-box: fill-box; }
        @keyframes rm-drop { from { opacity: 0; transform: translateY(-34px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes rm-fade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes rm-glow { 0%,100% { opacity: 0.75; } 50% { opacity: 1; } }
        @media (prefers-reduced-motion: reduce) {
          .hero-room .rm, .hero-room .rm-shell, .hero-room .rm-pulse { animation: none; opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
}
