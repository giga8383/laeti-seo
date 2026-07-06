import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import { inter } from '@/lib/fonts';

const stats = [
  { value: '12+',  label: 'ans en ',          highlight: 'SEO' },
  { value: '22+',  label: 'clients ',          highlight: 'accompagnés' },
  { value: '5j',   label: 'livraison du ',     highlight: 'diagnostic' },
];

export default function About() {
  return (
    <section id="qui-suis-je" className="relative bg-white" style={{ scrollMarginTop: '80px' }}>
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">

        <div className="grid grid-cols-1 gap-16 md:grid-cols-[5fr_6fr] md:gap-24 items-center">

          {/* ── Bloc photos ── */}
          <ScrollReveal>
            <div className="relative mx-auto w-full max-w-[360px] md:max-w-none">

              {/* Glow bleu ambiant — reprend la teinte du fond photo */}
              <div
                className="absolute pointer-events-none"
                style={{
                  inset: '-50px',
                  background: 'radial-gradient(ellipse at 55% 45%, rgba(100,160,190,0.22) 0%, rgba(35,85,182,0.12) 45%, transparent 72%)',
                  zIndex: 0,
                  filter: 'blur(22px)',
                }}
              />

              {/* Glow jaune accent bas droite */}
              <div
                className="absolute pointer-events-none"
                style={{
                  bottom: '-24px',
                  right: '-16px',
                  width: '180px',
                  height: '180px',
                  background: 'radial-gradient(circle, rgba(252,235,48,0.32) 0%, transparent 70%)',
                  zIndex: 0,
                  filter: 'blur(16px)',
                }}
              />

              {/* Liseré jaune décalé lumineux */}
              <div
                className="absolute pointer-events-none"
                style={{
                  inset: '0',
                  transform: 'translate(10px, 10px)',
                  border: '1.5px solid rgba(252,235,48,0.55)',
                  borderRadius: '2.8rem',
                  boxShadow: '0 0 20px 3px rgba(252,235,48,0.20)',
                  zIndex: 0,
                }}
              />

              {/* Photo principale — laeti-2 */}
              <div
                className="relative overflow-hidden rounded-[2.5rem]"
                style={{
                  aspectRatio: '3/4',
                  zIndex: 1,
                  boxShadow:
                    '0 0 0 1.5px rgba(100,160,190,0.25), 0 24px 64px -12px rgba(38,77,140,0.28), 0 0 48px -4px rgba(100,160,190,0.20)',
                }}
              >
                <Image
                  src="/laeti-3.webp"
                  alt="Laeti, consultante SEO local pour les professionnels de l'habitat"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 420px"
                  priority
                  style={{ filter: 'saturate(1.25) hue-rotate(18deg)' }}
                />
                {/* Overlay couleur site — mix-blend-mode soft-light */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'rgba(35,85,182,0.22)',
                    mixBlendMode: 'soft-light',
                  }}
                />
                {/* Dégradé bas */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, rgba(35,85,182,0.30) 0%, transparent 50%)',
                  }}
                />
                {/* Inner glow bord */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-[2.5rem]"
                  style={{
                    boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.20), inset 0 1px 0 rgba(255,255,255,0.40)',
                  }}
                />
              </div>

              {/* Badge flottant haut gauche */}
              <div
                className="absolute -left-5 top-12 rounded-2xl px-4 py-3"
                style={{
                  zIndex: 3,
                  background: 'rgba(255,255,255,0.95)',
                  border: '1px solid rgba(38,77,140,0.12)',
                  backdropFilter: 'blur(12px)',
                  boxShadow:
                    '0 8px 24px -4px rgba(38,77,140,0.14), inset 0 1px 0 rgba(255,255,255,0.9)',
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="flex h-2 w-2 rounded-full"
                    style={{ background: '#fceb30' }}
                  />
                  <p
                    style={{
                      fontFamily: inter.style.fontFamily,
                      fontWeight: 600,
                      fontSize: '13px',
                      lineHeight: '18px',
                      color: '#264d8c',
                    }}
                  >
                    Consultante SEO local
                  </p>
                </div>
              </div>

              {/* Accent jaune décoratif */}
              <div
                className="absolute -bottom-2 right-[38%] rounded-full"
                style={{
                  width: '12px',
                  height: '12px',
                  background: '#fceb30',
                  zIndex: 3,
                  boxShadow: '0 0 12px 3px rgba(252,235,48,0.45)',
                }}
              />

            </div>
          </ScrollReveal>

          {/* ── Texte ── */}
          <div className="flex flex-col gap-7">

            <ScrollReveal delay={0.08}>
              <p
                style={{
                  fontFamily: 'Satoshi, "Satoshi Fallback", "League Spartan", "League Spartan Fallback", ui-sans-serif, system-ui, -apple-system, sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '22px',
                  lineHeight: '28px',
                  color: '#2355b6',
                  textTransform: 'uppercase',
                  textShadow: '0 0 12px rgba(35,85,182,0.6), 0 0 28px rgba(35,85,182,0.35), 0 0 56px rgba(35,85,182,0.15)',
                }}
              >
                Qui suis-je
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.14}>
              <h2
                style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: 700,
                  fontSize: '42px',
                  lineHeight: '1.1',
                  color: '#264d8c',
                }}
              >
                Je suis Laetitia.{' '}
                <span style={{ color: 'rgba(38,77,140,0.35)' }}>
                  J&apos;aide les pros de l&apos;habitat à être mieux visibles là où ça compte.
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p
                style={{
                  fontFamily: 'Inter, "Inter Fallback"',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '26px',
                  color: 'rgba(38,77,140,0.72)',
                  maxWidth: '52ch',
                }}
              >
                J&apos;ai découvert le marketing digital en 2007, et je me suis lancée dans l&apos;e-commerce dès 2008.<br />
                Par la suite, je me suis perfectionnée dans le SEO, un domaine que je pratique depuis plus de 12 ans maintenant.<br />
                J&apos;ai arrêté mon e-commerce en 2014, puis je me suis lancée dans l&apos;affiliation. J&apos;ai tout appris sur le tas en lançant des dizaines de sites.<br />
                Geek dans l&apos;âme, j&apos;adore explorer de nouvelles techniques pour être plus visibles et générer encore plus de chiffre d&apos;affaires.<br />
                Aujourd&apos;hui, je me concentre sur la visibilité locale des professionnels de l&apos;habitat, parce que c&apos;est là que tout se joue.<br />
                Une fiche Google bien structurée peut faire toute la différence face à un concurrent qui rafle les devis.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.26}>
              <p
                style={{
                  fontFamily: 'Inter, "Inter Fallback"',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '26px',
                  color: 'rgba(38,77,140,0.72)',
                  maxWidth: '52ch',
                }}
              >
                Je travaille seule, sans sous-traitance : que vous me cherchiez comme consultante SEO freelance ou comme consultant SEO freelance, c&apos;est la même personne et la même rigueur derrière chaque diagnostic.<br />
                Sur certaines recherches, on me trouve aussi sous l&apos;appellation experte SEO freelance : peu importe le terme exact que vous tapez, quand vous commandez un diagnostic, c&apos;est moi qui analyse et qui rédige.<br />
                Pas de stagiaire, pas de fausses promesses.
              </p>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal delay={0.32}>
              <div
                className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-6 border-t pt-8"
                style={{ borderColor: 'rgba(38,77,140,0.10)' }}
              >
                {stats.map((s, i) => (
                  <div key={i}>
                    <p
                      style={{
                        fontFamily: 'Satoshi, sans-serif',
                        fontWeight: 700,
                        fontSize: '34px',
                        lineHeight: '1',
                        color: '#264d8c',
                      }}
                    >
                      {s.value}
                    </p>
                    <p
                      style={{
                        fontFamily: 'Inter, "Inter Fallback"',
                        fontWeight: 400,
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: 'rgba(38,77,140,0.50)',
                        marginTop: '5px',
                      }}
                    >
                      {s.label}
                      <span style={{ color: '#264d8c', fontWeight: 700 }}>{s.highlight}</span>
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

          </div>
        </div>
      </div>
    </section>
  );
}
