import { Flex, Grid } from "@radix-ui/themes";

import { TextContainer } from "~/components/TextContainer";
import { projects, projectsSectionContent } from "~/content/projects";
import { ProjectCard } from "./ProjectCard";

export const ProjectsSection = () => {
  return (
    <Flex direction="column" gap="4">
      <TextContainer content={projectsSectionContent} />
      <Grid columns={{ initial: "1", sm: "2" }} gap="4">
        {projects.map((project) => (
          <ProjectCard key={project.key} project={project} />
        ))}
      </Grid>
    </Flex>
  );
};
