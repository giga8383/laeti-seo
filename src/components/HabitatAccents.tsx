/**
 * HabitatAccents v2 — motifs habitat bien marqués :
 * fenêtre à arc français, parquet arête de poisson, botanique pleine page,
 * moulure de panneau, compas de tracé.
 * Fixed, pointer-events-none, overflow-hidden.
 */
export default function HabitatAccents() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    >

      {/* ══════════════════════════════════════════
          FENÊTRE À ARC FRANÇAIS — coin supérieur droit
          Évoque une ouverture haussmannienne ou une baie d'atelier
      ══════════════════════════════════════════ */}
      <svg
        className="absolute top-0 right-0"
        width="380" height="440"
        viewBox="0 0 380 440"
        fill="none"
        style={{ opacity: 0.10 }}
      >
        {/* Cadre extérieur de la fenêtre */}
        <rect x="60" y="40" width="200" height="300" rx="100" ry="12"
          stroke="rgba(220,175,90,0.9)" strokeWidth="1.5" fill="none" />
        {/* Montant central vertical */}
        <line x1="160" y1="140" x2="160" y2="340"
          stroke="rgba(220,175,90,0.7)" strokeWidth="1" />
        {/* Traverse horizontale */}
        <line x1="60" y1="240" x2="260" y2="240"
          stroke="rgba(220,175,90,0.7)" strokeWidth="1" />
        {/* Vitrage supérieur gauche — petite arche */}
        <path d="M63 240 Q63 145 112 143 Q160 141 160 240"
          stroke="rgba(220,175,90,0.5)" strokeWidth="0.8" fill="none" />
        {/* Vitrage supérieur droit */}
        <path d="M160 240 Q160 141 208 143 Q256 145 257 240"
          stroke="rgba(220,175,90,0.5)" strokeWidth="0.8" fill="none" />
        {/* Encadrement moulure extérieure */}
        <rect x="44" y="28" width="232" height="320" rx="116" ry="16"
          stroke="rgba(220,175,90,0.25)" strokeWidth="0.8" fill="none" strokeDasharray="8 12" />
        {/* Cote architecturale — ligne de niveau */}
        <line x1="290" y1="40" x2="290" y2="340"
          stroke="rgba(255,255,255,0.18)" strokeWidth="0.6" strokeDasharray="3 8" />
        <line x1="284" y1="40" x2="296" y2="40"
          stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" />
        <line x1="284" y1="340" x2="296" y2="340"
          stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" />
      </svg>

      {/* ══════════════════════════════════════════
          BOTANIQUE MONSTERA — côté gauche, pleine hauteur
          Feuilles tropicales caractéristiques des intérieurs déco
      ══════════════════════════════════════════ */}
      <svg
        className="absolute"
        style={{ top: '15%', left: '-12px', opacity: 0.11 }}
        width="200" height="520"
        viewBox="0 0 200 520"
        fill="none"
      >
        {/* Tige principale */}
        <path d="M75 520 Q78 430 82 360 Q86 290 90 210 Q94 140 100 70"
          stroke="rgba(200,210,160,0.9)" strokeWidth="1.5" fill="none" strokeLinecap="round" />

        {/* Grande feuille haute droite */}
        <path d="M100 70 Q155 20 185 40 Q165 55 148 75 Q140 85 130 100 Q115 88 100 70Z"
          stroke="rgba(200,210,160,0.85)" strokeWidth="1" fill="none" />
        <path d="M100 70 Q148 32 183 40" stroke="rgba(200,210,160,0.45)" strokeWidth="0.5" fill="none" />
        {/* Encoche caractéristique monstera */}
        <path d="M130 100 Q122 82 118 72" stroke="rgba(200,210,160,0.6)" strokeWidth="0.8" fill="none" />

        {/* Feuille milieu gauche */}
        <path d="M88 190 Q40 148 18 168 Q55 178 80 210 Q85 202 88 190Z"
          stroke="rgba(200,210,160,0.85)" strokeWidth="1" fill="none" />
        <path d="M88 190 Q42 152 20 168" stroke="rgba(200,210,160,0.45)" strokeWidth="0.5" fill="none" />
        <path d="M80 210 Q68 188 58 172" stroke="rgba(200,210,160,0.6)" strokeWidth="0.8" fill="none" />

        {/* Feuille milieu droite */}
        <path d="M92 270 Q142 230 162 250 Q132 264 110 292 Q99 283 92 270Z"
          stroke="rgba(200,210,160,0.85)" strokeWidth="1" fill="none" />
        <path d="M92 270 Q140 233 160 250" stroke="rgba(200,210,160,0.45)" strokeWidth="0.5" fill="none" />
        <path d="M110 292 Q100 270 96 258" stroke="rgba(200,210,160,0.6)" strokeWidth="0.8" fill="none" />

        {/* Feuille basse gauche */}
        <path d="M84 370 Q35 332 15 352 Q52 360 76 390 Q81 382 84 370Z"
          stroke="rgba(200,210,160,0.75)" strokeWidth="1" fill="none" />
        <path d="M84 370 Q38 336 16 352" stroke="rgba(200,210,160,0.4)" strokeWidth="0.5" fill="none" />

        {/* Feuille basse droite */}
        <path d="M80 440 Q120 405 138 420 Q115 432 98 458 Q87 450 80 440Z"
          stroke="rgba(200,210,160,0.7)" strokeWidth="0.9" fill="none" />
      </svg>

      {/* ══════════════════════════════════════════
          PARQUET ARÊTE DE POISSON — coin bas droit
          Référence directe au sol d'un intérieur français
      ══════════════════════════════════════════ */}
      <svg
        className="absolute bottom-0 right-0"
        width="260" height="200"
        viewBox="0 0 260 200"
        fill="none"
        style={{ opacity: 0.09 }}
      >
        {/* Lames en arête de poisson — angle 45° */}
        {Array.from({ length: 7 }).map((_, row) =>
          Array.from({ length: 6 }).map((_, col) => {
            const x = col * 40 - 20;
            const y = row * 30 - 10;
            const offset = (col % 2) * 15;
            return (
              <g key={`${row}-${col}`} transform={`translate(${x}, ${y + offset})`}>
                {/* Lame gauche */}
                <rect x="2" y="2" width="16" height="22"
                  transform="rotate(-45 10 13)"
                  stroke="rgba(210,165,80,0.8)" strokeWidth="0.7" fill="none" />
                {/* Lame droite */}
                <rect x="22" y="2" width="16" height="22"
                  transform="rotate(45 30 13)"
                  stroke="rgba(210,165,80,0.8)" strokeWidth="0.7" fill="none" />
              </g>
            );
          })
        )}
      </svg>

      {/* ══════════════════════════════════════════
          MOULURE PANNEAU — bords d'encadrement
          Référence aux lambris et boiseries d'intérieur
      ══════════════════════════════════════════ */}
      {/* Moulure bas droite */}
      <svg
        className="absolute"
        style={{ bottom: '18%', right: '4%', opacity: 0.08 }}
        width="130" height="90"
        viewBox="0 0 130 90"
        fill="none"
      >
        <rect x="4" y="4" width="122" height="82" rx="3"
          stroke="rgba(220,175,90,0.9)" strokeWidth="1" fill="none" />
        <rect x="12" y="12" width="106" height="66" rx="2"
          stroke="rgba(220,175,90,0.6)" strokeWidth="0.6" fill="none" />
        {/* Coins ornementaux */}
        {[[4,4],[122,4],[4,82],[122,82]].map(([cx,cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3"
            stroke="rgba(220,175,90,0.8)" strokeWidth="0.8" fill="none" />
        ))}
      </svg>

      {/* ══════════════════════════════════════════
          COMPAS DE TRACÉ — milieu gauche
          Référence à l'architecte / dessinateur d'intérieur
      ══════════════════════════════════════════ */}
      <svg
        className="absolute"
        style={{ top: '52%', left: '3%', opacity: 0.09 }}
        width="70" height="90"
        viewBox="0 0 70 90"
        fill="none"
      >
        {/* Jambe gauche */}
        <line x1="35" y1="10" x2="12" y2="80"
          stroke="rgba(220,175,90,0.9)" strokeWidth="1.2" strokeLinecap="round" />
        {/* Jambe droite */}
        <line x1="35" y1="10" x2="58" y2="80"
          stroke="rgba(220,175,90,0.9)" strokeWidth="1.2" strokeLinecap="round" />
        {/* Articulation sommet */}
        <circle cx="35" cy="10" r="3.5"
          stroke="rgba(220,175,90,0.9)" strokeWidth="1" fill="none" />
        {/* Arc de tracé */}
        <path d="M14 68 Q35 52 56 68"
          stroke="rgba(220,175,90,0.55)" strokeWidth="0.8" fill="none" strokeDasharray="3 5" />
        {/* Pointe basse gauche */}
        <line x1="12" y1="80" x2="10" y2="88"
          stroke="rgba(220,175,90,0.7)" strokeWidth="1" strokeLinecap="round" />
        <line x1="12" y1="80" x2="16" y2="87"
          stroke="rgba(220,175,90,0.7)" strokeWidth="1" strokeLinecap="round" />
        {/* Pointe basse droite */}
        <line x1="58" y1="80" x2="54" y2="87"
          stroke="rgba(220,175,90,0.7)" strokeWidth="1" strokeLinecap="round" />
        <line x1="58" y1="80" x2="62" y2="87"
          stroke="rgba(220,175,90,0.7)" strokeWidth="1" strokeLinecap="round" />
        {/* Entretoise */}
        <line x1="22" y1="45" x2="48" y2="45"
          stroke="rgba(220,175,90,0.6)" strokeWidth="0.8" />
        <circle cx="22" cy="45" r="2" stroke="rgba(220,175,90,0.7)" strokeWidth="0.7" fill="none" />
        <circle cx="48" cy="45" r="2" stroke="rgba(220,175,90,0.7)" strokeWidth="0.7" fill="none" />
      </svg>

      {/* ══════════════════════════════════════════
          MARQUEURS DE PLAN ARCHITECTURAUX — dispersion
      ══════════════════════════════════════════ */}
      {[
        { x: '22%', y: '20%', size: 16 },
        { x: '78%', y: '48%', size: 12 },
        { x: '45%', y: '78%', size: 14 },
        { x: '62%', y: '14%', size: 10 },
      ].map((pos, i) => (
        <svg
          key={i}
          className="absolute"
          style={{ left: pos.x, top: pos.y, opacity: 0.09 }}
          width={pos.size * 2} height={pos.size * 2}
          viewBox={`0 0 ${pos.size * 2} ${pos.size * 2}`}
          fill="none"
        >
          <line x1={pos.size} y1="0" x2={pos.size} y2={pos.size * 2}
            stroke="rgba(220,175,90,0.9)" strokeWidth="0.8" />
          <line x1="0" y1={pos.size} x2={pos.size * 2} y2={pos.size}
            stroke="rgba(220,175,90,0.9)" strokeWidth="0.8" />
          <circle cx={pos.size} cy={pos.size} r={pos.size * 0.35}
            stroke="rgba(220,175,90,0.6)" strokeWidth="0.6" fill="none" />
        </svg>
      ))}

    </div>
  );
}
