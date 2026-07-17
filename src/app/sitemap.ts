import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getBlogSlugs } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${site.url}/calendario`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/calendario/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${site.url}/calendario/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = getBlogSlugs().map((slug) => ({
    url: `${site.url}/blog/${slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
