import Link from "next/link";
import { site } from "@/data/site";
import { asset } from "@/lib/paths";
import { FootprintMap } from "./FootprintMap";
import { SolutionsPanel } from "./SolutionsPanel";

export function HomeExperience() {
  return (
    <div className="home-stack">
      {/* Layer 1 — stays behind */}
      <section className="stack-layer stack-layer--1 stack-hero">
        <div className="stack-hero__media">
          <img
            src={asset("/hero.jpg")}
            alt="Renewable energy landscape at sunrise"
          />
        </div>
        <div className="container stack-hero__content">
          <p className="eyebrow on-dark">Local teams. Regional reach.</p>
          <h1>{site.tagline}</h1>
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

      {/* Layer 2 — covers hero */}
      <section className="stack-layer stack-layer--2 stack-intro">
        <div className="container stack-intro__inner">
          <p className="eyebrow">Aktiv Enerji</p>
          <h2>
            We design, build, test and maintain critical electrical systems —
            from high-voltage networks to laboratory diagnostics.
          </h2>
          <p className="lead">
            Industrial, commercial and utility partners trust us to deliver
            infrastructure they can hand over with confidence. Two centers.
            One standard of execution.
          </p>
          <div className="stack-intro__stats">
            {site.stats.map((stat) => (
              <div key={stat.label}>
                <div className="metric">{stat.value}</div>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Layer 3 */}
      <section className="stack-layer stack-layer--3 stack-solutions">
        <div className="container">
          <SolutionsPanel />
        </div>
      </section>

      {/* Layer 4 — footprint / world map */}
      <section className="stack-layer stack-layer--4 stack-footprint">
        <div className="container">
          <FootprintMap />
        </div>
      </section>

      {/* Layer 5 — CTA with fade */}
      <section className="stack-layer stack-layer--5 stack-cta">
        <div className="stack-cta__fade" aria-hidden="true" />
        <div className="container stack-cta__inner">
          <h2>Take on your next electrical infrastructure challenge.</h2>
          <p>
            Tell us about the site, the voltage, the deadline — we&apos;ll bring
            the team.
          </p>
          <div className="actions">
            <Link href="/contact" className="btn btn-orange">
              Work with us
            </Link>
            <Link href="/projects" className="btn btn-ghost">
              See projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
