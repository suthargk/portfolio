import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog";
import { externalPosts } from "@/lib/data";
import { ArrowUpRight } from "./icons";
import { Reveal } from "./reveal";

export function BlogTeaser() {
  const posts = getAllBlogPosts();

  return (
    <section id="blog" className="scroll-mt-14 border-t border-ink-200 px-6 py-14 dark:border-ink-800">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="flex items-baseline justify-between">
            <h2 className="text-xs font-medium tracking-wide text-ink-500 uppercase dark:text-ink-400">
              Writing
            </h2>
            <Link
              href="/blog"
              className="text-sm text-ink-500 hover:text-ink-900 dark:text-ink-400 dark:hover:text-ink-50"
            >
              View all
            </Link>
          </div>
        </Reveal>

        <ul className="mt-4 divide-y divide-ink-200 dark:divide-ink-800">
          {posts.map((post, i) => (
            <li key={post.slug}>
              <Reveal delay={i * 0.05}>
                <Link href={`/blog/${post.slug}`} className="group flex items-center justify-between gap-4 py-3.5">
                  <span>
                    <span className="text-sm font-medium text-ink-900 group-hover:text-accent-600 dark:text-ink-50 dark:group-hover:text-accent-400">
                      {post.frontmatter.title}
                    </span>
                    <span className="mt-0.5 block text-sm text-ink-500 dark:text-ink-400">
                      {post.frontmatter.description}
                    </span>
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}

          {externalPosts.map((post, i) => (
            <li key={post.url}>
              <Reveal delay={(posts.length + i) * 0.05}>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 py-3.5"
                >
                  <span>
                    <span className="flex items-center gap-1.5 text-sm font-medium text-ink-900 group-hover:text-accent-600 dark:text-ink-50 dark:group-hover:text-accent-400">
                      {post.title}
                      <ArrowUpRight className="opacity-0 transition group-hover:opacity-100" />
                    </span>
                    <span className="mt-0.5 block text-sm text-ink-500 dark:text-ink-400">
                      Also on {post.source}
                    </span>
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
