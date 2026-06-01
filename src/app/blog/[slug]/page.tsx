import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { inter } from '@/lib/fonts';
import { getPostBySlug, getAllSlugs } from '@/lib/blog-posts';
import { ArrowLeft, ArrowRight, Clock } from '@phosphor-icons/react/dist/ssr';

/* ── SSG : génère une page statique pour chaque slug ── */
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

/* ── Métadonnées dynamiques ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `https://laeti-seo.fr/blog/${slug}`,
    },
    openGraph: {
      url: `https://laeti-seo.fr/blog/${slug}`,
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
    },
  };
}

const categoryColors: Record<string, { bg: string; text: string }> = {
  "Réseaux sociaux":          { bg: "rgba(200,210,160,0.12)", text: "rgba(200,210,160,0.9)" },
  "Google Business Profile":  { bg: "rgba(252,235,48,0.12)",  text: "#fceb30" },
  "SEO local":                { bg: "rgba(100,180,255,0.12)", text: "rgba(140,200,255,0.9)" },
  "Cas pratiques":            { bg: "rgba(255,180,100,0.12)", text: "rgba(255,200,130,0.9)" },
};

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const cat = categoryColors[post.category] ?? { bg: "rgba(255,255,255,0.08)", text: "rgba(255,255,255,0.6)" };

  return (
    <>
      <Navbar />
      <main>

        {/* ── En-tête article ── */}
        <section className="relative bg-transparent" style={{ paddingTop: "120px" }}>
          <div className="mx-auto max-w-3xl px-6 pb-0 pt-12 md:pt-16">

            {/* Retour au blog */}
            <a
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white/70"
              style={{ fontFamily: inter.style.fontFamily }}
            >
              <ArrowLeft size={14} weight="bold" />
              Tous les articles
            </a>

            {/* Catégorie + temps de lecture */}
            <div className="mb-5 flex items-center gap-3">
              <span
                className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                style={{
                  fontFamily: inter.style.fontFamily,
                  background: cat.bg,
                  color: cat.text,
                }}
              >
                {post.category}
              </span>
              <span
                className="flex items-center gap-1 text-xs text-white/35"
                style={{ fontFamily: inter.style.fontFamily }}
              >
                <Clock size={12} weight="bold" />
                {post.readTime}
              </span>
            </div>

            {/* Titre */}
            <h1
              className="mb-6 text-white"
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(28px, 4.5vw, 48px)",
                lineHeight: "1.15",
              }}
            >
              {post.title}
            </h1>

            {/* Auteur + date */}
            <div className="mb-10 flex items-center gap-3">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold"
                style={{
                  background: "linear-gradient(135deg, #3465b8, #fceb30)",
                  color: "#264d8c",
                  fontFamily: "Satoshi, sans-serif",
                }}
              >
                L
              </div>
              <div>
                <p
                  className="text-sm font-semibold text-white/85"
                  style={{ fontFamily: inter.style.fontFamily }}
                >
                  Laeti
                </p>
                <p
                  className="text-xs text-white/35"
                  style={{ fontFamily: inter.style.fontFamily }}
                >
                  {post.date}
                </p>
              </div>
            </div>

            {/* Séparateur */}
            <div className="mb-10 h-px w-full" style={{ background: "rgba(255,255,255,0.07)" }} />
          </div>
        </section>

        {/* ── Corps de l'article ── */}
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-3xl px-6 pb-20">
            <div
              className="article-body"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </section>

        {/* ── CTA diagnostic ── */}
        <div className="mx-auto max-w-3xl px-6">
          <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.07)" }} />
        </div>
        <section className="relative bg-transparent">
          <div className="mx-auto max-w-3xl px-6 py-16">
            <div
              className="rounded-[1.5rem] p-8 md:p-10"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07)",
              }}
            >
              <p
                className="mb-2 text-xl font-bold text-white md:text-2xl"
                style={{ fontFamily: "Satoshi, sans-serif" }}
              >
                Vous voulez savoir où vous en êtes ?
              </p>
              <p
                className="mb-6 text-white/50"
                style={{
                  fontFamily: 'Inter, "Inter Fallback"',
                  fontSize: "15px",
                  lineHeight: "25px",
                }}
              >
                Le diagnostic part de votre situation réelle, pas d&apos;un article générique.
                Fiche Google, concurrents locaux, site web : un état des lieux complet
                livré sous cinq jours.
              </p>
              <a
                href="/offre"
                className="inline-flex items-center gap-2 rounded-full bg-[#fceb30] px-6 py-3 font-bold text-[#264d8c] transition-all duration-300 hover:brightness-105 active:scale-[0.98]"
                style={{ fontFamily: inter.style.fontFamily, fontSize: "14px" }}
              >
                Voir le diagnostic · 190 €
                <ArrowRight size={14} weight="bold" />
              </a>
            </div>
          </div>
        </section>

        {/* ── Retour au blog ── */}
        <div className="mx-auto max-w-3xl px-6 pb-20">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/35 transition-colors hover:text-white/60"
            style={{ fontFamily: inter.style.fontFamily }}
          >
            <ArrowLeft size={14} weight="bold" />
            Retour aux articles
          </a>
        </div>

      </main>
    </>
  );
}
