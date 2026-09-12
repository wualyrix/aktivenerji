import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { certificates } from "@/data/site";

export const metadata: Metadata = {
  title: "Certificates",
};

export default function CertificatesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">Home</Link> / Certificates
          </p>
          <p className="eyebrow on-dark">Quality & compliance</p>
          <h1>Licenses, training and calibration.</h1>
          <p>
            Formal credentials supporting safe execution, laboratory work and
            documented handover of electrical systems.
          </p>
          <div className="actions">
            <Link href="/contact" className="btn btn-orange">
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-3">
          {certificates.map((item) => (
            <div className="card" key={item}>
              <p className="eyebrow">Credential</p>
              <h3>{item}</h3>
              <p>
                Part of Aktiv Enerji’s quality framework for field work,
                laboratory testing and installer competence.
              </p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand title="Need documentation for a tender or audit?" />
    </>
  );
}
