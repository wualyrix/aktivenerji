"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export function FootprintGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let globe: ReturnType<typeof createGlobe> | null = null;
    let size = 0;

    const mount = () => {
      const next = Math.max(280, Math.floor(canvas.clientWidth || 0));
      if (next < 160) return;
      size = next;

      canvas.width = size * 2;
      canvas.height = size * 2;
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;

      if (globe) {
        globe.update({ width: size * 2, height: size * 2 });
        return;
      }

      // Fixed Europe / Caucasus view — no rotation
      globe = createGlobe(canvas, {
        devicePixelRatio: 2,
        width: size * 2,
        height: size * 2,
        phi: 2.42,
        theta: 0.28,
        dark: 0,
        diffuse: 1.4,
        mapSamples: 22000,
        mapBrightness: 8,
        mapBaseBrightness: 0.12,
        baseColor: [0.07, 0.28, 0.55],
        markerColor: [0.945, 0.353, 0.133],
        glowColor: [0.12, 0.4, 0.75],
        scale: 1.08,
        context: { alpha: true, preserveDrawingBuffer: true },
        markers: [
          { location: [52.2297, 21.0122], size: 0.14 },
          { location: [40.4093, 49.8671], size: 0.14 },
        ],
      });
    };

    mount();
    const ro = new ResizeObserver(() => mount());
    ro.observe(canvas.parentElement || canvas);

    return () => {
      ro.disconnect();
      globe?.destroy();
      globe = null;
    };
  }, []);

  return (
    <div className="footprint__map">
      <div className="footprint__orb">
        <canvas
          ref={canvasRef}
          className="footprint__canvas"
          aria-label="Globe showing Poland and Azerbaijan"
        />
      </div>
      <div className="footprint__pins" aria-hidden="true">
        <span>Poland</span>
        <span>Azerbaijan</span>
      </div>
    </div>
  );
}
