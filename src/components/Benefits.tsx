import ScrollReveal from './ScrollReveal';
import { inter } from '@/lib/fonts';

const benefits = [
  "Pourquoi votre visibilité locale ne décolle pas assez",
  "Ce qui manque sur votre fiche Google",
  "Ce que votre site doit mieux montrer pour être utile localement",
  "Quels signaux de confiance renforcer en priorité",
  "Quelles actions peuvent avoir le plus d'impact à court terme",
  "Ce qui est prioritaire, secondaire ou inutile",
];

export default function Benefits() {
  return (
    <section className="relative isolate bg-white" style={{ backgroundColor: '#ffffff' }}>
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <ScrollReveal>
          <div
            className="w-full rounded-[2rem] px-8 py-14 md:px-12 md:py-16"
            style={{
              background: 'linear-gradient(155deg, #bae6fd 0%, #e0f2fe 55%, #ffffff 100%)',
              border: '1px solid rgba(125,211,252,0.6)',
              boxShadow:
                'inset 0 1px 0 rgba(255,255,255,0.80), 0 0 40px -4px rgba(125,211,252,0.45), 0 0 80px -8px rgba(56,189,248,0.25), 0 24px 60px -16px rgba(125,211,252,0.30)',
            }}
          >
            <div className="grid grid-cols-1 gap-16 md:grid-cols-[5fr_7fr] md:items-start">

              {/* gauche : sticky */}
              <div className="md:sticky md:top-32">
                <p
                  className="mb-4"
                  style={{ fontFamily: 'Satoshi, "Satoshi Fallback", "League Spartan", "League Spartan Fallback", ui-sans-serif, system-ui, -apple-system, sans-serif', fontStyle: 'normal', fontWeight: 700, fontSize: '22px', lineHeight: '28px', color: '#2355b6', textTransform: 'uppercase', textShadow: '0 0 12px rgba(35,85,182,0.6), 0 0 28px rgba(35,85,182,0.35), 0 0 56px rgba(35,85,182,0.15)' }}
                >
                  Ce qui change pour vous
                </p>
                <h2
                  className="text-4xl font-bold tracking-tight leading-[1.1] md:text-5xl"
                  style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, color: '#2c58b0' }}
                >
                  Ne vous demandez plus{' '}
                  <span style={{ color: '#0ea5e9' }}>par où commencer</span>.
                </h2>
                <p
                  className="mt-6 text-base leading-relaxed"
                  style={{ fontFamily: inter.style.fontFamily, color: '#3262ab', opacity: 0.9 }}
                >
                  L&apos;objectif n&apos;est pas de tout faire. L&apos;objectif
                  est de faire les bonnes actions, dans le bon ordre.
                </p>

                {/* ── Tableau accroché de travers ── */}
                <div className="mt-10 flex justify-center">
                  <div style={{ transform: 'rotate(-4deg)', transformOrigin: 'top center', filter: 'drop-shadow(5px 12px 20px rgba(38,77,140,0.20))' }}>
                    <svg width="200" height="244" viewBox="0 0 200 244" fill="none" xmlns="http://www.w3.org/2000/svg">

                      {/* Clou + fil */}
                      <circle cx="100" cy="5" r="2.5" fill="#264d8c"/>
                      <path d="M100 5 Q72 10 52 22" stroke="#264d8c" strokeWidth="0.9" strokeLinecap="round"/>
                      <path d="M100 5 Q128 10 148 22" stroke="#264d8c" strokeWidth="0.9" strokeLinecap="round"/>

                      {/* Cadre extérieur */}
                      <rect x="18" y="20" width="164" height="216" rx="3" fill="#dbeafe" stroke="#264d8c" strokeWidth="2.5"/>
                      {/* Baguette intérieure */}
                      <rect x="28" y="30" width="144" height="196" rx="1.5" fill="white" stroke="#264d8c" strokeWidth="1.2"/>

                      {/* Hachures bois — bord haut */}
                      <line x1="30" y1="20" x2="24" y2="30" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="42" y1="20" x2="36" y2="30" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="54" y1="20" x2="48" y2="30" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="66" y1="20" x2="60" y2="30" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="78" y1="20" x2="72" y2="30" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="90" y1="20" x2="84" y2="30" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="102" y1="20" x2="96" y2="30" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="114" y1="20" x2="108" y2="30" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="126" y1="20" x2="120" y2="30" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="138" y1="20" x2="132" y2="30" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="150" y1="20" x2="144" y2="30" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="162" y1="20" x2="156" y2="30" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="174" y1="20" x2="168" y2="30" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>

                      {/* Hachures bois — bord bas */}
                      <line x1="30" y1="236" x2="24" y2="226" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="42" y1="236" x2="36" y2="226" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="54" y1="236" x2="48" y2="226" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="66" y1="236" x2="60" y2="226" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="78" y1="236" x2="72" y2="226" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="90" y1="236" x2="84" y2="226" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="102" y1="236" x2="96" y2="226" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="114" y1="236" x2="108" y2="226" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="126" y1="236" x2="120" y2="226" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="138" y1="236" x2="132" y2="226" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="150" y1="236" x2="144" y2="226" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="162" y1="236" x2="156" y2="226" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="174" y1="236" x2="168" y2="226" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>

                      {/* Hachures bois — bord gauche */}
                      <line x1="18" y1="34" x2="28" y2="28" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="18" y1="46" x2="28" y2="40" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="18" y1="58" x2="28" y2="52" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="18" y1="70" x2="28" y2="64" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="18" y1="82" x2="28" y2="76" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="18" y1="94" x2="28" y2="88" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="18" y1="106" x2="28" y2="100" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="18" y1="118" x2="28" y2="112" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="18" y1="130" x2="28" y2="124" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="18" y1="142" x2="28" y2="136" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="18" y1="154" x2="28" y2="148" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="18" y1="166" x2="28" y2="160" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="18" y1="178" x2="28" y2="172" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="18" y1="190" x2="28" y2="184" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="18" y1="202" x2="28" y2="196" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="18" y1="214" x2="28" y2="208" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="18" y1="226" x2="28" y2="220" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>

                      {/* Hachures bois — bord droit */}
                      <line x1="182" y1="34" x2="172" y2="28" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="182" y1="46" x2="172" y2="40" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="182" y1="58" x2="172" y2="52" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="182" y1="70" x2="172" y2="64" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="182" y1="82" x2="172" y2="76" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="182" y1="94" x2="172" y2="88" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="182" y1="106" x2="172" y2="100" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="182" y1="118" x2="172" y2="112" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="182" y1="130" x2="172" y2="124" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="182" y1="142" x2="172" y2="136" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="182" y1="154" x2="172" y2="148" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="182" y1="166" x2="172" y2="160" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="182" y1="178" x2="172" y2="172" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="182" y1="190" x2="172" y2="184" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="182" y1="202" x2="172" y2="196" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="182" y1="214" x2="172" y2="208" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="182" y1="226" x2="172" y2="220" stroke="#264d8c" strokeWidth="0.35" opacity="0.4"/>

                      {/* ── Photo ── */}
                      <defs>
                        <clipPath id="photoFrameClip">
                          <rect x="28" y="30" width="144" height="196" rx="1.5"/>
                        </clipPath>
                      </defs>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <image href="/laeti-photo.webp" x="28" y="30" width="144" height="196" preserveAspectRatio="xMidYMid slice" clipPath="url(#photoFrameClip)"/>
                      {/* Surcadre finition */}
                      <rect x="28" y="30" width="144" height="196" rx="1.5" fill="none" stroke="#264d8c" strokeWidth="1.2"/>

                    </svg>
                  </div>
                </div>
              </div>

              {/* droite : liste */}
              <div className="space-y-0 divide-y divide-[#3262ab]/10">
                {benefits.map((b, i) => (
                  <ScrollReveal key={i} delay={i * 0.07}>
                    <div className="flex items-start gap-5 py-6">
                      <span
                        className="mt-0.5 font-mono text-xl font-bold tabular-nums"
                        style={{ color: '#3262ab', opacity: 0.7 }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p
                        className="text-base leading-relaxed"
                        style={{ fontFamily: inter.style.fontFamily, color: '#2c58b0', opacity: 0.85 }}
                      >
                        {b}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
