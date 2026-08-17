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
  },
};

const categoryColors: Record<string, { bg: string; text: string }> = {
  "Google Business Profile": { bg: "rgba(252,235,48,0.12)",  text: "#fceb30" },
  "Réseaux sociaux":          { bg: "rgba(200,210,160,0.12)", text: "rgba(200,210,160,0.9)" },
  "Avis clients":             { bg: "rgba(200,210,160,0.12)", text: "rgba(200,210,160,0.9)" },
  "SEO local":                { bg: "rgba(100,180,255,0.12)", text: "rgba(140,200,255,0.9)" },
  "Cas pratiques":            { bg: "rgba(255,180,100,0.12)", text: "rgba(255,200,130,0.9)" },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* -- En-tête -- */}
        <section className="relative bg-transparent" style={{ paddingTop: "120px" }}>
          <div className="mx-auto max-w-7xl px-6 pb-0 pt-12 md:pt-20">
            <ScrollReveal>
              <p
                className="mb-4 uppercase tracking-widest"
                style={{
                  fontFamily: inter.style.fontFamily,
                  fontWeight: 600,
                  fontSize: "15px",
                  lineHeight: "22px",
                  color: "#fceb30",
                  textShadow: "0 0 12px rgba(252,235,48,0.7), 0 0 28px rgba(252,235,48,0.4)",
                }}
              >
                Blog
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.07}>
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
                <span style={{ color: "#fceb30", textShadow: "0 0 18px rgba(252,235,48,0.55), 0 0 48px rgba(252,235,48,0.25)" }}>
                  pour les pros de l&apos;habitat.
                </span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.13}>
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
                  <ScrollReveal key={article.slug} delay={i * 0.06}>
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
                          className="flex items-center gap-1 text-xs font-medium text-white/40 transition-colors duration-200 group-hover:text-[#fceb30]"
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
                className="inline-flex items-center gap-2 rounded-full bg-[#fceb30] px-7 py-3.5 font-bold text-[#264d8c] transition-all duration-300 hover:brightness-105 active:scale-[0.98]"
                style={{ fontFamily: inter.style.fontFamily, fontSize: "14px" }}
              >
                Voir le diagnostic · 190 €
                <ArrowRight size={15} weight="bold" />
              </a>
            </ScrollReveal>
          </div>
        </section>

      </main>
    </>
  );
}

