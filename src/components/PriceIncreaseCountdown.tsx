'use client';

import { useEffect, useState } from 'react';
import { inter } from '@/lib/fonts';

/* Échéance : 1er septembre 2026, minuit (heure de Paris) */
const DEADLINE = new Date('2026-09-01T00:00:00+02:00').getTime();

interface Remaining {
  diff: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getRemaining(): Remaining {
  const diff = Math.max(0, DEADLINE - Date.now());
  return {
    diff,
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return n.toString().padStart(2, '0');
}

const units: { key: keyof Remaining; label: string }[] = [
  { key: 'days', label: 'j' },
  { key: 'hours', label: 'h' },
  { key: 'minutes', label: 'min' },
  { key: 'seconds', label: 's' },
];

export default function PriceIncreaseCountdown() {
  /* null tant que le composant n'est pas monté côté client : évite tout écart d'hydratation lié à l'heure. */
  const [remaining, setRemaining] = useState<Remaining | null>(null);

  useEffect(() => {
    setRemaining(getRemaining());
    const id = setInterval(() => setRemaining(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!remaining) return null;

  const expired = remaining.diff <= 0;

  return (
    <div
      className="mx-auto mb-12 flex w-full max-w-3xl flex-col items-center gap-5 rounded-[1.5rem] px-6 py-6 text-center sm:flex-row sm:justify-between sm:text-left md:px-8"
      style={{
        background: 'linear-gradient(145deg, #2c58b0 0%, #264d8c 60%, #1d3e77 100%)',
        boxShadow: '0 0 0 1.5px rgba(252,235,48,0.45), 0 24px 64px -16px rgba(252,235,48,0.20)',
      }}
    >
      <div>
        <p
          className="mb-1.5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
          style={{ fontFamily: inter.style.fontFamily, color: '#fceb30' }}
        >
          {expired ? 'Nouveaux tarifs en vigueur' : 'Tarif de lancement jusqu’au 1er septembre'}
        </p>
        <p
          className="text-sm text-white/75"
          style={{ fontFamily: inter.style.fontFamily }}
        >
          {expired
            ? 'Diagnostic visibilité 490 € · Sprint local 1 500 €'
            : 'Après le 1er septembre : Diagnostic visibilité 490 € · Sprint local 1 500 €'}
        </p>
      </div>

      {!expired && (
        <div className="flex items-center gap-2">
          {units.map((unit) => (
            <div
              key={unit.key}
              className="flex min-w-[50px] flex-col items-center rounded-xl px-2 py-2"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)' }}
            >
              <span
                className="tabular-nums text-xl font-bold text-white"
                style={{ fontFamily: 'Satoshi, sans-serif', lineHeight: 1 }}
              >
                {pad(remaining[unit.key] as number)}
              </span>
              <span
                className="mt-0.5 text-[10px] uppercase tracking-wider text-white/45"
                style={{ fontFamily: inter.style.fontFamily }}
              >
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
