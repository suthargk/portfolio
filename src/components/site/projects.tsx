import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import { ArrowUpRight } from "./icons";
import { Reveal } from "./reveal";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-14 border-t border-ink-200 px-6 py-14 dark:border-ink-800">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="text-xs font-medium tracking-wide text-ink-500 uppercase dark:text-ink-400">
            Projects
          </h2>
        </Reveal>

        <div className="mt-4 space-y-4">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.05}>
              <Link
                href={project.href}
                target={project.external ? "_blank" : undefined}
                rel={project.external ? "noopener noreferrer" : undefined}
                className="group flex flex-col overflow-hidden rounded-lg border border-ink-200 transition hover:border-ink-300 sm:flex-row dark:border-ink-800 dark:hover:border-ink-700"
              >
                <div className="relative aspect-video shrink-0 overflow-hidden border-b border-ink-200 bg-ink-100 sm:aspect-auto sm:w-72 sm:border-r sm:border-b-0 dark:border-ink-800 dark:bg-ink-900">
                  <Image
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    fill
                    sizes="(min-width: 640px) 288px, 100vw"
                    className="object-cover"
                  />
                  {project.status === "coming-soon" && (
                    <span className="absolute top-2 right-2 rounded-md bg-ink-950/80 px-2 py-0.5 text-xs font-medium text-white">
                      Coming soon
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col justify-center gap-1.5 p-5">
                  <span className="flex items-center gap-1.5 text-base font-medium text-ink-900 group-hover:text-accent-600 dark:text-ink-50 dark:group-hover:text-accent-400">
                    {project.name}
                    <ArrowUpRight className="opacity-0 transition group-hover:opacity-100" />
                  </span>
                  <p className="text-sm text-ink-600 dark:text-ink-400">
                    {project.description}
                  </p>
                  <div className="mt-1 flex flex-wrap gap-x-2 gap-y-1 text-xs text-ink-500 dark:text-ink-400">
                    {project.tags.map((tag, idx) => (
                      <span key={tag}>
                        {tag}
                        {idx < project.tags.length - 1 ? (
                          <span aria-hidden="true" className="ml-2">·</span>
                        ) : null}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
