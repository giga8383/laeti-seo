import Image from 'next/image';
import HeroContent from './HeroContent';
import HeroRoom from './HeroRoom';
import { inter } from '@/lib/fonts';

/* Halos de lumière doux derrière la pièce : 100 % CSS. */
function Halos() {
  return (
    <div className="hero-halos pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <span className="hh hh-a" />
      <span className="hh hh-b" />
      <style>{`
        .hero-halos .hh { position: absolute; display: block; border-radius: 50%; will-change: transform; }
        .hh-a { top: -12%; right: -8%; width: 46vw; height: 46vw; max-width: 640px; max-height: 640px;
                background: radial-gradient(circle at 35% 35%, rgba(255,212,38,0.26), rgba(255,212,38,0) 68%);
                filter: blur(30px); animation: hh-float-a 14s ease-in-out infinite; }
        .hh-b { bottom: -18%; left: -10%; width: 52vw; height: 52vw; max-width: 720px; max-height: 720px;
                background: radial-gradient(circle at 60% 40%, rgba(59,63,196,0.40), rgba(59,63,196,0) 68%);
                filter: blur(36px); animation: hh-float-b 18s ease-in-out infinite; }
        @keyframes hh-float-a { 0%,100% { transform: translate3d(0,0,0); } 50% { transform: translate3d(-30px,40px,0); } }
        @keyframes hh-float-b { 0%,100% { transform: translate3d(0,0,0); } 50% { transform: translate3d(50px,-30px,0); } }
        @media (prefers-reduced-motion: reduce), (max-width: 1023px) { .hero-halos .hh { animation: none !important; filter: none; } }
      `}</style>
    </div>
  );
}

/* Bandeau fin et sobre : filets, texte espacé, défilement très lent. 100 % CSS. */
const bandWords = [
  'Fiche Google',
  'Décorateurs d’intérieur',
  'SEO local',
  'Avis clients',
  'Architectes d’intérieur',
  'Visibilité',
  'Appels entrants',
  'Artisans de l’habitat',
  'Résultats concrets',
];

function HeroBand() {
  return (
    <div className="hero-band relative z-10" aria-hidden="true">
      <div className="hero-band-track">
        {[0, 1].map((k) => (
          <ul key={k} className="hero-band-list">
            {[...bandWords, ...bandWords].map((w, i) => (
              <li key={`${k}-${i}`}>
                <span>{w}</span>
                <i />
              </li>
            ))}
          </ul>
        ))}
      </div>
      <style>{`
        .hero-band { overflow: hidden; border-top: 1px solid rgba(255,255,255,0.14); border-bottom: 1px solid rgba(255,255,255,0.14);
                     background: rgba(14,14,64,0.78);
                     -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
                     mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent); }
        .hero-band-track { display: flex; width: max-content; animation: hero-band-move 70s linear infinite; }
        .hero-band-list { display: flex; flex-shrink: 0; margin: 0; padding: 0; list-style: none; }
        .hero-band-list li { display: flex; align-items: center; gap: 40px; padding: 18px 0 18px 40px;
                             font-family: Inter, "Inter Fallback", sans-serif; font-weight: 500; text-transform: uppercase;
                             font-size: 12px; letter-spacing: 0.28em; color: rgba(255,255,255,0.9); white-space: nowrap; }
        .hero-band-list i { display: block; width: 6px; height: 6px; background: #ffd426; transform: rotate(45deg); }
        @keyframes hero-band-move { to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .hero-band-track { animation: none; } }
      `}</style>
    </div>
  );
}

/* Pastilles flottantes autour de la photo (chiffres déjà présents sur la page). */
function Chip({ children, style }: { children: React.ReactNode; style: React.CSSProperties }) {
  return (
    <div
      className="hero-chip absolute whitespace-nowrap rounded-2xl px-4 py-2.5"
      style={{
        fontFamily: inter.style.fontFamily,
        background: 'rgba(22,22,88,0.82)',
        border: '1px solid rgba(255,255,255,0.22)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 14px 32px -10px rgba(0,0,0,0.5)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative bg-transparent overflow-hidden">
      <Halos />
      <div className="relative mx-auto grid min-h-[calc(100dvh-72px)] max-w-7xl grid-cols-1 content-start items-center gap-12 px-6 pt-28 pb-10 md:content-center md:pt-36 lg:grid-cols-[1.15fr_1fr] lg:gap-6">
        <HeroContent />

        {/* Bureau : la pièce se meuble, ton portrait est posé devant */}
        <div className="relative hidden w-full max-w-[700px] justify-self-end pb-[150px] lg:block">
          <HeroRoom className="w-full" />

          <figure className="absolute bottom-0 right-3 m-0 flex w-[190px] flex-col items-center">
            <div
              className="relative overflow-hidden rounded-full"
              style={{
                width: '190px',
                height: '190px',
                border: '4px solid #ffd426',
                background: '#ffd426',
                boxShadow: '0 0 0 8px rgba(255,212,38,0.18), 0 26px 50px -14px rgba(0,0,0,0.6)',
              }}
            >
              <Image
                src="/laeti-hero.webp"
                alt="Laetitia Laghezza, consultante SEO local pour les professionnels de l'habitat"
                fill
                priority
                sizes="190px"
                className="object-cover"
                style={{ objectPosition: '50% 22%' }}
              />
            </div>
            <figcaption className="pt-3 text-center">
              <strong className="block text-white" style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', fontWeight: 700 }}>
                Laetitia Laghezza
              </strong>
              <span className="block text-white/65" style={{ fontFamily: inter.style.fontFamily, fontSize: '13px' }}>
                Consultante SEO local
              </span>
            </figcaption>
          </figure>

          <Chip style={{ bottom: '262px', right: '4px', animation: 'chip-bob 6s ease-in-out infinite' }}>
            <strong className="block text-[22px] font-extrabold leading-none text-[#ffd426]">5 jours</strong>
            <span className="text-[12px] text-white/75">diagnostic livré</span>
          </Chip>
          <Chip style={{ bottom: '120px', right: '222px', animation: 'chip-bob 7s ease-in-out -2s infinite' }}>
            <strong className="block text-[22px] font-extrabold leading-none text-[#ffd426]">12 ans</strong>
            <span className="text-[12px] text-white/75">de métier</span>
          </Chip>
          <Chip style={{ bottom: '48px', right: '222px', animation: 'chip-bob 8s ease-in-out -4s infinite' }}>
            <strong className="block text-[22px] font-extrabold leading-none text-[#ffd426]">★ 5/5</strong>
            <span className="text-[12px] text-white/75">avis Google</span>
          </Chip>

          <style>{`
            @keyframes chip-bob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
            @media (prefers-reduced-motion: reduce) { .hero-chip { animation: none !important; } }
          `}</style>
        </div>
      </div>
      <HeroBand />
    </section>
  );
}
