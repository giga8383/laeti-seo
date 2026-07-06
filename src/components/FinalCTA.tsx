import MagneticButton from './MagneticButton';
import ScrollReveal from './ScrollReveal';
import { inter } from '@/lib/fonts';

interface FinalCTAProps {
  heading?: React.ReactNode;
  body?: React.ReactNode;
  cta?: string;
}

export default function FinalCTA({
  heading = <>Vos concurrents ressortent avant vous sur Google&nbsp;?</>,
  body = (
    <>
      <p className="mx-auto mt-6 max-w-[50ch] text-base leading-relaxed text-white/65" style={{ fontFamily: inter.style.fontFamily }}>
        Tant que vous ne savez pas ce qui bloque, vous avancez à l&apos;aveugle.
      </p>
      <p className="mx-auto mt-3 max-w-[50ch] text-base leading-relaxed text-white/65" style={{ fontFamily: inter.style.fontFamily }}>
        Je vous aide à faire le point, à prioriser et à corriger ce qui
        freine vraiment votre visibilité locale.
      </p>
      <p className="mx-auto mt-3 max-w-[50ch] text-base leading-relaxed text-white/65" style={{ fontFamily: inter.style.fontFamily }}>
        Basée en Alpes-de-Haute-Provence, j&apos;interviens comme consultant SEO
        région Sud auprès des professionnels de l&apos;habitat de tout le grand
        Sud-Est. Que vous soyez à Digne-les-Bains, à Manosque, à Aix-en-Provence
        ou ailleurs en Provence-Alpes-Côte d&apos;Azur, le référencement freelance
        que je propose reste le même : un accompagnement direct, sans
        sous-traitance, pensé pour des artisans et des indépendants, pas pour
        des comptes-clés d&apos;agence.
      </p>
    </>
  ),
  cta = 'Réserver un diagnostic visibilité locale',
}: FinalCTAProps) {
  return (
    <section className="relative bg-transparent">
      <div className="mx-auto max-w-7xl px-6 py-28 md:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="text-4xl tracking-tight leading-[1.1] text-white md:text-6xl" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700 }}>
              {heading}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            {body}
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div className="mt-12 flex justify-center">
              <MagneticButton
                as="a"
                href="https://calendly.com/laetitia_laghezza_seo_local/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#fceb30] px-9 py-4 text-[#264d8c] transition-[filter] duration-300 hover:brightness-105 active:scale-[0.98]"
                style={{ fontFamily: 'Inter, "Inter Fallback"', fontStyle: 'normal', fontWeight: 400, fontSize: '16px', lineHeight: '24px' }}
                strength={0.35}
              >
                {cta}
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </div>


    </section>
  );
}
