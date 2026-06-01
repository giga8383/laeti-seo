import type { ReactNode } from 'react';
import { CheckCircle } from '@phosphor-icons/react/dist/ssr';
import MagneticButton from './MagneticButton';
import ScrollReveal from './ScrollReveal';
import { inter } from '@/lib/fonts';

const diagnostic = {
  badge: 'Essentiel',
  badgeStyle: 'glass' as const,
  name: 'Diagnostic visibilité',
  price: '190',
  unit: 'paiement unique',
  delay: '5 jours ouvrés',
  pitch: (
    <>
      Vous ne savez pas pourquoi vous n&apos;apparaissez pas assez sur Google ?<br />
      Le diagnostic répond à cette question en une semaine.<br />
      J&apos;analyse votre présence, je la compare à vos concurrents et je vous remets un rapport clair avec les points à corriger en priorité.
    </>
  ),
  items: [
    'Analyse de votre fiche Google Business Profile',
    'Positionnement dans Google Maps sur vos mots-clés cibles',
    "Avis clients, fraîcheur des réponses et signaux de confiance",
    'Audit rapide de votre site web sur les points SEO locaux',
    'Comparatif face à vos 3 principaux concurrents locaux',
    'Rapport synthétique avec les blocages identifiés',
    "Plan d'action 30 jours classé par priorité et impact",
  ],
  cta: 'Réserver le diagnostic · 190 €',
};

const sprint = {
  badge: 'Tarif de lancement',
  badgeStyle: 'yellow' as const,
  name: 'Sprint local 3 mois',
  price: '690',
  unit: 'paiement en 2 fois possible',
  delay: 'Démarrage sous 48 h',
  pitch: (
    <>
      On ne s&apos;arrête pas au rapport.<br />
      On corrige, on active et on suit pendant 3 mois.<br />
      Pour que Google sache enfin qui vous êtes et ce que vous faites.
    </>
  ),
  items: [
    'Diagnostic visibilité complet inclus (point de départ)',
    'Optimisation complète de la fiche Google Business Profile',
    'Cohérence locale sur la zone, les services et les catégories',
    "Stratégie avis clients personnalisée + mise en place",
    '2 Google Posts rédigés et publiés chaque mois',
    'Suivi mensuel de vos concurrents dans votre zone',
    "Rapport mensuel d'avancement clair et lisible",
    'Appel de suivi mensuel (30 min) pour ajuster le cap',
  ],
  cta: 'Réserver le sprint · 690 €',
};

function PricingCard({
  offer,
}: {
  offer: typeof diagnostic | typeof sprint;
}) {
  const isYellow = offer.badgeStyle === 'yellow';

  return (
    <div
      className="relative flex h-full flex-col rounded-[2rem] p-8 md:p-10"
      style={
        isYellow
          ? {
              background:
                'linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)',
              boxShadow:
                '0 0 0 1.5px rgba(252,235,48,0.40), inset 0 1px 0 rgba(255,255,255,0.08), 0 24px 64px -16px rgba(252,235,48,0.18)',
            }
          : {
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.10)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
            }
      }
    >
      {/* badge */}
      <span
        className="mb-5 inline-block w-fit rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest"
        style={
          isYellow
            ? {
                fontFamily: inter.style.fontFamily,
                background: '#fceb30',
                color: '#264d8c',
              }
            : {
                fontFamily: inter.style.fontFamily,
                background: 'rgba(255,255,255,0.07)',
                color: 'rgba(255,255,255,0.50)',
                border: '1px solid rgba(255,255,255,0.12)',
              }
        }
      >
        {offer.badge}
      </span>

      {/* name + price */}
      <h3
        className="mb-1 text-2xl font-bold text-white"
        style={{ fontFamily: 'Satoshi, sans-serif' }}
      >
        {offer.name}
      </h3>
      <div className="mb-1 flex items-end gap-2">
        <span
          className="text-5xl font-bold text-white"
          style={{ fontFamily: 'Satoshi, sans-serif', lineHeight: '1' }}
        >
          {offer.price}
          <span style={{ color: '#fceb30' }}>&thinsp;€</span>
        </span>
      </div>
      <p
        className="mb-1 text-sm text-white/35"
        style={{ fontFamily: inter.style.fontFamily }}
      >
        {offer.unit}
      </p>
      <p
        className="mb-6 text-xs font-semibold uppercase tracking-wider text-white/30"
        style={{ fontFamily: inter.style.fontFamily }}
      >
        {offer.delay}
      </p>

      {/* pitch */}
      <p
        className="mb-8 text-white/55"
        style={{
          fontFamily: 'Inter, "Inter Fallback"',
          fontSize: '15px',
          lineHeight: '25px',
          minHeight: '110px',
        }}
      >
        {offer.pitch}
      </p>

      {/* divider */}
      <div
        className="mb-6 h-px w-full"
        style={{
          background: isYellow
            ? 'rgba(252,235,48,0.15)'
            : 'rgba(255,255,255,0.08)',
        }}
      />

      {/* feature list */}
      <ul className="mb-8 flex-1 space-y-3">
        {offer.items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-3"
            style={{
              fontFamily: inter.style.fontFamily,
              fontSize: '14px',
              lineHeight: '22px',
              color: 'rgba(255,255,255,0.65)',
            }}
          >
            <CheckCircle
              size={16}
              weight="fill"
              className="mt-[3px] shrink-0"
              style={{ color: isYellow ? '#fceb30' : 'rgba(255,255,255,0.30)' }}
            />
            {item}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <MagneticButton
        className="mt-auto flex w-full items-center justify-center gap-2 rounded-full py-3.5 font-bold transition-all duration-300 active:scale-[0.98]"
        style={
          isYellow
            ? {
                fontFamily: inter.style.fontFamily,
                fontSize: '14px',
                background: '#fceb30',
                color: '#264d8c',
              }
            : {
                fontFamily: inter.style.fontFamily,
                fontSize: '14px',
                background: 'rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.80)',
                border: '1px solid rgba(255,255,255,0.15)',
              }
        }
        strength={0.25}
      >
        {offer.cta}
      </MagneticButton>
    </div>
  );
}

export default function OffrePricing() {
  return (
    <section className="relative bg-transparent">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">

        {/* header */}
        <ScrollReveal>
          <p
            className="mb-4 uppercase tracking-widest"
            style={{
              fontFamily: inter.style.fontFamily,
              fontWeight: 600,
              fontSize: '15px',
              lineHeight: '22px',
              color: '#fceb30',
              textShadow:
                '0 0 12px rgba(252,235,48,0.7), 0 0 28px rgba(252,235,48,0.4), 0 0 56px rgba(252,235,48,0.2)',
            }}
          >
            Tarifs
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.07}>
          <h2
            className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            Par où voulez-vous commencer&nbsp;?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.12}>
          <p
            className="mb-14 max-w-[52ch] text-white/55"
            style={{
              fontFamily: 'Inter, "Inter Fallback"',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '26px',
            }}
          >
            Commencez par comprendre ce qui bloque.<br />
            Ou passez directement à l&apos;action si vous êtes prêt.<br />
            Les deux offres s&apos;emboîtent naturellement.
          </p>
        </ScrollReveal>

        {/* cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch">
          <ScrollReveal delay={0.16} className="h-full">
            <PricingCard offer={diagnostic} />
          </ScrollReveal>
          <ScrollReveal delay={0.24} className="h-full">
            <PricingCard offer={sprint} />
          </ScrollReveal>
        </div>

        {/* reassurance note */}
        <ScrollReveal delay={0.30}>
          <p
            className="mt-10 text-center text-sm text-white/30"
            style={{ fontFamily: inter.style.fontFamily }}
          >
            Paiement sécurisé par virement · Facture fournie
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
}
