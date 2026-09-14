import Link from "next/link";
import { projects } from "@/data/site";
import { asset } from "@/lib/paths";
import { ClientErrorBoundary } from "@/components/ClientErrorBoundary";
import { ClientsMarquee } from "./ClientsMarquee";
import { FootprintMap } from "./FootprintMap";
import { ScrollRevealIntro } from "./ScrollRevealIntro";
import { SolutionsPanel } from "./SolutionsPanel";

export function HomeExperience() {
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
          <h1>
            Electrical Infrastructure.
            <br />
            Built With You.
          </h1>
          <div className="actions">
            <Link href="/services" className="btn btn-white">
              What we do
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Work with us
            </Link>
          </div>
        </div>
      </section>

      <ClientErrorBoundary
        fallback={
          <section className="home-intro">
            <div className="container home-intro__inner">
              <h2 className="home-intro__text">
                As demand for reliable power grows, Aktiv Enerji helps you stay
                ahead. From Poland and Azerbaijan, we design, build, test and
                maintain the critical electrical infrastructure behind industry,
                commercial sites and utilities.
              </h2>
              <Link href="/about" className="btn btn-blue">
                Who we are
              </Link>
            </div>
          </section>
        }
      >
        <ScrollRevealIntro />
      </ClientErrorBoundary>

      <SolutionsPanel />

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

          <div className="project-stack">
            {projects.slice(0, 3).map((project, index) => (
              <article
                className="project-stack__card"
                key={project.title}
                style={{ ["--i" as string]: index }}
              >
                <div className="tags">
                  <span className="tag">{project.location}</span>
                  <span className="tag">{project.solution}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                {project.metric ? (
                  <div className="project-stack__metric">
                    <div className="metric">{project.metric.value}</div>
                    <span>{project.metric.label}</span>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-footprint">
        <FootprintMap />
      </section>

      <ClientsMarquee />

      <section className="home-cta">
        <div className="home-cta__fade" aria-hidden="true" />
        <div className="container home-cta__inner">
          <p className="eyebrow on-dark">The work starts with a conversation</p>
          <h2>Take on your next electrical infrastructure challenge.</h2>
          <div className="actions">
            <Link href="/contact" className="btn btn-orange">
              Work with us
            </Link>
            <Link href="/services" className="btn btn-ghost">
              Explore services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
