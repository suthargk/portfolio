import { DownloadIcon } from "./icons";
import { Reveal } from "./reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-14 border-t border-ink-200 px-6 py-14 dark:border-ink-800">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="text-xs font-medium tracking-wide text-ink-500 uppercase dark:text-ink-400">
            About
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-ink-700 dark:text-ink-300">
            <p>
              I build responsive, interactive user interfaces with React,
              working comfortably across the whole component lifecycle —
              state management, performance, and the accessibility details
              that make a product usable for everyone, not just the happy
              path.
            </p>
            <p>
              My focus is high-quality, well-tested enterprise UI: clean
              component architecture, styling systems that scale, and
              frontends wired up to REST and GraphQL APIs without
              unnecessary complexity. I work well in collaborative,
              git-based workflows and care about code that the next
              engineer can actually follow.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 rounded-md border border-ink-200 px-3.5 py-2 text-sm font-medium text-ink-700 transition hover:border-ink-300 hover:bg-ink-50 dark:border-ink-700 dark:text-ink-200 dark:hover:bg-ink-900"
          >
            Resume
            <DownloadIcon />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
