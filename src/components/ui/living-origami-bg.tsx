'use client';

import { useState, useEffect } from 'react';
import React from 'react';

interface BirdConfig {
  duration: number;
  delay: number;
  scale: number;
  yStart: number;
  yEnd: number;
  rStart: number;
  rEnd: number;
  innerDelay: number;
}

interface DrifterStyle extends React.CSSProperties {
  '--y-start': string;
  '--y-end': string;
  '--r-start': string;
  '--r-end': string;
}

const random = (min: number, max: number) => Math.random() * (max - min) + min;

export const LivingOrigamiBg = ({ count = 15 }: { count?: number }) => {
  const [birds, setBirds] = useState<BirdConfig[]>([]);

  useEffect(() => {
    setBirds(
      Array.from({ length: count }, () => ({
        duration: random(20, 40),
        delay: random(-40, 0),
        scale: random(0.2, 0.8),
        yStart: random(-30, 30),
        yEnd: random(-30, 30),
        rStart: random(-30, 30),
        rEnd: random(-30, 30),
        innerDelay: random(-4, 0),
      }))
    );
  }, [count]);

  return (
    <div className="origami-bg pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {birds.map((bird, i) => {
        const drifterStyle: DrifterStyle = {
          '--y-start': `${bird.yStart}vh`,
          '--y-end': `${bird.yEnd}vh`,
          '--r-start': `${bird.rStart}deg`,
          '--r-end': `${bird.rEnd}deg`,
          animationDuration: `${bird.duration}s`,
          animationDelay: `${bird.delay}s`,
        };

        return (
          <div key={i} className="drifter-container" style={drifterStyle}>
            <div
              className="origami-crane"
              style={{
                transform: `scale(${bird.scale})`,
                animationDelay: `${bird.innerDelay}s`,
              }}
            >
              <div className="crane-part body" />
              <div className="crane-part wing-left" />
              <div className="crane-part wing-right" />
              <div className="crane-part tail" />
            </div>
          </div>
        );
      })}
    </div>
  );
};
