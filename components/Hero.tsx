import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { profile, stats } from "@/lib/data";

const basePath = process.env.GITHUB_ACTIONS === "true" ? "/harshini-portfolio" : "";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[rgb(var(--border))]"
    >
      <div
        className="absolute inset-0 bg-grid bg-grid-cell opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_10%,transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 pb-20 pt-16 md:grid-cols-[1.2fr_1fr] md:items-center md:pb-28 md:pt-24">
        <div className="animate-rise">
          <div className="mb-6 flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-[rgb(var(--text-muted))]">
            <MapPin size={13} strokeWidth={1.75} />
            {profile.location}
            <span className="text-[rgb(var(--border))]">/</span>
            <span className="text-signal-amber">available for select roles</span>
          </div>

          <h1 className="font-display text-[2.4rem] font-medium leading-[1.08] tracking-tight text-[rgb(var(--text))] sm:text-[3.1rem]">
            {profile.tagline}
          </h1>

          <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-[rgb(var(--text-muted))]">
            {profile.subTagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-[rgb(var(--text))] px-5 py-2.5 font-mono text-[13px] text-[rgb(var(--bg))] transition-transform duration-300 ease-signature hover:-translate-y-0.5"
            >
              View case studies
              <ArrowUpRight
                size={15}
                strokeWidth={2}
                className="transition-transform duration-300 ease-signature group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] px-5 py-2.5 font-mono text-[13px] text-[rgb(var(--text))] transition-colors duration-300 hover:border-signal-amber hover:text-signal-amber"
            >
              Get in touch
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-7 border-t border-[rgb(var(--border))] pt-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl text-[rgb(var(--text))] font-tabular">
                  {stat.value}
                </dd>
                <dd className="mt-1 font-mono text-[11px] leading-snug text-[rgb(var(--text-muted))]">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] shadow-[0_1px_0_0_rgb(var(--border))]">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={`${basePath}/profile.jpg`}
                alt="Harshini Gadige"
                fill
                priority
                sizes="(min-width: 768px) 384px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex items-center justify-between border-t border-[rgb(var(--border))] px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-[rgb(var(--text-muted))]">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-signal-green animate-blink" />
                harshini.gadige
              </span>
              <span>{profile.location.split(",")[0]}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
