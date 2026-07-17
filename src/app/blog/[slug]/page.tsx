import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllBlogPosts, getBlogPost, getBlogSlugs } from "@/lib/blog";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/site/json-ld";

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const slugs = getBlogSlugs();
  if (!slugs.includes(slug)) return {};

  const post = getBlogPost(slug);
  const url = `${site.url}/blog/${post.slug}`;

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url,
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      publishedTime: post.frontmatter.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.frontmatter.title,
      description: post.frontmatter.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const slugs = getBlogSlugs();
  if (!slugs.includes(slug)) notFound();

  const post = getBlogPost(slug);
  const allPosts = getAllBlogPosts();
  const index = allPosts.findIndex((p) => p.slug === post.slug);
  const prev = allPosts[index + 1];
  const next = allPosts[index - 1];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    datePublished: post.frontmatter.date,
    author: {
      "@type": "Person",
      name: site.name,
      url: site.url,
    },
    url: `${site.url}/blog/${post.slug}`,
  };

  return (
    <article className="mx-auto max-w-3xl">
      <JsonLd data={jsonLd} />

      <p className="text-xs text-ink-500 dark:text-ink-400">
        {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}{" "}
        · {post.readingTime}
      </p>
      <h1 className="mt-2 text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl dark:text-ink-50">
        {post.frontmatter.title}
      </h1>

      <div className="prose prose-ink prose-sm mt-8 max-w-none dark:prose-invert prose-a:text-accent-600 dark:prose-a:text-accent-400">
        <MDXRemote source={post.content} />
      </div>

      {(prev || next) && (
        <nav className="mt-12 flex flex-col gap-3 border-t border-ink-200 pt-6 sm:flex-row sm:justify-between dark:border-ink-800">
          {next ? (
            <a href={`/blog/${next.slug}`} className="text-sm text-ink-600 hover:text-accent-600 dark:text-ink-400 dark:hover:text-accent-400">
              ← {next.frontmatter.title}
            </a>
          ) : (
            <span />
          )}
          {prev && (
            <a href={`/blog/${prev.slug}`} className="text-sm text-ink-600 hover:text-accent-600 dark:text-ink-400 dark:hover:text-accent-400">
              {prev.frontmatter.title} →
            </a>
          )}
        </nav>
      )}
    </article>
  );
}
