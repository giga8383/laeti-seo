import { Check, X } from '@phosphor-icons/react/dist/ssr';
import ScrollReveal from './ScrollReveal';
import { inter } from '@/lib/fonts';

const forYou = [
  'Si vous êtes décorateur, architecte d\'intérieur, cuisiniste, menuisier, artisan ou professionnel de l\'habitat',
  'Si vous avez une fiche Google mais ne savez pas ce que ça vous rapporte',
  'Si certains concurrents ressortent avant vous sans que vous compreniez pourquoi',
  'Si vous voulez plus de devis qualifiés sans vous perdre dans une stratégie complexe',
  'Si vous voulez savoir quoi corriger en priorité, avec une vision claire et applicable',
];

const notForYou = [
  'Si vous cherchez une recette magique en 7 jours',
  'Si vous voulez être plus visible sans toucher à votre fiche Google, votre site ou vos avis',
  'Si vous voulez du marketing décoratif, pas un travail concret sur vos blocages',
];

const itemStyle = {
  fontFamily: inter.style.fontFamily,
  fontWeight: 400,
  fontStyle: 'normal' as const,
  fontSize: '16px',
  lineHeight: '24px',
};

export default function Target() {
  return (
    <section className="relative isolate overflow-hidden bg-white" style={{ backgroundColor: '#ffffff' }}>

      <div className="pointer-events-none absolute inset-0" aria-hidden="true">

        {/* ── Grande illustration intérieure panoramique ── */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0.10 }}
        >
          {/* ═══ STRUCTURE DE LA PIÈCE ═══ */}
          {/* Sol */}
          <path d="M0 560 L340 430 L860 430 L1200 560" stroke="#264d8c" strokeWidth="1.2" strokeLinecap="round"/>
          {/* Plafond */}
          <path d="M0 30 L340 110 L860 110 L1200 30" stroke="#264d8c" strokeWidth="1" strokeLinecap="round"/>
          {/* Mur gauche */}
          <line x1="340" y1="110" x2="340" y2="430" stroke="#264d8c" strokeWidth="1.2" strokeLinecap="round"/>
          {/* Mur droit */}
          <line x1="860" y1="110" x2="860" y2="430" stroke="#264d8c" strokeWidth="1.2" strokeLinecap="round"/>
          {/* Plinthe gauche */}
          <path d="M0 570 L340 442" stroke="#264d8c" strokeWidth="0.7" strokeLinecap="round"/>
          {/* Plinthe droite */}
          <path d="M860 442 L1200 570" stroke="#264d8c" strokeWidth="0.7" strokeLinecap="round"/>

          {/* Lames de parquet — perspective gauche */}
          <path d="M0 480 L340 390" stroke="#264d8c" strokeWidth="0.4" strokeDasharray="18 10"/>
          <path d="M0 510 L340 408" stroke="#264d8c" strokeWidth="0.4" strokeDasharray="18 10"/>
          <path d="M0 535 L340 420" stroke="#264d8c" strokeWidth="0.4" strokeDasharray="18 10"/>
          {/* Lames de parquet — perspective droite */}
          <path d="M860 390 L1200 480" stroke="#264d8c" strokeWidth="0.4" strokeDasharray="18 10"/>
          <path d="M860 408 L1200 510" stroke="#264d8c" strokeWidth="0.4" strokeDasharray="18 10"/>
          <path d="M860 420 L1200 535" stroke="#264d8c" strokeWidth="0.4" strokeDasharray="18 10"/>
          {/* Lames parquet fond */}
          <line x1="340" y1="400" x2="860" y2="400" stroke="#264d8c" strokeWidth="0.4"/>
          <line x1="340" y1="418" x2="860" y2="418" stroke="#264d8c" strokeWidth="0.4"/>

          {/* ═══ FENÊTRE FOND ═══ */}
          <rect x="480" y="140" width="240" height="220" rx="2" stroke="#264d8c" strokeWidth="1.2"/>
          <line x1="600" y1="140" x2="600" y2="360" stroke="#264d8c" strokeWidth="0.8"/>
          <line x1="480" y1="250" x2="720" y2="250" stroke="#264d8c" strokeWidth="0.8"/>
          {/* Arc fenêtre */}
          <path d="M480 140 Q600 100 720 140" stroke="#264d8c" strokeWidth="1" strokeLinecap="round"/>
          {/* Embrasure */}
          <rect x="472" y="133" width="256" height="235" rx="3" stroke="#264d8c" strokeWidth="0.5" strokeDasharray="6 4"/>

          {/* ═══ TABLEAU MUR GAUCHE ═══ */}
          <rect x="370" y="160" width="90" height="110" stroke="#264d8c" strokeWidth="1.1"/>
          <rect x="378" y="168" width="74" height="94" stroke="#264d8c" strokeWidth="0.5"/>
          {/* Feuilles dans tableau */}
          <path d="M415 250 C410 230 398 210 402 192 C405 178 420 176 422 190 C424 205 418 228 415 250" stroke="#264d8c" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M415 250 C420 230 432 210 428 192 C425 178 410 176 408 190 C406 205 412 228 415 250" stroke="#264d8c" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M407 218 C400 214 394 208 393 202" stroke="#264d8c" strokeWidth="0.4" strokeLinecap="round"/>
          <path d="M423 218 C430 214 436 208 437 202" stroke="#264d8c" strokeWidth="0.4" strokeLinecap="round"/>

          {/* ═══ CANAPÉ ═══ */}
          {/* Dossier */}
          <path d="M155 295 L160 220 L480 215 L485 295 Z" stroke="#264d8c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          {/* Assise */}
          <path d="M155 295 L158 360 L482 356 L485 295 Z" stroke="#264d8c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          {/* Accoudoir gauche */}
          <path d="M136 370 L138 210 L162 208 L160 368 Z" stroke="#264d8c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M133 214 L136 203 L165 201 L162 212 Z" stroke="#264d8c" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
          {/* Accoudoir droit */}
          <path d="M482 368 L485 208 L508 210 L508 370 Z" stroke="#264d8c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M480 212 L483 201 L511 203 L508 214 Z" stroke="#264d8c" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
          {/* Pieds canapé */}
          <line x1="163" y1="360" x2="160" y2="390" stroke="#264d8c" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="480" y1="358" x2="483" y2="390" stroke="#264d8c" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="280" y1="358" x2="278" y2="390" stroke="#264d8c" strokeWidth="1.2" strokeLinecap="round"/>
          {/* Hachures dossier */}
          <line x1="185" y1="222" x2="185" y2="293" stroke="#264d8c" strokeWidth="0.35"/>
          <line x1="215" y1="220" x2="215" y2="292" stroke="#264d8c" strokeWidth="0.35"/>
          <line x1="245" y1="218" x2="245" y2="291" stroke="#264d8c" strokeWidth="0.35"/>
          <line x1="275" y1="217" x2="275" y2="290" stroke="#264d8c" strokeWidth="0.35"/>
          <line x1="305" y1="216" x2="305" y2="289" stroke="#264d8c" strokeWidth="0.35"/>
          <line x1="335" y1="216" x2="335" y2="289" stroke="#264d8c" strokeWidth="0.35"/>
          <line x1="365" y1="215" x2="365" y2="289" stroke="#264d8c" strokeWidth="0.35"/>
          <line x1="395" y1="215" x2="395" y2="288" stroke="#264d8c" strokeWidth="0.35"/>
          <line x1="425" y1="215" x2="425" y2="288" stroke="#264d8c" strokeWidth="0.35"/>
          <line x1="455" y1="216" x2="455" y2="289" stroke="#264d8c" strokeWidth="0.35"/>
          {/* Ligne séparation coussins */}
          <line x1="162" y1="295" x2="484" y2="293" stroke="#264d8c" strokeWidth="0.8" strokeLinecap="round"/>
          <line x1="248" y1="222" x2="246" y2="360" stroke="#264d8c" strokeWidth="0.8" strokeLinecap="round"/>
          <line x1="368" y1="220" x2="366" y2="358" stroke="#264d8c" strokeWidth="0.8" strokeLinecap="round"/>
          {/* Coussins déco */}
          <path d="M178 293 C178 270 195 264 208 264 C221 264 240 270 240 293 C240 308 221 314 208 314 C195 314 178 308 178 293 Z" stroke="#264d8c" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M185 283 C194 287 206 288 230 283" stroke="#264d8c" strokeWidth="0.5" strokeLinecap="round"/>
          <path d="M182 295 C192 299 206 300 234 295" stroke="#264d8c" strokeWidth="0.5" strokeLinecap="round"/>
          <path d="M390 290 C390 270 406 264 418 264 C430 264 448 270 448 290 C448 305 430 310 418 310 C406 310 390 305 390 290 Z" stroke="#264d8c" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>

          {/* ═══ TABLE BASSE ═══ */}
          <path d="M195 400 L195 430 L460 428 L460 398 Z" stroke="#264d8c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          {/* Pieds table */}
          <line x1="210" y1="430" x2="208" y2="450" stroke="#264d8c" strokeWidth="1.3" strokeLinecap="round"/>
          <line x1="445" y1="428" x2="447" y2="448" stroke="#264d8c" strokeWidth="1.3" strokeLinecap="round"/>
          {/* Objets sur table */}
          <circle cx="290" cy="412" r="12" stroke="#264d8c" strokeWidth="0.8"/>
          <path d="M335 398 L332 380 L345 378 L344 398" stroke="#264d8c" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="338" y1="395" x2="338" y2="378" stroke="#264d8c" strokeWidth="0.4"/>
          <rect x="380" y="404" width="30" height="20" rx="2" stroke="#264d8c" strokeWidth="0.7"/>

          {/* ═══ TAPIS ═══ */}
          <ellipse cx="325" cy="440" rx="210" ry="28" stroke="#264d8c" strokeWidth="1"/>
          <ellipse cx="325" cy="440" rx="192" ry="21" stroke="#264d8c" strokeWidth="0.5"/>
          <path d="M118 438 C180 430 260 428 325 432 C390 436 460 434 534 440" stroke="#264d8c" strokeWidth="0.5" strokeLinecap="round"/>
          <path d="M120 444 C182 436 262 434 325 438 C390 442 462 440 532 446" stroke="#264d8c" strokeWidth="0.5" strokeLinecap="round"/>

          {/* ═══ LAMPE SUR PIED ═══ */}
          {/* Base */}
          <path d="M68 430 Q75 428 88 430 Q100 432 108 430" stroke="#264d8c" strokeWidth="1.3" strokeLinecap="round"/>
          <line x1="88" y1="430" x2="88" y2="430" stroke="#264d8c" strokeWidth="1.3"/>
          {/* Tige */}
          <path d="M88 430 C88 380 90 280 92 200" stroke="#264d8c" strokeWidth="1.3" strokeLinecap="round"/>
          {/* Bras courbe */}
          <path d="M92 200 C95 185 110 175 128 172" stroke="#264d8c" strokeWidth="1.2" strokeLinecap="round"/>
          {/* Abat-jour */}
          <path d="M110 165 L148 165 L155 192 L103 192 Z" stroke="#264d8c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="110" y1="165" x2="113" y2="158" stroke="#264d8c" strokeWidth="0.8" strokeLinecap="round"/>
          <line x1="148" y1="165" x2="145" y2="158" stroke="#264d8c" strokeWidth="0.8" strokeLinecap="round"/>
          {/* Hachures abat-jour */}
          <line x1="116" y1="167" x2="118" y2="190" stroke="#264d8c" strokeWidth="0.4"/>
          <line x1="124" y1="166" x2="126" y2="190" stroke="#264d8c" strokeWidth="0.4"/>
          <line x1="132" y1="165" x2="134" y2="191" stroke="#264d8c" strokeWidth="0.4"/>
          <line x1="140" y1="165" x2="142" y2="191" stroke="#264d8c" strokeWidth="0.4"/>
          {/* Contrepoids / socle */}
          <ellipse cx="88" cy="432" rx="22" ry="6" stroke="#264d8c" strokeWidth="1"/>

          {/* ═══ PLANTE MONSTERA (droite) ═══ */}
          {/* Pot */}
          <path d="M945 480 L938 520 L992 520 L984 480 Z" stroke="#264d8c" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="935" y1="482" x2="987" y2="482" stroke="#264d8c" strokeWidth="1.6" strokeLinecap="round"/>
          {/* Tiges */}
          <path d="M962 480 C958 440 950 390 945 340" stroke="#264d8c" strokeWidth="1.2" strokeLinecap="round"/>
          <path d="M965 480 C970 435 978 380 985 325" stroke="#264d8c" strokeWidth="1.2" strokeLinecap="round"/>
          <path d="M963 480 C955 425 940 370 928 310" stroke="#264d8c" strokeWidth="1" strokeLinecap="round"/>
          {/* Grande feuille monstera gauche */}
          <path d="M945 340 C918 310 900 270 908 235 C914 210 934 205 942 220 C952 238 950 295 945 340" stroke="#264d8c" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M945 340 C932 305 920 265 926 232" stroke="#264d8c" strokeWidth="0.5" strokeLinecap="round"/>
          {/* Découpures monstera */}
          <path d="M930 280 C920 268 914 252 918 242" stroke="#264d8c" strokeWidth="0.7" strokeLinecap="round"/>
          <path d="M936 310 C924 300 916 285 918 272" stroke="#264d8c" strokeWidth="0.7" strokeLinecap="round"/>
          <path d="M935 255 C928 248 920 240 920 232" stroke="#264d8c" strokeWidth="0.5" strokeLinecap="round"/>
          {/* Grande feuille droite */}
          <path d="M985 325 C1010 295 1028 255 1018 222 C1010 196 990 192 984 208 C978 226 980 285 985 325" stroke="#264d8c" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M985 325 C998 292 1010 252 1004 220" stroke="#264d8c" strokeWidth="0.5" strokeLinecap="round"/>
          <path d="M1000 268 C1010 255 1016 240 1012 228" stroke="#264d8c" strokeWidth="0.7" strokeLinecap="round"/>
          <path d="M994 298 C1006 285 1014 268 1010 254" stroke="#264d8c" strokeWidth="0.7" strokeLinecap="round"/>
          {/* Feuille haute */}
          <path d="M928 310 C905 280 894 245 902 215 C908 192 926 188 932 202 C940 218 934 275 928 310" stroke="#264d8c" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M928 310 C916 278 908 240 914 208" stroke="#264d8c" strokeWidth="0.4" strokeLinecap="round"/>

          {/* ═══ BIBLIOTHÈQUE (fond droite) ═══ */}
          <rect x="880" y="130" width="155" height="300" stroke="#264d8c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="957" y1="130" x2="957" y2="430" stroke="#264d8c" strokeWidth="0.9"/>
          <line x1="880" y1="205" x2="1035" y2="205" stroke="#264d8c" strokeWidth="1"/>
          <line x1="880" y1="280" x2="1035" y2="280" stroke="#264d8c" strokeWidth="1"/>
          <line x1="880" y1="355" x2="1035" y2="355" stroke="#264d8c" strokeWidth="1"/>
          {/* Livres section 1 */}
          <rect x="888" y="148" width="9" height="55" stroke="#264d8c" strokeWidth="0.8"/>
          <rect x="898" y="152" width="8" height="51" stroke="#264d8c" strokeWidth="0.8"/>
          <rect x="907" y="144" width="10" height="59" stroke="#264d8c" strokeWidth="0.8"/>
          <rect x="918" y="150" width="8" height="53" stroke="#264d8c" strokeWidth="0.8"/>
          {/* Plante section 1 droite */}
          <path d="M990 205 L985 192 L1000 190 L996 205 Z" stroke="#264d8c" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M992 192 C988 178 982 166 985 157 C987 150 997 150 999 158 C1001 167 995 180 992 192" stroke="#264d8c" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M992 178 C985 170 980 162 982 155" stroke="#264d8c" strokeWidth="0.4" strokeLinecap="round"/>
          <path d="M992 178 C999 170 1004 162 1002 155" stroke="#264d8c" strokeWidth="0.4" strokeLinecap="round"/>
          {/* Livres section 2 */}
          <rect x="888" y="222" width="10" height="55" stroke="#264d8c" strokeWidth="0.8"/>
          <rect x="899" y="226" width="8" height="51" stroke="#264d8c" strokeWidth="0.8"/>
          <rect x="908" y="218" width="11" height="59" stroke="#264d8c" strokeWidth="0.8"/>
          <rect x="920" y="224" width="9" height="53" stroke="#264d8c" strokeWidth="0.8"/>
          <rect x="930" y="230" width="7" height="47" stroke="#264d8c" strokeWidth="0.8"/>
          {/* Vase section 2 droite */}
          <path d="M990 280 C988 262 984 248 986 238 C988 230 1002 230 1004 238 C1006 248 1002 262 1000 280 Z" stroke="#264d8c" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
          <ellipse cx="995" cy="280" rx="8" ry="3" stroke="#264d8c" strokeWidth="0.8"/>
          {/* Livres section 3 */}
          <rect x="888" y="298" width="8" height="52" stroke="#264d8c" strokeWidth="0.8"/>
          <rect x="897" y="302" width="9" height="48" stroke="#264d8c" strokeWidth="0.8"/>
          <rect x="907" y="295" width="7" height="55" stroke="#264d8c" strokeWidth="0.8"/>
          <rect x="915" y="300" width="10" height="50" stroke="#264d8c" strokeWidth="0.8"/>
          {/* Livres à plat section 4 */}
          <rect x="888" y="368" width="55" height="10" rx="0.5" stroke="#264d8c" strokeWidth="0.8"/>
          <rect x="892" y="378" width="49" height="10" rx="0.5" stroke="#264d8c" strokeWidth="0.8"/>
          <rect x="888" y="388" width="58" height="10" rx="0.5" stroke="#264d8c" strokeWidth="0.8"/>
          {/* Poignée */}
          <circle cx="1028" cy="280" rx="4" ry="4" stroke="#264d8c" strokeWidth="0.9"/>

        </svg>

      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <ScrollReveal>
          <h2
            className="mb-14"
            style={{
              fontFamily: 'Satoshi, sans-serif',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '55px',
              color: '#2c58b0',
              textShadow: '0 0 40px rgba(50, 98, 171, 0.35), 0 0 80px rgba(50, 98, 171, 0.15)',
            }}
          >
            Ce diagnostic est…
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

          {/* Pour vous */}
          <ScrollReveal delay={0.1}>
            <div
              className="relative h-full overflow-hidden rounded-[2rem] p-10"
              style={{
                background: 'linear-gradient(145deg, #2a57b8 0%, #3262ab 55%, #1d3f8f 100%)',
                boxShadow: '0 30px 60px -15px rgba(50, 98, 171, 0.55), inset 0 1px 0 rgba(255,255,255,0.15)',
              }}
            >
              {/* Watermark décoratif */}
              <div className="pointer-events-none absolute -right-6 -top-6 opacity-[0.06]">
                <Check size={180} weight="bold" color="#ffffff" />
              </div>

              {/* Barre accent */}
              <div className="mb-8 h-[3px] w-12 rounded-full bg-[#fceb30]" />

              {/* Titre */}
              <h3
                className="mb-8"
                style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: 700,
                  fontSize: '20px',
                  lineHeight: '28px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: '#ffffff',
                }}
              >
                Pour <span style={{ color: '#fceb30' }}>vous</span>
              </h3>

              {/* List */}
              <ul className="space-y-5">
                {forYou.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#fceb30]/20">
                      <Check size={11} weight="bold" color="#fceb30" />
                    </span>
                    <span style={{ ...itemStyle, color: 'rgba(255,255,255,0.85)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* N'est pas pour vous */}
          <ScrollReveal delay={0.2}>
            <div
              className="relative h-full overflow-hidden rounded-[2rem] p-10"
              style={{
                background: 'linear-gradient(145deg, #7dd3fc 0%, #bae6fd 55%, #e0f2fe 100%)',
                border: '1px solid rgba(125,211,252,0.6)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.80), 0 0 40px -4px rgba(125,211,252,0.45), 0 0 80px -8px rgba(56,189,248,0.25), 0 24px 60px -16px rgba(125,211,252,0.30)',
              }}
            >
              {/* Watermark décoratif */}
              <div className="pointer-events-none absolute -right-6 -top-6 opacity-[0.25]">
                <X size={180} weight="bold" color="#ffffff" />
              </div>

              {/* Barre accent */}
              <div className="mb-8 h-[3px] w-12 rounded-full bg-white" />

              {/* Titre */}
              <h3
                className="mb-8"
                style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: 700,
                  fontSize: '20px',
                  lineHeight: '28px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: '#264d8c',
                }}
              >
                N&apos;est <span style={{ color: '#ffffff' }}>pas pour vous</span>
              </h3>

              {/* List */}
              <ul className="space-y-5">
                {notForYou.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1e40af]/50">
                      <X size={11} weight="bold" color="#ffffff" />
                    </span>
                    <span style={{ ...itemStyle, color: 'rgba(38,77,140,0.80)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}


