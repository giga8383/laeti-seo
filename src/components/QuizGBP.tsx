'use client';

import { useState } from 'react';
import { inter } from '@/lib/fonts';
import { Check, X, ArrowRight } from '@phosphor-icons/react';
import Link from 'next/link';

const questions = [
  "Avez-vous complété toutes les sections de votre fiche Google Business Profile (description, services, photos, horaires) ?",
  "Votre nom, adresse et téléphone sont-ils strictement identiques sur votre site, votre fiche Google et vos principaux annuaires ?",
  "Avez-vous reçu au moins un avis Google au cours des 30 derniers jours ?",
  "Publiez-vous au moins un post sur votre fiche Google chaque mois ?",
  "Avez-vous défini une zone de service précise (communes ou rayon) sur votre fiche Google ?",
];

function getResult(score: number) {
  if (score <= 1) return {
    label: "Votre fiche freine votre visibilité",
    desc: "Des blocages importants limitent votre présence sur Google. Un audit identifiera précisément ce qui vous coûte des clients chaque jour.",
    cta: "Demander un audit · 190 €",
    level: 'low',
  };
  if (score <= 3) return {
    label: "Vous avez les bases, mais des leviers sont inexploités",
    desc: "Quelques optimisations ciblées peuvent faire une différence significative sur votre positionnement local.",
    cta: "Voir ce que l'audit couvre",
    level: 'mid',
  };
  return {
    label: "Votre fiche est bien configurée",
    desc: "Bonne base. Un audit permettrait d'identifier les écarts restants avec vos concurrents directs et de mesurer votre visibilité réelle.",
    cta: "Voir le détail de l'audit",
    level: 'high',
  };
}

export default function QuizGBP() {
  const [step, setStep] = useState(0);        // 0..4 = questions, 5 = résultat
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [selected, setSelected] = useState<boolean | null>(null);

  const score = answers.filter(Boolean).length;
  const result = getResult(score);

  function handleAnswer(value: boolean) {
    setSelected(value);
    setTimeout(() => {
      const next = [...answers, value];
      setAnswers(next);
      setSelected(null);
      setStep((s) => s + 1);
    }, 320);
  }

  function reset() {
    setStep(0);
    setAnswers([]);
    setSelected(null);
  }

  return (
    <div
      className="rounded-[2rem] p-8 md:p-10"
      style={{
        background: 'linear-gradient(145deg, rgba(38,77,140,0.18) 0%, rgba(15,30,72,0.35) 100%)',
        border: '1px solid rgba(255,255,255,0.12)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
      }}
    >
      {/* En-tête */}
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p
            className="uppercase tracking-widest"
            style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '11px', color: '#fceb30', textShadow: '0 0 12px rgba(252,235,48,0.6)' }}
          >
            Quiz · 5 questions
          </p>
          <p
            className="mt-1 text-white"
            style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '18px', lineHeight: '1.3' }}
          >
            Votre fiche Google est-elle optimisée ?
          </p>
        </div>
        {step < 5 && (
          <span
            className="shrink-0 rounded-full px-3 py-1"
            style={{
              fontFamily: inter.style.fontFamily,
              fontSize: '12px',
              fontWeight: 600,
              color: 'rgba(252,235,48,0.8)',
              background: 'rgba(252,235,48,0.10)',
              border: '1px solid rgba(252,235,48,0.20)',
            }}
          >
            {step + 1} / 5
          </span>
        )}
      </div>

      {/* Barre de progression */}
      {step < 5 && (
        <div className="mb-8 h-1 w-full overflow-hidden rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${(step / 5) * 100}%`, background: '#fceb30', boxShadow: '0 0 8px rgba(252,235,48,0.5)' }}
          />
        </div>
      )}

      {/* Question */}
      {step < 5 && (
        <div>
          <p
            className="mb-8 text-white/85"
            style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '26px' }}
          >
            {questions[step]}
          </p>
          <div className="flex gap-3">
            {[
              { label: 'Oui', value: true,  icon: <Check size={16} weight="bold" /> },
              { label: 'Non', value: false, icon: <X size={16} weight="bold" /> },
            ].map(({ label, value, icon }) => {
              const isSelected = selected === value;
              return (
                <button
                  key={label}
                  onClick={() => handleAnswer(value)}
                  disabled={selected !== null}
                  className="flex items-center gap-2 rounded-full px-6 py-3 font-bold transition-all duration-200"
                  style={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: '14px',
                    cursor: selected !== null ? 'default' : 'pointer',
                    background: isSelected
                      ? (value ? '#fceb30' : 'rgba(255,255,255,0.15)')
                      : 'rgba(255,255,255,0.07)',
                    border: isSelected
                      ? (value ? '1px solid #fceb30' : '1px solid rgba(255,255,255,0.3)')
                      : '1px solid rgba(255,255,255,0.12)',
                    color: isSelected
                      ? (value ? '#264d8c' : '#ffffff')
                      : 'rgba(255,255,255,0.75)',
                    transform: isSelected ? 'scale(1.04)' : 'scale(1)',
                  }}
                >
                  {icon}
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Résultat */}
      {step === 5 && (
        <div>
          {/* Score visuel */}
          <div className="mb-6 flex items-center gap-4">
            <div
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl"
              style={{ background: 'rgba(252,235,48,0.12)', border: '1px solid rgba(252,235,48,0.25)' }}
            >
              <p style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '24px', color: '#fceb30' }}>
                {score}/5
              </p>
            </div>
            <div>
              <p style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '18px', color: '#ffffff', lineHeight: '1.3' }}>
                {result.label}
              </p>
              <div className="mt-2 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-2 w-8 rounded-full"
                    style={{ background: i < score ? '#fceb30' : 'rgba(255,255,255,0.12)' }}
                  />
                ))}
              </div>
            </div>
          </div>

          <p
            className="mb-8 text-white/65"
            style={{ fontFamily: inter.style.fontFamily, fontSize: '15px', lineHeight: '25px' }}
          >
            {result.desc}
          </p>

          {/* Récap réponses */}
          <div className="mb-8 space-y-2">
            {questions.map((q, i) => (
              <div key={i} className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                  style={{ background: answers[i] ? 'rgba(252,235,48,0.15)' : 'rgba(255,255,255,0.08)' }}
                >
                  {answers[i]
                    ? <Check size={10} weight="bold" color="#fceb30" />
                    : <X size={10} weight="bold" color="rgba(255,255,255,0.4)" />}
                </span>
                <p style={{ fontFamily: inter.style.fontFamily, fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: '20px' }}>
                  {q}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/audit-seo-local"
              className="inline-flex items-center gap-2 rounded-full bg-[#fceb30] px-6 py-3 font-bold text-[#264d8c] transition-all duration-300 hover:brightness-105 active:scale-[0.98]"
              style={{ fontFamily: inter.style.fontFamily, fontSize: '14px' }}
            >
              {result.cta}
              <ArrowRight size={14} weight="bold" />
            </Link>
            <button
              onClick={reset}
              className="text-white/40 transition-colors hover:text-white/70"
              style={{ fontFamily: inter.style.fontFamily, fontSize: '13px' }}
            >
              Recommencer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
