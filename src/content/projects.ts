import { Project } from "~/types";

export const projectsSectionContent = `
  Over the years I have worked on a variety of projects in many different organisations.

  Here are some of my favourite projects and the lessons I have learned from them. Click the
  Read More button to read the full story behind each project!
` as const;

export const projects: Project[] = [
  {
    id: "oodikone",
    name: "Oodikone",
    image: "team-collaboration",
    description: "Going full stack, or how I became a professional",
    repository: "UniversityOfHelsinkiCS/oodikone",
  },
  {
    id: "berry-picker-tracker",
    name: "Berry Picker Tracker",
    image: "engineering-team",
    description: "Preventing berry pickers from getting lost in the forest",
    repository: "marjanpoimijat",
  },
  {
    id: "portfolio",
    name: "Portfolio",
    image: "programming",
    description: "How I kept outgrowing my portfolio",
    repository: "rikurauhala/rauhala-io",
  },
  {
    id: "teaching-assistant",
    name: "Teaching assistant",
    image: "educator",
    description: "What I learned from teaching others what I know",
    repository: null,
  },
] as const;
