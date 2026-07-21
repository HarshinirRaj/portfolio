export function EventFlowArt() {
  return (
    <svg viewBox="0 0 300 180" className="h-auto w-full max-w-[280px]" aria-hidden="true">
      <rect x="10" y="70" width="64" height="40" rx="8" className="fill-[rgb(var(--surface))] stroke-[rgb(var(--border))]" strokeWidth="1.5" />
      <text x="42" y="94" textAnchor="middle" className="fill-[rgb(var(--text))]" style={{ font: "9px var(--font-mono)" }}>
        producer
      </text>

      <path d="M74 90 H124" className="stroke-signal-green animate-flow" strokeWidth="2" fill="none" strokeDasharray="5 6" />

      <rect x="124" y="50" width="76" height="80" rx="10" className="fill-[rgb(var(--surface))] stroke-[rgb(var(--border))]" strokeWidth="1.5" />
      <rect x="134" y="62" width="56" height="12" rx="3" className="fill-signal-amber/20 stroke-signal-amber" strokeWidth="1" />
      <rect x="134" y="80" width="56" height="12" rx="3" className="fill-signal-amber/20 stroke-signal-amber" strokeWidth="1" />
      <rect x="134" y="98" width="56" height="12" rx="3" className="fill-signal-amber/20 stroke-signal-amber" strokeWidth="1" />
      <text x="162" y="140" textAnchor="middle" className="fill-[rgb(var(--text-muted))]" style={{ font: "8px var(--font-mono)" }}>
        queue · partitions
      </text>

      <path d="M200 90 H250" className="stroke-signal-cyan animate-flow" strokeWidth="2" fill="none" strokeDasharray="5 6" />

      <rect x="250" y="70" width="40" height="40" rx="8" className="fill-[rgb(var(--surface))] stroke-[rgb(var(--border))]" strokeWidth="1.5" />
      <circle cx="270" cy="86" r="3" className="fill-signal-green animate-blink" />
      <text x="270" y="100" textAnchor="middle" className="fill-[rgb(var(--text))]" style={{ font: "8px var(--font-mono)" }}>
        consumer
      </text>
    </svg>
  );
}

export function AIConsoleArt() {
  return (
    <svg viewBox="0 0 300 180" className="h-auto w-full max-w-[280px]" aria-hidden="true">
      <rect x="10" y="14" width="280" height="152" rx="12" className="fill-[rgb(var(--surface))] stroke-[rgb(var(--border))]" strokeWidth="1.5" />
      <line x1="10" y1="42" x2="290" y2="42" className="stroke-[rgb(var(--border))]" strokeWidth="1.5" />
      <circle cx="26" cy="28" r="4" className="fill-signal-red/70" />
      <circle cx="40" cy="28" r="4" className="fill-signal-amber/70" />
      <circle cx="54" cy="28" r="4" className="fill-signal-green/70" />

      <rect x="26" y="58" width="120" height="8" rx="4" className="fill-[rgb(var(--text-muted))]/40" />
      <rect x="26" y="74" width="180" height="8" rx="4" className="fill-[rgb(var(--text-muted))]/25" />
      <rect x="26" y="90" width="90" height="8" rx="4" className="fill-[rgb(var(--text-muted))]/25" />

      <rect x="26" y="112" width="200" height="20" rx="5" className="fill-signal-cyan/12 stroke-signal-cyan" strokeWidth="1" />
      <rect x="34" y="119" width="140" height="6" rx="3" className="fill-signal-cyan/70" />
      <rect x="234" y="115" width="3" height="14" className="fill-signal-cyan animate-blink" />

      <text x="26" y="152" className="fill-[rgb(var(--text-muted))]" style={{ font: "8px var(--font-mono)" }}>
        agent · reviewing diff
      </text>
    </svg>
  );
}

const barColors = [
  "fill-signal-green/70",
  "fill-signal-amber/70",
  "fill-signal-cyan/70",
  "fill-signal-green/70",
  "fill-signal-amber/70",
  "fill-signal-cyan/70",
];

export function ObservabilityArt() {
  const bars = [42, 68, 30, 88, 54, 74];
  return (
    <svg viewBox="0 0 300 180" className="h-auto w-full max-w-[280px]" aria-hidden="true">
      <rect x="10" y="14" width="280" height="152" rx="12" className="fill-[rgb(var(--surface))] stroke-[rgb(var(--border))]" strokeWidth="1.5" />
      <circle cx="266" cy="32" r="4" className="fill-signal-green animate-blink" />

      <line x1="30" y1="140" x2="270" y2="140" className="stroke-[rgb(var(--border))]" strokeWidth="1.5" />

      {bars.map((h, i) => (
        <rect
          key={i}
          x={40 + i * 38}
          y={140 - h}
          width="20"
          height={h}
          rx="3"
          className={barColors[i]}
        />
      ))}

      <path
        d="M40 100 L78 70 L116 118 L154 56 L192 92 L230 64 L268 84"
        className="stroke-[rgb(var(--text-muted))]"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="3 4"
      />

      <text x="30" y="158" className="fill-[rgb(var(--text-muted))]" style={{ font: "8px var(--font-mono)" }}>
        p99 · error rate · throughput
      </text>
    </svg>
  );
}

export function MeshArt() {
  const nodes = [
    { x: 150, y: 30 },
    { x: 60, y: 80 },
    { x: 240, y: 80 },
    { x: 90, y: 150 },
    { x: 210, y: 150 },
  ];
  return (
    <svg viewBox="0 0 300 180" className="h-auto w-full max-w-[280px]" aria-hidden="true">
      <line x1="150" y1="30" x2="60" y2="80" className="stroke-[rgb(var(--border))]" strokeWidth="1.5" />
      <line x1="150" y1="30" x2="240" y2="80" className="stroke-[rgb(var(--border))]" strokeWidth="1.5" />
      <line x1="60" y1="80" x2="90" y2="150" className="stroke-[rgb(var(--border))]" strokeWidth="1.5" />
      <line x1="240" y1="80" x2="210" y2="150" className="stroke-[rgb(var(--border))]" strokeWidth="1.5" />
      <line x1="90" y1="150" x2="210" y2="150" className="stroke-[rgb(var(--border))]" strokeWidth="1.5" />
      <line x1="60" y1="80" x2="240" y2="80" className="stroke-[rgb(var(--border))]" strokeWidth="1.5" strokeDasharray="3 5" />

      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={i === 0 ? 14 : 10}
          className={
            i === 0
              ? "fill-signal-amber/20 stroke-signal-amber"
              : i % 2 === 0
              ? "fill-signal-cyan/15 stroke-signal-cyan animate-blink"
              : "fill-[rgb(var(--surface))] stroke-[rgb(var(--border))]"
          }
          strokeWidth="1.5"
        />
      ))}
      <text x="150" y="34" textAnchor="middle" className="fill-signal-amber" style={{ font: "8px var(--font-mono)" }}>
        gw
      </text>
    </svg>
  );
}
