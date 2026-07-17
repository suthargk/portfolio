import Image from "next/image";
import { workExperience } from "@/lib/data";
import { ArrowUpRight } from "./icons";
import { Reveal } from "./reveal";

export function Work() {
  return (
    <section id="work" className="scroll-mt-14 border-t border-ink-200 px-6 py-14 dark:border-ink-800">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="text-xs font-medium tracking-wide text-ink-500 uppercase dark:text-ink-400">
            Experience
          </h2>
        </Reveal>

        <ul className="mt-4 divide-y divide-ink-200 dark:divide-ink-800">
          {workExperience.map((job, i) => (
            <li key={job.id}>
              <Reveal delay={i * 0.05}>
                <a
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 py-3.5"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-md border border-ink-200 bg-white dark:border-ink-700">
                    <Image
                      src={job.logo}
                      alt={`${job.company} logo`}
                      width={36}
                      height={36}
                      className="size-full object-cover"
                    />
                  </span>
                  <span className="flex-1">
                    <span className="flex items-center gap-1.5 text-sm font-medium text-ink-900 group-hover:text-accent-600 dark:text-ink-50 dark:group-hover:text-accent-400">
                      {job.company}
                      <ArrowUpRight className="opacity-0 transition group-hover:opacity-100" />
                    </span>
                    <span className="block text-sm text-ink-500 dark:text-ink-400">
                      {job.position}
                    </span>
                  </span>
                  <span className="text-xs text-ink-500 dark:text-ink-400">
                    {job.duration}
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
