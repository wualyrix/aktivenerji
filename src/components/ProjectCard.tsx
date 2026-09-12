import type { Project } from "@/data/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card project-card">
      <div className="project-body">
        <div className="project-tags">
          <span className="tag">{project.location}</span>
          <span className="tag">{project.solution}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        {project.metric ? (
          <div className="metric">
            <strong>{project.metric.value}</strong>
            <span>{project.metric.label}</span>
          </div>
        ) : null}
      </div>
    </article>
  );
}
