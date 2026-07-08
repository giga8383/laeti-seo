import { inter } from '@/lib/fonts';

/*
  Bandeau d'avis défilant (marquee), 100 % CSS — aucun script externe,
  compatible avec la CSP stricte du site. Pause au survol, et sur
  prefers-reduced-motion le défilement s'arrête et devient scrollable.

  Pour ajouter un avis (Google ou Pages Jaunes), il suffit d'ajouter une
  entrée dans le tableau `reviews` ci-dessous.
*/

const GOOGLE_URL = 'https://share.google/X8yIUSwEfhZAhSRGx';
const PJ_URL = 'https://www.pagesjaunes.fr/pros/64458463';

type Review = {
  name: string;
  text: string;
  source: 'google' | 'pagesjaunes';
  avatarColor: string;
};

const reviews: Review[] = [
  {
    name: 'mathieu hintzy',
    avatarColor: '#7e57c2',
    source: 'google',
    text: "Si vous êtes perdus comme moi avec votre fiche Google Business ou dans le SEO local, vous êtes au bon endroit. Je recommande fortement, hausse de mon activité significative, je n'y croyais plus. Merci Laetitia.",
  },
  {
    name: 'Pole Assainissement',
    avatarColor: '#8e24aa',
    source: 'google',
    text: "Merci à Laetitia qui a su optimiser notre fiche Google et améliorer notre visibilité, elle a été de bon conseil, très pro !!",
  },
  {
    name: 'Philippe DONNART',
    avatarColor: '#546e7a',
    source: 'google',
    text: "J'ai fait appel à Laetitia pour un audit d'un site internet. L'idée, avoir un œil neuf sur ce que j'avais déjà mis en place. 2 Quick Wins à mettre en place dans les jours à venir. Je recommande.",
  },
  {
    name: 'taxi dunkerque',
    avatarColor: '#5c6bc0',
    source: 'google',
    text: "Un grand merci à Laetitia pour ses conseils, c'est une très bonne personne et en plus de ça très professionnel, merci beaucoup pour ces avis très précieux. À très bientôt.",
  },
  {
    name: 'mamie gisou',
    avatarColor: '#e53935',
    source: 'google',
    text: "J'ai fait appel à Laetitia, coach SEO, pour améliorer la visibilité de mon site et avoir quelques conseils stratégiques, tout en respectant l'anonymat de mon activité. Laetitia est très professionnelle, à l'écoute et surtout très pédagogue. Elle prend le temps d'expliquer, propose des actions claires et efficaces, et on se sent vraiment accompagnée à chaque étape. Grâce à son travail, ma présence sur Google s'est nettement améliorée. Je recommande Laetitia sans hésiter à toute personne souhaitant développer son activité et sa visibilité locale avec une approche humaine et sérieuse.",
  },
];

function GoogleBadge() {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1"
      style={{ background: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.15)' }}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      </svg>
      <span style={{ fontFamily: inter.style.fontFamily, fontSize: '11px', fontWeight: 600, color: '#5f6368' }}>Google</span>
    </span>
  );
}

function PagesJaunesBadge() {
  return (
    <span
      className="inline-flex items-center rounded-full px-2.5 py-1"
      style={{ background: '#ffde00' }}
    >
      <span style={{ fontFamily: inter.style.fontFamily, fontSize: '11px', fontWeight: 700, color: '#1a1a1a' }}>Pages Jaunes</span>
    </span>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="Note : 5 étoiles sur 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="#fceb30" aria-hidden="true">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const href = review.source === 'google' ? GOOGLE_URL : PJ_URL;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="reviews-card"
      style={{ textDecoration: 'none' }}
    >
      {/* En-tête : avatar + nom + source */}
      <div className="mb-3 flex items-center gap-3">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
          style={{ background: review.avatarColor, color: '#fff', fontFamily: inter.style.fontFamily, fontWeight: 700, fontSize: '15px' }}
        >
          {review.name.charAt(0).toUpperCase()}
        </span>
        <span
          className="flex-1 truncate"
          style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '14px', color: '#fff' }}
        >
          {review.name}
        </span>
        {review.source === 'google' ? <GoogleBadge /> : <PagesJaunesBadge />}
      </div>

      <Stars />

      <p
        className="mt-3"
        style={{
          fontFamily: inter.style.fontFamily,
          fontSize: '14px',
          lineHeight: '22px',
          color: 'rgba(255,255,255,0.7)',
          display: '-webkit-box',
          WebkitLineClamp: 6,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {review.text}
      </p>

      <span
        className="mt-4 inline-flex items-center gap-1"
        style={{ fontFamily: inter.style.fontFamily, fontSize: '12px', fontWeight: 600, color: 'rgba(252,235,48,0.85)', marginTop: 'auto', paddingTop: '16px' }}
      >
        Voir l&apos;avis ↗
      </span>
    </a>
  );
}

export default function ReviewsMarquee() {
  const loop = [...reviews, ...reviews];

  return (
    <section className="relative bg-transparent py-16 md:py-20">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .reviews-marquee { overflow: hidden; -webkit-mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent); mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent); }
            .reviews-track { display: flex; width: max-content; animation: reviews-scroll 55s linear infinite; }
            .reviews-marquee:hover .reviews-track { animation-play-state: paused; }
            .reviews-card { display: flex; flex-direction: column; width: 340px; margin-right: 20px; padding: 22px; border-radius: 20px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.09); box-shadow: inset 0 1px 0 rgba(255,255,255,0.06); transition: border-color .25s ease, background .25s ease, transform .25s ease; }
            .reviews-card:hover { border-color: rgba(252,235,48,0.4); background: rgba(255,255,255,0.06); transform: translateY(-3px); }
            @keyframes reviews-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
            @media (prefers-reduced-motion: reduce) {
              .reviews-marquee { overflow-x: auto; -webkit-overflow-scrolling: touch; }
              .reviews-track { animation: none; }
            }
          `,
        }}
      />

      {/* En-tête */}
      <div className="mx-auto mb-10 max-w-7xl px-6 text-center">
        <p
          className="mb-3 uppercase tracking-widest"
          style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '13px', color: '#fceb30', textShadow: '0 0 12px rgba(252,235,48,0.6)' }}
        >
          Avis clients
        </p>
        <h2
          className="mx-auto mb-4 max-w-[24ch] text-white"
          style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(26px, 3.2vw, 40px)', lineHeight: '1.15' }}
        >
          Ce qu&apos;en disent les professionnels que j&apos;accompagne
        </h2>
        <div className="flex items-center justify-center gap-2">
          <Stars />
          <span style={{ fontFamily: inter.style.fontFamily, fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>
            5,0 sur Google
          </span>
        </div>
      </div>

      {/* Bandeau défilant */}
      <div className="reviews-marquee">
        <div className="reviews-track">
          {loop.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>

      {/* Liens vers les plateformes */}
      <div className="mx-auto mt-10 flex max-w-7xl flex-wrap items-center justify-center gap-4 px-6">
        <a
          href={GOOGLE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 transition-colors"
          style={{ fontFamily: inter.style.fontFamily, fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.8)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.14)' }}
        >
          Voir tous mes avis Google ↗
        </a>
        <a
          href={PJ_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 transition-colors"
          style={{ fontFamily: inter.style.fontFamily, fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.8)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.14)' }}
        >
          Voir mes avis Pages Jaunes ↗
        </a>
      </div>
    </section>
  );
}
