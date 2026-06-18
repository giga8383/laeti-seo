import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import { inter } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'Mentions légales | Laeti SEO',
  description: 'Mentions légales du site laeti-seo.fr — Laetitia Laghezza, consultante SEO local.',
  alternates: { canonical: 'https://laeti-seo.fr/mentions-legales' },
  robots: { index: false, follow: false },
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2
      style={{
        fontFamily: 'Satoshi, sans-serif',
        fontWeight: 700,
        fontSize: '18px',
        color: '#0f1e48',
        marginBottom: '12px',
      }}
    >
      {title}
    </h2>
    <div
      style={{
        fontFamily: inter.style.fontFamily,
        fontSize: '15px',
        lineHeight: '26px',
        color: '#3d4a6b',
      }}
    >
      {children}
    </div>
  </div>
);

export default function MentionsLegales() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'linear-gradient(165deg, #0c1a40 0%, #112258 55%, #0f1e48 100%)', minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px' }}>
        <div className="mx-auto max-w-3xl px-6">

          <h1
            className="mb-2"
            style={{
              fontFamily: 'Satoshi, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 4vw, 42px)',
              color: '#ffffff',
              lineHeight: '1.15',
            }}
          >
            Mentions légales
          </h1>
          <p
            className="mb-12"
            style={{ fontFamily: inter.style.fontFamily, fontSize: '14px', color: 'rgba(255,255,255,0.40)' }}
          >
            Dernière mise à jour : juin 2026
          </p>

          <div
            className="rounded-2xl bg-white px-8 py-10"
            style={{ border: '1px solid rgba(50,98,171,0.10)', boxShadow: '0 4px 24px -8px rgba(15,30,72,0.08)' }}
          >

            <Section title="1. Éditeur du site">
              <p><strong>Raison sociale :</strong> Laetitia Laghezza</p>
              <p><strong>Forme juridique :</strong> Auto-entrepreneur</p>
              <p><strong>SIRET :</strong> 52276783900023</p>
              <p><strong>Adresse :</strong> 15 Rue du Commerce, 83910 Pourrières, France</p>
              <p><strong>Email :</strong>{' '}
                <a href="mailto:contact@laeti-seo.fr" style={{ color: '#3262ab' }}>contact@laeti-seo.fr</a>
              </p>
              <p><strong>Téléphone :</strong>{' '}
                <a href="tel:+33626950750" style={{ color: '#3262ab' }}>06 26 95 07 50</a>
              </p>
              <p><strong>Directrice de publication :</strong> Laetitia Laghezza</p>
            </Section>

            <Section title="2. Hébergement">
              <p><strong>Hébergeur :</strong> Cloudflare, Inc.</p>
              <p><strong>Adresse :</strong> 101 Townsend St, San Francisco, CA 94107, États-Unis</p>
              <p><strong>Site :</strong>{' '}
                <a href="https://www.cloudflare.com" target="_blank" rel="noopener noreferrer" style={{ color: '#3262ab' }}>
                  www.cloudflare.com
                </a>
              </p>
            </Section>

            <Section title="3. Propriété intellectuelle">
              <p>
                L&apos;ensemble du contenu du site laeti-seo.fr (textes, images, graphismes, logo, structure) est la propriété exclusive de Laetitia Laghezza, sauf mention contraire. Toute reproduction, distribution, modification ou utilisation sans autorisation écrite préalable est interdite.
              </p>
            </Section>

            <Section title="4. Données personnelles">
              <p>
                Ce site ne collecte pas de données personnelles via des formulaires. Les données transmises volontairement (email, téléphone) par un visiteur sont utilisées uniquement pour répondre à sa demande et ne sont jamais transmises à des tiers.
              </p>
              <p className="mt-3">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez :{' '}
                <a href="mailto:contact@laeti-seo.fr" style={{ color: '#3262ab' }}>contact@laeti-seo.fr</a>.
              </p>
            </Section>

            <Section title="5. Cookies">
              <p>
                Ce site utilise Google Analytics (cookies de mesure d&apos;audience) et des cookies techniques nécessaires à son fonctionnement. Vous pouvez gérer vos préférences via le bandeau cookies affiché lors de votre première visite.
              </p>
            </Section>

            <Section title="6. Limitation de responsabilité">
              <p>
                Laetitia Laghezza s&apos;efforce de maintenir les informations publiées sur ce site à jour et exactes, mais ne peut garantir leur exhaustivité. Elle ne saurait être tenue responsable des dommages résultant de l&apos;utilisation du site ou de sites tiers vers lesquels il renvoie.
              </p>
            </Section>

            <Section title="7. Droit applicable">
              <p>
                Les présentes mentions légales sont soumises au droit français. Tout litige sera soumis à la compétence des tribunaux français.
              </p>
            </Section>

          </div>
        </div>
      </main>
    </>
  );
}
