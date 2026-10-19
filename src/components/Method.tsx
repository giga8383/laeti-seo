import ScrollReveal from './ScrollReveal';
import { inter } from '@/lib/fonts';

const steps = [
  {
    title: 'Nous parlons de votre activité',
    text: 'Un premier échange de 20 minutes pour comprendre votre zone, vos objectifs et voir si mes prestations répondent à votre besoin.',
  },
  {
    title: 'J’analyse vos trois leviers',
    text: 'Votre fiche Google, une page locale de votre site et votre présence sur les réseaux sociaux sont examinées pour identifier vos axes d’amélioration.',
  },
  {
    title: 'Vous savez quoi appliquer',
    text: 'Vous recevez les actions à mettre en place dans l’ordre des priorités et des conseils concrets pour votre site et vos réseaux sociaux. Le Sprint local permet ensuite de me confier les actions prévues sur votre fiche Google.',
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
            Vous savez comment avancer.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
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
