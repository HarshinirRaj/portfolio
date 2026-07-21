"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { EventFlowArt, AIConsoleArt, ObservabilityArt, MeshArt } from "./gallery/Illustrations";

const AUTOPLAY_MS = 5500;

const slides = [
  {
    eyebrow: "EVENT-DRIVEN SYSTEMS",
    title: "Producer, queue, consumer — nothing dropped",
    caption:
      "Transactional outbox writes and idempotent consumers keep every event exactly-once, even under retries and regional failover.",
    accent: "text-signal-green",
    Art: EventFlowArt,
  },
  {
    eyebrow: "AI-AUGMENTED ENGINEERING",
    title: "Agents that read the architecture before they touch it",
    caption:
      "Prompt libraries and MCP-connected tooling turn Claude Code and Cursor into reviewers who already know the codebase.",
    accent: "text-signal-amber",
    Art: AIConsoleArt,
  },
  {
    eyebrow: "OBSERVABILITY",
    title: "Dashboards and runbooks instead of tribal knowledge",
    caption:
      "Splunk, Prometheus, and Wavefront dashboards paired with 30+ incident runbooks for the platform's common failure modes.",
    accent: "text-signal-cyan",
    Art: ObservabilityArt,
  },
  {
    eyebrow: "DISTRIBUTED ARCHITECTURE",
    title: "Monoliths decomposed into resilient microservices",
    caption:
      "Independently deployable services wired together with retry-aware messaging and zero-downtime cutovers.",
    accent: "text-signal-amber",
    Art: MeshArt,
  },
];

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function startTimer() {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
  }

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  function goTo(next: number) {
    setIndex(((next % slides.length) + slides.length) % slides.length);
    startTimer();
  }

  const slide = slides[index];
  const Art = slide.Art;

  return (
    <section id="gallery" className="border-b border-[rgb(var(--border))]">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-signal-amber">
              02 / Gallery
            </p>
            <h2 className="mt-3 font-display text-2xl font-medium text-[rgb(var(--text))] sm:text-3xl">
              Snapshots from the system
            </h2>
          </div>
          <p className="max-w-sm text-[13.5px] leading-relaxed text-[rgb(var(--text-muted))]">
            A quick tour of the layers I work in — event pipelines, AI
            tooling, observability, and the services underneath.
          </p>
        </div>

        <div
          className="relative overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] [perspective:1600px]"
          onMouseEnter={() => timerRef.current && clearInterval(timerRef.current)}
          onMouseLeave={startTimer}
        >
          <div
            key={index}
            className="grid animate-page-flip sm:grid-cols-[1.1fr_1fr]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="flex flex-col justify-center gap-4 px-7 py-10 sm:px-10">
              <p className={`font-mono text-[11px] uppercase tracking-[0.14em] ${slide.accent}`}>
                {slide.eyebrow}
              </p>
              <h3 className="font-display text-xl font-medium text-[rgb(var(--text))] sm:text-2xl">
                {slide.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-[rgb(var(--text-muted))]">
                {slide.caption}
              </p>
            </div>
            <div className="flex items-center justify-center border-t border-[rgb(var(--border))] bg-[rgb(var(--surface-2))] p-8 sm:border-l sm:border-t-0">
              <Art />
            </div>
          </div>

          <button
            onClick={() => goTo(index - 1)}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--bg))]/80 text-[rgb(var(--text))] backdrop-blur transition-colors duration-300 hover:border-signal-amber hover:text-signal-amber"
          >
            <ChevronLeft size={16} strokeWidth={1.75} />
          </button>
          <button
            onClick={() => goTo(index + 1)}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--bg))]/80 text-[rgb(var(--text))] backdrop-blur transition-colors duration-300 hover:border-signal-amber hover:text-signal-amber"
          >
            <ChevronRight size={16} strokeWidth={1.75} />
          </button>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.title}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-signal-amber" : "w-1.5 bg-[rgb(var(--border))]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
