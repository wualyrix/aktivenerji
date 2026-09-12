import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">Home</Link> / Projects
          </p>
          <p className="eyebrow on-dark">References</p>
          <h1>Projects we deliver together.</h1>
          <p>
            Selected electrical packages across telecom, energy, retail and
            critical facilities — told as outcomes, not photo dumps.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-3">
          {projects.map((project) => (
            <article className="card project-card" key={project.title}>
              <div className="tags">
                <span className="tag">{project.location}</span>
                <span className="tag">{project.solution}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="meta-row">
                <div>
                  <strong>Location</strong>
                  <div>{project.location}</div>
                </div>
                <div>
                  <strong>Solution</strong>
                  <div>{project.solution}</div>
                </div>
              </div>
              {project.metric ? (
                <div>
                  <div className="metric" style={{ fontSize: "1.8rem" }}>
                    {project.metric.value}
                  </div>
                  <p style={{ marginTop: "0.35rem" }}>{project.metric.label}</p>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <CtaBand title="Want your project delivered with the same discipline?" />
    </>
  );
}
