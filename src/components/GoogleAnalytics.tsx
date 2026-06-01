'use client';

import { useEffect } from 'react';
import Script from 'next/script';

// Remplacez GA_MEASUREMENT_ID par votre vrai ID (ex: G-XXXXXXXXXX)
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? '';

export default function GoogleAnalytics() {
  useEffect(() => {
    // Ne charge GA que si l'utilisateur a accepté
    const consent = localStorage.getItem('cookie-consent');
    if (consent !== 'accepted' || !GA_ID) return;

    // Inject le script GA dynamiquement
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.gtag = function (...args) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).dataLayer = (window as any).dataLayer || [];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).dataLayer.push(args);
      };
      window.gtag('js', new Date());
      window.gtag('config', GA_ID, { anonymize_ip: true });
    };
  }, []);

  return null;
}

// Déclaration globale pour TypeScript
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}
