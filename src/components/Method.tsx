import ScrollReveal from './ScrollReveal';
import { inter } from '@/lib/fonts';

const steps = [
  {
    title: "L'appel de 20 minutes",
    text: "On se parle, gratuitement. Vous décrivez votre activité, votre zone, ce qui coince. Je vous dis si je peux aider, et si ce n'est pas le cas, je vous le dis aussi. Aucun argumentaire de vente pendant cet appel.",
  },
  {
    title: 'Le diagnostic',
    text: "Si on avance, je réalise le diagnostic visibilité (790 €). C'est un travail d'analyse, pas un devis déguisé. À la fin, vous avez le document et vous décidez.",
  },
  {
    title: 'La restitution et la décision',
    text: "45 minutes pour parcourir le diagnostic ensemble. À l'issue, trois issues possibles : vous appliquez vous-même, vous confiez la mise en œuvre à un prestataire, ou on travaille ensemble en Sprint local. Les trois sont légitimes.",
  },
  {
    title: "L'exécution et le suivi",
    text: "En Sprint local, je pilote les actions, je vous sollicite pour les contenus et les photos, et je vous rends compte chaque mois. Vous gardez la main sur votre site et vos accès, à tout moment.",
  },
];

export default function Method() {
  return (
    <section id="methode" className="relative bg-transparent" style={{ scrollMarginTop: '80px' }}>
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
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
            La méthode
          </p>
          <h2
            className="mb-12 text-white"
            style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(30px, 4vw, 44px)', lineHeight: '1.1' }}
          >
            Comment je travaille
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((s, i) => (
            <ScrollReveal key={s.title} delay={0.08 + i * 0.08}>
              <div className="border-t border-white/15 pt-7">
                <span
                  className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#fceb30] text-[#264d8c]"
                  style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '16px' }}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <h3
                  className="mb-3 text-white"
                  style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '21px', lineHeight: '1.3' }}
                >
                  {s.title}
                </h3>
                <p className="text-white/65" style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '26px' }}>
                  {s.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
