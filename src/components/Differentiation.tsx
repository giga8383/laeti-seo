import ScrollReveal from './ScrollReveal';
import { inter } from '@/lib/fonts';

const points = [
  'votre présence locale',
  'votre crédibilité',
  'vos concurrents',
  'vos points faibles visibles',
  'les corrections qui peuvent vous remettre dans la course',
];

export default function Differentiation() {
  return (
    <section className="relative bg-transparent">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_2fr]">
          <ScrollReveal>
            <p style={{ fontFamily: 'Satoshi, "Satoshi Fallback", "League Spartan", "League Spartan Fallback", ui-sans-serif, system-ui, -apple-system, sans-serif', fontStyle: 'normal', fontWeight: 700, fontSize: '22px', lineHeight: '28px', color: 'rgb(252, 235, 48)', textTransform: 'uppercase', textShadow: '0 0 12px rgba(252,235,48,0.7), 0 0 28px rgba(252,235,48,0.4), 0 0 56px rgba(252,235,48,0.2)' }}>
              L&apos;approche
            </p>
          </ScrollReveal>

          <div className="space-y-8">
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl font-bold tracking-tight leading-[1.1] text-white md:text-5xl">
                Une approche terrain,{' '}
                <span className="text-white/40">
                  pas une couche de marketing en plus
                </span>
                .
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="max-w-[60ch] text-white/70"
                style={{ fontFamily: 'Inter, "Inter Fallback"', fontStyle: 'normal', fontWeight: 400, fontSize: '16px', lineHeight: '26px' }}>
                Je ne vends pas du SEO pour faire joli. Je travaille la
                visibilité locale comme un levier concret. L&apos;objectif est
                de vous aider à être trouvé par les bonnes personnes, dans
                la bonne zone, au bon moment.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="max-w-[60ch] text-white/70"
                style={{ fontFamily: 'Inter, "Inter Fallback"', fontStyle: 'normal', fontWeight: 400, fontSize: '16px', lineHeight: '26px' }}>
                Je ne vous noie pas dans les acronymes, les promesses floues ou
                les stratégies impossibles à tenir.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="border-l-2 border-[#fceb30]/50 pl-6">
                <p className="mb-4 text-sm text-white/55">
                  Ce que je regarde concrètement
                </p>
                <ul className="space-y-2">
                  {points.map((p, i) => (
                    <li key={i} className="text-base font-medium text-white/80">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
