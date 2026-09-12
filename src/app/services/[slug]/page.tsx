import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { services } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return { title: service?.title ?? "Service" };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  const related = services.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">Home</Link> / <Link href="/services">Services</Link> /{" "}
            {service.title}
          </p>
          <p className="eyebrow on-dark">Service</p>
          <h1>{service.title}</h1>
          <p>{service.summary}</p>
          <div className="actions">
            <Link href="/contact" className="btn btn-orange">
              Let’s talk about your project
            </Link>
            <Link href="/projects" className="btn btn-ghost">
              See related projects
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div>
            <p className="eyebrow">Scope</p>
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
              What this service covers
            </h2>
            <ul className="list-check">
              {service.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <p className="eyebrow">Delivery</p>
            <h3 style={{ marginBottom: "1rem" }}>
              From survey to documented handover
            </h3>
            {[
              ["Assess", "Site survey, constraints and technical requirements."],
              ["Design", "Engineering packages aligned to standards and use."],
              ["Execute", "Installation by experienced field teams."],
              ["Verify", "Laboratory testing, acts and formal documentation."],
            ].map(([title, text], i) => (
              <div
                key={title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "2.2rem 1fr",
                  gap: "0.85rem",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    width: "2.2rem",
                    height: "2.2rem",
                    borderRadius: "999px",
                    display: "grid",
                    placeItems: "center",
                    background: "var(--orange)",
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: "0.85rem",
                  }}
                >
                  {i + 1}
                </div>
                <div>
                  <strong>{title}</strong>
                  <p style={{ color: "var(--muted)", marginTop: "0.2rem" }}>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">More solutions</p>
              <h2>Your challenges. Our solutions.</h2>
            </div>
          </div>
          <div className="grid-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="card card-link"
              >
                <h3>{item.title}</h3>
                <p>{item.short}</p>
                <div className="more">Explore service →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Ready to scope this service for your site?" />
    </>
  );
}
