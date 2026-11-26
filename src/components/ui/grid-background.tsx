"use client"

import * as React from "react"

export function GridBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10"
      style={{
        /* Base bleu indigo — tendance, touche de violet */
        background: "radial-gradient(ellipse at 38% 30%, #3b3fc4 0%, #27279a 42%, #1b1b5e 100%)",
      }}
    >
      {/* Grille fine — trame de base */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Grille module — plan d'architecte (7 cellules × 7) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "196px 196px",
        }}
      />

      {/* Halo ambré principal — bas gauche, lumière d'atelier */}
      <div
        className="absolute"
        style={{
          bottom: '-15%',
          left: '-10%',
          width: '65%',
          height: '65%',
          background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.30) 0%, rgba(99,102,241,0.12) 40%, transparent 72%)',
          pointerEvents: 'none',
        }}
      />

      {/* Halo ambré secondaire — haut droit, lumière fenêtre */}
      <div
        className="absolute"
        style={{
          top: '-8%',
          right: '-5%',
          width: '50%',
          height: '50%',
          background: 'radial-gradient(ellipse at center, rgba(59,63,196,0.20) 0%, rgba(56,140,248,0.08) 45%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Teinte chaude globale — caramel très léger sur toute la surface */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(160deg, transparent 40%, rgba(124,58,237,0.10) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Grain papier atelier — texture linge/plâtre */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          opacity: 0.032,
          mixBlendMode: 'soft-light',
        }}
      />
    </div>
  )
}
