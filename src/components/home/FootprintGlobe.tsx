"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export function FootprintGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let phi = 0;
    let frame = 0;
    let width = canvas.offsetWidth || 560;

    const onResize = () => {
      if (!canvasRef.current) return;
      width = canvasRef.current.offsetWidth || 560;
      globe.update({
        width: width * 2,
        height: width * 2,
      });
    };

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.28,
      dark: 1,
      diffuse: 1.15,
      mapSamples: 18000,
      mapBrightness: 5.5,
      baseColor: [0.05, 0.22, 0.45],
      markerColor: [0.945, 0.353, 0.133],
      glowColor: [0.08, 0.28, 0.52],
      markers: [
        { location: [52.2297, 21.0122], size: 0.1 },
        { location: [40.4093, 49.8671], size: 0.1 },
      ],
    });

    const animate = () => {
      phi += 0.0035;
      globe.update({ phi });
      frame = window.requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("resize", onResize);

    const passWheel = (event: WheelEvent) => {
      event.stopImmediatePropagation();
    };
    canvas.addEventListener("wheel", passWheel, {
      capture: true,
      passive: true,
    });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("wheel", passWheel, true);
      globe.destroy();
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
