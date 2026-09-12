import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { clients, projects, services, site } from "@/data/site";
import { asset } from "@/lib/paths";

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__media">
          <img
            src={asset("/hero.jpg")}
            alt="Renewable energy landscape at sunrise"
          />
        </div>
        <div className="container home-hero__content">
          <p className="eyebrow on-dark">Local teams. Regional reach.</p>
          <h1>{site.tagline}</h1>
          <p className="lead">
            We design, build, test and maintain critical electrical systems for
            industry, commercial sites and utilities — from high-voltage networks
            to laboratory diagnostics.
          </p>
          <div className="actions">
            <Link href="/services" className="btn btn-orange">
              What we do
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Work with us
            </Link>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="stats-bar">
          {site.stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <div className="metric">{stat.value}</div>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Services</p>
              <h2>Your challenges. Our solutions.</h2>
            </div>
            <p>
              Seven integrated service lines covering design, installation,
              laboratory testing and long-term reliability of electrical
              infrastructure.
            </p>
          </div>
          <div className="grid-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="card card-link"
              >
                <h3>{service.title}</h3>
                <p>{service.short}</p>
                <div className="more">Explore service →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-blue">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow on-dark">Why Aktiv Enerji</p>
              <h2>Execution you can hand over with confidence.</h2>
            </div>
            <p>
              Our engineers install, commission and repair electrical equipment
              to customer requirements and international standards — with
              laboratory-backed verification where it matters.
            </p>
          </div>
          <div className="grid-3">
            <div className="card" style={{ background: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.14)", color: "#fff" }}>
              <h3 style={{ color: "#fff" }}>Design & build</h3>
              <p style={{ color: "rgba(255,255,255,0.78)" }}>
                From HV substations to LV distribution, automation and IT
                systems — delivered as coordinated packages.
              </p>
            </div>
            <div className="card" style={{ background: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.14)", color: "#fff" }}>
              <h3 style={{ color: "#fff" }}>Laboratory center</h3>
              <p style={{ color: "rgba(255,255,255,0.78)" }}>
                Mobile labs and accredited testing from 0.4 kV to 35 kV to catch
                issues before they become outages.
              </p>
            </div>
            <div className="card" style={{ background: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.14)", color: "#fff" }}>
              <h3 style={{ color: "#fff" }}>Two centers</h3>
              <p style={{ color: "rgba(255,255,255,0.78)" }}>
                European coordination from Warsaw and operational depth from
                Baku — one partner across projects.
              </p>
            </div>
          </div>
          <div style={{ marginTop: "2rem" }}>
            <Link href="/about" className="btn btn-ghost">
              More about us
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Projects</p>
              <h2>Work we deliver together.</h2>
            </div>
            <Link href="/projects" className="btn btn-ghost-dark">
              View all projects
            </Link>
          </div>
          <div className="grid-3">
            {projects.slice(0, 3).map((project) => (
              <article className="card project-card" key={project.title}>
                <div className="tags">
                  <span className="tag">{project.location}</span>
                  <span className="tag">{project.solution}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                {project.metric ? (
                  <div style={{ marginTop: "auto", paddingTop: "1.25rem" }}>
                    <div className="metric" style={{ fontSize: "1.7rem" }}>
                      {project.metric.value}
                    </div>
                    <p style={{ marginTop: "0.35rem" }}>{project.metric.label}</p>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Clients</p>
              <h2>Trusted across energy, telecom and retail.</h2>
            </div>
          </div>
          <div className="clients">
            {clients.map((client) => (
              <span className="client-pill" key={client}>
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Take on your next electrical infrastructure challenge." />
    </>
  );
}
