"use client";

import { useEffect, useRef, useState } from "react";

const offices = [
  {
    lat: 52.2297,
    lng: 21.0122,
    name: "Poland",
    size: 0.55,
    color: "#f15a22",
  },
  {
    lat: 40.4093,
    lng: 49.8671,
    name: "Azerbaijan",
    size: 0.55,
    color: "#f15a22",
  },
];

export function FootprintGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || failed) return;
    const el = containerRef.current;
    if (!el) return;

    let cancelled = false;
    let cleanup: (() => void) | undefined;

    (async () => {
      try {
        const { default: Globe } = await import("globe.gl");
        if (cancelled || !containerRef.current) return;

        const node = containerRef.current;
        const width = node.clientWidth || 800;
        const height = Math.min(
          520,
          Math.max(400, Math.round(window.innerHeight * 0.5)),
        );

        const globe = new Globe(node)
          .width(width)
          .height(height)
          .backgroundColor("#0a3f78")
          .globeImageUrl(
            "https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg",
          )
          .bumpImageUrl(
            "https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png",
          )
          .showAtmosphere(true)
          .atmosphereColor("#9ec9ef")
          .atmosphereAltitude(0.16)
          .pointsData(offices)
          .pointLat("lat")
          .pointLng("lng")
          .pointAltitude(0.025)
          .pointRadius("size")
          .pointColor("color")
          .labelsData(offices)
          .labelLat("lat")
          .labelLng("lng")
          .labelText("name")
          .labelSize(1.8)
          .labelDotRadius(0.4)
          .labelColor(() => "#ffffff")
          .labelAltitude(0.035)
          .labelResolution(2)
          .ringsData(offices)
          .ringLat("lat")
          .ringLng("lng")
          .ringColor(() => "rgba(241,90,34,0.75)")
          .ringMaxRadius(3.5)
          .ringPropagationSpeed(1.2)
          .ringRepeatPeriod(1500);

        globe.pointOfView({ lat: 45, lng: 35, altitude: 1.85 }, 0);

        const controls = globe.controls();
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.55;
        controls.enableZoom = false;
        controls.enablePan = false;

        const passWheel = (event: WheelEvent) => {
          event.stopImmediatePropagation();
        };
        node.addEventListener("wheel", passWheel, {
          capture: true,
          passive: true,
        });

        const onResize = () => {
          if (!containerRef.current) return;
          const nextHeight = Math.min(
            520,
            Math.max(400, Math.round(window.innerHeight * 0.5)),
          );
          globe.width(containerRef.current.clientWidth).height(nextHeight);
        };
        window.addEventListener("resize", onResize);

        cleanup = () => {
          window.removeEventListener("resize", onResize);
          node.removeEventListener("wheel", passWheel, true);
          try {
            controls.enabled = false;
          } catch {
            // ignore
          }
          node.replaceChildren();
        };
      } catch {
        if (!cancelled) setFailed(true);
      }
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [visible, failed]);

  if (failed) {
    return (
      <div className="footprint__map footprint__map--fallback">
        <p>Poland · Warsaw</p>
        <p>Azerbaijan · Baku</p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`footprint__map${visible ? "" : " footprint__map--loading"}`}
    />
  );
}
