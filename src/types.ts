type Project = {
  id: string;
  name: string;
  image: string;
  description: string;
  repository: string | null;
  content: string;
};

export type ProjectDetails = Omit<Project, "content" | "repository">;

export type ProjectId = Pick<Project, "id">;

export type ProjectContent = Omit<Project, "id" | "image" | "description">;
