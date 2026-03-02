import type { Position } from "~/types";

export const positions: readonly Position[] = [
  {
    id: "taito-united",
    title: "Software Developer",
    organisation: "Taito United",
    startTime: "2025-06",
    endTime: null,
    description: `
      Currently employed as a consultant at Taito United, building full stack
      web applications for various clients.

      In addition to collaborative software engineering, I have represented the
      company at several career events.
    `,
  },
  {
    id: "agentformers",
    title: "Software Developer",
    organisation: "University of Helsinki",
    startTime: "2025-05",
    endTime: "2025-07",
    description: `
      Participated in a new research to business project AgentFormers as a
      software developer.

      As a founding engineer, my duties included selecting the most suitable
      technologies for the project, designing the overall software architecture
      and database schemas, setting up the initial web server and client,
      configuring and deploying the application, building a CI/CD pipeline and
      automating deployments. I also implemented an authentication system with
      university account single sign-on.

      Due to my brief stay, I also prepared to hand over the code base by
      writing extensive technical documentation and briefing new team members.
    `,
  },
  {
    id: "toska",
    title: "Software Developer",
    organisation: "University of Helsinki",
    startTime: "2024-01",
    endTime: "2025-04",
    description: `
      Worked as a software developer in the Toska software development team,
      developing an application called Oodikone for analysing university data.

      My main contributions to Oodikone include a complete overhaul of the user
      interface and improving the overall UI/UX. I also made significant
      improvements to the application's code base by improving maintainability
      and participating in the effort to introduce TypeScript to the project.

      By leading retrospectives and regular team meetings, I had a significant
      role in improving the team's processes and ways of working.
    `,
  },
];
