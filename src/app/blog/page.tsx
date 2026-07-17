import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog";
import { externalPosts } from "@/lib/data";
import { ArrowUpRight } from "@/components/site/icons";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing on React, frontend engineering, and building for the web.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-2xl font-semibold tracking-tight text-ink-900 dark:text-ink-50">
        Blog
      </h1>
      <p className="mt-2 text-ink-600 dark:text-ink-400">
        Notes on React, frontend engineering, and building for the web.
      </p>

      <ul className="mt-8 divide-y divide-ink-200 dark:divide-ink-800">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group flex flex-col gap-1 py-4">
              <span className="text-xs text-ink-500 dark:text-ink-400">
                {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                · {post.readingTime}
              </span>
              <span className="text-base font-medium text-ink-900 group-hover:text-accent-600 dark:text-ink-50 dark:group-hover:text-accent-400">
                {post.frontmatter.title}
              </span>
              <span className="text-sm text-ink-600 dark:text-ink-400">
                {post.frontmatter.description}
              </span>
            </Link>
          </li>
        ))}

        {externalPosts.map((post) => (
          <li key={post.url}>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-1 py-4"
            >
              <span className="text-xs text-ink-500 dark:text-ink-400">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                · {post.source}
              </span>
              <span className="flex items-center gap-1.5 text-base font-medium text-ink-900 group-hover:text-accent-600 dark:text-ink-50 dark:group-hover:text-accent-400">
                {post.title}
                <ArrowUpRight className="opacity-0 transition group-hover:opacity-100" />
              </span>
              <span className="text-sm text-ink-600 dark:text-ink-400">
                {post.description}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
