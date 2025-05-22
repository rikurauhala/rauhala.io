import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { Project } from "~/types";

const projectsDir = path.join(process.cwd(), "src", "content", "projects");

export const getProjectIds = async (): Promise<{ id: string }[]> => {
  const projectFiles = fs.readdirSync(projectsDir);
  const projects = await Promise.all(
    projectFiles
      .filter((file) => file.endsWith(".md"))
      .map(async (file) => {
        return {
          id: file.replace(".md", ""),
        };
      })
  );
  return projects;
};

export const getProjectDetails = async (): Promise<
  Omit<Project, "content" | "repository">[]
> => {
  const projectFiles = fs.readdirSync(projectsDir);

  const projects = await Promise.all(
    projectFiles
      .filter((file) => file.endsWith(".md"))
      .map(async (file) => {
        const filePath = path.join(projectsDir, file);
        const fileContent = fs.readFileSync(filePath, "utf8");
        const parsed = matter(fileContent);

        return {
          id: file.replace(".md", ""),
          name: parsed.data.name,
          image: parsed.data.image,
          description: parsed.data.description,
        };
      })
  );

  return projects;
};

export const getProjectById = async (
  id: string
): Promise<Omit<Project, "id" | "image"> | null> => {
  const filePath = path.join(projectsDir, `${id}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const parsed = matter(fileContent);

  return {
    name: parsed.data.name,
    description: parsed.data.description,
    repository: parsed.data.repository,
    content: parsed.content,
  };
};
