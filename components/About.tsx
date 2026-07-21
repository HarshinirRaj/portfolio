import { about } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="border-b border-[rgb(var(--border))]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[0.9fr_1.5fr] md:gap-16 md:py-28">
        <div>
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-signal-amber">
            00 / About
          </p>
          <h2 className="mt-3 font-display text-2xl font-medium text-[rgb(var(--text))] sm:text-3xl">
            Correctness at scale,
            <br />
            shipped faster.
          </h2>
        </div>

        <div>
          <div className="space-y-5 text-[15px] leading-relaxed text-[rgb(var(--text-muted))]">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-5 border-t border-[rgb(var(--border))] pt-8 sm:grid-cols-2">
            {about.facts.map((fact) => (
              <div key={fact.label} className="flex items-baseline justify-between gap-4 sm:block">
                <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-[rgb(var(--text-muted))]">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-[14px] text-[rgb(var(--text))]">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
