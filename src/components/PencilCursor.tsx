'use client';

import { useEffect, useRef } from 'react';

/*
  Curseur « crayon » + trace légère qui s'efface en ~1 s.

  - Le crayon est un vrai curseur CSS (image SVG encodée) : aucun retard,
    et la pointe du crayon est exactement l'endroit du clic.
  - Actif uniquement avec une souris (pas sur téléphone ni tablette).
  - Liens, boutons et champs de texte gardent leur curseur habituel
    (main, I-beam) pour que l'on voie toujours ce qui est cliquable.
  - Avec « réduire les animations » activé, le crayon reste mais la trace disparaît.
  - Aucun script externe : compatible avec la CSP du site.
*/

const PENCIL_SVG =
  "<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'>" +
  "<g transform='translate(3 29) rotate(-45)' stroke-linejoin='round'>" +
  "<polygon points='0,0 7,-3.4 7,3.4' fill='%23f3dcb4' stroke='%231b1b5e' stroke-width='1.2'/>" +
  "<polygon points='0,0 2.3,-1.1 2.3,1.1' fill='%23323244'/>" +
  "<rect x='7' y='-3.4' width='17' height='6.8' fill='%23fceb30' stroke='%231b1b5e' stroke-width='1.2'/>" +
  "<line x1='7.5' y1='0' x2='23.5' y2='0' stroke='%23d9c71f' stroke-width='1'/>" +
  "<rect x='24' y='-3.4' width='3.4' height='6.8' fill='%23c9d1e6' stroke='%231b1b5e' stroke-width='1.2'/>" +
  "<rect x='27.4' y='-3.4' width='3.6' height='6.8' rx='1.4' fill='%23ff8fa3' stroke='%231b1b5e' stroke-width='1.2'/>" +
  '</g></svg>';

const CSS = `
@media (hover: hover) and (pointer: fine) {
  html { cursor: url("data:image/svg+xml;utf8,${PENCIL_SVG}") 3 29, auto; }
  a, button, [role="button"], summary, select, label, input[type="checkbox"], input[type="radio"], [data-no-pencil] { cursor: pointer; }
  input:not([type="checkbox"]):not([type="radio"]), textarea { cursor: text; }
}
`;

const LIFE = 900; // durée de vie de la trace, en ms
const MAX_POINTS = 90;

type Pt = { x: number; y: number; t: number; gap: boolean };

export default function PencilCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const pts: Pt[] = [];
    let raf = 0;
    let running = false;
    let last = { x: -1, y: -1 };

    const draw = () => {
      const now = performance.now();
      while (pts.length && now - pts[0].t > LIFE) pts.shift();
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      for (let i = 1; i < pts.length; i++) {
        const a = pts[i - 1];
        const b = pts[i];
        if (b.gap) continue; // nouveau trait : on ne relie pas à l'ancien
        const life = 1 - (now - b.t) / LIFE; // 1 → 0
        if (life <= 0) continue;
        const k = life * life; // s'efface plus vite sur la fin
        // fin liseré sombre : la trace reste visible sur fond clair comme sur fond sombre
        ctx.strokeStyle = `rgba(27,27,94,${0.18 * k})`;
        ctx.lineWidth = 3.4 * (0.5 + 0.5 * life);
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        ctx.strokeStyle = `rgba(255,212,38,${0.55 * k})`;
        ctx.lineWidth = 1.8 * (0.5 + 0.5 * life);
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      }

      if (pts.length > 1) {
        raf = requestAnimationFrame(draw);
      } else {
        running = false;
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      }
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      const dx = e.clientX - last.x;
      const dy = e.clientY - last.y;
      if (dx * dx + dy * dy < 4) return; // ignore les micro-mouvements
      const gap = last.x < 0 || performance.now() - (pts[pts.length - 1]?.t ?? 0) > 120;
      last = { x: e.clientX, y: e.clientY };
      pts.push({ x: e.clientX, y: e.clientY, t: performance.now(), gap });
      if (pts.length > MAX_POINTS) pts.shift();
      if (!running) {
        running = true;
        raf = requestAnimationFrame(draw);
      }
    };

    const onLeave = () => { last = { x: -1, y: -1 }; };
    const onVisibility = () => { if (document.hidden) { pts.length = 0; } };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('resize', resize);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('resize', resize);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <>
      <style>{CSS}</style>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0"
        style={{ zIndex: 9990, width: '100vw', height: '100vh' }}
      />
    </>
  );
}
