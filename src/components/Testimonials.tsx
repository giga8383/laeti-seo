import ScrollReveal from './ScrollReveal';
import EnvelopeFlight from './EnvelopeFlight';
import { inter } from '@/lib/fonts';

const GOOGLE_REVIEWS_URL = 'https://share.google/X8yIUSwEfhZAhSRGx';

const allReviews = [
  {
    quote: "Si vous êtes perdus comme moi avec votre fiche Google Business ou dans le SEO local, vous êtes au bon endroit. Je recommande fortement, hausse de mon activité significative, je n'y croyais plus. Merci Laetitia.",
    name: 'Mathieu Hintzy',
    initials: 'MH',
  },
  {
    quote: "J'ai fait appel à Laetitia pour un audit d'un site internet. L'idée, avoir un œil neuf sur ce que j'avais déjà mis en place. 2 Quick Wins à mettre en place dans les jours à venir. Je recommande.",
    name: 'Philippe Donnart',
    initials: 'PD',
  },
  {
    quote: "Merci à Laetitia qui a su optimiser notre fiche Google et améliorer notre visibilité, elle a été de bon conseil, très pro !!",
    name: 'Pôle Assainissement',
    initials: 'PA',
  },
];

const rolandReview = {
  quote: "Je ne savais pas trop quoi faire pour être plus visible sur Google, alors j’ai contacté Laetitia. On a pris le temps d’échanger sur mon activité et sur ce que je voulais développer. J’ai pu poser mes questions facilement et ses explications m’ont aidé à mieux comprendre ce qu’il fallait améliorer sur ma fiche Google et mon site. Une collaboration agréable, avec des conseils que je peux vraiment appliquer. Merci à Laetitia pour son écoute et son aide !",
  name: 'Roland Nguyen',
  initials: 'RN',
};

export default function Testimonials({
  showReviewTip = false,
  replacePoleAssainissement = false,
}: {
  showReviewTip?: boolean;
  replacePoleAssainissement?: boolean;
}) {
  const reviews = replacePoleAssainissement
    ? allReviews.map((r) => (r.name === 'Pôle Assainissement' ? rolandReview : r))
    : allReviews;
  return (
    <section className="relative bg-transparent">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <ScrollReveal>
            <p
              className="mb-3 uppercase"
              style={{
                fontFamily: 'Satoshi, "Satoshi Fallback", ui-sans-serif, system-ui, -apple-system, sans-serif',
                fontWeight: 700,
                fontSize: '22px',
                lineHeight: '28px',
                color: '#ffd426',
                textShadow: '0 0 12px rgba(255,212,38,0.7), 0 0 28px rgba(255,212,38,0.4), 0 0 56px rgba(255,212,38,0.2)',
              }}
            >
              Avis Google
            </p>
            <h2
              className="text-white"
              style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(30px, 4vw, 42px)', lineHeight: '1.1' }}
            >
              Ce que disent mes clients
            </h2>
            <p
              className="mt-4 max-w-[62ch] text-white/65"
              style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '26px' }}
            >
              Mes clients sont des artisans et des indépendants. La plupart préfèrent ne pas être cités nommément, et je le respecte. Leurs avis Google sont publics et vérifiables.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block whitespace-nowrap text-[#ffd426] underline underline-offset-4 transition-opacity hover:opacity-80"
              style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '15px' }}
            >
              Voir tous les avis sur Google
            </a>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <ScrollReveal key={r.name} delay={0.08 + i * 0.08} className="h-full">
              <article className="flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]">
                <div className="mb-4 text-lg tracking-[0.12em] text-[#ffd426]" role="img" aria-label="5 étoiles sur 5">
                  ★★★★★
                </div>
                <blockquote
                  className="mb-6 text-white/90"
                  style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '26px' }}
                >
                  « {r.quote} »
                </blockquote>
                <div className="mt-auto flex items-center gap-3">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-white"
                    style={{ fontFamily: inter.style.fontFamily }}
                    aria-hidden="true"
                  >
                    {r.initials}
                  </span>
                  <div style={{ fontFamily: inter.style.fontFamily }}>
                    <strong className="block text-[15px] font-semibold text-white">{r.name}</strong>
                    <span className="block text-[13px] text-white/55">Avis Google</span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {showReviewTip && (
          <ScrollReveal delay={0.2}>
            <aside
              className="relative mt-10 rounded-[1.5rem] border border-[#ffd426]/30 bg-[#ffd426]/[0.06] p-7 md:p-9"
              style={{ fontFamily: inter.style.fontFamily }}
            >
              <EnvelopeFlight className="absolute right-6 top-1/2 hidden h-[240px] w-[380px] -translate-y-1/2 xl:block" />
              <p className="mb-3 text-[18px] font-semibold text-white">Comment demander un avis qui vous sert vraiment</p>
              <p className="max-w-[80ch] text-[15px] leading-[24px] text-white/70">
                Un avis « Super, je recommande » ne dit rien à Google ni à un futur client. Demandez à votre client de préciser{' '}
                <strong className="text-white">son métier ou son type de projet</strong>, <strong className="text-white">sa ville ou son quartier</strong> et{' '}
                <strong className="text-white">ce qui s&apos;est concrètement bien passé</strong> (le délai, la pose, le conseil, le budget tenu).
              </p>
              <p className="mt-4 max-w-[80ch] text-[15px] leading-[24px] text-white/70">
                Voici un exemple de message à envoyer. « Bonjour [prénom], merci pour votre confiance sur [projet]. Si vous avez deux minutes, un avis Google m&apos;aiderait beaucoup. Si vous pouvez préciser votre projet et votre ville, ça m&apos;aide à être trouvé par des clients qui me cherchent près de chez vous. Voici le lien pour le faire [lien fiche Google]. »
              </p>
              <p className="mt-4 max-w-[80ch] text-[15px] leading-[24px] text-white/70">
                Visez un avis par mois, au minimum. Un avis récent et détaillé vaut mieux que dix avis anciens et vagues.
              </p>
            </aside>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
