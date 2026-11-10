'use client';

import { useRef, useEffect, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** Élément rendu : `li` quand le composant est un enfant direct d'un <ol>/<ul> (HTML valide). */
  as?: 'div' | 'li';
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  y = 20,
  as: Tag = 'div',
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

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: `translateY(${visible ? 0 : y}px)`,
        transition: `opacity 0.55s ${delay}s cubic-bezier(0.16,1,0.3,1), transform 0.55s ${delay}s cubic-bezier(0.16,1,0.3,1)`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </Tag>
  );
}
