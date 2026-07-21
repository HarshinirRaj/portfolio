"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#gallery", label: "Gallery" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgb(var(--border))] text-[rgb(var(--text))]"
      >
        {open ? <X size={16} strokeWidth={1.75} /> : <Menu size={16} strokeWidth={1.75} />}
      </button>

      {open && (
        <div className="absolute left-0 top-16 z-40 w-full border-b border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-6 py-4">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 font-mono text-[13px] uppercase tracking-[0.1em] text-[rgb(var(--text-muted))] transition-colors duration-300 hover:bg-[rgb(var(--surface-2))] hover:text-signal-amber"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
