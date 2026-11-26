import { DownloadSimple } from '@phosphor-icons/react/dist/ssr';
import MagneticButton from './MagneticButton';
import ScrollReveal from './ScrollReveal';
import { inter } from '@/lib/fonts';

export default function GuideDownload() {
  return (
    <section
      id="guide"
      className="relative isolate bg-white"
      style={{ backgroundColor: '#ffffff', scrollMarginTop: '80px' }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <ScrollReveal>
          <div
            className="w-full rounded-[2rem] px-8 py-14 text-center md:px-20 md:py-20"
            style={{
              background:
                'linear-gradient(155deg, #cfd1ff 0%, #e9eaff 55%, #ffffff 100%)',
              border: '1px solid rgba(99,102,241,0.6)',
              boxShadow:
                'inset 0 1px 0 rgba(255,255,255,0.80), 0 0 40px -4px rgba(99,102,241,0.45), 0 0 80px -8px rgba(59,63,196,0.25), 0 24px 60px -16px rgba(99,102,241,0.30)',
            }}
          >
            {/* label */}
            <p
              className="mb-5"
              style={{
                fontFamily: 'Satoshi, "Satoshi Fallback", "League Spartan", "League Spartan Fallback", ui-sans-serif, system-ui, -apple-system, sans-serif',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '22px',
                lineHeight: '28px',
                color: '#3b3fc4',
                textTransform: 'uppercase',
                textShadow: '0 0 12px rgba(59,63,196,0.6), 0 0 28px rgba(59,63,196,0.35), 0 0 56px rgba(59,63,196,0.15)',
              }}
            >
              Le guide gratuit TROUVABLE
            </p>

            {/* title */}
            <h2
              className="mx-auto max-w-2xl text-3xl font-bold tracking-tight leading-[1.15] text-[#27279a] md:text-[42px]"
              style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700 }}
            >
              Commencez par vérifier votre présence sur Google.
            </h2>

            {/* subtitle */}
            <p
              className="mx-auto mt-5 max-w-[52ch] text-base leading-relaxed text-[#3b3fc4]/65"
              style={{ fontFamily: inter.style.fontFamily }}
            >
              Sept points à regarder pour repérer les premières améliorations
              possibles sur votre visibilité locale.
            </p>

            {/* CTA */}
            <div className="mt-10 flex justify-center">
              <MagneticButton
                as="a"
                href="https://tally.so/r/rjq8K5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-full bg-[#27279a] px-8 py-4 text-sm font-semibold text-white transition-[filter] duration-300 hover:brightness-110 active:scale-[0.98]"
                strength={0.3}
              >
                <DownloadSimple size={18} weight="bold" />
                Recevoir mon guide TROUVABLE
              </MagneticButton>
            </div>
            <p
              className="mt-4 text-sm text-[#27279a]/55"
              style={{ fontFamily: inter.style.fontFamily }}
            >
              Pour les professionnels de l&apos;habitat
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
