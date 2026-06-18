import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import { inter } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente | Laeti SEO',
  description: 'CGV de Laeti SEO — conditions de vente des prestations de consulting SEO local.',
  alternates: { canonical: 'https://laeti-seo.fr/cgv' },
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

export default function CGV() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#f8f9fc', minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}>
        <div className="mx-auto max-w-3xl px-6">

          <h1
            className="mb-2"
            style={{
              fontFamily: 'Satoshi, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 4vw, 42px)',
              color: '#0f1e48',
              lineHeight: '1.15',
            }}
          >
            Conditions Générales de Vente
          </h1>
          <p
            className="mb-12"
            style={{ fontFamily: inter.style.fontFamily, fontSize: '14px', color: '#8a96b0' }}
          >
            Dernière mise à jour : juin 2026
          </p>

          <div
            className="rounded-2xl bg-white px-8 py-10"
            style={{ border: '1px solid rgba(50,98,171,0.10)', boxShadow: '0 4px 24px -8px rgba(15,30,72,0.08)' }}
          >

            <Section title="1. Prestataire">
              <p><strong>Nom :</strong> Laetitia Laghezza</p>
              <p><strong>Forme juridique :</strong> Auto-entrepreneur</p>
              <p><strong>SIRET :</strong> 52276783900023</p>
              <p><strong>Adresse :</strong> 15 Rue du Commerce, 83910 Pourrières, France</p>
              <p><strong>Email :</strong>{' '}
                <a href="mailto:contact@laeti-seo.fr" style={{ color: '#3262ab' }}>contact@laeti-seo.fr</a>
              </p>
              <p><strong>Téléphone :</strong>{' '}
                <a href="tel:+33626950750" style={{ color: '#3262ab' }}>06 26 95 07 50</a>
              </p>
            </Section>

            <Section title="2. Champ d'application">
              <p>
                Les présentes Conditions Générales de Vente (CGV) s&apos;appliquent à toutes les prestations de conseil en référencement local (SEO local) réalisées par Laetitia Laghezza pour ses clients professionnels. Elles prévalent sur tout autre document du client.
              </p>
              <p className="mt-3">
                Toute commande implique l&apos;acceptation sans réserve des présentes CGV.
              </p>
            </Section>

            <Section title="3. Prestations proposées">
              <p>Les prestations disponibles sont les suivantes :</p>
              <ul className="mt-3 space-y-2 list-none">
                <li
                  className="rounded-xl px-5 py-4"
                  style={{ background: '#f0f4ff', border: '1px solid rgba(50,98,171,0.12)' }}
                >
                  <strong style={{ color: '#0f1e48' }}>Diagnostic visibilité locale</strong>
                  <span style={{ color: '#3262ab' }}> — 190 € TTC</span>
                  <p className="mt-1" style={{ fontSize: '14px' }}>
                    Analyse complète de la présence Google locale (fiche GBP, avis, site, concurrents). Rapport structuré et plan d&apos;action livré sous 5 jours ouvrés. Appel de restitution de 45 min inclus.
                  </p>
                </li>
                <li
                  className="rounded-xl px-5 py-4"
                  style={{ background: '#f0f4ff', border: '1px solid rgba(50,98,171,0.12)' }}
                >
                  <strong style={{ color: '#0f1e48' }}>Sprint local 3 mois</strong>
                  <span style={{ color: '#3262ab' }}> — 790 € TTC</span>
                  <p className="mt-1" style={{ fontSize: '14px' }}>
                    Accompagnement complet sur 3 mois : diagnostic inclus, optimisation GBP, stratégie avis clients, 2 Google Posts/mois, rapport mensuel et appel de suivi.
                  </p>
                </li>
              </ul>
              <p className="mt-4" style={{ fontSize: '13px', color: '#8a96b0' }}>
                En tant qu&apos;auto-entrepreneur, Laetitia Laghezza bénéficie de la franchise en base de TVA (art. 293 B du CGI). Les prix sont indiqués sans TVA.
              </p>
            </Section>

            <Section title="4. Commande et devis">
              <p>
                Toute commande fait l&apos;objet d&apos;un échange préalable par email ou téléphone. La commande est confirmée dès réception du paiement (ou du premier versement pour le Sprint local).
              </p>
            </Section>

            <Section title="5. Modalités de paiement">
              <p><strong>Moyen de paiement :</strong> virement bancaire uniquement. Les coordonnées bancaires sont communiquées lors de la confirmation de commande.</p>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl px-5 py-4" style={{ background: '#f8f9fc', border: '1px solid rgba(50,98,171,0.10)' }}>
                  <strong>Diagnostic visibilité locale :</strong> paiement intégral (190 €) à la commande. La prestation démarre après réception du virement.
                </div>
                <div className="rounded-xl px-5 py-4" style={{ background: '#f8f9fc', border: '1px solid rgba(50,98,171,0.10)' }}>
                  <strong>Sprint local 3 mois :</strong> paiement en 3 mensualités égales de 263,33 € — la première à la commande, les suivantes à 30 et 60 jours.
                </div>
              </div>
              <p className="mt-4">
                Tout retard de paiement entraîne l&apos;application de pénalités de retard au taux légal en vigueur, ainsi qu&apos;une indemnité forfaitaire de recouvrement de 40 €.
              </p>
            </Section>

            <Section title="6. Délai de rétractation">
              <p>
                Les clients de Laeti SEO sont des professionnels agissant dans le cadre de leur activité. À ce titre, les dispositions relatives au droit de rétractation des consommateurs (art. L221-18 du Code de la consommation) ne leur sont pas applicables.
              </p>
              <p className="mt-3">
                Si la prestation est commandée par un particulier (consommateur au sens du Code de la consommation), celui-ci dispose d&apos;un délai de rétractation de 14 jours à compter de la confirmation de commande, sauf renonciation expresse au droit de rétractation pour permettre le démarrage de la prestation avant ce délai.
              </p>
            </Section>

            <Section title="7. Exécution de la prestation">
              <p>
                Laetitia Laghezza s&apos;engage à réaliser les prestations avec diligence et professionnalisme. Les délais annoncés sont indicatifs et peuvent varier selon la complexité du dossier ou des contraintes extérieures.
              </p>
              <p className="mt-3">
                Le client s&apos;engage à fournir les accès et informations nécessaires (Google Business Profile, Search Console, etc.) dans les meilleurs délais. Tout retard de sa part décale d&apos;autant les délais de livraison.
              </p>
            </Section>

            <Section title="8. Obligation de moyens">
              <p>
                Les prestations constituent une obligation de moyens. Laetitia Laghezza ne peut garantir de résultats spécifiques en termes de classement Google ou de volume de demandes de devis, ces éléments dépendant de nombreux facteurs hors de son contrôle (algorithmes Google, concurrence locale, actions du client).
              </p>
            </Section>

            <Section title="9. Confidentialité">
              <p>
                Laetitia Laghezza s&apos;engage à traiter avec la plus stricte confidentialité toutes les informations communiquées par le client dans le cadre de la prestation.
              </p>
            </Section>

            <Section title="10. Propriété des livrables">
              <p>
                Les rapports et documents produits dans le cadre des prestations sont transmis au client à la fin de la prestation et règlement complet. Ils sont destinés à un usage interne et ne peuvent être revendus ou transmis à des tiers sans accord préalable.
              </p>
            </Section>

            <Section title="11. Droit applicable et litiges">
              <p>
                Les présentes CGV sont soumises au droit français. En cas de litige, et après tentative de résolution amiable, les tribunaux compétents seront ceux du ressort du siège de Laetitia Laghezza.
              </p>
            </Section>

          </div>
        </div>
      </main>
    </>
  );
}
