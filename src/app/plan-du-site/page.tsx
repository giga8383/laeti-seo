import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { inter } from '@/lib/fonts';
import { getSortedPosts } from '@/lib/blog-posts';

export const metadata: Metadata = {
  title: 'Plan du site | Laeti SEO',
  description: "Toutes les pages du site laeti-seo.fr : offres, pages villes, articles de blog et informations légales.",
  alternates: { canonical: 'https://laeti-seo.fr/plan-du-site' },
};

const principales = [
  { label: 'Accueil', href: '/' },
  { label: 'Offre & Tarifs', href: '/offre' },
  { label: 'Feuille de route', href: '/feuille-de-route' },
  { label: 'Blog SEO', href: '/blog' },
  { label: 'Guide offert : 7 points visibilité locale', href: '/Guide-Trouvable' },
];

const seoLocal = [
  { label: 'Audit SEO local', href: '/audit-seo-local' },
  { label: 'SEO pour artisans', href: '/seo-pour-artisans' },
  { label: 'Consultante SEO Aix-en-Provence', href: '/consultant-seo-aix-en-provence' },
  { label: 'Consultante SEO Marseille', href: '/consultant-seo-marseille' },
  { label: 'Consultante SEO dans le Var (Toulon)', href: '/consultant-seo-toulon' },
];

const legal = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'CGV', href: '/cgv' },
  { label: 'Politique de confidentialité', href: '/politique-de-confidentialite' },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2
        style={{
          fontFamily: 'Satoshi, sans-serif',
          fontWeight: 700,
          fontSize: '18px',
          color: '#0f1e48',
          marginBottom: '14px',
        }}
      >
        {title}
      </h2>
      <ul className="space-y-2">{children}</ul>
    </div>
  );
}

function SiteLink({ href, label, meta }: { href: string; label: string; meta?: string }) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-center justify-between gap-4 rounded-lg px-3 py-2 transition-colors hover:bg-[#f0f4ff]"
        style={{ textDecoration: 'none' }}
      >
        <span
          style={{
            fontFamily: inter.style.fontFamily,
            fontSize: '15px',
            color: '#264d8c',
            fontWeight: 500,
          }}
        >
          {label}
        </span>
        <span className="flex items-center gap-3 shrink-0">
          {meta && (
            <span style={{ fontFamily: inter.style.fontFamily, fontSize: '12px', color: '#8a96b0' }}>
              {meta}
            </span>
          )}
          <span
            className="opacity-0 transition-opacity group-hover:opacity-100"
            style={{ color: '#3262ab', fontSize: '14px' }}
          >
            →
          </span>
        </span>
      </Link>
    </li>
  );
}

export default function PlanDuSitePage() {
  const posts = getSortedPosts();

  return (
    <>
      <Navbar />
      <main style={{ background: 'transparent', minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px' }}>
        <div className="mx-auto max-w-3xl px-6">

          <h1 className="mb-3" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 900, lineHeight: '1.0', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            <span style={{ display: 'block', fontSize: 'clamp(42px, 8vw, 80px)', color: '#ffffff' }}>Plan</span>
            <span style={{ display: 'block', fontSize: 'clamp(36px, 7vw, 68px)', color: '#fceb30', textShadow: '0 0 40px rgba(252,235,48,0.35)' }}>du site</span>
          </h1>
          <p
            className="mb-12"
            style={{ fontFamily: inter.style.fontFamily, fontSize: '15px', color: 'rgba(255,255,255,0.50)', maxWidth: '48ch' }}
          >
            Toutes les pages de laeti-seo.fr, regroupées par thème.
          </p>

          <div
            className="rounded-2xl bg-white px-6 py-8 md:px-10 md:py-10"
            style={{ border: '1px solid rgba(50,98,171,0.10)', boxShadow: '0 4px 24px -8px rgba(15,30,72,0.08)' }}
          >

            <Section title="Pages principales">
              {principales.map((p) => (
                <SiteLink key={p.href} {...p} />
              ))}
            </Section>

            <Section title="SEO local">
              {seoLocal.map((p) => (
                <SiteLink key={p.href} {...p} />
              ))}
            </Section>

            <Section title="Articles du blog">
              {posts.map((post) => (
                <SiteLink
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  label={post.title}
                  meta={post.date}
                />
              ))}
            </Section>

            <Section title="Informations légales">
              {legal.map((p) => (
                <SiteLink key={p.href} {...p} />
              ))}
            </Section>

          </div>
        </div>
      </main>
    </>
  );
}
