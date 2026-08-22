'use client';

// Loader d'images personnalisé pour next/image.
// Cloudflare Pages n'exécute pas de vrai redimensionnement à la volée pour
// /_next/image (il renvoie le fichier d'origine tel quel), donc on sert
// nous-mêmes des fichiers pré-générés par taille plutôt que de passer par
// l'API d'optimisation par défaut de Next.
export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  if (src === '/laeti-3.webp') {
    return width <= 768 ? '/laeti-3-mobile.webp' : '/laeti-3-desktop.webp';
  }
  return src;
}
