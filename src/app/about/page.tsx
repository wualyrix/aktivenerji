import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { certificates, site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">Home</Link> / About
          </p>
          <p className="eyebrow on-dark">We are Aktiv Enerji</p>
          <h1>High-quality electrical execution.</h1>
          <p>
            The management and engineering team of Aktiv Enerji LLC bring deep
            experience in the installation, adjustment and repair of electrical
            equipment — aligned with customer requirements and international
            standards.
          </p>
          <div className="actions">
            <Link href="/contact" className="btn btn-orange">
              Contact us
            </Link>
            <Link href="/certificates" className="btn btn-ghost">
              View certificates
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div>
            <p className="eyebrow">Footprint</p>
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
              Poland and Azerbaijan. One delivery standard.
            </h2>
            <p className="lead">
              Our European Center in Warsaw supports regional coordination, while
              Baku anchors field operations, laboratory capability and project
              delivery across industrial and commercial environments.
            </p>
          </div>
          <div className="grid-2">
            {site.offices.map((office) => (
              <div className="card" key={office.label}>
                <h3>{office.label}</h3>
                {office.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">In numbers</p>
              <h2>Proof of delivery capacity.</h2>
            </div>
          </div>
          <div className="grid-3">
            {site.stats.map((stat) => (
              <div className="card" key={stat.label}>
                <div className="metric">{stat.value}</div>
                <p style={{ marginTop: "0.6rem" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Quality</p>
              <h2>Licensed, trained and calibration-ready.</h2>
            </div>
          </div>
          <div className="clients">
            {certificates.map((item) => (
              <span className="client-pill" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Ready to plan your next electrical package?" />
    </>
  );
}
