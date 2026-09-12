"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export function FootprintGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let phi = 2.35;
    let frame = 0;
    let globe: ReturnType<typeof createGlobe> | null = null;
    let size = 0;

    const mount = () => {
      const next = Math.max(320, Math.floor(canvas.clientWidth || canvas.offsetWidth || 0));
      if (next < 160) return;
      size = next;

      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;
      canvas.width = size * 2;
      canvas.height = size * 2;

      if (globe) {
        globe.update({
          width: size * 2,
          height: size * 2,
        });
        return;
      }

      globe = createGlobe(canvas, {
        devicePixelRatio: 2,
        width: size * 2,
        height: size * 2,
        phi,
        theta: 0.32,
        dark: 0.85,
        diffuse: 1.35,
        mapSamples: 20000,
        mapBrightness: 7,
        mapBaseBrightness: 0.08,
        baseColor: [0.12, 0.35, 0.62],
        markerColor: [0.945, 0.353, 0.133],
        glowColor: [0.18, 0.45, 0.78],
        scale: 1.05,
        context: { alpha: true, preserveDrawingBuffer: true },
        markers: [
          { location: [52.2297, 21.0122], size: 0.12 },
          { location: [40.4093, 49.8671], size: 0.12 },
        ],
      });
    };

    mount();

    const animate = () => {
      phi += 0.0028;
      globe?.update({ phi });
      frame = window.requestAnimationFrame(animate);
    };
    animate();

    const ro = new ResizeObserver(() => mount());
    ro.observe(canvas.parentElement || canvas);

    const passWheel = (event: WheelEvent) => {
      event.stopImmediatePropagation();
    };
    canvas.addEventListener("wheel", passWheel, {
      capture: true,
      passive: true,
    });

    return () => {
      window.cancelAnimationFrame(frame);
      ro.disconnect();
      canvas.removeEventListener("wheel", passWheel, true);
      globe?.destroy();
      globe = null;
    };
  }, []);

  return (
    <div className="footprint__map">
      <canvas
        ref={canvasRef}
        className="footprint__canvas"
        aria-label="World map showing Poland and Azerbaijan"
      />
      <div className="footprint__pins" aria-hidden="true">
        <span>Poland</span>
        <span>Azerbaijan</span>
      </div>
    </div>
  );
}
