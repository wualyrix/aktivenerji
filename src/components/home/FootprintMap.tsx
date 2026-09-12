"use client";

import dynamic from "next/dynamic";
import { ClientErrorBoundary } from "@/components/ClientErrorBoundary";

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
        <ClientErrorBoundary
          fallback={
            <div className="footprint__map footprint__map--fallback">
              <p>Poland · Warsaw</p>
              <p>Azerbaijan · Baku</p>
            </div>
          }
        >
          <FootprintGlobe />
        </ClientErrorBoundary>
        <ul className="footprint__legend container">
          <li>
            <span className="footprint__dot" />
            <div>
              <strong>Poland</strong>
              <span>Warsaw - European center</span>
            </div>
          </li>
          <li>
            <span className="footprint__dot" />
            <div>
              <strong>Azerbaijan</strong>
              <span>Baku - Regional operations</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
