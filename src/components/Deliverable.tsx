import ScrollReveal from './ScrollReveal';
import { inter } from '@/lib/fonts';

const points = [
  {
    title: 'Comprendre votre situation',
    text: 'Une analyse de vos points forts et des améliorations à apporter sur ces trois volets.',
  },
  {
    title: 'Savoir par quoi commencer',
    text: 'Les actions à mettre en place, classées par priorité, et des conseils concrets à appliquer.',
  },
  {
    title: 'Poser toutes vos questions',
    text: '45 minutes de restitution pour comprendre l’analyse et les prochaines étapes.',
  },
];

export default function Deliverable() {
  return (
    <section id="diagnostic" className="relative bg-[#f2f5fb]" style={{ scrollMarginTop: '80px' }}>
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1fr_1.2fr] md:gap-20">
          <div>
            <ScrollReveal>
              <p
                className="mb-4 uppercase"
                style={{
                  fontFamily: 'Satoshi, "Satoshi Fallback", ui-sans-serif, system-ui, -apple-system, sans-serif',
                  fontWeight: 700,
                  fontSize: '22px',
                  lineHeight: '28px',
                  color: '#2355b6',
                  textShadow: '0 0 12px rgba(35,85,182,0.6), 0 0 28px rgba(35,85,182,0.35), 0 0 56px rgba(35,85,182,0.15)',
                }}
              >
                Un diagnostic concret
              </p>
              <h2
                className="max-w-[16ch] text-[#264d8c]"
                style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(30px, 4vw, 42px)', lineHeight: '1.1' }}
              >
                Vous repartez avec un plan. Et vous savez quoi en faire.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p
                className="mt-5 text-[#264d8c]/70"
                style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '26px' }}
              >
                Votre diagnostic couvre trois volets : votre fiche Google Business Profile, la visibilité d&apos;une page locale de votre site internet et votre présence sur les réseaux sociaux.
              </p>
              <ul className="mt-7 space-y-5">
                {points.map((p) => (
                  <li key={p.title} style={{ fontFamily: inter.style.fontFamily }}>
                    <strong className="block text-[16px] font-semibold text-[#264d8c]">{p.title}</strong>
                    <span className="mt-0.5 block text-[16px] leading-[26px] text-[#264d8c]/65">{p.text}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#tarif"
                className="mt-6 inline-block py-2 text-[#264d8c] underline underline-offset-4 transition-opacity hover:opacity-75"
                style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '15px' }}
              >
                Voir le contenu et le tarif
              </a>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.15}>
            <figure className="rounded-[1.5rem] border border-[#264d8c]/10 bg-white p-5 shadow-[0_24px_60px_-20px_rgba(38,77,140,0.25)]">
              <img
                src="/rapport-preview.svg"
                alt="Aperçu d'un rapport de diagnostic visibilité"
                width={800}
                height={440}
                loading="lazy"
                className="block h-auto w-full rounded-lg"
              />
              <figcaption
                className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[#264d8c]/60"
                style={{ fontFamily: inter.style.fontFamily, fontSize: '14px' }}
              >
                <span>Exemple de rapport · Valeurs illustratives</span>
                <a
                  href="/rapport-preview.svg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap font-semibold text-[#264d8c] underline underline-offset-4"
                >
                  Agrandir l&apos;aperçu
                </a>
              </figcaption>
            </figure>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
