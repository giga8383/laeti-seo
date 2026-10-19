import ScrollReveal from './ScrollReveal';
import { inter } from '@/lib/fonts';

const reviews = [
  {
    quote: 'Merci à Laetitia qui a su optimiser notre fiche Google et améliorer notre visibilité',
    name: 'Pôle Assainissement',
    initials: 'PA',
  },
  {
    quote: 'Je recommande fortement, hausse de mon activité significative',
    name: 'Mathieu Hintzy',
    initials: 'MH',
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-transparent">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <ScrollReveal>
            <p
              className="mb-3 uppercase"
              style={{
                fontFamily: 'Satoshi, "Satoshi Fallback", ui-sans-serif, system-ui, -apple-system, sans-serif',
                fontWeight: 700,
                fontSize: '22px',
                lineHeight: '28px',
                color: '#fceb30',
                textShadow: '0 0 12px rgba(252,235,48,0.7), 0 0 28px rgba(252,235,48,0.4), 0 0 56px rgba(252,235,48,0.2)',
              }}
            >
              Avis clients
            </p>
            <h2
              className="text-white"
              style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(30px, 4vw, 42px)', lineHeight: '1.1' }}
            >
              Ils m&apos;ont confié leur visibilité.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <a
              href="https://share.google/X8yIUSwEfhZAhSRGx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#fceb30] underline underline-offset-4 transition-opacity hover:opacity-80"
              style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '15px' }}
            >
              Consulter les avis Google
            </a>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {reviews.map((r, i) => (
            <ScrollReveal key={r.name} delay={0.08 + i * 0.08} className="h-full">
              <article
                className="flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]"
              >
                <div className="mb-4 text-lg tracking-[0.12em] text-[#fceb30]" role="img" aria-label="5 étoiles sur 5">
                  ★★★★★
                </div>
                <blockquote
                  className="mb-6 text-white/90"
                  style={{ fontFamily: inter.style.fontFamily, fontSize: '18px', lineHeight: '28px' }}
                >
                  « {r.quote} »
                </blockquote>
                <div className="mt-auto flex items-center gap-3">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-white"
                    style={{ fontFamily: inter.style.fontFamily }}
                    aria-hidden="true"
                  >
                    {r.initials}
                  </span>
                  <div style={{ fontFamily: inter.style.fontFamily }}>
                    <strong className="block text-[15px] font-semibold text-white">{r.name}</strong>
                    <span className="block text-[13px] text-white/55">Extrait d&apos;un avis Google</span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
