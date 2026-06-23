import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import { inter } from '@/lib/fonts';
import { ArrowDown, ArrowLeft } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

const PDF_PATH = '/guide-trouvable-seo-local.pdf';
const PDF_LABEL = 'guide-trouvable-seo-local.pdf';

export const metadata: Metadata = {
  title: 'TROUVABLE · Le guide SEO local gratuit | Laeti SEO',
  description:
    "Téléchargez TROUVABLE, le guide SEO local offert par Laeti SEO : 7 points pour améliorer votre visibilité Google en tant que professionnel de l'habitat.",
  alternates: {
    canonical: 'https://laeti-seo.fr/Guide-Trouvable',
  },
  robots: { index: true, follow: true },
  openGraph: {
    url: 'https://laeti-seo.fr/Guide-Trouvable',
    title: 'TROUVABLE · Le guide SEO local gratuit | Laeti SEO',
    description:
      "7 points concrets pour améliorer votre visibilité locale sur Google. Guide offert pour les professionnels de l'habitat.",
  },
};

export default function GuideTrouvable() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'linear-gradient(165deg, #0c1a40 0%, #112258 55%, #0f1e48 100%)', minHeight: '100vh' }}>

        {/* Hero */}
        <section style={{ paddingTop: '120px' }}>
          <div className="mx-auto max-w-4xl px-6 pt-12 pb-10">

            {/* Retour */}
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 transition-opacity hover:opacity-80"
              style={{ fontFamily: inter.style.fontFamily, fontSize: '13px', color: 'rgba(255,255,255,0.40)', textDecoration: 'none' }}
            >
              <ArrowLeft size={13} weight="bold" />
              Retour à l&apos;accueil
            </Link>

            {/* Badge */}
            <p
              className="mt-6 mb-3 uppercase tracking-widest"
              style={{
                fontFamily: inter.style.fontFamily,
                fontWeight: 600,
                fontSize: '12px',
                color: '#fceb30',
                textShadow: '0 0 12px rgba(252,235,48,0.6)',
              }}
            >
              Guide offert
            </p>

            {/* Titre */}
            <h1
              className="mb-5 text-white"
              style={{
                fontFamily: 'Satoshi, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(32px, 5vw, 56px)',
                lineHeight: '1.1',
              }}
            >
              TROUVABLE{' '}
              <span style={{ color: '#fceb30', textShadow: '0 0 18px rgba(252,235,48,0.45)' }}>
                Le guide SEO local
              </span>
            </h1>

            <p
              className="mb-8 max-w-[56ch] text-white/55"
              style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '27px' }}
            >
              7 points concrets pour améliorer votre visibilité sur Google et recevoir plus de demandes
              de devis qualifiées — sans jargon technique.
            </p>

            {/* CTA téléchargement */}
            <a
              href="https://tally.so/r/rjq8K5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#fceb30] px-6 py-3.5 font-bold text-[#264d8c] transition-all hover:brightness-105 active:scale-[0.98]"
              style={{ fontFamily: inter.style.fontFamily, fontSize: '15px', textDecoration: 'none' }}
            >
              <ArrowDown size={15} weight="bold" />
              Télécharger le guide (PDF)
            </a>

          </div>
        </section>

        {/* CTA bas */}
        <section>
          <div className="mx-auto max-w-4xl px-6 py-16 text-center">
            <p
              className="mb-3 text-white/50"
              style={{ fontFamily: inter.style.fontFamily, fontSize: '14px' }}
            >
              Vous voulez aller plus loin ?
            </p>
            <h2
              className="mb-6 text-white"
              style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', lineHeight: '1.2' }}
            >
              Faites auditer votre visibilité locale
            </h2>
            <Link
              href="/audit-seo-local"
              className="inline-flex items-center gap-2 rounded-full bg-[#fceb30] px-6 py-3.5 font-bold text-[#264d8c] transition-all hover:brightness-105 active:scale-[0.98]"
              style={{ fontFamily: inter.style.fontFamily, fontSize: '15px' }}
            >
              Découvrir l&apos;audit SEO local · 190 €
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
