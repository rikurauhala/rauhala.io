type Project = {
  id: string;
  name: string;
  image: string;
  description: string;
  content: string;
  lastModified: string;
};

export type ProjectDetails = Omit<Project, "content" | "lastModified">;

export type ProjectId = Pick<Project, "id">;

export type ProjectContent = Pick<Project, "name" | "content" | "lastModified">;
