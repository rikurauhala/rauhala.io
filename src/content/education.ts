import type { Degree } from "~/types";

export const degrees: readonly Degree[] = [
  {
    id: "msc-cs",
    name: "Master of Science in Computer Science",
    institution: "University of Helsinki",
    startTime: "2024-01",
    endTime: null,
    description: `
      Currently pursuing my master's degree in computer science in the Software
      study track. Writing my master's thesis on the topic of software
      maintainability metrics and static analysis.

      Aiming to graduate in the spring of 2026.
    `,
  },
  {
    id: "bsc-cs",
    name: "Bachelor of Science in Computer Science",
    institution: "University of Helsinki",
    startTime: "2020-09",
    endTime: "2024-01",
    description: `
      Completed my bachelor's degree in computer science. Other studies in
      mathematics, statistics, geoinformatics and history. I wrote my bachelor's
      thesis on the topic of breaking cryptographic hashes.

      During my studies I acted as a teaching assistant on four occasions, twice
      for the course "Software development methods" and twice for "Software
      engineering".
    `,
  },
];
