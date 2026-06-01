"use client"

import * as React from "react"

export function GridBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10"
      style={{
        /* Base bleu chaud — légèrement teinté ambre vers le bas */
        background: "radial-gradient(ellipse at 38% 30%, #3465b8 0%, #1e3570 55%, #141f4a 100%)",
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
          background: 'radial-gradient(ellipse at center, rgba(210,135,45,0.22) 0%, rgba(180,100,30,0.10) 40%, transparent 72%)',
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
          background: 'radial-gradient(ellipse at center, rgba(195,125,40,0.14) 0%, rgba(160,90,25,0.06) 45%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Teinte chaude globale — caramel très léger sur toute la surface */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(160deg, transparent 40%, rgba(170,95,30,0.08) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Grain papier atelier — texture linge/plâtre */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          opacity: 0.032,
          mixBlendMode: 'soft-light',
        }}
      />
    </div>
  )
}
