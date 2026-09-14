"use client";

import { useEffect, useRef } from "react";
import { asset } from "@/lib/paths";

const DEG = Math.PI / 180;

/** Orthographic globe centered on Europe / Caucasus */
const CENTER_LAT = 45;
const CENTER_LON = 35;
const MARKERS = [
  { name: "Poland", lat: 52.2297, lon: 21.0122 },
  { name: "Azerbaijan", lat: 40.4093, lon: 49.8671 },
] as const;

function project(lat: number, lon: number, cx: number, cy: number, r: number) {
  const lat0 = CENTER_LAT * DEG;
  const lon0 = CENTER_LON * DEG;
  const φ = lat * DEG;
  const λ = lon * DEG;
  const cosC =
    Math.sin(lat0) * Math.sin(φ) +
    Math.cos(lat0) * Math.cos(φ) * Math.cos(λ - lon0);
  if (cosC <= 0.02) return null;
  const x = r * Math.cos(φ) * Math.sin(λ - lon0);
  const y =
    r *
    (Math.cos(lat0) * Math.sin(φ) -
      Math.sin(lat0) * Math.cos(φ) * Math.cos(λ - lon0));
  return { x: cx + x, y: cy - y, visible: cosC };
}

function sampleEquirect(
  data: Uint8ClampedArray,
  tw: number,
  th: number,
  lat: number,
  lon: number,
) {
  let L = ((lon + 180) % 360 + 360) % 360;
  const u = (L / 360) * tw;
  const v = ((90 - lat) / 180) * th;
  const x = Math.min(tw - 1, Math.max(0, Math.floor(u)));
  const y = Math.min(th - 1, Math.max(0, Math.floor(v)));
  const i = (y * tw + x) * 4;
  return [data[i], data[i + 1], data[i + 2]] as const;
}

export function FootprintGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let cancelled = false;
    const img = new Image();
    img.decoding = "async";

    const paint = () => {
      if (cancelled || !img.complete || !img.naturalWidth) return;

      const css = Math.max(
        280,
        Math.floor(canvas.clientWidth || canvas.parentElement?.clientWidth || 520),
      );
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      // Render at capped resolution, then scale up for crisp display
      const renderSize = Math.min(640, Math.floor(css * dpr));
      const display = Math.floor(css * dpr);
      canvas.width = display;
      canvas.height = display;
      canvas.style.width = `${css}px`;
      canvas.style.height = `${css}px`;

      const ctx = canvas.getContext("2d", { alpha: true });
      if (!ctx) return;

      const tmp = document.createElement("canvas");
      const maxEdge = 1600;
      const scale = Math.min(1, maxEdge / Math.max(img.naturalWidth, img.naturalHeight));
      tmp.width = Math.floor(img.naturalWidth * scale);
      tmp.height = Math.floor(img.naturalHeight * scale);
      const tctx = tmp.getContext("2d", { willReadFrequently: true });
      if (!tctx) return;
      tctx.drawImage(img, 0, 0, tmp.width, tmp.height);
      const src = tctx.getImageData(0, 0, tmp.width, tmp.height);

      const work = document.createElement("canvas");
      work.width = renderSize;
      work.height = renderSize;
      const wctx = work.getContext("2d");
      if (!wctx) return;
      const out = wctx.createImageData(renderSize, renderSize);
      const cx = renderSize / 2;
      const cy = renderSize / 2;
      const r = renderSize * 0.48;
      const lat0 = CENTER_LAT * DEG;
      const lon0 = CENTER_LON * DEG;

      for (let py = 0; py < renderSize; py++) {
        for (let px = 0; px < renderSize; px++) {
          const dx = (px - cx) / r;
          const dy = (cy - py) / r;
          const rr = dx * dx + dy * dy;
          const i = (py * renderSize + px) * 4;
          if (rr > 1) {
            out.data[i + 3] = 0;
            continue;
          }
          const z = Math.sqrt(Math.max(0, 1 - rr));
          const φ = Math.asin(Math.sin(lat0) * z + Math.cos(lat0) * dy);
          const λ =
            lon0 +
            Math.atan2(dx, z * Math.cos(lat0) - dy * Math.sin(lat0));
          const lat = φ / DEG;
          const lon = (λ / DEG + 540) % 360 - 180;
          const [R, G, B] = sampleEquirect(
            src.data,
            tmp.width,
            tmp.height,
            lat,
            lon,
          );
          const shade = 0.72 + 0.28 * z;
          const light = 0.88 + 0.18 * z;
          out.data[i] = Math.min(255, R * shade * light);
          out.data[i + 1] = Math.min(255, G * shade * light);
          out.data[i + 2] = Math.min(255, B * shade * light);
          out.data[i + 3] = 255;
        }
      }

      wctx.putImageData(out, 0, 0);

      // Markers + callout labels on the globe
      const s = renderSize / css;
      const labels: {
        name: string;
        px: number;
        py: number;
        lx: number;
        ly: number;
        align: CanvasTextAlign;
      }[] = [];

      for (const m of MARKERS) {
        const p = project(m.lat, m.lon, cx, cy, r);
        if (!p) continue;

        wctx.beginPath();
        wctx.arc(p.x, p.y, 10 * s, 0, Math.PI * 2);
        wctx.fillStyle = "rgba(241,90,34,0.28)";
        wctx.fill();
        wctx.beginPath();
        wctx.arc(p.x, p.y, 5 * s, 0, Math.PI * 2);
        wctx.fillStyle = "#f15a22";
        wctx.fill();
        wctx.beginPath();
        wctx.arc(p.x, p.y, 2 * s, 0, Math.PI * 2);
        wctx.fillStyle = "#fff";
        wctx.fill();

        if (m.name === "Poland") {
          labels.push({
            name: m.name,
            px: p.x,
            py: p.y,
            lx: p.x - 18 * s,
            ly: p.y - 42 * s,
            align: "right",
          });
        } else {
          labels.push({
            name: m.name,
            px: p.x,
            py: p.y,
            lx: p.x + 18 * s,
            ly: p.y - 42 * s,
            align: "left",
          });
        }
      }

      wctx.font = `700 ${Math.round(13 * s)}px Arial, Helvetica, sans-serif`;
      wctx.textBaseline = "middle";

      for (const label of labels) {
        const elbowX = label.lx;
        const elbowY = label.py - 18 * s;

        wctx.beginPath();
        wctx.moveTo(label.px, label.py);
        wctx.lineTo(elbowX, elbowY);
        wctx.lineTo(label.lx, label.ly);
        wctx.strokeStyle = "rgba(255,255,255,0.92)";
        wctx.lineWidth = Math.max(1.5, 1.6 * s);
        wctx.lineJoin = "round";
        wctx.lineCap = "round";
        wctx.stroke();

        wctx.beginPath();
        wctx.moveTo(label.px, label.py);
        wctx.lineTo(elbowX, elbowY);
        wctx.lineTo(label.lx, label.ly);
        wctx.strokeStyle = "#f15a22";
        wctx.lineWidth = Math.max(1, 1.1 * s);
        wctx.stroke();

        wctx.textAlign = label.align;
        const padX = 8 * s;
        const textW = wctx.measureText(label.name).width;
        const boxW = textW + padX * 2;
        const boxH = 22 * s;
        const boxX =
          label.align === "right" ? label.lx - boxW : label.lx;
        const boxY = label.ly - boxH / 2;

        wctx.fillStyle = "rgba(8, 53, 102, 0.92)";
        wctx.strokeStyle = "rgba(255,255,255,0.25)";
        wctx.lineWidth = 1;
        const rr = 11 * s;
        wctx.beginPath();
        wctx.moveTo(boxX + rr, boxY);
        wctx.arcTo(boxX + boxW, boxY, boxX + boxW, boxY + boxH, rr);
        wctx.arcTo(boxX + boxW, boxY + boxH, boxX, boxY + boxH, rr);
        wctx.arcTo(boxX, boxY + boxH, boxX, boxY, rr);
        wctx.arcTo(boxX, boxY, boxX + boxW, boxY, rr);
        wctx.closePath();
        wctx.fill();
        wctx.stroke();

        wctx.fillStyle = "#fff";
        wctx.fillText(
          label.name,
          label.align === "right" ? label.lx - padX : label.lx + padX,
          label.ly,
        );
      }

      ctx.clearRect(0, 0, display, display);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(work, 0, 0, display, display);
    };

    img.onload = () => paint();
    img.onerror = () => {
      // keep empty orb background from CSS if texture fails
    };
    img.src = asset("/earth-blue-marble.jpg");

    const ro = new ResizeObserver(() => paint());
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    return () => {
      cancelled = true;
      ro.disconnect();
    };
  }, []);

  return (
    <div className="footprint__map">
      <div className="footprint__orb">
        <canvas
          ref={canvasRef}
          className="footprint__canvas"
          aria-label="Earth globe showing Poland and Azerbaijan"
        />
      </div>
    </div>
  );
}
