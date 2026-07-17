import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
};

export type BlogPost = {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
  readingTime: string;
};

export function getBlogSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getBlogPost(slug: string): BlogPost {
  const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.mdx`), "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    frontmatter: data as BlogFrontmatter,
    content,
    readingTime: readingTime(content).text,
  };
}

export function getAllBlogPosts(): BlogPost[] {
  return getBlogSlugs()
    .map(getBlogPost)
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}
