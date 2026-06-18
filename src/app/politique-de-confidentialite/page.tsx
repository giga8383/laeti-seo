import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import { inter } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'Politique de cookies et confidentialité | Laeti SEO',
  description: 'Politique de cookies et de confidentialité du site laeti-seo.fr.',
  alternates: { canonical: 'https://laeti-seo.fr/politique-de-confidentialite' },
  robots: { index: false, follow: false },
};

const sections = [
  { id: 's1', label: '1. Qu\'est-ce qu\'un cookie ?' },
  { id: 's2', label: '2. Cookies utilisés sur ce site' },
  { id: 's3', label: '3. Cookies tiers (Google Analytics)' },
  { id: 's4', label: '4. Gérer vos préférences' },
  { id: 's5', label: '5. Données personnelles' },
  { id: 's6', label: '6. Vos droits' },
  { id: 's7', label: '7. Contact' },
];

const h2Style = {
  fontFamily: 'Satoshi, sans-serif',
  fontWeight: 700,
  fontSize: '17px',
  color: '#0f1e48',
  marginBottom: '12px',
  scrollMarginTop: '100px',
};

const bodyStyle = {
  fontFamily: inter.style.fontFamily,
  fontSize: '15px',
  lineHeight: '26px',
  color: '#3d4a6b',
};

const tableHead = {
  fontFamily: inter.style.fontFamily,
  fontWeight: 700,
  fontSize: '12px',
  color: '#0f1e48',
  background: '#eef2ff',
  padding: '10px 14px',
  textAlign: 'left' as const,
  borderBottom: '1px solid rgba(50,98,171,0.15)',
};

const tableCell = {
  fontFamily: inter.style.fontFamily,
  fontSize: '13px',
  color: '#3d4a6b',
  padding: '10px 14px',
  borderBottom: '1px solid rgba(50,98,171,0.07)',
  verticalAlign: 'top' as const,
};

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'transparent', minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px' }}>
        <div className="mx-auto max-w-3xl px-6">

          <h1 className="mb-3" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 900, lineHeight: '1.0', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            <span style={{ display: 'block', fontSize: 'clamp(42px, 8vw, 80px)', color: '#ffffff' }}>Cookies &amp;</span>
            <span style={{ display: 'block', fontSize: 'clamp(36px, 7vw, 68px)', color: '#fceb30', textShadow: '0 0 40px rgba(252,235,48,0.35)' }}>Confidentialité</span>
          </h1>
          <p className="mb-12" style={{ fontFamily: inter.style.fontFamily, fontSize: '14px', color: 'rgba(255,255,255,0.40)' }}>
            Dernière mise à jour : juin 2026
          </p>

          {/* Table des matières */}
          <nav
            className="rounded-2xl mb-10 px-7 py-6"
            style={{ background: '#eef2ff', border: '1px solid rgba(50,98,171,0.15)' }}
            aria-label="Table des matières"
          >
            <p
              className="mb-4 uppercase tracking-widest"
              style={{ fontFamily: inter.style.fontFamily, fontWeight: 700, fontSize: '11px', color: '#3262ab' }}
            >
              Table des matières
            </p>
            <ol className="space-y-1.5">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    style={{ fontFamily: inter.style.fontFamily, fontSize: '14px', color: '#3262ab', textDecoration: 'none' }}
                    className="hover:underline"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Contenu */}
          <div
            className="rounded-2xl bg-white px-8 py-10 space-y-10"
            style={{ border: '1px solid rgba(50,98,171,0.10)', boxShadow: '0 4px 24px -8px rgba(15,30,72,0.08)' }}
          >

            <section id="s1">
              <h2 style={h2Style}>1. Qu&apos;est-ce qu&apos;un cookie ?</h2>
              <div style={bodyStyle}>
                <p>
                  Un cookie est un petit fichier texte déposé sur votre navigateur lors de la visite d&apos;un site web.
                  Il permet au site de mémoriser des informations sur votre visite (langue, préférences, statistiques).
                  Les cookies ne contiennent pas de virus et ne peuvent pas endommager votre appareil.
                </p>
              </div>
            </section>

            <section id="s2">
              <h2 style={h2Style}>2. Cookies utilisés sur ce site</h2>
              <div style={bodyStyle}>
                <p className="mb-4">Le site laeti-seo.fr utilise deux catégories de cookies :</p>
                <div className="overflow-hidden rounded-xl" style={{ border: '1px solid rgba(50,98,171,0.12)' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr>
                        <th style={tableHead}>Catégorie</th>
                        <th style={tableHead}>Finalité</th>
                        <th style={tableHead}>Obligatoire</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={tableCell}><strong>Techniques</strong></td>
                        <td style={tableCell}>Mémoriser votre choix de consentement aux cookies</td>
                        <td style={tableCell}>Oui</td>
                      </tr>
                      <tr>
                        <td style={{ ...tableCell, borderBottom: 'none' }}><strong>Analytiques</strong></td>
                        <td style={{ ...tableCell, borderBottom: 'none' }}>Mesurer l&apos;audience du site via Google Analytics (pages visitées, durée de visite, source du trafic)</td>
                        <td style={{ ...tableCell, borderBottom: 'none' }}>Non, soumis à votre consentement</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4">
                  Ce site n&apos;utilise pas de cookies publicitaires, de cookies de ciblage, ni de cookies de réseaux sociaux.
                </p>
              </div>
            </section>

            <section id="s3">
              <h2 style={h2Style}>3. Cookies tiers (Google Analytics)</h2>
              <div style={bodyStyle}>
                <p>
                  Ce site utilise <strong>Google Analytics</strong>, un service d&apos;analyse d&apos;audience fourni par Google LLC.
                  Google Analytics dépose des cookies pour mesurer le comportement des visiteurs (pages vues, durée de visite,
                  provenance du trafic) de manière anonymisée.
                </p>
                <p className="mt-3">
                  Ces données sont traitées par Google sur des serveurs situés aux États-Unis. Google s&apos;est engagé
                  à respecter le RGPD via des clauses contractuelles types approuvées par la Commission européenne.
                </p>
                <p className="mt-3">
                  L&apos;adresse IP des visiteurs est anonymisée avant toute transmission à Google. Aucune donnée
                  permettant d&apos;identifier personnellement un visiteur n&apos;est transmise.
                </p>
                <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#f0f4ff', border: '1px solid rgba(50,98,171,0.12)' }}>
                  <p style={{ fontSize: '13px' }}>
                    Pour en savoir plus sur la politique de confidentialité de Google :{' '}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#3262ab' }}
                    >
                      policies.google.com/privacy
                    </a>
                  </p>
                </div>
              </div>
            </section>

            <section id="s4">
              <h2 style={h2Style}>4. Gérer vos préférences</h2>
              <div style={bodyStyle}>
                <p>
                  Lors de votre première visite, un bandeau vous permet d&apos;accepter ou de refuser les cookies
                  analytiques. Vous pouvez modifier votre choix à tout moment en effaçant les cookies de votre
                  navigateur, ce qui fera réapparaître le bandeau.
                </p>
                <p className="mt-3">
                  Vous pouvez également désactiver les cookies directement depuis les paramètres de votre navigateur :
                </p>
                <ul className="mt-3 space-y-1" style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li>
                    <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" style={{ color: '#3262ab' }}>
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a href="https://support.mozilla.org/fr/kb/protection-renforcee-contre-pistage-firefox" target="_blank" rel="noopener noreferrer" style={{ color: '#3262ab' }}>
                      Mozilla Firefox
                    </a>
                  </li>
                  <li>
                    <a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" style={{ color: '#3262ab' }}>
                      Safari
                    </a>
                  </li>
                  <li>
                    <a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" style={{ color: '#3262ab' }}>
                      Microsoft Edge
                    </a>
                  </li>
                </ul>
                <p className="mt-3" style={{ fontSize: '13px', color: '#8a96b0' }}>
                  La désactivation des cookies analytiques n&apos;affecte pas le fonctionnement du site.
                </p>
              </div>
            </section>

            <section id="s5">
              <h2 style={h2Style}>5. Données personnelles</h2>
              <div style={bodyStyle}>
                <p>
                  Ce site ne collecte pas de données personnelles via des formulaires. Toute donnée transmise
                  volontairement (email via un lien de contact) est utilisée uniquement pour répondre à votre
                  demande et n&apos;est jamais cédée à des tiers.
                </p>
                <p className="mt-3">
                  Le responsable du traitement est <strong>Laetitia Laghezza</strong>, auto-entrepreneur,
                  SIRET 52276783900023, 15 Rue du Commerce, 83910 Pourrières.
                </p>
              </div>
            </section>

            <section id="s6">
              <h2 style={h2Style}>6. Vos droits</h2>
              <div style={bodyStyle}>
                <p>
                  Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
                </p>
                <ul className="mt-3 space-y-1" style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li>Droit d&apos;accès à vos données</li>
                  <li>Droit de rectification</li>
                  <li>Droit à l&apos;effacement (droit à l&apos;oubli)</li>
                  <li>Droit à la limitation du traitement</li>
                  <li>Droit d&apos;opposition</li>
                </ul>
                <p className="mt-3">
                  Pour exercer ces droits, contactez :{' '}
                  <a href="mailto:contact@laeti-seo.fr" style={{ color: '#3262ab' }}>contact@laeti-seo.fr</a>.
                  En cas de litige, vous pouvez également saisir la{' '}
                  <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" style={{ color: '#3262ab' }}>
                    CNIL
                  </a>.
                </p>
              </div>
            </section>

            <section id="s7">
              <h2 style={h2Style}>7. Contact</h2>
              <div style={bodyStyle}>
                <p>
                  Pour toute question relative à cette politique :{' '}
                  <a href="mailto:contact@laeti-seo.fr" style={{ color: '#3262ab' }}>contact@laeti-seo.fr</a>
                </p>
              </div>
            </section>

          </div>
        </div>
      </main>
    </>
  );
}
