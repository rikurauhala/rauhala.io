import { Project } from "~/types";

export const projectsSectionContent = `
  Over the years I have worked on a variety of projects. Here are some of the most notable ones.
` as const;

export const projects: Project[] = [
  {
    key: "oodikone",
    name: "Oodikone",
    duration: "Jan 2024 - Apr 2025",
    description: "A full stack web application for analysing university data",
    technologies: [
      "javascript",
      "typescript",
      "node",
      "postgres",
      "docker",
      "cypress",
      "react",
      "semantic",
      "material",
    ],
    repository: "UniversityOfHelsinkiCS/oodikone",
  },
  {
    key: "berry-picker-tracker",
    name: "Berry Picker Tracker",
    duration: "Jan 2023 - May 2023",
    description:
      "A mobile application for preventing berry pickers from getting lost",
    technologies: [
      "python",
      "postgres",
      "docker",
      "typescript",
      "react-native",
    ],
    repository: "marjanpoimijat",
  },
] as const;
