import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-[rgb(var(--border))]">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-signal-amber">
              04 / Stack
            </p>
            <h2 className="mt-3 font-display text-2xl font-medium text-[rgb(var(--text))] sm:text-3xl">
              stack.manifest
            </h2>
          </div>
          <p className="max-w-sm text-[13.5px] leading-relaxed text-[rgb(var(--text-muted))]">
            Grouped the way I actually reach for these — by the layer of the
            system they belong to.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))]">
          {skillGroups.map((group, i) => (
            <div
              key={group.label}
              className={`grid gap-3 px-6 py-5 sm:grid-cols-[220px_1fr] sm:items-center sm:gap-6 sm:px-8 ${
                i !== skillGroups.length - 1 ? "border-b border-[rgb(var(--border))]" : ""
              }`}
            >
              <p className="font-mono text-[12px] uppercase tracking-[0.1em] text-[rgb(var(--text-muted))]">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--surface-2))] px-3 py-1 font-mono text-[12px] text-[rgb(var(--text))] transition-colors duration-300 hover:border-signal-amber hover:text-signal-amber"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
