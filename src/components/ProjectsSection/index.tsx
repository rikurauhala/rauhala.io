import { Flex } from "@radix-ui/themes";

import { TextContainer } from "~/components/TextContainer";
import { projects, projectsSectionContent } from "~/content/projects";
import { ProjectCard } from "./ProjectCard";

export const ProjectsSection = () => {
  return (
    <Flex direction="column" gap="4">
      <TextContainer content={projectsSectionContent} />
      {projects.map((project) => (
        <ProjectCard key={project.key} project={project} />
      ))}
    </Flex>
  );
};
