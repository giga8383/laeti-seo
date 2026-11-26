'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { inter } from '@/lib/fonts';

/*
  Section « Vous vous reconnaissez ? » : la carte Google à gauche raconte les trois
  situations pendant que l'on défile (bureau). Le point de texte au centre de l'écran
  s'éclaire, les autres s'estompent, et la carte change d'illustration.
  Sur mobile (carte non collante), la carte passe d'une situation à l'autre toute seule.
*/

const situations = [
  {
    title: 'Votre fiche Google est vide',
    text: "Vous avez créé une fiche Google il y a trois ans, à la va-vite. Pas de photos, pas de description, pas d'horaires à jour. Résultat, quand un client tape « cuisiniste Aix-en-Provence », Google ne sait pas quoi faire de vous et affiche trois concurrents à votre place. Vous avez pourtant pignon sur rue.",
  },
  {
    title: 'Votre site est invisible',
    text: "Votre site est joli. Il a coûté cher. Mais il ne parle jamais de votre ville, ni de vos prestations réelles. Vous n'apparaissez que si quelqu'un tape exactement le nom de votre entreprise. Autant dire jamais. Et vous ne savez pas quoi changer, ni par où commencer.",
  },
  {
    title: 'Les demandes qui arrivent sont hors budget',
    text: "Vous recevez des appels pour des projets à 800 € alors que votre panier moyen est à 15 000 €. Vous perdez du temps au téléphone, vous vous déplacez pour rien. Le problème n'est pas votre prix. C'est la façon dont vous êtes trouvé. Vous n'attirez pas les bonnes recherches.",
  },
];

const captions = [
  'Google affiche trois concurrents à votre place',
  'Visible seulement si l’on tape votre nom',
  'Vous n’attirez pas les bonnes recherches',
];

const body = { fontFamily: 'Inter, "Inter Fallback"', fontStyle: 'normal', fontWeight: 400, fontSize: '16px', lineHeight: '26px' } as const;
const tiny = { fontFamily: inter.style.fontFamily } as const;

/* ───────────── Petits éléments de la carte ───────────── */

function Pin({ fill = '#ffd426', size = 22, dashed = false }: { fill?: string; size?: number; dashed?: boolean }) {
  return (
    <svg width={size} height={size * 1.27} viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M11 0C4.925 0 0 4.925 0 11c0 7.778 11 17 11 17s11-9.222 11-17C22 4.925 17.075 0 11 0z"
        fill={dashed ? 'rgba(255,255,255,0.04)' : fill}
        stroke={dashed ? '#ffd426' : 'none'}
        strokeWidth={dashed ? 1.6 : 0}
        strokeDasharray={dashed ? '3 3' : undefined}
      />
      <circle cx="11" cy="11" r="4" fill={dashed ? 'none' : '#1b1b5e'} />
    </svg>
  );
}

function Skeleton({ strong = false, w = 'w-2/3' }: { strong?: boolean; w?: string }) {
  return (
    <div className="flex-1 space-y-1.5">
      <div className={`h-2 rounded-full ${w} ${strong ? 'bg-white/70' : 'bg-white/25'}`} />
      <div className="h-1.5 w-1/2 rounded-full bg-white/15" />
    </div>
  );
}

function Row({ rank, children, highlight = false, dashed = false }: { rank?: string; children: React.ReactNode; highlight?: boolean; dashed?: boolean }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-xl p-3 ${
        highlight ? 'border border-[#ffd426]/40 bg-[#ffd426]/10' : dashed ? 'border border-dashed border-[#ffd426]/45 bg-white/[0.03]' : 'bg-white/[0.05]'
      }`}
    >
      <div className={`h-2 w-2 shrink-0 rounded-full ${highlight ? 'bg-[#ffd426]' : dashed ? 'border border-[#ffd426]/70' : 'bg-white/25'}`} />
      {children}
      {rank && <span className={`font-mono text-[10px] font-bold ${highlight ? 'text-[#ffd426]' : 'text-white/45'}`}>{rank}</span>}
    </div>
  );
}

const view = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
};

/* 01 : fiche vide, trois concurrents prennent la place */
function ViewEmpty() {
  const competitors = [
    { l: '18%', t: '22%' },
    { l: '70%', t: '18%' },
    { l: '78%', t: '58%' },
  ];
  return (
    <motion.div {...view}>
      <div className="relative mb-4 h-32 overflow-hidden rounded-xl bg-white/10">
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="pgrid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pgrid)" />
        </svg>
        {competitors.map((c, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: c.l, top: c.t }}
            initial={{ opacity: 0, scale: 0.3, y: -14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.25 + i * 0.25, type: 'spring', stiffness: 320, damping: 15 }}
          >
            <Pin fill="#ffffff" size={18} />
          </motion.div>
        ))}
        {/* votre fiche : épingle vide en pointillés */}
        <div className="absolute left-[42%] top-[40%]">
          <motion.div animate={{ scale: [1, 1.12, 1] }} transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}>
            <Pin dashed size={24} />
          </motion.div>
        </div>
      </div>
      <div className="space-y-2">
        {['#1', '#2', '#3'].map((r, i) => (
          <motion.div key={r} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.22, duration: 0.4 }}>
            <Row rank={r}>
              <Skeleton w={['w-3/4', 'w-2/3', 'w-3/5'][i]} />
            </Row>
          </motion.div>
        ))}
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.4 }}>
          <Row dashed>
            <span className="text-xs text-white/75" style={tiny}>Votre fiche</span>
            <span className="ml-auto flex flex-wrap justify-end gap-1">
              {['0 photo', '0 avis', 'horaires ?'].map((c) => (
                <span key={c} className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-white/60" style={tiny}>{c}</span>
              ))}
            </span>
          </Row>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* 02 : site invisible, il n'apparaît que si l'on tape le nom de l'entreprise */
function ViewSearch({ animate }: { animate: boolean }) {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    if (!animate) return;
    const id = setInterval(() => setPhase((p) => (p === 0 ? 1 : 0)), 3400);
    return () => clearInterval(id);
  }, [animate]);
  const queries = ['cuisiniste Aix-en-Provence', 'Nom de votre entreprise'];

  return (
    <motion.div {...view}>
      <div className="mb-4 flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-3">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
          <circle cx="11" cy="11" r="7" /><line x1="16.5" y1="16.5" x2="21" y2="21" />
        </svg>
        <span className="relative h-5 flex-1 overflow-hidden text-sm text-white/85" style={tiny}>
          <AnimatePresence mode="wait">
            <motion.span
              key={phase}
              className="absolute left-0 top-0 whitespace-nowrap"
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)' }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: 'linear' }}
            >
              {queries[phase]}
            </motion.span>
          </AnimatePresence>
          <motion.span
            className="absolute right-0 top-0.5 h-4 w-px bg-[#ffd426]"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={phase}
          className="space-y-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, delay: phase === 0 ? 0.9 : 0.9 }}
        >
          {phase === 0 ? (
            <>
              <Row rank="#1"><Skeleton strong w="w-3/4" /></Row>
              <Row rank="#2"><Skeleton w="w-2/3" /></Row>
              <Row rank="#3"><Skeleton w="w-3/5" /></Row>
              <Row dashed>
                <span className="text-xs text-white/75" style={tiny}>Votre site</span>
                <span className="ml-auto rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-white/60" style={tiny}>introuvable</span>
              </Row>
            </>
          ) : (
            <>
              <Row highlight rank="#1">
                <span className="text-xs font-semibold text-white" style={tiny}>Votre site</span>
                <span className="ml-auto rounded-full bg-[#ffd426]/20 px-2 py-0.5 text-[10px] text-[#ffd426]" style={tiny}>trouvé</span>
              </Row>
              <Row rank="#2"><Skeleton w="w-2/3" /></Row>
              <Row rank="#3"><Skeleton w="w-3/5" /></Row>
              <div className="px-1 pt-1 text-[11px] leading-snug text-white/55" style={tiny}>
                Mais qui tape déjà le nom de votre entreprise ?
              </div>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

/* 03 : demandes à 800 € alors que le panier moyen est à 15 000 € */
function ViewBudget() {
  return (
    <motion.div {...view}>
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/55" style={tiny}>Appels reçus</p>
      <div className="space-y-2">
        {[0, 1, 2].map((i) => (
          <motion.div key={i} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.2, duration: 0.4 }}>
            <Row>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
              </svg>
              <Skeleton w={['w-2/3', 'w-3/5', 'w-1/2'][i]} />
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-[11px] font-semibold text-white/75" style={tiny}>800 €</span>
            </Row>
          </motion.div>
        ))}
      </div>

      <div className="mt-5 space-y-3">
        <div>
          <div className="mb-1.5 flex items-baseline justify-between text-[11px] text-white/60" style={tiny}>
            <span>Demandes reçues</span><span className="font-semibold text-white/80">800 €</span>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
            <motion.div className="h-full rounded-full bg-white/55" initial={{ width: 0 }} animate={{ width: '5.3%' }} transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} />
          </div>
        </div>
        <div>
          <div className="mb-1.5 flex items-baseline justify-between text-[11px] text-white/60" style={tiny}>
            <span>Votre panier moyen</span><span className="font-semibold text-[#ffd426]">15 000 €</span>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
            <motion.div className="h-full rounded-full bg-[#ffd426]" initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ delay: 1.1, duration: 1.1, ease: [0.16, 1, 0.3, 1] }} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function StoryCard({ step, animate }: { step: number; animate: boolean }) {
  return (
    <div className="relative w-full max-w-sm rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]" aria-hidden="true">
      <div className="min-h-[300px]">
        <AnimatePresence mode="wait">
          {step === 0 && <ViewEmpty key="s0" />}
          {step === 1 && <ViewSearch key="s1" animate={animate} />}
          {step === 2 && <ViewBudget key="s2" />}
        </AnimatePresence>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2">
        <div className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-[#ffd426]" />
        <AnimatePresence mode="wait">
          <motion.span
            key={step}
            className="text-xs text-white/65"
            style={tiny}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25 }}
          >
            {captions[step]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* indicateur d'étape */}
      <div className="mt-4 flex justify-center gap-1.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{ width: i === step ? 22 : 6, background: i === step ? '#ffd426' : 'rgba(255,255,255,0.25)' }}
          />
        ))}
      </div>
    </div>
  );
}

/* ───────────── Section complète ───────────── */

type Mode = 'static' | 'pinned' | 'cycle';

export default function ProblemStory() {
  const [step, setStep] = useState(0);
  const [mode, setMode] = useState<Mode>('static');
  const [reduced, setReduced] = useState(false);
  const outerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  /*
    Trois façons de piloter la carte selon l'écran :
    - pinned : grand écran. La section reste épinglée, et le défilement déplie les points un à un.
    - static : écran large mais bas, ou animations réduites. Tout le texte reste ouvert,
               la carte suit le point au centre de l'écran.
    - cycle  : mobile. La carte passe d'une situation à l'autre toute seule.
  */
  useEffect(() => {
    const mqDesktop = window.matchMedia('(min-width: 768px)');
    const mqReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => {
      setReduced(mqReduced.matches);
      if (!mqDesktop.matches) setMode('cycle');
      else if (mqReduced.matches || window.innerHeight < 720) setMode('static');
      else setMode('pinned');
    };
    sync();
    mqDesktop.addEventListener('change', sync);
    mqReduced.addEventListener('change', sync);
    window.addEventListener('resize', sync);
    return () => {
      mqDesktop.removeEventListener('change', sync);
      mqReduced.removeEventListener('change', sync);
      window.removeEventListener('resize', sync);
    };
  }, []);

  // pinned : l'avancement du défilement dans la zone épinglée choisit l'étape.
  useEffect(() => {
    if (mode !== 'pinned') return;
    const update = () => {
      const outer = outerRef.current;
      const sticky = stickyRef.current;
      if (!outer || !sticky) return;
      const top = outer.getBoundingClientRect().top;
      const travel = outer.offsetHeight - sticky.offsetHeight - 96;
      const p = Math.min(1, Math.max(0, (96 - top) / Math.max(travel, 1)));
      setStep(p < 0.3 ? 0 : p < 0.64 ? 1 : 2);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [mode]);

  // static : la situation au centre de l'écran pilote la carte.
  useEffect(() => {
    if (mode !== 'static') return;
    const els = itemRefs.current.filter(Boolean) as HTMLDivElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setStep(Number((e.target as HTMLElement).dataset.step));
        });
      },
      { rootMargin: '-35% 0px -45% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [mode]);

  // cycle : mobile, la carte déroule les situations toute seule.
  useEffect(() => {
    if (mode !== 'cycle' || reduced) return;
    const id = setInterval(() => setStep((s) => (s + 1) % situations.length), 5200);
    return () => clearInterval(id);
  }, [mode, reduced]);

  const pinned = mode === 'pinned';
  const cardSticky = mode === 'static'; // en pinned, c'est toute la section qui est épinglée

  return (
    <div ref={outerRef} style={pinned ? { height: '250vh' } : undefined}>
      <div ref={stickyRef} className={pinned ? 'sticky top-24' : ''}>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[2fr_3fr]">
          {/* colonne gauche : la carte qui raconte */}
          <div className={`flex flex-col gap-10 ${cardSticky ? 'md:sticky md:top-32 md:self-start' : 'md:self-start'}`}>
            <ScrollReveal delay={0.15}>
              <StoryCard step={step} animate={!reduced} />
            </ScrollReveal>
          </div>

          {/* colonne droite : le texte qui se déplie */}
          <div className={pinned ? 'space-y-6' : 'space-y-10'}>
            <ScrollReveal delay={0.1}>
              <h2 style={{ fontFamily: 'Satoshi, "Satoshi Fallback", ui-sans-serif, system-ui, -apple-system, sans-serif', fontStyle: 'normal', fontWeight: 700, fontSize: 'clamp(32px, 4.5vw, 48px)', lineHeight: '1.1', color: 'white' }}>
                Vous vous <span className="glow text-[#ffd426]">reconnaissez</span> ?
              </h2>
              <p className="mt-5 max-w-[60ch] text-white/70" style={body}>
                Trois situations que j&apos;entends à chaque appel. Si l&apos;une d&apos;elles vous parle, vous êtes au bon endroit.
              </p>
            </ScrollReveal>

            <div>
              {situations.map((item, i) => {
                const isStep = i === step;
                const open = !pinned || isStep; // pinned : un seul point déplié à la fois
                const dim = mode !== 'cycle' && !isStep;
                return (
                  <ScrollReveal key={item.title} delay={0.15 + i * 0.08}>
                    <div
                      ref={(el) => { itemRefs.current[i] = el; }}
                      data-step={i}
                      className={`grid grid-cols-[40px_1fr] gap-5 border-t border-white/10 first:border-t-0 first:pt-0 ${pinned ? 'py-4' : 'py-7'}`}
                      style={{ opacity: dim ? (pinned ? 0.55 : 0.4) : 1, transition: 'opacity 0.5s ease' }}
                    >
                      <span
                        className="pt-1 text-[#ffd426]"
                        style={{
                          fontFamily: 'Satoshi, sans-serif',
                          fontWeight: 700,
                          fontSize: '17px',
                          textShadow: mode !== 'cycle' && isStep ? '0 0 14px rgba(255,212,38,0.85), 0 0 32px rgba(255,212,38,0.45)' : 'none',
                          transition: 'text-shadow 0.5s ease',
                        }}
                        aria-hidden="true"
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="text-white" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '21px', lineHeight: '1.3' }}>
                          {item.title}
                        </h3>
                        {/* Le texte reste dans la page (lisible par Google), il est seulement replié visuellement. */}
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateRows: open ? '1fr' : '0fr',
                            opacity: open ? 1 : 0,
                            transition: reduced ? 'none' : 'grid-template-rows 0.6s cubic-bezier(0.16,1,0.3,1), opacity 0.45s ease',
                          }}
                        >
                          <div className="overflow-hidden">
                            <p className="mt-2 max-w-[58ch] text-white/65" style={body}>{item.text}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            <ScrollReveal delay={0.4}>
              <div
                className="border-l-2 border-[#ffd426]/40 pl-5"
                style={{ opacity: pinned && step < 2 ? 0.35 : 1, transition: 'opacity 0.5s ease' }}
              >
                <p className="text-white" style={body}>
                  Ces trois problèmes ont la même cause. Votre visibilité locale n&apos;est pas construite. Elle se construit, et ça se mesure.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
