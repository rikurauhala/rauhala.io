type Project = {
  id: string;
  name: string;
  image: string;
  description: string;
  content: string;
  lastModified: string;
  draft: boolean;
};

export type ProjectDetails = Omit<Project, "content" | "lastModified">;

export type ProjectId = Pick<Project, "id">;

export type ProjectMetadata = Pick<Project, "id" | "lastModified" | "draft">;

export type ProjectContent = Pick<Project, "name" | "content" | "lastModified">;
