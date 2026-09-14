"use client";

import dynamic from "next/dynamic";

const FootprintGlobe = dynamic(
  () => import("./FootprintGlobe").then((mod) => mod.FootprintGlobe),
  {
    ssr: false,
    loading: () => <div className="footprint__map footprint__map--loading" />,
  },
);

export function FootprintMap() {
  return (
    <div className="footprint">
      <div className="container footprint__intro">
        <p className="eyebrow on-dark">Where we operate</p>
        <h2>International footprint</h2>
        <p>
          Two operating centers - Warsaw for European coordination, Baku for
          regional delivery - one partner for electrical infrastructure.
        </p>
      </div>

      <div className="footprint__stage">
        <FootprintGlobe />
      </div>
    </div>
  );
}
