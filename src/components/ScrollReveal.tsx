'use client';

import { useRef, useEffect, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** Élément rendu : `li` quand le composant est un enfant direct d'un <ol>/<ul> (HTML valide). */
  as?: 'div' | 'li';
  /** Apparition en « carte qui se retourne » (rotation 3D). */
  flip?: boolean;
  /** Durée de l'apparition en secondes (0,55 par défaut). */
  duration?: number;
  /** Numéro de la carte : elle sort « du fond » (petite, floue, légèrement tournée), dans un sens propre à chaque numéro. */
  emerge?: number;
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  y = 20,
  as: Tag = 'div',
  flip = false,
  duration = 0.55,
  emerge,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement & HTMLLIElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (emerge !== undefined) {
    const dir = [-1, 1, 1, -1, 1, -1][emerge % 6];
    const rot = dir * (3 + (emerge % 3) * 2);
    const dx = dir * (24 + (emerge % 4) * 10);
    const dy = 40 + (emerge % 3) * 18;
    return (
      <Tag
        ref={ref}
        className={className}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible
            ? 'translate3d(0,0,0) scale(1) rotate(0deg)'
            : `translate3d(${dx}px, ${dy}px, 0) scale(0.78) rotate(${rot}deg)`,
          filter: visible ? 'blur(0px)' : 'blur(8px)',
          transition: `opacity 0.8s ${delay}s ease-out, transform 1s ${delay}s cubic-bezier(0.22,1,0.36,1), filter 0.8s ${delay}s ease-out`,
          willChange: 'opacity, transform, filter',
        }}
      >
        {children}
      </Tag>
    );
  }

  return (
    <Tag
      ref={ref}
      className={className}
      style={
        flip
          ? {
              opacity: visible ? 1 : 0,
              transform: visible
                ? 'perspective(1100px) rotateY(0deg) translateY(0)'
                : 'perspective(1100px) rotateY(-100deg) translateY(30px)',
              transformOrigin: '0% 50%',
              transition: `opacity 0.5s ${delay}s ease-out, transform 1.1s ${delay}s cubic-bezier(0.22,1,0.36,1)`,
              willChange: 'opacity, transform',
            }
          : {
              opacity: visible ? 1 : 0,
              transform: `translateY(${visible ? 0 : y}px)`,
              transition: `opacity ${duration}s ${delay}s cubic-bezier(0.16,1,0.3,1), transform ${duration}s ${delay}s cubic-bezier(0.16,1,0.3,1)`,
              willChange: 'opacity, transform',
            }
      }
    >
      {children}
    </Tag>
  );
}
