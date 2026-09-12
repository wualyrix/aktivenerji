"use client";

import { useEffect, useRef } from "react";
import Globe, { type GlobeInstance } from "globe.gl";

const offices = [
  {
    lat: 52.2297,
    lng: 21.0122,
    name: "Poland",
    city: "Warsaw",
    size: 0.55,
    color: "#f15a22",
  },
  {
    lat: 40.4093,
    lng: 49.8671,
    name: "Azerbaijan",
    city: "Baku",
    size: 0.55,
    color: "#f15a22",
  },
];

export function FootprintGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const width = el.clientWidth || 800;
    const height = Math.min(520, Math.max(400, Math.round(window.innerHeight * 0.5)));

    const globe: GlobeInstance = new Globe(el)
      .width(width)
      .height(height)
      .backgroundColor("#0d4a86")
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
    controls.enableDamping = true;

    // Let page scroll with mouse wheel / trackpad over the globe.
    const passWheel = (event: WheelEvent) => {
      event.stopImmediatePropagation();
    };
    el.addEventListener("wheel", passWheel, { capture: true, passive: true });

    const onResize = () => {
      if (!containerRef.current) return;
      const nextHeight = Math.min(
        520,
        Math.max(400, Math.round(window.innerHeight * 0.5)),
      );
      globe.width(containerRef.current.clientWidth).height(nextHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      el.removeEventListener("wheel", passWheel, true);
      controls.dispose();
      el.replaceChildren();
    };
  }, []);

  return <div ref={containerRef} className="footprint__map" />;
}
