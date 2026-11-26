import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';
import { inter } from '@/lib/fonts';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';
import { getSortedPosts } from '@/lib/blog-posts';

const articles = getSortedPosts();

export const metadata: Metadata = {
  title: "Blog SEO local, Conseils pour professionnels de l'habitat",
  description:
    "Conseils pratiques sur le référencement local, Google Business Profile et la visibilité en ligne pour les décorateurs, cuisinistes, menuisiers et artisans du bâtiment.",
  alternates: {
    canonical: 'https://laeti-seo.fr/blog',
  },
  openGraph: {
    url: 'https://laeti-seo.fr/blog',
    images: [{ url: 'https://laeti-seo.fr/og-image-2.jpg', width: 2400, height: 1260, alt: 'Laeti SEO, consultante SEO local pour artisans et professionnels de l’habitat' }],
  },
};

const BLOG_URL = 'https://laeti-seo.fr/blog';

/* -- Données structurées JSON-LD : Blog + BlogPosting (WebSite, Person et LocalBusiness sont dans le <head> du layout) -- */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${BLOG_URL}#webpage`,
      url: BLOG_URL,
      name: "Blog SEO local, Conseils pour professionnels de l'habitat",
      description:
        'Conseils pratiques sur le référencement local, Google Business Profile et la visibilité en ligne pour les décorateurs, cuisinistes, menuisiers et artisans du bâtiment.',
      inLanguage: 'fr-FR',
      isPartOf: { '@id': 'https://laeti-seo.fr/#website' },
      breadcrumb: { '@id': `${BLOG_URL}#breadcrumb` },
      mainEntity: { '@id': `${BLOG_URL}#blog` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${BLOG_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://laeti-seo.fr/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: BLOG_URL },
      ],
    },
    {
      '@type': 'Blog',
      '@id': `${BLOG_URL}#blog`,
      url: BLOG_URL,
      name: 'Blog SEO local de Laeti SEO',
      description:
        "Conseils sur le référencement local, Google Business Profile et la visibilité en ligne des professionnels de l'habitat.",
      inLanguage: 'fr-FR',
      isPartOf: { '@id': 'https://laeti-seo.fr/#website' },
      publisher: { '@id': 'https://laeti-seo.fr/#business' },
      author: { '@id': 'https://laeti-seo.fr/#laeti' },
      blogPost: articles.map((a) => ({
        '@type': 'BlogPosting',
        '@id': `${BLOG_URL}/${a.slug}#article`,
        url: `${BLOG_URL}/${a.slug}`,
        mainEntityOfPage: `${BLOG_URL}/${a.slug}`,
        headline: a.title,
        description: a.metaDescription,
        articleSection: a.category,
        // date-heure avec fuseau (ISO 8601) : Google signale les dates sans heure
        datePublished: `${a.publishedAt}T08:00:00Z`,
        dateModified: `${a.publishedAt}T08:00:00Z`,
        inLanguage: 'fr-FR',
        ...(a.image ? { image: `https://laeti-seo.fr${a.image}` } : {}),
        author: { '@id': 'https://laeti-seo.fr/#laeti' },
        publisher: { '@id': 'https://laeti-seo.fr/#business' },
      })),
    },
  ],
};

const categoryColors: Record<string, { bg: string; text: string }> = {
  "Google Business Profile": { bg: "rgba(255,212,38,0.12)",  text: "#ffd426" },
  "Réseaux sociaux":          { bg: "rgba(200,210,160,0.12)", text: "rgba(200,210,160,0.9)" },
  "Avis clients":             { bg: "rgba(200,210,160,0.12)", text: "rgba(200,210,160,0.9)" },
  "SEO local":                { bg: "rgba(100,180,255,0.12)", text: "rgba(140,200,255,0.9)" },
  "Cas pratiques":            { bg: "rgba(255,180,100,0.12)", text: "rgba(255,200,130,0.9)" },
};

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main>

        {/* -- En-tête -- */}
        <section className="relative bg-transparent" style={{ paddingTop: "120px" }}>
          <div className="mx-auto max-w-7xl px-6 pb-0 pt-12 md:pt-20">
            {/* « BLOG » arrive en trombe, le reste apparaît dessous */}
            <div className="blog-word-wrap">
              <span className="blog-smoke" aria-hidden="true">
                {[0, 1, 2, 3, 4, 5, 6].map((n) => (
                  <i key={n} style={{ ['--n' as string]: n }} />
                ))}
              </span>
              <span className="blog-gravel" aria-hidden="true">
                {[
                  [60, 46, 5, 0], [96, 70, 4, 1], [130, 38, 6, 2], [78, 88, 3, 3], [150, 60, 4, 4], [110, 24, 5, 5],
                  [44, 62, 3, 6], [172, 44, 3, 7], [90, 100, 4, 8], [136, 82, 5, 9], [70, 30, 3, 10], [160, 26, 4, 11],
                ].map(([dx, up, size, n]) => (
                  <b key={n} style={{ ['--dx' as string]: `${dx}px`, ['--up' as string]: `${up}px`, ['--n' as string]: n, width: `${size}px`, height: `${size}px` }} />
                ))}
              </span>
              <p
                className="blog-word uppercase"
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(48px, 8.5vw, 108px)",
                  lineHeight: "0.9",
                  letterSpacing: "-0.02em",
                  color: "#ffd426",
                  textShadow: "0 0 24px rgba(255,212,38,0.55), 0 0 70px rgba(255,212,38,0.3)",
                }}
              >
                Blog
              </p>
            </div>
            <style>{`
              .blog-word-wrap { position: relative; display: inline-block; margin-bottom: 18px; }
              .blog-smoke { position: absolute; right: 18px; bottom: 6px; width: 0; height: 0; pointer-events: none; }
              .blog-smoke i { position: absolute; right: 0; bottom: 0; width: 70px; height: 70px; border-radius: 50%;
                background: radial-gradient(circle, rgba(235,236,255,0.75) 0%, rgba(190,194,255,0.35) 45%, rgba(190,194,255,0) 70%);
                filter: blur(7px); opacity: 0; transform: translate(0,0) scale(0.3);
                animation: blog-smoke 1.5s ease-out both; animation-delay: calc(0.45s + var(--n) * 0.07s); }
              .blog-gravel { position: absolute; right: 30px; bottom: 10px; width: 0; height: 0; pointer-events: none; }
              .blog-gravel b { position: absolute; left: 0; bottom: 0; border-radius: 40%; background: #d9c98a; box-shadow: 0 0 0 1px rgba(27,27,94,0.35);
                opacity: 0; animation: blog-gravel 0.9s cubic-bezier(0.2,0.6,0.4,1) both; animation-delay: calc(0.45s + var(--n) * 0.03s); }
              .blog-gravel b:nth-child(3n) { background: #fff3b0; }
              .blog-gravel b:nth-child(4n) { background: #9aa0d8; }
              @keyframes blog-gravel {
                0%   { opacity: 0; transform: translate(0, 0) rotate(0deg); }
                10%  { opacity: 1; }
                45%  { transform: translate(calc(var(--dx) * 0.55), calc(var(--up) * -1)) rotate(180deg); }
                100% { opacity: 0; transform: translate(var(--dx), 14px) rotate(420deg); }
              }
              @keyframes blog-smoke {
                0%   { opacity: 0; transform: translate(0, 0) scale(0.3); }
                20%  { opacity: 0.9; }
                100% { opacity: 0; transform: translate(calc(30px + var(--n) * 12px), calc(-24px - var(--n) * 10px)) scale(2.4); }
              }
              .blog-word { display: inline-block; transform-origin: 0 100%; animation: blog-zoom 0.9s cubic-bezier(0.16,1,0.3,1) both; }
              @keyframes blog-zoom {
                0%   { transform: translateX(-120vw) skewX(-24deg); opacity: 0; filter: blur(10px); }
                55%  { opacity: 1; }
                80%  { transform: translateX(14px) skewX(5deg); filter: blur(0); }
                100% { transform: translateX(0) skewX(0deg); opacity: 1; filter: blur(0); }
              }
              @media (prefers-reduced-motion: reduce) { .blog-word { animation: none; } .blog-smoke, .blog-gravel { display: none; } }
            `}</style>
            <ScrollReveal delay={0.65}>
              <h1
                className="mb-5 text-white"
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(36px, 5vw, 64px)",
                  lineHeight: "1.08",
                  textTransform: "uppercase",
                }}
              >
                Conseils SEO local<br />
                <span style={{ color: "#ffd426", textShadow: "0 0 18px rgba(255,212,38,0.55), 0 0 48px rgba(255,212,38,0.25)" }}>
                  pour les pros de l&apos;habitat.
                </span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.9}>
              <p
                className="max-w-[55ch] text-white/55"
                style={{
                  fontFamily: 'Inter, "Inter Fallback"',
                  fontWeight: 400,
                  fontSize: "17px",
                  lineHeight: "28px",
                }}
              >
                Référencement local, Google Business Profile, réseaux sociaux et marketing digital
                pour les décoratrices, architectes d&apos;intérieur, cuisinistes,
                menuisiers et tous les pros de l&apos;habitat.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* -- Séparateur -- */}
        <div className="mx-auto max-w-7xl px-6 pt-14 pb-2">
          <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.07)" }} />
        </div>

        {/* -- Grille d'articles -- */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article, i) => {
                const cat = categoryColors[article.category] ?? { bg: "rgba(255,255,255,0.08)", text: "rgba(255,255,255,0.6)" };
                return (
                  <ScrollReveal key={article.slug} emerge={i} delay={((i * 5) % 7) * 0.12} className="h-full">
                    <a
                      href={`/blog/${article.slug}`}
                      className="group flex h-full flex-col rounded-[1.5rem] p-7 transition-all duration-300 hover:bg-white/[0.07] hover:border-white/[0.16]"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.09)",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
                        textDecoration: "none",
                      }}
                    >
                      {/* Image */}
                      {article.image && (
                        <div
                          className="relative mb-5 -mx-7 -mt-7 h-40 overflow-hidden rounded-t-[1.5rem]"
                          style={{ background: "rgba(255,255,255,0.04)" }}
                        >
                          <Image
                            src={article.image}
                            alt={article.imageAlt ?? article.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                      )}

                      {/* Catégorie + meta */}
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <span
                          className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                          style={{
                            fontFamily: inter.style.fontFamily,
                            background: cat.bg,
                            color: cat.text,
                          }}
                        >
                          {article.category}
                        </span>
                        <span
                          className="text-xs text-white/30"
                          style={{ fontFamily: inter.style.fontFamily }}
                        >
                          {article.readTime}
                        </span>
                      </div>

                      {/* Titre */}
                      <h2
                        className="mb-3 flex-1 text-white"
                        style={{
                          fontFamily: "Satoshi, sans-serif",
                          fontWeight: 700,
                          fontSize: "18px",
                          lineHeight: "1.35",
                        }}
                      >
                        {article.title}
                      </h2>

                      {/* Extrait */}
                      <p
                        className="mb-6 text-white/50"
                        style={{
                          fontFamily: 'Inter, "Inter Fallback"',
                          fontSize: "14px",
                          lineHeight: "22px",
                        }}
                      >
                        {article.excerpt}
                      </p>

                      {/* Footer */}
                      <div className="mt-auto flex items-center justify-between">
                        <span
                          className="text-xs text-white/25"
                          style={{ fontFamily: inter.style.fontFamily }}
                        >
                          {article.date}
                        </span>
                        <span
                          className="flex items-center gap-1 text-xs font-medium text-white/40 transition-colors duration-200 group-hover:text-[#ffd426]"
                          style={{ fontFamily: inter.style.fontFamily }}
                        >
                          Lire
                          <ArrowRight
                            size={13}
                            weight="bold"
                            className="transition-transform duration-200 group-hover:translate-x-0.5"
                          />
                        </span>
                      </div>
                    </a>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* -- CTA bas de page -- */}
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.07)" }} />
        </div>
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-7xl px-6 py-20 text-center">
            <ScrollReveal>
              <p
                className="mb-3 text-3xl font-bold text-white md:text-4xl"
                style={{ fontFamily: "Satoshi, sans-serif" }}
              >
                Un article ne suffit pas ?
              </p>
              <p
                className="mx-auto mb-8 max-w-[48ch] text-white/50"
                style={{
                  fontFamily: 'Inter, "Inter Fallback"',
                  fontSize: "16px",
                  lineHeight: "26px",
                }}
              >
                Si vous voulez un regard direct sur votre situation, le diagnostic
                part de votre fiche, pas d&apos;un article générique.
              </p>
              <a
                href="/offre"
                className="inline-flex items-center gap-2 rounded-full bg-[#ffd426] px-7 py-3.5 font-bold text-[#1b1b5e] transition-all duration-300 hover:brightness-105 active:scale-[0.98]"
                style={{ fontFamily: inter.style.fontFamily, fontSize: "14px" }}
              >
                Voir le diagnostic · 790 €
                <ArrowRight size={15} weight="bold" />
              </a>
            </ScrollReveal>
          </div>
        </section>

      </main>
    </>
  );
}

