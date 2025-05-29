type Project = {
  id: string;
  name: string;
  image: string;
  description: string;
  content: string;
};

export type ProjectDetails = Omit<Project, "content">;

export type ProjectId = Pick<Project, "id">;

export type ProjectContent = Omit<Project, "id" | "image" | "description">;
