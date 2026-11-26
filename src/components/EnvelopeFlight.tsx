/* Une enveloppe s'envoie vers un client, qui répond par une étoile d'avis. 100 % CSS, en boucle. */
export default function EnvelopeFlight({ className = '' }: { className?: string }) {
  return (
    <div className={`env-scene ${className}`} aria-hidden="true">
      <svg viewBox="0 0 380 240" width="100%" height="100%" fill="none">
        {/* trajectoire en pointillés qui se dessine */}
        <path className="env-trail" d="M40 190 Q 170 -10 300 120" stroke="#ffd426" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 9" />

        {/* expéditeur : petite fiche */}
        <g transform="translate(14 176)">
          <rect width="52" height="34" rx="8" fill="rgba(255,255,255,0.10)" stroke="rgba(255,255,255,0.35)" />
          <rect x="9" y="9" width="26" height="4" rx="2" fill="rgba(255,255,255,0.55)" />
          <rect x="9" y="18" width="34" height="4" rx="2" fill="rgba(255,255,255,0.3)" />
        </g>

        {/* client */}
        <g className="env-client" transform="translate(300 120)">
          <circle cx="0" cy="-6" r="22" fill="rgba(255,255,255,0.14)" stroke="rgba(255,255,255,0.4)" />
          <circle cx="0" cy="-12" r="8" fill="rgba(255,255,255,0.85)" />
          <path d="M-15 12 Q0 -6 15 12" fill="rgba(255,255,255,0.85)" />
        </g>

        {/* étoile d'avis qui répond */}
        <g className="env-star" transform="translate(300 62)">
          <circle r="22" fill="#ffd426" />
          <path d="M0 -12 L3.5 -3.7 12 -3.7 5.2 1.8 7.6 10.5 0 5.4 -7.6 10.5 -5.2 1.8 -12 -3.7 -3.5 -3.7 Z" fill="#1b1b5e" />
        </g>

        {/* enveloppe */}
        <g className="env-letter">
          <g transform="translate(-22 -15)">
            <rect width="44" height="30" rx="5" fill="#ffffff" />
            <path d="M2 4 L22 18 L42 4" stroke="#3b3fc4" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />
            <circle cx="36" cy="24" r="4" fill="#ffd426" />
          </g>
        </g>
      </svg>
      <style>{`
        .env-scene { pointer-events: none; }
        .env-letter, .env-star, .env-client { transform-box: fill-box; }
        .env-letter {
          offset-path: path('M40 190 Q 170 -10 300 120');
          offset-rotate: 0deg;
          animation: env-fly 7s cubic-bezier(.45,.05,.4,1) infinite;
        }
        .env-trail { stroke-dashoffset: 0; animation: env-trail 7s ease-in-out infinite; opacity: 0; }
        .env-star { transform-origin: center; animation: env-star 7s ease-out infinite; opacity: 0; }
        .env-client { animation: env-client 7s ease-out infinite; }
        @keyframes env-fly {
          0%   { offset-distance: 0%;   opacity: 0; scale: 0.6; }
          6%   { offset-distance: 0%;   opacity: 1; scale: 1; }
          55%  { offset-distance: 100%; opacity: 1; scale: 0.9; }
          60%  { offset-distance: 100%; opacity: 0; scale: 0.3; }
          100% { offset-distance: 100%; opacity: 0; scale: 0.3; }
        }
        @keyframes env-trail {
          0%, 5% { opacity: 0; }
          10%    { opacity: 0.9; }
          55%    { opacity: 0.6; }
          65%, 100% { opacity: 0; }
        }
        @keyframes env-star {
          0%, 58% { opacity: 0; scale: 0.2; }
          66%     { opacity: 1; scale: 1.25; }
          72%     { opacity: 1; scale: 1; }
          92%     { opacity: 1; scale: 1; }
          100%    { opacity: 0; scale: 1; }
        }
        @keyframes env-client {
          0%, 52% { transform: translate(300px,120px) scale(1); }
          58%     { transform: translate(300px,120px) scale(1.1); }
          66%, 100% { transform: translate(300px,120px) scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .env-letter { animation: none; offset-distance: 50%; opacity: 1; }
          .env-star { animation: none; opacity: 1; scale: 1; }
          .env-trail, .env-client { animation: none; }
          .env-trail { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}
