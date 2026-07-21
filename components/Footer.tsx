import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-[rgb(var(--border))]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 font-mono text-[11.5px] text-[rgb(var(--text-muted))] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js &amp; Tailwind.</p>
        <p className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-signal-green animate-blink" />
          status: open to opportunities
        </p>
      </div>
    </footer>
  );
}
