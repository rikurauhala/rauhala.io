import type { MetadataRoute } from "next";

import { BASE_URL, BLOG_URL, PROJECTS_URL } from "~/constants";
import { getProjectMetadata } from "~/lib/projects";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjectMetadata();

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

  projects.forEach((project) => {
    paths.push({
      url: `${PROJECTS_URL}/${project.id}`,
      lastModified: project.lastModified
        ? new Date(project.lastModified)
        : new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  });

  return paths;
}
