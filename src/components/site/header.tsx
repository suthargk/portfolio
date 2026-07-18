"use client";

import { useState } from "react";
import Link from "next/link";
import { LogoMark, MenuIcon, CloseIcon } from "./icons";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/blog" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-200 bg-white/90 backdrop-blur-sm dark:border-ink-800 dark:bg-ink-950/90">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 text-ink-900 dark:text-ink-50" aria-label="Gaurav Suthar — home">
          <LogoMark className="h-6 w-6" />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-600 transition hover:text-ink-900 dark:text-ink-400 dark:hover:text-ink-50"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="flex size-8 items-center justify-center rounded-md text-ink-600 md:hidden dark:text-ink-400"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-ink-200 bg-white px-6 py-3 md:hidden dark:border-ink-800 dark:bg-ink-950">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-2 py-2 text-sm text-ink-600 transition hover:bg-ink-100 hover:text-ink-900 dark:text-ink-400 dark:hover:bg-ink-800 dark:hover:text-ink-50"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
