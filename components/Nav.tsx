import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

const links = [
  { href: "#work", label: "Work" },
  { href: "#gallery", label: "Gallery" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgb(var(--border))] bg-[rgb(var(--bg))]/85 backdrop-blur">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-mono text-[13px] tracking-tight text-[rgb(var(--text))]"
        >
          <span className="text-signal-amber">$</span> harshini.gadige
          <span className="animate-blink text-signal-amber">_</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[12px] uppercase tracking-[0.12em] text-[rgb(var(--text-muted))] transition-colors duration-300 hover:text-signal-amber"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-[rgb(var(--border))] px-4 py-1.5 font-mono text-[12px] uppercase tracking-[0.1em] text-[rgb(var(--text))] transition-colors duration-300 hover:border-signal-amber hover:text-signal-amber sm:block"
          >
            Let&apos;s talk
          </a>
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
