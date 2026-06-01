import { CheckCircle, XCircle } from '@phosphor-icons/react/dist/ssr';
import ScrollReveal from './ScrollReveal';
import { inter } from '@/lib/fonts';

const forYes = [
  {
    title: "Vous exercez dans l'habitat",
    desc: "Décorateur, architecte d'intérieur, cuisiniste, menuisier, artisan. Vous avez une activité locale et vous cherchez à attirer plus de clients dans votre zone.",
  },
  {
    title: "Vous voulez comprendre ce qui bloque",
    desc: "Vous êtes visible sur Google, mais pas assez. Vous ne savez pas pourquoi vos concurrents ressortent avant vous.",
  },
  {
    title: "Vous cherchez des demandes qualifiées",
    desc: "Pas du trafic sans suite. De vraies demandes, de gens qui cherchent exactement ce que vous faites, dans votre secteur.",
  },
  {
    title: "Vous êtes prêt à agir",
    desc: "Vous voulez un plan clair, pas un rapport que personne ne lit. Et vous êtes prêt à appliquer ce qui est prioritaire.",
  },
];

const forNo = [
  {
    title: "Votre activité n'est pas encore définie",
    desc: "Si votre zone, vos services ou votre offre ne sont pas encore stables, un diagnostic ne peut pas vous aider. Les bases doivent exister avant.",
  },
  {
    title: "Vous voulez externaliser entièrement",
    desc: "Je livre un diagnostic et un plan. Le sprint inclut de l'exécution sur votre fiche Google, mais ce n'est pas une gestion complète à votre place.",
  },
  {
    title: "Vous attendez des résultats immédiats",
    desc: "Le SEO local prend du temps. Certaines corrections font effet en quelques semaines, d'autres en quelques mois. Si vous cherchez du trafic payant rapide, ce n'est pas ce que je fais.",
  },
  {
    title: "Vous êtes déjà bien accompagné",
    desc: "Si vous travaillez avec une agence SEO active, ce diagnostic serait redondant. Si vous avez un prestataire mais que les résultats ne viennent pas, c'est une autre conversation.",
  },
];

function Card({
  item,
  type,
  delay,
}: {
  item: { title: string; desc: string };
  type: 'yes' | 'no';
  delay: number;
}) {
  const isYes = type === 'yes';
  return (
    <ScrollReveal delay={delay}>
      <div
        className="flex gap-4 rounded-2xl p-5"
        style={{
          background: isYes ? 'rgba(252,235,48,0.05)' : 'rgba(255,255,255,0.03)',
          border: `1px solid ${isYes ? 'rgba(252,235,48,0.15)' : 'rgba(255,255,255,0.08)'}`,
        }}
      >
        <span className="mt-0.5 shrink-0">
          {isYes ? (
            <CheckCircle size={20} weight="fill" style={{ color: '#fceb30' }} />
          ) : (
            <XCircle size={20} weight="fill" style={{ color: 'rgba(255,255,255,0.25)' }} />
          )}
        </span>
        <div>
          <p
            className="mb-1 font-semibold text-white"
            style={{ fontFamily: inter.style.fontFamily, fontSize: '15px', lineHeight: '22px' }}
          >
            {item.title}
          </p>
          <p
            className="text-white/50"
            style={{ fontFamily: inter.style.fontFamily, fontSize: '14px', lineHeight: '22px' }}
          >
            {item.desc}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function OffreForWho() {
  return (
    <section className="relative bg-transparent">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">

        {/* header */}
        <ScrollReveal>
          <p
            className="mb-4 uppercase tracking-widest"
            style={{
              fontFamily: inter.style.fontFamily,
              fontWeight: 600,
              fontSize: '15px',
              lineHeight: '22px',
              color: '#fceb30',
              textShadow:
                '0 0 12px rgba(252,235,48,0.7), 0 0 28px rgba(252,235,48,0.4), 0 0 56px rgba(252,235,48,0.2)',
            }}
          >
            Pour qui&nbsp;?
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.07}>
          <h2
            className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            Ces offres sont faites pour vous si&hellip;
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.12}>
          <p
            className="mb-14 max-w-[55ch] text-white/55"
            style={{
              fontFamily: 'Inter, "Inter Fallback"',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '26px',
            }}
          >
            Avant de réserver, un point de clarté.<br />Ces offres ne sont pas des solutions miracles.<br />Dans le bon contexte, elles changent vraiment la donne.
          </p>
        </ScrollReveal>

        {/* two-column grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

          {/* column YES */}
          <div>
            <ScrollReveal delay={0.14}>
              <div className="mb-5 flex items-center gap-3">
                <span
                  className="h-px flex-1"
                  style={{ background: 'rgba(252,235,48,0.25)' }}
                />
                <span
                  className="rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest"
                  style={{
                    fontFamily: inter.style.fontFamily,
                    background: 'rgba(252,235,48,0.12)',
                    color: '#fceb30',
                    border: '1px solid rgba(252,235,48,0.25)',
                  }}
                >
                  C&apos;est pour vous
                </span>
                <span
                  className="h-px flex-1"
                  style={{ background: 'rgba(252,235,48,0.25)' }}
                />
              </div>
            </ScrollReveal>
            <div className="space-y-3">
              {forYes.map((item, i) => (
                <Card key={i} item={item} type="yes" delay={0.18 + i * 0.06} />
              ))}
            </div>
          </div>

          {/* column NO */}
          <div>
            <ScrollReveal delay={0.14}>
              <div className="mb-5 flex items-center gap-3">
                <span
                  className="h-px flex-1"
                  style={{ background: 'rgba(255,255,255,0.10)' }}
                />
                <span
                  className="rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest"
                  style={{
                    fontFamily: inter.style.fontFamily,
                    background: 'rgba(255,255,255,0.05)',
                    color: 'rgba(255,255,255,0.40)',
                    border: '1px solid rgba(255,255,255,0.10)',
                  }}
                >
                  Pas pour vous
                </span>
                <span
                  className="h-px flex-1"
                  style={{ background: 'rgba(255,255,255,0.10)' }}
                />
              </div>
            </ScrollReveal>
            <div className="space-y-3">
              {forNo.map((item, i) => (
                <Card key={i} item={item} type="no" delay={0.18 + i * 0.06} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
