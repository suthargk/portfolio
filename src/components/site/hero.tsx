import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "./icons";
import { NewBadge } from "./new-badge";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="px-6 pt-28 pb-16 md:pt-32">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/calendario"
          className="group mb-5 inline-flex items-center gap-2 rounded-full border border-ink-200 py-1 pr-3 pl-1 text-sm transition hover:border-ink-300 dark:border-ink-700 dark:hover:border-ink-600"
        >
          <NewBadge />
          <span className="text-ink-700 dark:text-ink-200">
            Calendario — Google &amp; Outlook, one popup
          </span>
          <ChevronRight className="text-ink-400 transition group-hover:translate-x-0.5 dark:text-ink-500" />
        </Link>

        <p className="text-sm text-ink-500 dark:text-ink-400">Hi, I&apos;m Gaurav Suthar</p>

        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl dark:text-ink-50">
          A frontend engineer who builds fast, accessible React products.
        </h1>

        <p className="mt-4 max-w-xl text-base text-ink-600 dark:text-ink-400">
          I specialize in React and TypeScript — turning complex product
          requirements into interfaces that feel simple, load fast, and
          hold up under real usage.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="rounded-md bg-ink-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-ink-700 dark:bg-white dark:text-ink-900 dark:hover:bg-ink-100"
          >
            See my work
          </a>
          <a
            href="#about"
            className="rounded-md border border-ink-200 px-4 py-2 text-sm font-medium text-ink-700 transition hover:border-ink-300 hover:bg-ink-50 dark:border-ink-700 dark:text-ink-200 dark:hover:bg-ink-900"
          >
            About me
          </a>
          <Link
            href={site.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-ink-500 transition hover:text-accent-600 dark:text-ink-400 dark:hover:text-accent-400"
          >
            @suthargk
            <ArrowUpRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
