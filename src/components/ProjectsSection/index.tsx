import { Flex, Grid } from "@radix-ui/themes";

import { TextContainer } from "~/components/TextContainer";
import { projectsSectionContent } from "~/content/projects";
import { ProjectCard } from "./ProjectCard";
import { getProjectDetails } from "~/utils/projects";

export const ProjectsSection = async () => {
  const projects = await getProjectDetails();

  return (
    <Flex direction="column" gap="4">
      <TextContainer content={projectsSectionContent} />
      <Grid columns={{ initial: "1", sm: "2" }} gap="4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Grid>
    </Flex>
  );
};
