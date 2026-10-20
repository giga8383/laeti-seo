import ScrollReveal from './ScrollReveal';
import { inter } from '@/lib/fonts';

const pillars = [
  {
    title: 'Votre fiche Google Business Profile',
    text: "C'est la première chose que vos clients voient, avant même votre site. Je reprends la fiche de A à Z : catégories, description, prestations, zone d'intervention, photos, horaires, questions-réponses. Je mets en place une routine d'avis simple à tenir, pour que votre fiche reste vivante sans vous prendre du temps.",
  },
  {
    title: 'Vos pages locales',
    text: "Une page par ville et par métier, avec le vocabulaire de vos clients : « rénovation de cuisine à Toulon », « menuisier sur mesure à Marseille ». Chaque page répond à une intention précise, avec vos réalisations, vos contraintes de chantier et vos zones d'intervention. C'est ce qui fait la différence entre exister et être trouvé.",
  },
  {
    title: 'Contenu et visibilité dans les réponses IA',
    text: "Google ne répond plus seul : les aperçus IA et les assistants type ChatGPT citent des sources. Je structure votre contenu pour qu'il soit compréhensible et citable : réponses claires, données vérifiables, pages bien hiérarchisées. Vous restez visible là où vos clients cherchent vraiment.",
  },
];

export default function Pillars() {
  return (
    <section className="relative bg-white" style={{ backgroundColor: '#ffffff' }}>
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <ScrollReveal>
          <div className="mb-14 max-w-3xl">
            <p
              className="mb-4 uppercase"
              style={{
                fontFamily: 'Satoshi, "Satoshi Fallback", ui-sans-serif, system-ui, -apple-system, sans-serif',
                fontWeight: 700,
                fontSize: '22px',
                lineHeight: '28px',
                color: '#2355b6',
                textShadow: '0 0 12px rgba(35,85,182,0.6), 0 0 28px rgba(35,85,182,0.35), 0 0 56px rgba(35,85,182,0.15)',
              }}
            >
              Ce que je fais
            </p>
            <h2
              className="text-[#264d8c]"
              style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(30px, 4vw, 44px)', lineHeight: '1.1' }}
            >
              Ce que je fais concrètement
            </h2>
            <p className="mt-5 text-[#264d8c]/70" style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '26px' }}>
              Trois piliers. Pas de recette magique, pas de « stratégie de contenu » floue. Des actions que vous pouvez vérifier une par une.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <ScrollReveal key={p.title} delay={0.05 + i * 0.08} className="h-full">
              <div className="flex h-full flex-col rounded-[1.75rem] border border-[#264d8c]/10 bg-[#f2f5fb] p-8">
                <span
                  className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#fceb30] text-[#264d8c]"
                  style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '16px' }}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <h3 className="mb-3 text-[#264d8c]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '1.25' }}>
                  {p.title}
                </h3>
                <p className="text-[#264d8c]/70" style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '26px' }}>
                  {p.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Encart de preuve */}
        <ScrollReveal delay={0.2}>
          <div
            className="mt-8 rounded-[1.75rem] bg-[#264d8c] p-8 md:p-10"
            style={{ boxShadow: '0 0 0 1.5px rgba(252,235,48,0.45), 0 24px 60px -20px rgba(38,77,140,0.35)' }}
          >
            <p className="mb-3 text-white" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '24px', lineHeight: '1.25' }}>
              Ce que je fais sur mon site, <span className="text-[#fceb30]">je le fais chez vous.</span>
            </p>
            <p className="max-w-[70ch] text-white/75" style={{ fontFamily: inter.style.fontFamily, fontSize: '16px', lineHeight: '26px' }}>
              Ce site est mon propre terrain d&apos;application : structure des pages, balisage, contenu local, vitesse, données structurées. Ouvrez le code source, inspectez les pages : tout ce que je vous recommande, je l&apos;applique ici d&apos;abord. Vous pouvez juger le travail avant de payer.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
