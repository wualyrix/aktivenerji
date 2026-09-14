import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { certificates } from "@/data/site";
import { asset } from "@/lib/paths";

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
        <div className="container cert-grid">
          {certificates.map((item) => (
            <a
              key={item.image}
              className="cert-card"
              href={asset(item.image)}
              target="_blank"
              rel="noreferrer"
            >
              <div className="cert-card-media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset(item.image)} alt={item.title} loading="lazy" />
              </div>
              <div className="cert-card-body">
                <p className="eyebrow">{item.category}</p>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <CtaBand title="Need documentation for a tender or audit?" />
    </>
  );
}
