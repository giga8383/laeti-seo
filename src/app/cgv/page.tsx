import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import { inter } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente | Laeti SEO',
  description: 'CGV de Laeti SEO — conditions de vente des prestations de consulting SEO local.',
  alternates: { canonical: 'https://laeti-seo.fr/cgv' },
  robots: { index: false, follow: false },
};

const articles = [
  { id: 'art1',  label: 'Article 1 — Objet' },
  { id: 'art2',  label: 'Article 2 — Champ d\'application' },
  { id: 'art3',  label: 'Article 3 — Types de prestations' },
  { id: 'art4',  label: 'Article 4 — Durée' },
  { id: 'art5',  label: 'Article 5 — Commande et acceptation' },
  { id: 'art6',  label: 'Article 6 — Obligation de moyens' },
  { id: 'art7',  label: 'Article 7 — Tarifs et paiement' },
  { id: 'art8',  label: 'Article 8 — Livrables et délais' },
  { id: 'art9',  label: 'Article 9 — Propriété intellectuelle' },
  { id: 'art10', label: 'Article 10 — Confidentialité' },
  { id: 'art11', label: 'Article 11 — Non-dénigrement' },
  { id: 'art12', label: 'Article 12 — Responsabilité' },
  { id: 'art13', label: 'Article 13 — Droit de rétractation' },
  { id: 'art14', label: 'Article 14 — Loi applicable et litiges' },
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

export default function CGV() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'linear-gradient(165deg, #0c1a40 0%, #112258 55%, #0f1e48 100%)', minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px' }}>
        <div className="mx-auto max-w-3xl px-6">

          {/* En-tête */}
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
            Conditions Générales de Vente
          </h1>
          <p className="mb-3" style={{ fontFamily: inter.style.fontFamily, fontSize: '14px', color: 'rgba(255,255,255,0.40)' }}>
            Dernière mise à jour : juin 2026
          </p>
          <p className="mb-10" style={{ fontFamily: inter.style.fontFamily, fontSize: '14px', color: 'rgba(255,255,255,0.55)' }}>
            Prestataire : <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Laetitia Laghezza</strong> — Auto-entrepreneur — SIRET 52276783900023 —
            15 Rue du Commerce, 83910 Pourrières —{' '}
            <a href="mailto:contact@laeti-seo.fr" style={{ color: '#fceb30' }}>contact@laeti-seo.fr</a>
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
              {articles.map((a) => (
                <li key={a.id}>
                  <a
                    href={`#${a.id}`}
                    style={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: '14px',
                      color: '#3262ab',
                      textDecoration: 'none',
                    }}
                    className="hover:underline"
                  >
                    {a.label}
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

            <section id="art1">
              <h2 style={h2Style}>Article 1 — Objet</h2>
              <div style={bodyStyle}>
                <p>
                  Les présentes Conditions Générales de Vente régissent les relations contractuelles entre
                  Laetitia Laghezza (ci-après « le Prestataire ») et ses clients professionnels (ci-après « le
                  Client »), dans le cadre de prestations de conseil en référencement local (SEO local),
                  d&apos;analyse de visibilité Google et d&apos;accompagnement stratégique pour les professionnels
                  de l&apos;habitat.
                </p>
              </div>
            </section>

            <section id="art2">
              <h2 style={h2Style}>Article 2 — Champ d&apos;application</h2>
              <div style={bodyStyle}>
                <p>
                  Les présentes CGV s&apos;appliquent à l&apos;ensemble des services fournis par le Prestataire,
                  qu&apos;ils soient ponctuels ou sur une durée déterminée. Elles prévalent sur tout autre document
                  émanant du Client. Toute commande implique l&apos;acceptation pleine et entière des présentes CGV.
                </p>
              </div>
            </section>

            <section id="art3">
              <h2 style={h2Style}>Article 3 — Types de prestations</h2>
              <div style={bodyStyle}>
                <p className="mb-4">Le Prestataire propose deux types de prestations :</p>
                <div className="space-y-3">
                  <div className="rounded-xl px-5 py-4" style={{ background: '#f0f4ff', border: '1px solid rgba(50,98,171,0.12)' }}>
                    <strong style={{ color: '#0f1e48' }}>Diagnostic visibilité locale — 190 €</strong>
                    <p className="mt-1" style={{ fontSize: '14px' }}>
                      Prestation ponctuelle. Analyse complète de la présence Google locale (fiche Google Business
                      Profile, avis clients, site web, positionnement face aux concurrents locaux). Livraison
                      d&apos;un rapport structuré et d&apos;un plan d&apos;action priorisé sous 5 jours ouvrés.
                      Appel de restitution de 45 minutes inclus.
                    </p>
                  </div>
                  <div className="rounded-xl px-5 py-4" style={{ background: '#f0f4ff', border: '1px solid rgba(50,98,171,0.12)' }}>
                    <strong style={{ color: '#0f1e48' }}>Sprint local 3 mois — 790 €</strong>
                    <p className="mt-1" style={{ fontSize: '14px' }}>
                      Prestation d&apos;accompagnement sur une durée déterminée de trois (3) mois. Inclut le
                      diagnostic visibilité, l&apos;optimisation de la fiche Google Business Profile, une stratégie
                      avis clients, 2 Google Posts par mois, un rapport mensuel et un appel de suivi mensuel.
                    </p>
                  </div>
                </div>
                <p className="mt-4" style={{ fontSize: '13px', color: '#8a96b0' }}>
                  En tant qu&apos;auto-entrepreneur, le Prestataire bénéficie de la franchise en base de TVA
                  (art. 293 B du CGI). Aucune TVA n&apos;est applicable sur les factures.
                </p>
              </div>
            </section>

            <section id="art4">
              <h2 style={h2Style}>Article 4 — Durée</h2>
              <div style={bodyStyle}>
                <p>
                  Le <strong>Diagnostic visibilité locale</strong> est une prestation ponctuelle sans engagement
                  dans la durée. Elle prend fin à la livraison du rapport et à la tenue de l&apos;appel de
                  restitution.
                </p>
                <p className="mt-3">
                  Le <strong>Sprint local 3 mois</strong> est conclu pour une durée déterminée et fixe de
                  trois (3) mois à compter de la date de démarrage convenue entre les parties. À l&apos;issue
                  de cette période, la prestation prend fin sans reconduction automatique. Toute nouvelle
                  collaboration fait l&apos;objet d&apos;une nouvelle commande.
                </p>
              </div>
            </section>

            <section id="art5">
              <h2 style={h2Style}>Article 5 — Commande et acceptation</h2>
              <div style={bodyStyle}>
                <p>
                  La commande est définitive dès réception du paiement (ou du premier versement pour le Sprint
                  local 3 mois) et confirmation écrite du Prestataire par email. Un échange préalable (email ou
                  appel téléphonique) permet de valider l&apos;adéquation de la prestation au besoin du Client.
                </p>
                <p className="mt-3">
                  Le Client s&apos;engage à fournir les accès et informations nécessaires à la réalisation de
                  la prestation (identifiants Google Business Profile, Google Search Console le cas échéant)
                  dans les meilleurs délais suivant la confirmation de commande.
                </p>
              </div>
            </section>

            <section id="art6">
              <h2 style={h2Style}>Article 6 — Obligation de moyens</h2>
              <div style={bodyStyle}>
                <p>
                  Le Prestataire s&apos;engage à réaliser les prestations avec diligence, rigueur et
                  professionnalisme, conformément aux bonnes pratiques du secteur du référencement local.
                </p>
                <p className="mt-3">
                  Les prestations constituent une <strong>obligation de moyens</strong> et non de résultat.
                  Aucune garantie de résultat spécifique (classement Google, volume de demandes de devis,
                  position dans le Local Pack) ne peut être accordée, ces éléments dépendant de facteurs
                  extérieurs hors du contrôle du Prestataire : algorithmes des moteurs de recherche,
                  niveau de concurrence locale, actions propres du Client.
                </p>
              </div>
            </section>

            <section id="art7">
              <h2 style={h2Style}>Article 7 — Tarifs et paiement</h2>
              <div style={bodyStyle}>
                <p><strong>Moyen de paiement :</strong> virement bancaire uniquement. Les coordonnées bancaires sont communiquées lors de la confirmation de commande.</p>
                <div className="mt-4 space-y-3">
                  <div className="rounded-xl px-5 py-4" style={{ background: '#f8f9fc', border: '1px solid rgba(50,98,171,0.10)' }}>
                    <strong>Diagnostic visibilité locale :</strong> paiement intégral de 190 € à la commande.
                    La prestation démarre après réception du virement.
                  </div>
                  <div className="rounded-xl px-5 py-4" style={{ background: '#f8f9fc', border: '1px solid rgba(50,98,171,0.10)' }}>
                    <strong>Sprint local 3 mois :</strong> paiement en 3 mensualités égales de 263,33 €.
                    La première mensualité est due à la commande, les deux suivantes à 30 et 60 jours calendaires.
                  </div>
                </div>
                <p className="mt-4">
                  Tout retard de paiement entraîne de plein droit, dès le premier jour de retard, l&apos;application
                  de pénalités égales à 3 fois le taux d&apos;intérêt légal en vigueur, ainsi qu&apos;une
                  indemnité forfaitaire de recouvrement de 40 € (art. L441-10 du Code de commerce). En cas
                  de défaut de paiement persistant, le Prestataire se réserve le droit de suspendre la
                  prestation en cours sans que cela ne constitue une faute contractuelle.
                </p>
              </div>
            </section>

            <section id="art8">
              <h2 style={h2Style}>Article 8 — Livrables et délais</h2>
              <div style={bodyStyle}>
                <p>
                  Le rapport du <strong>Diagnostic visibilité locale</strong> est livré sous <strong>5 jours
                  ouvrés</strong> à compter de la réception des accès nécessaires fournis par le Client.
                  Tout retard dans la transmission de ces accès décale d&apos;autant le délai de livraison.
                </p>
                <p className="mt-3">
                  Pour le <strong>Sprint local 3 mois</strong>, les livrables mensuels (rapport, Google Posts,
                  compte-rendu d&apos;appel) sont remis dans les délais convenus à la commande. Ces délais sont
                  indicatifs et ne peuvent constituer un motif de résiliation anticipée en cas de retard
                  indépendant de la volonté du Prestataire.
                </p>
              </div>
            </section>

            <section id="art9">
              <h2 style={h2Style}>Article 9 — Propriété intellectuelle</h2>
              <div style={bodyStyle}>
                <p>
                  Les rapports, recommandations et documents produits dans le cadre des prestations sont transmis
                  au Client après règlement intégral de la prestation concernée. Ils sont destinés à un usage
                  strictement interne au Client et ne peuvent être revendus, transmis ou publiés sans accord
                  écrit préalable du Prestataire.
                </p>
                <p className="mt-3">
                  Le Prestataire se réserve le droit de mentionner la collaboration avec le Client à titre de
                  référence commerciale (nom de l&apos;entreprise, secteur d&apos;activité, type de prestation),
                  sauf opposition expresse du Client notifiée par écrit.
                </p>
              </div>
            </section>

            <section id="art10">
              <h2 style={h2Style}>Article 10 — Confidentialité</h2>
              <div style={bodyStyle}>
                <p>
                  Le Prestataire s&apos;engage à conserver confidentielles toutes les informations, documents,
                  données et échanges communiqués par le Client dans le cadre de la prestation, pendant toute
                  la durée du contrat et au-delà. Cette obligation ne s&apos;applique pas aux informations
                  déjà publiquement accessibles ou obtenues légalement d&apos;un tiers.
                </p>
              </div>
            </section>

            <section id="art11">
              <h2 style={h2Style}>Article 11 — Non-dénigrement</h2>
              <div style={bodyStyle}>
                <p>
                  Les deux parties s&apos;engagent mutuellement à ne pas porter atteinte à l&apos;image, la
                  réputation ou la crédibilité de l&apos;autre partie, que ce soit publiquement ou dans leurs
                  échanges professionnels, pendant la durée de la prestation et dans les 12 mois suivant
                  sa cessation.
                </p>
              </div>
            </section>

            <section id="art12">
              <h2 style={h2Style}>Article 12 — Responsabilité</h2>
              <div style={bodyStyle}>
                <p>
                  La responsabilité du Prestataire est strictement limitée au montant des sommes effectivement
                  perçues pour la prestation concernée. Le Prestataire ne saurait être tenu responsable des
                  dommages indirects, pertes de chiffre d&apos;affaires, pertes de clientèle ou manques à
                  gagner résultant de l&apos;exécution ou de l&apos;inexécution des prestations.
                </p>
              </div>
            </section>

            <section id="art13">
              <h2 style={h2Style}>Article 13 — Droit de rétractation</h2>
              <div style={bodyStyle}>
                <p>
                  Les Clients de Laeti SEO sont des professionnels agissant dans le cadre de leur activité
                  professionnelle. À ce titre, les dispositions relatives au droit de rétractation des
                  consommateurs (art. L221-18 du Code de la consommation) ne leur sont pas applicables.
                </p>
                <p className="mt-3">
                  Si exceptionnellement la prestation est commandée par un particulier agissant en qualité de
                  consommateur, celui-ci dispose d&apos;un délai de rétractation de 14 jours à compter de la
                  confirmation de commande. Il peut y renoncer expressément pour permettre le démarrage
                  de la prestation avant l&apos;expiration de ce délai.
                </p>
              </div>
            </section>

            <section id="art14">
              <h2 style={h2Style}>Article 14 — Loi applicable et litiges</h2>
              <div style={bodyStyle}>
                <p>
                  Les présentes CGV sont soumises au droit français. En cas de litige, les parties s&apos;engagent
                  à rechercher une solution amiable avant tout recours judiciaire. À défaut d&apos;accord, les
                  tribunaux compétents seront ceux du ressort du siège du Prestataire (Var, France).
                </p>
              </div>
            </section>

          </div>
        </div>
      </main>
    </>
  );
}
