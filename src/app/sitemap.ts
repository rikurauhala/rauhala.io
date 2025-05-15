import type { MetadataRoute } from "next";

import { BASE_URL, PROJECTS_URL } from "~/constants";
import { projects } from "~/content/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  projects.forEach((project) => {
    paths.push({
      url: `${PROJECTS_URL}/${project.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  });

  return paths;
}
