import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { services } from "@/data/site";
import { asset } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">Home</Link> / Services
          </p>
          <p className="eyebrow on-dark">Service portfolio</p>
          <h1>Seven disciplines. One partner.</h1>
          <p>
            From high-voltage networks and laboratory diagnostics to automation
            and lightning protection — end-to-end electrical infrastructure
            services.
          </p>
          <div className="actions">
            <Link href="/contact" className="btn btn-orange">
              Work with us
            </Link>
            <Link href="/projects" className="btn btn-ghost">
              Explore projects
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="card card-link service-card"
            >
              <div className="service-card__media">
                <img src={asset(service.image)} alt="" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <div className="more">Explore service →</div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand title="Need a scoped proposal for your site?" />
    </>
  );
}
