import { ArrowUpRight, Mail, Phone, Linkedin } from "lucide-react";
import { profile } from "@/lib/data";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[^\d+]/g, "")}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/harshini-gpsedev",
    href: profile.linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-grid bg-grid-cell opacity-60 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_100%,black_10%,transparent_70%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-signal-amber">
          05 / Contact
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium leading-tight text-[rgb(var(--text))] sm:text-4xl">
          Open to senior backend and AI-augmented engineering roles.
        </h2>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[rgb(var(--text-muted))]">
          If your team is building systems where correctness matters and
          you&apos;re curious about putting AI into the actual delivery
          pipeline, I&apos;d like to hear about it.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.label === "LinkedIn" ? "_blank" : undefined}
              rel={channel.label === "LinkedIn" ? "noreferrer" : undefined}
              className="group flex items-center justify-between gap-3 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-5 py-4 transition-colors duration-300 ease-signature hover:border-signal-amber/50"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgb(var(--surface-2))] text-[rgb(var(--text-muted))] transition-colors duration-300 group-hover:text-signal-amber">
                  <channel.icon size={15} strokeWidth={1.75} />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-[rgb(var(--text-muted))]">
                    {channel.label}
                  </p>
                  <p className="truncate text-[13.5px] text-[rgb(var(--text))]">{channel.value}</p>
                </div>
              </div>
              <ArrowUpRight
                size={15}
                strokeWidth={2}
                className="shrink-0 text-[rgb(var(--text-muted))] transition-transform duration-300 ease-signature group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal-amber"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
