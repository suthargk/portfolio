import Link from "next/link";
import { site } from "@/lib/site";
import { LogoMark } from "./icons";

const links = [
  { label: "GitHub", href: site.socials.github },
  { label: "LinkedIn", href: site.socials.linkedin },
  { label: "Twitter", href: site.socials.twitter },
  { label: "Email", href: `mailto:${site.socials.email}` },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-200 px-6 py-8 dark:border-ink-800">
      <div className="mx-auto flex max-w-3xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2 text-ink-500 dark:text-ink-400">
          <LogoMark className="h-4 w-4" />
          <span className="text-sm">
            © {new Date().getFullYear()} {site.name} — Frontend Engineer
          </span>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="text-sm text-ink-500 transition hover:text-ink-900 dark:text-ink-400 dark:hover:text-ink-50"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
