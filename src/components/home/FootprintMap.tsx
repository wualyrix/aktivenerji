"use client";

import { useEffect, useRef } from "react";
import {
  AttributionControl,
  Map,
  NavigationControl,
  Popup,
} from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const offices = [
  {
    id: "poland",
    name: "Poland",
    city: "Warsaw",
    lng: 21.0122,
    lat: 52.2297,
    count: 1,
  },
  {
    id: "azerbaijan",
    name: "Azerbaijan",
    city: "Baku",
    lng: 49.8671,
    lat: 40.4093,
    count: 1,
  },
];

export function FootprintMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const isMobile = window.innerWidth <= 767;
    const map = new Map({
      container: el,
      style: "https://tiles.openfreemap.org/styles/dark",
      center: [35, 42],
      zoom: isMobile ? 1.6 : 2.2,
      pitch: 0,
      attributionControl: false,
      cooperativeGestures: true,
    });

    map.addControl(new AttributionControl({ compact: true }), "bottom-right");
    map.addControl(
      new NavigationControl({ visualizePitch: false }),
      "top-right",
    );

    let userInteracting = false;
    let spinEnabled = true;
    const secondsPerRevolution = 160;

    const spin = () => {
      if (!spinEnabled || userInteracting || map.getZoom() > 4.5) return;
      const center = map.getCenter();
      center.lng -= 360 / secondsPerRevolution / 60;
      map.easeTo({ center, duration: 1000, easing: (n) => n });
    };

    map.on("load", () => {
      try {
        map.setProjection({ type: "globe" });
      } catch {
        // Older builds without globe — keep mercator.
      }

      const mapWithFog = map as Map & {
        setFog?: (fog: Record<string, string | number>) => void;
      };
      mapWithFog.setFog?.({
        color: "#083566",
        "high-color": "#0c4a8c",
        "horizon-blend": 0.08,
        "space-color": "#062847",
        "star-intensity": 0.15,
      });

      map.addSource("offices", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: offices.map((office) => ({
            type: "Feature",
            properties: {
              id: office.id,
              name: office.name,
              city: office.city,
              count: office.count,
            },
            geometry: {
              type: "Point",
              coordinates: [office.lng, office.lat],
            },
          })),
        },
        cluster: true,
        clusterRadius: 42,
        clusterMaxZoom: 6,
      });

      map.addLayer({
        id: "office-clusters",
        type: "circle",
        source: "offices",
        filter: ["has", "point_count"],
        paint: {
          "circle-color": "#0c4a8c",
          "circle-stroke-color": "#7eb6e8",
          "circle-stroke-width": 2,
          "circle-opacity": 0.85,
          "circle-radius": [
            "step",
            ["get", "point_count"],
            22,
            2,
            28,
            5,
            34,
          ],
        },
      });

      map.addLayer({
        id: "office-cluster-count",
        type: "symbol",
        source: "offices",
        filter: ["has", "point_count"],
        layout: {
          "text-field": ["get", "point_count_abbreviated"],
          "text-size": 14,
        },
        paint: {
          "text-color": "#ffffff",
        },
      });

      map.addLayer({
        id: "office-points",
        type: "circle",
        source: "offices",
        filter: ["!", ["has", "point_count"]],
        paint: {
          "circle-color": "#f15a22",
          "circle-radius": 11,
          "circle-stroke-width": 3,
          "circle-stroke-color": "#ffb089",
          "circle-opacity": 0.95,
        },
      });

      map.addLayer({
        id: "office-labels",
        type: "symbol",
        source: "offices",
        filter: ["!", ["has", "point_count"]],
        layout: {
          "text-field": ["concat", ["get", "city"], " · ", ["get", "name"]],
          "text-offset": [0, 1.7],
          "text-size": 13,
        },
        paint: {
          "text-color": "#ffffff",
          "text-halo-color": "#083566",
          "text-halo-width": 1.4,
        },
      });

      map.on("click", "office-points", (event) => {
        const feature = event.features?.[0];
        if (!feature || feature.geometry.type !== "Point") return;
        const props = feature.properties;
        new Popup({ offset: 16, closeButton: false })
          .setLngLat(feature.geometry.coordinates as [number, number])
          .setHTML(
            `<strong>${props?.city ?? ""}</strong><br/><span>${props?.name ?? ""} · Operating center</span>`,
          )
          .addTo(map);
      });

      map.on("mouseenter", "office-points", () => {
        map.getCanvas().style.cursor = "pointer";
      });
      map.on("mouseleave", "office-points", () => {
        map.getCanvas().style.cursor = "";
      });
    });

    map.on("mousedown", () => {
      userInteracting = true;
    });
    map.on("dragstart", () => {
      userInteracting = true;
    });
    map.on("mouseup", () => {
      userInteracting = false;
      map.once("moveend", () => {
        spinEnabled = true;
      });
    });
    map.on("touchend", () => {
      userInteracting = false;
    });
    map.on("moveend", () => {
      spin();
    });

    const timer = window.setInterval(spin, 1000);

    return () => {
      window.clearInterval(timer);
      map.remove();
    };
  }, []);

  return (
    <div className="footprint">
      <div className="footprint__intro">
        <p className="eyebrow on-dark">Where we operate</p>
        <h2>International footprint</h2>
        <p>
          Two operating centers — Warsaw for European coordination, Baku for
          regional delivery — one partner for electrical infrastructure.
        </p>
      </div>

      <div className="footprint__stage">
        <div ref={containerRef} className="footprint__map" />
        <ul className="footprint__legend">
          <li>
            <span className="footprint__dot" />
            <div>
              <strong>Poland</strong>
              <span>Warsaw — European center</span>
            </div>
          </li>
          <li>
            <span className="footprint__dot" />
            <div>
              <strong>Azerbaijan</strong>
              <span>Baku — Regional operations</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
