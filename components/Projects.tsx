import type { ReactNode } from "react";
import { projects, type Project } from "@/lib/data";
import AIWorkflowVisual from "./AIWorkflowVisual";
import PipelineVisual from "./PipelineVisual";

const statusDot: Record<Project["statusColor"], string> = {
  green: "bg-signal-green",
  amber: "bg-signal-amber",
  cyan: "bg-signal-cyan",
};

const statusText: Record<Project["statusColor"], string> = {
  green: "text-signal-green",
  amber: "text-signal-amber",
  cyan: "text-signal-cyan",
};

function ProjectCard({ project, visual }: { project: Project; visual?: ReactNode }) {
  const content = (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[rgb(var(--text-muted))]">
            {project.tag} · {project.org} · {project.period}
          </p>
          <h3 className="mt-2 font-display text-xl font-medium text-[rgb(var(--text))] sm:text-[1.4rem]">
            {project.name}
          </h3>
        </div>
        <span
          className={`flex shrink-0 items-center gap-1.5 rounded-full border border-[rgb(var(--border))] px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.06em] ${statusText[project.statusColor]}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${statusDot[project.statusColor]}`} />
          {project.status}
        </span>
      </div>

      <p className="mt-5 text-[14.5px] leading-relaxed text-[rgb(var(--text-muted))]">
        <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[rgb(var(--text))]">
          Problem —{" "}
        </span>
        {project.problem}
      </p>

      <ul className="mt-5 space-y-2">
        {project.build.map((line) => (
          <li key={line} className="flex gap-2.5 text-[14px] leading-relaxed text-[rgb(var(--text-muted))]">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[rgb(var(--text-muted))]" />
            {line}
          </li>
        ))}
      </ul>

      <div className="mt-6 grid grid-cols-2 gap-3 border-t border-[rgb(var(--border))] pt-6 sm:grid-cols-3">
        {project.impact.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-lg text-[rgb(var(--text))] font-tabular">{stat.value}</p>
            <p className="mt-0.5 font-mono text-[10.5px] leading-snug text-[rgb(var(--text-muted))]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-[rgb(var(--surface-2))] px-2.5 py-1 font-mono text-[10.5px] text-[rgb(var(--text-muted))]"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <article
      className={`group relative rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-6 transition-colors duration-300 ease-signature hover:border-signal-amber/50 sm:p-8 ${
        visual ? "lg:col-span-2" : ""
      }`}
    >
      {visual ? (
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          {content}
          <div className="flex justify-center lg:justify-end">{visual}</div>
        </div>
      ) : (
        content
      )}
    </article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="border-b border-[rgb(var(--border))]">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-signal-amber">
              01 / Featured work
            </p>
            <h2 className="mt-3 font-display text-2xl font-medium text-[rgb(var(--text))] sm:text-3xl">
              Systems that hold up under load
            </h2>
          </div>
          <p className="max-w-sm text-[13.5px] leading-relaxed text-[rgb(var(--text-muted))]">
            Four builds that show the range: payment-grade reliability, platform
            modernization, and the AI tooling now built into how the team ships.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => {
            const visual =
              project.id === "ledger-reliability" ? (
                <PipelineVisual />
              ) : project.id === "ai-engineering-platform" ? (
                <AIWorkflowVisual />
              ) : undefined;

            return <ProjectCard key={project.id} project={project} visual={visual} />;
          })}
        </div>
      </div>
    </section>
  );
}
