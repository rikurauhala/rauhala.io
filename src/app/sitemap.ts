import type { MetadataRoute } from "next";

import { BASE_URL, BLOG_URL } from "~/constants";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const paths: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: BLOG_URL,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0,
    },
  ];

  return paths;
}
