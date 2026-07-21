import { experience, education, certifications } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-[rgb(var(--border))]">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-signal-amber">
          03 / Experience
        </p>
        <h2 className="mt-3 font-display text-2xl font-medium text-[rgb(var(--text))] sm:text-3xl">
          Seven years, four teams, one thread
        </h2>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.6fr_1fr]">
          <ol className="relative space-y-10 border-l border-[rgb(var(--border))] pl-8">
            {experience.map((job) => (
              <li key={job.company} className="relative">
                <span
                  className={`absolute -left-[calc(2rem+4.5px)] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[rgb(var(--bg))] ${
                    job.current ? "bg-signal-green" : "bg-[rgb(var(--text-muted))]"
                  }`}
                />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-lg font-medium text-[rgb(var(--text))]">
                    {job.role} <span className="text-[rgb(var(--text-muted))]">· {job.company}</span>
                  </h3>
                  <span className="font-mono text-[11.5px] text-[rgb(var(--text-muted))]">
                    {job.period}
                  </span>
                </div>
                <p className="mt-0.5 font-mono text-[11.5px] text-[rgb(var(--text-muted))]">
                  {job.location}
                </p>

                <ul className="mt-4 space-y-2">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2.5 text-[14px] leading-relaxed text-[rgb(var(--text-muted))]"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[rgb(var(--text-muted))]" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-[rgb(var(--surface-2))] px-2.5 py-1 font-mono text-[10.5px] text-[rgb(var(--text-muted))]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ol>

          <div className="space-y-10">
            <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[rgb(var(--text-muted))]">
                Education
              </p>
              <div className="mt-4 space-y-4">
                {education.map((ed) => (
                  <div key={ed.school}>
                    <p className="text-[14px] text-[rgb(var(--text))]">{ed.degree}</p>
                    <p className="font-mono text-[11.5px] text-[rgb(var(--text-muted))]">
                      {ed.school} · {ed.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[rgb(var(--text-muted))]">
                Certifications
              </p>
              <ul className="mt-4 space-y-2.5">
                {certifications.map((cert) => (
                  <li
                    key={cert}
                    className="flex items-start gap-2.5 text-[13.5px] leading-snug text-[rgb(var(--text-muted))]"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal-amber" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
