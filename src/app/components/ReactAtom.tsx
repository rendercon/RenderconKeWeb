'use client';

import { useEffect, useRef } from 'react';

/* ──────────────────────────────────────────────────────────
   True React-logo atom: three tilted ellipses at 0 / 60 / 120 °
   with JS-driven electrons via parametric equations.
   ────────────────────────────────────────────────────────── */

const RX = 120;   // semi-major axis
const RY = 40;    // semi-minor axis

const ORBITS = [
  { color: '#8B5CF6', strokeOpacity: 0.5,  r: 5,   speed: 1.0,  startPhase: 0,                     angleDeg: 0   },
  { color: '#F4B942', strokeOpacity: 0.38, r: 4.5, speed: 0.68, startPhase: (2 * Math.PI) / 3,     angleDeg: 60  },
  { color: '#C084FC', strokeOpacity: 0.42, r: 4.0, speed: 0.48, startPhase: (4 * Math.PI) / 3,     angleDeg: 120 },
] as const;

/** Build the SVG path for a complete rotated ellipse (two arcs). */
function ellipsePath(angleDeg: number): string {
  const a   = (angleDeg * Math.PI) / 180;
  const c   = Math.cos(a);
  const s   = Math.sin(a);
  const sx  = -(RX * c);
  const sy  = -(RX * s);
  const dx  =  2 * RX * c;
  const dy  =  2 * RX * s;
  const f   = (n: number) => n.toFixed(3);
  // M start  a rx,ry x-rot large-arc CCW  relDx,relDy  (repeat reversed)
  return `M ${f(sx)},${f(sy)} a ${RX},${RY} ${angleDeg} 1 0 ${f(dx)},${f(dy)} a ${RX},${RY} ${angleDeg} 1 0 ${f(-dx)},${f(-dy)}`;
}

/** Compute electron position at parameter t on a rotated ellipse. */
function electronXY(t: number, angleDeg: number): [number, number] {
  const a    = (angleDeg * Math.PI) / 180;
  const cosA = Math.cos(a);
  const sinA = Math.sin(a);
  const x    = RX * Math.cos(t) * cosA - RY * Math.sin(t) * sinA;
  const y    = RX * Math.cos(t) * sinA + RY * Math.sin(t) * cosA;
  return [x, y];
}

interface ReactAtomProps {
  className?: string;
}

export default function ReactAtom({ className = '' }: ReactAtomProps) {
  const electronRefs = useRef<(SVGCircleElement | null)[]>(ORBITS.map(() => null));

  useEffect(() => {
    let start: number | null = null;
    let rafId: number;

    function tick(ts: number) {
      if (start === null) start = ts;
      const elapsed = (ts - start) / 1000; // seconds

      ORBITS.forEach((orbit, i) => {
        const el = electronRefs.current[i];
        if (!el) return;
        const t = orbit.startPhase + elapsed * orbit.speed;
        const [x, y] = electronXY(t, orbit.angleDeg);
        el.setAttribute('cx', x.toFixed(3));
        el.setAttribute('cy', y.toFixed(3));
      });

      rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <svg
      viewBox="-155 -155 310 310"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        {/* Nucleus filter: double-blur for a large, soft halo */}
        <filter id="atom-nucleus-glow" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="b1" />
          <feGaussianBlur in="b1"            stdDeviation="6" result="b2" />
          <feMerge>
            <feMergeNode in="b2" />
            <feMergeNode in="b1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Electron glow */}
        <filter id="atom-electron-glow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ── Three orbit rings ─────────────────────────────── */}
      {ORBITS.map((o, i) => (
        <path
          key={i}
          d={ellipsePath(o.angleDeg)}
          fill="none"
          stroke={o.color}
          strokeWidth="1.5"
          strokeOpacity={o.strokeOpacity}
        />
      ))}

      {/* ── Nucleus — layered radial glow ─────────────────── */}
      {/* Outermost soft halo */}
      <circle cx="0" cy="0" r="56" fill="rgba(109,58,168,0.06)" />
      <circle cx="0" cy="0" r="42" fill="rgba(109,58,168,0.10)" />
      <circle cx="0" cy="0" r="30" fill="rgba(109,58,168,0.20)" />
      <circle cx="0" cy="0" r="20" fill="rgba(109,58,168,0.45)" />
      {/* Inner glowing core */}
      <circle
        cx="0" cy="0" r="14"
        fill="rgba(139,92,246,0.9)"
        filter="url(#atom-nucleus-glow)"
        className="glow-pulse"
      />
      {/* Bright white centre */}
      <circle cx="0" cy="0" r="6.5" fill="white" filter="url(#atom-nucleus-glow)" />

      {/* ── Electrons (positions driven by rAF) ──────────── */}
      {ORBITS.map((o, i) => (
        <circle
          key={i}
          ref={(el) => { electronRefs.current[i] = el; }}
          cx="0"
          cy="0"
          r={o.r}
          fill={o.color}
          filter="url(#atom-electron-glow)"
        />
      ))}
    </svg>
  );
}
