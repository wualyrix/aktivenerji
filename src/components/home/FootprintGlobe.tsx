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
    const height = Math.max(420, Math.min(window.innerHeight * 0.62, 620));

    const globe: GlobeInstance = new Globe(el)
      .width(width)
      .height(height)
      .backgroundColor("#061a33")
      .globeImageUrl(
        "https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg",
      )
      .bumpImageUrl(
        "https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png",
      )
      .showAtmosphere(true)
      .atmosphereColor("#7eb6e8")
      .atmosphereAltitude(0.18)
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
    controls.enableZoom = true;
    controls.minDistance = 140;
    controls.maxDistance = 420;

    const onResize = () => {
      if (!containerRef.current) return;
      globe
        .width(containerRef.current.clientWidth)
        .height(Math.max(420, Math.min(window.innerHeight * 0.62, 620)));
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      controls.dispose();
      el.replaceChildren();
    };
  }, []);

  return <div ref={containerRef} className="footprint__map" />;
}
