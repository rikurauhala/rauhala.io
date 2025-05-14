import { Project } from "~/types";

export const projectsSectionContent = `
  Over the years I have worked on a variety of projects. Here are some of the most notable ones.
` as const;

export const projects: Project[] = [
  {
    key: "oodikone",
    name: "Oodikone",
    image: "team-collaboration",
    description: "Going full stack, or how I became a professional",
    repository: "UniversityOfHelsinkiCS/oodikone",
  },
  {
    key: "berry-picker-tracker",
    name: "Berry Picker Tracker",
    image: "engineering-team",
    description: "Preventing berry pickers from getting lost in the forest",
    repository: "marjanpoimijat",
  },
  {
    key: "portfolio",
    name: "Portfolio",
    image: "programming",
    description: "How I kept outgrowing my portfolio",
    repository: "rikurauhala/rauhala-io",
  },
  {
    key: "course-assistant-duty",
    name: "Course assistant duty",
    image: "educator",
    description: "What I learned from teaching others what I know",
    repository: null,
  },
] as const;
