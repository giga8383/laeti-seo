import ScrollReveal from './ScrollReveal';
import { inter } from '@/lib/fonts';

function GoogleMapCard() {
  return (
    <div className="relative w-full max-w-sm rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]">
      <div className="relative mb-4 h-36 overflow-hidden rounded-xl bg-white/10">
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="gmgrid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gmgrid)" />
        </svg>
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 320 144" xmlns="http://www.w3.org/2000/svg">
          <circle cx="160" cy="72" r="30" fill="none" stroke="rgba(252,235,48,0.15)" strokeWidth="1" />
          <circle cx="160" cy="72" r="55" fill="none" stroke="rgba(252,235,48,0.08)" strokeWidth="1" />
          <circle cx="160" cy="72" r="80" fill="none" stroke="rgba(252,235,48,0.05)" strokeWidth="1" />
        </svg>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
          <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 0C4.925 0 0 4.925 0 11c0 7.778 11 17 11 17s11-9.222 11-17C22 4.925 17.075 0 11 0z" fill="#fceb30" />
            <circle cx="11" cy="11" r="4" fill="#3262ab" />
          </svg>
        </div>
      </div>
      <div className="space-y-2.5">
        {[
          { rank: '#1', active: true },
          { rank: '#2', active: false },
          { rank: '#3', active: false },
        ].map((r) => (
          <div
            key={r.rank}
            className={`flex items-center gap-3 rounded-xl p-3 transition-colors ${
              r.active ? 'border border-[#fceb30]/30 bg-[#fceb30]/10' : 'bg-white/[0.04]'
            }`}
          >
            <div className={`h-2 w-2 rounded-full shrink-0 ${r.active ? 'bg-[#fceb30]' : 'bg-white/25'}`} />
            <div className="flex-1 space-y-1.5">
              <div className={`h-2 rounded-full ${r.active ? 'w-3/4 bg-white/70' : 'w-2/3 bg-white/25'}`} />
              <div className="h-1.5 w-1/2 rounded-full bg-white/15" />
            </div>
            {r.active && <span className="font-mono text-[10px] font-bold text-[#fceb30]">{r.rank}</span>}
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2">
        <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#fceb30]" />
        <span className="text-xs text-white/60">Analyse en cours…</span>
      </div>
    </div>
  );
}

const items = [
  {
    title: 'Vos concurrents apparaissent avant vous',
    text: 'Vous avez une fiche Google, mais vous ne comprenez pas pourquoi d\u2019autres professionnels sont plus visibles dans votre zone.',
  },
  {
    title: 'Votre présence ne reflète pas votre travail',
    text: 'Des photos anciennes, des services peu détaillés ou des avis peu mis en valeur peuvent laisser vos futurs clients hésiter.',
  },
  {
    title: 'Vous ne savez pas par où commencer',
    text: 'Vous voulez consacrer votre temps aux actions utiles pour votre activité. Je vous aide à définir les priorités.',
  },
];

const body = { fontFamily: 'Inter, "Inter Fallback"', fontStyle: 'normal', fontWeight: 400, fontSize: '16px', lineHeight: '26px' } as const;

export default function Problem() {
  return (
    <section className="relative bg-transparent">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[2fr_3fr]">
          {/* left col : label + card */}
          <div className="flex flex-col gap-10 md:sticky md:top-32 md:self-start">
            <ScrollReveal>
              <p className="uppercase tracking-widest" style={{ fontFamily: 'Satoshi, "Satoshi Fallback", "League Spartan", "League Spartan Fallback", ui-sans-serif, system-ui, -apple-system, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '28px', color: '#fceb30', textShadow: '0 0 12px rgba(252,235,48,0.7), 0 0 28px rgba(252,235,48,0.4), 0 0 56px rgba(252,235,48,0.2)' }}>
                Ce qui peut vous freiner
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <GoogleMapCard />
            </ScrollReveal>
          </div>

          {/* right col : text */}
          <div className="space-y-10">
            <ScrollReveal delay={0.1}>
              <h2 style={{ fontFamily: 'Satoshi, "Satoshi Fallback", ui-sans-serif, system-ui, -apple-system, sans-serif', fontStyle: 'normal', fontWeight: 700, fontSize: 'clamp(32px, 4.5vw, 48px)', lineHeight: '1.1', color: 'white' }}>
                Votre savoir-faire doit aussi{' '}
                <span className="text-[#fceb30]">se voir en ligne</span>.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-4">
                <p className="max-w-[60ch] text-white/70" style={body}>
                  Vos réalisations parlent pour vous. Encore faut-il que les clients de votre secteur les découvrent quand ils cherchent un professionnel.
                </p>
                <p className="max-w-[60ch] text-white/70" style={body}>
                  Je regarde ce qui les empêche de vous trouver et ce qui pourrait leur donner davantage confiance pour vous contacter.
                </p>
              </div>
            </ScrollReveal>

            <div>
              {items.map((item, i) => (
                <ScrollReveal key={item.title} delay={0.25 + i * 0.08}>
                  <div className="grid grid-cols-[40px_1fr] gap-5 border-t border-white/10 py-6 first:border-t-0 first:pt-0">
                    <span
                      className="pt-1 text-[#fceb30]"
                      style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '17px' }}
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="mb-2 text-white" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '21px', lineHeight: '1.3' }}>
                        {item.title}
                      </h3>
                      <p className="max-w-[56ch] text-white/65" style={body}>{item.text}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
