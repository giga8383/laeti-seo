'use client';

import { useState } from 'react';
import { Plus, Minus } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { inter } from '@/lib/fonts';

const faqs = [
  {
    q: "Combien de temps avant de voir des résultats ?",
    a: "Le diagnostic est livré sous 5 jours ouvrés. Certaines corrections font effet en quelques semaines. D'autres, comme la construction de votre crédibilité locale, prennent 2 à 4 mois. Je vous donne la clarté sur ce qui bloque et dans quel ordre agir. Les résultats suivent quand les actions sont bien ciblées.",
  },
  {
    q: "Est-ce que le diagnostic seul suffit, ou faut-il faire le sprint ensuite ?",
    a: "Le diagnostic répond à la question de pourquoi vous ne ressortez pas assez. Il vous donne un rapport clair et un plan que vous pouvez appliquer seul. Le sprint, c'est pour ceux qui veulent que je m'en charge à leurs côtés, avec les corrections actionnées et le cap suivi sur 3 mois. Commencer par le diagnostic avant d'envisager le sprint est tout à fait logique.",
  },
  {
    q: "Comment se passe concrètement le diagnostic ?",
    a: "Vous remplissez un formulaire simple sur votre activité, votre zone, votre fiche Google et vos objectifs. J'analyse ensuite votre fiche Google Business Profile, votre positionnement local, vos avis, votre site et vos concurrents directs. Sous 5 jours ouvrés, vous recevez un rapport avec les blocages identifiés et un plan d'action priorisé sur 30 jours. Tout se fait à distance, sans appel préalable.",
  },
  {
    q: "Le sprint inclut-il de la rédaction de contenu ou du site web ?",
    a: "Non. Le sprint se concentre sur votre visibilité locale : fiche Google, stratégie avis, Google Posts mensuels et cohérence locale. Il ne comprend pas de refonte de site ni de création de contenus éditoriaux. Si des corrections légères sur votre site s'imposent, je les signale dans mes recommandations.",
  },
  {
    q: "Est-ce que j'ai besoin d'avoir un site web ?",
    a: "Non, pas obligatoirement. Une fiche Google Business Profile bien optimisée peut suffire dans un premier temps, surtout pour les artisans et profils locaux. Cela dit, un site, même simple, renforce votre crédibilité et votre visibilité. Si c'est un point à traiter, le diagnostic l'identifiera.",
  },
  {
    q: "Y a-t-il un engagement après le sprint de 3 mois ?",
    a: "Aucun engagement tacite. Le sprint dure 3 mois. À l'issue, vous décidez si vous continuez avec moi ou si vous gérez en autonomie avec les bases installées. Pas d'abonnement automatique ni de reconduction silencieuse.",
  },
];

function FaqItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: { q: string; a: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <ScrollReveal delay={0.06 + index * 0.05}>
      <div
        className="rounded-2xl border transition-colors duration-200"
        style={{
          border: isOpen
            ? '1px solid rgba(252,235,48,0.20)'
            : '1px solid rgba(255,255,255,0.08)',
          background: isOpen ? 'rgba(252,235,48,0.04)' : 'rgba(255,255,255,0.03)',
        }}
      >
        <button
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
          aria-expanded={isOpen}
        >
          <span
            className="font-semibold text-white"
            style={{
              fontFamily: inter.style.fontFamily,
              fontSize: '15px',
              lineHeight: '24px',
            }}
          >
            {item.q}
          </span>
          <span
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-200"
            style={{
              background: isOpen ? '#fceb30' : 'rgba(255,255,255,0.08)',
              color: isOpen ? '#264d8c' : 'rgba(255,255,255,0.50)',
            }}
          >
            {isOpen ? <Minus size={13} weight="bold" /> : <Plus size={13} weight="bold" />}
          </span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <p
                className="px-6 pb-6 text-white/55"
                style={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: '14px',
                  lineHeight: '24px',
                }}
              >
                {item.a}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  );
}

export default function OffreFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-transparent">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">

        {/* header */}
        <ScrollReveal>
          <p
            className="mb-4"
            style={{
              fontFamily: 'Satoshi, "Satoshi Fallback", "League Spartan", "League Spartan Fallback", ui-sans-serif, system-ui, -apple-system, sans-serif',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '22px',
              lineHeight: '28px',
              color: 'rgb(252, 235, 48)',
              textTransform: 'uppercase',
              textShadow: '0 0 12px rgba(252,235,48,0.7), 0 0 28px rgba(252,235,48,0.4), 0 0 56px rgba(252,235,48,0.2)',
            }}
          >
            Questions fréquentes
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.07}>
          <h2
            className="mb-12 text-4xl font-bold tracking-tight text-white md:text-5xl"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            Ce que vous voulez savoir avant de décider
          </h2>
        </ScrollReveal>

        {/* accordion */}
        <div className="space-y-3">
          {faqs.map((item, i) => (
            <FaqItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
