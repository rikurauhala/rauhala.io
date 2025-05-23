import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { ProjectContent, ProjectDetails, ProjectId } from "~/types";

const projectsDir = path.join(process.cwd(), "src", "content", "projects");

export const getProjectIds = async (): Promise<ProjectId[]> => {
  const projectFiles = fs.readdirSync(projectsDir);
  const projects = await Promise.all(
    projectFiles.map(async (file) => {
      return {
        id: file.replace(".md", ""),
      };
    })
  );
  return projects;
};

export const getProjectDetails = async (): Promise<ProjectDetails[]> => {
  const projectFiles = fs.readdirSync(projectsDir);

  const projects = await Promise.all(
    projectFiles.map(async (file) => {
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
): Promise<ProjectContent | null> => {
  const filePath = path.join(projectsDir, `${id}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const parsed = matter(fileContent);

  return {
    name: parsed.data.name,
    repository: parsed.data.repository,
    content: parsed.content,
  };
};
