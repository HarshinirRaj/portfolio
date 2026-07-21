const nodes = [
  { label: "event producer", sub: "service" },
  { label: "outbox table", sub: "transactional write" },
  { label: "event topic", sub: "kafka · 3 partitions" },
  { label: "idempotency check", sub: "4 consumer services" },
  { label: "delivered", sub: "at-least-once, exactly-applied" },
];

export default function PipelineVisual() {
  return (
    <div
      className="relative w-full max-w-sm rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-5 shadow-[0_1px_0_0_rgb(var(--border))] sm:p-6"
      aria-hidden="true"
    >
      <div className="mb-5 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.12em] text-[rgb(var(--text-muted))]">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-signal-green animate-blink" />
          event pipeline
        </span>
        <span>zero-loss</span>
      </div>

      <div className="flex flex-col">
        {nodes.map((node, i) => (
          <div key={node.label}>
            <div className="flex items-center gap-3 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface-2))] px-3.5 py-2.5">
              <span className="font-mono text-[10px] text-[rgb(var(--text-muted))]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <p className="truncate font-mono text-[12.5px] text-[rgb(var(--text))]">
                  {node.label}
                </p>
                <p className="truncate font-mono text-[10.5px] text-[rgb(var(--text-muted))]">
                  {node.sub}
                </p>
              </div>
              {i === nodes.length - 1 && (
                <span className="ml-auto shrink-0 rounded-full bg-signal-green/15 px-2 py-0.5 font-mono text-[10px] text-signal-green">
                  ✓
                </span>
              )}
            </div>

            {i < nodes.length - 1 && (
              <div className="relative ml-6 h-6 w-px bg-[rgb(var(--border))]">
                <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-signal-amber animate-drop" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-[rgb(var(--border))] px-3 py-2.5">
          <p className="font-mono text-lg text-signal-green font-tabular">0</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-[rgb(var(--text-muted))]">
            events lost
          </p>
        </div>
        <div className="rounded-lg border border-[rgb(var(--border))] px-3 py-2.5">
          <p className="font-mono text-lg text-signal-cyan font-tabular">10M+</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-[rgb(var(--text-muted))]">
            accounts safeguarded
          </p>
        </div>
      </div>
    </div>
  );
}
