'use client';

import { useState } from 'react';
import { Plus, Minus } from '@phosphor-icons/react';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { inter } from '@/lib/fonts';
import { homeFaqs } from '@/lib/home-faq';

const faqs = homeFaqs;

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-4 py-6 text-left transition-colors duration-200 hover:text-white"
        aria-expanded={open}
      >
        <span className="text-white/85" style={{ fontFamily: 'Inter, "Inter Fallback"', fontStyle: 'normal', fontWeight: 400, fontSize: '16px', lineHeight: '26px' }}>{q}</span>
        <span className="mt-0.5 shrink-0 text-[#fceb30]">
          {open ? <Minus size={18} weight="bold" /> : <Plus size={18} weight="bold" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p className="pb-6 text-white/60" style={{ fontFamily: 'Inter, "Inter Fallback"', fontStyle: 'normal', fontWeight: 400, fontSize: '16px', lineHeight: '26px' }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative bg-transparent" style={{ scrollMarginTop: '80px' }}>
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[2fr_3fr]">
          <ScrollReveal>
            <p className="mb-3" style={{ fontFamily: 'Satoshi, "Satoshi Fallback", "League Spartan", "League Spartan Fallback", ui-sans-serif, system-ui, -apple-system, sans-serif', fontStyle: 'normal', fontWeight: 700, fontSize: '22px', lineHeight: '28px', color: 'rgb(252, 235, 48)', textTransform: 'uppercase', textShadow: '0 0 12px rgba(252,235,48,0.7), 0 0 28px rgba(252,235,48,0.4), 0 0 56px rgba(252,235,48,0.2)' }}>
              Questions fréquentes
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Avant de faire le premier pas.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div>
              {faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
