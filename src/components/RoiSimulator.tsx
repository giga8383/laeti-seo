'use client';

import { useState } from 'react';
import { inter } from '@/lib/fonts';
import {
  ArrowRight,
  ArrowLeft,
  PaintBrush,
  Compass,
  CookingPot,
  HardHat,
  Hammer,
  Storefront,
  Toolbox,
  Coins,
  Phone,
  MapPin,
  ListChecks,
  Handshake,
  TrendUp,
  Users,
  CurrencyEur,
  CalendarCheck,
} from '@phosphor-icons/react';
import Link from 'next/link';

/*
  Simulateur "Combien votre fiche Google peut-elle vous rapporter ?"
  6 étapes avec stepper à icônes, 2 curseurs, résultat en 3 scénarios
  (prudent / réaliste / ambitieux) + offre recommandée.
  Les coefficients sont volontairement prudents : estimation, pas promesse.
*/

const domaines = [
  { label: 'Décoration d’intérieur', icon: PaintBrush, panierDefault: 1500, conversion: 0.3, demande: 0.7 },
  { label: 'Architecture d’intérieur', icon: Compass, panierDefault: 6000, conversion: 0.25, demande: 0.7 },
  { label: 'Cuisiniste', icon: CookingPot, panierDefault: 8000, conversion: 0.25, demande: 0.8 },
  { label: 'Rénovation / travaux', icon: HardHat, panierDefault: 10000, conversion: 0.3, demande: 1.3 },
  { label: 'Menuiserie', icon: Hammer, panierDefault: 3000, conversion: 0.35, demande: 1 },
  { label: 'Boutique déco / showroom', icon: Storefront, panierDefault: 800, conversion: 0.4, demande: 0.9 },
  { label: 'Autre métier de l’habitat', icon: Toolbox, panierDefault: 2000, conversion: 0.3, demande: 1 },
];

const zones = [
  { label: 'Ma ville et ses alentours', base: 5 },
  { label: 'Toute une agglomération', base: 8 },
  { label: 'Un département ou plus', base: 12 },
];

const fiches = [
  { label: 'Jamais vraiment optimisée', sublabel: 'Créée puis laissée telle quelle', headroom: 1 },
  { label: 'Remplie en partie, sans suivi', sublabel: 'Quelques photos, peu d’avis récents', headroom: 0.7 },
  { label: 'Bien remplie et active', sublabel: 'Photos, avis et posts réguliers', headroom: 0.4 },
];

const approches = [
  { label: 'Comprendre et faire moi-même', sublabel: 'Vous appliquez les corrections à votre rythme' },
  { label: 'Déléguer l’optimisation', sublabel: 'Quelqu’un s’en occupe pour vous pendant 3 mois' },
  { label: 'Je ne sais pas encore', sublabel: 'À décider selon le potentiel' },
];

const scenarios = [
  { key: 'prudent', label: 'Prudent', mult: 0.5 },
  { key: 'realiste', label: 'Réaliste', mult: 1 },
  { key: 'ambitieux', label: 'Ambitieux', mult: 1.4 },
];

// Montée en puissance sur 12 mois : plein régime au 4e mois
function rampe(mois: number) {
  return Math.min(mois / 4, 1);
}

const RAMPE_12_MOIS = Array.from({ length: 12 }, (_, i) => rampe(i + 1)).reduce((a, b) => a + b, 0);

function formatEuro(n: number) {
  return Math.round(n).toLocaleString('fr-FR');
}

const stepLabels = ['Métier', 'Panier', 'Contacts', 'Zone', 'Fiche', 'Approche'];
const stepIcons = [Toolbox, Coins, Phone, MapPin, ListChecks, Handshake];

export default function RoiSimulator() {
  const [step, setStep] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [domaine, setDomaine] = useState<number | null>(null);
  const [panier, setPanier] = useState(2000);
  const [contacts, setContacts] = useState(2);
  const [zone, setZone] = useState<number | null>(null);
  const [fiche, setFiche] = useState<number | null>(null);
  const [approche, setApproche] = useState<number | null>(null);

  const dom = domaines[domaine ?? 0];
  const zon = zones[zone ?? 0];
  const fic = fiches[fiche ?? 0];

  function reset() {
    setStep(0);
    setShowResult(false);
    setDomaine(null);
    setPanier(2000);
    setContacts(2);
    setZone(null);
    setFiche(null);
    setApproche(null);
  }

  function goBack() {
    if (showResult) setShowResult(false);
    else if (step > 0) setStep((s) => s - 1);
  }

  // Offre recommandée : selon la préférence, sinon selon l'état de la fiche
  const recommendSprint = approche === 1 || (approche === 2 && fiche !== 2);
  const offre = recommendSprint
    ? {
        title: 'Sprint local 3 mois',
        price: '790 € · 3 mois',
        invest: 790,
        tagline:
          'Diagnostic inclus, puis on corrige, on active et on suit : optimisation complète de votre fiche, stratégie avis, posts et rapport mensuel. Vous n’avez rien à faire.',
        cta: 'Démarrer mon Sprint local',
        href: '/offre#sprint',
      }
    : {
        title: 'Diagnostic visibilité',
        price: '190 € · livré sous 5 jours',
        invest: 190,
        tagline:
          'Un rapport clair qui vous dit exactement quoi corriger sur votre fiche, dans l’ordre. Vous appliquez ensuite les corrections vous-même, à votre rythme.',
        cta: 'Demander mon diagnostic',
        href: '/offre#diagnostic',
      };

  // Résultats par scénario
  const results = scenarios.map((sc) => {
    const gainContacts = zon.base * dom.demande * fic.headroom * sc.mult;
    const clients = gainContacts * dom.conversion;
    const caMensuel = clients * panier;
    const ca12 = caMensuel * RAMPE_12_MOIS;
    let breakeven = 0;
    let cumul = 0;
    for (let m = 1; m <= 24; m++) {
      cumul += rampe(m) * caMensuel;
      if (cumul >= offre.invest) {
        breakeven = m;
        break;
      }
    }
    return {
      ...sc,
      gainContacts: Math.max(1, Math.round(gainContacts)),
      totalContacts: contacts + Math.max(1, Math.round(gainContacts)),
      clients: clients >= 1 ? String(Math.round(clients)) : clients.toFixed(1).replace('.', ','),
      ca12,
      breakeven,
    };
  });

  const recap = domaine !== null && zone !== null && fiche !== null && approche !== null
    ? [
        { icon: dom.icon, label: dom.label },
        { icon: Coins, label: `${formatEuro(panier)} € / projet` },
        { icon: Phone, label: `${contacts} contact${contacts > 1 ? 's' : ''}/mois` },
        { icon: MapPin, label: zon.label },
        { icon: ListChecks, label: fic.label },
        { icon: Handshake, label: approches[approche].label },
      ]
    : [];

  const optionBtn = (selected: boolean) => ({
    fontFamily: inter.style.fontFamily,
    background: selected ? 'rgba(252,235,48,0.14)' : 'rgba(255,255,255,0.06)',
    border: selected ? '1px solid rgba(252,235,48,0.65)' : '1px solid rgba(255,255,255,0.12)',
    color: selected ? '#ffffff' : 'rgba(255,255,255,0.75)',
    boxShadow: selected ? '0 0 20px rgba(252,235,48,0.15)' : 'none',
  });

  const sliderStyle = { accentColor: '#fceb30', width: '100%', height: '6px', cursor: 'pointer' };

  const questionTitle = {
    fontFamily: 'Satoshi, sans-serif',
    fontWeight: 700,
    fontSize: 'clamp(19px, 2.4vw, 24px)',
    color: '#ffffff',
    lineHeight: '1.3',
  };

  const questionSub = {
    fontFamily: inter.style.fontFamily,
    fontSize: '14px',
    color: 'rgba(255,255,255,0.5)',
    lineHeight: '22px',
  };

  return (
    <div
      className="rounded-[2rem] p-6 md:p-12"
      style={{
        background: 'linear-gradient(145deg, rgba(38,77,140,0.18) 0%, rgba(15,30,72,0.35) 100%)',
        border: '1px solid rgba(255,255,255,0.12)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
      }}
    >
      {/* En-tête */}
      <div className="mb-8 text-center">
        <p
          className="uppercase tracking-widest"
          style={{ fontFamily: inter.style.fontFamily, fontWeight: 600, fontSize: '11px', color: '#fceb30', textShadow: '0 0 12px rgba(252,235,48,0.6)' }}
        >
          Simulateur · 6 questions
        </p>
        <h3
          className="mx-auto mt-2 max-w-[26ch] text-white"
          style={{
            fontFamily: 'Satoshi, "Satoshi Fallback", "League Spartan", "League Spartan Fallback", ui-sans-serif, system-ui, -apple-system, sans-serif',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '38px',
            lineHeight: '44px',
          }}
        >
          Combien votre FICHE GOOGLE peut-elle vous rapporter ?
        </h3>
        <p
          className="mx-auto mt-2 max-w-[48ch]"
          style={{
            fontFamily: inter.style.fontFamily,
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
            color: 'rgba(255,255,255,0.5)',
          }}
        >
          2 minutes pour estimer votre potentiel et trouver l’offre adaptée.
        </p>
      </div>

      {!showResult && (
        <>
          {/* Stepper à icônes */}
          <div className="mx-auto mb-3 flex max-w-xl items-center justify-between">
            {stepLabels.map((label, i) => {
              const Icon = stepIcons[i];
              const isCurrent = i === step;
              const isDone = i < step;
              return (
                <button
                  key={label}
                  onClick={() => i <= step && setStep(i)}
                  className="flex flex-col items-center gap-1.5 transition-all duration-300"
                  style={{ cursor: i <= step ? 'pointer' : 'default' }}
                >
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 md:h-10 md:w-10"
                    style={{
                      background: isCurrent ? '#fceb30' : isDone ? 'rgba(252,235,48,0.18)' : 'rgba(255,255,255,0.06)',
                      border: isDone ? '1px solid rgba(252,235,48,0.4)' : '1px solid transparent',
                      transform: isCurrent ? 'scale(1.1)' : 'scale(1)',
                      boxShadow: isCurrent ? '0 0 16px rgba(252,235,48,0.4)' : 'none',
                    }}
                  >
                    <Icon size={16} weight="bold" color={isCurrent ? '#264d8c' : isDone ? '#fceb30' : 'rgba(255,255,255,0.35)'} />
                  </span>
                  <span
                    className="hidden uppercase tracking-wider sm:block"
                    style={{
                      fontFamily: inter.style.fontFamily,
                      fontWeight: 700,
                      fontSize: '9px',
                      color: isCurrent ? '#fceb30' : isDone ? 'rgba(252,235,48,0.6)' : 'rgba(255,255,255,0.25)',
                    }}
                  >
                    {label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Barre de progression */}
          <div className="mx-auto mb-10 h-1 max-w-xl overflow-hidden rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${((step + 1) / 6) * 100}%`, background: '#fceb30', boxShadow: '0 0 8px rgba(252,235,48,0.5)' }}
            />
          </div>

          <div className="mx-auto min-h-[260px] max-w-xl">
            {/* Étape 1 : métier */}
            {step === 0 && (
              <div>
                <p className="mb-6 text-center" style={questionTitle}>
                  Dans quel domaine d’activité travaillez-vous ?
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {domaines.map((d, i) => {
                    const Icon = d.icon;
                    const selected = domaine === i;
                    return (
                      <button
                        key={d.label}
                        onClick={() => {
                          setDomaine(i);
                          setPanier(d.panierDefault);
                          setTimeout(() => setStep(1), 250);
                        }}
                        className="flex items-center gap-3 rounded-2xl p-4 text-left transition-all duration-200 hover:scale-[1.01]"
                        style={optionBtn(selected)}
                      >
                        <Icon size={20} weight={selected ? 'fill' : 'regular'} color={selected ? '#fceb30' : 'rgba(255,255,255,0.5)'} />
                        <span style={{ fontSize: '14px', fontWeight: 700 }}>{d.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Étape 2 : panier moyen (curseur) */}
            {step === 1 && (
              <div>
                <p className="mb-2 text-center" style={questionTitle}>
                  Quel est le montant moyen d’un projet client ?
                </p>
                <p className="mb-8 text-center" style={questionSub}>
                  Panier moyen ou valeur d’un client pour vous
                </p>
                <p className="mb-6 text-center" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(34px, 5vw, 46px)', color: '#fceb30', textShadow: '0 0 24px rgba(252,235,48,0.35)' }}>
                  {formatEuro(panier)} €
                </p>
                <input
                  type="range"
                  min={100}
                  max={20000}
                  step={100}
                  value={panier}
                  onChange={(e) => setPanier(Number(e.target.value))}
                  style={sliderStyle}
                />
                <div className="mt-2 flex justify-between" style={{ fontFamily: inter.style.fontFamily, fontSize: '11px', color: 'rgba(255,255,255,0.35)' }}>
                  <span>100 €</span>
                  <span>20 000 €</span>
                </div>
              </div>
            )}

            {/* Étape 3 : contacts actuels (curseur) */}
            {step === 2 && (
              <div>
                <p className="mb-2 text-center" style={questionTitle}>
                  Combien de contacts recevez-vous via Google chaque mois ?
                </p>
                <p className="mb-8 text-center" style={questionSub}>
                  Appels, demandes de devis ou messages venus de votre fiche ou de votre site
                </p>
                <p className="mb-6 text-center" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(34px, 5vw, 46px)', color: '#fceb30', textShadow: '0 0 24px rgba(252,235,48,0.35)' }}>
                  {contacts}
                  <span style={{ fontSize: '18px', color: 'rgba(255,255,255,0.45)', fontFamily: inter.style.fontFamily, fontWeight: 400 }}> /mois</span>
                </p>
                <input
                  type="range"
                  min={0}
                  max={30}
                  step={1}
                  value={contacts}
                  onChange={(e) => setContacts(Number(e.target.value))}
                  style={sliderStyle}
                />
                <div className="mt-2 flex justify-between" style={{ fontFamily: inter.style.fontFamily, fontSize: '11px', color: 'rgba(255,255,255,0.35)' }}>
                  <span>0</span>
                  <span>30 et plus</span>
                </div>
              </div>
            )}

            {/* Étape 4 : zone */}
            {step === 3 && (
              <div>
                <p className="mb-2 text-center" style={questionTitle}>
                  Sur quelle zone intervenez-vous ?
                </p>
                <p className="mb-8 text-center" style={questionSub}>
                  La zone où vous cherchez vos clients
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {zones.map((z, i) => (
                    <button
                      key={z.label}
                      onClick={() => {
                        setZone(i);
                        setTimeout(() => setStep(4), 250);
                      }}
                      className="rounded-2xl p-4 text-left transition-all duration-200 hover:scale-[1.01]"
                      style={optionBtn(zone === i)}
                    >
                      <span style={{ fontSize: '14px', fontWeight: 700 }}>{z.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Étape 5 : état de la fiche */}
            {step === 4 && (
              <div>
                <p className="mb-2 text-center" style={questionTitle}>
                  Où en est votre fiche Google aujourd’hui ?
                </p>
                <p className="mb-8 text-center" style={questionSub}>
                  Soyez honnête, c’est ce qui détermine votre marge de progression
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {fiches.map((f, i) => (
                    <button
                      key={f.label}
                      onClick={() => {
                        setFiche(i);
                        setTimeout(() => setStep(5), 250);
                      }}
                      className="rounded-2xl p-4 text-left transition-all duration-200 hover:scale-[1.01]"
                      style={optionBtn(fiche === i)}
                    >
                      <span className="block" style={{ fontSize: '14px', fontWeight: 700 }}>{f.label}</span>
                      <span className="mt-0.5 block" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', fontWeight: 400 }}>{f.sublabel}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Étape 6 : approche */}
            {step === 5 && (
              <div>
                <p className="mb-2 text-center" style={questionTitle}>
                  Comment préférez-vous avancer ?
                </p>
                <p className="mb-8 text-center" style={questionSub}>
                  Votre réponse détermine l’offre qu’on vous recommande
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {approches.map((a, i) => (
                    <button
                      key={a.label}
                      onClick={() => {
                        setApproche(i);
                        setTimeout(() => setShowResult(true), 250);
                      }}
                      className="rounded-2xl p-4 text-left transition-all duration-200 hover:scale-[1.01]"
                      style={optionBtn(approche === i)}
                    >
                      <span className="block" style={{ fontSize: '14px', fontWeight: 700 }}>{a.label}</span>
                      <span className="mt-0.5 block" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', fontWeight: 400 }}>{a.sublabel}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between">
              {step > 0 ? (
                <button
                  onClick={goBack}
                  className="flex items-center gap-1.5 text-white/40 transition-colors hover:text-white/70"
                  style={{ fontFamily: inter.style.fontFamily, fontSize: '13px' }}
                >
                  <ArrowLeft size={13} weight="bold" />
                  Retour
                </button>
              ) : (
                <span />
              )}
              {(step === 1 || step === 2) && (
                <button
                  onClick={() => setStep((s) => s + 1)}
                  className="inline-flex items-center gap-2 rounded-full bg-[#fceb30] px-6 py-3 font-bold text-[#264d8c] transition-all duration-300 hover:brightness-105 active:scale-[0.98]"
                  style={{ fontFamily: inter.style.fontFamily, fontSize: '14px' }}
                >
                  Suivant
                  <ArrowRight size={14} weight="bold" />
                </button>
              )}
            </div>
          </div>
        </>
      )}

      {/* ── Résultat ── */}
      {showResult && (
        <div>
          {/* Rappel des réponses */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
            {recap.map((r, i) => {
              const Icon = r.icon;
              return (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5"
                  style={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: '11px',
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.7)',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <Icon size={12} weight="bold" color="rgba(252,235,48,0.7)" />
                  {r.label}
                </span>
              );
            })}
          </div>

          {/* 3 scénarios */}
          <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {results.map((r) => {
              const isRealiste = r.key === 'realiste';
              return (
                <div
                  key={r.key}
                  className="relative rounded-3xl p-6 transition-all duration-300 md:p-7"
                  style={{
                    background: isRealiste
                      ? 'linear-gradient(160deg, #2c58b0 0%, #264d8c 60%, #1d3e77 100%)'
                      : 'rgba(255,255,255,0.04)',
                    border: isRealiste ? '1.5px solid rgba(252,235,48,0.5)' : '1px solid rgba(255,255,255,0.1)',
                    boxShadow: isRealiste ? '0 20px 48px -16px rgba(252,235,48,0.18)' : 'none',
                    transform: isRealiste ? 'translateY(-6px)' : 'none',
                  }}
                >
                  {isRealiste && (
                    <span
                      className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1 uppercase tracking-wider"
                      style={{ fontFamily: inter.style.fontFamily, fontWeight: 700, fontSize: '10px', background: '#fceb30', color: '#264d8c' }}
                    >
                      Le plus probable
                    </span>
                  )}
                  <p
                    className="mb-5 text-center uppercase tracking-widest"
                    style={{ fontFamily: inter.style.fontFamily, fontWeight: 700, fontSize: '11px', color: isRealiste ? 'rgba(255,255,255,0.65)' : 'rgba(255,255,255,0.35)' }}
                  >
                    {r.label}
                  </p>
                  <div className="mb-6 text-center">
                    <p style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '34px', lineHeight: 1, color: isRealiste ? '#fceb30' : '#ffffff', textShadow: isRealiste ? '0 0 20px rgba(252,235,48,0.35)' : 'none' }}>
                      +{r.gainContacts}
                    </p>
                    <p className="mt-1.5" style={{ fontFamily: inter.style.fontFamily, fontSize: '12px', color: 'rgba(255,255,255,0.45)' }}>
                      contacts/mois une fois la fiche optimisée
                    </p>
                  </div>
                  <div className="space-y-3.5 border-t pt-5" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                    {[
                      { icon: TrendUp, label: 'Contacts au total', value: `${r.totalContacts}/mois` },
                      { icon: Users, label: 'Nouveaux clients', value: `+${r.clients}/mois` },
                      { icon: CurrencyEur, label: 'CA sur 12 mois', value: `${formatEuro(r.ca12)} €` },
                      { icon: CalendarCheck, label: 'Investissement couvert', value: r.breakeven === 0 ? '+24 mois' : r.breakeven === 1 ? 'dès le 1er mois' : `en ${r.breakeven} mois` },
                    ].map((row, i) => {
                      const RowIcon = row.icon;
                      return (
                        <div key={i} className="flex items-center justify-between gap-2">
                          <span className="flex items-center gap-2" style={{ fontFamily: inter.style.fontFamily, fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>
                            <RowIcon size={13} weight="bold" color={isRealiste ? 'rgba(252,235,48,0.8)' : 'rgba(255,255,255,0.35)'} />
                            {row.label}
                          </span>
                          <span style={{ fontFamily: inter.style.fontFamily, fontWeight: 700, fontSize: '13px', color: '#ffffff', whiteSpace: 'nowrap' }}>
                            {row.value}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Offre recommandée */}
          <div
            className="rounded-3xl p-6 text-center md:p-10"
            style={{
              background: 'linear-gradient(145deg, rgba(252,235,48,0.08) 0%, rgba(38,77,140,0.15) 100%)',
              border: '1px solid rgba(252,235,48,0.25)',
            }}
          >
            <p
              className="mb-3 uppercase tracking-widest"
              style={{ fontFamily: inter.style.fontFamily, fontWeight: 700, fontSize: '11px', color: 'rgba(252,235,48,0.8)' }}
            >
              Notre recommandation pour vous
            </p>
            <p style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(22px, 3vw, 28px)', color: '#ffffff', lineHeight: 1.2 }}>
              {offre.title}
            </p>
            <p className="mt-1.5" style={{ fontFamily: inter.style.fontFamily, fontWeight: 700, fontSize: '15px', color: '#fceb30' }}>
              {offre.price}
            </p>
            <p className="mx-auto mt-3 max-w-xl" style={{ fontFamily: inter.style.fontFamily, fontSize: '14px', lineHeight: '23px', color: 'rgba(255,255,255,0.65)' }}>
              {offre.tagline}
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={offre.href}
                className="inline-flex items-center gap-2 rounded-full bg-[#fceb30] px-7 py-3.5 font-bold text-[#264d8c] transition-all duration-300 hover:brightness-105 active:scale-[0.98]"
                style={{ fontFamily: inter.style.fontFamily, fontSize: '14px' }}
              >
                {offre.cta}
                <ArrowRight size={14} weight="bold" />
              </Link>
              <Link
                href="/offre"
                className="text-white/50 underline underline-offset-4 transition-colors hover:text-white/80"
                style={{ fontFamily: inter.style.fontFamily, fontSize: '13px' }}
              >
                Comparer les deux offres
              </Link>
            </div>
            <button
              onClick={reset}
              className="mx-auto mt-6 block text-white/35 transition-colors hover:text-white/60"
              style={{ fontFamily: inter.style.fontFamily, fontSize: '12px' }}
            >
              Refaire la simulation
            </button>
          </div>

          <p
            className="mx-auto mt-6 max-w-lg text-center"
            style={{ fontFamily: inter.style.fontFamily, fontSize: '11px', lineHeight: '18px', color: 'rgba(255,255,255,0.3)' }}
          >
            Estimations basées sur une montée en puissance progressive sur 12 mois. Les résultats réels dépendent de votre zone, de la concurrence locale et de la régularité du travail effectué. Ce n’est pas une promesse de résultat.
          </p>
        </div>
      )}
    </div>
  );
}
