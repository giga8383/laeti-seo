import HeroContent from './HeroContent';

function BlueprintHouse() {
  return (
    <div
      className="pointer-events-none absolute inset-0 flex items-center justify-end overflow-hidden"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 720 520"
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[72%] max-w-[820px] translate-x-16 translate-y-8 opacity-[0.07]"
      >
        {/* ── construction / dimension lines ── */}
        <line x1="0"   y1="472" x2="720" y2="472" strokeWidth="0.6" strokeDasharray="5 4" />
        <line x1="48"  y1="220" x2="48"  y2="480" strokeWidth="0.5" />
        <line x1="155" y1="220" x2="38"  y2="220" strokeWidth="0.5" strokeDasharray="5 3" />
        <line x1="155" y1="472" x2="38"  y2="472" strokeWidth="0.5" strokeDasharray="5 3" />
        <line x1="43"  y1="220" x2="53"  y2="220" strokeWidth="0.8" />
        <line x1="43"  y1="472" x2="53"  y2="472" strokeWidth="0.8" />

        <line x1="590" y1="220" x2="650" y2="220" strokeWidth="0.5" strokeDasharray="5 3" />
        <line x1="590" y1="472" x2="650" y2="472" strokeWidth="0.5" strokeDasharray="5 3" />
        <line x1="640" y1="212" x2="640" y2="480" strokeWidth="0.5" />
        <line x1="635" y1="220" x2="645" y2="220" strokeWidth="0.8" />
        <line x1="635" y1="472" x2="645" y2="472" strokeWidth="0.8" />

        <line x1="370" y1="82"  x2="700" y2="82"  strokeWidth="0.5" strokeDasharray="5 3" />
        <line x1="690" y1="72"  x2="690" y2="482" strokeWidth="0.5" />
        <line x1="685" y1="82"  x2="695" y2="82"  strokeWidth="0.8" />
        <line x1="685" y1="472" x2="695" y2="472" strokeWidth="0.8" />

        {/* ── left wing body ── */}
        <rect x="58"  y="292" width="148" height="180" strokeWidth="1.3" />
        <polyline points="38,292 132,188 226,292" strokeWidth="1.3" />
        <rect x="98"  y="196" width="24" height="64" strokeWidth="1" />
        <rect x="94"  y="190" width="32" height="9"  strokeWidth="1" />
        <rect x="80"  y="326" width="58" height="52" strokeWidth="1" />
        <line x1="109" y1="326" x2="109" y2="378" strokeWidth="0.9" />
        <line x1="80"  y1="352" x2="138" y2="352" strokeWidth="0.9" />
        <rect x="148" y="375" width="42" height="97" strokeWidth="1" />
        <line x1="169" y1="375" x2="169" y2="472" strokeWidth="0.8" />
        <circle cx="183" cy="422" r="3.5" strokeWidth="0.9" />

        {/* ── main house body ── */}
        <rect x="188" y="222" width="402" height="250" strokeWidth="1.5" />
        <polyline points="162,222 389,82 616,222" strokeWidth="1.5" />
        <line x1="389" y1="82" x2="389" y2="145" strokeWidth="0.7" strokeDasharray="4 3" />
        <rect x="272" y="96"  width="30" height="98" strokeWidth="1.1" />
        <rect x="268" y="90"  width="38" height="10" strokeWidth="1" />

        {/* ── upper windows ── */}
        <rect x="210" y="252" width="72" height="68" strokeWidth="1" />
        <line x1="246" y1="252" x2="246" y2="320" strokeWidth="0.9" />
        <line x1="210" y1="286" x2="282" y2="286" strokeWidth="0.9" />
        <line x1="246" y1="269" x2="282" y2="269" strokeWidth="0.6" />
        <line x1="210" y1="269" x2="246" y2="269" strokeWidth="0.6" />
        <line x1="246" y1="303" x2="282" y2="303" strokeWidth="0.6" />
        <line x1="210" y1="303" x2="246" y2="303" strokeWidth="0.6" />

        <rect x="506" y="252" width="72" height="68" strokeWidth="1" />
        <line x1="542" y1="252" x2="542" y2="320" strokeWidth="0.9" />
        <line x1="506" y1="286" x2="578" y2="286" strokeWidth="0.9" />
        <line x1="506" y1="269" x2="542" y2="269" strokeWidth="0.6" />
        <line x1="542" y1="269" x2="578" y2="269" strokeWidth="0.6" />
        <line x1="506" y1="303" x2="542" y2="303" strokeWidth="0.6" />
        <line x1="542" y1="303" x2="578" y2="303" strokeWidth="0.6" />

        {/* ── front door ── */}
        <rect x="346" y="346" width="86" height="126" strokeWidth="1.2" />
        <path  d="M346,346 Q389,308 432,346" strokeWidth="1" />
        <line  x1="389" y1="346" x2="389" y2="472" strokeWidth="0.9" />
        <circle cx="420" cy="408" r="4" strokeWidth="0.9" />
        <rect x="352" y="354" width="33" height="46" strokeWidth="0.6" />
        <rect x="393" y="354" width="33" height="46" strokeWidth="0.6" />
        <rect x="352" y="408" width="33" height="30" strokeWidth="0.6" />
        <rect x="393" y="408" width="33" height="30" strokeWidth="0.6" />

        {/* ── lower windows ── */}
        <rect x="214" y="348" width="78" height="68" strokeWidth="1" />
        <line x1="253" y1="348" x2="253" y2="416" strokeWidth="0.9" />
        <line x1="214" y1="382" x2="292" y2="382" strokeWidth="0.9" />

        <rect x="496" y="348" width="78" height="68" strokeWidth="1" />
        <line x1="535" y1="348" x2="535" y2="416" strokeWidth="0.9" />
        <line x1="496" y1="382" x2="574" y2="382" strokeWidth="0.9" />

        {/* ── attic window ── */}
        <rect x="360" y="154" width="58" height="44" strokeWidth="0.9" />
        <line x1="389" y1="154" x2="389" y2="198" strokeWidth="0.7" />
        <line x1="360" y1="176" x2="418" y2="176" strokeWidth="0.7" />

        {/* ── antenna ── */}
        <line x1="520" y1="154" x2="520" y2="105" strokeWidth="0.8" />
        <line x1="504" y1="108" x2="536" y2="108" strokeWidth="0.8" />
        <line x1="504" y1="111" x2="504" y2="116" strokeWidth="0.8" />
        <line x1="520" y1="109" x2="520" y2="116" strokeWidth="0.8" />
        <line x1="536" y1="111" x2="536" y2="116" strokeWidth="0.8" />

        {/* ── ground & steps ── */}
        <line x1="0" y1="472" x2="720" y2="472" strokeWidth="1.2" />
        <rect x="334" y="468" width="110" height="6"  strokeWidth="0.8" />
        <rect x="326" y="474" width="126" height="6"  strokeWidth="0.8" />

        {/* ── fascia ── */}
        <line x1="162" y1="222" x2="616" y2="222" strokeWidth="0.7" strokeDasharray="3 3" />
        <line x1="38"  y1="292" x2="226" y2="292" strokeWidth="0.7" strokeDasharray="3 3" />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative bg-transparent overflow-hidden">
      <BlueprintHouse />
      <div className="mx-auto flex min-h-[100dvh] max-w-5xl flex-col justify-start px-6 pt-28 pb-16 md:justify-center md:pt-40 md:pb-24">
        <HeroContent />
      </div>
    </section>
  );
}
